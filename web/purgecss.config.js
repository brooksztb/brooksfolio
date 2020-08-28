module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md'
  ],
  whitelist: ['body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loaded', /svg.*/, /fa.*/],
  extractors: [
    {
      extractor: content => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

        //Capture classes specified by gridsome
        const gridsomeMatches = content.match(/[A-z0-9-:\\/]+/g)
        ,
        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

        return broadMatches.concat(gridsomeMatches, innerMatches)
    },
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug']
    }
  ]
}
