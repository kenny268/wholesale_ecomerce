const mongoose = require('mongoose');

//admin schema
const adminSchema = new mongoose.Schema({
    adminName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, },
    phone: { type: String , required: true},
    isverified: { type: Boolean, default: false },
    role: { type: String, default: 'admin' },
  });

// Customer Schema
const customerSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  phone: { type: String , required: true},
  isverified: { type: Boolean, default: false },
});

// Addresses Schema
const addressSchema = new mongoose.Schema({
  customerName: { ref: 'Customer', type: mongoose.Schema.Types.ObjectId, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

// Categories Schema
const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
});

// Manufacturers Schema
const manufacturerSchema = new mongoose.Schema({
  businessName: {type:String,required:true},
  contactPerson: {type:String,required:true},
  phone: {type: String,required: true},
  email: {type: String,required: true,unique: true,lowercase: true},
  registrationDate: {type: Date,default: Date.now},
  password: {type: String,required: true,minlength: 6},
  isverified: {type: Boolean,default: false},
  
});

// Products Schema
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true, },
  description: { type: String },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  manufacturer: { type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer', required: true },
});

// Orders Schema
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['Processing', 'Shipped', 'Delivered'], default: 'Processing' },
});

// Order_Items Schema
const orderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  subtotal: { type: Number, required: true },
});

// Order_Status Schema
const orderStatusSchema = new mongoose.Schema({
  statusName: { type: String, required: true },
});

// Cart Schema
const cartSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
});

// Cart_Items Schema
const cartItemSchema = new mongoose.Schema({
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

// Reviews Schema
const reviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  customerName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  timestamp: { type: Date, default: Date.now },
});

// Payment_Methods Schema
const paymentMethodSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  paymentType: { type: String, required: true },
  cardNumber: { type: String },
  expirationDate: { type: String },
  cvv: { type: String },
});

// Shipping_Methods Schema
const shippingMethodSchema = new mongoose.Schema({
  shippingMethodName: { type: String, required: true },
  estimatedDeliveryTime: { type: String },
});

// Refunds Schema
const refundSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  customerName: { type: String, required: true },
  refundDate: { type: Date, default: Date.now },
  refundAmount: { type: Number, required: true },
});

// Coupons Schema
const couponSchema = new mongoose.Schema({
  couponCode: { type: String, required: true },
  discountPercentage: { type: Number, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
});

// Coupon_Usage Schema
const couponUsageSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  coupon: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', required: true },
});

// Create models for each schema
const Category = mongoose.model('Category', categorySchema);
const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);
const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);
const OrderItem = mongoose.model('OrderItem', orderItemSchema);
const Cart = mongoose.model('Cart', cartSchema);
const CartItem = mongoose.model('CartItem', cartItemSchema);
const Review = mongoose.model('Review', reviewSchema);
const Address = mongoose.model('Address', addressSchema);
const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);
const ShippingMethod = mongoose.model('ShippingMethod', shippingMethodSchema);
const Refund = mongoose.model('Refund', refundSchema);
const OrderStatus = mongoose.model('OrderStatus', orderStatusSchema);
const Coupon = mongoose.model('Coupon', couponSchema);
const CouponUsage = mongoose.model('CouponUsage', couponUsageSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Admin = mongoose.model('Admin', adminSchema);
// Export the models
module.exports = {
  Category,
  Manufacturer,
  Product,
  Order,
  OrderItem,
  Cart,
  CartItem,
  Review,
  Address,
  PaymentMethod,
  ShippingMethod,
  Refund,
  OrderStatus,
  Coupon,
  CouponUsage,
  Customer,
  Admin
};
