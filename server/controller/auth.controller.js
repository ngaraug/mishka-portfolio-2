import Passwd from "../models/adminPass.model.js";

export const changepass = async (req, res) =>{
    // console.log(req.body.password)
    const passwd = req.body.password;
    // const newPassword = Passwd({
    //     id: 'mishkaPass',
    //     passwd
    // })
    // res.json({message: "Password Saved"})
    // await newPassword.save();
    Passwd.updateOne({id: 'mishkaPass'},{
        $set : {
            id: 'mishkaPass',
            passwd
        }
    }).then(()=>{
        res.json({message: "Password Saved"})
    })
    
    
}

export const signin = async (req, res) =>{
    const passwd = req.body.password;
    if(!passwd){
        // res.console.error('Invalid password' );
        res.json({"invalidPassword" : true})
    }
    try {
        const pass = await Passwd.findOne({id: 'mishkaPass'})
        if(!pass){
            res.json({'passmatch': false})
        }else{
            if(passwd === pass.passwd){
                res.json({'passmatch': true})
            }else{
                res.json({'passmatch': false})
            }
            
        }

    } catch (error) {
        res.json({'error' : error})
    }
}