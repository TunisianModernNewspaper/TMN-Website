import React from "react";
import { useParams } from "react-router";
import NavBar from "../../components/navbar";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { Text } from "@mantine/core";

function PodcastPage() {
  let {id} = useParams();
  return (
    <div>
      <NavBar />
      
      <div style={{ paddingLeft: "5%", paddingTop: 1, paddingBottom: 50 }}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>Title of podcast {id}</h1>
        <YoutubeEmbed embedId="rokGy0huYEA" />
        <div style={{marginLeft:20, marginTop:20}}>
        <Text style={{fontSize:25, fontWeight:700}}>description:</Text>
        <Text>eds eds eds</Text>
        </div>
      </div>
    </div>
  );
}

export default PodcastPage;
