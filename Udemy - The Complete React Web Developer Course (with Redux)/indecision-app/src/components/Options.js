import React from 'react';
import Option from './Option';

const Options = (props) => (  
        <div>
            <button onClick={props.handleDeleteOptions} className='button button--link'>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.length && props.options.map((optionText) => <Option key={optionText} optionText={optionText} handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    );

export default Options;