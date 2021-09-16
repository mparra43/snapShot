import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {startChecking} from '../actions/auth';
import {PublicRoute} from './PublicRoute';
import {Home} from '../components/home/home';
import {Login} from '../components/auth/Login';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const {id} = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch])



    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/home"
                        component={Home}
                        isAuthenticated={!!id}
                    />

                    <PublicRoute
                        exact
                        path="/login"
                        component={Login}
                        isAuthenticated={!!id}
                    />



                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}
