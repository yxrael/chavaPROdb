import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import Header from '../components/Header';
import AuthRouter from './AuthRouter';

import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import DashBoard from './DashBoard';

const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
      
        firebase.auth().onAuthStateChanged( (user) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName, user.photoURL ));
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);
        });

    }, [ dispatch, setChecking ]);

    if ( checking ) {
        return (
            <>
                <h1>Preparando café...</h1>
                
            </>
        )
    }
    
    return (

        <div className='mxwListados container-fluid'>
        <Header />

            <Routes>

                {
                    isLoggedIn
                    ?
                    (
                        <>
                            <Route
                                path='/*'
                                element={ <DashBoard /> }
                            />
                        </>
                    )
                    :
                    (
                        <>
                            <Route
                                path='/auth/*'
                                element={ <AuthRouter /> }
                            />
                            <Route path='/*'
                                element={<Navigate to='/auth/login' />}
                            />
                        </>
                    
                    )
                }

            </Routes>

        </div>
            
    )
}

export default AppRouter
