import React, { useContext } from "react"
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"

export function useBudgets(){
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpense] = useLocalStorage("expenses", [])
    
    function getBudgetExpenses(budgetId){
        return expenses.filter(expenses => expenses.budgetId === budgetId)
    }
    function addExpense({description, amount, budgetId}){
        setExpense(prevExpenses =>{
            return [...prevExpenses, {id: uuidV4(), description, amount, budgetId}]
        }
        )
    }
    function addBudget({name, max}){
        setBudgets(prevBudgets =>{
            if(prevBudgets.find(budgets => budgets.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        }
        )
    }
    function deleteBudget({id}){
        setExpense(prevExpenses => {
            return prevExpenses.map(expense => {
                if (expense.budgetId !== id) return expense
                return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}
            })
        })
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budgets => budgets.id !== id)
        })
    }
    function deleteExpense({id}){
        setExpense(prevExpenses => {
            return prevExpenses.filter(expenses => expenses.id !== id)
        })
    }

    return <BudgetsContext.Provider value={{
        budgets, expenses, getBudgetExpenses, addExpense, addBudget, deleteBudget, deleteExpense
    }}> {children} </BudgetsContext.Provider>
}