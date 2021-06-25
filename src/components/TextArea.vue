<template>
	<div>
		<textarea v-model="value" v-on:input="$emit('input', value)" :name="name" :placeholder="placeholder" :aria-placeholder="description" :rows="parseInt(rows)" class="w-full px-5 py-2 resize-none shadow-sm focus:outline-none block"></textarea>
	</div>
</template>

<script>
export default {
	name: "TextArea",
	props: {
		name: String,
		placeholder: String,
		description: String,
		rows: String
	},
	data() {
		return {
			value: ''
		}
	}
}
</script>