import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (  
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {'Options Length: ' + props.options.length} {
                props.options.length && props.options.map((optionText) => <Option key={optionText} optionText={optionText} handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    );
};

export default Options;