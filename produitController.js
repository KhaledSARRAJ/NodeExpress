const Produit = require('./models/produits')
module.exports.product_get = async(req, res) => {
  const produits = await Produit.find();
  res.json(produits);
};

module.exports.product_Post = async(req, res) => {

    const {label, rating, price } = req.body;

try {
    const produit = await Produit.create({label,rating,price,category});
    res.status(201).json(produit);

} catch (err) {
    console.log(err);
    res.status(400).send('Error produit cannot be inserted');
}
    console.log("Label : ", label);  
    console.log("Rating : ", rating);  
    console.log("Price : ", price);  

}

module.exports.product_Put =async (req, res) => {
    const {label, rating, price , category} = req.body;
    const _id = req.params.id;

   try {
       const produit = await Produit.findOne({_id});
       if(label){
        produit.label = label;   }
        if(rating){
        produit.rating = rating;}
        if(price){ produit.price = price;}
        if(category){  produit.category = category;}
await produit.save();
    console.log(produit);
    res.status(204).json(produit);
   } catch (err) {
       res.status(404);
       res.send({error: "Produit do not Exist"});
   }
}

module.exports.product_Delete = async(req, res) => {
    const _id = req.params.id;
try {
    await Produit.deleteOne({_id});
    res.status('204').send({success:"J'ai bien supprimer"});
} catch (err) {
    res.status(404);
    res.send({error:"Produit do not Exist"});
}
}
module.exports.product_getOne = async(req, res) => {
    const _id = req.params.id;
try {
    const produit = await Produit.findOne({_id});
   
    res.json(produit);

} catch (err) {
    res.status(404);
    res.send({error:"Produit do not Exist"});
}
}