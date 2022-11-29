const allButtons = [9, 8, 7, 4, 5, 6, 1, 2, 3, 0]
const buttons = document.querySelector('.buttons')
const result = document.querySelector('.result')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const division = document.querySelector('.division')
const deleteButton = document.querySelector('.delete')
const equal = document.querySelector('.equal')
const resultFun = () => {
    result.value = eval(result.value)
}
const deleteFun = () => {
    result.value = result.value.slice(0, -1)

}
const addToInput = (item) => {
    result.value += item
    // console.log(result.value)

}
const operatorInputPlus = () => {
    result.value += "+"
    // console.log(result)

}
const operatorInputMinus = () => {
    result.value += "-"
    // console.log(result)

}
const operatorInputMultiply = () => {
    result.value += "*"
    // console.log(result)

}
const operatorInputDivision = () => {
    result.value += "/"
    // console.log(result)

}
allButtons.map((item, index) => {
    buttons.innerHTML += `<div> <button onclick="addToInput(${item})">${item}</button> </div>`
})

plus.addEventListener('click', operatorInputPlus)
minus.addEventListener('click', operatorInputMinus)
multiply.addEventListener('click', operatorInputMultiply)
division.addEventListener('click', operatorInputDivision)
deleteButton.addEventListener('click', deleteFun)
equal.addEventListener('click', resultFun)