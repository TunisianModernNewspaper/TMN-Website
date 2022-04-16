import React,{useEffect, useState} from "react";
import { useParams } from "react-router";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import { Loader, Center,Image, SimpleGrid } from "@mantine/core";
import axios from "axios";
import ArticleCard from "../../components/articleCard";
import imagearticle from "../../media/tst.jpg"


function Article() {
  let { id, category, subcategory } = useParams();
  let [post, setPost] = useState("");
  var rows = [];
  
  useEffect(() => {
    async function getdata(){
      axios.get("http://localhost:3000/api/blogs/detail/"+id).then((response) => {
        setPost(response.data);
        //alert(JSON.stringify(post))
      });}
    getdata();
    
  }, [post]);

  if (post){
    

}
  
 if (!post)
    return (
      <Center style={{ width: "100%", height: "80vh" }}>
        <Loader color="dark" size="xl" variant="bars" />
      </Center>
    );
    else{
     
  return (
    <div style={{height:window.innerHeight,marginBottom:'350px'}}>
      <NavBar />
   
      <div style={{ height:'100vh', width:'80%' , marginLeft:'30px', marginTop:'80px'}}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>{post.title}</h1>
        <Image src={imagearticle} alt="dis a pic" style={{width:'40%', float:'right', margin:'20px'}}/>
        
        <p style={{textAlign: 'justify',textJustify: 'inter-word', fontSize:'18px'}}>{post.content}</p>
       
        <div style={{width:'100%', display:'flex', alignItems:'flex-end',justifyContent:'flex-end'}}>
        <img src={`data:image/jpeg;base64,${post.image}`} alt="this is indeed an img"/>
        <p style={{fontFamily: "MonteCarlo, cursive", fontSize:'36px'}}>-{post.author}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );}
}

export default Article;
