import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={18}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={18}
                  country="in"
                  category="business"
                />
              }
            ></Route>

            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={18}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={18}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={18}
                  country="in"
                  category="health"
                />
              }
            ></Route>

            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={18}
                  country="in"
                  category="science"
                />
              }
            ></Route>

            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={18}
                  country="in"
                  category="sports"
                />
              }
            ></Route>

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={18}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}