import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
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
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={8}>
          <Card.Title className="my-3 text-center">{article.title}</Card.Title>
          <Card.Img variant="top" src={article.image_url} className="w-75 ms-5 mb-5" />
          <Card.Body>
            <Card.Text>{article.summary}</Card.Text>
          </Card.Body>

          <a href={article.url} className="nav-link  my-3">
            🎆 Clicca per l' articolo completo
          </a>
          <a href={article.news_site} className="nav-link ">
            💻 Vai al sito
          </a>
          <a href="/" className="nav-link mt-3">
            🏡 home
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
