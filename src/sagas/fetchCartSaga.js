import { takeLatest, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    SET_CURRENT_USER,
    setCartItems
} from './../actions'

function* fetchCart({user}) {
    const { id } = user;
    const response = yield fetch(`http://localhost:8081/cart/${id}`);
    const { items } = yield response.json();
    const parsed    = items.map(item => ({
        id: item.id, 
        quantity: item.quantity,
        isIncluded: JSON.parse( item.isIncluded ) 
    }));
    // eslint-disable-next-line 
    console.log( 'recieved',parsed );
    yield put(setCartItems( parsed ));
}

export function* fetchCartSaga() {
    yield takeLatest(SET_CURRENT_USER, fetchCart);
}