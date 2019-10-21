import axios from 'axios'

import giftFactory from './gift'

import {
    dwarfWorking, dwarfStopWorking, dwarfAlreadyWorking, sledIsFull,
    sendingGift, giftSended, isHungry, updateOutputSled
} from './graphic'

let sled = []
let isWorking = false

const addGift = async (gift) => {
    if (sumWeightGifts() > 12) {
        sledIsFull();
    } else {
        dwarfWorking()
        await timeoutPromise(gift.time);
        sled.push(gift);
        dwarfStopWorking()
        updateOutputSled(sled);
    };
};

const addLittleGift = async () => {
    if (isWorking) {
        dwarfAlreadyWorking()
    }
    else {
        isWorking = true
        try {
            await addGift(giftFactory('little'));
        } catch (error) {
            console.error(error);
        }
        isWorking = false
    }
};

const addMediumGift = async () => {
    if (isWorking) {
        dwarfAlreadyWorking()
    } else {
        isWorking = true
        try {
            await addGift(giftFactory('medium'));
        } catch (error) {
            console.error(error);
        }
        isWorking = false
    }
};

const addLargeGift = async () => {
    if (isWorking) {
        dwarfAlreadyWorking();
    } else {
        isWorking = true
        try {
            await addGift(giftFactory('large'));
        } catch (error) {
            console.error(error);
        }
        isWorking = false;
    }
};

const sumWeightGifts = () => {
    return sled.reduce((sum, currentGift) => sum + currentGift.weight, 0);
};

const timeoutPromise = (second) => {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
};

const deliverGifts = async () => {
    sendingGift();
    try {
        await axios.post('http://localhost:8081', { "gifts": sled })
        sled = [];
        updateOutputSled(sled);
        giftSended();
    }
    catch (error) {
        if (error.response.status === 451) {
            isHungry()
        } else {
            console.error(error);
        }
    }
};

export { addLittleGift, addMediumGift, addLargeGift, deliverGifts }