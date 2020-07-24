import React from "react";
import { Container, Figure, Text, Color, List, Item } from "./Meta.styles";
import Icon from "@components/Icon";
import { convertDate } from "../../libs/date";

export const Language = ({ name, color }) => {
  return (
    <Container>
      <Figure>
        <Color color={color} />
      </Figure>
      <Text>{name}</Text>
    </Container>
  )
}

export const Stars = ({ stars }) => {
  return (
    <Container>
      <Figure>
        <Icon symbol="star" />
      </Figure>
      <Text>{stars}</Text>
    </Container>
  )
}

const Forks = ({ forks }) => {
  return (
    <Container>
      <Figure>
        <Icon symbol="branch" />
      </Figure>
      <Text>{forks}</Text>
    </Container>
  )
}

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

const UpdatedOn = ({date}) => {
  return (
    <Container>
      <Text>Updated on {date}</Text>
    </Container>
  )
}

const Meta = ({ shortened, language, stars, forks, license, updatedAt }) => {
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

      {Boolean(shortened) === false &&
        <React.Fragment>
          {forks > 0 &&
            <Item>
              <Forks forks={forks} />
            </Item>
          }
          {license && license.length > 0 &&
            <Item>
              <License license={license} />
            </Item>
          }
          <Item>
            <UpdatedOn date={convertDate(updatedAt)} />
          </Item>
        </React.Fragment>
      }
    </List>
  )
}

export default Meta;