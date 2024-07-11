import { Card, Col } from "react-bootstrap";
import { INews } from "../interfaces/INews";
import { useNavigate } from "react-router-dom";

interface SingleNewsProps {
  article: INews;
}

const SingleArticle = ({ article }: SingleNewsProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <Col sm={12} md={6} xl={4}>
      <Card onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{article.summary}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between">
          <a href={article.url} className="nav-link d-inline-block">
            articolo🎆
          </a>
          <a href={article.news_site} className="nav-link  d-inline-block ">
            💻 sito
          </a>
        </div>
      </Card>
    </Col>
  );
};

export default SingleArticle;
