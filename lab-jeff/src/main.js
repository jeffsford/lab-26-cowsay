import './style/main.scss'
import React from 'react'
import faker from 'faker'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: cowsay.say({
        text: "I'm a talking cow!",
        e: "oO",
        T: "U "
      })
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
      this.setState((state) => {
      return {
      content: cowsay.say({
        text: faker.lorem.sentence(),
        e: "oO",
        T: "U "
      }),
    }
  })
}

    render() {
      return (
        <div>
          <h1>Generate Cowsay Lorem</h1>
            <button onClick={this.handleClick}> click me </button>
            <pre>{this.state.content}</pre>
        </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
