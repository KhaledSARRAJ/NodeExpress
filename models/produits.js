const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProduitSchema = new Schema({
    label: {type:String,required: true}, 
    rating: { type: Number},
    price: { type: Number},
    category: { type: String}
});
const Produit = mongoose.model('produit', ProduitSchema);
module.exports = Produit;