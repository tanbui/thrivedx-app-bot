import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Create from "./screens/Create";
import Jobs from "./screens/Jobs";
import JobDetails from "./screens/JobDetails";
import NotFound from "./screens/NotFound";
import Navbar from "./components/Navbar";

import data from "./data/db";

const demos = {
  soundcloud:
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
  botinc:
    '<iframe id="x" src="https://server.bots-inc.com/index.html?cx=00270dd" frameborder="0" allowfullscreen style="border: none; display: block; height: 750px; width: 360px; position: fixed; bottom:0; right:0; visibility: visible;z-index: 2147483647; max-height: 100vh; max-width: 100vw; transition: none 0s ease 0s; background: none transparent;opacity: 1; pointer-events: auto; touch-action: auto;"></iframe><script> window.onmessage = (e) => {if (e.data.hasOwnProperty("s")) {i = document.getElementById("x"); if (e.data.h) i.style.height = e.data.h;if (e.data.c) localStorage.setItem("c",e.data.c); if (e.data.p) window.location.replace(e.data.p); if (e.data.m) i.contentWindow.postMessage(window.innerWidth+localStorage.getItem("c"), e.data.s); if (e.data.u) window.open(e.data.u, "_blank"); } }; </script>',

  plotly:
    '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route exact path="/jobs">
                <Jobs data={data} />
              </Route>
              <Route path="/jobs/:id">
                <JobDetails data={data} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <Iframe iframe={demos["botinc"]} allow="autoplay" />
    </div>
  );
}
