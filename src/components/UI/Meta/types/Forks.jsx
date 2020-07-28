import React from "react";
import Icon from "@ui/Icon";
import PropTypes from "prop-types";
import { Container, Figure, Text } from "../Meta.styles";

const Forks = ({ forks }) => (
  <Container>
    <Figure>
      <Icon symbol="branch" />
    </Figure>
    <Text>{forks}</Text>
  </Container>
);

Forks.propTypes = {
  forks: PropTypes.number,
};

export default Forks;
