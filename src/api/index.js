import axios from 'axios'

const baseURL =
  'https://portal-tb.lynxx.co/api-test/image'

export const fetchImages = async val => {
  let changeableUrl = val

  if (val) {
    changeableUrl = `${baseURL}/${val}`
  }

  try {
    const { data } = await axios.get(changeableUrl)
    return data
  } catch (error) {
    return error
  }
}

export const fetchImage = async id => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}`, {
      headers: {
        'Content-Type': 'image/jpeg'
      },
      responseType: 'arraybuffer'
    })
    return data
  } catch (error) {
    return error
  }
}

export const fetchFavoriteImages = async val => {
  let changeableUrl = val

  if (val) {
    changeableUrl = `${baseURL}/${val}`
  }

  try {
    const { data } = await axios.get(changeableUrl)
    const filters = [true]
    const res = data.filter(obj => filters.includes(obj.favourite))
    return res
  } catch (error) {
    return error
  }
}
