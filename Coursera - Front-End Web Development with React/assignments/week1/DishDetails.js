import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

class DishDetails extends Component {
    render() {
        const dish = this.props.dish;
        return (
            <div>
                {dish &&
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                }
            </div>
        );
    }
}

export default DishDetails;