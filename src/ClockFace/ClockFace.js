import './ClockFace.css'
import React, { Component } from "react";

class ClockFace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: Number(new Date().getHours().toLocaleString()) + props.gmt,
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
            hours: Number(new Date().getHours().toLocaleString()) + this.props.gmt,
            minutes: Number(new Date().getMinutes().toLocaleString()),
            seconds: new Date().getSeconds().toLocaleString()
        });
    }
    statusColor = () => {
        if (this.state.hours >=8 && this.state.hours <=18) {
            return '#00A65A'
        }
        if (this.state.hours > 18 && this.state.hours <= 23) {
            return '#FFC107'
        }
        if (this.state.hours === 0 || (this.state.hours > 0 && this.state.hours < 8)) {
            return '#DC3545'
        }
    }
    render () {
        const className = this.props.status
        const statusStyle = {
            border: '10px solid ' + this.statusColor()
        }
        const secondStyle = {
            color: 'blue',
            transform: 'rotate(' + ((this.state.seconds * 6) - 90) + 'deg)',
        };
        const minuteStyle = {
            color: 'blue',
            transform: 'rotate(' + ((this.state.minutes * 6) - 90) + 'deg)',
        };
        const hourStyle = {
            color: 'blue',
            transform: 'rotate(' + ((this.state.hours !== 0) ? ((this.state.hours * 30) - 90) : '-90') + 'deg)',
        };
        return <section className={className} style={statusStyle}>
            <div style={hourStyle} className="hourhand"></div>
            <div style={secondStyle} className="secondhand"></div>
            <div style={minuteStyle} className="minutehand"></div>
            <div className="hour12"></div>
            <div className="hour1"></div>
            <div className="hour2"></div>
            <div className="hour3"></div>
            <div className="hour4"></div>
            <div className="hour5"></div>
            <label className="label">{this.state.hours}</label>
        </section>
    }
}
export default ClockFace;
