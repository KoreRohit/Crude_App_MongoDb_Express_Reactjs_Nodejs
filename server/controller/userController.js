import User from "../model/userModel.js";

//data save api
export const create= async(req,res)=>{
    try {
        
        const userData = new User(req.body); //copy data from User and store in userData by using request body

        if(!userData){ //check data 
            return res.status(404).json({msg:"User Data not Found.."});
        }
        
        const savedData = await userData.save(); //data can be save in db
        res.status(200).json({msg:"User Save Successfully...."}); //send to response


    } catch (error) {
        
        res.status(500).json({error:error});
    }
}

//all data view api
export const getAll = async(req,res)=>{
    try {
        
        const userData=await User.find(); //find all data

        if(!userData){  //check data
            return res.status(404).json({msg:"User Data not Found.."}); 
        }

        res.status(200).json({userData}); //send response

    } catch (error) {
        res.status(500).json({error:error});
    }
}

//specific user data find
export const getOne = async(req,res)=>{
    try {
        
        const id=req.params.id;//get userdata
        const userExist = await User.findById(id); //get user data by using id
        if(!userExist){  //check data
            return res.status(404).json({msg:"User not Found.."}); 
        } 

        res.status(200).json({userExist}); //send data

    } catch (error) {
        res.status(500).json({error:error});
    }
}

//update specific user data
export const update = async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist = await User.findById(id); //get user data by using id
        if(!userExist){  //check data
            return res.status(404).json({msg:"User not Found.."}); 
        }

        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});//update by using id from reqbody and true for save

        res.status(200).json({msg:"User Updated Successfully.."}); //send updated data to db

    } catch (error) {
        res.status(500).json({error:error});
    }
}

//delete userdata by id
export const deleteUser = async(req,res)=>{
    try {
        
        const id=req.params.id;
        const userExist = await User.findById(id); //get user data by using id
        if(!userExist){  //check data
            return res.status(404).json({msg:"User not Found.."}); 
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted Successfully....."});

    } catch (error) {
        res.status(500).json({error:error});
    }
}
