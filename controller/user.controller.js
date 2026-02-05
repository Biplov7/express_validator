const user = require("../model/user.model.js");

const getUser = async (req, res)=>{
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const postUser = async(req,res)=>{
    try{
        const haveUser = await user.findOne({email: req.body.email});
        
        if(haveUser){
            return res.status(400).json({message: "User already exist"});
        }else{
            const users = await user.create(req.body);
            res.status(200).json(users);
        }

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const deleteAllUser = async(req,res)=>{
    try {
        const users = await user.deleteMany();
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getUser,postUser,deleteAllUser
}