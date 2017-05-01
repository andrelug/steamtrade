import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
	title: { type: String, required: true },
	link: String,
	text: String,
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	_creator: { type: Schema.ObjectId, ref: 'User' }
});

// encryption here

const Post = mongoose.model('Post', postSchema);
export default Post;
