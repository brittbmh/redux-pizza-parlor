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
    


     addToCart=()=>{
    let newPizza = {name: this.props.pizzaName, price: this.props.price, id: this.props.pizzaId}
        const action = {type: 'SEND_CHECKOUT', payload: newPizza}
        this.props.dispatch(action)
       this.forceUpdate()
        

    
     
}
     removeFromCart=()=>{
         let badPizza = { name: this.props.pizzaName, price: this.props.price, id: this.props.pizzaId }
         const action = { type: 'REMOVE', payload: badPizza }
        this.props.dispatch(action)
       this.forceUpdate()
    }


    render() {
        console.log(this.props.pizzaId)
        console.log(this.props.reduxStore.checkout.map(item=>item.id))
        if (this.props.pizzaId === this.props.reduxStore.checkout.map(item=>item.id)) { 
let counter = 0
counter ++
console.log(counter)
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
                            
                            <Button onClick={this.removeFromCart}>Remove From Cart</Button>
                            
                        </CardActions>
                    </Card>
                </Grid>
            )}
        else {
            let counter = 0
            counter++
            console.log(counter)  
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

}}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(PizzaItem);
