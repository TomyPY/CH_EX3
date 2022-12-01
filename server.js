const express = require('express')
const app = express()
const Container = require('./database_handler')

app.set('port', 8080)
app.use(express.json())

app.get('/products', (req,res)=>{

    res.send(Container.getAll())

})

app.get('/randomProduct', (req,res)=>{

    let products = Container.getAll()

    res.send(products[Math.floor(Math.random() * products.length)])

})

app.listen(app.get('port'), ()=>{

    console.log(`Servidor escuchando en el puerto ${app.get('port')}`)

})
