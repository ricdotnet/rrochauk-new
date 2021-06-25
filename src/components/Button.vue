<template>
	<div>
		<button class="text-white font-medium px-5 py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 shadow-sm">{{ text }}</button>
	</div>
</template>

<script>
export default {
	name: "Button",
	props: {
		text: String
	}
}
</script>