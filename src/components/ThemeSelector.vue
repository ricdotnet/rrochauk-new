<template>
	<div>
		<div class="cursor-pointer" @click="themeSelect">
			<MoonIcon v-show="this.$store.currentTheme === 'light'" />
			<SunIcon v-show="this.$store.currentTheme === 'dark'"/>
		</div>
	</div>
</template>

<script>
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
export default {
	name: "ThemeSelector",
	components: {SunIcon, MoonIcon},
	data() {
		return {

		}
	},
	methods: {
		themeSelect() {
			this.$store.setTheme()
		}
	}
}
</script>