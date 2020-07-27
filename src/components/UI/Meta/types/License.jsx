import React from "react";
import Icon from "@ui/Icon";
import { Container, Figure, Text } from "../Meta.styles";

const License = ({ license }) => (
  <Container>
    <Figure>
      <Icon symbol="law" />
    </Figure>
    <Text>{license}</Text>
  </Container>
);

export default License;
