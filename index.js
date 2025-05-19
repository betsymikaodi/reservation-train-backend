const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// Routes API
app.get('/utilisateurs', async (req, res) => {
  try {
    const utilisateurs = await db.Utilisateur.findAll();
    res.json(utilisateurs);
  } catch (err) {
    res.status(500).json({ erreur: 'Erreur lors de la récupération des utilisateurs' });
  }
});

//Post utilisateur
app.post('/utilisateurs', async (req, res) => {
  try {
    const { nom, email, mot_de_passe } = req.body;
    const nouvelUtilisateur = await db.Utilisateur.create({ nom, email, mot_de_passe });
    res.status(201).json(nouvelUtilisateur);
  } catch (err) {
    res.status(500).json({ erreur: 'Erreur lors de la création' });
  }
});



// Synchroniser la BDD
db.sequelize.sync({ alter: true }) // ne supprime pas les données
  .then(() => {
    console.log('✅ Tables synchronisées avec relations !');
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation :', err);
  });

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
