import data from './data.json';
import { useState } from 'react';
import TransferList from './components/TransferList';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  const [list, setList] = useState(data);

  return (
    <div className='container'>
      <h1>NXLog React test tasks</h1>
      <p>The challenge requires creating two React components, a "Transfer List" and a "Password generator". Both components are implemented using React hooks and functional components. The challenge also expects that the components will be implemented using React Create App and styled using SASS/SCSS.</p>
      <p>This challenge took approximately <b>7 hours</b> to complete. The "Transfer List" component took 2 hours to build and an additional 1 hour to write tests. Similarly, the "Password generator" component took 2 hours to build and an additional 1 hour to write tests.</p>
      <h2>Transfer List</h2>
      <p>The "Transfer List" component allows users to transfer items between two columns, each containing different items and pagination with controls. It has buttons to transfer selected items or all items between columns and the buttons behavior is based on the selected items and the items present in the columns</p>
      <TransferList list={list} onChange={setList} />
      <h2>Password generator</h2>
      <p>The "Password generator" component allows users to generate a password with a certain character length based on selected options such as including lowercase, uppercase, numbers, and symbols. It includes a copy button to copy the generated password to the clipboard</p>
      <PasswordGenerator />

    </div>
  );
}

export default App;
