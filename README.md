

# iHeartMusic

iHeartMusic is a web application that allows users to search Spotify's music catalog, listen to music, and manage their personal library by adding or removing songs. The app is built with a React frontend and Node backend. Also, it uses the Spotify Web API to retrieve music data.

![iHeartMusic Screenshot](https://i.imgur.com/YQ0xmkF.png)

## Features

- Search for songs, albums, and artists by name.
- Listen to songs directly from the app.
- Add or remove songs from your personal library.
- View your personal library, including songs, albums, and artists.

## Usage

To use the app, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Create a `.env` file in the project directory and add the following environment variables:

```
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
```

5. Replace `your_spotify_client_id_here` with your Spotify client ID.
6. Start the app by running `npm start`.
7. Open a browser and navigate to `http://localhost:3000`.

Note: You will need a Spotify account and a Spotify developer account to use the app.

## Technologies Used

- React
- Spotify Web API
- Axios
- Bootstrap
- Node
- Express

## Contributors

This project was created by Jashawn Rogers. Contributions are welcome. To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch with your changes: `git checkout -b my-feature-branch`.
3. Commit your changes: `git commit -m "Added some feature"`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.
