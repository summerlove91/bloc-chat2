(function () {
     function config($stateProvider, $locationProvider) {
        $stateProvider
             .state('main', {
                 url: '/main',
                 controller: 'MainCtrl as main',
                 templateUrl: '/templates/main.html'
             })

             .state('landing', {
                 url: '/',
                 controller: 'UsernameModalCtrl as username',
                 templateUrl: '/templates/landing.html'
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
