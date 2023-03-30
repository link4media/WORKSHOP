/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// npm start in folder project

// console.log('Happy hacking :) jajajaj')

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

// **** Web API ****
// With promise
window.fetch(`${baseUrl}/api/avo`)

.then(reponse => reponse.json())

.then(responseJson => {

    const allItems = []
    responseJson.data.forEach(item => {

        // Create image
        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`;

        image.className = 'product-image'

        // Create title
        const title = document.createElement('h2');
        title.textContent = item.name;
        // title.style = 'font-size: 2rem';
        // title.style.fontSize = '2rem';
        title.className = 'product-title';

        // Create price
        const price = document.createElement('div');
        price.textContent = item.price;

        // To put all in a div
        const container = document.createElement('div');
        container.append(image, title, price);

        allItems.push(container);
    });
    
    appNode.append(...allItems);
});