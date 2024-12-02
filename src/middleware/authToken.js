import jwt from 'jsonwebtoken'
import userModel from "../models/user"

export const authToken = async (req, res, next)=>{
    const token = req.cookies.jwt;

    if (!token){
        return res.status(400).json({message: "Access denied. You need authorization"})
    }
    try {
      const decoded = jwt.verify(token, process.env.SECERET);
      req.user = await userModel.findById(decoded.userId).select('-password');
      next()
    } catch (err) {
        console.log(err)
        return res.status(400).json({message: "Invalid token"})
    }
}
