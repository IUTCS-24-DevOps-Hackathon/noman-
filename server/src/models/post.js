import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PostSchema = new Schema({

  image: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  numberOfLikes: {
    type: Number,
    default: 0,
  }

});

const Post = model('Post', PostSchema);
export default Post;