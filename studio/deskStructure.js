import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdHome from 'react-icons/lib/md/home'
import MdInfo from 'react-icons/lib/md/info'
import MdPerson from 'react-icons/lib/md/person'
import MdContactMail from 'react-icons/lib/md/contact-mail'
import FaNewspaper from 'react-icons/lib/fa/newspaper-o'
import FaTag from 'react-icons/lib/fa/tag'
import FaCode from 'react-icons/lib/fa/code'

const hiddenDocTypes = listItem =>
  ![
    'homePage',
    'aboutPage',
    'contactPage',
    'category',
    'author',
    'post',
    'project',
    'siteSettings'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Home Page')
        .icon(MdHome)
        .child(
          S.editor()
            .id('homePage')
            .title('Home Page')
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('About Page')
        .icon(MdInfo)
        .child(
          S.editor()
            .id('aboutPage')
            .title('About Page')
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.listItem()
        .title('Contact Page')
        .icon(MdContactMail)
        .child(
          S.editor()
            .id('contactPage')
            .title('Contact Page')
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.listItem()
        .title('Blog posts')
        .icon(FaNewspaper)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Projects')
        .icon(FaCode)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(FaTag)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
