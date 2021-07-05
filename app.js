const uuid = require('uuid').v4
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const app = express()
require('dotenv').config()
const prisma = require('./createConnection')
require('./passport')
const expressLayouts = require('express-ejs-layouts')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(expressLayouts);
app.set('view engine','ejs')

app.use(session({
    secret : "something",
    resave:false,
    saveUninitialized:true,
    cookie: { maxAge: 10000000}
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/welcomePage.html')
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html')
})

app.post('/register',async(req,res)=>{
    const userName = req.body.user

    const userinDB = await prisma.cred.findFirst({
        where : {name : userName}
    })
    
    if(userinDB) {res.send(`<h1> already exist </h1> <a href="/login"> login here! </a>`)}
    else{
        authorAccount = false
        if(req.body.isAuthor==='on') {authorAccount=true}
        await prisma.cred.create({
        data:{
            id:uuid(),
            session_id:req.sessionID,
            name:userName,
            password:req.body.pass,
            email:req.body.email,
            is_author: authorAccount
        }
    })
    // use flash card
    res.redirect('/login')
}
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
//flash cards
app.post('/login',passport.authenticate('local',{failureRedirect:'/login-failure',successRedirect:'/dashboard'}))

app.get('/dashboard',async(req,res)=>{
    
    if(req.isAuthenticated()){

        const post = await prisma.posts.findMany({
            orderBy : {
                date : 'desc'
            }
        })

        if(req.user.is_author){
            res.render(__dirname+'/views/adminDashboard.ejs',{
                data:post
            })
        }
        else{
        
            res.render(__dirname+'/views/userDashboard.ejs',{
                data : post
            })
            
        }
    
    }
    else{
        res.send(`You are unauthorized!! :-) <a href='/login'> login again!</a> `)
    }
})

app.get('/createPost',(req,res)=>{
    if(req.isAuthenticated() && req.user.is_author)
    {
        res.sendFile(__dirname+'/createPost.html')
    }

    else{
        res.send(`You are not allowed !! :-) <a href='/dashboard'> back to dashboard </a> `)
    }
})

app.post('/createPost',async(req,res)=>{
    if(req.isAuthenticated && req.user.is_author)
    {
        // storing author in author table
        const author = await prisma.author.findFirst({
            where : {
                id : req.user.id
            }
        })
        if(!author){
            await prisma.author.create({
                data:{
                    id : req.user.id,
                    author_name : req.user.name
                }
            })
        }
        //storing posts
        await prisma.posts.create({
            data:{
                post_id : uuid(),
                title : req.body.title,
                content : req.body.content,
                date : new Date(Date.now()),
                author_id : req.user.id
            }
        })

    }
    else{
        res.send(`You are not allowed !! :-) <a href='/dashboard'> back to dashboard </a> `)
    }
    // use flash card
    res.send(`post creation success !! <a href='/dashboard'> back to dashboard </a>` )
})


app.get('/dashboard/post/:id',async(req,res)=>{
    const data = await prisma.posts.findFirst({
        where : {
            post_id : req.params.id
        }
    })
    res.render(__dirname+'/views/singlePost.ejs',{
        singlePost : data
    })
})
app.get('/login-failure',(req,res)=>{
    res.sendFile(__dirname+'/loginFailure.html')
})

app.get('/success',(req,res)=>{
    res.send('login!!')
})

app.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/login')
})

app.listen(3000,()=>console.log("listening!"))





