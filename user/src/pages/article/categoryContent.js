import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCard from "../../components/articleCard";
import NavBar from "../../components/navbar";
import { Loader, Center } from "@mantine/core";
import axios from "axios";
import Footer from "../../components/footer";
import imagearticle from "../../media/tst.jpg"
function CategoryContent() {
  let { category } = useParams();
  let [post, setPost] = useState();
  var rows = [];

/*function getcategory(categoryid){
  axios.get("http://localhost:3000/api/categorys/allCategorys/"+categoryid).then((response) => {
    alert(response.data);
  });
}*/

  useEffect(() => { 
    function getdata(){
      axios.get("http://localhost:3000/api/"+category+"/all"+category).then((response) => {
        setPost(response.data);
      });}
    getdata();
    
  }, [category]);

  if (post){
    
    post.map((piece) => {
    rows.push(
      <ArticleCard
        title={piece.title}
        id={piece._id}
        category={category}
        subcategory={piece.category}//{piece.category}
        description={piece.content}
        src={imagearticle}
      />
    );
    
    return "";
 });
}

if (!post)
return (
  <Center style={{ widt: "100%", height: "80vh" }}>
    <Loader color="dark" size="xl" variant="bars" />
  </Center>
);
else{
return (
<div>
  <NavBar />
  category={category}
  <div style={{ height:'100vh' }}>
    <h1 style={{ color: "#000000", fontSize: 40, marginLeft:'30px' }}>{category}</h1>
    <div style={{marginLeft:'30px'}}>
    {rows}
    </div>
  </div>
  <Footer/> 
</div>
);}
}

export default CategoryContent;
