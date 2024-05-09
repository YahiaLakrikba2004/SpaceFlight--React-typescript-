import { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import News from '../types/News'
import '../Article.css'

const Article = () => {
  const { articleId } = useParams()

  const [article, setArticle] = useState<News | null>(null)

  useEffect(() => {
    fetchArticle()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchArticle = async () => {
    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`)

      if (response.ok) {
        const data: News = await response.json()
        setArticle(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (!article) {
    return <Spinner animation="border" variant="primary" />
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={article.imageUrl} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.summary}</Card.Text>
              <Card.Text>
                Published at: {new Date(article.publishedAt).toLocaleTimeString('Ita')}
              </Card.Text>
              <Button variant="primary" onClick={() => window.location.assign(article.url)}>
                READ THE FULL ARTICLE
              </Button>

               {/* bottone per tornare indietro */}
              <Button variant='success' className='mx-3' onClick={() => window.history.back ()}>Back</Button>
       

              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Article
