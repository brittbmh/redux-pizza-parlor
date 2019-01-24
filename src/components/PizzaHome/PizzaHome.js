import React, { Component } from 'react';
import axios from 'axios';

// material-ui import statements
import Grid from '@material-ui/core/Grid';

class PizzaHome extends Component {

    constructor(props) {
        super(props);

        this.state={
            pizzaArray: [],
        }
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

    // function to display gallery items on the DOM
    displayPizza = (pizzaArrayIn) => {

        // array for items to be returned when the function is called
        let displayArray = [];
    
        // loop through the array sent and add Jsx and click handlers to the data
        for( let i in pizzaArrayIn ) {
            // adds the output from GalleryItem.js to the array
            displayArray.push(<PizzaItem  key={galleryArrayIn[i].id}
                                            imgId={galleryArrayIn[i].id}
                                            image= {galleryArrayIn[i].path}
                                            description={galleryArrayIn[i].description}
                                            likes={galleryArrayIn[i].likes}
                                            galleryRefresh={this.props.galleryRefresh}
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