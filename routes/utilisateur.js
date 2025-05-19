const express = require('express');
const router = express.Router();
const utilisateurCtrl = require('../controllers/utilisateurController');
const { utilisateurSchema } = require('../validations/utilisateurValidation');

// Middleware validation
const validateUtilisateur = async (req, res, next) => {
  try {
    await utilisateurSchema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ erreur: err.details[0].message });
  }
};

// Routes CRUD
router.post('/', validateUtilisateur, utilisateurCtrl.creerUtilisateur);
router.get('/', utilisateurCtrl.listeUtilisateurs);
router.get('/:id', utilisateurCtrl.getUtilisateur);
router.put('/:id', validateUtilisateur, utilisateurCtrl.updateUtilisateur);
router.delete('/:id', utilisateurCtrl.deleteUtilisateur);

module.exports = router;
