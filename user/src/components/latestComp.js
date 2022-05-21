import { Text, Card, Image } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

function LatestNews(props) {
  return (
    <div>
      <Card
        style={{ width: "400px", height: "300px" }}
        shadow="sm"
        padding="xl"
        component={Link}
        to={"/" + props.category+ "/"+ props.subcategory +"/"+props.id}
      >
        <Card.Section>
          <Image src={`data:image/jpeg;base64,${props.src}`} height={200} withPlaceholder />
        </Card.Section>

        <Text style={{ marginTop: "20px" }} weight={500} size="lg">
          {props.title}
        </Text>

        <Text size="sm" lineClamp={1}>{ReactHtmlParser(props.description)}</Text>
      </Card>
    </div>
  );
}

export default LatestNews;
