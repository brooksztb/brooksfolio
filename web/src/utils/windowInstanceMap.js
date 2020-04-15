import Vue from 'vue'

const WindowInstanceMap = new Vue({
  data() {
    return {
      theme: window.__theme
    }
  },
  created() {
    window.__onThemeChange = () => (this.theme = window.__theme)
  }
})

export default WindowInstanceMap
