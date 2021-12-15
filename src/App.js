import GlobalStyle from "./GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {/* Switch stops as soon as whe find the first match  */}
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
