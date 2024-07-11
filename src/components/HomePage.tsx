import { Col, Container, Row } from "react-bootstrap";
import { INews } from "../interfaces/INews";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";

const HomePage = () => {
  const [news, setNews] = useState<INews[]>([]);

  const fetchSpace = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");

      if (resp.ok) {
        const newsArray = await resp.json();
        setNews(newsArray.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSpace();
  }, []);

  return (
    <Container className="mt-5" fluid>
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6}>
          <h2>News from Space</h2>
        </Col>
      </Row>
      <Row>
        {news.map((article) => (
          <SingleArticle key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
