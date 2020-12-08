import GithubCorner from "react-github-corner";
import GamePage from "./pages/GamePage";
import Div100vh from "react-div-100vh";

function App() {
  return (
    <Div100vh className="app">
      <GithubCorner href="https://github.com/alexander-ding/24/" size={50}/>
      <GamePage/>
    </Div100vh>
  );
}

export default App;
