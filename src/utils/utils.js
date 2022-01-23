const fetchCards = () => {
  return fetch(`https://api.unsplash.com/photos?page=1`, {
    headers: {
      Authorization: 'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc',
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export default fetchCards;
