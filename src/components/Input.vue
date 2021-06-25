<template>
	<div>
		<input v-model="value" v-on:input="$emit('input', value)" :name="name" :placeholder="placeholder" :aria-placeholder="description" class="w-full px-5 py-2 shadow-sm focus:outline-none" />
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		name: String,
		placeholder: String,
		description: String
	},
	data() {
		return {
			value: ''
		}
	}
}
</script>