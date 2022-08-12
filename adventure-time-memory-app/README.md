# Adventure Time memory game

Hey guys! Here is [design](https://www.figma.com/file/r07xErKdJt7mA9o0JDIAyK/adventure?node-id=0%3A1) we did for the game. 

## How to start the project

1. Download or clone this repository

2. Install its dependencies: npm install

3. Build the project: npm run build

4. Start the project: npm start

5. The website is now working, hope you enjoy it 😃

## Technologies we will use in the application development process

### React

This is one of the most popular JavaScript libraries based on a component approach. React has several advantages, from the main ones: the created components can be reused, and thanks to virtual DOM we greatly increase the productivity of the application. In real work, React is often required.

### Typescript

TypeScript allows you to get rid of errors arising from the dynamic typing of the JavaScript language ( when the type of variable can be changed at any time ). Such errors are difficult to detect, and it can take a lot of time to fix. TypeScript simply does not miss these errors: this is its undoubted plus both at the development stage and at the support stage. In addition, TypeScript greatly improves code readability: conveniently when you can describe all those transmitted to the props component using type or interface.

### Redux

Redux is the application state manager. It allows you to access all the necessary data anywhere in the application, and it is really convenient.

### MongoDB

To store the information we need, the MongoDB database was selected. It is non-relational and stores data in the form of JSON documents. The database is based on collections of various documents. The number of fields, the content and size of these documents may vary.

### Mongoose

This is a JavaScript library that allows you to define schemes with strictly typed data. Immediately after defining the scheme, Mongoose makes it possible to create a model based on a specific scheme. The model then synchronizes with the MongoDB document by defining a model diagram. In our case, it was a model for storing lesson content and a model for user data.

### Node.js & Express

Node.js is a popular platform for the development of various websites, which makes it possible to write in a single language local tasks and tasks related to server work and databases.

To simplify the development of backend’s, we used Express, one of the most powerful universal frameworks for Node.js servers. With it, we processed with various HTTP methods in different URLs ( routes ) and processed errors.

Express has fairly simple and understandable documentation, which will not be difficult to understand even a beginner.
