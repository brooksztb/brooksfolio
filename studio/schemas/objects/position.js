export default {
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
      type: 'bodyPortableText'
    }
  ]
}
