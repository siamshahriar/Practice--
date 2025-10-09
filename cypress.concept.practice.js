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

