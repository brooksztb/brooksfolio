// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

//icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import library from './assets/images/icons'

// //fonts
import 'fontsource-montserrat/700-normal.css'
import 'fontsource-montserrat/600-normal.css'
import 'fontsource-montserrat/400-normal.css'
import 'fontsource-montserrat/300-normal.css'
import 'fontsource-open-sans/400-normal.css'
import 'fontsource-open-sans/300-normal.css'

//main css
import './assets/style/main.css'

//components
import '@deckdeckgo/highlight-code'
import { applyPolyfills, defineCustomElements } from '@deckdeckgo/highlight-code/dist/loader'
import mailgo from 'mailgo'
import VueYoutube from 'vue-youtube'

//Vue Prototypes
import urlForImage from './utils/urlForImage'
import toPlainText from './utils/toPlainText'

import clientConfig from '../client-config'

applyPolyfills()
  .then(() => {
    defineCustomElements()
  })
  .catch(error => {
    console.log(error)
  })

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
  head.meta.push({
    name: 'keywords',
    content: clientConfig.siteInfo.keywords.join(),
    key: 'keywords'
  })

  if (process.isClient) {
    mailgo({
      validateEmail: true
    })
  }

  Vue.use(VueYoutube)

  Vue.component('font-awesome', FontAwesomeIcon)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
  Vue.prototype.$toPlainText = toPlainText
}
