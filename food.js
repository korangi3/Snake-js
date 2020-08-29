let food = randFoodPos()
import {onSnake , expandSnake} from './snake.js'
import { randGridPos } from '/grid.js'
const EXPANSION_RATE = 1

export function update(){
    if(onSnake(food)){
            expandSnake(EXPANSION_RATE)
            food = randFoodPos()
    }

}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function randFoodPos(){
    let newFoodPosition
    while (newFoodPosition ==null || onSnake(newFoodPosition)) {
        newFoodPosition = randGridPos()
    }
    return newFoodPosition
}
