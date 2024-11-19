<template>
    <form name="contact-officialbishowb-form" data-netlify="true" method="POST" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-officialbishowb-form">
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field"></label>
        </p>
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
    </form>
</template>
<script>

export default {
    name: "ContactForm",
    data() {
        return {
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
       
    },
};
</script>

<style scoped>

.form-control{
    background-color: var(--bb-background-color);
    border: 1px solid var(--bb-accent-color);
    margin: 15px 0;
    color: var(--bb-text-color-light);
}
.form-control:focus{
    background-color: var(--bb-background-color);
    border: 1px solid var(--bb-second-accent-color);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: var(--bb-text-color-light);

}
textarea.form-control{
    height: 200px;
}
.form-control::placeholder{
    color: var(--bb-text-color-light);
}
button.submit{
    margin-top: 15px;
    background-color: var(--bb-accent-color);
    border: 1px solid var(--bb-accent-color);
    color: var(--bb-background-color);
}
button.submit:hover{
    background-color: var(--bb-second-accent-color);
    border: 1px solid var(--bb-second-accent-color);
    color: var(--bb-background-color);
}
</style>