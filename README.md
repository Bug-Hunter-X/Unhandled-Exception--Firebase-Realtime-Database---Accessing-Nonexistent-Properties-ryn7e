# Firebase Realtime Database: Handling Missing Properties

This example demonstrates a common error when using the Firebase Realtime Database: attempting to access a property that might not exist on a data snapshot.  This can lead to unexpected errors and crashes in your application.

The `bug.js` file shows the incorrect approach, which throws an error if the `displayName` property is missing from the database.  The `bugSolution.js` file demonstrates the correct way to handle this situation by using optional chaining or checking for the existence of the property before accessing it.

## How to Reproduce the Bug

1.  Set up a Firebase project.
2.  Create a Realtime Database instance.
3.  Run `bug.js`. If a user doesn't have a `displayName`, the code will throw an error.

## Solution

Refer to `bugSolution.js` for a solution that safely handles potential missing properties.