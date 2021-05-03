const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nom:{ type: String, require: true},
    prenom:{ type: String, require: true},
    email: {  type:String, require: true},
    password: { type : String ,require: true},
    role:{ type: String, ennum:['user', 'admin', 'technicien'], default: 'user'}
});

const User = mongoose.model('user',userSchema);

module.exports = User ;