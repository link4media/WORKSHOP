const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

//web api
async function fetchData() {
  const response = await fetch(`${baseUrl}/api/avo`),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = `${baseUrl}${item.image}`;


    // create title
    const title = document.createElement("h2");
    title.textContent = item.name; // printing name

    // create price
    const price = document.createElement("div");
    price.textContent = item.price; // printing price


    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  appNode.append(...allItems);

}

fetchData();