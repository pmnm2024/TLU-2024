## Hướng dẫn cài đặt
### 1. Yêu cầu hệ thống  
Nếu chạy bằng docker thì cần có:
-   [Docker-Installation](https://docs.docker.com/get-docker/)
-   [Docker-Compose-Installation](https://docs.docker.com/compose/install/)
Nếu chạy bằng python thì cần có:
-   [PYTHON](https://www.python.org/)
### 2. Cài đặt dự án
#### Bước 1: Hãy clone dự án về máy tính của bạn(nếu chưa thực hiện ở các bước trước)
```bash
git clone https://github.com/pmnm2024/smart_tlu
```
#### Bước 2: Cd  vào thư mục langchain
```bash
cd smart_tlu/apps/langchain
```
### Bước 3: Chạy service
Nếu dùng docker thì cần chạy 
```bash
docker compose up -d --build
```
Bạn có thể chạy bằng python thì chạy các lệnh sau
```bash
pip install -r requirements.txt
```
Tiếp đến:
```bash
uvicorn main:app --host 0.0.0.0 --port 8007
```
Và service bạn đang chạy trên http://localhost:8007