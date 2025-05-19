const express = require('express');
const app = express();

app.use(express.json());

const utilisateurRoutes = require('./routes/utilisateur');
app.use('/utilisateurs', utilisateurRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
