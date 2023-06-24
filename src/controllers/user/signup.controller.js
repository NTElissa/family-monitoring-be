import db from "../../database/models"
// create user
const User=db.users;

const createUser = async (req, res) => {
  try {
    const {fullname,email,password} = req.body;

    const user = await User.create({
        fullname,email,password
    })
       return res.status(201).json({
            message:"user created",
            user
        });
  } catch (error) {
    console.log(error.message)
  }
    
}

const GetAllUsers =async (req, res) => {  
    try {
        const users = await User.findAll()
                return res.status(200).json({
        message: "All users",
        data: users
        })
    } catch (error) {
        console.log(error)
     
    }  
}
const GetOneUser = async (req, res) => {
    const {id} = req.params
    try {
        const oneuser = await User.findOne ({where: {id: id }})
        res.status(200).send({
            message:"this is one user",
            data:oneuser
        })
    } catch (error) {
        
    }
    

}

export {createUser, GetAllUsers, GetOneUser}