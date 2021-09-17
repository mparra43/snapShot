import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import { useForm } from '../../hooks/useForm';
import {uiCloseModal} from '../../actions/ui';
import {Link} from "react-router-dom";
import {startFacebookLogin, startLoginEmailPassword} from "../../actions/auth";


Modal.setAppElement('#root');


const initEvent = {
    user: "",
    password: "",

}


export const Login = () => {

    const { loading } = useSelector( state => state.ui );
    const {modalOpen} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useState(initEvent);
    const {email, password} = formValues;


    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
        closeModal();
    }
    const handleGoogleLogin = () => {
        dispatch( startFacebookLogin() );
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h3 className="auth__title">Login</h3>

            <form
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>

            </form>
        </Modal>
    )
}