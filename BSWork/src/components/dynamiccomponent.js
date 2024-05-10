// DynamicComponent.js
import React from 'react';

const DynamicComponent = ({ componentName }) => {
  const Component = React.lazy(() => import(`./${componentName}`));
  return <Component />;
};

export default DynamicComponent;