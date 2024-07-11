import { Card, Col, Container, Row } from "react-bootstrap";
import { INews } from "../interfaces/INews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<INews | null>(null);

  const fetchArticleDetails = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);

      if (resp.ok) {
        const data = await resp.json();
        setArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchArticleDetails();
    }
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={article.image_url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.summary}</Card.Text>
              <a href={article.url} className="nav-link d-inline-block">
                Articolo 🎆
              </a>
              <a href={article.news_site} className="nav-link d-inline-block">
                💻 Sito
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
