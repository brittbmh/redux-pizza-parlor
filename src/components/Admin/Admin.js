import React, { Component } from 'react';
import axios from 'axios';

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
        axios.get('/order').then((response) => {
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
            <div>
                <table>
                    <thead>
                        <th>Customer Name</th>
                        <th>Time order was placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order, i) => {
                            return (<tr>
                                <td>order.customer_name</td>
                                <td>order.time</td>
                                <td>order.type</td>
                                <td>order.total</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }




}
export default Admin;