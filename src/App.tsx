import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { useReducer } from "react";
import { Collapsible } from "./components/Collapsible";

type Item = {
  title: string;
  children?: Item[];
};

const data: Array<Item> = [
  {
    title: "sunt aut",
    children: [
      {
        title: "lorem ipsum",
        children: [
          {
            title: "lorem ipsum children",
          },
        ],
      },
      {
        title: "lorem ipsum 2",
        children: [
          {
            title: "lorem ipsum 3",
          },
        ],
      },
    ],
  },
  {
    title: "qui est esse",
    children: [
      {
        title: "ipsum lorem",
      },
      {
        title: "ipsum lorem 2",
      },
    ],
  },
];

function App() {
  const [isOpen, toggleOpen] = useReducer((open) => !open, false);

  return (
    <div
      className="App"
      style={{
        position: "relative",
      }}
    >
      <header className="App-header">
        <button onClick={toggleOpen}>Toggle Sidebar</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sidebar open={isOpen} onClose={toggleOpen}>
        <Collapsible items={data} />
      </Sidebar>
    </div>
  );
}

export default App;
