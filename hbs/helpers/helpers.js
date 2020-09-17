const hbs = require('hbs');


hbs.registerHelper('getanio', () => { return new Date().getFullYear(); });

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ')
    palabras.forEach((t , idx)=>{
        palabras[idx] = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
    })

    return palabras.join(' ')

});