import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import PresidentalRoom from "./component/room/PresidentalRoom";
import luxuryRoom from "./component/room/luxuryRoom";
import deluxRoom from "./component/room/deluxRoom";
import Blog from "./component/blogs/Blog";
import About from "./component/About";
import Contact from "./component/Contact";
import BookNow from "./component/BookNow";
AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/presidentalRoom" component={PresidentalRoom} />
          <Route path="/luxuryRoom" component={luxuryRoom} />
          <Route path="/deluxRoom" component={deluxRoom} />
          <Route path="/blogs" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/booknow" component={BookNow} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
