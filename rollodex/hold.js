

        // <FullInfo revealClick={this.handleClick} username={this.props.username} />
        // <button onClick={this.props.contact}>Hide Details</button>



  // render() {
  //   const {isHidden, contacts, displayInfo, displayContact} = this.state;
    
  //   let content = null;

  //   if (this.state.displayContact === 0) {
  //     content = <div contacts={this.state.contacts} />
  //   }

  //   return (
  //     <div>
  //       <button onClick={() => {
  //         this.setState(() => {
  //           return (
  //             <div>
  //               <header>My Peeps</header>
  //               <br></br>
  //               <div className="body-container">
  //                 {
  //                   contacts.map(contact => {
  //                     const {name, location, email, cell, username, mediumpic, smallpic} = contact;
  //                     return (
  //                       <div key={contact.username} title={contact.name} className="list-container">
  //                         <img src={mediumpic} alt="thumbnail"></img>
  //                         <p>{name}</p>
  //                         <p>{location}</p>
  //                         <p>{email}</p>
  //                         <p>{cell}</p>
  //                         <br></br>
  //                       </div>
  //                     )
  //                   })
  //                 }
  //               </div>
  //             </div>
  //           )
  //       })}}>Display Contact</button>
        
  //     </div>
  //   )
  // }




// ! this is from when i thought i could create functional components inside a class component

// BasicInfo() {
  //     return (
  //       <div>
  //         <button onClick={this.props.revealClick}>Show Details</button>
  //         <img src={this.props.smallpic} alt="thumbnail"></img>
  //         <p>Name: {this.props.name}</p>
  //       </div>
  //     )
  // }

  // FullInfo() {
  //     return (
  //       <div>
  //         <button onClick={this.props.revealClick}>Hide Details</button>
  //         <img src={this.props.smallpic} alt="thumbnail"></img>
  //         <p>Name: {this.props.name}</p>
  //         <p>Location: {this.props.location}</p>
  //         <p>Email: {this.props.email}</p>
  //         <p>Cell: {this.props.cell}</p>
  //         <br></br>
  //       </div>
  //     )
  // }




// !this code works... i duplicated it previously to make sure good code (this) still existed...

//   return (
  //     <div>
  //       <header>My Peeps</header>
  //       <br></br>
  //       <div className="body-container">
  //         {
  //           people.map(person => {
  //             const {name, location, email, cell, username, mediumpic, smallpic} = person;
  //             return (
  //               <div key={person.username} title={person.name} className="list-container">
  //                 <img src={mediumpic} alt="thumbnail"></img>
  //                 <p>{name}</p>
  //                 <p>{location}</p>
  //                 <p>{email}</p>
  //                 <p>{cell}</p>
  //                 <br></br>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     </div>
  //   )

//   !another duplicate

    // return (
    //   <div>
    //     <header>My Peeps</header>
    //     <br></br>
    //     <div className="body-container">
    //       {
    //         people.map(person => {
    //           const {name, location, email, cell, username, mediumpic, smallpic} = person;
    //           return (
    //             <div key={person.email} title={person.username} className="list-container">
    //               <img src={mediumpic} alt="thumbnail"></img>
    //               <p>{name}</p>
    //               <p>{location}</p>
    //               <p>{email}</p>
    //               <p>{cell}</p>
    //               <br></br>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    // )

    // !the short list of info...

    // return (
    //   <div>
    //     <header>My Peeps</header>
    //     <br></br>
    //     <div className="body-container">
    //       {
    //         people.map(person => {
    //           const {name, location, email, cell, username, mediumpic, smallpic} = person;
    //           return (
    //             <div key={person.email} title={person.username} className="list-container">
    //               {name}
    //               <br></br>
    //               <img src={smallpic} alt="thumbnail"></img>
    //               <br></br><br></br>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    // )


// !when i tried to use another video i found to create the button and setState differently...
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



//   !original attempt after using the beer assignment we had last week
  // render() {
  //   const {isHidden, contacts} = this.state;
  //   return (
  //     <div className="whole-page">
  //       <header>My Peeps</header>
  //       <div className={`content ${isHidden ? 'is-loading' : ''}`}>
  //         <div className="contact-info">
  //           {
  //             !isHidden && contacts.results.length > 0 ? contacts.results.map(contact => {
  //               const {name, location, email, cell, picture} = contact;
  //               return <div key={contact} title={name}>
  //                 <img className="pic-thumbnail"src="{picture}">
  //                 <p className="name-line">{name}</p>
  //                 {/* <button><img src={logo} alt="like" className="img-responsive"></img></button> */}
  //                 <p className="location-line">Location: {location}</p>
  //                 <p className="email-line">Email: {email}</p>
  //                 <p className="cell-line">Cell: {cell}</p>
  //                 <br></br>
  //                 </div>
  //             }) : null
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
// }










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