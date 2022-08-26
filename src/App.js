import TukiComponents from "./components/TukiComponents";
import TaskCheckpoints from "./components/TaskCheckpoints";

const App = () => {
  return (
    <div className="App">
            <h1>La banda del Tuki</h1>
            <h2>Integrantes</h2>
            <p>Meli</p>
            <p>Tuki</p>
            <p>Guille</p>
            <p>Mathi</p>
            <p>Pablo</p>
            <TukiComponents />
            <TaskCheckpoints />
        </div>
  );

};
export default App;