const increaseButtonEl = document.querySelector('.counter__button--increase')
const decreaseButtonEl = document.querySelector('.counter__button--decrease')
const counterValueEl = document.querySelector('.counter__value')
const resetButtonEl = document.querySelector('.counter__reset-button')
const counterEl = document.querySelector('.counter')
const counterTitleEl = document.querySelector('.counter__title')



increaseButtonEl.addEventListener('click', incrementCounter)
//for increment anywhere we need 
document.addEventListener('keydown', incrementCounter)

const incrementCounter = () => {
    //get current value of counter
    const currentValue = counterValueEl.textContent
    
    //convert value to number type
    const currentValueAsNumber = +currentValue
    
    //increment by 1
    let newValue = currentValueAsNumber + 1

    //check if new value > 10
    if (newValue > 10) {
        //then force it to ten - actually its depend to us
        newValue = 10;

        //give visual indicator for user
       counterEl.classList.add('counter--limit')
       
        //update counter title and say limit has been reached
        counterTitleEl.innerHTML = 'Limit! buy <b>pro</b> for > 10'
        
        //disable increase and decrease button
        increaseButtonEl.disabled = true
        decreaseButtonEl.disabled = true

        //unfocus button
        increaseButtonEl.blur()
    }

    //set counter element with new value
    counterValueEl.textContent = newValue
}



decreaseButtonEl.addEventListener('click', () => {

    //take the result of increment by calling currentValue
    const currentValue = counterValueEl.textContent

    //change the value from string to number by adding new variable
    const currentValueAsNumber = +currentValue

    //adding new variable to increment the value by adding -1
    let newValue = currentValueAsNumber - 1

    //check if new value is < 0 then do something
    newValue < 0 ? newValue = 0 : 

    //update the last value with call the variable counterValueEl
    counterValueEl.textContent = newValue

    //unfocus button 
    decreaseButtonEl.blur()
})


resetButtonEl.addEventListener('click', ()=> {

    //take the last value by calling counterValue and set it to ( 0 ) number or ('0')
        counterValueEl.textContent = 0

        //reset background color
        counterEl.classList.remove('counter--limit')

        //reset counter title
        counterTitleEl.textContent = 'Fancy Counter'

        //enable increase and decrease button
        increaseButtonEl.disabled = false
        decreaseButtonEl.disabled = false

        //unfocus (blur) reset button
        resetButtonEl.blur()
})





