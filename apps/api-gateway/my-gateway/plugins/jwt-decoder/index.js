module.exports = {
  // Phiên bản plugin
  version: '1.2.0',

  // Hàm init được gọi khi plugin được khởi tạo
  init: function (pluginContext) {
    // Đăng ký các chính sách (policies)
    pluginContext.registerPolicy(require('./policies/jwt-decoder-policy'));

    // Các sự kiện cần xử lý
    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  },

  // Đăng ký các policies (các chính sách sẽ tự động được thêm vào danh sách chính sách hợp lệ của Express Gateway)
  policies: ['jwt-decoder-policy'], // Đây là tên của chính sách bạn sẽ sử dụng trong pipeline

  // Cấu hình các tham số của plugin (nếu cần hỏi từ CLI)
  options: {
    secret: {
      type: 'string',
      required: true,
      description: 'The secret key to decode the JWT',
    },
    algorithm: {
      type: 'string',
      required: false,
      description: 'The algorithm used for decoding the JWT',
      default: 'HS256',  // Mặc định là 'HS256', bạn có thể thay đổi tùy theo yêu cầu của bạn
    },
    header: {
      type: 'string',
      required: false,
      description: 'The name of the header to store the decoded JWT data',
      default: 'x-jwt-data',  // Mặc định là header x-jwt-data
    },
  },

  // Schema cho cấu hình của plugin, giúp kiểm tra và xác thực các tham số trong CLI
  schema: {
    $id: 'express-gateway-plugin-jwt-decoder-config', // Đảm bảo thêm thuộc tính $id
    type: 'object',
    properties: {
      secret: {
        type: 'string',
        description: 'The secret key used to decode the JWT',
      },
      algorithm: {
        type: 'string',
        description: 'The algorithm used to decode JWT',
        default: 'HS256',
      },
    },
    required: ['secret'],  // `secret` là tham số bắt buộc
  },
};
