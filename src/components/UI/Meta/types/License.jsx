import React from "react";
import Icon from "@ui/Icon";
import PropTypes from "prop-types";
import { Container, Figure, Text } from "../Meta.styles";

const License = ({ license }) => (
  <Container>
    <Figure>
      <Icon symbol="law" />
    </Figure>
    <Text>{license}</Text>
  </Container>
);

License.propTypes = {
  license: PropTypes.string,
};

export default License;
