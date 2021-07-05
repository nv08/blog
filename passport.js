const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const prisma = require('./createConnection')



const verify = async(user,pass,done)=>{
    
    
    const userMatch = await prisma.cred.findFirst({
        where : {name : user,password:pass}
    })

    if(!userMatch){
        return done(null,false)
    }
    //convert password to hash
    
    return done(null,userMatch)
}

const customFields = {
    usernameField: 'user',
    passwordField: 'pass'
};

const strategy = new localStrategy(customFields,verify)

passport.serializeUser((user, done) => {
    
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
     
    prisma.cred.findUnique({
        where : { id : userId}
    }).then(user=>done(null,user))
});

passport.use(strategy)






