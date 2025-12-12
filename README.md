# Fondue Coeur - Application React

## 🚀 Lancer le serveur en développement

```bash
cd front-react
npm install
npm start
```

Le serveur démarre sur http://localhost:3000

---

## ⚠️ IMPORTANT : Branche de travail

**Tous les changements doivent être faits sur la branche `Prod`** car c'est elle qui est connectée à Hostinger.

```bash
git checkout Prod
```

---

## 🔗 Connexion Git ↔ Hostinger

Le site est déployé automatiquement via **Git Auto-Deployment** sur Hostinger :

| Configuration | Valeur |
|---------------|--------|
| **Repository** | `git@github.com:KobsyG/fondue_app.git` |
| **Branche** | `Prod` |
| **Dossier** | `public_html/git/` |

### Comment ça fonctionne :
1. Tu push sur la branche `Prod`
2. Hostinger détecte le changement (webhook)
3. Le code est automatiquement pull dans `public_html/git/`

---

## 📦 Build et déploiement

### 1. Build de l'application

```bash
cd front-react
npm run build
```

### 2. Commit et push (sur Prod !)

```bash
git add front-react/build/
git commit -m "build: description des changements"
git push origin Prod
```

### 3. Mise à jour des fichiers statiques sur Hostinger

Via le **File Manager** d'Hostinger :

**Étape 1 : Sauvegarder l'ancienne version**
- Aller dans `public_html/`
- Déplacer le dossier `static` vers `public_html/previous/`
- Renommer en `static-YYYY-MM-DD` (exemple: `static-2025-12-12`)

**Étape 2 : Copier la nouvelle version**
- Copier `public_html/git/front-react/build/static`
- Coller dans `public_html/`

✅ Le site est maintenant à jour !
