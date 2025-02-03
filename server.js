// importo express in server js
import express from "express";

// Other imports
import errorsHandler from "./middlewares/errorsHandler.js";
import notFound from "./middlewares/notFound.js";
import corsPolicy from "./middlewares/corsPolicy.js";
// Routing 
import journeysRouter from "./routes/journeysRouter.js";
import participantsRouter from "./routes/participantsRouter.js";

// create a server instance
const app = express();

// set costant to port
const port = process?.env?.PORT || 3000;

// Gestione asset statici
app.use(express.static("public"));

// Abilita corsPolicy
app.use(corsPolicy);

// registro il body-parser per "application/json"
app.use(express.json());

// rotta per home page (http://localhost:3000)
app.get("/", (req, res) => {
  res.send("Home Page");
});

//other routes
app.use("/api/journeys", journeysRouter);
app.use("/api/journeys/api/participants", participantsRouter);
// index leggi lista /posts metodo get R
// show leggo un solo libro /posts/:id metodo get R
// store salvo un libro /posts metodo post C
// update aggiorno un libro /posts/:id metodo put U
// destroy elimino un libro /posts/:id metodo delete D

// gestione errori applicazione
app.use(errorsHandler);

// gestione not found url
app.use(notFound);

// Server che rimane in ascolto dell'Host alla porta specificata
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});