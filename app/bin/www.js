const app = require("../app");
const PORT = process.env.PORT || 3000;
const logger = require('../src/config/logger');

app.listen(PORT, () => {
    
    logger.info(`${PORT} - 포트 서버가동`)

});