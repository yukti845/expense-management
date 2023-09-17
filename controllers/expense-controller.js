const Expense = require("../model/Expense")
const dayjs = require('dayjs')

const addExpense = async(req, res) => {
    try{
        const {date, amount, head, tag} = req.body

        const newExpense = new Expense({
            date: date,
            amount: amount,
            head: head,
            tag: tag
        })

        await newExpense.save()
        return res.status(200).json({
            success: true,
            msg: "Expense added successfully"
        }
        )
    }
    catch(err){ 
        return res.status(400).json('Error: ' + err)
    }
}

const getExpenseByDate = async(req, res) => {
    const {date} = req.query

    const startDate = dayjs(date).startOf('day').toDate()
    const endDate = dayjs(date).endOf('day').toDate()

    console.log("33>>>>>>>>", startDate)
    console.log("34>>>>>>>>", endDate)

    const findExpenses = await Expense.find({$and:[{date:{$lte:new Date(startDate)}},{date:{$gte:new Date(endDate)}}]})
    if(!findExpenses || findExpenses.length===0){
        return res.status(404).json({
            success: false,
            msg: "No expenses for this date"
        })
    }
    return res.status(200).json({
        success: true,
        data: findExpenses,
        msg: "Expenses found"
    })
}

const getExpenseByHead = async(req, res) => {
    const {head} = req.query

    const findExpenses = await Expense.find({head: head})
    if(!findExpenses){
        return res.status(404).json({
            success: false,
            msg: "No expenses for this date"
        })
    }

    return res.status(200).json({
        success: true,
        data: findExpenses,
        msg: "Expenses found"
    })
}

const getExpenseByTag = async(req, res) => {
    const {tag} = req.query

    const findExpenses = await Expense.find({tag: tag})
    if(!findExpenses){
        return res.status(404).json({
            success: false,
            msg: "No expenses for this date"
        })
    }

    return res.status(200).json({
        success: true,
        data: findExpenses,
        msg: "Expenses found"
    })
}

module.exports = {addExpense, getExpenseByDate, getExpenseByHead, getExpenseByTag}