# No Cambio Tonight

A board games event organiser application. Users can maintain a game library, create events and bring their games to the events.

## Installation

- Clone this repo and the [backend](https://github.com/szib/no-cambio-tonight-backend). 
- Register an app at [Board Games Atlas](https://www.boardgameatlas.com/api/docs) and get an API key.
- Create a  `.env` file in the backend repo
	- `AUTH_SECRET=[secret]`

	- `BGA_CLIENT_ID=[your id]`
	- `BGA_SECRET=[your secret]`
- Backend: 
	- `bundle install`
	- `rails db:create && rails db:migrate`
	- Optionally: `rails db:seed`
	- Start server: `rails s`
- Frontend:
	- `npm install`
	- `npm start`
	- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Future development plans
- Users upload profile photo (save to backend or S3 bucket)
- Import events from Meetup API
- Integrate event location with Google Maps
- Advanced search
	- by category
	- game mechanics
	- by game present at an event
- Users can request others for bringing games to events
- Or users can favorite games and most popular games shows up at the event details
- Marketplace for games
- Add venue model with local game library (games always present)
- Theming
- Backend job to update `games` database daily from BGA API
- Notify users about cancelled events (email)
- Board game recommendation system
	- based on favorited games or on some input (number of players, playtime, etc)
