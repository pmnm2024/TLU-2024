const jwt = require('jsonwebtoken');  // Thư viện jsonwebtoken

module.exports = {
  name: 'jwt-decoder-policy',  // Tên policy
  // Định nghĩa schema (thêm thông tin về các tham số cấu hình)
  schema: {
    $id: 'https://example.com/schemas/jwt-decoder-policy',  // Đảm bảo có $id để Express Gateway có thể xác thực
    type: 'object',
    properties: {
      secret: {
        type: 'string',
        description: 'Secret key dùng để verify JWT token',
        minLength: 1
      },
    },
    required: ['secret'],  // secret là tham số bắt buộc
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      const token = req.headers['authorization']?.split(' ')[1];  // Lấy token từ header "Authorization"
      // console.log("🚀 ~ return ~ token:", token)

      if (!token) {
        return res.status(401).json({ error: 'Token không tồn tại trong header.' });  // Token không tồn tại
      }

      // Xác thực JWT với secret key (đảm bảo rằng bạn có secret trong cấu hình plugin)
      jwt.verify(token, actionParams.secret, (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Token không hợp lệ hoặc hết hạn.' });
        }
        
        // Nếu token hợp lệ, lưu thông tin decoded vào req.user
        console.log("🚀 ~ return ~ decoded:", decoded)
        req.user = decoded;
      
        // Tiến hành tiếp theo
        next();
      });
    };
  }
};
