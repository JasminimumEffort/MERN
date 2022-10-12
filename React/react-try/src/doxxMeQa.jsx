const doxxMeQA = () => {

  const address = {
      forename: "J",
      surname: "S",
      line1: "QA Consulting",
      line2: "Anchorage 1",
      city: "Manchester",
      postcode: "M50 3YL"
  }

  return (
      <div>
          <h1>{address.forename}</h1>
          <h1>{address.surname}</h1>
          <h1>{address.line1}</h1>
          <h1>{address.line2}</h1>
          <h1>{address.city}</h1>
          <h1>{address.postcode}</h1>
      </div>
  );
};

export default doxxMeQA;