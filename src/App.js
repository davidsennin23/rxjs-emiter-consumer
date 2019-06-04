import React from 'react';
import './App.css';
import Display from './components/Display'
import Input from './components/Input'
import TextEmiter from './behaviors/text/TextEmiterHOC'
import TextConsumer from './behaviors/text/TextConsumer'

const InputEmiter = TextEmiter()(Input);
const DisplayConsumer = TextConsumer()(Display);

function App() {
  return (
    <div className="App">
      <InputEmiter></InputEmiter>
      <DisplayConsumer></DisplayConsumer>
    </div>
  );
}

export default App;
