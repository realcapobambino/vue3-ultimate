<template>
	<nav>
		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'nothome' }">Not Home</router-link>
	</nav>
	<router-view />
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		/* -moz-osx-font-smoothing: grayscale; */
		text-align: center;
		color: #2c3e50;
	}

	body {
		background-color: grey;
	}
	nav {
		padding: 10px;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		margin: 10px;
	}

	nav a.router-link-exact-active {
		color: white;
		background: blueviolet;
		border-radius: 5px;
		padding: 10px;
		text-decoration: none;
	}
</style>
