import Vue from 'vue'

let WindowInstanceMap
//only return the window theme if were on the client, otherwise return dark by default
if (process.isClient) {
  WindowInstanceMap = new Vue({
    data() {
      return {
        theme: window.__theme
      }
    },
    created() {
      window.__onThemeChange = () => (this.theme = window.__theme)
    }
  })
} else {
  WindowInstanceMap = new Vue({
    data() {
      return {
        theme: 'dark'
      }
    }
  })
}

export default WindowInstanceMap
