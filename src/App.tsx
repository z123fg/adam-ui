import React from 'react';
import Icon, {  IconColor, IconSize } from './components/Icon/Icon'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Customized UI</h1>
      <h2>Default</h2>
      <Icon>Default Icon</Icon>
      <h2>Different Size</h2>
      <Icon iconSize={IconSize.Large}>Large Icon</Icon>
      <Icon iconSize={IconSize.Medium}>Medium Icon</Icon>
      <Icon iconSize={IconSize.Small}>Small Icon</Icon>

      <h2>Different Type Icon with Colors</h2>
      <Icon iconColor={IconColor.Black}>Default Icon</Icon>
      <Icon iconColor={IconColor.Blue}>Safe Icon</Icon>
      <Icon iconColor={IconColor.Red}>Danger Icon</Icon>
      <Icon iconColor={IconColor.Gray}>Disabled Icon</Icon>

    </div>
  );
}

export default App;
