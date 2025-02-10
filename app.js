// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman
// Buon lavoro!

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


app.get('/bacheca', (req, res) => {
    
    const piattiBarbabietola = [
        {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                      Cracker di farro
                      Cracker di lupini
                      Cracker allo zafferano
                      Cracker ai semi`,
            image: "./images/cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
          },
          {
            title: "Ciambellone soffice",
            content: `Il ciambellone soffice è un dolce classico della tradizione italiana, perfetto per la colazione o la merenda. Preparato con pochi e semplici ingredienti, conquista tutti con la sua morbidezza e il suo sapore genuino. Potete arricchirlo con gocce di cioccolato, scorza di limone o un velo di zucchero a velo per un tocco in più. Ideale da accompagnare a un buon tè o caffè, è un dolce che profuma di casa e di ricordi d’infanzia.`,
            image: "./images/ciambellone.jpeg",
            tags: ["Dolci", "Colazione", "Ricette tradizionali"],
          },
          {
            title: "Pane fritto dolce",
            content: `Il pane fritto dolce è una golosa variante del classico pane fritto, perfetta per una merenda diversa dal solito. Croccante fuori e morbido dentro, viene solitamente spolverizzato con zucchero semolato o accompagnato da miele e marmellata. Una ricetta semplice e veloce che permette di recuperare il pane avanzato e trasformarlo in una vera delizia.`,
            image: "./images/pane_fritto_dolce.jpeg",
            tags: ["Dolci", "Merenda", "Ricette di recupero"],
          },
          {
            title: "Torta paesana",
            content: `La torta paesana è un dolce della tradizione lombarda, ricco di sapore e profumi antichi. Preparata con pane raffermo, cacao, latte e pinoli, rappresenta un perfetto esempio di cucina di recupero. Ogni fetta racconta una storia di sapori semplici ma intensi, che riportano alle merende di una volta. Ideale come dolce della domenica o per una colazione golosa.`,
            image: "./images/torta_paesana.jpeg",
            tags: ["Dolci", "Cucina di recupero", "Ricette tradizionali"],
          },
          {
            title: "Pasta alla barbabietola",
            content: `La pasta alla barbabietola è un primo piatto colorato e raffinato, ideale per sorprendere i vostri ospiti. La barbabietola conferisce alla pasta un intenso colore rosato e un sapore delicatamente dolce, che si sposa alla perfezione con formaggi freschi o noci croccanti. Semplice da preparare e di grande effetto visivo, è perfetta per chi vuole portare in tavola qualcosa di diverso e salutare.`,
            image: "./images/pasta_barbabietola.jpeg",
            tags: ["Primi piatti", "Ricette vegetariane", "Cucina creativa"],
          }
    ];
    res.json(piattiBarbabietola)
})

app.listen(port, () => {
    console.log(`Server del mio blog`)
})