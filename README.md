# diary
## Instructions for Installation and Usage (API)

### Installing Libraries
- cd into api
- Run `npm install` in the console to install all required js libraries

### Setting up a Database Instance
- Create a database instance on ElephantSQL (https://www.elephantsql.com/; ignore messages that ask for your payment details, as it is free to use up to 20MB)
- Run `touch .env` in the console (must be in the api directory)
- Copy and paste `PORT=3000`, `BCRYPT_SALT_ROUNDS=12` and `DB_URL=` into the .env file (each on a separate line)
- Go into the details section of your ElephantSQL instance by clicking on the hyperlink of the instance in the Name column on the instances page
- Copy and paste the URL of your ElephantSQL instance to the right of `DB_URL=` in the .env file
- Run `npm run setup-db` in the console to seed your database instance
- On ElephantSQL, check that all the data is in your instance by going into the browser section (located on left hand side of the details page), then select table queries, click the only option, then click execute

### Running the API
- Check that you are in the api directory, if not, cd into api 
- Run `npm run dev` in the console to start using the server
- On your browswer type `http:/localhost:3000` to start using the server 
- Any API testing platform such as Hoppscotch can be used to interact with the API


## Using the client side
- Go into index.html and open with liveserver
- You can log in and post whatever you wish
