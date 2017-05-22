(function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('main', {
                 url: '/',
                 controller: 'MainCtrl as main',
                 templateUrl: '/templates/home.html'
             })
             
             .state('room',{
                 url: '/room',
                 controller: 'Room as room',
             })
     }
     
     angular
         .module ('chatApp', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config);
 });
    
