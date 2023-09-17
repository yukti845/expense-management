const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true 
    },
    amount: {
        type: Number,
        required: true
    },
    head: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense