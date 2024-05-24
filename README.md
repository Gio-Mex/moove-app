# Moove App

![Static Badge](https://img.shields.io/badge/TYPESCRIPT-black?style=for-the-badge&logo=TypeScript)

## Description

This simple educational app demonstrates using classes and interfaces in TypeScript. In particular, it manages the booking of transport for a hypothetical company called Moove.

## Installation

If you're using OS X or Windows, use one of the installers from the [Node.js download page](https://nodejs.org/en/download/). LTS versions of Node.js are recommended.

Then, you can install TypeScript compiler:

```bash
npm install -g typescript
```

Clone Github repo:

```bash
git clone https://github.com/Gio-Mex/moove-app.git
```

Now run compiler

```bash
tsc app.ts
```

and run the app:

```bash
node app.js
```

If everything has been installed correctly you should see results of the app in the terminal. 

## Usage 
In the app.ts there are already some booking tests, in the terminal you can see confirmation messages or warning messages, for example in case of overbooking. If you want to do other tests you can change the city and vehicle type (for convenience the check is always carried out on the vehicle type [0] of the array, because the user books a vehicle type, not a vehicle with a specific ID).
  
Finally, the terminal shows the list of cities with their respective vehicles and their availability.

You can also see the code in full [here](https://codepen.io/Gio-Mex/pen/PovzJap).