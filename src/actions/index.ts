import { GET_PRODUCT_SUCCESS, GET_PRODUCTS_BEGIN, GET_PRODUCT_FAILURE } from "../constants/actionTypes"
import { Product } from "../models/IProducts"


export const getProductSuccess = (products: Product[]) => {
    return {type: GET_PRODUCT_SUCCESS, payload: products}
}

export const getProductBegin = () => {
    return {type: GET_PRODUCTS_BEGIN}
}

export const getProductFailure = () => {
    return {type: GET_PRODUCT_FAILURE}
}