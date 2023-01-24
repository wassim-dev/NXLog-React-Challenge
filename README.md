#NXLog React Test Tasks
This repository contains two React components, a "Transfer List" and a "Password Generator", that were created as part of a challenge. Both components were implemented using React hooks and functional components and were built using React Create App and styled using SASS/SCSS. The challenge took approximately 7 hours to complete, with 2 hours for building the "Transfer List" component and 1 hour for writing tests, and 2 hours for building the "Password Generator" component and 1 hour for writing tests.

##Transfer List
The "Transfer List" component allows users to transfer items between two columns, each containing different items and pagination with controls. It has buttons to transfer selected items or all items between columns and the buttons behavior is based on the selected items and the items present in the columns.

###Usage
```
function App() {
  const [list, setList] = useState(data);

  return (
    <TransferList list={list} onChange={setList} />
  );
}
```

##Password Generator
The "Password Generator" component allows users to generate a password with a certain character length based on selected options such as including lowercase, uppercase, numbers, and symbols. It includes a copy button to copy the generated password to the clipboard.

###Usage
```
function App() {
  return (
    <PasswordGenerator />
  );
}
```
Please note that the data and onChange props are not mentioned in the usage of the password generator component because the task has not provided any information about the props of the component.

##Conclusion
This challenge was a good way to practice creating custom react components and using React hooks, and also a good practice to implement the best practices in creating a react application such as creating functional components and using React Create App.