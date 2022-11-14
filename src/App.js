import Banner from "./Components/Banner";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar";
import Chunk from "./Components/Section3/Chunk";
import Cta from "./Components/Section3/Cta";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* <div className="img-container">
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/1zR830Rgv5hpZbwuiyAFkq/326d72f720d090342f0744a8deb8b727/automation.png?w=540"
          alt=""
        />
      </div> */}
      <Card />
      <Cta />
      <Chunk />
    </div>
  );
}

// Hello guys if you are on these now please follow me on twitter:https://twitter.com/SalmaKe_mohamed
