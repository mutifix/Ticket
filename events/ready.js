const moment = require('moment');
require("moment-duration-format");
module.exports = (client) => {
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  
    client.user.setStatus("dnd");
    client.user.setActivity(`BotCode Projeler`, {
      type: "LISTENING"
    });
  
    }