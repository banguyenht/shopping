const Product = require('../models/product')
const ErrorHandler = require('../ultils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../ultils/apiFeatures')

exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    success: true,
    product
  })
})

exports.getProducts = async (req, res, next) => {
  const resPerPage = 1;
  const productsCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter()
  // let products = await apiFeatures.query;
  // let filteredProductsCount = products.length;

  apiFeatures.pagination(resPerPage)
  products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    productsCount,
    resPerPage,
    // filteredProductsCount,
    products
})
}

exports.getSingleProduct = catchAsyncErrors (async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if(!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product
  })
})

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const productById = await Product.findById(req.params.id)
  if(!productById) {
    return next(new ErrorHandler('Product not found', 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  })
  res.status(200).json({
    success: true,
    product
  })
})

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if(!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  await product.deleteOne();
  res.status(200).json({
    success: true
  })
})