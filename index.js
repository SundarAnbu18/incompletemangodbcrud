const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const postRoutes=require('./routes/posts')
const app=express();

app.get('/',(req,res)=>{
    res.send('Welcome Page');
})

app.use('/post',postRoutes);


mongoose.connect('mongodb+srv://sundaranbu:Shilpa29@cluster0.fxahm04.mongodb.net/?retryWrites=true&w=majority',{
}).then(()=>{
    console.log('database connected',PORT)
}).catch(err=>{
    console.log('database not connected',err)
})
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
const PORT=process.env.PORT || 5000;


app.listen(PORT)