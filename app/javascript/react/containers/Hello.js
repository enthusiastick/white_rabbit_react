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
          const newMessages = data.clear ? [data.message] : [data.message].concat(this.state.messages)
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
      <div className='grid-y medium-grid-frame'>
        <div className='cell' style={{ paddingTop: '1rem' }}>
          <Formik
            initialValues={{ clear: false, message: '' }}
            onSubmit={this.handleSubmit}
            render={formikProps => <SendMessageForm {...formikProps} />}
          />
        </div>
        <div className='grid-y align-center medium-grid-frame'>
          <div className='cell'>
            {messages}
          </div>
        </div>
      </div>
    )
  }
}

export default Hello
