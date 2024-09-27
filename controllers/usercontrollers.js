const User=require('../models/User');
const params  = require('../routes/user');
const bcrypt=require('bcrypt');
const saltRound=10;

async function addUser(req,res){
    try{
        let hashedPassword=bcrypt.hashSync(req.body.password,saltRound);
        let user=new User(req.body);
        console.log(user);
        user.password=hashedPassword;
        // console.log(req.body);
        await user.save();
        res.render('adduser');
        
}catch(err){
    console.log(err);
}
}
async function dologin(req,res) {
    try{ 
        console.log(req.body, 'req.body');
        let user=await User.findOne({emailId :req.body.emailId});
       if(!user){
        res.end("no user found")
       }
       else{
        const isMatch=await bcrypt.compare(req.body.password, user.password);
        if(isMatch){
            if(user.usertype==1){
                res.render('welcomeadmin');

            }else{

                res.render('welcomeuser');
            }
        }
        else{
            res.end("wrong password");
        }
       }
    }catch(err){
        console.log(err)
    }
    
}

module.exports={
    addUser,
    dologin
}