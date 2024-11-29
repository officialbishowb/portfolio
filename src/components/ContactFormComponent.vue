<template>
    <form @submit.prevent="sendMessage" class="contact-form">
        <div class="form-group">
            <input type="email" id="email" class="form-control" v-model="email" name="email" placeholder="Email" required>
        </div>
        <div class="form-group">
            <input type="text" id="subject" class="form-control" v-model="subject" name="subject" placeholder="Subject" required>
        </div>
        <div class="form-group">
            <textarea id="message" class="form-control" v-model="message" name="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary submit">Send</button>
        <p v-if="responseMessage" :class="{'success': isSuccess, 'error': !isSuccess}" class="response-message mt-4">{{ responseMessage }}</p>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "ContactForm",
    data() {
        return {
            email: "",
            subject: "",
            message: "",
            responseMessage: "",
            isSuccess: false,
        };
    },
    methods: {
        async sendMessage() {
            const botToken = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
            const chatId = import.meta.env.VITE_APP_TELEGRAM_CHAT_ID;
            const websiteUrl = window.location.href;
            const text = `<b>New message from <code>${this.email}</code> via the website <code>${websiteUrl}</code></b>.\n\n<b>Subject:</b> ${this.subject}\n<b>Message:</b> ${this.message}`;

            try {
                const response = await axios.get(
                    `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=html`
                );

                if (response.data.ok) {
                    this.responseMessage = "Message sent successfully!";
                    this.isSuccess = true;
                } else {
                    this.responseMessage = "Failed to send message.";
                    this.isSuccess = false;
                }
            } catch (error) {
                this.responseMessage = "An error occurred while sending the message.";
                this.isSuccess = false;
            }

            this.email = "";
            this.subject = "";
            this.message = "";
        },
    },
};
</script>

<style scoped>
.contact-form {
    width: 80%;
    margin: 0 auto;
}

.form-control {
    background-color: var(--bb-background-color);
    border: 1px solid var(--bb-accent-color);
    margin: 15px 0;
    color: var(--bb-text-color-light);
}
.form-control:focus {
    background-color: var(--bb-background-color);
    border: 1px solid var(--bb-second-accent-color);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: var(--bb-text-color-light);
}
textarea.form-control {
    height: 200px;
}
.form-control::placeholder {
    color: var(--bb-text-color-light);
}
button.submit {
    margin-top: 15px;
    background-color: var(--bb-accent-color);
    border: 1px solid var(--bb-accent-color);
    color: var(--bb-background-color);
}
button.submit:hover {
    background-color: var(--bb-second-accent-color);
    border: 1px solid var(--bb-second-accent-color);
    color: var(--bb-background-color);
}
.success {
    color: var(--bb-accent-color);
}
.error {
    color: var(--bb-error-color);
}
</style>