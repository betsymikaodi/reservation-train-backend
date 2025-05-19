# reservation-train-backend
Application complète de gestion de réservation de billets de train, avec un backend Node.js, une base de données PostgreSQL et une interface frontend (Flutter ou autre). Elle permet la création de comptes utilisateurs, la gestion des trains, des gares et des réservations.


# 🚆 Train Reservation Backend

Ce projet est un système de réservation de billets de train. Il fournit une API REST développée avec **Node.js** et **Express.js**, utilisant **PostgreSQL** comme base de données.

## 🧰 Stack technique

- **Backend**: Node.js + Express
- **Base de données**: PostgreSQL
- **ORM**: Sequelize
- **Frontend**: Prévu en Flutter (non inclus dans ce dépôt)
- **Authentification**: JWT (à implémenter)
  
## 📦 Fonctionnalités

- Création et gestion des utilisateurs
- Ajout et modification des gares
- Ajout et gestion des trains
- Réservations de billets de train
- Associations entre utilisateurs, trains, gares et réservations


## 🚀 Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/<votre_utilisateur>/reservation-train-app.git
   cd reservation-train-app

    Installer les dépendances :

npm install

Configurer la base de données dans config/database.js

Exécuter les migrations :

npx sequelize-cli db:migrate

Lancer le serveur :

    npm start

📬 Endpoints principaux

    POST /api/utilisateurs : Créer un utilisateur

    POST /api/gares : Créer une gare

    POST /api/trains : Créer un train

    POST /api/reservations : Réserver une place

    GET /api/reservations : Voir les réservations

✅ À faire

    Authentification JWT

    Tests unitaires

    Intégration avec Flutter

    Déploiement sur Render/Heroku/Railway

🧑‍💻 Auteur

Développé betsymikaodi à Madagascar pour un projet de gestion ferroviaire.
