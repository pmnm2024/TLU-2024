
#  Copyright (c) ATA_TLU.
#  This source code is licensed under the GPL V3 license found in the
#  LICENSE file in the root directory of this source tree.
# custom_llm.py

from langchain.llms.base import BaseLLM
from langchain.schema import LLMResult, Generation
import requests
from typing import Optional, List, Mapping, Any
import os

class CustomLLM(BaseLLM):
    """
    Custom Language Model to interact with a custom GPT API via direct HTTP calls.
    """

    # Định nghĩa các trường với kiểu dữ liệu rõ ràng
    api_url: str
    api_key: Optional[str] = None
    headers: Optional[Mapping[str, str]] = None
    max_tokens: int = 100
    temperature: float = 1.0
    top_p: float = 1.0

    @property
    def _llm_type(self) -> str:
        return "custom_llm"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.headers = self.headers or {}
        if self.api_key:
            self.headers["Authorization"] = f"Bearer {self.api_key}"

    def _call(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        run_manager: Optional[Any] = None,
    ) -> str:
        """
        Call the custom GPT API with the provided prompt.

        :param prompt: The input prompt to send to the API.
        :param stop: (Optional) Stop tokens.
        :param run_manager: (Optional) Callback manager for LangChain.
        :return: The generated text response from the API.
        """
        payload = {
            "model": "gpt-4",
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            # "max_tokens": self.max_tokens,
            "temperature": self.temperature,
            "top_p": self.top_p
        }

        try:
            response = requests.post(self.api_url, headers=self.headers, json=payload)
            response.raise_for_status()
            data = response.json()

            # Điều chỉnh parsing dựa trên cấu trúc phản hồi của API bạn
            # Giả sử phản hồi chứa danh sách 'choices' với dict 'message'
            generated_text = data.get("choices", [{}])[0].get("message", {}).get("content", "")
            return generated_text.strip()
        except requests.exceptions.RequestException as e:
            raise RuntimeError(f"API request failed: {e}")
        except (KeyError, IndexError) as e:
            raise RuntimeError(f"Unexpected API response structure: {e}")

    async def _acall(
        self,
        prompt: str,
        stop: Optional[List[str]] = None,
        run_manager: Optional[Any] = None,
    ) -> str:
        """
        Asynchronous call to the custom GPT API.

        :param prompt: The input prompt to send to the API.
        :param stop: (Optional) Stop tokens.
        :param run_manager: (Optional) Callback manager for LangChain.
        :return: The generated text response from the API.
        """
        # Nếu cần thực hiện các cuộc gọi HTTP không đồng bộ, bạn có thể sử dụng aiohttp hoặc httpx
        # Dưới đây là ví dụ sử dụng httpx
        import httpx
        # print(prompt)
        payload = {
            "model": "gpt-4",
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "max_tokens": self.max_tokens,
            "temperature": self.temperature,
            "top_p": self.top_p
        }

        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(self.api_url, headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()
                generated_text = data.get("choices", [{}])[0].get("message", {}).get("content", "")
                return generated_text.strip()
        except httpx.RequestError as e:
            raise RuntimeError(f"Async API request failed: {e}")
        except (KeyError, IndexError) as e:
            raise RuntimeError(f"Unexpected API response structure: {e}")

    def _generate(
        self,
        prompts: List[str],
        stop: Optional[List[str]] = None,
        run_manager: Optional[Any] = None,
    ) -> LLMResult:
        """
        Generate responses for a list of prompts.

        :param prompts: List of input prompts.
        :param stop: (Optional) Stop tokens.
        :param run_manager: (Optional) Callback manager for LangChain.
        :return: LLMResult containing generations for each prompt.
        """
        generations = []
        for prompt in prompts:
            try:
                response = self._call(prompt, stop, run_manager)
                generations.append([Generation(text=response)])
            except Exception as e:
                generations.append([Generation(text=f"Error: {e}")])

        return LLMResult(generations=generations)