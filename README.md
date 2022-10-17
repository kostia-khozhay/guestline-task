# Guestline hotel task

The goal is to create a page showing a list of hotels and their rooms.
Please use React and (preferably) Typescript to implement this challenge as these are our technologies of choice for front end work. There are no other restrictions on technology use.

To get the information to present, you will need to query the following API:
https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG

This returns a list of hotels, with an Id. The Id can be used to query this query for the room types:
https://obmng.dbm.guestline.net/api/roomRates/OBMNG/%hotelId% for example, https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG1

Guests using the site should be able to:

- Filter based on the star rating of the hotel, that is, given I have selected 3 stars, then I am able to see all hotels with a 3 and above rating.
- Filter based on the capacity of the room. That is, when I have selected 1 adult and 1 child then I am able to see all rooms with at least that capacity. Therefore, I will not be shown any rooms which do not accept children.
- View all images of the displayed hotel
- See hotel details (including hotel name, address and star rating) and room details (including room type, max adults, max children and long description)

For other requirements, please see the [attached mockup sketch](https://gxpservicesstagestorage.blob.core.windows.net/hotelpagecodetest/9SYKaPm4q85GqTZzno7AT3.png). Note that the crossed boxes on mockup is the location for images. The URLs can be found in the response to the initial request.

Please approach this challenge like you would any work task, and importantly keep things simple.

### Start the project

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run tests

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build the project

```
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Used tech stack / libs:

- React
- Redux-toolkit
- TypeScript
- React testing library
- Axios
- MUI
- React-slick
- Styled-components
- React-toastify
- Prettier

### TODO:

- Add React Intl for i18n
- Cover selectors by tests
