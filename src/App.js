import './App.css';
import React, { Component } from "react";
import ClockFace from './ClockFace/ClockFace.js'
import Moment from "react-moment";
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
            seconds: new Date().getSeconds().toLocaleString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            hours: new Date().getHours().toLocaleString(),
            minutes: new Date().getMinutes().toLocaleString(),
            seconds: new Date().getSeconds().toLocaleString()
        });
    }
  render () {
        const testStyle = {
            width: '15%',
            height: 'auto'
        }
        return (
            <div className="App">
                <div className="clock-container">
                    <div style={testStyle}>
                        <ClockFace gmt={-1}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={0}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={1}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={2}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={3}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={4}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={5}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={6}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={7}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={8}/>
                    </div>
                    <div style={testStyle}>
                        <ClockFace gmt={9}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
