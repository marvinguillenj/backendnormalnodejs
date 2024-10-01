const express = require ("express");

const app=express();


app.get('/api',(req,res)=>{
    res.json({
        success:1,
        message: 'This is rest Api working'
    });
}
);

app.get('/',(req,res)=>{
    res.send("Hello world! New dad@@")
})
const postsRoute=require('./routes/posts')
app.use("/posts",postsRoute);


app.get('/blog',(req,res)=>{
    res.send("Hello world! Blog")
})

app.listen(3001,()=>{
    console.log('Server up and running')
})



module.exports = app;