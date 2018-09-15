import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Item from './Item';
import Contact from './Contact';
import NotFound from './NotFound';

const Links = () => (
  <div>
    <Link to={`/`}>Home</Link>
    <br />
    <Link to={`/item`}>Item</Link>
    <br />
    <Link to={`/contact`}>Contact</Link>
  </div>
);

/* Links with parameters */
// const Links = () => (
//   <div>
//     <Link to={`/`}>Home</Link>
//     <br />
//     <Link to={`/item/123`}>Item with id = 123</Link>
//     <br />
//     <Link to={`/contact`}>Contact</Link>
//   </div>
// );

/* ----------------------- Set up Routes ------------------------ */
const Routes = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Route path="/" component={Home} />
      <Route path="/item" component={Item} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

// Above we are seeing that Home component is displaying along with all the other routes
/* ----------------------- Use of exact prop to match route strictly ------------------------ */
// const Routes = () => (
//   <BrowserRouter>
//     <div>
//       <Links />
//       <Route exact path="/" component={Home} />
//       <Route path="/item" component={Item} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/contact" component={Contact} />
//     </div>
//   </BrowserRouter>
// );

/* ----------------------- Set up 404 page ------------------------ */
// const Routes = () => (
//   <BrowserRouter>
//     <div>
//       <Links />
//       <Route exact path="/" component={Home} />
//       <Route path="/item" component={Item} />
//       <Route path="/contact" component={Contact} />
//       <Route component={NotFound} />
//     </div>
//   </BrowserRouter>
// );

// Here NotFound is displaying along with all the routes
/* ----------------------- Set up 404 page using Switch component ------------------------ */
// const Routes = () => (
//   <BrowserRouter>
//     <div>
//       <Links />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/item" component={Item} />
//         <Route path="/contact" component={Contact} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

/* ----------------------- Query Strings and URL Parameters ------------------------ */
// const Routes = () => (
//   <BrowserRouter>
//     <div>
//       <Links />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/item/:id" component={Item} />
//         <Route path="/contact" component={Contact} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

export default () => <Routes />;
