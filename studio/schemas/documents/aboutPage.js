import {array, string} from 'prop-types'

export default {
  title: 'About Page',
  name: 'aboutPage',
  type: 'document',
  fields: [
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'mainImage'
    },
    {
      title: 'Biography',
      name: 'Biography',
      type: 'bodyPortableText'
    },
    {
      title: 'Work History',
      name: 'workHistory',
      type: 'array',
      of: [
        {
          title: 'Position',
          name: 'position',
          type: 'object',
          fieldsets: [
            {
              name: 'details',
              title: 'Position Details'
            }
          ],
          fields: [
            {
              title: 'Organization',
              name: 'organization',
              type: 'string',
              fieldset: 'details'
            },
            {
              title: 'Position Title',
              name: 'positionTitle',
              type: 'string',
              fieldset: 'details'
            },
            {
              title: 'Location',
              name: 'location',
              type: 'string',
              fieldset: 'details'
            },
            {
              title: 'Start Date',
              name: 'startDate',
              type: 'string',
              description: 'Should be in format of MMM YYYY',
              fieldset: 'details'
            },
            {
              title: 'End Date',
              name: 'endDate',
              type: 'string',
              description: 'Should be in format of MMM YYYY or "now" for present',
              fieldset: 'details'
            },
            {
              title: 'Position Responsibilites',
              name: 'positionDescription',
              type: 'array',
              of: [
                {
                  title: 'Responsibility Description',
                  name: 'description',
                  type: 'object',
                  fields: [
                    {
                      title: 'Text',
                      name: 'text',
                      type: 'bodyPortableText'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
