import { makeActionCreator } from '../utility';
export const INCLUDE_ITEM_QUANTITY = "INCLUDE_ITEM_QUANTITY";
export const includeItemQuantity = makeActionCreator(INCLUDE_ITEM_QUANTITY,"id","isIncluded");
