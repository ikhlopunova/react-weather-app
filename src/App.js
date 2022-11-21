import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(images/sky.jpg)" }}>
      <div
        className="container"
        style={{ backgroundImage: "url(images/sky.jpg)" }}
      >
        <div className="row">
          <Search />
          <Weather />
          <Footer />
        </div>
      </div>
    </div>
  );
}
