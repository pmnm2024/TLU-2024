const winston = require('winston');

module.exports = {
    name: 'log-policy',
    schema: {
        $id: 'express-gateway-plugin-logging',
        type: 'object',
        properties: {
            logLevel: {
                type: 'string',
                enum: ['info', 'warn', 'error', 'debug'],
                default: 'info',
            },
            logFile: {
                type: 'string',
                default: 'logs/requests.log',
            },
        },
        required: ['logLevel'],
    },
    policy: (actionParams) => {
        return (req, res, next) => {

            const logger = winston.createLogger({
                level: actionParams.logLevel || "info",
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.json()
                ),
                transports: [
                    new winston.transports.File({ filename: 'logs/requests.log' }),
                    new winston.transports.Console({ format: winston.format.simple() })
                ]
            });

            const logData = {
                method: req.method,
                url: req.originalUrl,
                timestamp: new Date().toISOString(),
                body: req.body,
                header: req.headers
            };

            logger[actionParams.logLevel]({
                message: 'Request Log',
                logData: logData,
            });

            next();
        };
    }
};
