import React from 'react';

export default props => {
  return (
    <div>
      <h1>Item Component</h1>
      {props.match.params.id && `Selected item id is: ${props.match.params.id}`}
    </div>
  );
};
