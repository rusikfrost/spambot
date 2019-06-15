const { Bot } = require('node-vk-bot')
const bot = new Bot({
  token: 'xxx'
}).start()
 
bot.get(/1|1|1/i, message => {
  const options =  {}
 
  bot.send('<>', message.peer_id, options)
})

bot.get(/2|2|2/i, message => {
  const options =  {}
  bot.send('<>' , message.peer_id, options)
})
