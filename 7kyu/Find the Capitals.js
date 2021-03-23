function capital(capitals) {
  return capitals.map(
    (e) =>
      `The capital of ${
        e.hasOwnProperty('state') ? e['state'] : e['country']
      } is ${e['capital']}`
  );
}
