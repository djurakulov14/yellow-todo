import {arr} from './modules/db.js'
let addBox = document.querySelector('.add_box')
let addBox2 = document.querySelector('.add_box2')
let addBox3 = document.querySelector('.add_box3')



let date = new Date()
for(let item of arr){
    
    date.setDate(date.getDay() + item.left)
    
    if(item.left == 0) {
        addBox.innerHTML += `
            <div class="box" id="${item.id}">
                <div class="head">
                <label>
                <input type="checkbox" name="travel-notes" class="real-checkbox">
                <span class="custom-checkbox"></span>
                </label>
                <p class="task">Buy S Plaid!</p>
                </div>
                <p class="dsc">${item.title}</p>
                <p class="day">Today</p>
            </div>
        `
    } else if(item.left < 2){
        addBox2.innerHTML += `
            <div class="box">
            <div class="head">
            <label>
                <input type="checkbox" name="travel-notes" class="real-checkbox">
                <span class="custom-checkbox"></span>
            </label>
            <p class="task">Buy S Plaid!</p>
            </div>
                <p class="dsc">${item.title}</p>
                <p class="day">Tomorrow</p>
            </div>
        `
    } else {
        addBox3.innerHTML += `
            <div class="box">
                <div class="head">
                <label>
                <input type="checkbox" name="travel-notes" class="real-checkbox">
                <span class="custom-checkbox"></span>
                </label>
                <p class="task">Buy S Plaid!</p>
                </div>
                <p class="dsc">${item.title}</p>
                <p class="day">${date}</p>
            </div>
        `
    }
    let fuck = document.querySelectorAll('input[type=checkbox]')

    // if (item.completed === true) {
    //     fuck.forEach(elem => {
    //         if (item.completed === true) {
    //             elem.setAttribute('checked', 'checked')
    //         }
    //     })
    // }

}

