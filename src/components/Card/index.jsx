import React from "react";
import { Container, Title, Header, Description, CardMeta, ForkedFrom } from "./Card.styles"
import Meta from "@components/Meta";
import { Link } from "../../shared.styles";

const Card = ({ flat, name, description, meta, fork }) => {
  return (
    <Container flat={flat}>
      <Header>
        <Title>{name}</Title>
        {
          (flat && fork.isFork) &&
          <ForkedFrom>Forked from <Link target="_blank" href={fork.parent.url}>{fork.parent.nameWithOwner}</Link> </ForkedFrom>
        }
      </Header>
      <Description>{description}</Description>
      <CardMeta>
        <Meta
          shortened={!flat}
          language={meta.language}
          stars={meta.stars}
          license={meta.license}
          updatedAt={meta.updatedAt}
        />
      </CardMeta>
    </Container>
  )
}

export default Card;