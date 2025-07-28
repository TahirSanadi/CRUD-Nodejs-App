const db=require('../db/db');

exports.getAddProduct=(req,res)=>{
    res.render('addproducts',{message:null});
}

exports.postAddProduct = async (req,res) => {
    const {name ,category,price, quantity}=req.body;
    try{
        await db.execute(
            'INSERT INTO product (name,category,price,quantity) values(?,?,?,?)',
            [name, category,price,quantity]
        );
        res.render('addproducts', {message:"product added successfully"});
        
    }catch(err){
        console.log(err);
        res.render('addproducts',{message:"Error adding product..!"});
    }
};

exports.getAllProduct=async (req,res) =>{
    try{
        const[products] = await db.execute('SELECT * FROM product ORDER BY id ASC');
        res.render('viewproducts', {products});
    }catch(err){
        console.log(err);
        res.send('Error fetching products');
    }
};

exports.getEditProduct=async (req,res)=>{
    const productid=req.params.id;
    try{
        const [row]=await db.execute('SELECT * FROM product WHERE id=?',[productid]);
        if(row.length>0){
            res.render('editproducts', {product:row[0] , message:null});
        }else{
            res.send('Product not found');

        }
    }catch(err){
        console.log(err);
        res.send('Error Loading product');
    }
}

exports.postUpdateProduct=async (req,res)=>{
    const productId=req.params.id;
    const {name,category,price,quantity}=req.body;
    try{
        await db.execute('UPDATE product set name=?,category=?,price=?,quantity=? where id=?',
        [name,category,price,quantity,productId]);
        res.redirect('/products');
    }catch(err){
        console.log(err);
        res.send('Error updating product');
    }
};

exports.deleteProduct=async (req,res)=>{
    const productId=req.params.id;
    try{
        await db.execute('DELETE FROM product where id=?',[productId]);
        // console.log("Deleted successfully");
        res.redirect('/products');
    }catch(err){
        console.log(err);
        res.send('Error deleting product');
    }
};

