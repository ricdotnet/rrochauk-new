<template>
	<div class="w-full">
		<form @submit.prevent="" @submit="this.send">
			<Input @input="setName" name="name" placeholder="Name" description="First and last names." class="mb-2" />
			<Input @input="setEmail" name="email" placeholder="Email" description="Your email address." class="mb-2" />
			<TextArea @input="setMessage" name="message" placeholder="Message" description="Your message here." rows="3" class="mb-2" />
			<Button text="Send" />
		</form>
	</div>
</template>

<script>
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

import sendMail from "../controllers/sendMail";

export default {
	name: "Form",
	components: {Button, TextArea, Input},
	data() {
		return {
			name: '',
			email: '',
			userMessage: ''
		}
	},
	methods: {
		send() {
			let params = []

			if(this.name.trim() !== '') {
				params.push(this.name)
			} else {
				alert('enter a name...')
				return
			}

			if(this.email.trim() !== '') {
				params.push(this.email)
			} else {
				alert('enter an email...')
				return
			}

			if(this.userMessage.trim() !== '') {
				params.push(this.userMessage)
			} else {
				alert('enter a message...')
				return
			}

			sendMail.send(params)
		},
		setName(name) {
			this.name = name
		},
		setEmail(email) {
			this.email = email
		},
		setMessage(message) {
			this.userMessage = message;
		}
	}
}
</script>

