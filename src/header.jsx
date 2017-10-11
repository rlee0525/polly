import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="title-container">
          <a href="/">
            <img
              className="polly-icon"
              src="http://res.cloudinary.com/rlee0525/image/upload/v1507681131/Screen_Shot_2017-10-10_at_5.18.16_PM_fmsrlk.png"
            />
            <span className="title">Polly</span>
          </a>
        </h1>
      </header>
    );
  }
}

export default Header;