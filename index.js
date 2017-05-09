var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 'Your Channel ID',
  channelSecret: 'Your Channel Secret',
  channelAccessToken: 'Your Channel Access Token'
});

```
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    console.log('send: '+sendMsg)
  }
});
```
```
 bot.on('message', function(event) {
   if (event.message.type = 'text') {
     var sentMsg = event.message.text;
     var userId = []
     for (i=1;i<=10;i++) {
       bot.push(userId, sentMsg)
     }
   }
 }
}};
```

//bot.push one by one ( or call python instead)
```
lines
```
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
