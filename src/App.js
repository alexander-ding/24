import GithubCorner from "react-github-corner";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="App">
      <GithubCorner href="https://github.com/alexander-ding/24/"/>
      <GamePage/>
    </div>
  );
}

export default App;
