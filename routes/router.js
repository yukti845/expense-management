const router = require("express").Router()
const {addExpense, getExpenseByDate, getExpenseByHead, getExpenseByTag} = require("../controllers/expense-controller")

router.post('/add-expense', addExpense)

router.get('/get-expense-date', getExpenseByDate)

router.get('/get-expense-head', getExpenseByHead)

router.get('/get-expense-tag', getExpenseByTag)

module.exports = router