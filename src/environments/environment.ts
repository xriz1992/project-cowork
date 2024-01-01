// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDKi8cGAcleByejYCK2e6EXdR_sZ7sjxXk",
    authDomain: "project-cowork.firebaseapp.com",
    projectId: "project-cowork",
    databaseURL: "project-cowork.firebaseapp.com", // TODO ??? check this out in firebase console
    storageBucket: "project-cowork.appspot.com",
    messagingSenderId: "618030447540",
    appId: "1:618030447540:web:d965f9ab11b6033e6010e1",
    measurementId: "G-YLF6WJT1W0",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
