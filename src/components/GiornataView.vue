<template>
	<div v-if="$root.user" transition="fade">
		<left-nav></left-nav>
		
		<right-content>
			<div id="wrapper">
				<div class="row">
					<div class="col-md-6">
						<div class="card">
							<div id="time">{{ date | time }}</div>
							<div id="time-side">
								<div id="time-side-inner">
									2a ora<br>
									Tecnologie e progettazione<br>
									Classe 5AIS
								</div>
							</div>
						</div>
						<div class="card">
							<h3>Orario della giornata</h3>
						</div>
					</div>
					<div class="col-md-6">
						<div class="card">
							<h3>Presenze/assenze</h3>
						</div>
					</div>
				</div>
				
			</div>
		</right-content>
	</div>
</template>

<style lang="stylus">
@import "../css/variables.styl"
@import "../css/transitions.styl"

#wrapper
	padding: 25px

#time
	width: 150px
	height: 100px
	line-height: 100px
	font-family: 'Oswald'
	font-size: 65px
	border-right: 1px solid #eee
	float: left
	padding-right: 15px // TODO: fix this!
	margin-right: 15px

#time-side
	font-family: 'Oswald'
	display: table
	height: 100px

#time-side-inner
	display: table-cell
	vertical-align: middle

</style>

<script>
var request = require('../common/request.js');

module.exports = {
	ready: function() {
		setInterval(this.updateDate, 1000);
	},
	
	data: function() {
		return {
			date: new Date()
		}
	},
	
	methods: {
		updateDate: function() {
			this.date = new Date();
		}
	}
};
</script>
