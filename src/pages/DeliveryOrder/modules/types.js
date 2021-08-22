import { requestActions } from 'utils/requestActions';

export const GET_DELIVERY_ORDER = requestActions('@delivery-order/GET_DELIVERY_ORDER');
export const CONFIRM_INVOICE = requestActions('@client-invoice/CONFIRM_INVOICE');
export const UPDATE_DATA = requestActions('@delivery-order/UPDATE_DATA');
export const RESET_CLIENT_INVOICE = '@client-invoice/RESET_CLIENT_INVOICE';
export const DELETE_CLIENT_INVOICE = requestActions('@client-invoice/DELETE_CLIENT_INVOICE');

export const ADD_DELIVERY_ORDER = requestActions('@client-invoice/ADD_DELIVERY_ORDER');
export const UPDATE_DELIVERY_ORDER = requestActions('@client-invoice/UPDATE_DELIVERY_ORDER');
export const DELETE_DELIVERY_ORDER = requestActions('@client-invoice/DELETE_DELIVERY_ORDER');

export const ADD_PRODUCT = requestActions('@client-invoice/ADD_PRODUCT');
export const UPDATE_PRODUCT = requestActions('@client-invoice/UPDATE_PRODUCT');
export const DELETE_PRODUCT = requestActions('@client-invoice/DELETE_PRODUCT');
