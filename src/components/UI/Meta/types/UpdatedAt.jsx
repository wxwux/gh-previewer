import React from "react";
import PropTypes from "prop-types";
import { Container, Text } from "../Meta.styles";

const UpdatedAt = ({ date }) => (
  <Container>
    <Text>
      Updated on
      {" "}
      {date}
    </Text>
  </Container>
);
UpdatedAt.propTypes = {
  date: PropTypes.string,
};

export default UpdatedAt;
