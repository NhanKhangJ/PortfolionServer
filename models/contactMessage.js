import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    services: String,
    message: String
})

const ContactMessage = mongoose.model('ContactMessage', contactSchema)

export default ContactMessage