require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 3000;

// URL de connexion à MongoDB Atlas (par défaut) ou variable d'environnement
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ayoubaguezardev_db_user:ByMjPenJXFAit6i5@cluster0.hrdgbxs.mongodb.net/tpcrud?retryWrites=true&w=majority&appName=Cluster0';

// Connexion à MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Configuration d'EJS comme moteur de template
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// ============================================
// ROUTES CRUD
// ============================================

// READ - Afficher tous les produits
app.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.render('index', { products });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// CREATE - Afficher le formulaire d'ajout
app.get('/add', (req, res) => {
  res.render('add', { product: null, errors: null });
});

// CREATE - Ajouter un produit
app.post('/add', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    
    // Validation simple
    const errors = [];
    if (!name || name.trim() === '') errors.push('Le nom est obligatoire');
    if (!price || price < 0) errors.push('Le prix doit être positif');
    if (!quantity || quantity < 0) errors.push('La quantité doit être positive');
    
    if (errors.length > 0) {
      return res.render('add', { product: req.body, errors });
    }
    
    const newProduct = new Product({
      name: name.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity)
    });
    
    await newProduct.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/add');
  }
});

// UPDATE - Afficher le formulaire de modification
app.get('/edit/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.redirect('/');
    }
    res.render('edit', { product, errors: null });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// UPDATE - Modifier un produit
app.put('/edit/:id', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    
    // Validation simple
    const errors = [];
    if (!name || name.trim() === '') errors.push('Le nom est obligatoire');
    if (!price || price < 0) errors.push('Le prix doit être positif');
    if (!quantity || quantity < 0) errors.push('La quantité doit être positive');
    
    if (errors.length > 0) {
      const product = await Product.findById(req.params.id);
      return res.render('edit', { product: { ...req.body, _id: req.params.id }, errors });
    }
    
    await Product.findByIdAndUpdate(req.params.id, {
      name: name.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity)
    });
    
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// DELETE - Supprimer un produit
app.delete('/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// Démarrage du serveur (uniquement en local)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

// Export de l'application pour Vercel (Serverless)
module.exports = app;
