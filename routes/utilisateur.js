// routes/utilisateur.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const db = require('../models');

// 🔄 GET tous les utilisateurs
router.get('/', async (req, res) => {
  const utilisateurs = await db.Utilisateur.findAll();
  res.json(utilisateurs);
});

// ➕ POST créer un utilisateur
router.post(
  '/',
  [
    body('nom').notEmpty().withMessage('Le nom est requis'),
    body('email').isEmail().withMessage('Email invalide'),
    body('mot_de_passe').isLength({ min: 6 }).withMessage('Mot de passe trop court')
  ],
  async (req, res) => {
    const erreurs = validationResult(req);
    if (!erreurs.isEmpty()) {
      return res.status(400).json({ erreurs: erreurs.array() });
    }

    try {
      const nouvelUtilisateur = await db.Utilisateur.create(req.body);
      res.status(201).json(nouvelUtilisateur);
    } catch (err) {
      res.status(500).json({ erreur: 'Erreur serveur', details: err });
    }
  }
);

module.exports = router;
// // 🔍 GET un utilisateur par ID
// router.get('/:id', async (req, res) => {
//   const utilisateur = await db.Utilisateur.findByPk(req.params.id);
//   if (!utilisateur) {
//     return res.status(404).json({ erreur: 'Utilisateur non trouvé' });
//   }
//   res.json(utilisateur);
// });
// // ✏️ PUT modifier un utilisateur
// router.put(
//   '/:id',
//   [
//     body('nom').optional().notEmpty().withMessage('Le nom est requis'),
//     body('email').optional().isEmail().withMessage('Email invalide'),
//     body('mot_de_passe').optional().isLength({ min: 6 }).withMessage('Mot de passe trop court')
//   ],
//   async (req, res) => {
//     const erreurs = validationResult(req);
//     if (!erreurs.isEmpty()) {
//       return res.status(400).json({ erreurs: erreurs.array() });
//     }

//     try {
//       const utilisateur = await db.Utilisateur.findByPk(req.params.id);
//       if (!utilisateur) {
//         return res.status(404).json({ erreur: 'Utilisateur non trouvé' });
//       }

//       await utilisateur.update(req.body);
//       res.json(utilisateur);
//     } catch (err) {
//       res.status(500).json({ erreur: 'Erreur serveur', details: err });
//     }
//   }
// );
// // ❌ DELETE un utilisateur
// router.delete('/:id', async (req, res) => {
//   try {
//     const utilisateur = await db.Utilisateur.findByPk(req.params.id);
//     if (!utilisateur) {
//       return res.status(404).json({ erreur: 'Utilisateur non trouvé' });
//     }

//     await utilisateur.destroy();
//     res.json({ message: 'Utilisateur supprimé' });
//   } catch (err) {
//     res.status(500).json({ erreur: 'Erreur serveur', details: err });
//   }
// });

