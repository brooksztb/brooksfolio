<template>
  <div>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p>
      <label class="form-input">
        <input type="text" name="name" required="required" v-model="form.name" />
        <span>Name</span>
      </label>
      <label class="form-input">
        <input type="email" name="email" required="required" v-model="form.email" />
        <span>Email Address</span>
      </label>
      <label class="form-input">
        <input type="text" name="subject" required="required" v-model="form.subject" />
        <span>Subject</span>
      </label>
      <label class="form-input">
        <textarea name="message" required="required" v-model="form.message"></textarea>
        <span>Message</span>
      </label>
      <button class="form-button" type="submit">Send Message</button>
    </form>
    <div v-show="success">
      <span>Thanks for your message! I'll be sure to take a look at it!</span>
    </div>
    <div v-show="failure">
      <span>Woops, looks like something went wrong.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      success: false,
      failure: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },
    handleSubmit() {
      this.success = false
      this.failure = false
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
        .then(() => {
          this.success = true
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
        })
        .catch(() => (this.failure = true))
    }
  }
}
</script>

<style></style>
