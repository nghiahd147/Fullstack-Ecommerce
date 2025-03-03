// P0MghB8DzqNz6GrD

# Thư viện sử dụng trong dự án

npm i express dotenv mongoose jsonwebtoken stripe cloudinary cookie-parse bcryptjs ioredis
npm i nodemon -D

Giải thích:
express: Một framework phổ biến cho Node.jsđể xây dựng ứng dụng web và API.
dotenv: Tải các biến môi trường từ file .env vào process.envđể quản lý các cài đặt cấu hình.
mongoose: Cung cấp giải pháp dựa trên schema để mô hình hóa dữ liệu trong MongoDB.
jsonwebtoken: Cho phép tạo và xác minh JSON Web Tokens (JWT) để truyền dữ liệu một cách an toàn giữa các bên.
stripe: Sử dụng để xử lý thanh toán với API của Stripe.
cloudinary: Quản lý và tối ưu hóa phương tiện (hình ảnh, video) bằng dịch vụ đám mây của Cloudinary.
cookie-parser: Phân tích cookies đính kèm vào yêu cầu từ client, sử dụng để quản lý các phiên làm việc của người dùng.
bcryptjs: Sử dụng để băm mật khẩu cho lưu trữ an toàn.
ioredis: Thư viện client mạnh mẽ để tương tác với Redis, một kho key-value.
nodemon: Công cụ phát triển tự động khởi động lại server khi có thay đổi file. Thư viện này được cài đặt dưới dạng phụ thuộc phát triển 

# Setup package

"main": "backend/server.js",
"scripts": {
    "dev": "nodemon backend/start",
    "start": "node backend/server"
},
"type": "module", // thêm này vào để dùng import

# Start

import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("Server is running port 5000");
});

# Config env

import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

## app.use

- Xử lý middleware
VD: 
    - Ta có 1 file router news:
        router.get('/', ...)
        router.get('/:id',...)
    - 1 file index
        import routerNews from 'file trên'
        app.use('/news', routerNews)
-> Được hiểu nếu /news thì sẽ chạy cái get đầu tiên
-> Còn nếu /news/id thì sẽ chạy cái get thứ hai

## res.send('...')

- In ra web 1 cái gì đó

## Tách routes | controllers

- routes:
router.get("/signup", signup);

- controllers:
export const signup = async (req, res) => {
    res.send("signup");
}

## Connect Mongodb

// P0MghB8DzqNz6GrD => PASSWORD
// mongodb+srv://qn500787:P0MghB8DzqNz6GrD@cluster0.glcti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from 'mongoose'

export const connectDb = asyns() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`...${conn.connection.host}`)
    } catch(error) {
        console.log("...", error.message)
        process.exit(1) // hiểu sẽ dừng chương trình với 1 lỗi
    }
}

Network access -> Add Ip Address -> Sau đó add mặc định 0.0.0.0/0

### Tạo 1 bảng

import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, '...']
    },
    email: {
        type: String,
        require: [true, '...'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        require: [true, '...'],
    },
    cartItems: [
        {
            quantity: number,
            default: 1    
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    } 
})