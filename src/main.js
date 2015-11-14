require('./css/bootstrap.css');

var Vue = require('vue')
var VueRouter = require('vue-router');

var App = require('./components/App.vue');
var MainView = require('./components/MainView.vue')
var LoginView = require('./components/LoginView.vue');
var NotFoundView = require('./components/NotFoundView.vue');
var DashboardView = require('./components/DashboardView.vue');

var LeftNavView = require('./components/LeftNavView.vue');
var RightContentView = require('./components/RightContentView.vue');

// Install router
Vue.use(VueRouter)

Vue.component('left-nav', LeftNavView);
Vue.component('right-content', RightContentView);

// Create new Router instance
var router = new VueRouter()

router.map({
	'/': {
		component: MainView,
		hero: true,
		skipIfAuth: true
	},
	'/login': {
		component: LoginView,
		hero: true,
		skipIfAuth: true
	},
	'/dashboard': {
		component: DashboardView,
		name: 'dashboard',
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
	
	// If the resourece is protected
	if (to.auth === true) {
		// No token
		if (!token || token == null) {
			// Redirect to login page
			transition.redirect('/login')
		}
	}
	// If the destination path is the root or login
	else if (to.skipIfAuth === true) {
		// User is already logged in
		// redirect root and /login to the private dashboard
		if (token && token != null) {
			transition.redirect('/dashboard');
		}
	}
	
	transition.next();
});

router.start(App, '#app')
