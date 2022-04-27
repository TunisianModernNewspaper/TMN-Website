import React from "react";
import { MediaQuery, Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const hide = { display: "none" };
function ArticleCard2(props) {
  return (
    <div>
      <MediaQuery largerThan="xs" styles={hide}>
        <Card
          style={{ width: "900px", height: "400px" }}
          shadow="xl"
          padding="xl"
          component={Link}
          to={"/" + props.category + "/" + props.id}
        >
          <Card.Section>
            <Image src={props.src} height={300} withPlaceholder />
          </Card.Section>
          <Text style={{ marginTop: "10px" }} weight={500} size="lg">
            {props.title}
          </Text>
          <Text size="sm" lineClamp={3}>
            {props.description}
          </Text>
        </Card>
      </MediaQuery>

      <MediaQuery smallerThan="xs" styles={hide}>
        <Card
          style={{ width: "400px", height: "300px" }}
          shadow="sm"
          padding="xl"
          component={Link}
          to={"/" + props.category + "/" + props.id}
        >
          <Card.Section>
            <Image src={props.src} height={200} withPlaceholder />
          </Card.Section>
          <Text style={{ marginTop: "10px" }} weight={500} size="lg">
            {props.title}
          </Text>
          <Text size="sm" lineClamp={2}>
            {props.description}
          </Text>
        </Card>
      </MediaQuery>
    </div>
  );
}

export default ArticleCard2;
