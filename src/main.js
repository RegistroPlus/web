require('./css/bootstrap.css');

var Vue = require('vue')
var VueRouter = require('vue-router');

var App           = require('./components/App.vue');
var LoginView     = require('./components/LoginView.vue');
var NotFoundView  = require('./components/NotFoundView.vue');
var GiornataView  = require('./components/GiornataView.vue');

var LeftNavView      = require('./components/LeftNavView.vue');
var RightContentView = require('./components/RightContentView.vue');

// Install router
Vue.use(VueRouter);

Vue.component('left-nav', LeftNavView);
Vue.component('right-content', RightContentView);

var utils = require('./common/utils.js');

Vue.filter('time', function(date) {
	var hours = utils.padZero(date.getHours());
	var minutes = utils.padZero(date.getMinutes());
	//var seconds = utils.padZero(date.getSeconds());
	
	var formatted = hours + ':' + minutes;
	return formatted;
});

// Create new Router instance
var router = new VueRouter()

router.map({
	'/login': {
		component: LoginView,
		hero: true
	},
	'/giornata': {
		component: GiornataView,
		name: 'giornata',
		auth: true
	},
	'*': {
		component: NotFoundView,
		hero: true
	}
})

router.beforeEach(function (transition) {
	window.scrollTo(0, 0);
	
	var token = localStorage.getItem('token');
	
	var to = transition.to;
		
	// If the resource is protected
	if (to.auth === true) {
		// No token
		if (!token || token == null) {
			// Redirect to login page
			transition.redirect('/login')
		}
	}
	// If the destination path is the root or login
	else if (to.path == '/login') {
		// User is already logged in
		// redirect root and /login to the private dashboard
		if (token && token != null) {
			transition.redirect('/giornata');
		}
	}
	else if (to.path == '/') {
		transition.redirect('/login');
	}
	
	transition.next();
});

router.start(App, '#app')
