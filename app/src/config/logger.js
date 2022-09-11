const {createLogger, transports, format, loggers} = require("winston")
const {combine, timestamp, colorize, printf, label} = format;

const printLogFormat = 
{
    file : combine(
        label({
            label : "MURIEL"
        }),
        // winston.format.colorize(), 
        timestamp({
            format : "DD-MMM-YY H:mm:ss"
        }),
        printf(( { timestamp, level, message, label } ) => {
            return `${timestamp} ${level} : ${message} - [${label}]`
        }
        ),    
    ),

    console : combine(
        label({
            label : "MURIEL"
        }),
        colorize(), 
        // timestamp({
        //     format : "DD-MMM-YY H:mm:ss"
        // }),
        printf(( { level, message, label } ) => {
            return ` ${level} : ${message} - [${label}]`
        }
        ),    
    ),
};

const opts = {

    file : new transports.File({
        filename : "./logs/access.log",
        dirname : "logs",
        level : "info",
        format : printLogFormat.file,
    }),

    console : new transports.Console({
        level : "info",
        format : printLogFormat.console,
    }),

}

const logger = createLogger( {

    transports : [ opts.file],
    
    }
)

if (process.env.NODE_ENV !== "production") {

    logger.add (
        opts.console      
    )

}

module.exports = logger;