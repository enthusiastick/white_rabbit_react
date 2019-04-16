import React, {Component} from 'react'

class Hello extends Component {
  componentDidMount() {
    App.MonitorChannel = App.cable.subscriptions.create(
      {
        channel: "MonitorChannel"
      },
      {
        received: data => {
          console.log(data)
        }
      }
    )
  }

  handleClick() {
    App.MonitorChannel.send({ message: "Hello, World!" })
  }

  render() {
    return <h1 onClick={this.handleClick}>Boo yaa</h1>
  }
}

export default Hello
