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
                    login( user.uid, user.displayName )
                );
                 dispatch( finishLoading() );
            })
            .catch( e => {
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startRegisterWithEmailPasswordName = ( name, establecimiento, email, password ) => {

    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                await user.updateProfile({ displayName: name + ' - ' + establecimiento});

                // Swal.fire(
                //     'Ok!',
                //     'Cliente añadido',
                //     'success'
                //   );

                dispatch(
                    login( user.uid, user.displayName )
                )
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

export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: {
            uid,
            displayName
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

