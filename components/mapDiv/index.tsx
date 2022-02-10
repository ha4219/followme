import ShadowTag from "@components/ShadowTag";
import styled from "@emotion/styled";

interface Props {
  url: string;
  title: string;
  content: string;
  tags: string[];
  distacne: number;
}

const MapDiv = ({ url, title, content, tags, distance }: Props) => {
  return (
    <Container>
      <ImgContainer src={url} alt={title} />
      <DesContainer>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        {tags.slice(0, 2)?.map((item, index) => (
          <ShadowTag key={index} tag={item} />
        ))}
      </DesContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: inline-block;
  padding: 20px;
  margin-left: 1rem;
  border-radius: 15px;
  width: 365px;
`;

const ImgContainer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 5px;
`;

const DesContainer = styled.div`
  display: inline-block;
  width: 230px;

  & .title {
    font-weight: bold;
    padding-bottom: 7px;
  }
  & .content {
    font-size: 0.8rem;
  }
`;

export default MapDiv;
