function DoxxMeQA () {

  const address = {
      forename: "J",
      surname: "S",
      line1: "dear QA",
      line2: "stop trying",
      city: "to get us",
      postcode: "to put our addresses on the internet"
  }

  return (
      <div>
          <h1>Forename: {address.forename}</h1>
          <h1>Surname: {address.surname}</h1>
          <h1>Line 1: {address.line1}</h1>
          <h1>Line 2: {address.line2}</h1>
          <h1>City: {address.city}</h1>
          <h1>Postcode: {address.postcode}</h1>
      </div>
  );
};

export default DoxxMeQA;