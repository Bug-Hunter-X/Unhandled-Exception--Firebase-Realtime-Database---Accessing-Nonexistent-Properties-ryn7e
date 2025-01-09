```javascript
// Correct usage of Firebase Realtime Database reference, handling null values gracefully
const database = firebase.database();
const ref = database.ref('/users/' + userId);

ref.once('value', (snapshot) => {
  const user = snapshot.val();
  // Use optional chaining or check for existence before accessing properties
  const displayName = user?.displayName || 'Guest'; // Optional chaining
  // OR
  // const displayName = user ? user.displayName : 'Guest'; // Conditional operator
  console.log(displayName);
});
```