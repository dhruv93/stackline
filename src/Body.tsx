import React from 'react';

import { useSelector } from 'react-redux';
import { ReduxState } from './models/IProducts';
import { AppState } from './rootReducer';
import { TabularData } from './TabularData';

export const Body = () => {
    const products: ReduxState = useSelector((state:AppState) => state.products);

    const product = products.items[0];
    
    return product ? 
    <div style={{width:"100%"}}>
        <TabularData/>  
    </div> : <></>
}