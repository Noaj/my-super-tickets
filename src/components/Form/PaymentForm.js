import React, { useState } from "react";

function PaymentForm({ ticketTypes }) {
  const [ticketCounts, setTicketCounts] = useState(
    ticketTypes.reduce((acc, ticket) => ({ ...acc, [ticket.type]: 0 }), {})
  );
  const [formValid, setFormValid] = useState(false);

  // State for input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleTicketChange = (type, value) => {
    setTicketCounts((prev) => {
      const updatedCounts = {
        ...prev,
        [type]: Math.max(0, prev[type] + value),
      };
      const totalTickets = Object.values(updatedCounts).reduce((sum, count) => sum + count, 0);
      setFormValid(totalTickets > 0);
      return updatedCounts;
    });
  };

  const totalCost = ticketTypes.reduce(
    (sum, ticket) => sum + ticketCounts[ticket.type] * ticket.cost,
    0
  );

  const handlePurchase = (event) => {
    event.preventDefault();
    alert("Thank you for your purchase. Yey you got tickets.");
    setTicketCounts(ticketTypes.reduce((acc, ticket) => ({ ...acc, [ticket.type]: 0 }), {}));
    setFormValid(false);

    // Reset state after submit form
    setFirstName("");
    setLastName("");
    setAddress("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
  };

  return (
    <form style={{ marginTop: "20px" }} onSubmit={handlePurchase}>
      <h2>Select Tickets</h2>
      {ticketTypes.map((ticket) => (
        <div
          key={ticket.type}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff",
          }}
        >
          <div>
            <h4 style={{ margin: "0 0 5px 0" }}>{ticket.name}</h4>
            <p style={{ margin: 0 }}>{ticket.description}</p>
            <p style={{ margin: "10px 0 0 0", fontWeight: "bold" }}>${(ticket.cost / 100).toFixed(2)}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button
              type="button"
              onClick={() => handleTicketChange(ticket.type, -1)}
              style={{ marginBottom: "5px", cursor: "pointer" }}
            >
              -
            </button>
            <input
              type="text"
              value={ticketCounts[ticket.type]}
              readOnly
              style={{
                width: "40px",
                textAlign: "center",
                marginBottom: "5px",
                border: "1px solid #ddd",
              }}
            />
            <button
              type="button"
              onClick={() => handleTicketChange(ticket.type, 1)}
              style={{ cursor: "pointer" }}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <h3 style={{ textAlign: "right", margin: "20px 0" }}>TOTAL: ${(totalCost / 100).toFixed(2)}</h3>
      <h3>Payment Details</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "15px",
        }}
        required
      />
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={{
            flex: 2,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          required
        />
        <input
          type="text"
          placeholder="MM / YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
          required
        />
      </div>
      <button
        type="submit"
        disabled={!formValid}
        style={{
          width: "100%",
          padding: "10px",
          background: formValid ? "#333" : "#ccc",
          color: formValid ? "#fff" : "#666",
          border: "none",
          borderRadius: "5px",
          cursor: formValid ? "pointer" : "not-allowed",
        }}
      >
        Get Tickets
      </button>
    </form>
  );
}

export default PaymentForm;
