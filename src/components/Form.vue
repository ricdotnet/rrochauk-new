<template>
	<div class="w-full">
		<form name="contact-form" @submit.prevent="" @submit="this.send" class="text-black">
			<Input id="name" @input="setName" name="name" placeholder="Name" description="First and last names." class="mb-2" />
			<Input id="email" @input="setEmail" name="email" placeholder="Email" description="Your email address." class="mb-2" />
			<TextArea id="userMessage" @input="setMessage" name="message" placeholder="Message" description="Your message here." rows="3" class="mb-2" />
			<Button text="Send" />
		</form>
	</div>
</template>

<script>
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import axios from 'axios'

export default {
	name: "Form",
	components: {Button, TextArea, Input},
	data() {
		return {
			message: {
				name: '',
				email: '',
				userMessage: ''
			}
		}
	},
	methods: {
		send() {
			this.$store.loading = true;

			for(let el in this.message) {
				if(this.invalidValue(el)) {
					this.$store.loading = false;
					return
				}
			}

			let body = this.message
			axios.post(`${process.env.VUE_APP_API_URL}/mail`, body).then((r) => {
				if(r.status === 200) {
					this.$store.setToast('Message sent successfully.', 'success')
				}
			}).catch(() => {
				this.$store.setToast('An error occurred. Please try again later.', 'error')
			})

			let form = document.getElementsByName('contact-form')[0]
			form.reset()

			this.$store.loading = false;
		},
		//method to show when an invalid value is used on the form
		invalidValue(element) {
			let currentEl = eval(`this.message.${element}`)

			if(currentEl.trim() === '') {
				document.getElementById(element).classList.add('border', 'border-red-500', 'rounded-sm')
				return true
			}

			return false;
		},

		setName(name) {
			this.message.name = name
			document.getElementById('name').classList.remove('border','border-red-500')
		},
		setEmail(email) {
			this.message.email = email
			document.getElementById('email').classList.remove('border','border-red-500')
		},
		setMessage(message) {
			this.message.userMessage = message;
			document.getElementById('userMessage').classList.remove('border','border-red-500')
		}
	}
}
</script>

