// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import '@deckdeckgo/highlight-code'
import { applyPolyfills, defineCustomElements } from '@deckdeckgo/highlight-code/dist/loader'

import mailgo from 'mailgo'

import { faGithub, faDev, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faEnvelope,
  faNewspaper,
  faCode,
  faUser,
  faArrowRight,
  faArrowLeft,
  faTag,
  faShareAlt,
  faThumbsUp,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithub,
  faDev,
  faTwitter,
  faLinkedin,
  faHome,
  faCode,
  faUser,
  faNewspaper,
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faTag,
  faShareAlt,
  faThumbsUp,
  faTimesCircle
)
// Import image url builder
import urlForImage from './utils/urlForImage'
import toPlainText from './utils/toPlainText'

import VueYoutube from 'vue-youtube'

// Import main css
require('./assets/style/main.css')

const clientConfig = require('../client-config')

applyPolyfills()
  .then(() => {
    defineCustomElements()
  })
  .catch(error => {
    console.log(error)
  })

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Open+Sans&display=swap'
  })

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
