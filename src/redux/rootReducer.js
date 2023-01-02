import { combineReducers } from "redux"
import {cardItems} from './reducer';
import {productData} from "./productReducer";


const Reducers = combineReducers ({
    cardItems,
    productData
});

export default Reducers; 