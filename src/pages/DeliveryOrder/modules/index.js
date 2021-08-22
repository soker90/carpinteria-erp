import { createReducer, setPayload } from 'store/utils';
import {
  ADD_DELIVERY_ORDER,
  ADD_PRODUCT,
  CONFIRM_INVOICE,
  DELETE_CLIENT_INVOICE,
  DELETE_DELIVERY_ORDER,
  DELETE_PRODUCT,
  GET_DELIVERY_ORDER,
  RESET_CLIENT_INVOICE,
  UPDATE_DATA,
  UPDATE_PRODUCT,
} from './types';

const INITIAL_STATE = {
  _id: '',
  client: '',
  nameClient: '',
  products: [],
  date: null,
  total: 0,
  iva: 0,
  taxBase: 0,
};

const setDataTotals = (state, {
  payload: {
    date,
    totals,
  },
}) => ({
  ...state,
  ...(date && { date }),
  ...(totals),
});

const removeDeliveryOrder = (state, { payload: { id } }) => ({
  ...state,
  deliveryOrders: state.deliveryOrders.filter(deliveryOrder => deliveryOrder._id !== id),
});

const setNInvoice = (state, { payload: { nInvoice } }) => ({
  ...state,
  nInvoice,
});

const ACTION_HANDLERS = {
  [GET_DELIVERY_ORDER.SET]: setPayload,
  [UPDATE_DATA.SET]: setDataTotals,
  [RESET_CLIENT_INVOICE]: () => INITIAL_STATE,
  [DELETE_CLIENT_INVOICE.SUCCESS]: () => INITIAL_STATE,
  [ADD_DELIVERY_ORDER.SET]: setPayload,
  [DELETE_DELIVERY_ORDER.SET]: removeDeliveryOrder,
  [ADD_PRODUCT.SET]: setPayload,
  [UPDATE_PRODUCT.SET]: setPayload,
  [DELETE_PRODUCT.SET]: setPayload,
  [CONFIRM_INVOICE.SET]: setNInvoice,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
