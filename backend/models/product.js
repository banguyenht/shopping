const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
    maxlength: [200, 'too long']
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    maxlength: [5, 'too long'],
    default: 0.0
  },
  description: {
    type: String,
    required: [true, 'name is required'],
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        require: true
      },
      url: {
        type: String,
        require: true
      }
    }
  ],
  category: {
    type: String,
    require: [true, 'category is required'],
    enum: {
      values: [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        "Books",
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
      ],
      message: ['please select category']
    }
  },
  seller: {
    type: String,
    required: [true, 'seller is required']
  },
  stock: {
    type: Number,
    required: [true, 'stock is required'],
  },
  numOfReviewer: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, 'name is required']
      },
      rating: {
        type: Number,
        required: [true, 'rating is required']
      },
      comment: {
        type: String,
        required: [true, 'comment is required']
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('Product', productSchema)