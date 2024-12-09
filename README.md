[![Github license](https://img.shields.io/github/license/pmnm2024/smart_tlu 'Github license')](https://github.com/pmnm2024/smart_tlu/blob/main/LICENSE)
[![Open issues](https://img.shields.io/github/issues/pmnm2024/smart_tlu 'Open issues')](https://github.com/pmnm2024/smart_tlu/issues)
[![Open Pull Requests](https://img.shields.io/github/issues-pr/pmnm2024/smart_tlu 'Open Pull Requests')](https://github.com/pmnm2024/smart_tlu/pulls)
[![Commit activity](https://img.shields.io/github/commit-activity/m/pmnm2024/smart_tlu 'Commit activity')](https://github.com/pmnm2024/smart_tlu/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/pmnm2024/smart_tlu 'Github contributors')](https://github.com/pmnm2024/smart_tlu/graphs/contributors)

# SMART_TLU  [![Documentation](https://pmnm2024.github.io/smart_tlu/)]

<a href="https://github.com/pmnm2024/smart_tlu/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=%F0%9F%90%9B+Bug+Report%3A+">Bug Report ⚠️
</a>

<a href="https://github.com/pmnm2024/smart_tlu/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=RequestFeature:">Request Feature 👩‍💻</a>

Ứng dụng "Hỗ Trợ Nhân Đạo Thông Minh" (Smart Aid) hướng tới việc xây dựng một nền tảng công nghệ hiện đại để quản lý và tối ưu hóa các hoạt động hỗ trợ nhân đạo trong tình huống khẩn cấp.

Mục tiêu là phát triển một hệ thống "Hỗ trợ nhân đạo thông minh". Dựa trên các mô hình ngôn ngữ lớn cùng với kiến trúc microservices bằng low code platform .

Dự án được thực hiện trong cuộc thi [Phần Mềm Nguồn Mở-Olympic Tin học Sinh viên Việt Nam 2024](https://www.olp.vn/procon-pmmn/ph%E1%BA%A7n-m%E1%BB%81m-ngu%E1%BB%93n-m%E1%BB%9F). Được được open source theo giấy phép [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) bởi đội tác giả SMART_TLU.

Để biết thêm chi tiết về cuộc thi, bạn có thể xem tại [đây](https://vfossa.vn/tin-tuc/cong-bo-de-thi-noi-dung-phan-mem-nguon-mo-olympic-tin-hoc-sinh-vien-viet-nam-2024-727.html).

# Amplication - Low Code Platform
Toàn bộ dự án được genrater code bởi Low code Amplication

Amplication là một nền tảng low-code giúp các nhà phát triển tạo ứng dụng nhanh chóng mà không cần phải viết quá nhiều mã. Nó cho phép bạn tạo API, cơ sở dữ liệu, và giao diện người dùng một cách tự động.

## 🔎 Danh Mục

1. [Giới Thiệu](#giới-thiệu)
2. [Chức Năng](#chức-năng-chính)
3. [Tổng Quan Hệ Thống](#tổng-quan-hệ-thống)
4. [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
5. [Hướng Dẫn Cài Đặt](#hướng-dẫn-cài-đặt)
6. [🙌 Đóng Góp](#đóng-góp-cho-dự-án)
7. [📝 License](#license)

## Giới Thiệu

-   [Amplication](https://amplication.com/) là một nền tảng low-code giúp các nhà phát triển tạo ứng dụng nhanh chóng mà không cần phải viết quá nhiều mã. Nó cho phép bạn tạo API, cơ sở dữ liệu, và giao diện người dùng một cách tự động.
-    Ứng dụng "Hỗ Trợ Nhân Đạo Thông Minh" (Smart Aid) hướng tới việc xây dựng một nền tảng công nghệ hiện đại để quản lý và tối ưu hóa các hoạt động hỗ trợ nhân đạo trong tình huống khẩn cấp. Ứng dụng sẽ giúp kết nối các bên liên quan (chính phủ, tổ chức phi chính phủ, nhà tài trợ, và người dân) để phân phối lương thực, vật tư y tế, và các nguồn lực một cách nhanh chóng, minh bạch và hiệu quả.
-    Mục tiêu chính:
-    Tăng cường khả năng ứng phó khẩn cấp: Rút ngắn thời gian giữa việc phát hiện nhu cầu và cung cấp hỗ trợ.
-    Minh bạch hóa quá trình hỗ trợ: Đảm bảo việc phân phối tài nguyên công bằng và hiệu quả.
-    Khuyến khích sự tham gia cộng đồng: Tạo điều kiện cho mọi người đóng góp và nhận hỗ trợ dễ dàng.

## Chức Năng Chính

Project tập trung vào các chức năng chính như sau:

-   Hệ thống đăng ký nhận hỗ trợ.
-   Theo dõi nguồn lực và nhu cầu.
-   Quản lý đóng góp từ cộng đồng.
-   Báo cáo tình trạng thực địa.
-   🤖 Chat bot để cho người dùng hỏi và phát hiện ra các tình trạng khẩn cấp.

## Tổng Quan Hệ Thống

Backend của hệ thống được thiết kế theo kiến trúc microservices và được genrate bởi [Amplication](https://amplication.com/):

-   [EXPRESS API Gateway](https://www.express-gateway.io/): API Gateway cho hệ thống.
-   [Nestjs](https://nestjs.com/): [Amplication](https://amplication.com/) genrate code về nestjs.
-   [FastAPI](https://fastapi.tiangolo.com/): Dựng API cho Langchain Service.
-   [LangChain](https://www.langchain.com/): Sử dụng để chỉnh sửa proms và lưu chữ hội thoại.
-   [Mongodb](https://www.mongodb.com/): Cơ sở dữ liệu quan hệ.
-   [Redis](https://redis.io/): Cơ sở dữ liệu NoSQL in-memory dạng key-value.
-   [RabbitMQ](https://www.rabbitmq.com/): Message broker cho hệ thống.
-   [Docker](https://www.docker.com/): Containerize các service.
-   [Docker Compose](https://docs.docker.com/compose/): Quản lý các container.
-   [FCM Firebase](https://firebase.google.com): Hệ thống push notication.
-   [N8N](https://n8n.io/): Xây dựng hệ thống workflow cho chatbot.\

<img loading="lazy" src="./docs/images/system_architecture.svg" alt="Architecture" width="100%" height=600>

## Hướng Dẫn Cài Đặt

Tất cả các images build từ services backend bạn có thể tìm thấy tại [Docker Hub](https://hub.docker.com/repositories/tghuy2002?search=vnlaw).

### Yêu Cầu 📋

Để cài đặt và chạy được dự án, trước tiên bạn cần phải cài đặt các công cụ bên dưới. Hãy thực hiện theo các hướng dẫn cài đặt sau, lưu ý chọn hệ điều hành phù hợp với máy tính của bạn:

-   [Docker-Installation](https://docs.docker.com/get-docker/)
-   [Docker-Compose-Installation](https://docs.docker.com/compose/install/)
-   [NodeJS v18-Installation](https://nodejs.org/en/download/)

> **Lưu ý:** Mặc dù dự án đa phần sử dụng Amplication để genrate code vui lòng không sửa các file base trong scr code.

### 🔨 Cài Đặt

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

## Cấu trúc thư mục

-   [apps](./apps) - Chứa các mô hình, services, kiến trúc của hệ thống.
-   [Documents](./docs/) - Tài liệu về dự án.


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

## Đóng góp cho dự án

<a href="https://github.com/pmnm2024/smart_tlu/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=%F0%9F%90%9B+Bug+Report%3A+">Bug Report ⚠️
</a>

<a href="https://github.com/pmnm2024/smart_tlu/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=RequestFeature:">Request Feature 👩‍💻</a>

Nếu bạn muốn đóng góp cho dự án, hãy đọc [CONTRIBUTING.md](.github/CONTRIBUTING.md) để tìm hiểu thêm chi tiết.

Chúng tôi rất trân trọng mọi đóng góp từ các bạn. Đừng ngần ngại tạo pull request và gửi đến dự án.

Theo dõi ChangeLog tại đây [CHANGELOG.md](CHANGELOG.md)
## Liên hệ
-   Nguyễn Đình Tư: nguyendinhtu11022002@gmail.com
-   Nguyễn Lê Tuấn Anh: tadzltv22082004@gmail.com
-   Phạm Nhật Anh: pna120104@gmail.com\

## License
This project is licensed under the terms of the [GPL V3](LICENSE) license.
