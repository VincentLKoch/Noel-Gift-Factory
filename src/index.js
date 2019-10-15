// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
// If you want to use jquery
import $ from 'jquery'
import axios from 'axios'

/* import Gift from './gift' */
import giftFactory from './gift'
import Gift from './gift'


/*
model
model.gift
model.gift.length
*/


const littleGift = () => {
    try {
        addGift(giftFactory('little'))
    } catch (error) {
        /* Sled Full */
    }
}

const mediumGift = () => {
    try {
        addGift(giftFactory('medium'))
    } catch (error) {
        /* Sled Full */
    }
}

const largeGift = /* async */ () => {
    try {
        /* await */ addGift(giftFactory('large'))
    } catch (error) {
        /* Sled Full */
    }
}


var sled = []

const sumWeightGifts = (sled) => {
    /*     if (sled == null) {
            return 0
        } */
    let sum = 0
    for (let i = 0; i < sled; i++) {
        sum += sled[i].weight
    }
    return sum
}

const addGift = (gift) => {

    console.log("Add gift :")
    console.log(gift)
    console.log("Sled : ")
    console.log(sled)

    const sumWeightInSled = sumWeightGifts(sled)
    if (gift.weight + sumWeightInSled > 12) {
        console.error('Sled is full')
    } else {
        setTimeout(sled.push(gift), gift.time * 100)

    }

}

const deliverGifts = () => {
    console.log('Sled : ')
    console.log(sled)

    axios.post('http://localhost:8081', { "gifts": sled }).then(response => {
        console.log(response)
        /* document.getElementById("outputEx4Text").innerHTML = response.data */
    }).catch(error => {

        console.log("error.response.status: ");
        console.log(error.response.status);
        if (error.response.status === 451) {
            //TODO
            //Hungry
            console.log('Status 451')
        } else {
            console.error(error)
        }

        /* document.getElementById("outputEx4Text").innerHTML = error.response.statusText */
    });

    sled = [];
}

console.log('medium : ')
mediumGift()
console.log('large : ')
largeGift()

console.log('Delivering gifts')
console.log(deliverGifts())

console.log('little : ')
littleGift()

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())

littleGift()
console.log('Delivering gifts')
console.log(deliverGifts())



/*
204 = all fine
400 = error
451 = renne a faim try again
*/
