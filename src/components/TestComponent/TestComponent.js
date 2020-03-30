import React, { useState } from 'react';

// Please note that it is only possible to use Hooks in React function components. You cannot use Hooks in a React class component!

function TestComponent() {
  // To use state via Hooks, we call useState() with our initial state as the argument. This function returns an array with two elements:
  // - The current state
  // - A setter function to set the state

  const [name, setName] = useState('');

  // The previous code is equivalent to the following:
  //
  // const nameHook = useState('')
  // const name = nameHook[0]
  // const setName = nameHook[1]

  function handleChange(evt) {
    setName(evt.target.value);
  }

  return (
    <div>
      <h1> Application name is : {name} </h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export { TestComponent };

// class TestComponent extends React.Component {
//
//   constructor (props) {
//     super(props)
//     this.state = { name: '' }
//     this.handleChange = this.handleChange.bind(this)
//   }
//
//   handleChange (evt) {
//     this.setState({ name: evt.target.value })
//   }
//
//   render () {
//     const { name } = this.state
//
//     return (
//       <div>
//
//         <h1>Name is: { name } </h1>
//         <input type="text" value={name} onChange={this.handleChange} />
//
//       </div>
//   )
//   }
// }
