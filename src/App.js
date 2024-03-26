// src/App.js

import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Femi Babatolu',
      bio: 'A full mtime software engineer that has 5 years experience in the field.',
      imgSrc: 'https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?s=2048x2048&w=is&k=20&c=iFBySg9gYWU20rRPhwafcTBroJB_0qCBuotH2BcPQGs=',
      profession: 'Software Engineer'
    },
    shows: false,
    mountTime: null
  };

  componentDidMount() {
    this.setState({ mountTime: new Date() });
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, mountTime } = this.state;
    const profile = (
      <div>
        <h2>{person.fullName}</h2>
        <p>{person.bio}</p>
        <img src={person.imgSrc} alt="profile" />
        <p>{person.profession}</p>
      </div>
    );

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && profile}
        {mountTime && (
          <p>
            Component mounted {Math.floor((new Date() - mountTime) / 1000)} seconds ago.
          </p>
        )}
      </div>
    );
  }
}

export default App;
