import React from "react";
import Icon from "@ui/Icon";
import PropTypes from "prop-types";
import { Container, Figure, Text } from "../Meta.styles";

export const Stars = ({ stars }) => (
  <Container>
    <Figure>
      <Icon symbol="star" />
    </Figure>
    <Text>{stars}</Text>
  </Container>
);

Stars.propTypes = {
  stars: PropTypes.number,
};

export default Stars;
