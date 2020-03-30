// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  'accountResource':{
    protocol: 'http',
    port: '8080',
    apiprefix: 'api',
    registerAccount: 'register',
    getAccount: 'account',
    changePassword:'account/change-password'
  },
  'userJwtController':{
    protocol: 'http',
    port: '8080',
    apiprefix: 'api',
    authorize: 'authenticate'
  },

  "userResource":{
    protocol: 'http',
    port: '8080',
    apiprefix: 'api',
    getAllUsers: 'users',
    currentUser: 'users/:user',
    getAuthorities: 'users/authorities',
    pagination:'users:page'
  },
  "covid19":{
    apiName: "https://covid-193.p.rapidapi.com/statistics",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
