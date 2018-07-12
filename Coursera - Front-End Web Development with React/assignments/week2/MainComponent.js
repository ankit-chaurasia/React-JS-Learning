// container component for application
// responsible for application state
import React, { Component } from 'react';
import Menu from './menu';
import DishDetail from './dish-detail';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Contact from './contact';
import About from './about';
import { DISHES }  from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }

    onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
    }

  render() {

    const DishWithId = ({match}) => { //route passes in {match, location, history}
      return (
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId, 10))[0]} 
                    comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId, 10))}/>
      );
    }

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} /> 
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
