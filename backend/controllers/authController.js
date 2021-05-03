const User = require('../models/User')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')





const maxAge = 3 * 24 * 60 * 60 ;
const createToken = (id) =>{
    return jwt.sign({ id }, 'naima secret',{
        expiresIn: maxAge
    });
}

 //*************************register
exports.userRegister = async (req,res)=>{

    try {
        const user = new User({

            ...req.body
        })
        // check email
        const EmailExist = await User.findOne({email: req.body.email});
        if(EmailExist) return res.status(400).json({message:"email already exist!"});
        
        // ***********hashPassword
        const hashPassword = await bcrypt.hash(user.password, 10);
        user.password = hashPassword;
        const saved = await user.save();
        const token = createToken(user._id)
        res.cookie('jwt', token ,{ httpOnly:false, maxAge: maxAge * 1000});
        if(saved) return res.status(201).json({message: 'data saved!', user :user._id})
    } catch (error) {
        return res.status(500).json({err: 'error server'})
    }

}

//***************************login 
exports.loginUser = async (req ,res ) =>{
    const {email, password} = req.body;
    const emailUser = await User.findOne({email})
    if(!emailUser) return res.status(400).json({message:"invalid email or password"})

    const passwordUser = await bcrypt.compare(password,emailUser.password);
    if(!passwordUser) return res.status(400).json({message:"invalid email or password"});

    return res.status(200).json('you are logged in ');


}