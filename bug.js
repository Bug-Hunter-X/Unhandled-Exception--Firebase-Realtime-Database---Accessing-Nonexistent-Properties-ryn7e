```javascript
// Incorrect usage of Firebase Realtime Database reference
const database = firebase.database();
const ref = database.ref('/users/' + userId);

ref.once('value', (snapshot) => {
  // Accessing a nonexistent property may throw an error
  const displayName = snapshot.val().displayName; // Error if displayName doesn't exist
  console.log(displayName);
});
```