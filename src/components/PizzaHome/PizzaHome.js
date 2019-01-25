import React, { Component } from 'react';
import axios from 'axios';
import PizzaItemA from '../PizzaItem/PizzaItemA.js';
import PizzaItemB from '../PizzaItem/PizzaItemB.js';
import { connect } from 'react-redux'
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
        for( let i = 0; i < pizzaArrayIn.length; i++) {
            // adds the pizzas to the display
            console.log(i)
            console.log(pizzaArrayIn[i].id)
            console.log(this.props.reduxStore.checkout.map(item => item.id))
            if (pizzaArrayIn[i].id == this.props.reduxStore.checkout.map(item => item.id)){
                displayArray.push(<PizzaItemB  key={pizzaArrayIn[i].id}
                                            pizzaId={pizzaArrayIn[i].id}
                                            pizzaName={pizzaArrayIn[i].name}
                                            description={pizzaArrayIn[i].description}
                                            price={pizzaArrayIn[i].price}
                                            imagePath={pizzaArrayIn[i].image_path}
                                            getPizzaInfo={this.getPizzaInfo}
                                            displayPizza={this.displayPizza}
                                            pizzaArrayIn={this.pizzaArrayIn}
                                            />);
        }
            else {
                displayArray.push(<PizzaItemA key={pizzaArrayIn[i].id}
                    pizzaId={pizzaArrayIn[i].id}
                    pizzaName={pizzaArrayIn[i].name}
                    description={pizzaArrayIn[i].description}
                    price={pizzaArrayIn[i].price}
                    imagePath={pizzaArrayIn[i].image_path}
                    getPizzaInfo={this.getPizzaInfo}
                displayPizza={this.displayPizza}
                pizzaArrayIn={this.pizzaArrayIn}
                />);}
    
   
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
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(PizzaHome);