import React from "react";

function BandList({ bands, onBandClick }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333", fontSize: "2rem", marginBottom: "30px" }}>
        Music Concerts
      </h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {bands.map((band) => (
          <li
            key={band.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onClick={() => onBandClick(band)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
            }
          >
            <img
              src={band.imgUrl}
              alt={band.name}
              style={{
                width: "120px",
                height: "120px",
                marginRight: "20px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#555" }}>{band.name}</h3>
              <p style={{ margin: "5px 0", color: "#777" }}>
                <strong>Location:</strong> {band.location}
              </p>
              <p style={{ margin: 0, color: "#999" }}>
                <strong>Date:</strong> {new Date(band.date).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    // Future TODO: Add pagination, filter by name, city, etc
  );
}

export default BandList;
