'use strict'

const carx = {
    name:'bmw',
    color:'black',
    get carname(){
        return this.name
    },

    set carname(name){
        return this.name = name
    }
}

console.log(car.carname)
console.log(car.carname = 'merc')

function car(name, color, bonus){
    this.name = name
    this.color = color
    let extraBonus = bonus

    this.info = function(){
        console.log(` Name of car: ${this.name}, color is ${black}. There is some bonus`)
    }

    this.getBonus = function(){
        return extraBonus
    }

    this.setBonus = function(bonus){
        if(typeof bonus ==='number' && bonus>0 && bonus<100){
            extraBonus = bonus
        }else{
            console.log('Something went wrong')
        }
    }
}
const bmw = new car('bmw', 'black', 10)

console.log(bmw.getBonus())
