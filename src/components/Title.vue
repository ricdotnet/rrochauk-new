<template>
	<div>
		{{ logo }}
		<div class="font-medium text-2xl">{{ name }}</div>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: {
		logo: String,
		name: String,
	},
	data() {
		return {

		}
	}
}
</script>