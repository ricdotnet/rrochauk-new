<template>
	<div class="w-3/4 md:w-2/4 lg:w-1/3 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
		<div class="w-full text-center mb-5">
			<div class="text-lg font-medium">Hi, I'm Ricardo, a web and software developer from Portugal.</div>
			<div class="mb-10 text-lg font-medium">Visit my website in <a href="https://ricr.dev" target="_blank" class="font-bold" :style="{color: linkColor}">ricR.dev</a></div>
			<div>You can also get in touch using the form below.</div>
		</div>
		<Form />
	</div>
</template>

<script>
import Form from "./Form";
export default {
	name: "Info",
	components: {Form},
	data() {
		return {
			linkColor: ''
		}
	},
	beforeMount() {
		this.setLinkColor()
	},
	methods: {
		setLinkColor() {
			setInterval(() => {
				this.linkColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`
			}, 100)
		}
	}
}
</script>