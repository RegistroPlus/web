<template>
	<nav id="sidebar">		
		<div class="cover">
			<div class="opacity"></div>
			
			<div style="position: relative">
				<h1>Dedalo</h1>
				<h3>Ciao {{ $root.user['nome'] }}</h3>
			</div>
		</div>
		
		<div>
			<div class="menu-sections">
				<div class="item selected">
					<span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
					La giornata
				</div>
				<div class="item">
					<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
					La settimana
				</div>
				<div class="item">
					<span class="glyphicon glyphicon-hourglass" aria-hidden="true"></span>
					Giustificazioni
				</div>
				<div class="category">AGORÀ</div>
				<div class="item">
					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
					Orario
				</div>
				<div class="item">
					<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
					Calendario
				</div>
				<div class="item">
					<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
					Verifiche
				</div>
				<div class="item">
					<span class="glyphicon glyphicon-book" aria-hidden="true"></span>
					Compiti
				</div>
				<div class="item">
					<span class="glyphicon glyphicon-download" aria-hidden="true"></span>
					Scambio
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="stylus">
@import "../css/variables.styl"
@import "nib"

$cover-height = 155px

#sidebar
	float: left
	position: absolute
	width: $sidebar-width
	height: 100%
	overflow-y: auto
	
	/**/
	background-color: #212121;
	
	.cover
		height: $cover-height
		background: url('/images/hero/2-hd.jpg') no-repeat center center;
		background-size: cover;
	
	.opacity
		position: absolute
		background: #000
		opacity: 0.6
		width: 100%
		height: $cover-height
	
	h1
		color: white
		border: none
		text-align: left
		font-size: 74px
		padding: 10px 0 0 20px
	
	h3
		color: white
		padding: 10px 0 0 24px
		margin-top: 0
	
	.glyphicon
		padding-right: 35px
		font-size: 18px

.menu-sections
	margin-top: 35px
	
	div
		padding: 12px 24px
		font-size: 24px
		font-weight: 400
		color: white
		
		&.category
			margin-top: 20px
			font-size: 18px
			color: #707173
			padding-bottom: 0
		&.item
			cursor: pointer
			margin-top: 10px
			&:hover, &.selected
				transition: background 0.3s, color 0.3s
				background: white
				color: black

</style>
