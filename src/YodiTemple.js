import React from 'react'
import './App.css'

class YodiTemple extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            nameActive: false,
            pwdActive: false,
            name: "",
            pwd: ""
        }

        this.handleName = this.handleName.bind(this)
        this.handlePwd = this.handlePwd.bind(this)
    }

    componentDidMount(){
        this.startCounter()
    }
    
    componentWillUnmount(){
        clearInterval(this.startCounter)
    }


    startCounter = () => {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);
    }

    handleName = event => {
        this.setState({ name: event.target.value })
    }

    handlePwd = event => {
        this.setState({ pwd: event.target.value })
    }

    render() {

        const { nameActive, pwdActive, date } = this.state

        return (
            <div className="YodiStyling">

                <form className="YodiDiv">

                    <p style={{ fontSize: 16, color: "red" }}>Server Running {date.toLocaleTimeString()}</p>


                    <input 
                    value={this.state.name}
                    onChange={this.handleName}
                    className='YodiInput'
                    style={{ borderColor: nameActive ? "#171717" : "#DDDDDD" }}
                    placeholder='Write Name' />



                    <input 
                    value={this.state.pwd}
                    onChange={this.handlePwd}
                    className='YodiInput'
                    // security=''
                    style={{ borderColor: pwdActive ? "#171717" : "#DDDDDD" }}
                    placeholder='Password' />


                    <button className="submitButton">Submit</button>
                    
                    <h1 style={{
                        fontSize: 18
                    }}>Hello {this.state.name}, Welcome!!</h1>


                </form>
            </div>
        )
    }
}

export default YodiTemple