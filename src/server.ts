const express = require('express');
const { Liquid } = require('liquidjs'); // Import Liquid engine
const app = express();

// Create a Liquid instance
const liquidEngine = new Liquid({
  root: __dirname + '', // Path to your Liquid templates
  extname: '.liquid' // File extension for Liquid templates 
});

// Sample data to render
const context = { 
  name: 'Deepak Bhai!!', 
  products: [
    { title: 'Product 1', price: 10 },
    { title: 'Product 2', price: 20 }
  ]
};

app.get('/', async (req: any, res: any) => {
  // Render the 'index.liquid' template with the context
  const renderedTemplate = await liquidEngine.renderFile('index.liquid', context); 
  res.send(renderedTemplate);
});

app.listen(3000, () => console.log('Server listening on port 3000'));