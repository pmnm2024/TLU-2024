## Hướng dẫn cài đặt
### 1. Yêu cầu hệ thống  
- **Tài khoản YESCALE.io**: Để sử dụng mô hình CHATGPT.  
- **N8N**: Phiên bản >=1.66.0

### 2. Cài đặt dự án
#### Bước 1: Hãy clone dự án về máy tính của bạn(nếu chưa thực hiện ở các bước trước)
```bash
git clone https://github.com/pmnm2024/smart_tlu
```
#### Bước 2: Cd  vào thư mục n8n
```bash
cd smart_tlu/apps/n8n
```
### Bước 3: Chạy n8n
```bash
n8n
# or
n8n start
```
Bạn có thể chạy n8n tunnel
```bash
n8n start --tunnel
```
> **Lưu ý:** Sử dụng nó cho mục đích phát triển và thử nghiệm cục bộ. Không an toàn khi sử dụng nó trong sản xuất.

#### Bước 3: Import dự án vào n8n cá nhân: 
1. Tạo 1 workflow trong N8N
2. Import file ChatBot.json nằm trong thư mục n8n

#### Bước 4: Chỉnh sửa các biến trong n8n
1. Trong n8n chọn Variables
2. Khởi tạo những variables: Token (được lấy từ YESCALE.io),  URL_APi(url của service langchain đã chạy ở bước trước hoặc có thể xem ở [đây](https://github.com/pmnm2024/smart_tlu/tree/main/apps/langchain))

## Tác giả
-   Nguyễn Đình Tư: nguyendinhtu11022002@gmail.com
-   Nguyễn Lê Tuấn Anh: tadzltv22082004@gmail.com
-   Phạm Nhật Anh: pna120104@gmail.com