//Dishdetail Component - Juanjo Balcazar Soto
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

    class CommentForm extends Component {

        constructor(props){
            super(props);
            this.state = {                
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }

        handleSubmit(values){
            console.log("Current state is: "+ JSON.stringify(values));
            alert("Current state is: "+ JSON.stringify(values));
            this.toggleModal();
        }

        render(){            
            return( 
                <React.Fragment>                
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-edit fa-lg"></span>Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group"> 
                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating" 
                                            className="form-control">                                                
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group"> 
                                    <Col>
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" id="author" name="author"
                                                placeholder="Your Name"
                                                className="form-control"
                                                validators={{
                                                    minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                />
                                        <Errors className="text-danger" model=".author" show="touched" 
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Mast be 15 characters less'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">                                    
                                    <Col>
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="6"
                                                className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">                            
                                    <Col md={{size:10}}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </React.Fragment> 
            )
        }
    }


    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />                        
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>  
                        <CardText>{dish.description}</CardText>  
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderComments({comments}){
        const commentData = comments.map((comment) =>{
            const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format( new Date(comment.date));
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {date}</p>
                </li>
            )
        })
        return(      
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul className="list-unstyled">
                    {commentData}
                </ul>
                <CommentForm />
            </div>
        )
    }
   
    const Dishdetail = (props) => {
        if (props.dish != null){
            return(  
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row"> 
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />                        
                    </div>   
                </div>         
            );
        }else{
            return(
                <div></div>
            )
        }
    }

export default Dishdetail;
