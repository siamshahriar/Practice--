// Practice

//--- 1. What are the most reliable ways to identify elements in Cypress?

// 1. Using data-* attribute (this is the most reliable)
cy.get('[data-cy=submit-button]').click();

// 2. Using unique ID
cy.get('#login-form').should('be.visible');

// 3. Using accessible attributes
cy.get('[aria-label="Close"]').click();

// 4. Using element text
cy.contains('Submit').click();

// 5. Using unique class (if it is not changed dynamically)
cy.get('.main-header').should('exist');

// 6. Chained selectors for specificity
cy.get('.form-group').find('input[type="email"]').type('user@example.com');

//--- 2. Why is using data-cy or data-testid attributes recommended in Cypress tests?

// Example: Using data-cy (recommended, stable)
cy.get('[data-cy=login-btn]').click();

// Example: Using class selector (can break if class changes)
cy.get('.btn.btn-primary').click();

// Example: Using element text (can break if text changes)
cy.contains('Login').click();

// Example: Using ID (can break if reused or changed)
cy.get('#loginButton').click();


//--- 3. How can you locate an element using its ID or class in Cypress?

/*
Example HTML:
<button id="elementId">By ID</button>
<button class="element-class">By class</button>
<button class="btn primary">By multiple classes</button>
<button id="elementId" class="element-class">By ID and class together</button>
*/

// By ID
cy.get('#elementId').should('be.visible');

// By class (single class)
cy.get('.element-class').click();

// By multiple classes
cy.get('.btn.primary').should('exist');

// By ID and class together
cy.get('#elementId.element-class').should('be.visible');

//--- 4. What is the difference between using #id, .class, and [attribute=value] selectors?

/*
Example HTML:
<button id="saveBtn">Save</button>
<button class="action-btn">Action</button>
<button class="action-btn">Trigger</button>
<button class="action-btn">Goal</button>
<button data-cy="delete-btn">Delete</button>
</button>
*/

// By ID
cy.get('#saveBtn').click();

// By class, can select multiple elements with the same class
cy.get('.action-btn').click();

// By attribute and their name
cy.get('[data-cy=delete-btn]').click();


//--- 5. How does cy.contains() work, and when should you use it?

/*

  We will inject this into the document in the beforeEach() hook
  so we don't need a running server or a separate index.html file.

  <html>
  <head><title>Test Page</title></head>
  <body>
    <header>
      <h1>User Dashboard</h1>
    </header>
    <main>
      <div class="user-profile" data-cy="user-profile-card">
        <h2>User One</h2>
        <p>Status: Active</p>
        <button>View Details</button>
      </div>
      <div class="user-profile" data-cy="user-profile-card">
        <h2>User Two</h2>
        <p>Status: Inactive</p>
        <button>View Details</button>
      </div>

      <form id="login-form">
        <button type="submit">Submit</button>
      </form>

      <div class="footer-message">
        You can <span>submit</span> your request here.
      </div>
    </main>
  </body>
  </html>
*/

// 1. Find an element by its text content
cy.contains('User Dashboard').should('be.visible');

// 2. Interact with an element found by its text
cy.contains('Submit').click();

// 3. Use a selector to be more specific (avoids ambiguity)

// Finds a <button> that contains the text 'Submit'.
cy.contains('button', 'Submit').should('have.attr', 'type', 'submit');

// Finds a <span> that contains the text 'submit'.
cy.contains('span', 'submit').should('exist');

// 4. Chain off cy.get() to scope the search
cy.get('[data-cy="user-profile-card"]')
  .contains('User Two')
  .parent()
  .find('button')
  .click();


// 5. Work with regular expressions

// Finds elements containing text that starts with "User".
cy.contains(/^User/).should('have.length', 2);

// 6. Work with options like matchCase

// This fails because contains() is case-sensitive by default.
cy.contains('user dashboard').should('not.exist');

// Pass an options object to make the search case-insensitive.
cy.contains('user dashboard', { matchCase: false }).should('be.visible');

///--- 6. What is the purpose of cy.get() in Cypress?
/*

<html>

<head>
    <title>Test Page</title>
</head>

<body>
    <h1 id="main-header">My Application</h1>

<div id="user-list" data-cy="user-list-container">
  <p>Available Users:</p>
  <ul>
    <li class="list-item">Alice</li>
    <li class="list-item">Bob</li>
    <li class="list-item">Charlie</li>
  </ul>
</div>

<form>
  <label for="email">Email</label>
  <input name="email" id="email" type="email">
  <button type="submit">Subscribe</button>
</form>
</body> 
</html> */

// cy.get() is the primary command for selecting one or more DOM elements and it takes a CSS selector as an argument

// 1. Get a single element using a unique selector (ID)
cy.get('#main-header').should('contain', 'My Application');

// 2. Get multiple elements that share a selector (class)
cy.get('.list-item').should('have.length', 3);

// 3. Chain an action (.type()) and an assertion (.should())
cy.get('input[name="email"]')
.type('test@example.com')
.should('have.value', 'test@example.com');

// 4. Scope searches by chaining .find() off a cy.get()
// This only looks for <li> elements INSIDE the '#user-list' container.
cy.get('#user-list')
.find('li')
.first()
.should('have.text', 'Alice');

// 5. Use an alias to save a reference for later
// This stores the result of cy.get() in an alias named 'userListContainer'.
cy.get('[data-cy="user-list-container"]').as('userListContainer');

// Later, this can be retrieved using cy.get() with the '@' symbol.
cy.get('@userListContainer')
.find('p')
.should('contain', 'Available Users');

//--- 7. What happens if multiple elements match your selector in Cypress?
/*

<html>

<head>
    <title>Test Page</title>
</head>

<body>
    <ul id="fruit-list">
        <li class="fruit-item">Apple</li>
        <li class="fruit-item">Banana</li>
        <li class="fruit-item">Cherry</li>
    </ul>
</body>

</html> */
// When cy.get() finds multiple elements, it yields them as an array-like collection and cannot be directly performed actions like .click() on this collection, as Cypress


// 1. Assertions can run on multiple elements
cy.get('.fruit-item').should('have.length', 3); //Okay

// 2. Actions like .click() will fail on multiple elements
cy.get('.fruit-item').click(); // <-- THIS WOULD FAIL

// 3. Use commands like .first(), .last(), or .eq() to select one element for an action
cy.get('.fruit-item').first().click(); // Clicks on "Apple"
cy.get('.fruit-item').last().click(); // Clicks on "Cherry"
cy.get('.fruit-item').eq(1).click(); // Clicks on "Banana" 

//----- 8. How can you find an element inside another specific parent element?
/*

<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <div class="product-card" data-cy="product-card-apples">
        <h2>Apples</h2>
        <p>Price: $1.99</p> <button>Add to Cart</button>
    </div>
    <div class="product-card" data-cy="product-card-oranges">
        <h2>Oranges</h2>
        <p>Price: $2.49</p> <button>Add to Cart</button>
    </div>
</body>
</html>
 */

// 1. The WRONG way: This is ambiguous
cy.contains('Add to Cart').click(); // <-- AMBIGUOUS AND WILL FAIL

// 2. Using .find()

cy.get('[data-cy="product-card-apples"]')
.find('button')
.click();

// 3. Example for the second card
cy.get('[data-cy="product-card-oranges"]')
.find('button')
.should('contain.text', 'Add to Cart');

// 4. Alternative: Using a descendant selector
cy.get('[data-cy="product-card-oranges"] button').click();

//--- 9. How do you select the nth element in a list using Cypress?
/*

<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <ol id="ranking">
        <li class="rank-item">First Place</li>
        <li class="rank-item">Second Place</li>
        <li class="rank-item">Third Place</li>
        <li class="rank-item">Fourth Place</li>
    </ol>
</body>
</html> */

// 1. Selecting the first element (index 0)
cy.get('.rank-item').eq(0).should('contain.text', 'First Place');

// .first() is a convenient shortcut for .eq(0)
cy.get('.rank-item').first().should('contain.text', 'First Place');

// 2. Selecting an element from the middle (index 2)
cy.get('.rank-item').eq(2).should('contain.text', 'Third Place');

// 3. Selecting using a negative index

cy.get('.rank-item').eq(-1).should('contain.text', 'Fourth Place'); // -1 is the last element.

// .last() is a convenient shortcut for .eq(-1)
cy.get('.rank-item').last().should('contain.text', 'Fourth Place');

// 4. Selecting the second-to-last element (index -2)
cy.get('.rank-item').eq(-2).should('contain.text', 'Third Place');


//--- 10. What’s the difference between using cy.get() and cy.find()?
/*

<html>

<head>
    <title>Test Page</title>
</head>

<body>
    <div class="header"> <button>Login</button> </div>
    <div class="main-content" data-cy="main-content">
        <p>Welcome to the main section.</p> <button>Login</button>
    </div>
</body>

</html> */ 

// cy.get() always searches the whole document from the root and find() can't be used without a parent element.
cy.get('[data-cy="main-content"]')
.find('button') // Searches only inside the main-content div
.should('have.text', 'Login'); 


cy.get('[data-cy="main-content"]')
.get('button') // This ignores the parent and finds BOTH buttons again.
.should('have.length', 2);

//--- 11. How can you identify elements when there is no unique ID or class?
/*
<html>

<head>
    <title>Test Page</title>
</head>

<body>
    <form> <label>Username</label> <input type="text" name="username" placeholder="Enter username">
        <label>Password</label> <input type="password" name="password" placeholder="Enter password"> </form>
    <div> <span>Status: Pending</span> <button>Confirm Action</button> </div>
</body>

</html>
 */ 
// 1. Use other attributes like [name], [type], or [placeholder]. 
cy.get('input[name="username"]').type('testuser'); 
cy.get('[placeholder="Enter password"]').type('secret123');

// 2. Use text content with cy.contains() when the text is unique.
cy.contains('Confirm Action').click();

// 3. Use DOM traversal from a nearby, more stable element.
cy.contains('Status: Pending').siblings('button').click();

// 4. Combine selectors for more specificity.
cy.get('form input[type="text"]').should('be.visible');

//--- 12. How can .within() improve selector reliability in Cypress tests?
/*
<html>

<head>
    <title>Test Page</title>
</head>

<body>
    <div class="user-card" data-cy="user-jane">
        <h3>Jane Doe</h3>
        <p>Status: Active</p> <button>Delete</button>
    </div>
    <div class="user-card" data-cy="user-john">
        <h3>John Smith</h3>
        <p>Status: Inactive</p> <button>Delete</button>
    </div>
</body>

</html>
 */ 

cy.get('[data-cy="user-jane"]').within(() => {
// These commands will ONLY search inside the 'user-jane' div.
cy.get('h3').should('have.text', 'Jane Doe');
cy.contains('Status: Active').should('be.visible');
cy.get('button').click(); 
});

// Without .within(), longer chains needed, which can be less readable.
cy.get('[data-cy="user-john"]').find('h3').should('have.text', 'John Smith');
cy.get('[data-cy="user-john"]').find('button').should('exist');

//--- 13. When should you use cy.contains() with a second argument (like cy.contains('button', 'Save'))?
/*
<html>

<head>
    <title>Test Page</title>
</head>

<body>
    <div class="modal-header">
        <h1>Save Changes</h1>
    </div>
    <div class="modal-footer"> <button>Save Changes</button> </div>
</body>

</html>
 */ 

// This command is less clear.
cy.contains('Save Changes'); // Could be the h1 or the button.

// 2. Specific
cy.contains('button', 'Save Changes').click();

// 3. Specific
//"Find an <h1> element that contains the text 'Save Changes'".
cy.contains('h1', 'Save Changes').should('be.visible');

//--- 14. How can you combine multiple selectors in Cypress (e.g., class + attribute)?
/*
<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
        <form>
            <button class="btn-primary" data-cy="submit-button">Submit</button>
            <button class="btn-secondary">Cancel</button>
        </form>
    </body>
</html>
*/

cy.get('button.btn-primary[data-cy="submit-button"]').should('contain', 'Submit');
cy.get('form .btn-primary').click();

cy.get('form').find('.btn-primary[data-cy="submit-button"]').should('exist');

//--- 15. How would you handle dynamic selectors that change IDs or class names after reloads?
/*

<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
        <!-- Unreliable, generated class and ID -->
        <button id="ember582" class="MuiButton-root-f83hwe">Login</button>
        <!-- A stable, test-friendly alternative -->
        <button data-cy="login-button">Login</button>
    </body>
</html>
*/
// The best way
 cy.get('[data-cy="login-button"]').click();

// 2. Use other stable attributes that are unlikely to change.
// Attributes like 'name', 'type', or 'role' are good candidates.
cy.get('input[name="username"]');

// 3. Use text content via cy.contains().
cy.contains('button', 'Login').click();

//--- 16. How can you find an element by placeholder, name, or type attributes?
/*

<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
        <form>
            <input type="email" name="user_email" placeholder="Enter your email">
            <input type="password" name="user_password" placeholder="Enter your password">
        </form>
    </body>
</html>
*/
// 1. Select by the placeholder attribute.
cy.get('[placeholder="Enter your email"]').type('test@example.com');

// 2. Select by the name attribute.
cy.get('[name="user_password"]').type('secret123');

// 3. Select by the type attribute.
cy.get('[type="password"]').should('be.visible');

// 4. Combine attribute selectors for more specificity.
cy.get('input[type="email"][name="user_email"]').should('exist');

//--- 17. How do you handle elements that are hidden or overlapped (not visible)?
/*

<html>
    <head>
        <style>
            #hidden-message { display: none; }
        </style>
    </head>
    <body>
        <button id="show-btn">Show Message</button>
        <div id="hidden-message">Success!</div>
        <button id="covered-btn" style="position: absolute; z-index: 1;">Click Me</button>
        <div style="position: absolute; z-index: 2; top:0; left:0; width: 200px; height: 50px; background: grey;"></div>
    </body>
</html>
*/
// 1. Assert visibility before acting.
// Wait for an element to become visible after an action.
cy.get('#hidden-message').should('not.be.visible');
cy.get('#show-btn').click();
cy.get('#hidden-message').should('be.visible');

// 2. Force the action with { force: true }.
// This bypasses Cypress's actionability checks.
cy.get('#covered-btn').click({ force: true });

// 3. Ensure the element is scrolled into view.
// Sometimes an element is off-screen. .scrollIntoView() can fix this.
cy.get('#some-footer-button').scrollIntoView().click();

//--- 18. How can you select an element based on both text and CSS selector conditions?
/*

<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
        <div class="item">Apple</div>
        <span class="item">Apple</span>
        <div class="item">Banana</div>
    </body>
</html>
*/
// 1. Use cy.contains(selector, text) - recommended
cy.contains('div.item', 'Apple').should('exist');

// 2. Use cy.get(selector).contains(text) - also common
cy.get('div.item').contains('Apple').click();

// 3. Use .filter() for advanced filtering
cy.get('.item').filter(':contains("Apple")').first().should('have.prop', 'tagName', 'DIV');

//--- 19. What are the pros and cons of text-based vs. attribute-based selectors?
/*

<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
        <button data-cy="submit-btn">Submit Form</button>
    </body>
</html>
*/
// ---- Attribute-Based Selector Example ----
// Will work even if button text changes
cy.get('[data-cy="submit-btn"]').click();

// ---- Text-Based Selector Example ----
// Will fail if button text changes
cy.contains('Submit Form').click();

//--- 20. How can you interact with nested elements using .parents(), .closest(), and .find()?
/*

<html>
    <head>
        <title>Test Page</title>
    </head>
    <body>
        <div class="container">
            <table>
                <tbody>
                    <tr data-cy="user-row-jane">
                        <td>Jane Doe</td>
                        <td><button class="delete-btn">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>
*/

// These commands allows to traverse the DOM tree up or down from a starting element.
cy.get('[data-cy="user-row-jane"]').find('button.delete-btn').click();

// 2. .closest() - Go UP the tree (find the first matching ancestor).
cy.get('button.delete-btn').closest('tr').should('have.attr', 'data-cy', 'user-row-jane');

// 3. .parent() - Go UP the tree (find the direct parent).
cy.get('button.delete-btn').parent('td').parent('tr').should('have.attr', 'data-cy', 'user-row-jane');

// 4. .parents() - Go UP the tree (find ALL matching ancestors).
cy.get('button.delete-btn').parents('div').should('have.class', 'container');


// Advanced Cypress

// ---21.    What are Shadow DOM elements, and how can you select them in Cypress?

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Shadow DOM Example</title>
// </head>
// <body>

//   <h1>User Profiles</h1>

//   <!-- এটি হলো আমাদের হোস্ট এলিমেন্ট -->
//   <user-card></user-card>

//   <script>
//     // একটি কাস্টম এলিমেন্ট তৈরি করা হচ্ছে
//     class UserCard extends HTMLElement {
//       constructor() {
//         super();
        
//         // Shadow DOM তৈরি এবং হোস্ট এলিমেন্টের সাথে যুক্ত করা
//         // 'mode: "open"' মানে হলো, জাভাস্ক্রিপ্ট দিয়ে এর ভেতরে প্রবেশ করা যাবে
//         const shadowRoot = this.attachShadow({ mode: 'open' });

//         // Shadow DOM-এর ভেতরের HTML এবং CSS
//         shadowRoot.innerHTML = `
//           <style>
//             /* এই স্টাইলগুলো শুধু এই user-card-এর ভেতরেই কাজ করবে */
//             .card {
//               border: 1px solid #ccc;
//               padding: 16px;
//               border-radius: 8px;
//               width: 250px;
//             }
//             .card h3 {
//               margin: 0 0 10px 0;
//               color: #333;
//             }
//             .card button {
//               background-color: #007bff;
//               color: white;
//               border: none;
//               padding: 8px 12px;
//               border-radius: 4px;
//               cursor: pointer;
//             }
//           </style>

//           <div class="card">
//             <h3>Jane Doe</h3>
//             <p>Email: jane.doe@example.com</p>
//             <button id="details-btn">View Details</button>
//           </div>
//         `;
//       }
//     }

//     // ব্রাউজারকে আমাদের নতুন ট্যাগ 'user-card' সম্পর্কে জানানো হচ্ছে
//     customElements.define('user-card', UserCard);
//   </script>

// </body>
// </html>

// 1. Without Enabled Shadow DOM Support (default behavior)

cy.visit('index.html');

cy.get('user-card')

  .shadow()

  .find('#details-btn')

  .click();

cy.get('user-card')
  .shadow()
  .find('#details-btn')
  .should('have.text', 'View Details');


// 2. With Enabled Shadow DOM Support

// cypress.config.js
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
// e2e: {
// includeShadowDom: true,
// setupNodeEvents(on, config) {
// // ...
// },
// },
// });

cy.visit('index.html');

cy.get('#details-btn').click();

cy.get('#details-btn').should('have.text', 'View Details');

// ---22.    How can you extend Cypress with custom commands for reusable selectors?

// --- Scenario 1: A Single Command for Login ---

// In cypress/support/commands.js
/**
 * Logs in a user with specified credentials.
 * If no credentials are provided, it uses default values from cypress environment variables.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 */
Cypress.Commands.add('login', (email, password) => {
  const userEmail = email || Cypress.env('userEmail');
  const userPassword = password || Cypress.env('userPassword');

  cy.session([userEmail, userPassword], () => {
    cy.visit('/login');
    cy.get('[data-cy="email"]').type(userEmail);
    cy.get('[data-cy="password"]').type(userPassword);
    cy.get('[data-cy="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

/* 
// cypress.config.js
module.exports = defineConfig({
  e2e: { // ... 
  },
  env: {
    userEmail: 'siam@example.com',
    userPassword: 'pass'
  }
});
*/

// cy.js
  cy.login(); // Login with default user credentials
  cy.visit('/profile');
  cy.get('.profile-name').should('be.visible');

// --- Scenario 2: Selecting a Specific Table Row ---

// In cypress/support/commands.js

Cypress.Commands.add('getTableRowWithText', (text) => {
  return cy.contains('tr', text);
});

// cy.js
it('should allow editing a specific user', () => {
  cy.getTableRowWithText('Jane Doe').find('.edit-button').click();
  cy.get('#edit-modal').should('be.visible');
});

it('should delete a user from the table', () => {
  cy.getTableRowWithText('John Smith').find('.delete-button').click();
  cy.getTableRowWithText('John Smith').should('not.exist');
});


// --- Scenario 3: Adding a Specific Product to the Cart ---

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains('.product-card', productName)
    .find('button.add-to-cart')
    .click();
});

//cy.js
it('should add a laptop and a mouse to the cart', () => {
  cy.visit('/products');
  cy.addProductToCart('Super-Fast Laptop');
  cy.addProductToCart('Ergonomic Mouse');
  cy.get('.cart-item-count').should('have.text', '2');
});

// --- Scenario 4: Creating Test Data via API ---

Cypress.Commands.add('createUserViaApi', (userDetails) => {
  cy.request({
    method: 'POST',
    url: '/api/v1/users', // Your application's API endpoint
    body: userDetails,
  });
});

// cy.js
beforeEach(() => {
  const user = {
    name: 'Test User',
    email: `test55@example.com`,
    password: 'password123'
  };
  cy.createUserViaApi(user);
  cy.login(user.email, user.password); // Reuse our login command
});

it('should be able to update the profile', () => {
  cy.visit('/profile');
  cy.get('[data-cy="profile-name-input"]').type('Updated Name');
  cy.get('[data-cy="save-profile"]').click();
  cy.contains('Profile updated successfully').should('be.visible');
});


//---- 23.    What is cy.xpath() used for, and when should it be preferred over CSS selectors?

// 1: Complex Conditional Logic in a Single Query

// The Cypress Way
cy.contains('tr', 'Siam')
  .filter(':contains("Inactive")') // Filter the results, this can be fragile
  .find('button', 'Delete')
  .click();

// The XPath Way
cy.xpath("//tr[.//td[text()='Siam'] and .//td[text()='Inactive']]//button[text()='Delete']")
  .click();


  // 2: Selecting an Element Based on a Non-Adjacent Sibling

    // Type into an input field that follows a <label> with the text "User Email", but they are not direct siblings (e.g., separated by a <br> or a <div>).

  // The Cypress Way - Brittle and structure-dependent but will fail
cy.contains('label', 'User Email')
  .parent() 
  .find('input')
  .type('test@example.com');

  // The XPath Way 
cy.xpath("//label[text()='User Email']/following-sibling::input[1]")
  .type('test@example.com');

  // 3: Traversing Up to a Specific Ancestor by Position

  // The Cypress Way
cy.get('button.confirm')
  .parent()
  .parent()
  .should('have.attr', 'data-state', 'active');

  // The XPath Way
cy.xpath("//button[@class='confirm']/ancestor::*[@data-state='active'][1]")
  .should('exist');

// Or, to specifically get the grandparent:
cy.xpath("//button[@class='confirm']/../..")
  .should('have.attr', 'data-state', 'active');

// ========================================================================
// 24.    How can you make Cypress selectors more stable across UI or DOM changes?


// 1. data-* Attributes for Testing

cy.get('[data-cy="submit-button"]').click();

// 2. Use Stable, Functional Attributes like 'name' or 'role'
cy.get('[name="user_email"]').type('test@example.com');
cy.get('[role="search"]').click();


// 3. Use Text Content Wisely (Scoped to a Specific Area)

/*
  HTML might look like:
  <div data-cy="user-profile-modal">
    <button>Save</button>
  </div>
  <div data-cy="account-settings-modal">
    <button>Save</button>
  </div>
*/

cy.get('[data-cy="user-profile-modal"]').contains('Save').click();


// 4. Combine Selectors for Uniqueness

cy.get('button.btn.btn-confirm[type="submit"]').click();


// 5. Rely on Structural Relationships (Use as a Last Resort)

/*
  HTML might look like:
  <div class="form-group">
    <label>Email Address</label>
    <input id="dynamic-id-xyz123">
  </div>
*/

// We find the stable label first
cy.contains('label', 'Email Address').next('input').type('my@email.com');

// ========================================================================
// 25.    How do you select elements dynamically generated after an API call?

// Default behavior: Cypress automatically waits for elements to appear.
cy.get('[data-cy="load-users-button"]').click();
cy.get('[data-cy="user-list-item"]')
  .should('have.length.greaterThan', 0);


// use Timeout if the response is slow
cy.get('[data-cy="load-reports-button"]').click();
cy.get('[data-cy="generated-report"]', { timeout: 10000 })
  .should('be.visible');


// wait for the network request to complete.
cy.intercept('GET', '/api/users').as('getUsers');
cy.get('[data-cy="load-users-button"]').click();

// Explicitly wait for the API call to finish before asserting.
cy.wait('@getUsers');

cy.get('[data-cy="user-list-item"]')
  .first()
  .should('contain.text', 'Jane Doe');

// ========================================================================
// 26.    When would you use { force: true } in a Cypress command, and why should you avoid it if possible?

// Interacting with hidden file inputs which is not visible but needed to be tested
cy.get('input[type="file"]').selectFile('path/to/image.png', { force: true });


// Forcing a click on an element covered by a loader.
// This is where we should avoid it if possible because it doesn't test if the app is actually ready for user interaction.
cy.get('.submit-button').click({ force: true });

// in this case, it's better to wait for the loader to disappear first.
cy.get('.loading-spinner').should('not.exist');
cy.get('.submit-button').click();


// Forcing a click on a hidden dropdown menu item.
// This is where we should avoid it if possible because it bypasses the actual user workflow needed to reveal the element.
cy.get('.menu-item-profile').click({ force: true });

// In this caseperform the action that makes the element visible.
cy.get('.menu-button').click();
cy.get('.menu-item-profile').click();

// ========================================================================
// 28.    What are common pitfalls of using index-based selectors like .eq()?
/*
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
  </ul>
*/
// The test passes because "Orange" is at index 2.
cy.get('li').eq(2).should('contain.text', 'Orange');


// Pitfall 1: The test breaks if a new item is added to the list.
// If "Grape" is added at the beginning, .eq(2) now incorrectly points to "Banana".
/*
  HTML becomes:
  <ul>
    <li>Grape</li>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
  </ul>
*/
cy.get('li').eq(2).click(); // This now clicks "Banana" instead of "Orange".


// Pitfall 2: The test breaks if an item is removed.
// If "Apple" is removed, .eq(1) now incorrectly points to "Orange".
/*
  HTML becomes:
  <ul>
    <li>Banana</li>
    <li>Orange</li>
  </ul>
*/
cy.get('li').eq(1).click(); // This now clicks "Orange" instead of "Banana".


// Pitfall 3: Lack of readability and maintainability.
// It's unclear what this selector is targeting without looking at the UI.
cy.get('li').eq(2).click();


// Pitfall 4: The test is flaky with dynamically filtered lists.
// Initially, .eq(1) points to the "Admin" user.
cy.get('.user-row').eq(1).should('contain.text', 'Admin User');

// A user filters the list to show only "Guest" users.
cy.get('#filter-by-guest').click();

/*
  The list now only contains:
  <li class="user-row">Guest User 1</li>
  <li class="user-row">Guest User 2</li>
*/

// The same selector, .eq(1), now points to a completely different user.
cy.get('.user-row').eq(1).should('contain.text', 'Guest User 2');

// ========================================================================
// 29.    How can Cypress chain multiple conditions to pinpoint a specific element (e.g., parent + text + attribute)?

// Scenario: Clicking a specific link in a data table.
/*
  HTML Context:
  <table>
    <tbody>
      <!-- This is the row we want -->
      <tr data-cy="user-row-jane">
        <td>Jane Doe</td>
        <td><span class="status-active">Active</span></td>
        <td><a href="/users/123" data-action="view">View Details</a></td>
      </tr>
      <!-- This is a similar row we want to ignore -->
      <tr data-cy="user-row-john">
        <td>John Doe</td>
        <td><span class="status-pending">Pending</span></td>
        <td><a href="/users/456" data-action="view">View Details</a></td>
      </tr>
    </tbody>
  </table>
*/


// wrong way
cy.contains('View Details').click();


// --- The Chained (Specific) Approach ---
// This combines parent, text, and attribute conditions to find the exact element.
cy.contains('tr', 'Jane Doe')         
  .filter(':contains("Active")')
  .find('a[data-action="view"]')
  .click();


// Scenario: Typing into a specific, visible input field within a form section.
/*
  HTML Context:
  <div data-cy="notifications-section">
    <h3>Notifications</h3>
    <input type="email" name="notification_email" style="display: none;"> <!-- A hidden input to ignore -->
    <input type="email" name="notification_email"> <!-- The visible input we want -->
  </div>
*/


// --- The Chained (Specific) Approach ---
cy.get('[data-cy="notifications-section"]')    
  .find('input[name="notification_email"]')
  .should('be.visible')
  .type('new@email.com');

// ========================================================================
// 29.    How can Cypress chain multiple conditions to pinpoint a specific element (e.g., parent + text + attribute)?

// Strategy 1: Anchor to unique, user-visible text.
// Find a stable label, then traverse to the related unstable input.
cy.contains('label', 'User Email')
  .parent()
  .find('input')
  .type('test@example.com');


// Strategy 2: Identify an element by its unique structural combination.
// Find the card that has both a title and an image, then find its button.
cy.get('.user-card')
  .find('h3')
  .contains('John Doe')
  .closest('.user-card')
  .find('button')
  .click();


// Strategy 3: Use partial matching for dynamic attributes.
// e.g., id="ember-view-123-submit-button"
cy.get('[id^="ember-view-"][id$="-submit-button"]').click();


// Strategy 4: As a last resort, combine position, text, and structure.
cy.get('tbody tr')
  .eq(1) // Get the second row
  .find('td')
  .contains('Pending')
  .closest('tr')
  .find('button')
  .click();


 //xPath Practice

  //Beginner Livel

// Example HTML context:
/*
<html>
    <head><title>XPath Test Page</title></head>
    <body>
        <div id="main-container">
            <h1>User Registration</h1>
            <p>Please fill out the form below to create an account.</p>

            <form class="user-form">
                <div class="form-group error">
                    <label>Username</label>
                    <input name="username" placeholder="Choose a username" type="text">
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input name="email" placeholder="Enter your email" type="email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input name="password" class="input-field password-field" type="password">
                </div>
                <button type="submit" id="submit-btn" class="btn btn-primary">Create Account</button>
                <button type="reset" class="btn">Reset Form</button>
            </form>

            <footer>
                <a href="/login">Already have an account? Log In</a>
            </footer>
        </div>
    </body>
    </html>
*/

  // Example 1: Absolute Path.
    cy.xpath('/html/body/div/form').should('have.class', 'user-form');

    // Example 2: Relative Path with Attribute (The most common way).
    cy.xpath("//button[@id='submit-btn']").should('contain', 'Create Account');

    // Example 3: Find element by exact text (text()).
    cy.xpath("//label[text()='Password']").should('be.visible');

    // Example 4: Find element by partial text (contains(text(), ...)).
    cy.xpath("//a[contains(text(), 'Log In')]").should('have.attr', 'href', '/login');

    // Example 5: Find element by partial attribute value (contains(@attribute, ...)).
    cy.xpath("//input[contains(@class, 'password-field')]").should('have.attr', 'type', 'password');

    // Example 6: Combine conditions using 'and'.
    cy.xpath("//button[@type='submit' and contains(@class, 'btn-primary')]").should('have.id', 'submit-btn');

    // Example 7: Combine conditions using 'or'.
    cy.xpath("//input[@placeholder='Choose a username' or @name='username']").should('have.attr', 'type', 'text');

    // Example 8: Traverse up to a parent element (parent:: or /..).
    cy.xpath("//label[text()='Email Address']/parent::div").should('have.class', 'form-group');

    // Example 9: Find element by any attribute value using a wildcard (@*).
    cy.xpath("//input[@*='Enter your email']").should('have.attr', 'name', 'email');

    // Example 10: Target a specific child element within a parent.
    cy.xpath("//form[@class='user-form']/button[text()='Reset Form']").should('have.class', 'btn');

    //Parent Div Examples

    //Example HTML Context

/* 
<main id="product-details">
    <div class="product-info">
        <h2>SuperWidget 5000</h2>
        <p>The best widget on the market.</p>
        <span class="price">$99.99</span>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</main>

<aside id="recommendations">
    <h3>You might also like...</h3>
    <div class="product-info">
        <h2>BasicWidget</h2>
        <span class="price">$19.99</span>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</aside>
*/

cy.xpath("//h2[text()='SuperWidget 5000']/parent::div//button[text()='Add to Cart']").click();

// Advanced Practice

// Example HTML Context
/*
<html>
        <head><title>User Management Table</title></head>
        <body>
            <div class="user-management">
                <h2>User List</h2>
                <table id="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alice Smith</td>
                            <td>alice@example.com</td>
                            <td><span class="status active">Active</span></td>
                            <td>
                                <button class="btn edit">Edit</button>
                                <button class="btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Bob Johnson</td>
                            <td>bob@example.com</td>
                            <td><span class="status inactive">Inactive</span></td>
                            <td>
                                <button class="btn edit">Edit</button>
                                <button class="btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Charlie Brown</td>
                            <td>charlie@example.com</td>
                            <td><span class="status active">Active</span></td>
                            <td>
                                <button class="btn edit">Edit</button>
                                <button class="btn delete">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    </html>
*/

    // 1. Find a following sibling element.
    cy.xpath("//td[text()='Bob Johnson']/following-sibling::td[1]")
      .should('have.text', 'bob@example.com');

    // 2. Perform an action relative to another element.
    cy.xpath("//td[text()='charlie@example.com']/following-sibling::td/button[text()='Delete']")
      .should('be.visible');

    // 3. Use a combination of parent and descendant axes.
    cy.xpath("//td[text()='alice@example.com']/parent::tr//button[text()='Edit']")
      .should('be.visible');

    // 4. Find a preceding sibling element.
    cy.xpath("//span[text()='Inactive']/ancestor::td/preceding-sibling::td[2]")
      .should('have.text', 'Bob Johnson');

    // 5. Find an element by its index (position).
    cy.xpath("//table[@id='user-table']/tbody/tr[2]/td[2]")
      .should('have.text', 'bob@example.com');

    // 6. Find the last element in a group using last().
    cy.xpath("//tbody/tr[last()]/td[1]")
      .should('have.text', 'Charlie Brown');

    // 7. Filter elements using not().
    cy.xpath("//tr[not(.//span[text()='Inactive'])]")
      .first()
      .should('contain', 'Alice Smith');

    // 8. Traverse up multiple levels using ancestor.
    cy.xpath("(//button[text()='Edit'])[1]/ancestor::table")
      .should('have.id', 'user-table');

    // 9. Navigate complex relationships: parent then last child.
    cy.xpath("//td[text()='Bob Johnson']/parent::tr/td[last()]/button[@class='btn delete']")
      .should('be.visible');

    // 10. Select a parent based on its child's content.
    cy.xpath("//tr[.//td[text()='bob@example.com']]")
      .should('contain', 'Bob Johnson')
      .and('contain', 'Inactive');