// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
// If you want to use jquery
import $ from 'jquery'

import { addLittleGift, addMediumGift, addLargeGift, deliverGifts, updateOutputSled } from './sled'

window.updateOutputSled = updateOutputSled
window.addLargeGift = addLargeGift
window.deliverGifts = deliverGifts

addLargeGift()

const addmoiLarge = async () => {
    await addLargeGift()
    updateOutputSled()
}

window.addmoiLarge = addmoiLarge
/*
204 = all fine
400 = error
451 = renne a faim try again
*/
