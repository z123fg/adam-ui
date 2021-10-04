import React from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";

import Checkbox from "./components/Checkbox/Checkbox"
import Message, {
  MessageSize,
  MessageColor,
  MessageType,MessagePosition
} from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <h1>Adam UI</h1>
      <h4>Default</h4>
      <MyButton>Default</MyButton>
      <MyButton disabled>Disabled</MyButton>
      <MyButton isDark>Dark Button</MyButton>
      <MyButton className="btn-red">Additional Class Name</MyButton>
      <h4>Sizes</h4>
      <MyButton buttonSize={ButtonSize.Small}>Small Button</MyButton>
      <MyButton buttonSize={ButtonSize.Large}>Large Button</MyButton>
      <h4>Types</h4>
      <MyButton >Default Button</MyButton>
      <MyButton buttonType={ButtonType.Primary}>Primary Button</MyButton>
      <MyButton buttonType={ButtonType.Secondary}>Secondary Button</MyButton>
      <MyButton buttonType={ButtonType.Danger}>Danger Button</MyButton>
      <MyButton href={"https://www.google.com"}  buttonType={ButtonType.Link}>Link Button</MyButton>
      <MyButton href={"https://www.google.com"} buttonType={ButtonType.Link} disabled>Link Button</MyButton>
      
      <br /> <br />
      <Checkbox />
      <br /> <br />

      <Message
                msgPosition={MessagePosition.Top}
        msgContent='This is a plain message' />
      
      <Message
        msgClick={true}
        msgColor={MessageColor.Red}
        msgPosition={MessagePosition.Bottom}
      msgContent='This is a red message' />

      <Message
      msgClick={true}
        msgSize={MessageSize.Large}
        msgContent='This is a large message.' />
      
      <Message
        msgClick={true}
        msgType={MessageType.Urgent}
        msgPosition={MessagePosition.Bottom}
      msgContent='This is a urgent message'/>
      
      <br />
    </div>
  );
}

export default App;
