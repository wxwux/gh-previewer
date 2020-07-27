import React from "react";
import { List, Item } from "./Meta.styles";

import Language from "./types/Language";
import Stars from "./types/Stars";
import Forks from "./types/Forks";
import License from "./types/License";
import UpdatedAt from "./types/UpdatedAt";

const Meta = ({ language, stars, forks, license, updatedAt }) => {
  return (
    <List>
      {language && language.name.length > 0 &&
        <Item>
          <Language
            name={language.name}
            color={language.color}
          />
        </Item>
      }

      {stars > 0 &&
        <Item>
          <Stars stars={stars} />
        </Item>
      }
      
      {forks > 0 &&
        <Item>
          <Forks forks={forks} />
        </Item>
      }

      {(license && license.length > 0) &&
        <Item>
          <License license={license} />
        </Item>
      }

      {(updatedAt && updatedAt.length) &&
        <Item>
          <UpdatedAt date={updatedAt} />
        </Item>
      }
    </List>
  )
}

export default Meta;