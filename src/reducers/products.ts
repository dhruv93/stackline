import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS} from '../constants/actionTypes'
import { IAction } from '../models/IActions';
import { ReduxState } from '../models/IProducts';

const initialState: ReduxState = {
  items: [],
  initiated: false,
  error:""
}
const products = (state = initialState, action:IAction) => {
    switch (action.type) {
      case GET_PRODUCTS_BEGIN:
        return {...state,
          initiated: true,
          error: null
        }
      case GET_PRODUCT_SUCCESS:
        return {...state,
              initiated: true,  
              items: action.payload
          }
      case GET_PRODUCT_FAILURE:
        return {...state,
          error: "FAILURE",
          //items: []
        }
      default:
        return state
    }
  }

export default products;