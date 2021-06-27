<template>
	<div>
		<div class="cursor-pointer flex-row" @click="themeSelect">
			<transition name="fade">
				<MoonIcon v-show="this.$store.currentTheme === 'light'" />
			</transition>
			<transition name="fade">
				<SunIcon v-show="this.$store.currentTheme === 'dark'"/>
			</transition>
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