import React, { Suspense } from "react";

import Finder from "@ui/Finder";
import { useLazyQuery } from "@apollo/client";
import { Spacer } from "~/shared.styles";

import { mutations } from "~/operations/mutations";
import { parseQLError } from "~/libs/errors.js";

import {
  Info as ORGANIZATION_INFO_QUERY,
} from "~/operations/queries/organization.gql";

const MainPageContainer = React.lazy(() => import("@containers/MainPageContainer"));

const MainPage = () => {
  const [getOrgInfo, { loading, data, error }] = useLazyQuery(ORGANIZATION_INFO_QUERY);

  const getData = (title) => {
    getOrgInfo({
      variables: {
        login: title,
      },
    });
    mutations.setOrganizationName(title);
  };

  if (loading) return <Spacer>loading...</Spacer>;

  return (
    <>
      {(!data || error)
        && (
        <>
          {error && <Spacer centered data-cy-id="error-message">{parseQLError(error).notFound()}</Spacer>}
          <Finder onSubmit={(title) => getData(title)} />
        </>
        )}
      <Suspense fallback={<Spacer>Module is loading...</Spacer>}>
        {data && <MainPageContainer />}
      </Suspense>
    </>
  );
};

export default MainPage;
