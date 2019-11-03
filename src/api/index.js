import { get, post } from './helper'

const getSeller = get('/api/seller')
const postName = post('/api/post')
export {
  getSeller, postName
}
