const { createToken } = require("../controllers/controllerLogin")

const checkLogin = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const check = await createToken(email,password);
        if(check){
            res.status(200).json({check})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = checkLogin;