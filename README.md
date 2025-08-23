# 🍣 Restaurant Kabuki - Site Web

Site web moderne pour le restaurant japonais Kabuki, développé avec Next.js 15, Tailwind CSS et Framer Motion.

## 🚀 Déploiement

### Option 1: Vercel (Recommandé)

1. **Installer Vercel CLI :**

   ```bash
   npm install -g vercel
   ```

2. **Se connecter à Vercel :**

   ```bash
   vercel login
   ```

3. **Déployer :**

   ```bash
   vercel
   ```

4. **Ou déployer directement depuis GitHub :**
   - Poussez votre code sur GitHub
   - Connectez-vous sur [vercel.com](https://vercel.com)
   - Importez votre repository
   - Vercel déploiera automatiquement

### Option 2: Netlify

1. **Installer Netlify CLI :**

   ```bash
   npm install -g netlify-cli
   ```

2. **Build du projet :**

   ```bash
   npm run build
   ```

3. **Déployer :**
   ```bash
   netlify deploy --prod --dir=out
   ```

### Option 3: GitHub Pages

1. **Ajouter dans package.json :**

   ```json
   {
     "scripts": {
       "export": "next build && next export"
     }
   }
   ```

2. **Build et export :**

   ```bash
   npm run export
   ```

3. **Déployer le dossier `out` sur GitHub Pages**

## 📋 Prérequis

- Node.js 18+
- npm ou yarn

## 🛠️ Installation locale

```bash
# Cloner le projet
git clone [votre-repo]

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## 🎨 Technologies utilisées

- **Next.js 15** - Framework React
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **TypeScript** - Typage statique
- **DaisyUI** - Composants UI

## 📱 Fonctionnalités

- ✅ Design responsive
- ✅ Animations fluides
- ✅ Page de réservation
- ✅ Navigation moderne
- ✅ Thème sombre élégant
- ✅ Optimisé pour les performances

## 🌐 Domaines personnalisés

Après déploiement, vous pouvez ajouter votre domaine personnalisé :

- **Vercel** : Paramètres du projet → Domaines
- **Netlify** : Paramètres du site → Domaines
- **GitHub Pages** : Paramètres du repository → Pages

## 📞 Support

Pour toute question sur le déploiement, consultez :

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Netlify](https://docs.netlify.com)
- [Documentation GitHub Pages](https://pages.github.com)

---

**Restaurant Kabuki** - Une expérience culinaire japonaise authentique 🍣✨
