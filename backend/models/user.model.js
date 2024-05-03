import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    },
    gender: {
        type:String,
        required:true,
        enum:['male','female']
    },
    profilePicture: {
        type:String,
        default: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png'
    }
});

const User = mongoose.model('User', userSchema);

export default User;