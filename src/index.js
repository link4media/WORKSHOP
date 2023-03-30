const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

// Internationalization API for currency
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
}

//web api
async function fetchData() {
  const response = await fetch(`${baseUrl}/api/avo`),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // Create image
    const image = document.createElement("img");
    image.src = `${baseUrl}${item.image}`; // printing image
    
    image.classList = 'product-image'

    // Create title
    const title = document.createElement("h2");
    title.textContent = item.name; // printing name
    
    title.classList = 'product-title'


    // Create price
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price); // printing price

    price.classList = 'product-price'


    const container = document.createElement("div");
    container.append(image, title, price);

    container.classList = 'product-container'

    allItems.push(container);
  });

  appNode.append(...allItems);

}

fetchData();