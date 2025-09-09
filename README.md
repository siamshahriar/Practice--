# Football Club Fan Page

This project is a simple football club fan site built with HTML, CSS, and JavaScript. It demonstrates many core and practical JavaScript concepts, especially those commonly found in MDN documentation and real-world projects.

## JavaScript Concepts Used

### 1. `document.getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`
- **Why/Where:** Used to select and manipulate specific elements in the DOM.
- **Example:**
  - `document.getElementById('main-header')` selects the header to style and set attributes.
  - `document.querySelector('#home-section')` selects the home section to show/hide it.
  - `document.getElementsByClassName('nav-item')` selects all navigation items for event handling.
  - `document.querySelectorAll('section')` selects all sections to apply styles.

### 2. `addEventListener`
- **Why/Where:** To handle user interactions like button clicks and navigation.
- **Example:**
  - `showPlayersBtn.addEventListener('click', ...)` shows the players list when clicked.
  - Navigation items use `addEventListener` to switch between Home, Players, and Fixtures.

### 3. DOM Manipulation (`createElement`, `appendChild`, `innerText`, `innerHTML`, `setAttribute`, `style`)
- **Why/Where:** To dynamically create, update, and style elements based on user actions.
- **Example:**
  - Creating player list items with `createElement('li')` and adding them to the list with `appendChild`.
  - Setting the header's border and title with `setAttribute` and `style`.
  - Updating welcome messages and time with `innerText`/`innerHTML`.

### 4. Class Manipulation (`classList`)
- **Why/Where:** To toggle dark/light themes.
- **Example:**
  - `document.body.classList.toggle('dark-theme')` switches the theme.

### 5. Array Methods (`forEach`, `map`, `filter`)
- **Why/Where:** To process and display lists of players.
- **Example:**
  - `players.forEach(...)` to render each player.
  - `players.filter(...).map(...)` to log long player names.

### 6. Event Delegation
- **Why/Where:** To handle clicks on dynamically created player list items for removal.
- **Example:**
  - `playersList.addEventListener('click', function(e) { ... })` removes a player when their name is clicked.

### 7. Local Storage (`localStorage`)
- **Why/Where:** To save and load the list of players so it persists across page reloads.
- **Example:**
  - `localStorage.setItem('players', JSON.stringify(players))` saves the list.
  - `localStorage.getItem('players')` loads the list.

### 8. Timers (`setTimeout`, `setInterval`)
- **Why/Where:**
  - `setTimeout` is used to show a welcome message after a delay.
  - `setInterval` is used to animate the header border color and update the current time every second.

### 9. Modern JavaScript Features
- **Destructuring:**
  - `const [first, second, ...rest] = players;` extracts players from the array.
- **Spread Operator:**
  - `const allPlayers = [...players, 'Neymar'];` creates a new array with an extra player.
- **Optional Chaining:**
  - `players[0]?.includes('Messi')` safely checks if the first player includes 'Messi'.
- **Ternary Operator:**
  - Used to display if a player is a 'star' or 'superstar' based on name length.
- **Default Parameters:**
  - `function greet(name = 'Fan') { ... }` greets with a default name if none is provided.

### 10. Responsive and Dynamic UI
- **Why/Where:**
  - The site updates the UI in response to user actions (show/hide sections, add/remove players, theme toggle, etc.) using the above JavaScript concepts.

---

## How to Use
- Click "Show Players" to see the list of players.
- Add a new player using the form.
- Click a player's name to remove them.
- Switch between Home, Players, and Fixtures using the navbar.
- Toggle between light and dark themes.
- The current time is always shown in the header.

---

This project is a great way to practice and understand real-world JavaScript DOM manipulation and UI interactivity!
