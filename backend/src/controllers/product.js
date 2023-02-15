const productModel = require("../models/productModel")

const productAdd= async function(req,res){
const data=req.body
const {productName,price,catogory,userId,company}=data
const saveData= await productModel.create(data)
res.status(201).send({status:true,message:"Product add succussful",data:saveData})

}

const getProduct= async function(req,res){
   let data=await productModel.find()
   if(data.length>0){
    res.send({status:true, data:data})
   }else{
    return res.send({status:false,mesage:"not product found"})
   }
}

const deleteProduct= async (req, res)=>{
  let productId=req.body.productId
  let checkproduct= await productModel.findById({_id:productId})
  if(!checkproduct) return res.send({status:false,mesaage:"already deleted"})
  const result= await productModel.deleteOne({_id:productId})
res.send({status:true,message:'product deleted'})

}

module.exports={productAdd,getProduct,deleteProduct}