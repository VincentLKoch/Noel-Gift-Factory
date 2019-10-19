// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'  /*
// If you want to use jquery
import $ from 'jquery' */

import { addLittleGift, addMediumGift, addLargeGift, deliverGifts } from './sled'

window.deliverGifts = deliverGifts
window.addLargeGift = addLargeGift