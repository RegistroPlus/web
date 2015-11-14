<template>
	<div class="full-screen-wrapper">
		<div class="opacity"></div>
		
		<div class="login-box-wrapper">
			<div class="login-box">
				<h1>Dedalo</h1>
				<form @submit.prevent="login">
					<div class="form-group">
						<input type="text" v-model="username" autofocus class="form-control input-lg" placeholder="Nome utente" />
					</div>
					<div class="form-group">
						<input type="password" v-model="password" class="form-control input-lg" placeholder="Password" />
					</div>
					
					<a class="btn btn-blue btn-lg" @click="login">ACCEDI</a>
					<input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;" tabindex="-1" />
				</form>
			</div>
		</div>
		
		<div class="quote">
			<div v-if="quote">
				&laquo;{{ quote.title }}&raquo;
				<span>{{ quote.subtitle }}</span>
			</div>
		</div>
	</div>
</template>

<script>
var request = require('../common/request.js');

module.exports = {
	data: function() {
		return {
			quote: null,
			username: null,
			password: null
		};
	},
	
	ready: function() {
		var quotes = [
			{ title: 'La scuola è aperta a tutti', subtitle: 'Costituzione della Repubblica Italiana, art. 34' },
			{ title: 'Ognuno ha diritto ad un\'istruzione', subtitle: 'ONU, Dichiarazione Universale dei Diritti Umani, art. 26' },
			{ title: 'Un bambino, un insegnante, un libro e una penna possono cambiare il mondo', subtitle: 'Malala Yousafzai' }
		];
		
		this.quote = quotes[Math.floor(Math.random() * quotes.length)];
	},
	
	methods: {
		login: function() {
			request({
				method: 'POST',
				endpoint: '/api/v1/auth/sign',
				body: { username: this.username, password: this.password }
			}, function(err, res) {
				if (res.status == 200) {
					localStorage.setItem('token', res.body['data']['token']);
					this.$route.router.go('dashboard');
				}
				else {
					alert(res.text);
				}
			}.bind(this));
		}
	}
}
</script>

<style lang="stylus">
@import "nib"

.full-screen-wrapper
	position: absolute;
	width: 100%;
	height: 100%;
	
	/*
	HERO
	 */
	background: url('/images/hero/2-hd.jpg') no-repeat center center fixed;
	background-size: cover;

/**
 * LOGIN
 */
.login-box-wrapper
	height: 75%;

.login-box
	width: 350px;
	margin: auto;
	background: white;
	border-radius: 5px;
	padding: 30px;
	position: relative;
	top: 50%;
	transform: translateY(-50%) scale(1.2)

.login-box h1
	text-align: center;
	padding: 0 0 15px 0;
	border-bottom: 1px solid #ccc;

.login-box .btn
	display: block;
	margin-top: 35px;

.login-box form
	margin-top: 20px;

.opacity
	background: #000000;
	opacity: 0.3;
	width: 100%;
	height: 100%;
	position: absolute;

.quote
	position: relative;
	max-width: 700px;
	height: 25%;
	margin: auto;
	color: #ffffff;
	font-size: 35px;
	font-family: Georgia;
	text-align: center;

.quote span
	display: block;
	margin-top: 15px;
	font-size: 24px;
	font-style: italic;

</style>
