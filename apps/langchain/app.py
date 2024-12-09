
#  Copyright (c) ATA_TLU.

#  This source code is licensed under the GPL V3 license found in the
#  LICENSE file in the root directory of this source tree.

 
# app.py

import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferWindowMemory
from custom_llm import CustomLLM  
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")  
CUSTOM_BASE_URL = os.getenv("CUSTOM_BASE_URL")  

app = FastAPI()

class Question(BaseModel):
    session_id: str 
    question: str

memory_store = {}

def get_memory(session_id: str) -> ConversationBufferWindowMemory:
    if session_id not in memory_store:
        memory_store[session_id] = ConversationBufferWindowMemory(k=5)  
    return memory_store[session_id]

# Define the prompt template
prompt = PromptTemplate(
    input_variables=["history", "question"],
    template="""
    Bạn là một trợ lý hữu ích. Dưới đây là lịch sử cuộc trò chuyện:
    {history}
    
    Câu hỏi: {question}
    Trả lời:
    """
)

@app.post("/ask")
async def ask(question: Question):
    if not question.question.strip():
        raise HTTPException(status_code=400, detail="Câu hỏi không được để trống.")
    
    try:
        logger.info(f"Received question from session {question.session_id}: {question.question}")
        
        memory = get_memory(question.session_id)
        
        llm = CustomLLM(
            api_url=CUSTOM_BASE_URL,
            api_key=API_KEY, 
            temperature=1.0,
            top_p=1.0
        )
        logger.info("CustomLLM initialized successfully.")
        
        chain = LLMChain(llm=llm, prompt=prompt, memory=memory)
        logger.info("LLMChain created successfully.")
        
        answer = chain.run({"question": question.question})
        logger.info(f"Generated answer for session {question.session_id}: {answer}")
        
        return answer
    except Exception as e:
        logger.error(f"Error processing the question: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing the question: {e}")
