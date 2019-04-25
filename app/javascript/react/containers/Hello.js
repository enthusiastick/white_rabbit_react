import React, {Component} from 'react'
import {Formik} from 'formik'

import SendMessageForm from '../forms/SendMessageForm'

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

  handleSubmit(values) {
    console.log(values)
  }

  render() {
    return(
      <div>
        <h1 onClick={this.handleClick}>Boo yaa</h1>
        <Formik
          initialValues={{ message: '' }}
          onSubmit={this.handleSubmit}
          render={formikProps => <SendMessageForm {...formikProps} />}
        />
      </div>
    )
  }
}

export default Hello
