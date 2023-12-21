import React from 'react';

const DeepChildComponent = ({ title }) => (
    <h1>{title}</h1>
);
const ChildComponent = ({ title }) => (
    <DeepChildComponent title={title} />
);

const ParentComponent = () => (
  <ChildComponent title={"Ala ma kota"} />
);

export default ParentComponent;