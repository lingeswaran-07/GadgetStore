const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    password: { type: String, required: true }
});

// Hash password before saving
CustomerSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare password during login
CustomerSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

const CustomerModel = mongoose.model("customer", CustomerSchema);
module.exports = CustomerModel;
