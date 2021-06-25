<template>
	<div id="app">
		<SpinnerIcon v-show="this.$store.loading" class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
		<Home v-show="!this.$store.loading" msg="hey hey" />
	</div>
</template>

<script>
import Home from "./views/Home";
import SpinnerIcon from "./components/icons/SpinnerIcon";

export default {
	name: 'App',
	components: {
		SpinnerIcon,
		Home,
	},
	data() {
		return {

		}
	},
	created() {
		this.$store.loading = true

		this.$store.getTheme()
		console.log(this.$store.currentTheme)

		setTimeout(() => {
			this.$store.loading = false;
		}, 2000)
	}
}
</script>