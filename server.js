var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title: ' Artile One| Marcus',
    heading: 'Article One',
    date: 'March 2017',
    content: ` Learne German
                - Guten Morgen : Good Morning
                - Guten Tag : Good Day
                - Guten Abend : Good Evening `
};

var articleTwo={
    title: ' GerMan lessons| Marcus',
    heading: 'German lessons',
    date: 'March 2017',
    content: ` Learn German
                - Auf Wiedersehen : Goodbye
                - Wie hieben Sie? What's your name
                - Ich heibe Marcus : I am called Marcus
                - Wie geht's? : How are you?
                - Gut danke, und ihnen? Well thanks, and you?
                - Sprechen Sie Englisch? - Do you speak English?
                - Trinken Sie einen Kaffee? - Do you want a coffee.
                - Nein, danke ? No thank you
                - Ja, bitte : Yes, please.
`};

var articleThree={
    title: ' GerMane lessons| Marcus',
    heading: 'Article Three ',
    date: 'March 2017',
    content: ` Learn German
              Learne German
                - Icht Verstehe nicht: I do not understand
                -  Leider nicht : Unfortunateley dont
                - Wie geht es Ihnen? How are you
                - Wie heiben sie ? what is your name
`};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content= data.content;
    var htmlTemplate =`
        <html>
        <head>
            <title> ${title}</title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class = container>
           <div>
                <a href= "/"> Home</a>
            </div>
            <hr>
            <h3>${heading}</h3>
            <div>
                ${date}
            </div>
            <div>
                <pre>
                    ${content}
                </pre>
            </div>
            </div>
        </body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/articletwo', function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/articlethree', function(req,res){
    res.send(createTemplate(articleThree));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
