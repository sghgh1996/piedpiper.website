export default function (ctx, inject) {
  const image = (src, width, height, quality) => {
    if (!src) {
      return null
    }

    if (src.indexOf('http') !== 0) {
      src = require('~/assets/images/' + src)
    }

    if (src.indexOf('data:') === 0) {
      return src
    }

    if (width === undefined) {
      return src
    }

    const q = {}

    if (width) {
      q.w = width
    }

    if (height) {
      q.h = height
    }

    if (quality) {
      q.q = quality
    } else {
      // This is the default quality
      q.q = 60
    }

    if (Object.keys(q).length) {
      src += '?' + Object.keys(q).map(k => `${k}=${q[k]}`).join('&')
    }

    return src
  }

  const backgroundImage = (...args) => {
    let forced = ''

    if (args[4] && args[4] === 'forced') {
      forced = '!important'
    }

    return {
      'background-image': `url("${image(...args)}") ${forced}`
    }
  }

  inject('image', image)
  inject('backgroundImage', backgroundImage)
}
