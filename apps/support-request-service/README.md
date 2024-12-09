<p align="right">
  <a href="https://amplication.com" target="_blank">
    <img alt="amplication-logo" height="70" alt="Amplication Logo" src="https://amplication.com/images/logo.svg"/>
  </a>
</p>

# Introduction

Dịch vụ này được tạo ra với Amplication. Phía máy chủ của dự án được tạo ra. Thành phần này cung cấp các dịch vụ phụ trợ khác nhau - tức là, REST API, GraphQL API, xác thực, ủy quyền, ghi nhật ký, xác thực dữ liệu và kết nối với cơ sở dữ liệu. Thông tin bổ sung về thành phần máy chủ và kiến ​​trúc xung quanh nó có thể được tìm thấy trên trang web [documentation](https://docs.amplication.com/guides/getting-started).

# Getting started

## Bước 1: Configuration

Cấu hình cho thành phần máy chủ có thể được cung cấp thông qua việc sử dụng các biến môi trường. Những biến này có thể được truyền cho ứng dụng thông qua việc sử dụng tệp `.env` trong thư mục cơ sở của dịch vụ được tạo. Dưới đây là bảng hiển thị các biến khác nhau có thể được truyền - đây là các biến tồn tại theo mặc định, thông qua việc sử dụng các plugin, các tích hợp bổ sung có thể yêu cầu các giá trị bổ sung. Các giá trị này được cung cấp các giá trị mặc định sau khi tạo, hãy thay đổi chúng thành các giá trị mong muốn.

| Variable             | Description                                  | Value                                                               |
| -------------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| BCRYPT_SALT          | chuỗi được sử dụng để băm                    | [random-string]                                                     |
| COMPOSE_PROJECT_NAME | mã định danh của dịch vụ cộng với tiền tố    | amp_[service-identifier]                                            |
| PORT                 | cổng để chạy máy chủ                         | 3000                                                                |
| DB_URL               | url kết nối cho cơ sở dữ liệu                | [db-provider]://[username]:[password]@localhost:[db-port]/[db-name] |
| DB_PORT              | cổng được sử dụng bởi phiên bản CSDL         | [db-provider-port]                                                  |
| DB_USER              | tên người dùng được sử dụng với CSDL         | [username]                                                          |
| DB_PASSWORD          | mật khẩu để kết nối với CSDL                 | [password]                                                          |
| DB_NAME              | tên của CSDL                                 | [service-name] / [project-name]                                     |
| JWT_SECRET_KEY       | mã bí mật để tạo ra jwt                      | [secret]                                                            |
| JWT_EXPIRATION       | thời gian sống của jwt                       | 2d                                                                  |

> **Note**
> Amplication tạo ra các giá trị mặc định và lưu trữ chúng dưới tệp .env. Nên sử dụng một số dạng giải pháp quản lý/vault bí mật khi sử dụng trong sản xuất.

## Bước 2.1: Scripts - pre-requisites

Sau khi cấu hình máy chủ, bước tiếp theo sẽ là chạy ứng dụng. Trước khi chạy phía máy chủ của thành phần, hãy đảm bảo rằng các điều kiện tiên quyết khác nhau được đáp ứng - tức là node.js [^16.x], npm, docker. Sau khi thiết lập các điều kiện tiên quyết, thành phần máy chủ có thể được khởi động.

```sh
# cài đặt các phụ thuộc
$ npm install

# tạo ra máy khách Prisma
$ npm run prisma:generate
```

## Bước 2.2: Scripts - local development

```sh
# khởi động cơ sở dữ liệu nơi thành phần máy chủ sẽ kết nối tới
$ npm run docker:dev

# khởi tạo cơ sở dữ liệu
$ npm run db:init

# bắt đầu thành phần máy chủ
$ npm run start
```

## Step 2.2: Scripts - container based development

#### PORT BINDING

-   Sau khi chạy xong, service sẽ được chạy trên các port như sau:
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
<td>SupportRequest Service</td>
<td>8006:8006</td>
</tr>

</tbody>
</table>

```shell
# khởi động thành phần máy chủ như một container docker
$ npm run compose:up
```
