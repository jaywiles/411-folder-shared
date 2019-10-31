import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true, contacts: [],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch ('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(contact => ({
      name: `${contact.name.first} ${contact.name.last}`,
      location: `${contact.location.city}, ${contact.location.state}, ${contact.location.country}`,
      email: `${contact.email}`,
      cell: `${contact.cell}`,
      username: `${contact.login.username}`,
      mediumpic: `${contact.picture.medium}`,
      smallpic: `${contact.picture.thumbnail}`
    })))
    .then(contacts => this.setState({
      contacts,
      isHidden: true
    }))
    .catch(error => console.log("parsing failed", error))
  }

  handleClick = () => {
    let status = this.state.isHidden === true ? false : true
    this.setState({
      isHidden: status
    })
  }

  render() {
    const {isHidden, contacts} = this.state;
    if (isHidden) {
      return (
        <div>
          <header><h1>My Peeps</h1></header>
          <div>
            <div className="body-container">
              {
                contacts.map(contact => {
                  const {name, username, smallpic} = contact;
                  return (
                    <div key={username} title={name} className="list-container">
                      <button onClick={this.handleClick}>Show Details</button><br></br>
                      <img src={smallpic} alt="thumbnail"></img>
                      <p>{name}</p>
                      <br></br>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    } else if (!isHidden) {
      return (
        <div>
          <header><h1>My Peeps</h1></header>
          <div>
            <div className="body-container">
              {
                contacts.map(contact => {
                  const {name, location, email, cell, username, mediumpic} = contact;
                  return (
                    <div key={username} title={name} className="list-container">
                      <button onClick={this.handleClick}>Hide Details</button><br></br>
                      <img src={mediumpic} alt="thumbnail"></img>
                      <p>{name}</p>
                      <p>{location}</p>
                      <p>{email}</p>
                      <p>{cell}</p>
                      <br></br>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App;
