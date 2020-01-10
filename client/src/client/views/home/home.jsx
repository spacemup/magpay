import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../atoms/header';

import './home.scss';

const name = 'Avery';

const Home = props => {
  return (
    <Fragment>
      <Header title="Home" disableBackButton={true} />
      <div className="home">
        <div className="home-prompt">
            <h2>Hi {name}!</h2>
            <p>What would you like to do?</p>
          </div>
        <div className="home-actions">
          <Link to="/payslip/new/" className="button new-payslip-button">Create new pay slip</Link>
          <Link to="/" className="button new-payslip-button disabled">Create pay slip from template</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
