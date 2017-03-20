
const backgroundImage = (url) => {
  return { 'background-image': 'url(' + url + ')' }
}

const randomInArray = array => {
  return array[Math.floor(Math.random() * array.length)]
}

export { backgroundImage, randomInArray }
