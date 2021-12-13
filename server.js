const express = require('express');
const app = express();
app.use (express.static(__dirname + '/dist/adoptme3'));

app.get('/*', function(req,res){
    res.sendFile("index.html",{
        root: __dirname + '/dist/adopme3'
    });
});

app.listen(process.env.PORT || 8080);