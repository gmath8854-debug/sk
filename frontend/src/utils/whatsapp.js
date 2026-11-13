// Helper utility to generate clean WhatsApp click-to-chat links with prefilled messages
export const createWhatsAppLink = ({
  category = "Customised Gifts",
  item = "",
  occasion = "",
  quantity = "",
  personalisation = "",
  date = "",
  location = "",
  customMessage = ""
}) => {
  const phone = "916301340919"; // Saikumar Digital Lab & Studio
  
  let text = `Hello Saikumar Digital Lab & Studio,\n\nI would like to enquire about:\n`;
  text += `• Category: ${category}\n`;
  if (item) text += `• Item / Service: ${item}\n`;
  if (occasion) text += `• Occasion: ${occasion}\n`;
  if (quantity) text += `• Quantity: ${quantity}\n`;
  if (personalisation) text += `• Personalisation / Name: ${personalisation}\n`;
  if (date) text += `• Preferred Date / Event Date: ${date}\n`;
  if (location) text += `• Location: ${location}\n`;
  if (customMessage) text += `\nAdditional Notes:\n${customMessage}\n`;
  
  text += `\nPlease let me know pricing, preview options, and timeline. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};

