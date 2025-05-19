// 
const express = require('express');
const app = express();
const db = require('./models');

// Middleware JSON
app.use(express.json());

// Routes
const utilisateurRoutes = require('./routes/utilisateur');
app.use('/utilisateurs', utilisateurRoutes);

// Démarrer le serveur
const PORT = 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
  });
});
