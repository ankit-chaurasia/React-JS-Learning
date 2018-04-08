import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount = () => {
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

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Save data!!');
        }
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions = () => {
        this.setState(()=> ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
            };
        });
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist.'
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    handlePick = () => {
        const randonNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randonNum];
        this.setState((prevState) => ({selectedOption: option }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    render() {
        const subTitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className='container'>
                    <Action hasOption={!!this.state.options.length} handlePick={this.handlePick} />
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }    
}
