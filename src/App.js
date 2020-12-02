import GamePage from "./pages/GamePage";

import { configure } from "react-hotkeys";

configure({ simulateMissingKeyPressEvents: false });

function App() {
  return (
    <div className="App">
      <GamePage/>
    </div>
  );
}

export default App;
