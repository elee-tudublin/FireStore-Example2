# Fire Store Example: Products organised by Category in a web page

### Overview
This is simple example which retrieves categories and products from a Fire Store database for display in a web page

### Database organisation
The database is organised by product **categories**

The base collection, categories, contains documents which represent product categories:

![alt text](https://github.com/elee-tudublin/FireStore-Example2/blob/master/images/FireStore1.png "Firestore categories")

Each Category contains a collection of Products:

![alt text](https://github.com/elee-tudublin/FireStore-Example2/blob/master/images/FireStore2.png "Firestore categories")

### The Web Application
The screenshot below shows how categories and products are displayed.

When a category link is selected, the products list updated to show only products from that category. Show all loads and displays all products from all categories.

![alt text](https://github.com/elee-tudublin/FireStore-Example2/blob/master/images/webPageProducts.png "Web page products list")

### The code
For full details, read the code comments.

#### ```javascript/firestore.js```
This file contains the JavaScript which initialises the Firebase connection the function ``async function getFireStoreDataAsync(collectionPath = FB_COLLECTION)`` retrieves documents from the specified collection/ document path.

#### ```javascript/products.js```
A collection of JavaScript functions which retrieve and display categories and products in the ```ìndex.html``` page

#### JSON format for insert via HTTP POST

![alt text](https://github.com/elee-tudublin/FireStore-Example2/blob/master/images/JSON_Format_For_POST.png "JSON format for inserver via POST request")