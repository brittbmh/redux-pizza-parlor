import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

 //Table styling
 let CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    }
  }))(TableCell);

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this.getOrders();
    }

    getOrders = () => {
        axios.get('/api/order').then((response) => {
            console.log(response.data);
            this.setState({
                orders: response.data
            })
        }).catch((error) => {
            console.log('Error in order GET', error);
        })
    }

   


    render() {
        return (
            // Brought in material UI to style the table. TJ
            <Paper className="paper">
            <Table className="admin-table">
              <TableHead>
                <TableRow>
                  <CustomTableCell>Customer Name</CustomTableCell>
                  <CustomTableCell>Time Order Placed</CustomTableCell>
                  <CustomTableCell>Type</CustomTableCell>
                  <CustomTableCell>Cost</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {this.state.orders.map((order, i) => {
                      return(
                  <TableRow key={i}>
                    <TableCell>{order.customer_name}</TableCell>
                    <TableCell>{order.time}</TableCell>
                    <TableCell>{order.type}</TableCell>
                    <TableCell>${order.total}</TableCell>
                  </TableRow> 
                   )
                })}                   
              </TableBody>
            </Table>
          </Paper>
   
        )
    }




}
export default Admin;