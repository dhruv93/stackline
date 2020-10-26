import React from 'react'
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { ReduxState } from './models/IProducts';
import { AppState } from './rootReducer';


export const TabularData = () => {

    const products: ReduxState = useSelector((state:AppState) => state.products);
    const product = products.items[0];
    
  return <TableContainer style={{width:"100%", textAlign:"center"}}>
    <Table style={{backgroundColor:"white"}}>
      <TableHead>
        <TableRow>
            {Object.keys(product.sales[0]).map(key=> 
              <TableCell style={{textAlign:"left"}} key={key}>
                {key}
              </TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
      {product.sales.map(sale=> 
        <TableRow>{Object.values(sale).map(value => 
          <TableCell style={{ textAlign:"left"}}>
            {value}
          </TableCell>)}
        </TableRow>)}
      </TableBody>
    </Table>
  </TableContainer>
}