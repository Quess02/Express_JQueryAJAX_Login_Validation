const express=require('express');
const server=express();
const path=require('path');
server.use(express.static(path.join(__dirname,'public')));
server.use(express.urlencoded({extended:true}));
server.use(express.json());
var user={
    email:'user@mail.com',
    password:1234
};
server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'public/login.html'))
});
server.post('/',(req,res)=>{
    if (req.xhr||req.accepts('json,html')==='json') {
        let Umail=(req.body.email)?req.body.email:'';
        let Upass=(req.body.password)?req.body.password:'';
        if (Umail!=='' ){
            if(user.email===Umail) {
                if (Upass!=="") {
                    if (user.password===Upass) {
                        res.send({success:true}); 
                    } else {
                        res.send({msg:'incorrect password'}); 
                    }
                } else {
                    res.send({msg:'fill in password'}); 

                }
            }else{
                res.send({msg:'user does not exist'}); 
            }
        } else {
                res.send({msg:'fill in name'});
            }
    } else {
        res.json('failed xhr')
    }
 
});
server.get('/home',(req,res)=>{
    res.redirect('/welcome');
    //res.send(`<h2>Ajax Handling Failed</h2>`)
})
server.get('/welcome',(req,res)=>{
  
    res.send(`<h2>Ajax Handling Success</h2>`)
})

server.listen(3000,()=>{
    console.log('server started');
})