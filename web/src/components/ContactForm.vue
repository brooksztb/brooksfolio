<template>
  <div>
    <form
      name="contact"
      method="post"
      action="/contact"
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
    <transition name="fade">
      <div class="flex items-center text-xl text-success mt-2" v-show="success">
        <font-awesome class="mr-2" :icon="['fas', 'thumbs-up']" size="1x" />
        <span>Thanks for your message! I'll be sure to take a look at it!</span>
      </div>
    </transition>
    <transition name="fade">
      <div class="flex items-center text-xl text-error mt-2" v-show="failure">
        <font-awesome class="mr-2" :icon="['fas', 'times-circle']" size="1x" />
        <span>Woops, looks like something went wrong.</span>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

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
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/contact',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(response => {
          if (response.status === 200) {
            this.success = true
            this.form = {
              name: '',
              email: '',
              subject: '',
              message: '',
              'g-recaptcha-response': ''
            }
          } else {
            this.failure = true
          }
        })
        .catch(() => (this.failure = true))
        .finally(() => {
          setTimeout(() => {
            this.success = false
            this.failure = false
          }, 10000)
        })
    }
  }
}
</script>

<style></style>
