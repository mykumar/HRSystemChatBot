var express = require('express')
var app = express()
app.use( bodyParser.json() ); 
app.use(express.bodyParser());

app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.post('/response', function (req, res) {

  console.dir("This is Response!!!!");
  
  res.setHeader('Content-Type', 'application/json');
  
  var slack_message = {
	"text": "speech",
	"attachments": [{
		"title": "title`",
		"title_link": "title_link",
		"color": "#36a64f",

		"fields": [{
			"title": "Condition",
			"value": "Temp ",
			"short": "false"
		}, {
			"title": "Wind",
			"value": "Speed: ",
			"short": "true"
		}, {
			"title": "Atmosphere",
			"value": "Humidity ",
			"short": "true"
		}],

		"thumb_url": "http://l.yimg.com/a/i/us/we/52/"
	}]
};


  var result  = {
        "speech": "speech",
        "displayText": "speech",
        "data": {"slack": slack_message},
        # "contextOut": [],
        "source": "apiai-weather-webhook-sample"
};
  
  res.send(JSON.stringify(result));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
