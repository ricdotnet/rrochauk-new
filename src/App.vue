<template>
	<div id="app">
		<SpinnerIcon v-show="this.$store.pageLoading" class="absolute w-28 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
		<Home v-show="!this.$store.pageLoading" />
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
		this.$store.pageLoading = true

		this.$store.getTheme()
		document.title = 'Ricardo Rocha - Full Stack Developer'

		setTimeout(() => {
			this.$store.pageLoading = false;
		}, 1000)
	}
}
</script>