import React, {Component} from 'react'
import {Formik} from 'formik'

import Message from '../components/Message'
import SendMessageForm from '../forms/SendMessageForm'

class Hello extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      messages: ['Boo yaa']
    }
  }

  componentDidMount() {
    App.MonitorChannel = App.cable.subscriptions.create(
      {
        channel: "MonitorChannel"
      },
      {
        received: data => {
          const newMessages = data.clear ? [data.message] : this.state.messages.concat(data.message)
          this.setState({messages: newMessages})
        }
      }
    )
  }

  handleSubmit(values, {resetForm}) {
    const { clear, message } = values
    App.MonitorChannel.send({ clear, message })
    resetForm()
  }

  render() {
    const messages = this.state.messages.map((message, index) => (<Message key={index} text={message} />))

    return(
      <div style={{ paddingTop: '1rem' }}>
        <Formik
          initialValues={{ clear: false, message: '' }}
          onSubmit={this.handleSubmit}
          render={formikProps => <SendMessageForm {...formikProps} />}
        />
        {messages}
      </div>
    )
  }
}

export default Hello
