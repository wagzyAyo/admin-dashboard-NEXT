import jwt from 'jsonwebtoken'

const generateToken = (res, userId) =>{
    const token = jwt.sign({userId}, process.env.SECERET);

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge:  30 * 24 * 60 * 60 * 1000
    });
}


module.exports = generateToken;