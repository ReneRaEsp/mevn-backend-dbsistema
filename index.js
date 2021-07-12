import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes'
//const express = require('express')
//const morgan = require('morgan')
//const cors=require('cors')
//Conexion a la base de datos MongoDB
mongoose.Promise=global.Promise
//const dbUrl = 'mongodb://localhost/dbsistema'
const dbUrl = 'mongodb://127.0.0.1:27017/dbsistema'

mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose => console.log(`conectado a la BD en el puerto 27017`))
.catch(err => console.log(err))

const app = express()

const PORT = process.env.PORT || 5000
app.use(morgan('dev'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

app.use('/api',router)

app.listen(PORT,()=>{
    console.log(`Escuchando desde el puerto ${PORT}`)
})
