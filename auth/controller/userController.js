const User = require("../model/userModel");
const bcrypt = require("bcrypt");   
const jsonwebtoken = require("jsonwebtoken");

const registration = async (req, res) => {
    const {username , email , password , role} = req.body

    const existenceUser = await User.findOne({
        $or:[{username} , {email}]
    })

if(existenceUser){
    return res.status(400).json({
        success:false,
        message:"email or username already exist"
    })
}

const hashPassword = await bcrypt.hash(password , 10)

const newUser = new User({
    username,
    email,
    password:hashPassword,
    role:role || "user"
})
    await newUser.save()
    
    return res.status(200).json({
        success:true,
        message:"user created",
        data:newUser
    })

}

const login = async (req, res) => {
    const {username , password} = req.body

    const user = await User.findOne({username})

    if(!user){
        return res.status(400).json({
            success:false,
            message:"invalid username"
        })
    }

    const comparePassword = await bcrypt.compare(password , user.password)
    if(!comparePassword){
        return res.status(400).json({
            success:false,
            message:"invalid password"
        })
    }
    const token = jsonwebtoken.sign({
        id:user._id,
        username:user.username,
        role:user.role
    } , process.env.JWT_SECRET , {
        expiresIn:"1d"
    })
    return res.status(200).json({
        success:true,
        message:"login successful",
        data:{
            token
        }
    })
}
const logout = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token is required",
        });
    }

    res.clearCookie('token');

    return res.status(200).json({
        success: true,
        message: "Logout successful",
        data: token,
    });
}
const edit = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login",
      });
    }
    
    try {
      const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);
      const { username, email, password, role } = req.body;
    
      const updateFields = {};
      if (email) updateFields.email = email;
      if (username) updateFields.username = username;
      if (role) updateFields.role = role;
    
    
      const updateData = await User.findByIdAndUpdate(
        userData.id,
        updateFields,
        { new: true, runValidators: true }
      );
    
      return res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updateData,
        updateFields
      });
    
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Update failed",
        error: error.message
      });
    }
    
}

const resetPassword= async (req,res)=>{
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Login is required",
        });
    }
    const {password} = req.body
    const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userData.id);
    const comparePassword = await bcrypt.compare(password , user.password)
    if(!comparePassword){
        return res.status(400).json({
            success:false,
            message:"invalid password"
        })
    }
    const hashPassword = await bcrypt.hash(password , 10)
    const updateData = await User.findByIdAndUpdate(
        userData.id,
        { password: hashPassword },
        { new: true, runValidators: true }
      );
    
      return res.status(200).json({
        success: true,
        message: "Password updated successfully",
        data: updateData,
      });
}

module.exports = {registration , login , logout ,edit , resetPassword}