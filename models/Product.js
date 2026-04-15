const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom du produit est obligatoire'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Le prix est obligatoire'],
    min: [0, 'Le prix doit être positif']
  },
  quantity: {
    type: Number,
    required: [true, 'La quantité est obligatoire'],
    min: [0, 'La quantité doit être positive'],
    integer: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
