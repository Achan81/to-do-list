
## Using NPM
`npm run start` or `npm run dev`  to run the development server
`npm run build` to create a build directory

## Using Yarn
`yarn start` or `yarn dev`  to run the development server
`yarn build` to create a build directory

### ⚠️
To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### key learnings
how to build a to-do-list

### UUID 
- A universally unique identifier (UUID) is a 128-bit format for creating IDs in code that has become popular in recent years, especially in relation to database keys. By using UUIDs, you ensure that your ID is not just unique in the context of a single database table or web application, but is truly unique in the universe. 
- All UUIDs are 128 bits in length, but are commonly represented as 32 hexadecimal characters separated by four hyphens.
- This app uses Version 4 UUIDs.
- It is important to note that while the probability that a UUID will collide with another is not zero, its practically zero. The chances of collision are so astronomically low, worrying about it would be ridiculous. The total number of possible UUIDs is ```2^128``` or ```340282366920938463463374607431768211456.```

Further reading: https://qvault.io/clean-code/what-are-uuids-and-should-you-use-them/