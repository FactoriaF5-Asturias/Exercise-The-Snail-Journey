# The Snail Journey
The customer needs a mini game to help kids improve their mouse agility

## Pre-requirement
- Node.js and npm installed (https://nodejs.org/en/)
- You can check using your terminal and ...

```
$ node --version
$ npm --version
```

## Installation
```
$ npm install
```

### Run Server
```
$ npm run start
```

### User Stories

As a gamer
I Want move the snail
So That it eats the leaves and gets fat.

### Acceptance Criteria

Given the gamer in homepage
When the gamer clicks on a leaf
Then the snail moves to position of leaf
and
When the snail is on the position of leaf
Then the leaf disappears
and
When the leaf has disappeared
Then the snail gets fat

### Steps

1. The snail can move to the leaves by clicking on them.
2. When a leaf is devoured it disappears.
3. When the snail eats a leaf, it gets fat.

### Extra Challenge
1. A magic potion appears on the screen every 10 seconds so that the snail can return to its normal size (width: 25px).
2. The leaves appear on the screen randomly (ramdom position) every 5 seconds.