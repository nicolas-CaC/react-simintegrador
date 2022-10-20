// Cloudinary

const cloudKey = process.env.REACT_APP_CLOUDINARY_API_KEY
const cloudSKey = process.env.REACT_APP_CLOUDINARY_API_SECRET_KEY
const cloudName = 'nico-cac'

const mediaApi = `https://${cloudKey}:${cloudSKey}@api.cloudinary.com/v1_1/${cloudName}/resources`

const image = mediaApi + '/image'
const video = mediaApi + '/video'

const mock = '/db.json'

export const api = (opcion) => {
    if (opcion === 'mock') return mock
    if (opcion === 'image') return image
    if (opcion === 'video') return video
}
