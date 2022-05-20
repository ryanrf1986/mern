# MERN Setup

## Mongoose | MongoDB | Server
1. `npm init -y`; `npm i express mongoose cors`
2. `ctrl+f` "change", replace "your_model" -> preserve case -> replace all in controller, model, route, server
3. Rename controller, model, route files
4. In controller, change database to your database
5. Edit model(s): add/remove validation/options
6. `nodemon server.js` (launch server AFTER all files are created/updated)

## React
1. In project folder: `npx create-react-app client`
2. `cd client`
3. `npm install axios` 
4. `npm install react-router-dom`
5. `npm start`
6. Make the directories views, components in src/
7. `import {BrowserRouter as Router, Link, Routes, Route, useParams, useNavigate } from "react-router-dom"` as needed

### Notes
- Routing
    - `<Router>` wraps `<Routes>`, `<Route>` (and `<Link>` when used inside the main routing page)
    - `<Link>` is nearly identical to `<a>` tag, but uses `to={''}` instead of `href=`
- `const navigate = useNavigate()`
    - `navigate(`\`REDIRECT URL\``)` with backticks
- Navigate/Link local React (port 3000)
- axios to Express Server (port 8000)
- `const params = useParams()`
    - `const { urlVariablesFromRoutes } = params`
    - Variables defined in routes with `:variable`


