const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

db.sequelize.sync({ force: true }) // ⚠️ Remplace par { alter: true } si tu ne veux pas tout réinitialiser
  .then(async () => {
    console.log('✅ Tables synchronisées avec relations !');

    // ➕ Création d'un utilisateur
    const utilisateur = await db.Utilisateur.create({
      nom: 'Ali',
      email: 'ali@exemple.com',
      mot_de_passe: 'password123'
    });

    // ➕ Création d'une gare
    const gare1 = await db.Gare.create({
      nom: 'Gare Centrale',
      localisation: 'Antananarivo'
    });

    const gare2 = await db.Gare.create({
      nom: 'Gare Nord',
      localisation: 'Majunga'
    });

    // ➕ Création d’un train
    const train = await db.Train.create({
      numero: 'TGV001',
      capacite: 100,
      date_depart: new Date(),
      date_arrivee: new Date(Date.now() + 3 * 60 * 60 * 1000),
      gare_depart_id: gare1.id,
      gare_arrivee_id: gare2.id
    });

    // ➕ Création d’une réservation liée au train et à l’utilisateur
    const reservation = await db.Reservation.create({
      utilisateur_id: utilisateur.id,
      train_id: train.id,
      statut: 'confirmée'
    });

    console.log('🎫 Réservation créée avec succès !');

    // 🔎 Lire la réservation avec les relations
    const result = await db.Reservation.findOne({
      where: { id: reservation.id },
      include: [
        { model: db.Utilisateur },
        { model: db.Train, include: ['gareDepart', 'gareArrivee'] }
      ]
    });

    console.dir(result.toJSON(), { depth: null });
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation ou de test :', err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
