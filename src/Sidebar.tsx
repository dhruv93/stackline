import { Image, Stack, Text } from '@fluentui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { ReduxState } from './models/IProducts';
import { AppState } from './rootReducer';

export const Sidebar = () => {
    const getProducts :ReduxState = useSelector((state:AppState)=>state.products);
    

return  getProducts.items[0] ? 
        <Stack className="Sidebar" tokens={{childrenGap: 10}} style={{marginRight:"10px", padding: "5px"}}>
            <Image src = {getProducts.items[0].image} style={{height: "200px"}}/>
            <Text style={{alignSelf:"center", fontSize:"larger", fontWeight: "bold"}}>{getProducts.items[0].title}</Text>
            <hr style={{width:"100%", color:"lightgray"}}></hr>
            <Text style={{textAlign:"center"}}>{getProducts.items[0].subtitle}</Text>
            <hr style={{width:"100%", color:"lightgray"}}></hr>
            <Stack horizontal tokens={{childrenGap: 5}}>        
                {getProducts.items[0].tags.map(tag=><Text style={{borderStyle:"ridge",padding:"2px", borderColor:"black"}}>{tag}</Text> )}
            </Stack>
        </Stack> 
        : <></>
}