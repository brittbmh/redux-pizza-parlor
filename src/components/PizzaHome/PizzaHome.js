import React, { Component } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem.js';

// material-ui import statements
import Grid from '@material-ui/core/Grid';

class PizzaHome extends Component {

    constructor(props) {
        super(props);

        this.state={
            pizzaArray: [],
        }
    }

    // load the pizza data from the server
    componentDidMount = () => {
        this.getPizzaInfo();
    }

    // Get the pizza information from the pizza table on the database
    getPizzaInfo = () => {
        // send GET request to update the like value for an item clicked
        axios({
            method: 'GET',
            url: `/api/pizza`,
        }).then((response) => {
            // put the data in the local state array galleryItems
        this.setState({
            pizzaArray: response.data,
        })
        }).catch((error) => {
            // Console log and alert for error GET
            console.log(`Error in axios GET: ${error}`);
            alert(`Error getting pizza data.`);
        });
    } // end getPizzaInfo

    // function to display pizzas items on the DOM
    displayPizza = (pizzaArrayIn) => {

        // array for items to be returned when the function is called
        let displayArray = [];
    
        // loop through the array sent and add Jsx and click handlers to the data
        for( let i in pizzaArrayIn ) {
            // adds the pizzas to the display
            displayArray.push(<PizzaItem  key={pizzaArrayIn[i].id}
                                            pizzaId={pizzaArrayIn[i].id}
                                            pizzaName={pizzaArrayIn[i].name}
                                            description={pizzaArrayIn[i].description}
                                            price={pizzaArrayIn[i].price}
                                            imagePath={pizzaArrayIn[i].image_path}
                                            />);
        }
    
        return displayArray;
    
    }

    render() {
        return (
            <Grid container spacing={24}>                
                {this.displayPizza(this.state.pizzaArray)}
            </Grid>
        )
    }
}

export default PizzaHome;