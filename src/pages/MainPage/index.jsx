import React, { Suspense } from "react";

import Finder from "@ui/Finder";
import { Spacer } from "~/shared.styles";

import { mutations } from "~/operations/mutations";
import { parseQLError } from "~/libs/errors.js";

import {
  Info as ORGANIZATION_INFO_QUERY,
} from "~/operations/queries/organization.gql";

import { useLazyQuery } from '@apollo/client';

const MainPageContainer = React.lazy(() => import('@containers/MainPageContainer'));

const MainPage = () => {
  const [getOrgInfo, { loading, data, error }] = useLazyQuery(ORGANIZATION_INFO_QUERY);

  const getData = title => {
    getOrgInfo({
      variables: {
        login: title
      }
    });
    mutations.changeName(title)
  }

  if (loading) return <Spacer>loading...</Spacer>

  return (
    <React.Fragment>
      {(!data || error) &&
        <React.Fragment>
          {error && <p>{parseQLError(error).notFound()}</p>}
          <Finder onSubmit={title => getData(title)} />
        </React.Fragment>
      }
      <Suspense fallback={<Spacer>Module is loading...</Spacer>}>
        {data && <MainPageContainer />}
      </Suspense>
    </React.Fragment>
  )
}

export default MainPage;
