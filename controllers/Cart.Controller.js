const Cart = require('../models/Cart.Model');

// Controller for adding a product to the cart
const Add_To_Cart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;
    let cart = await Cart.findOne({ user });
    if (!cart) {
      cart = new Cart({ user, items: [] });
    }
    const index = cart.items.findIndex(item => item.product.equals(product));
    if (index !== -1) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    await cart.save();
    res.status(200).json({ success: true, message: 'Product added to cart successfully', cart });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for removing a product from the cart
const Remove_From_Cart = async (req, res) => {
  try {
    const { user, product } = req.body;
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
    const index = cart.items.findIndex(item => item.product.equals(product));
    if (index !== -1) {
      cart.items.splice(index, 1);
      await cart.save();
      res.status(200).json({ success: true, message: 'Product removed from cart successfully', cart });
    } else {
      res.status(404).json({ success: false, message: 'Product not found in cart' });
    }
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for clearing the cart
const Clear_Cart = async (req, res) => {
  try {
    const { user } = req.body;
    const cart = await Cart.findOneAndDelete({ user });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
    res.status(200).json({ success: true, message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  Add_To_Cart,
  Remove_From_Cart,
  Clear_Cart
};
