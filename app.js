const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://admin01:Admin123456@cluster0.npnl8u6.mongodb.net/?retryWrites=true&w=majority",
                  {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  },
                  (err) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log("Connected to MongoDB");
                    }
                  }
)

app.use(express.json())

const cardRouter = require('./routes/cards')
app.use('/', cardRouter)

app.listen(4000, ()=>{
    console.log('server is runing........')
})
