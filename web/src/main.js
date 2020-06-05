// Import main css
import './assets/style/main.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithub, faDev, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faEnvelope,
  faNewspaper,
  faCode,
  faUser,
  faAsterisk,
  faArrowRight,
  faArrowLeft
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
  faAsterisk,
  faArrowRight,
  faArrowLeft
)
// Import image url builder
import urlForImage from './utils/urlForImage'

import VueYoutube from 'vue-youtube'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Open+Sans&display=swap'
  })

  Vue.use(VueYoutube)

  Vue.component('font-awesome', FontAwesomeIcon)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}
