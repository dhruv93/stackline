import './App.css';
import React, { useEffect } from 'react';
import {Stack, StackItem} from '@fluentui/react'
import { useDispatch, useSelector } from 'react-redux';

import { ReduxState } from './models/IProducts';
import { getProductBegin, getProductSuccess } from './actions';
import { AppState } from './rootReducer';

import { Header } from "./Header";
import { Body } from './Body';
import { Sidebar } from './Sidebar';


const App = () => {
    const dispatch = useDispatch();
    const getProducts :ReduxState = useSelector((state:AppState)=>state.products);

    const data = require('./mockData.json')

    useEffect(()=>{
        getProducts.initiated ? 
        dispatch(getProductSuccess(data)) 
        : dispatch(getProductBegin());        
    },[data,dispatch, getProducts.initiated])
  return (
    <div className="App">
      <Stack>
      <StackItem>
      <Header/>
      </StackItem> 
        <Stack horizontal tokens={{childrenGap: 10}}>
          <Sidebar/>
          <Body/>
        </Stack>
      </Stack>
    </div>)

}

export default App;
