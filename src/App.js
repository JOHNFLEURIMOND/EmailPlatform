import React, { Component } from 'react';
import './App.css';
import { Animated } from 'react-animated-css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    const form = await axios.post('/api/form', {
        name,
        email,
        message,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="https://JOHNFLEURIMOND.com">
            Fleurimond
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="https://github.com/JOHNFLEURIMOND">
                  Github
                </a>{' '}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/john-fleurimond/">
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/fleurimond_john">
                  Twitter
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="row m-5">
          <div className="col-sm-1" />
          <div className="col-sm-10">
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}>
              <form action="/form" method="post" onSubmit={this.handleSubmit}>
                <fieldset>
                  <legend>Email Center</legend>

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter Your Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email. "
                      onChange={this.handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      onChange={this.handleChange}
                      rows="3"
                    />
                  </div>
                  <button
                    type="Submit"
                    name="Submit"
                    value="Submit"
                    className="btn btn-primary">
                    Submit
                  </button>
                </fieldset>
              </form>
            </Animated>
          </div>
          <div className="col-sm-1"> </div>
        </div>
      </div>
    );
  }
}

export default App;
