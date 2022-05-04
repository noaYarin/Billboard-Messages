// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
export const environment = {
  firebase: {
    projectId: 'billboard-8a5e3',
    appId: '1:88775581876:web:537148e084b38d3fb577e1',
    storageBucket: 'billboard-8a5e3.appspot.com',
    apiKey: 'AIzaSyDDQymQGgE8ZayYBkPdyDFhMQAL0JCQtP0',
    authDomain: 'billboard-8a5e3.firebaseapp.com',
    messagingSenderId: '88775581876',
    measurementId: 'G-8JM683J1XV',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
