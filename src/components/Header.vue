<template>
	<div class="h-20 bg-indigo-200 px-20 flex justify-center items-center space-x-10 shadow-sm">
		<div>
			<Title name="Ricardo Rocha" logo="" />
		</div>
		<div>
			<ThemeSelector />
		</div>
	</div>
</template>

<script>
import Title from "./Title";
import ThemeSelector from "./ThemeSelector";
export default {
	name: "Nav",
	components: {ThemeSelector, Title}
}
</script>