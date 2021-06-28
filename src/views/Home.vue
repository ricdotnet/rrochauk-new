<template>
	<div class="h-screen transition duration-300" :class="{ 'bg-light' : this.$store.currentTheme === 'light', 'bg-dark text-white' : this.$store.currentTheme === 'dark' }">
		<Header class="text-black" />
		<Info />
		<Footer />

		<transition name="fade">
			<Toast v-show="this.$store.toast.isToastVisible" /> <!-- TODO emit the toast when email is sent -->
		</transition>
	</div>
</template>

<script>
import Info from "../components/Info";
import Header from "../components/Header";
import Toast from "../components/Toast";
import Footer from "../components/Footer"
export default {
	name: "Home",
	components: {Toast, Header, Info, Footer},
	data() {
		return {

		}
	}
}
</script>