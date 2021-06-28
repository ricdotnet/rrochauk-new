<template>
	<div id="app">
		<SpinnerIcon v-show="this.$store.pageLoading" class="absolute w-28 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
		<Home v-show="!this.$store.pageLoading" />
	</div>
</template>

<script>
import Home from "./views/Home";
import SpinnerIcon from "./components/icons/SpinnerIcon";

import axios from "axios";

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

		axios.get('https://ecomply-static-assets.s3.eu-central-1.amazonaws.com/tim/events-mystic-june-2021.json').then((r) => {
			console.log(r)
		})

		setTimeout(() => {
			this.$store.pageLoading = false;
		}, 1000)
	}
}
</script>