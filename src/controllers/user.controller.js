import asyncHanlder from '../utils/asyncHandler.js'
// const registerUser = asyncHanlder(async (req,res) =>{
//     console.log("in async 4")

//     res.status(200).json({message: "Success"})
// })
const registerUser = async (req,res) =>{
    console.log("in async 4")

    res.status(200).json({message: "Success"})
}

export {registerUser}