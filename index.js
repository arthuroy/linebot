var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1509414054',
  channelSecret: 'ebdaa763a393b6dae8547b90b1dca906',
  channelAccessToken: 'ROHgG39VF6q/KjocMkj1Vlz5prg0uTGK9wz3C9AIl2mfdrgNe9lyz2FZM/3xFjowC2n6jgzLWVFpXi0965E84q1u5prAjbibk6ptbkkwJHycXaaYVXtLafL6bIvt0MeJAI6pjjut8UTcTaQJwYeZdwdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    var userId = 'U3dc0dbd623c7bfe20d5adc0dac198aa4'
    var sendMsg = msg
    bot.push(userId,sendMsg); {
      // success 
      console.log('send: '+sendMsg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
