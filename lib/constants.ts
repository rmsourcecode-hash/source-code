// WhatsApp Configuration
// Replace XXXXXXXXXX with your actual WhatsApp number (without +)
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

// Instagram placeholder - replace with actual URL
export const INSTAGRAM_URL = "https://instagram.com/sourcecode";

// Generate WhatsApp link with prefilled message
export const getWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Default order message
export const getOrderMessage = (pack: string = "7-Day Trial Box"): string => {
  return `Hi! I want to order Source Code: Vital (${pack}). Name: __. Pincode: __.`;
};

// Price placeholders - replace with actual prices
export const PRICES = {
  trial7Day: "₹___",
  pack14Day: "₹___",
};
