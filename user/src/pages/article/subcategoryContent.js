import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCard from "../../components/articleCard";
import NavBar from "../../components/navbar";
import { Group, Loader, Center } from "@mantine/core";
import axios from "axios";
import PageIndicator from "../../components/pageIndicator";

function SubCategoryContent() {
  let { subcategory,category } = useParams();
  let [post, setPost] = useState();

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post)
    return (
      <Center style={{ widt: "100%", height: "80vh" }}>
        <Loader color="dark" size="xl" variant="bars" />
      </Center>
    );
  var rows = [];
  post.data.map((piece) => {
    rows.push(
      <ArticleCard
        title={piece.first_name}
        id={piece.id}
        category={subcategory}
        description={piece.last_name}
        src={piece.avatar}
      />
    );
    return "";
  });
  
  return (
    <div>
      <NavBar />
      <div style={{ marginLeft:20,paddingTop: 1, paddingBottom: 50 }}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>category:{category} & subcategory:{subcategory}</h1>
        <PageIndicator category={category} subcategory={subcategory}></PageIndicator>
        <Group direction="column">{rows}</Group>
      </div>
    </div>
  );
}

export default SubCategoryContent;
