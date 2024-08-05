import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={url} target="_blank">
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h4>{title}</h4>
      </div>
      <br />
    </Col>
  );
};
