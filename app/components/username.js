import React from 'react';
import store from 'store';

export default class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: store.get('username'), submitted: !!store.get('username') }
  }

  updateName(e) {
    this.setState({ username: e.target.value });
  }

  submitName(e) {
    e.preventDefault();
    store.set('username', this.state.username);
    this.setState({ submitted: true });
    console.log('got here');
    this.props.nameSetCallback();
  }

  renderForm() {
    return (
      <form className="navbar-form navbar-left" onSubmit={(e) => this.submitName(e) }>
        <div className="form-group">
          <input placeholder="Votre prénom" className="form-control" type="text" value={this.state.username} onChange={(e) => this.updateName(e)} />
        </div>
        <button type="submit" className="btn btn-default">Valider</button>
      </form>
    );
  }

  renderName() {
    return (
      <p className="navbar-text">Vous êtes: <strong>{ this.state.username }</strong></p>
    );
  }

  render() {
    return this.state.submitted ? this.renderName() : this.renderForm();
  }
}
