import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contacts: [],
      displayContact: 1,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch ('https://randomuser.me/api?results=25')
    .then(response => response.results.json())
    .then(parsedJSON => parsedJSON.results.map(contact => ({
      name: `${contact.name.first} ${contact.name.last}`,
      location: `${contact.location.city}, ${contact.location.state}`,
      email: `${contact.email}`,
      cell: `${contact.cell}`,
      picture: `${contact.picture.thumbnail}`
    })))
    .then(contacts => this.setState({
      contacts,
      isLoading: false
    }))
    .catch(error => console.log("parsing failed", error))
  }

  // render() {
  //   let content = null;
  //   if (this.state.displayContact === 1) {
  //     content = <div contacts={this.state.contacts} />
  //   } else if (this.state.displayContact === 0) {
  //     content = <div contacts={this.state.contacts.name} />
  //   }

  //   return (
  //     <div>
  //       {/* button for showing contact */}
  //       <button onClick={() => {
  //         this.setState(() => {
  //           return {displayContact: 1}
  //         });
  //       }}>Show Contact</button>

  //       {/* button for hiding contact */}
  //       <button onClick={() => {
  //         this.setState(() => {
  //           return {displayContact: 0}
  //         });
  //       }}>Hide Contact</button>

  //       {/* always displays content that it's supposed to pull */}
  //       {content}

  //     </div>
  //   )


  // }


  render() {
    const {isLoading, contacts} = this.state;
    return (
      <div className="whole-page">
        <header>My Peeps</header>
        <div className={`content ${isLoading ? 'is-loading' : ''}`}>
          <div className="contact-info">
            {
              // how to do if statement everything is wrapped in????
              !isLoading && contacts.results.length > 0 ? contacts.results.map(contact => {
                const {name, location, email, cell, picture} = contact;
                return <div key={contact} title={name}>
                  {/* <p className="pic-thumbnail">{picture}</p> */}
                  <p className="name-line">{name}</p>
                  {/* <button><img src={logo} alt="like" className="img-responsive"></img></button> */}
                  <p className="location-line">Location: {location}</p>
                  <p className="email-line">Email: {email}</p>
                  <p className="cell-line">Cell: {cell}</p>
                  <br></br>
                  </div>
              }) : null
            }
          </div>
        </div>
      </div>
    );
  }
}










// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
