const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

  username: {
    type: String,
    unique: true,
  },
  email: String,
  profilePhoto: {
    type: String,
    default: 'https://res.cloudinary.com/phector27/image/upload/v1618499996/7_mpg5wg.png'
  },
  password: {
    type: String,
    required: true
  },
  videoProfile: {
    type: String,
    default: 'https://www.youtube.com/watch?v=KVakLLMBQxg'
  },
  descriptionUser: {
    type: String,
    default: 'Modifica esta descripción para tener un perfil adaptado a ti :)'
  },
  name: {
    type: String,
    default: ''
  },
  phoneNumber: Number,
  role: {
      type: String,
      enum: ['Admin', 'User', 'Inactive'],
      default: 'User',
    }
  }, { timestamps: true })

module.exports = mongoose.model('User', userSchema)