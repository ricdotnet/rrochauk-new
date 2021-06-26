<template>
	<div class="w-full">
		<form name="contact-form" @submit.prevent="" @submit="this.send">
			<Input id="name" @input="setName" name="name" placeholder="Name" description="First and last names." class="mb-2" />
			<Input id="email" @input="setEmail" name="email" placeholder="Email" description="Your email address." class="mb-2" />
			<TextArea id="message" @input="setMessage" name="message" placeholder="Message" description="Your message here." rows="3" class="mb-2" />
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
			let params = [] //always starts an empty array when running this function

			if(this.name.trim() !== '') {
				params.push(this.name)
			} else {
				document.getElementById('name').classList.add('border','border-red-500','rounded-sm')
				return
			}

			if(this.email.trim() !== '') {
				params.push(this.email)
			} else {
				document.getElementById('email').classList.add('border','border-red-500')
				return
			}

			if(this.userMessage.trim() !== '') {
				params.push(this.userMessage)
			} else {
				document.getElementById('message').classList.add('border','border-red-500')
				return
			}

			sendMail.send(params)
			let form = document.getElementsByName('contact-form')[0]
			form.reset()
		},

		setName(name) {
			this.name = name
			document.getElementById('name').classList.remove('border','border-red-500')
		},
		setEmail(email) {
			this.email = email
			document.getElementById('email').classList.remove('border','border-red-500')
		},
		setMessage(message) {
			this.userMessage = message;
			document.getElementById('message').classList.remove('border','border-red-500')
		}
	}
}
</script>

