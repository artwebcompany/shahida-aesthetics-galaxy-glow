
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Heart, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  bestSeller?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Products = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Hair Growth Serum',
      price: 299000,
      originalPrice: 399000,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=600&fit=crop'
      ],
      category: 'Hair Care',
      description: 'Advanced formula hair growth serum with clinically proven ingredients including Minoxidil 5%, Biotin, and natural botanical extracts. Designed to stimulate hair follicles, reduce hair loss, and promote healthy hair growth.',
      features: [
        'Contains 5% Minoxidil for proven hair growth',
        'Enriched with Biotin and Keratin proteins',
        'Natural botanical extracts for scalp health',
        'Clinically tested and dermatologist approved',
        'Suitable for men and women',
        '90-day money-back guarantee'
      ],
      inStock: true,
      bestSeller: true
    },
    {
      id: 2,
      name: 'Complete Hair Transplant Recovery Kit',
      price: 599000,
      originalPrice: 799000,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop'
      ],
      category: 'Recovery Care',
      description: 'Comprehensive post-hair transplant care kit containing everything you need for optimal healing and hair growth. Includes specialized shampoo, healing spray, protective pillowcase, and detailed care instructions.',
      features: [
        'Gentle healing shampoo for transplanted areas',
        'Anti-inflammatory healing spray',
        'Special silk pillowcase to prevent friction',
        'Growth-promoting scalp treatment',
        'Detailed post-op care guide',
        'Direct consultation support included'
      ],
      inStock: true
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) return;
    
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp yang sesuai
    let message = '🛒 *Pesanan Produk Hair Care*\n\n';
    
    cart.forEach(item => {
      message += `📦 *${item.name}*\n`;
      message += `💰 Harga: Rp ${item.price.toLocaleString('id-ID')}\n`;
      message += `🔢 Jumlah: ${item.quantity}\n`;
      message += `💵 Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💳 *Total: Rp ${total.toLocaleString('id-ID')}*\n\n`;
    message += 'Silakan konfirmasi pesanan ini. Terima kasih! 🙏';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sage-50">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Produk
          </button>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={selectedProduct.images[selectedImageIndex]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {selectedProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 ${
                      selectedImageIndex === index ? 'border-emerald-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="text-emerald-600 font-semibold text-sm">{selectedProduct.category}</span>
                {selectedProduct.bestSeller && (
                  <span className="ml-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    BEST SELLER
                  </span>
                )}
                <h1 className="text-3xl font-bold text-emerald-900 mt-2">{selectedProduct.name}</h1>
                
                <div className="flex items-center mt-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {selectedProduct.rating} ({selectedProduct.reviews} ulasan)
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-emerald-600">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  )}
                </div>
                {selectedProduct.originalPrice && (
                  <span className="text-red-500 font-semibold">
                    Hemat {formatPrice(selectedProduct.originalPrice - selectedProduct.price)}
                  </span>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>

              <div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">Fitur Produk:</h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  disabled={!selectedProduct.inStock}
                  className="w-full gradient-button text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{selectedProduct.inStock ? 'Tambah ke Keranjang' : 'Stok Habis'}</span>
                </button>
                
                {cart.length > 0 && (
                  <button
                    onClick={sendToWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                  >
                    Pesan via WhatsApp ({cart.length} item)
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sage-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Hair Care Products
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Discover our carefully selected range of professional-grade hair care products
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`grid gap-8 ${products.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'max-w-md mx-auto'}`}>
            {products.map((product) => (
              <div
                key={product.id}
                className="gradient-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.bestSeller && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEST SELLER
                    </div>
                  )}
                  <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5 text-emerald-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-600 font-semibold text-sm">{product.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-emerald-600">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{product.reviews} ulasan</span>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="gradient-button text-white p-3 rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-emerald-100">
              <h3 className="font-bold text-emerald-900 mb-4">Keranjang Belanja ({cart.length})</h3>
              <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between font-bold text-emerald-900 mb-3">
                  <span>Total:</span>
                  <span>
                    {formatPrice(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0))}
                  </span>
                </div>
                <button
                  onClick={sendToWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
