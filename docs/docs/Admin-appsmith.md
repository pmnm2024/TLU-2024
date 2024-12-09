[![Github license](https://img.shields.io/github/license/HANOI120104/Appsmith_Admin 'Github license')](https://github.com/HANOI120104/Appsmith_Admin/blob/main/LICENSE)
[[![Open issues](https://img.shields.io/github/issues/HANOI120104/Appsmith_Admin 'Open issues')](https://github.com/HANOI120104/Appsmith_Admin/issues)]
[![Open Pull Requests](https://img.shields.io/github/issues-pr/HANOI120104/Appsmith_Admin 'Open Pull Requests')](https://github.com/HANOI120104/Appsmith_Admin/pulls)
[![Commit activity](https://img.shields.io/github/commit-activity/m/HANOI120104/Appsmith_Admin 'Commit activity')](https://github.com/HANOI120104/Appsmith_Admin/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/HANOI120104/Appsmith_Admin 'Github contributors')](https://github.com/HANOI120104/Appsmith_Admin/graphs/contributors)

# SMART_TLU [Giao diện]

<a href="https://github.com/HANOI120104/PMNM_Client/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=%F0%9F%90%9B+Bug+Report%3A+">Bug Report ⚠️
</a>

<a href="https://github.com/HANOI120104/PMNM_Client/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=RequestFeature:">Request Feature 👩‍💻</a>

Ứng dụng "Hỗ Trợ Nhân Đạo Thông Minh" (Smart Aid) hướng tới việc xây dựng một nền tảng công nghệ hiện đại để quản lý và tối ưu hóa các hoạt động hỗ trợ nhân đạo trong tình huống khẩn cấp.

Mục tiêu là phát triển một hệ thống "Hỗ trợ nhân đạo thông minh". Dựa trên các mô hình ngôn ngữ lớn cùng với kiến trúc microservices bằng low code platform .

Dự án được thực hiện trong cuộc thi [Phần Mềm Nguồn Mở-Olympic Tin học Sinh viên Việt Nam 2024](https://www.olp.vn/procon-pmmn/ph%E1%BA%A7n-m%E1%BB%81m-ngu%E1%BB%93n-m%E1%BB%9F). Được được open source theo giấy phép [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) bởi đội tác giả SMART_TLU.

Để biết thêm chi tiết về cuộc thi, bạn có thể xem tại [đây](https://vfossa.vn/tin-tuc/cong-bo-de-thi-noi-dung-phan-mem-nguon-mo-olympic-tin-hoc-sinh-vien-viet-nam-2024-727.html).





# Appsmith_Admin![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/appsmith_logo_primary.png)

This app is built using Appsmith. Turn any datasource into an internal app in minutes. Appsmith lets you drag-and-drop components to build dashboards, write logic with JavaScript objects and connect to any API, database or GraphQL source.

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/images/integrations.png)

### [Github](https://github.com/appsmithorg/appsmith) • [Docs](https://docs.appsmith.com/?utm_source=github&utm_medium=social&utm_content=appsmith_docs&utm_campaign=null&utm_term=appsmith_docs) • [Community](https://community.appsmith.com/) • [Tutorials](https://github.com/appsmithorg/appsmith/tree/update/readme#tutorials) • [Youtube](https://www.youtube.com/appsmith) • [Discord](https://discord.gg/rBTTVJp)

##### You can visit the application using the below link

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://app.appsmith.com/applications/673f2ef87ebfa14afdaa2c40/pages/673f402ce4114378d1df2cec) [![](https://assets.appsmith.com/git-sync/Buttons2.svg)](https://app.appsmith.com/applications/673f2ef87ebfa14afdaa2c40/pages/673f402ce4114378d1df2cec/edit)

# Hướng dẫn sử dụng

## 1. Cài đặt Appsmith 
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
## HOẶC


Chạy trên Local: 
### Yêu cầu hệ thống
1. [Docker (version 20.10.7 or later)](https://docs.docker.com/get-started/get-docker/)
2. [Docker-Compose (version 1.29.2 or later)](https://docs.docker.com/compose/install/)
## Cài đặt 
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

# Đóng góp cho dự án

<a href="https://github.com/pmnm2024/smart_tlu/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=%F0%9F%90%9B+Bug+Report%3A+">Bug Report ⚠️
</a>

<a href="https://github.com/pmnm2024/smart_tlu/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=RequestFeature:">Request Feature 👩‍💻</a>

Nếu bạn muốn đóng góp cho dự án, hãy đọc [CONTRIBUTING.md](.github/CONTRIBUTING.md) để tìm hiểu thêm chi tiết.

Chúng tôi rất trân trọng mọi đóng góp từ các bạn. Đừng ngần ngại tạo pull request và gửi đến dự án.

Theo dõi ChangeLog tại đây [CHANGELOG.md](.github/CHANGELOG.md)
## Liên hệ
-   Nguyễn Đình Tư: nguyendinhtu11022002@gmail.com
-   Nguyễn Lê Tuấn Anh: tadzltv22082004@gmail.com
-   Phạm Nhật Anh: pna120104@gmail.com\

## License
This project is licensed under the terms of the [GPL V3](LICENSE) license.