//mongoose 모듈 가져오기
const mongoose = require('mongoose');

//mongoose를 이용해서 schema 생성
const userSchema = mongoose.Schema({
    //user관련 field 작성
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String, 
        trim: true,
        unique: 1 
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String, 
        maxlength: 50
    },
    role: {
        //관리자가 될 수도, 일반 user가 될 수도 있음 고려
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//위의 schema를 모델로 감싸줌
const User = mongoose.model('User', userSchema)

//모델을 다른파일에서도 쓸 수 있게 해줌
module.exports = { User }