import axios from 'axios'

import giftFactory from './gift'

import {
    dwarfWorking, dwarfStopWorking, dwarfAlreadyWorking,
    sledIsFull, sendingGift, giftSended, isHungry
} from './graphic'

let sled = []
let isWorking = false

const addLittleGift = async () => {
    if (isWorking) {
        dwarfAlreadyWorking()
    }
    else {
        isWorking = true
        dwarfWorking()
        try {
            await addGift(giftFactory('little'))
        } catch (error) {
            console.error(error);
        }
        dwarfStopWorking()
        isWorking = false
    }
}

const addMediumGift = async () => {
    if (isWorking) {
        dwarfAlreadyWorking()
    }
    else {
        isWorking = true
        dwarfWorking()
        try {
            await addGift(giftFactory('medium'))
        } catch (error) {
            console.error(error);
        }
        dwarfStopWorking()
        isWorking = false
    }
}

const addLargeGift = async () => {
    if (isWorking) {
        dwarfAlreadyWorking()
    }
    else {
        isWorking = true
        dwarfWorking()
        try {
            await addGift(giftFactory('large'))
        } catch (error) {
            console.error(error);
        }
        dwarfStopWorking()
        isWorking = false
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
        sledIsFull()
    } else {
        await timeoutPromise(gift.time)
        sled.push(gift)
    }
}

const deliverGifts = async () => {
    sendingGift()
    await axios.post('http://localhost:8081', { "gifts": sled }).then(response => {
        sled = [];
    }).catch(error => {
        if (error.response.status === 451) {
            isHungry()
        } else {
            console.error(error)
        }
    });
    giftSended()
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