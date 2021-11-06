import React from 'react'

import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm'
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm'

import './AuthenticationModal.css'

class AuthenticationModal extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        
        var initialForm = 'register'
        if (this.props.form) initialForm = this.props.form

        this.state = {
            form: initialForm,
            message: '',
            hide: false
        }

        this.onChange = this.onChange.bind(this)
    }
    
    onChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    closeModal = () => {
        this.setState({hide: true})
    }

    componentDidMount = () => {
        // if (Cookies.get('sessionID')) {
        //     Axios.get(`https://underverse-authentication.herokuapp.com/session/${Cookies.get('sessionID')}`)
        //     .then((reply) => {
        //         if (reply.data.uid) {
        //             this.closeModal()
        //         }
        //     })
        // }
    }

    renderForm = () => {
        if (this.state.form === 'login') {
            return(
                <LoginForm setForm={this.setForm} closeModal={this.closeModal} setMessage={this.setMessage} />
            )
        } else if (this.state.form === 'register') {
            return(
                <RegisterForm setForm={this.setForm} closeModal={this.closeModal} setMessage={this.setMessage} />
            )
        } else if (this.state.form === 'resetPassword') {
            return(
                <ResetPasswordForm setForm={this.setForm} closeModal={this.closeModal} setMessage={this.setMessage} />
            )
        }
    }

    setForm = (form: String) => {
        this.setState({form: form, message: ''})
    }

    renderMessage = () => {
        if (this.state.message) {
            return(
                <p className="message">{this.state.message}</p>
            )
        }
    }

    setMessage = (message: String) => {
        this.setState({message: message})
    }

    render() {
        return (
            <div className={this.state.hide ? 'authentication-modal hide' : 'authentication-modal'}>
                <div className="box">
                    {this.renderMessage()}
                    {this.renderForm()}
                </div>
            </div>
        )
    }
}

export default AuthenticationModal