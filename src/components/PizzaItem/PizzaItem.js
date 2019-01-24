import React, { Component } from 'react';
import {connect} from 'react-redux'
// material-ui import statements
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class PizzaItem extends Component {
    

     addToCart(){
    
        const action = {type: 'SEND_CHECKOUT', payload: {name: this.props.pizzaName, price: this.props.price}}
        this.props.dispatch(action).setState({
            
        })
     
}
     



    render() {

        return (
            <Grid item md={3}>
                <Card className="item-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={this.props.description}
                            className="item-img"
                            height="340"
                            image={this.props.imagePath}
                            title={this.props.pizzaName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.pizzaName}
                            </Typography>
                            <Typography component="p">
                                {this.props.description}
                            </Typography>
                            <Typography component="p">
                                {this.props.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={this.addToCart}>Add to Cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

export default connect()(PizzaItem);