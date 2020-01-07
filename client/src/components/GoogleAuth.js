import React, {Component} from "react";

class GoogleAuth extends Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '71424511390-f3nod9dks1v45jroi31tnfm39vsp60fn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSingedIn: this.auth.isSignedIn.get()})
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut()
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div> I dont know</div>
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else return (
            <button onClick={this.onSignIn} className="ui red google button">
                <i className="google icon"/>
                Sign In
            </button>
        )
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;