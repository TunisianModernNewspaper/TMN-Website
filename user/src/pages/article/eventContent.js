import React from "react";
import EventCard from "../../components/eventCard";
import NavBar from "../../components/navbar";

function EventContent() {
  
  return (
    <div>
      <NavBar />
      <div style={{ paddingLeft: "5%", paddingTop: 1, paddingBottom: 50 }}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>Events</h1>
        <EventCard></EventCard>
      </div>
    </div>
  );
}

export default EventContent;
