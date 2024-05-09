import Event from './Event'
import Launch from './Launch'

interface News {
  id: number
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  updatedAt: string
  featured: true
  launches: Launch[]
  events: Event[]
}

export default News
