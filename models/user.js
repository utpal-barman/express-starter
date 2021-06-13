import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
  },
  age: {
    type: Number,
    required: true,
    default: '',
  },
  profession: {
    type: String,
    required: true,
    default: '',
  },
  location: {
    type: String,
    required: true,
    default: '',
  },
});

export default mongoose.model('User', userSchema);
