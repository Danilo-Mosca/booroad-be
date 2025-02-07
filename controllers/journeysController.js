import { journeys, participants } from "../models/dataBooRoad.js";
import CustomError from "../classes/CustomError.js";
import { all } from "axios";

function index(req, res) {
    let data = [...journeys];
    // Se nella richiesta che mi arriva c'è una query string (esempio: ?search=roma), allora filtro nella variabile
    // data (che contiene l'oggetto con tutti i post) tutti i post che hanno all'interno
    // del loro titolo la parola chiave della query string ricevuta e invio al frontend solo quei post.
    // Esempio: se ho la query string: ?search=roma allora mando al frontend tutti i post che contengono
    // nel titolo la parola "Roma".
    // Altrimenti se non arriva nessuna query string, passo tutto l'oggetto data non filtrato
    if (req.query.search) {
        const queryString = req.query.search.toLowerCase();
        data = journeys.filter((item) =>
            item.title.toLowerCase().includes(queryString)
        );
    }
    const response = {
        info: {
            totalCount: journeys.length,
        },
        results: [...data],
    };
    res.json(response);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const journey = journeys.find((post) => post.id === id);
    const allParticip = participants.filter(
        (person) => person.id_journey === id
    );

    /* Avrei potuto inserire anche il findIndex (che restituisce l'indice dell'oggetto con quello stesso id):
  const itemIndex = journeys.findIndex((post)=> post.id === id);
  const item = journeys[itemIndex];    // e poi lo assegno alla costante item
  */

    // Se l'indice non è stato trovato allora lancio un errore personalizzato (creando un nuovo oggetto della mia classe CustomError) con throw:
    if (!journey || !allParticip) {
        throw new CustomError("L'elemento non esiste", 404);
    }
    // Se invece l'id contenuto in item è stato trovato allora rispondo con success: true e visualizzo l'elemento corrispondente:
    res.json({ success: true, journey, participants: allParticip });
}

function store(req, res) {
    // console.log(req.body);

    // l'id me lo vado a creare:
    let newId = 0;
    for (let i = 0; i < journeys.length; i++) {
        if (journeys[i].id > newId) {
            newId = journeys[i].id;
        }
    }
    newId += 1;
    console.log(req.body);
    // // new data is in req.body
    const newPost = { id: newId, ...req.body };
    journeys.push(newPost);
    // res.status(201).json(newItem);
    res.json({ success: true, item: newPost });
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const item = journeys.find((item) => item.id === id);
    if (!item) {
        throw new CustomError("L'elemento non esiste", 404);
    }

    //console.log(req.body);
    for (let key in item) {
        if (key !== "id") {
            item[key] = req.body[key];
        }
    }
    //console.log(examples);
    res.json({ success: true, item });
}
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = journeys.findIndex((item) => item.id === id);
    if (index !== -1) {
        journeys.splice(index, 1);
        res.sendStatus(204);
    } else {
        throw new CustomError("L'elemento non esiste", 404);
    }
}

export { index, show, store, update, destroy };
