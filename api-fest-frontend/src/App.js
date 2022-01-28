import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";

////////
import "react-tiger-transition/styles/main.min.css";

import { glide } from "react-tiger-transition";
import { Navigation } from "react-tiger-transition/cjs/react-tiger-transition.min";
import AddData from "./components/dashboard/AddData";
import GetData from "./components/dashboard/Getdata";
import Updatedata from "./components/dashboard/Updatedata";
import DeleteData from "./components/dashboard/DeleteData";

glide({
  name: "glide-right",
  direction: "right",
});
glide({
  name: "glide-left",
});
document.getElementById("root").style.height = "100vh";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Navigation>
          <Route exact path="/" component={Hero} />
          <Route exact path="/login" transition='glide-left' component={Login} />
          <Route exact path="/signup" transition='glide-left' component={Signup} />
          <Route exact path="/dashboard" transition='glide-left' component={Dashboard} />
          <Route exact path="/getdata" transition='glide-left' component={GetData} />
          <Route exact path="/adddata" transition='glide-left' component={AddData} />
          <Route exact path="/updatedata" transition='glide-left' component={Updatedata} />
          <Route exact path="/deletedata" transition='glide-left' component={DeleteData} />
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
