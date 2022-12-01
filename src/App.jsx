import "./App.scss";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown.jsx/Dropdown";
import { useState } from "react";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import Links from "./components/Links/Links";

function App() {
  // state for dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [showAddTicket, setShowAddTicket] = useState(false);
  return (
    <div className="App">
      <Navbar
        setShowAddTicket={setShowAddTicket}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <main>
        <Sidebar />
        <Board />
      </main>

      <Dropdown dropdown={showAddTicket} toggleDropDown={setShowAddTicket}>
        <CreateTicket />{" "}
      </Dropdown>
      <Dropdown dropdown={isOpen} toggleDropDown={setIsOpen}>
        <Links />
      </Dropdown>
    </div>
  );
}

export default App;
