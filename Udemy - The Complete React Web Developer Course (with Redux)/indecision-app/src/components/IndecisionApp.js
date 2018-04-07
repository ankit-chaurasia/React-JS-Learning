import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    /**
     * Component Lifecycle Methods
     */

     /**
      * invoked immediately after a component is mounted to the DOM
      */
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(()=> ({options: options}));
            }
        } catch (e) {
            console.log('Error while saving data in local storage');
        }
    }

    /**
     * Fires after the component updates (When props or state values get changed)
     * Gives two parameter prevProps and prevState
     */
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Save data!!');
        }
    }

    /**
     * Called when a component is being removed from the DOM
     */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(()=> ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
            };
        });
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist.'
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    handlePick() {
        const randonNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randonNum];
        alert(option);
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOption={!!this.state.options.length} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }    
}

IndecisionApp.defaultProps = {
    options: []
};