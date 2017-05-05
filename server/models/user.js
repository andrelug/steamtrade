import mongoose from 'mongoose';

const {
    Schema
} = mongoose;

const userSchema = new Schema({
    personaname: {
        type: String,
        minLength: [5, 'Nome de usuário precisa ter 5 caracteres ou mais.']
    },
    realname: String,
    password: {
        type: String,
        minLength: [8, 'A senha precisa ter 8 caracteres ou mais.']
    },
    avatar: String,
    loccountrycode: String,
    locstatecode: String,
    loccityid: Number,
    communityvisibilitystate: Number,
    inventory: {
        assets: Array,
        descriptions: Array,
        total_inventory_count: Number
    },
    openId: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// encryption here

const User = mongoose.model('User', userSchema);
export default User;
