angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})

		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    			controllerAs: 'login'
		})

		// show all users
		.when('/users', {
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})

        //
        .when('/polls', { templateUrl: 'app/views/pages/partials/list.html',
            controller: 'PollListCtrl',
            controllerAs: 'poll'
        })
        .when('/poll/:pollId', { templateUrl: 'app/views/pages/partials/item.html',
            controller: 'PollItemCtrl',
            controllerAs: 'poll'
        })
        .when('/new', { templateUrl: 'app/views/pages/partials/new.html',
            controller: 'PollNewCtrl',
            controllerAs: 'poll'
        });


	$locationProvider.html5Mode(true);

});
