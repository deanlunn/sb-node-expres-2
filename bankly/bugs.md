- middleware/auth.js
 * BUG 1: changed decode to verify in authUser as decode does not verify a signature and added try/catch

- models/users.js
 * BUG 2 added "throw" keyword to the error for get(username), so that error actually gets thrown

- routes/users.js
 * BUG 3: added await keyword as User.delete is an async function

- routes/auth.js
 * BUG 4: added await as User.authenticate is an async function

- app.js
 * BUG 5: removed the second instance of module.exports = app

- config.js
 * BUG 6: .config() to load environment variables