// Query selectors
const header = document.getElementById('main-header');
const navItems = document.getElementsByClassName('nav-item');
const navList = document.querySelector('#nav-list');
const homeSection = document.querySelector('#home-section');
const playersSection = document.querySelector('#players-section');
const playersList = document.getElementById('players-list');
const showPlayersBtn = document.getElementById('show-players');
const hidePlayersBtn = document.getElementById('hide-players');
const themeToggleBtn = document.getElementById('theme-toggle');
const welcomeMsg = document.getElementById('welcome-msg');

// Data
const players = [
    'Lionel Messi',
    'Cristiano Ronaldo',
    'Kylian Mbappé',
    'Kevin De Bruyne',
    'Virgil van Dijk'
];

// Show players
showPlayersBtn.addEventListener('click', function() {
    playersList.innerHTML = '';
    players.forEach(function(player) {
        const li = document.createElement('li');
        li.innerText = player;
        playersList.appendChild(li);
    });
    playersSection.style.display = 'block';
    homeSection.style.display = 'none';
});

// Hide players
hidePlayersBtn.addEventListener('click', function() {
    playersSection.style.display = 'none';
    homeSection.style.display = 'block';
});

// Nav item click
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        if (navItems[i].innerText === 'Home') {
            playersSection.style.display = 'none';
            homeSection.style.display = 'block';
        } else if (navItems[i].innerText === 'Players') {
            showPlayersBtn.click();
        } else if (navItems[i].innerText === 'Fixtures') {
            welcomeMsg.innerText = 'Upcoming fixtures will be updated soon!';
            homeSection.style.display = 'block';
            playersSection.style.display = 'none';
        }
    });
}

// Theme toggle
let dark = false;
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    dark = !dark;
    themeToggleBtn.innerText = dark ? 'Light Theme' : 'Toggle Theme';
});

// Example: setAttribute, style, querySelectorAll
header.setAttribute('title', 'Football Club Header');
header.style.borderBottom = '3px solid #0a7cff';
const allSections = document.querySelectorAll('section');
allSections.forEach(function(section) {
    section.style.borderRadius = '8px';
    section.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
});

// Add a simple form to add a new player
document.addEventListener('DOMContentLoaded', function() {
    // Create form dynamically
    const form = document.createElement('form');
    form.id = 'add-player-form';
    form.innerHTML = `
        <input type="text" id="new-player" placeholder="Add player name" required />
        <button type="submit">Add Player</button>
    `;
    homeSection.appendChild(form);

    // Form submit event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('new-player');
        const name = input.value.trim();
        if (name) {
            players.push(name);
            input.value = '';
            alert(`Player ${name} added!`);
        }
    });
});

// Event delegation example: click on any player to remove
playersList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const name = e.target.innerText;
        if (confirm(`Remove ${name}?`)) {
            // Remove from array
            const idx = players.indexOf(name);
            if (idx > -1) {
                players.splice(idx, 1);
            }
            // Remove from DOM
            playersList.removeChild(e.target);
        }
    }
});

// setTimeout example: show a welcome message after 2 seconds
setTimeout(function() {
    welcomeMsg.innerHTML += ' <span style="color:green;">(Enjoy your stay!)</span>';
}, 2000);

// setInterval example: animate the header color
themes = ['#0a7cff', '#ff7f0a', '#28a745', '#e83e8c'];
let themeIdx = 0;
setInterval(function() {
    header.style.borderBottom = `3px solid ${themes[themeIdx]}`;
    themeIdx = (themeIdx + 1) % themes.length;
}, 1500);

// Array map/filter example: log players with name length > 10
const longNames = players.filter(p => p.length > 10).map(p => p.toUpperCase());
console.log('Long player names:', longNames);

// Show current time in the header using Date object and setInterval
const headerTime = document.getElementById('header-time');
function updateTime() {
    const now = new Date();
    if (headerTime) {
        headerTime.innerText = `${now.toLocaleTimeString()}`;
    }
}
updateTime();
setInterval(updateTime, 1000);

// Destructuring and spread operator example
const [first, second, ...rest] = players;
console.log('First player:', first, 'Second:', second, 'Rest:', rest);
const allPlayers = [...players, 'Neymar'];
console.log('All players:', allPlayers);

// Optional chaining and string methods
if (players[0]?.includes('Messi')) {
    console.log('Messi is in the list!');
}
if (players[1]?.startsWith('Cristiano')) {
    console.log('Cristiano starts the name!');
}

// for...of loop and ternary operator
for (const p of players) {
    console.log(`${p} is ${p.length > 12 ? 'a superstar' : 'a star'}`);
}

// Default parameter example
function greet(name = 'Fan') {
    console.log(`Hello, ${name}! Welcome to the club.`);
}
greet();
greet('Visitor');
