import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Vui lòng điền đầy đủ']
    },
    email: {
        type: String,
        require: [true, 'Vui lòng điền đầy đủ'],
        unique: true, // duy nhất
        lowercase: true, // chữ thường
        trim: true // dấu phẩy
    },
    password: {
        type: String,
        require: [true, 'Vui lòng điển đầy đủ'],
    },
    cartItems: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        }
    ],
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    }
})