import './style/main.scss'
import React from 'react'
import faker from 'faker'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'


// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       content: cowsay.say({
//         text: 'I am a talking cow!'
//       })
//     }
//
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick(e) {
//       this.setState((state) => {
//       return {
//       content: cowsay.say({
//         text: faker.lorem.sentence()
//       }),
//     }
//   })
// }

class App extends React.Component {
  constructor(props){
    super(props);

    // setup the inital state
    this.state = {
      content: '',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      content: cowsay.say({text: faker.lorem.words(10)}),
    })
  }

    render() {
      return (
        <div className='cow-div'>
          <h1>Generate Cowsay Lorem</h1>
          <pre>{this.state.content}</pre>
            <button onClick={this.handleClick}> click me </button>
        </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
