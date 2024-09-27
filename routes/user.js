const express=require('express');
const usercontrollers=require('../controllers/usercontrollers');
const router=express.Router();
router.use(express.urlencoded({extended:false}));


router.get('/',(req,res)=>{
    res.render('login')                          
})
router.get('/admin/login',(req,res)=>{
    res.render('welcomeadmin')                          
})
router.get('/login/nav',(req,res)=>{
    res.render('login')                          
})
router.post('/login',(req,res)=>{
    usercontrollers.dologin(req,res)                          
})
router.get('/sign/up',(req,res)=>{
    res.render('signup')                           
})
router.post('/add/user',(req,res)=>{
    usercontrollers.addUser(req,res)
                            
})

// router.get('/login',(req,res)=>{
//     res.render('login')                           // render means to show file no need to put extension  and to add in this file 
// })

module.exports=router;