import React from "react";
import { Container, Figure, Text } from "../Meta.styles";
import Icon from "@ui/Icon";

const License = ({ license }) => {
  return (
    <Container>
      <Figure>
        <Icon symbol="law" />
      </Figure>
      <Text>{license}</Text>
    </Container>
  )
}

export default License;