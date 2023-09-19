import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="m-0">
      <Navbar />
      <div className="max-w-screen-md my-10 mx-auto p-5 ">
        <Home />
      </div>
    </div>
  );
}

export default App;
