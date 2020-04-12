import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdHome from 'react-icons/lib/md/home'
import MdInfo from 'react-icons/lib/md/info'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['homePage', 'aboutPage', 'category', 'author', 'post', 'project', 'siteSettings'].includes(
    listItem.getId()
  )

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
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
