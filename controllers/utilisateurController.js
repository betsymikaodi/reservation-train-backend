const db = require('../models');
const Utilisateur = db.Utilisateur;

exports.creerUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

exports.listeUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.json(utilisateurs);
  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

exports.getUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    if (!utilisateur) return res.status(404).json({ erreur: 'Utilisateur non trouvé' });
    res.json(utilisateur);
  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

exports.updateUtilisateur = async (req, res) => {
  try {
    const [updated] = await Utilisateur.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ erreur: 'Utilisateur non trouvé' });
    const utilisateur = await Utilisateur.findByPk(req.params.id);
    res.json(utilisateur);
  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

exports.deleteUtilisateur = async (req, res) => {
  try {
    const deleted = await Utilisateur.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ erreur: 'Utilisateur non trouvé' });
    res.json({ message: 'Utilisateur supprimé' });
  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};
