import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2,"Name must be larger than 2 charachters"],
        maxlength: [50,"Name must be lesser than 50 charachters"],
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        match: [/^[\w.%+_]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],

    },
    message:{
         type:String,
        required: [true, "Message is required"],
    },
    date:{
        type: Date,
        default: Date.now,
    },
});
const Contact = 
mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;