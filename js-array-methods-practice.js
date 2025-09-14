// =============================
// 1. forEach - 10  Examples
// =============================

// 1. Basic attendance list
const studentsForEach = ['Rafiq', 'Shamim', 'Mitu', 'Jannat'];
studentsForEach.forEach((student, idx) => {
  console.log(`${idx + 1}. ${student} is present today.`);
});
// Output:
// 1. Rafiq is present today.
// 2. Shamim is present today.
// 3. Mitu is present today.
// 4. Jannat is present today.

// 2. Sending SMS to users
const phoneNumbers = ['+8801711000001', '+8801711000002'];
phoneNumbers.forEach(number => {
  // sendSMS(number, 'Your OTP is 1234');
  console.log(`SMS sent to ${number}`);
});
// Output:
// SMS sent to +8801711000001
// SMS sent to +8801711000002


// 3. Logging errors from API responses
const apiErrors = [
  { code: 404, message: 'Not Found' },
  { code: 500, message: 'Server Error' }
];
apiErrors.forEach(err => {
  console.error(`Error ${err.code}: ${err.message}`);
});
// Output:
// Error 404: Not Found
// Error 500: Server Error

// 4. Tracking user activity analytics
const activityLogs = [
  { user: 'Rafiq', action: 'login' },
  { user: 'Mitu', action: 'purchase' },
  { user: 'Jannat', action: 'logout' }
];
const actions = {};
activityLogs.forEach(log => {
  actions[log.action] = (actions[log.action] || 0) + 1;
});
console.log('Action counts:', actions);
// Output:
// Action counts: { login: 1, purchase: 1, logout: 1 }

// 5. Updating DOM elements (simulated)
const todoItems = [
  { id: 1, text: 'Buy rice', done: false },
  { id: 2, text: 'Call Ma', done: true }
];
todoItems.forEach(item => {
  // document.getElementById(`todo-${item.id}`).classList.toggle('done', item.done);
  console.log(`Todo: ${item.text} is ${item.done ? 'done' : 'not done'}`);
});
// Output:
// Todo: Buy rice is not done
// Todo: Call Ma is done

// 6. Sending API requests for each item (simulated)
const emails = ['siam@gmail.com', 'rafiq@gmail.com'];
emails.forEach(email => {
  // fetch('/api/send-newsletter', { method: 'POST', body: JSON.stringify({ email }) })
  console.log(`Newsletter sent to ${email}`);
});
// Output:
// Newsletter sent to siam@gmail.com
// Newsletter sent to rafiq@gmail.com

// 7. Processing nested data (orders with items)
const orderList = [
  { id: 1, items: [ 'Rice', 'Dal' ] },
  { id: 2, items: [ 'Fish' ] }
];
orderList.forEach(order => {
  order.items.forEach(item => {
    console.log(`Order ${order.id}: ${item}`);
  });
});
// Output:
// Order 1: Rice
// Order 1: Dal
// Order 2: Fish

// 8. Logging failed login attempts with timestamp
const failedLogins = [
  { user: 'Babul', time: '2025-09-15T10:00:00Z' },
  { user: 'Rina', time: '2025-09-15T10:05:00Z' }
];
failedLogins.forEach(attempt => {
  console.log(`Failed login for ${attempt.user} at ${attempt.time}`);
});
// Output:
// Failed login for Babul at 2025-09-15T10:00:00Z
// Failed login for Rina at 2025-09-15T10:05:00Z

// 9. Assigning roles to users in a system
const team = [
  { name: 'Hasan', role: null },
  { name: 'Rina', role: null }
];
const roles = ['admin', 'editor'];
team.forEach((member, idx) => {
  member.role = roles[idx] || 'viewer';
});
console.log('Team with roles:', team);
// Output:
// Team with roles: [ { name: 'Hasan', role: 'admin' }, { name: 'Rina', role: 'editor' } ]

// 10. Advanced: Real-time notification dispatch (simulated async)
const notifications2 = [
  { user: 'Sumon', message: 'Payment received' },
  { user: 'Moushumi', message: 'Order shipped' }
];
notifications2.forEach(n => {
  // setTimeout(() => sendNotification(n.user, n.message), 0);
  console.log(`Notification to ${n.user}: ${n.message}`);
});
// Output:
// Notification to Sumon: Payment received
// Notification to Moushumi: Order shipped




// =============================
// 2. map - 10 Examples
// =============================
console.log('\n2. map - 10 Examples:');

// 1. Doubling numbers for chart data
const numbers = [2, 4, 6, 8];
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);
// Output:
// Doubled: [ 4, 8, 12, 16 ]

// 2. Creating greeting messages for UI
const employeesMap = ['Hasan', 'Rina', 'Babul'];
const greetingsMap = employeesMap.map(name => `Hello, ${name}!`);
console.log(greetingsMap);
// Output:
// [ 'Hello, Hasan!', 'Hello, Rina!', 'Hello, Babul!' ]

// 3. Rendering a list of React elements (simulated)
const productsList = ['Rice', 'Fish', 'Salt'];
const productElements = productsList.map((p, i) => `<li key="${i}">${p}</li>`);
console.log('Product elements:', productElements);
// Output:
// Product elements: [ '<li key="0">Rice</li>', '<li key="1">Fish</li>', '<li key="2">Salt</li>' ]

// 4. Extracting property from objects (e.g., for dropdown)
const usersDropdown = [
  { id: 1, name: 'Sumon' },
  { id: 2, name: 'Moushumi' }
];
const userNamesDropdown = usersDropdown.map(u => u.name);
console.log('User names:', userNamesDropdown);
// Output:
// User names: [ 'Sumon', 'Moushumi' ]

// 5. Formatting dates for display
const timestamps = [1694764800000, 1694851200000];
const dates = timestamps.map(ts => new Date(ts).toLocaleDateString('en-GB'));
console.log('Dates:', dates);
// Output (example):
// Dates: [ '15/09/2023', '16/09/2023' ]

// 6. Adding a new property to each object (immutably)
const studentsMap = [
  { name: 'Rafiq' },
  { name: 'Shamim' }
];
const withIdMap = studentsMap.map((s, i) => ({ ...s, id: i + 1 }));
console.log('Students with id:', withIdMap);
// Output:
// Students with id: [ { name: 'Rafiq', id: 1 }, { name: 'Shamim', id: 2 } ]

// 7. Mapping API response to UI model
const apiResponse = [
  { user_name: 'siam', user_age: 25 },
  { user_name: 'babul', user_age: 30 }
];
const uiModel = apiResponse.map(u => ({ name: u.user_name, age: u.user_age }));
console.log('UI model:', uiModel);
// Output:
// UI model: [ { name: 'siam', age: 25 }, { name: 'babul', age: 30 } ]

// 8. Generating image URLs for gallery
const imageIds = [101, 102, 103];
const imageUrls = imageIds.map(id => `https://cdn.example.com/images/${id}.jpg`);
console.log('Image URLs:', imageUrls);
// Output:
// Image URLs: [ 'https://cdn.example.com/images/101.jpg', ... ]

// 9. Calculating discounts for product cards
const items = [
  { name: 'Shirt', price: 1000 },
  { name: 'Pant', price: 1500 }
];
const discounted = items.map(item => ({ ...item, discountPrice: item.price * 0.9 }));
console.log('Discounted items:', discounted);
// Output:
// Discounted items: [ { name: 'Shirt', price: 1000, discountPrice: 900 }, ... ]

// 10. Advanced: Mapping nested arrays for table rows
const orders = [
  { id: 1, items: [ 'Rice', 'Dal' ] },
  { id: 2, items: [ 'Fish' ] }
];
const orderRows = orders.map(order => order.items.map(item => `Order ${order.id}: ${item}`));
console.log('Order rows:', orderRows.flat());
// Output:
// Order rows: [ 'Order 1: Rice', 'Order 1: Dal', 'Order 2: Fish' ]

// =============================
// 3. filter - 10 Examples
// =============================
console.log('\n3. filter - 10 Examples:');

// 1. Filtering adults from age list
const agesFilter = [12, 18, 25, 15, 30];
const adultsFilter = agesFilter.filter(age => age >= 18);
console.log('Adults:', adultsFilter);
// Output:
// Adults: [ 18, 25, 30 ]

// 2. Filtering expensive products
const productsFilter = [
  { name: 'Rice', price: 50 },
  { name: 'Fish', price: 200 },
  { name: 'Salt', price: 20 }
];
const expensiveFilter = productsFilter.filter(p => p.price > 100);
console.log('Expensive:', expensiveFilter);
// Output:
// Expensive: [ { name: 'Fish', price: 200 } ]

// 3. Filtering visible UI cards
const cards = [
  { id: 1, visible: true },
  { id: 2, visible: false },
  { id: 3, visible: true }
];
const visibleCards = cards.filter(card => card.visible);
console.log('Visible cards:', visibleCards);
// Output:
// Visible cards: [ { id: 1, visible: true }, { id: 3, visible: true } ]

// 4. Filtering search results by keyword
const citiesFilter = ['Dhaka', 'Chittagong', 'Sylhet', 'Barisal'];
const search = 'dh';
const matchedCities = citiesFilter.filter(city => city.toLowerCase().includes(search));
console.log('Matched cities:', matchedCities);
// Output:
// Matched cities: [ 'Dhaka' ]

// 5. Filtering selected checkboxes
const checkboxes = [
  { label: 'Option 1', checked: true },
  { label: 'Option 2', checked: false },
  { label: 'Option 3', checked: true }
];
const selectedCheckboxes = checkboxes.filter(cb => cb.checked);
console.log('Selected checkboxes:', selectedCheckboxes);
// Output:
// Selected checkboxes: [ { label: 'Option 1', checked: true }, { label: 'Option 3', checked: true } ]

// 6. Filtering users by role
const usersFilter = [
  { name: 'Hasan', role: 'admin' },
  { name: 'Rina', role: 'editor' },
  { name: 'Babul', role: 'admin' }
];
const admins = usersFilter.filter(u => u.role === 'admin');
console.log('Admins:', admins);
// Output:
// Admins: [ { name: 'Hasan', role: 'admin' }, { name: 'Babul', role: 'admin' } ]

// 7. Filtering out null/undefined values
const values = [1, null, 2, undefined, 3];
const validValues = values.filter(Boolean);
console.log('Valid values:', validValues);
// Output:
// Valid values: [ 1, 2, 3 ]

// 8. Filtering completed todos
const todosFilter = [
  { text: 'Buy rice', done: true },
  { text: 'Call Ma', done: false }
];
const completedTodos = todosFilter.filter(todo => todo.done);
console.log('Completed todos:', completedTodos);
// Output:
// Completed todos: [ { text: 'Buy rice', done: true } ]

// 9. Filtering API response for active users
const apiUsers = [
  { name: 'Sumon', active: true },
  { name: 'Moushumi', active: false }
];
const activeUsers = apiUsers.filter(u => u.active);
console.log('Active users:', activeUsers);
// Output:
// Active users: [ { name: 'Sumon', active: true } ]

// 10. Advanced: Filtering nested arrays (orders with pending items)
const ordersFilter = [
  { id: 1, items: [ { name: 'Rice', status: 'pending' }, { name: 'Dal', status: 'done' } ] },
  { id: 2, items: [ { name: 'Fish', status: 'pending' } ] }
];
const ordersWithPending = ordersFilter.map(order => ({
  ...order,
  items: order.items.filter(item => item.status === 'pending')
}));
console.log('Orders with pending items:', ordersWithPending);
// Output:
// Orders with pending items: [ { id: 1, items: [ { name: 'Rice', status: 'pending' } ] }, { id: 2, items: [ { name: 'Fish', status: 'pending' } ] } ]

// =============================
// 4. find - 10 Examples
// =============================
console.log('\n4. find - 10 Examples:');

// 1. Find user by name
const usersFind = [
  { id: 1, name: 'Sumon' },
  { id: 2, name: 'Moushumi' },
  { id: 3, name: 'Jamal' }
];
const userFind = usersFind.find(u => u.name === 'Jamal');
console.log('Found user:', userFind);
// Output:
// Found user: { id: 3, name: 'Jamal' }

// 2. Find first even number
const numbersFind = [5, 8, 13, 21];
const firstEvenFind = numbersFind.find(n => n % 2 === 0);
console.log('First even:', firstEvenFind);
// Output:
// First even: 8

// 3. Find first product out of stock
const productsFind = [
  { name: 'Rice', stock: 10 },
  { name: 'Fish', stock: 0 },
  { name: 'Salt', stock: 5 }
];
const outOfStock = productsFind.find(p => p.stock === 0);
console.log('Out of stock:', outOfStock);
// Output:
// Out of stock: { name: 'Fish', stock: 0 }

// 4. Find first selected radio button
const radios = [
  { label: 'A', selected: false },
  { label: 'B', selected: true },
  { label: 'C', selected: false }
];
const selectedRadio = radios.find(r => r.selected);
console.log('Selected radio:', selectedRadio);
// Output:
// Selected radio: { label: 'B', selected: true }

// 5. Find first error in form fields
const formFieldsFind = [
  { name: 'email', error: null },
  { name: 'password', error: 'Required' }
];
const firstError = formFieldsFind.find(f => f.error);
console.log('First error field:', firstError);
// Output:
// First error field: { name: 'password', error: 'Required' }

// 6. Find first admin user
const usersRoleFind = [
  { name: 'Hasan', role: 'editor' },
  { name: 'Rina', role: 'admin' },
  { name: 'Babul', role: 'viewer' }
];
const firstAdmin = usersRoleFind.find(u => u.role === 'admin');
console.log('First admin:', firstAdmin);
// Output:
// First admin: { name: 'Rina', role: 'admin' }

// 7. Find first image with alt text missing
const images = [
  { src: 'a.jpg', alt: 'A' },
  { src: 'b.jpg', alt: '' },
  { src: 'c.jpg', alt: 'C' }
];
const missingAlt = images.find(img => !img.alt);
console.log('Missing alt image:', missingAlt);
// Output:
// Missing alt image: { src: 'b.jpg', alt: '' }

// 8. Find first pending order
const ordersFind = [
  { id: 1, status: 'done' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'shipped' }
];
const firstPendingOrder = ordersFind.find(o => o.status === 'pending');
console.log('First pending order:', firstPendingOrder);
// Output:
// First pending order: { id: 2, status: 'pending' }

// 9. Find first city starting with 'S'
const citiesFind = ['Dhaka', 'Sylhet', 'Barisal'];
const firstS = citiesFind.find(city => city.startsWith('S'));
console.log('First city with S:', firstS);
// Output:
// First city with S: Sylhet

// 10. Advanced: Find first user with at least one pending order
const usersWithOrders = [
  { name: 'Sumon', orders: [ { id: 1, status: 'done' } ] },
  { name: 'Moushumi', orders: [ { id: 2, status: 'pending' } ] },
  { name: 'Jamal', orders: [] }
];
const userWithPendingOrder = usersWithOrders.find(u => u.orders.some(o => o.status === 'pending'));
console.log('User with pending order:', userWithPendingOrder);
// Output:
// User with pending order: { name: 'Moushumi', orders: [ { id: 2, status: 'pending' } ] }


