# Fondue Coeur - Application React

## 🚀 Lancer le serveur en développement

```bash
cd front-react
npm install
npm start
```

Le serveur démarre sur http://localhost:3000

---

## 📦 Build et déploiement sur Hostinger

### 1. Build de l'application

```bash
cd front-react
npm run build
```

Cela génère les fichiers optimisés dans `front-react/build/`

### 2. Mise à jour des fichiers statiques sur Hostinger

#### Via le File Manager d'Hostinger :

**Étape 1 : Sauvegarder l'ancienne version**
- Aller dans `public_html/`
- Déplacer le dossier `static` vers `public_html/previous/`
- Renommer en `static-YYYY-MM-DD` (exemple: `static-2025-12-12`)

**Étape 2 : Copier la nouvelle version**
- Copier le dossier `public_html/git/front-react/build/static`
- Coller dans `public_html/`

✅ Le site est maintenant à jour avec les derniers changements !
