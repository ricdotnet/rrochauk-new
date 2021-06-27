<template>
	<div class="h-screen transition duration-300" :class="{ 'bg-light' : this.$store.currentTheme === 'light', 'bg-dark' : this.$store.currentTheme === 'dark' }">
		<Header />
		<Info />

		<transition name="fade">
			<Toast v-show="this.$store.toast.isToastVisible" /> <!-- TODO emit the toast when email is sent -->
		</transition>
	</div>
</template>

<script>
import Info from "../components/Info";
import Header from "../components/Header";
import Toast from "../components/Toast";
export default {
	name: "Home",
	components: {Toast, Header, Info},
	data() {
		return {

		}
	}
}
</script>