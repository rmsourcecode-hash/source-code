// WhatsApp Configuration
export const WHATSAPP_NUMBER = "919901911121";

// Instagram URL
export const INSTAGRAM_URL = "https://instagram.com/source_code_nutrition";

// Default greeting message
export const DEFAULT_GREETING = "Hey, What's up!";

// Generate WhatsApp link with prefilled message
export const getWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Default order message - updated format
export const getOrderMessage = (): string => {
  return `Hi, I want to order Source Code: Vital (7-Day Pack – ₹549).
My name is __.
Delivery pincode is __.`;
};

// Price - Only 7-day pack now
export const PRICE = "₹549";
