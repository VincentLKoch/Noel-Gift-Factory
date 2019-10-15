import axios from 'axios'

import giftFactory from './gift'

let sled = []

const addLittleGift = () => {
    try {
        addGift(giftFactory('little'))
    } catch (error) {
        /* Sled Full */
    }
}

const addMediumGift = () => {
    try {
        addGift(giftFactory('medium'))
    } catch (error) {
        /* Sled Full */
    }
}

const addLargeGift = /* async */ () => {
    try {
        /* await */ addGift(giftFactory('large'))
    } catch (error) {
        /* Sled Full */
    }
}

const sumWeightGifts = (sled) => {
    let sum = 0
    for (let i = 0; i < sled; i++) {
        sum += sled[i].weight
    }
    return sum
}

const addGift = (gift) => {
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
        sled = [];
    }).catch(error => {

        console.log("error.response.status: ");
        console.log(error.response.status);
        if (error.response.status === 451) {
            //TODO
            //Hungry
            console.warn('Status 451')
        } else {
            console.error(error)
        }

        /* document.getElementById("outputEx4Text").innerHTML = error.response.statusText */
    });
}



export {addLittleGift}
export {addMediumGift}
export {addLargeGift}

export {deliverGifts}