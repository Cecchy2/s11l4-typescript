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
          <Card.Title className="text-truncate">{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text className="line-truncate-3">{article.summary}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Clicca per continuare a leggere</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticle;
