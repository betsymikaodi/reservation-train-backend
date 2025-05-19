const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// CRUD Utilisateur

// ➕ Créer un utilisateur
app.post('/utilisateurs', async (req, res) => {
  try {
    const utilisateur = await db.Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// 📥 Lister tous les utilisateurs
app.get('/utilisateurs', async (req, res) => {
  try {
    const utilisateurs = await db.Utilisateur.findAll();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// 🔍 Obtenir un utilisateur par ID
app.get('/utilisateurs/:id', async (req, res) => {
  try {
    const utilisateur = await db.Utilisateur.findByPk(req.params.id);
    if (!utilisateur) return res.status(404).json({ erreur: "Utilisateur non trouvé" });
    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ✏️ Modifier un utilisateur
app.put('/utilisateurs/:id', async (req, res) => {
  try {
    const utilisateur = await db.Utilisateur.findByPk(req.params.id);
    if (!utilisateur) return res.status(404).json({ erreur: "Utilisateur non trouvé" });

    await utilisateur.update(req.body);
    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

// ❌ Supprimer un utilisateur
app.delete('/utilisateurs/:id', async (req, res) => {
  try {
    const utilisateur = await db.Utilisateur.findByPk(req.params.id);
    if (!utilisateur) return res.status(404).json({ erreur: "Utilisateur non trouvé" });

    await utilisateur.destroy();
    res.json({ message: "Utilisateur supprimé" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
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
