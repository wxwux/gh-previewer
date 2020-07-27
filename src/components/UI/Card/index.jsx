import React from "react";
import PropTypes from "prop-types";
import { Container, Title, Header, Description, CardMeta, ForkedFrom } from "./Card.styles"
import { Link } from "~/shared.styles";

const Card = ({ flat, name, description, meta, fork }) => {
  return (
    <Container flat={flat}>
      <Header>
        <Title>{name}</Title>
        {fork &&
          <ForkedFrom>Forked from <Link target="_blank" href={fork.url}>{fork.nameWithOwner}</Link> </ForkedFrom>
        }
      </Header>
      <Description>{description}</Description>
      <CardMeta>{meta}</CardMeta>
    </Container>
  )
}

Card.propTypes = {
  flat: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.element,
  fork: PropTypes.shape({
    url: PropTypes.string,
    nameWithOwner: PropTypes.string
  })
}

export default Card;