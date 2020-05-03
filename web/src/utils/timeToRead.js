const readingTime = content => {
  let minutes = 0
  const contentString = JSON.stringify(content)
  const words = contentString.split(' ').length
  const wordsPerMinute = 200
  minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

export default readingTime
