export const siteConfig = {
  name: "Silk Beauty Salon",
  legalName: "Silk Beauty Salon",
  description: "Silk Beauty Salon is a beauty salon at Zurab Gorgiladze 63 in Batumi, Georgia, offering consultation-led beauty and aesthetic services with online booking.",
  url: "https://silkbeautysalon.online",
  logo: {
    image: "/images/brand/silk-beauty-salon-logo.webp",
    schemaImage: "/logo.png"
  },
  
  contact: {
    address: "Zurab Gorgiladze 63",
    city: "Batumi",
    region: "Adjara",
    postcode: "6010",
    country: "Georgia",
    phone: "+995 577 34 57 67",
    whatsappPhone: "+995 577 28 68 55",
    email: "info@silkbeautysalon.online"
  },
  
  businessHours: {
    monday: "10:00 - 22:00",
    tuesday: "10:00 - 22:00",
    wednesday: "10:00 - 22:00",
    thursday: "10:00 - 22:00",
    friday: "10:00 - 22:00",
    saturday: "10:00 - 22:00",
    sunday: "11:00 - 22:00"
  },
  
  social: {
    instagram: "https://www.instagram.com/silkbeauty_batumi/",
    facebook: "https://www.facebook.com/silkbeautybatumi/",
    tiktok: "https://www.tiktok.com/@silkbeautybatumi",
    googleBusinessProfile: ""
  }
};

export type SiteConfig = typeof siteConfig;
