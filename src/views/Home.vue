<template>
	<div class="h-screen" :class="{ 'bg-light' : this.$store.currentTheme === 'light', 'bg-dark' : this.$store.currentTheme === 'dark' }">
		<Header />
		<Info />
	</div>
</template>

<script>
import Info from "../components/Info";
import Header from "../components/Header";
export default {
	name: "Home",
	components: {Header, Info}
}
</script>