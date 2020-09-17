

const express = require('express')
const hbs = require('hbs');
const app = express();
require('./hbs/helpers/helpers');

hbs.registerPartials(__dirname + '/views/partials');

// usar puerto para heroku:
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//EXPRESS hbs engine
app.set('view engine', 'hbs');

//comentamos esto para no confundir con la peticion del index
// app.get('/', (req, res) => {
//
//     let salida = {
//         nombre:'jhon',
//         edad: 28,
//         url: req.url
//     }
//     //res.send('Hello World')
//     res.send(salida);
// })



app.get('/', (req, res) => {

    //res.send('Hello World')
    res.render('home',{
        nombre: 'JHon rEmolinA'
    });

})
app.get('/about', (req, res) => {

    //res.send('Hello World')
    res.render('about',{

    });

})

app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
})