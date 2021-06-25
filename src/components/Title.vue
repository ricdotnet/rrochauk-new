<template>
	<div>
		{{ logo }}{{ name }}
	</div>
</template>

<script>
export default {
	name: "Title",
	props: ['name', 'logo'],
	data() {
		return {

		}
	}
}
</script>