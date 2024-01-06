const express=require('express')
const cors=require('cors')
const {MongoClient}=require('mongodb')
const app=express()
require('dotenv').config()
app.use(express.json());
app.use(cors())

const port = process.env.port
const client = new MongoClient(process.env.database_link)

client.on('commandStarted',started => console.log(started))


const collections=client.db('Projects').collection('project-list')


 app.get('/data', async(req,res)=>{
    let result= await collections.find({}).toArray();
    res.send(result)
    

 })
 app.listen(port)