import React from "react";
import PropTypes from "prop-types";
import {
  Container, Figure, Text, Color,
} from "../Meta.styles";

export const Language = ({ name, color }) => (
  <Container>
    <Figure>
      <Color color={color} />
    </Figure>
    <Text>{name}</Text>
  </Container>
);

Language.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Language;
