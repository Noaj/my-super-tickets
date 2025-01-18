import React, { useState } from "react";
import PaymentForm from "../Form/PaymentForm";

function BandDetails({ band, onBack }) {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "#ddd",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        ← Back to List
      </button>
      {/* To the left to the left Column */}
      <div style={{ flex: 1 }}>
        <h1>{band.name}</h1>
        <p>📅 {new Date(band.date).toLocaleDateString()}</p>
        <p>📍 {band.location}</p>
        <img
          src={band.imgUrl}
          alt={band.name}
          style={{ width: "50%", borderRadius: "10px", marginBottom: "20px" }}
        />
        <div dangerouslySetInnerHTML={{ __html: band.description_blurb }}></div>
      </div>

      {/* Right Column */}
      <div style={{ flex: 1, padding: "20px", background: "#f9f9f9", borderRadius: "10px" }}>
        {/* I wanted to do a cart component and then a payment component, but I didn't have much time left....*/}
        <PaymentForm ticketTypes={band.ticketTypes} />
      </div>
    </div>
  );
}

export default BandDetails;
