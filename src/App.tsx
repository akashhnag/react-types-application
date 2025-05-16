import { useState } from "react";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserSearch />
    </>
  );
}

export default App;
