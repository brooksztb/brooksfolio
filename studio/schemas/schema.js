// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import contactPage from './documents/contactPage'
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import project from './documents/project'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import position from './objects/position'
import youtube from './objects/youtube'
import contactLink from './objects/contactLink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    homePage,
    aboutPage,
    contactPage,
    post,
    project,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    position,
    youtube,
    contactLink

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
