// I think like this should be a form for a band or band related design. So I created another form component for payments.
function BandForm({ band }) {
  return (
    <div>
      <h1>{band.name}</h1>
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}

export default BandForm;
