# Program Flow

--- global user object
--- call a json request on the users array for /channels/
--- pull down all user information, even for potential non-users
--- if/else statement to check if valid user
--- --- if valid user, call a json request for users array for /streams/
--- --- --- if stream is null, user is offline, set status appropriately
--- --- --- else user is online, pull down game being played
--- --- else not a valid user, set status to unavailable

# Functions

* createLink (//STREAM//, User-Name)
--- create link, pass parameters of user name and what information we are pulling down (streams, channels)

* displayUsers ()
--- call a for function so that we can utilize index to scrape through user data structure
--- append a twitch user to the list, with logo, name, status
--- call if/else statement to check user status
--- --- if user is online the status will be the game they are playing
--- --- else if user is offline the status will be listed
--- --- else the user will be displayed as invalid, with a standard icon as the logo

* appendInformation(index, User-Logo, User-Name, User-Status)
--- this is just reusable .html methods so it doesn't have to repeatedly be called

# Potential Later Adds
--- Ability to add more users to list
--- Search the list of users for a specific user
--- Ability to toggle between online, offline, and all users

# Revisions
--- Data Structure improvements?