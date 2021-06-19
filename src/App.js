import Div100vh from "react-div-100vh";
import GithubCorner from "react-github-corner";
import Welcome from "./components/Welcome";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Div100vh className="app">
      <Welcome />
      <GithubCorner href="https://github.com/alexander-ding/24/" size={50} />
      <GamePage />
    </Div100vh>
  );
}

export default App;
