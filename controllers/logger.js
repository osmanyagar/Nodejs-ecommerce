const {createLogger,transports,format} = require('winston');

const portLogger = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/PortListen.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'./Logs/PortListen-error.log',
            level:'error',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});

const customerRegisterLogger = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/custemer-Register.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
})

const custemerLoginLogger = createLogger({
    transports:[
        new transports.File({
            filename:'./Logs/customer-Login.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
});




module.exports = {custemerLoginLogger,portLogger,customerRegisterLogger}