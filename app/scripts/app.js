(function () {
     function config($stateProvider, $locationProvider) {
        $stateProvider
             .state('main', {
                 url: '/',
                 controller: 'MainCtrl as main',
                 templateUrl: '/templates/main.html'
             });

         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
     }
     angular
         .module ('chatApp', ['ui.router', 'firebase',  'ui.bootstrap', 'ngCookies'])
         .config(config);
     })();

     
