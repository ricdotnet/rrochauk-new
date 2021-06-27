<template>
	<div class="w-96 p-4 bg-opacity-60 text-white font-medium rounded-sm absolute right-10 top-10 border"
		:class="{ 'bg-green-600 border-green-800':this.$store.toast.toastType === 'success', 'bg-red-600 border-red-800':this.$store.toast.toastType === 'error' }">
		{{ this.$store.toast.toastMessage }}
	</div>
</template>

<script>
export default {
	name: "Toast"
}
</script>