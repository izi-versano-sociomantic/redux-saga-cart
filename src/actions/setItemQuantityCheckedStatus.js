import { makeActionCreator } from '../utility';
export const CHECKED = true;
export const SET_ITEM_QUANTITY_CHECK_STATUS = "SET_ITEM_QUANTITY_CHECK_STATUS";
export const setItemQuantityCheckStatus = makeActionCreator(SET_ITEM_QUANTITY_CHECK_STATUS,"status");