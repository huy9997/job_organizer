import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
  }

    return (
      <div>
        <GoogleLogin
        clientId="790006936314-e4oihso8qclvva7is2r5eegr7ulbsm6c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default App;
