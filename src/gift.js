
class Gift {
    constructor(weight, time) {
        this.weight = weight
        this.time = time
    }

}

/* Maybe latter */
class LittleGift extends Gift {
    constructor() {
        super(1)
    }
}

const giftFactory = (size) => {
    switch (size) {
        case 'little': return new Gift(1, 0.5)
        case 'medium': return new Gift(2, 1)
        case 'large': return new Gift(5, 2)
        default: return null
    }
}


export { Gift };
export default giftFactory