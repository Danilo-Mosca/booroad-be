let journeys = [
    {
        id: 1,
        destination: "Parigi",
        initial_date: "2023-03-01",
        end_date: "2023-03-05",
        image_path: "/images/cities/paris.jpg",
    },
    {
        id: 2,
        destination: "Barcellona",
        initial_date: "2023-04-10",
        end_date: "2023-04-15",
        image_path: "/images/cities/barcellona.jpg",
    },
    {
        id: 3,
        destination: "Roma",
        initial_date: "2023-05-20",
        end_date: "2023-05-25",
        image_path: "/images/cities/roma.jpg",
    },
];

const participants = [
    {
        id: 1,
        id_journey: 1,
        name: "Luca",
        surname: "Rossi",
        email: "luca.rossi@example.com",
        telephone_number: "3456789012",
        tax_id_code: "RSSLCU80A01H501Z",
    },
    {
        id: 2,
        id_journey: 1,
        name: "Maria",
        surname: "Bianchi",
        email: "maria.bianchi@example.com",
        telephone_number: "3456789013",
        tax_id_code: "BNCMRA85B02L219K",
    },
    {
        id: 3,
        id_journey: 1,
        name: "Giovanni",
        surname: "Verdi",
        email: "giovanni.verdi@example.com",
        telephone_number: "3456789014",
        tax_id_code: "VRDGNN75C03F205Y",
    },
    {
        id: 4,
        id_journey: 1,
        name: "Elena",
        surname: "Russo",
        email: "elena.russo@example.com",
        telephone_number: "3456789015",
        tax_id_code: "RSSLNE92D04H501X",
    },
    {
        id: 5,
        id_journey: 1,
        name: "Marco",
        surname: "Ferrari",
        email: "marco.ferrari@example.com",
        telephone_number: "3456789016",
        tax_id_code: "FRRMRC70E05M209V",
    },
    {
        id: 6,
        id_journey: 2,
        name: "Chiara",
        surname: "Galli",
        email: "chiara.galli@example.com",
        telephone_number: "3456789017",
        tax_id_code: "GLLCHR88F06T220J",
    },
    {
        id: 7,
        destination: "Berlino",
        initial_date: "2023-09-01",
        end_date: "2023-09-05"
    },
    {
        id: 4,
        destination: "Atene",
        initial_date: "2023-06-01",
        end_date: "2023-06-05"
    },
    {
        id: 5,
        destination: "Lisbona",
        initial_date: "2023-07-10",
        end_date: "2023-07-15"
    },
    {
        id: 6,
        destination: "Praga",
        initial_date: "2023-08-20",
        end_date: "2023-08-25"
    },
    {
        id: 7,
        destination: "Berlino",
        initial_date: "2023-09-01",
        end_date: "2023-09-05"
    }
];

const participants = [
    { id: 1, id_journey: 101, name: "Luca", surname: "Rossi", email: "luca.rossi@example.com", telephone_number: "3456789012", tax_id_code: "RSSLCU80A01H501Z" },
    { id: 2, id_journey: 102, name: "Maria", surname: "Bianchi", email: "maria.bianchi@example.com", telephone_number: "3456789013", tax_id_code: "BNCMRA85B02L219K" },
    { id: 3, id_journey: 103, name: "Giovanni", surname: "Verdi", email: "giovanni.verdi@example.com", telephone_number: "3456789014", tax_id_code: "VRDGNN75C03F205Y" },
    { id: 4, id_journey: 104, name: "Elena", surname: "Russo", email: "elena.russo@example.com", telephone_number: "3456789015", tax_id_code: "RSSLNE92D04H501X" },
    { id: 5, id_journey: 105, name: "Marco", surname: "Ferrari", email: "marco.ferrari@example.com", telephone_number: "3456789016", tax_id_code: "FRRMRC70E05M209V" },
    { id: 6, id_journey: 106, name: "Chiara", surname: "Galli", email: "chiara.galli@example.com", telephone_number: "3456789017", tax_id_code: "GLLCHR88F06T220J" },
    { id: 7, id_journey: 107, name: "Stefano", surname: "Colombo", email: "stefano.colombo@example.com", telephone_number: "3456789018", tax_id_code: "CLBSTF82G07R221K" },
    { id: 8, id_journey: 108, name: "Francesca", surname: "Romano", email: "francesca.romano@example.com", telephone_number: "3456789019", tax_id_code: "RMNFNC79H08G223L" },
    { id: 9, id_journey: 109, name: "Andrea", surname: "Ricci", email: "andrea.ricci@example.com", telephone_number: "3456789020", tax_id_code: "RCCNDR85I09D224M" },
    { id: 10, id_journey: 110, name: "Paola", surname: "Moretti", email: "paola.moretti@example.com", telephone_number: "3456789021", tax_id_code: "MRTPLA76L10A225N" },
    { id: 11, id_journey: 111, name: "Davide", surname: "Bruno", email: "davide.bruno@example.com", telephone_number: "3456789022", tax_id_code: "BRNDVD80M11P226O" },
    { id: 12, id_journey: 112, name: "Silvia", surname: "Conti", email: "silvia.conti@example.com", telephone_number: "3456789023", tax_id_code: "CNTSLV89N12F227P" },
    { id: 13, id_journey: 113, name: "Giorgio", surname: "De Luca", email: "giorgio.deluca@example.com", telephone_number: "3456789024", tax_id_code: "DLCGRG78O13S228Q" },
    { id: 14, id_journey: 114, name: "Valentina", surname: "Marini", email: "valentina.marini@example.com", telephone_number: "3456789025", tax_id_code: "MRNVLT90P14M229R" },
    { id: 15, id_journey: 115, name: "Federico", surname: "Barbieri", email: "federico.barbieri@example.com", telephone_number: "3456789026", tax_id_code: "BRBFRC82Q15L230S" }
];

export { journeys, participants };
