"use strict";
//DomainCheck
class DomainCheck {
    render() {
        return (
            <div className="field">
                <div className="ui right labeled input left icon">
                    <i className="icon search"></i>
                    <input type="text" placeholder="domain" />
                    <div className="ui basic label">.beemo.com</div>
                </div>
            </div>
        );
    }
}

//Email
class EmailInput {
    render() {
        return (
            <div className="field">
                <div className="ui input left icon">
                    <i className="icon mail"></i>
                    <input type="email" placeholder="Your Email"/>
                </div>
            </div>
        );
    }
}

//Password
class PasswordInput {
    render() {
        return (
            <div className="field">
                <div className="ui input left icon">
                    <i className="icon lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
            </div>
        );
    }
}

//Signup
class Signup {
    render() {
        return (
            <form className="ui form">
                <div className="ui segment">
                    <div className="ui header">Sign up</div>
                    <DomainCheck />
                    <EmailInput />
                    <PasswordInput />
                    <div className="ui fluid yellow submit button">Register</div>
                </div>
            </form>
        );
    }
}

React.render(<Signup/>, document.getElementById('main'));