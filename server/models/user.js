import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minLength: [5, 'Nome de usuário precisa ter 5 caracteres ou mais.']
	},
	password: {
		type: String,
		required: true,
		minLength: [8, 'A senha precisa ter 8 caracteres ou mais.']
	},
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
});

// encryption here

const User = mongoose.model('User', userSchema);
export default User;
