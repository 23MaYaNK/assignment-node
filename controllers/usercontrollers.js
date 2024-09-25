const User=require('../models/User');
const { params } = require('../routes/user');

async function addUser(req,res){
    try{
        console.log(req.body);
        let user=new User(req.body);
        await user.save();
        res.render('adduser');
        
}catch(err){
    console.log(err);
}
}

module.exports={
    addUser
}