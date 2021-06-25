<template>
	<div>
		<div class="cursor-pointer" @click="themeSelect">
			<MoonIcon v-show="this.showIcon" />
			<SunIcon v-show="!this.showIcon"/>
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
			showIcon: false
		}
	},
	methods: {
		themeSelect() {
			this.$store.setTheme()
		}
	}
}
</script>