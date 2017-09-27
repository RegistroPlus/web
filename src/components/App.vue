<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<style lang="stylus">
@import "../css/app.styl"
</style>

<script>
var request = require('../common/request.js');

module.exports = {
	ready: function() {
		this.loadUser();
	},
	
	data: function() {
		return {
			user: null
		};
	},
	
	events: {
		loginSuccess: function(token) {
			localStorage.setItem('token', token);
			this.$route.router.go('giornata');
			//this.loadUser();
		}
	},
	
	methods: {
		loadUser: function() {
			var self = this;
			
			// Get current user
			request({ endpoint: '/auth/me' }, function(err, res) {
				self.user = res.body['data'];
			});
		}
	}
};
</script>
