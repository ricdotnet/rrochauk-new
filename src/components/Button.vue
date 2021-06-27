<template>
	<div>
		<button class="text-white font-medium px-5 py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 shadow-sm
				flex space-x-2 items-center">
			<div>{{ text }}</div>
			<SpinnerIcon v-show="this.$store.loading" class="w-5" />
		</button>
	</div>
</template>

<script>
import SpinnerIcon from "./icons/SpinnerIcon";
export default {
	name: "Button",
	components: {SpinnerIcon},
	props: {
		text: String
	}
}
</script>