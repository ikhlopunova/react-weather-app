import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import img from "../src/images/sky.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container" style={{ backgroundImage: `url(${img})` }}>
        <div className="row">
          <Search />
          <Weather />
          <Footer />
        </div>
      </div>
    </div>
  );
}
