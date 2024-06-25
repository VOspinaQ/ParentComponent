import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hola, soy el componente Padre!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
