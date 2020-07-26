import React, { useState } from "react";
import { Container, Form, Input, Button } from "./Finder.styles";
import { mutations } from "~/operations/mutations";
import { useQuery, useLazyQuery } from '@apollo/client';

import {
  Info as ORGANIZATION_INFO_QUERY,
  getOrganizationName as ORGANIZATION_NAME
} from "~/operations/queries/organization.gql";

const Finder = ({ onSuccess }) => {
  const [getOrgInfo, { loading, data, error }] = useLazyQuery(ORGANIZATION_INFO_QUERY);

  const [title, setTitle] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (title) {
      getOrgInfo({
        variables: {
          login: title
        }
      });
    }
  }

  if (data) {
    mutations.changeName(title)
    onSuccess();
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter the name" />
        <Button>Send!</Button>
      </Form>
    </Container>
  )
}

export default Finder;
