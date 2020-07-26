import React, { useState } from "react";

import Info from "@containers/Info";
import Pinned from "@containers/Pinned";
import Repos from "@containers/Repos";

import Finder from "@ui/Finder";

import { Spacer } from "~/shared.styles";

const MainPage = () => {
  const [isShown, setIsShown] = useState(false);

  if (!isShown) {
    return <Finder onSuccess={() => setIsShown(true)} />
  }

  // if (loading) return <div>loading...</div>
  // if (error) return <div>error...</div>

  return (
    <React.Fragment>
      <Spacer>
        <Info />
      </Spacer>
      <Pinned />
      <Repos />
    </React.Fragment>
  )
}

export default MainPage;
