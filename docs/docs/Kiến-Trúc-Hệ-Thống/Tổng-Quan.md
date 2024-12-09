---
weight: 1
---

## Backend

-   Toàn bộ mã nguồn backend sẽ nằm ở thư mục này
-   Cấu trúc thư mục backend hiện tại như sau:

```
apps/
├── api-gateway/my-gateway
├── dependencies
├── donation-service
├── fcm-service
├── langchain
├── mail-service
├── n8n
├── notification-service
├── scripts
├── support-request-service
├── user-service
├── warehouse-service

```
-   Thư mục [api-gateway/my-gateway](./api-gateway/my-gateway) đóng vai trò API Gateway cho hệ thống, định tuyến và quản lý các yêu cầu từ client đến các service khác.
-   [dependencies](./dependencies): Chứa các thư viện và phụ thuộc dùng chung giữa các service.
-   [donation-service](./donation-service): Service cung cấp API để quản lý các hoạt động quyên góp.
-   [fcm-service](./fcm-service): Service đảm nhận việc gửi thông báo thông qua Firebase Cloud Messaging.
-   [langchain](./langchain): Hệ thống RAG (Retrieval-Augmented Generation) dùng để retrieve các điều mục, tri thức pháp luật liên quan đến câu hỏi của người dùng, sau đó qua một mô hình ngôn ngữ để sinh ra câu trả lời.
-   [mail-service](./mail-service): Service hỗ trợ gửi email, chẳng hạn như thông báo hoặc xác thực.
-   [n8n](./n8n): Workflow automation tool tích hợp với hệ thống.
-   [notification-service](./notification-service): Service quản lý thông báo cho người dùng.
-   [scripts](./scripts): Chứa các script hỗ trợ, như khởi tạo dữ liệu hoặc cấu hình.
-   [support-request-service](./support-request-service): Service xử lý các yêu cầu hỗ trợ từ người dùng.
-   [user-service](./user-service): Service cung cấp API để quản lý thông tin tài khoản người dùng.
-   [warehouse-service](./warehouse-service): Service quản lý kho hàng và tài nguyên liên quan.

## Hệ thống

Thiết kế theo kiến trúc microservices như hình vẽ bên dưới:

<img loading="lazy" src="https://raw.githubusercontent.com/pmnm2024/smart_tlu/refs/heads/main/docs/images/system_architecture.svg" alt="Architecture" width="100%" height=600>

## Pre-requisites - Yêu cầu

Để cài đặt và chạy được dự án, trước tiên bạn cần phải cài đặt các công cụ bên dưới. Hãy thực hiện theo các hướng dẫn cài đặt sau, lưu ý chọn hệ điều hành phù hợp với máy tính của bạn:

-   [Docker-Installation](https://docs.docker.com/get-docker/)
-   [Docker-Compose-Installation](https://docs.docker.com/compose/install/)
-   [NodeJS v18-Installation](https://nodejs.org/en/download/)

 **Lưu ý:** Mặc dù dự án đa phần sử dụng Amplication để genrate code vui lòng không sửa các file base trong scr code.
### 🔨 Cài Đặt Giao diện Admin qua Appsmith
Dùng trên cloud: https://www.appsmith.com/
1. Mở Appsmith Workspace Homepage, sau đó nhấn vào nút Create New ở góc trên bên phải và chọn Import.

2. Chọn tùy chọn image from a git repository từ menu image.

3. Chọn GitHub làm Service Provider, sau đó nhấn vào Configure Git.

4. Điều hướng đến repository's landing page, nhấn vào nút Code, và sao chép SSH URL.

5. Dán URL vào phần Generate SSH Key trên Appsmith.

6. Nhấn nút Generate SSH Keys, và các khóa ECDSA 256 hoặc RSA 4096 sẽ được hiển thị. Chọn loại khóa phù hợp với yêu cầu bảo mật và cấu trúc hệ thống của bạn.

7. Sao chép một trong các khóa, sau đó điều hướng đến Repository Settings, vào phần Deploy Keys, nhấn Add Deploying Keys, dán khóa đã sao chép, và đặt một tiêu đề có ý nghĩa để sử dụng trong tương lai.

8. Đánh dấu chọn Allow Write Access, sau đó nhấn Add Key.

9. Quay lại Appsmith, nhấn nút Connect Git.

10. Sau khi hoàn tất quy trình image, bạn cần cấu hình lại datasource vì Appsmith doesn’t export any configuration values để kết nối một datasource. Bạn có thể làm điều này trong Reconnect Datasources Modal hoặc chọn cấu hình lại chúng.
Xem video hướng dẫn (https://docs.appsmith.com/advanced-concepts/version-control-with-git/import-from-repository)
### HOẶC


Chạy trên Local: 
#### Yêu cầu hệ thống
1. [Docker (version 20.10.7 or later)](https://docs.docker.com/get-started/get-docker/)
2. [Docker-Compose (version 1.29.2 or later)](https://docs.docker.com/compose/install/)
### Cài đặt 
1. Clone repository Appsmith từ GitHub:
```bash
git clone https://github.com/HANOI120104/Appsmith_Admin.git
cd Appsmith_Admin/deploy
```
2. Khời chạy Appsmith
```bash
docker-compose up -d
```
3. Truy cập Appsmith tại http://localhost.

4. 
Xem video trực tiếp: https://docs.appsmith.com/getting-started/setup/installation-guides/docker#install-appsmith
### 🔨 Cài Đặt Client web

Trước hết, hãy clone dự án về máy tính của bạn:

```bash
git clone https://github.com/HANOI120104/PMNM_Client
```

cd vào thư mục:
```bash
cd PMNM_Client
```
Chạy lệnh cài các thư viện liên quan:
```bash
npm install
```
chạy máy chủ phát triển

```bash
npm run dev
```
hoặc
```bash
### yarn dev
```
hoặc
```bash
### pnpm dev
```
hoặc
```bash
### bun dev
```
Mở http://localhost:3000 trên trình duyệt của bạn để xem kết quả.

### 🔨 Cài Đặt Backend

Amplication không giống các low code platform khác nó là BaaS, sẽ render code trực tiếp lên github, vì vậy vui lòng k sửa các file base trong scr code.
Amplication có hỗ trợ seft-host nhưng đội ngũ Amplication không khuyến khích dùng seft host.

Trước hết, hãy clone dự án về máy tính của bạn:

```bash
git clone https://github.com/pmnm2024/smart_tlu
```

cd vào thư mục apps:

```bash
cd smart_tlu/apps
```

#### Chạy docker bằng script(dành cho linux và macos):
Bước này chỉ chạy khi bạn dùng hệ điều hành và macOS.

Sau khi di chuyển vào thư mục apps hãy di chuyển đến scripts:

```bash
cd scripts
```
Sau đó cấp quyền chạy cho tệp .sh

```bash
chmod u+x start_all.sh stop_all.stop
```

Sau khi cấp quyền chạy cho tệp .sh chạy lệnh:
```bash
./start_all.sh
```
để chạy tất cả các service.

Khi muốn dừng tất cả các service đang chạy:
```bash
./stop_all.sh
```

> **Lưu ý:** Khi muốn phát triển 1 service riêng vui lòng khởi tạo service bằng Amplication hoặc khởi tạo bằng tay sau đó vui lòng khai báo service đã tạo trong start_all và stop_all.


#### PORT BINDING

-   Sau khi chạy xong, các service sẽ được chạy trên các port như sau:
<table width="100%">
<thead>
<th>
Service
</th>
<th>
PORT
</th>
</thead>
<tbody>
<tr>
<td>API Gateway</td>
<td>
  9000:9000
</td>

</tr>
<tr>
<td>Auth Service</td>
<td>8000:8000</td>
</tr>
<tr>
<td>Donate Service</td>
<td>8005:8005</td>
</tr>
<tr>
<td>Mail Service</td>
<td>8004:8004</td>
</tr>
<tr>
<td>FCM Service</td>
<td>8007:8007</td>
</tr>
<tr>
<td>Notification Service</td>
<td>8001:8001</td>
</tr>
<tr>
<td>SupportRequest Service</td>
<td>8006:8006</td>
</tr>
<tr>
<td>Warehouse Service</td>
<td>8002:8002</td>
</tr>
</tbody>
</table>

# Một số giao diện mẫu
![image](https://github.com/user-attachments/assets/83813c57-0248-433a-b666-be80fc806999)
![image](https://github.com/user-attachments/assets/d31f5c9e-2fac-4f79-9dda-9fd78f6d7349)
![image](https://github.com/user-attachments/assets/37fe531e-c279-4ee1-ac5f-4e01068d0422)
![image](https://github.com/user-attachments/assets/e9681b89-5356-487d-84fd-b9abed23887a)
![image](https://github.com/user-attachments/assets/5704cad7-55c0-429f-8b1b-8cf5fa27fbf8)
![image](https://github.com/user-attachments/assets/14d369d8-9f9f-4564-8b4c-18f5c39ebfad)
![image](https://github.com/user-attachments/assets/bad849fb-c259-44ff-a003-b44c9bead8f2)
![image](https://github.com/user-attachments/assets/acc84b3e-3a06-4857-b7ce-1c62221645aa)
![image](https://github.com/user-attachments/assets/ebd22c23-d8c2-430d-9b4b-c4726e1fd21f)