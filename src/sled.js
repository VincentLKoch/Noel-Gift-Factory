import axios from 'axios'

import giftFactory from './gift'

let sled = []
let isAdding = false

const addLittleGift = async () => {
    if (isAdding) {
        console.warn("The drawf is already working !"); // TODO
    }
    else {
        isAdding = true
        try {
            await addGift(giftFactory('little'))
        } catch (error) {
            console.log("in error full :");
        }
        isAdding = false
    }
}

const addMediumGift = async () => {
    if (isAdding) {
        console.warn("The drawf is already working !"); // TODO
    }
    else {
        isAdding = true
        try {
            await addGift(giftFactory('medium'))
        } catch (error) {
            console.log("in error full :");
        }
        isAdding = false
    }
}

const addLargeGift = async () => {
    if (isAdding) {
        console.warn("The drawf is already working !"); // TODO
    }
    else {
        isAdding = true
        try {
            await addGift(giftFactory('large'))
        } catch (error) {
            console.log("in error full :");
        }
        isAdding = false
    }
}

const sumWeightGifts = () => {
    return sled.reduce((sum, currentGift) => sum + currentGift.weight, 0)
}

const timeoutPromise = (second) => {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}

const addGift = async (gift) => {
    if (sumWeightGifts() > 12) {
        throw 'Sled is full'
    } else {
        await timeoutPromise(gift.time)
        sled.push(gift)
    }
}

const deliverGifts = async () => {
    console.log('Sled : ')
    console.log(sled)

    await axios.post('http://localhost:8081', { "gifts": sled }).then(response => {
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

let updateOutputSled = () => {
    let output = '';
    for (let result in sled) {
        for (let property in sled[result]) {
            output += property + ': ' + sled[result][property] + '; ';
        }
        output += '<br>'
    }
    document.getElementById("outputEx1").innerHTML = output;
}

export { addLittleGift }
export { addMediumGift }
export { addLargeGift }

export { deliverGifts }

export { updateOutputSled }