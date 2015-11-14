<template>
	<div id="sidebar">
		<div class="opacity"></div>
		
		<div class="relative">
			<h1>Dedalo</h1>
			
			<div class="menu-sections">
				<div class="category">REGISTRO DI CLASSE</div>
				<div class="item">aaa</div>
				<div class="category">REGISTRO DEL PROFESSORE</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus">
@import "../css/variables.styl"
@import "nib"

#sidebar
	float: left
	position: absolute
	width: $sidebar-width
	height: 100%
	
	background: url('/images/hero/2-hd.jpg') no-repeat center center;
	background-size: cover;
	.opacity
		opacity: 0.6
	h1
		color: white
		border: none
		text-align: left
		font-size: 74px
		padding: 24px

.menu-sections
	margin: 0
	div
		padding: 12px 24px
		margin-top: 10px
		font-size: 24px
		font-weight: 600
		color: white
		border-left: 4px solid white
		//font-family: 'Oswald'
		&:hover
			transition: background 0.3s, color 0.3s
			background: white
			color: black
		&.item
			margin-left: 24px

</style>
