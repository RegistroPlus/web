<template>
	<div id="content-wrapper">
		<div id="content">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="stylus">
@import "../css/variables.styl"

#content-wrapper
	float: right
	width: 100%
	margin-left: -($sidebar-width)

#content
	margin-left: $sidebar-width
	background: $criceto
</style>
