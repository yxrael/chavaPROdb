import { types } from '../types/types';
import Swal from 'sweetalert2';
import { firebase } from "../firebase/firebase-config";

import { startLoading, finishLoading } from "./ui";

// import { noteLogout } from "./notes";


export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {

        dispatch( startLoading() );
    
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName, user.photoURL )
                );
                 dispatch( finishLoading() );
            })
            .catch( e => {
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startRegisterWithEmailPasswordName = ( name, establecimiento, email, password, tipoCliente ) => {

    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
        // firebase.auth().createUser( {email: email, password: password, phoneNumber: tipoCliente} )
            .then( async({ user }) => {
                await user.updateProfile({ displayName: name + ' - ' + establecimiento, photoURL: tipoCliente});

                // Swal.fire(
                //     'Ok!',
                //     'Cliente añadido',
                //     'success'
                //   );

                dispatch(
                    login( user.uid, user.displayName, user.photoURL )
                );
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
    }
}
// export const startRegisterWithEmailPasswordNameAdmin = ( name, establecimiento, email, password ) => {

//         firebase.auth().createUserWithEmailAndPassword( email, password )
//             .then( async({ user }) => {
//                 await user.updateProfile({ displayName: name + ' - ' + establecimiento});

//                 Swal.fire(
//                     'Ok!',
//                     'Cliente añadido',
//                     'success'
//                   );

//                 // dispatch(
//                 //     login( user.uid, user.displayName, tipoCliente )
//                 // )
//             })
//             .catch( e => {
//                 console.log(e);
//                 Swal.fire('Error', e.message, 'error');
//             })
    
// }

// export const startGoogleLogin = () => {

//     return ( dispatch ) => {

//         firebase.auth().signInWithPopup( googleAuthProvider )
//             .then( ({ user }) => {
//                 dispatch(
//                     login( user.uid, user.displayName )
//                 )
//             })

           
        
//     }
// }

export const login = ( uid, displayName, tipoCliente ) => ({
        type: types.login,
        payload: {
            uid,
            displayName,
            tipoCliente
        }
    });

// export const startLogout = () => {
//     return async ( dispatch ) => {
//         await firebase.auth().signOut();

//         dispatch( logout() );

//         dispatch( noteLogout() );

//     }
// }

// export const logout = () => ({
//     type: types.logout,
// })

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch(logout);
    }
}

export const logout = () => ({
    type: types.logout
})

