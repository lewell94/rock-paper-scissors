## Save
Add a button that saves the match state to local storage. The home page would then have a "Load Game" button added that retrieves this from local storage, sets it into the state, and goes forward to the next round

## CSS Refactoring
Implement some kind of reusable style to avoid having to repeatedly center content.

## Name Validation
Ensure that valid names have been inputted before allowing the submit names button to be clicked

## Route Guards
Add guards to all of the game routes, that stop those pages from being accessed if there are no set number of players/player names

## Finish Tests
In order to save a little bit time tests were stopped around the point of implementing the game pages, these need finishing off

## Improve Winner Tracking
Currently the winner is stored just as a number 1 or 2, whilst sufficient this could be made more robust/cleaner with an enum for example.