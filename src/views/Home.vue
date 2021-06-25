<template>
	<div>
		<Header />
		<Info />
	</div>
</template>

<script>
import Info from "../components/Info";
import Header from "../components/Header";
export default {
	name: "Home",
	components: {Header, Info},
	props: {
		msg: String
	}
}
</script>