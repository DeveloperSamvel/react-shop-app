function getProducts() {
  const url = 'https://apishopv2.yerevan-city.am/api/Product/Search';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "count": 20,
      "page": 1,
      "priceFrom": null,
      "priceTo": null,
      "countries": [],
      "categories": [],
      "brands": [],
      "search": "Կաթ",
      "isDiscounted": false,
      "sortBy": 3
    })
  };

  async function getData() {
    const response = await fetch(url, options);
    const result = await response.json();

    return result && result.data && result.data.products;
  }

  return getData();
}

export default getProducts;