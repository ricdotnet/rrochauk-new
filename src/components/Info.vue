<template>
	<div class="w-3/4 md:w-2/4 lg:w-1/3 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
		<Form />
	</div>
</template>

<script>
import Form from "./Form";
export default {
	name: "Info",
	components: {Form}
}
</script>