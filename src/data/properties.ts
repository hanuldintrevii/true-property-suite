import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  type: "apartment" | "house" | "land" | "commercial";
  status: "sale" | "rent";
  city: string;
  area: string;
  rooms: number;
  bathrooms: number;
  surface: number;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  agent: string;
  featured: boolean;
  year: number;
  floor?: number;
  totalFloors?: number;
  parking: boolean;
  energyClass: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Penthouse de Lux în Centrul Bucureștiului",
    price: 450000,
    currency: "EUR",
    type: "apartment",
    status: "sale",
    city: "București",
    area: "Herăstrău",
    rooms: 4,
    bathrooms: 3,
    surface: 220,
    image: property1,
    images: [property1, property3, property6],
    description: "Penthouse spectaculos cu vedere panoramică asupra parcului Herăstrău. Finisaje premium, terasă generoasă și facilități exclusive.",
    amenities: ["Terasă", "Loc parcare", "Piscină", "Saună", "Concierge", "Lift privat"],
    agent: "Maria Popescu",
    featured: true,
    year: 2023,
    floor: 12,
    totalFloors: 12,
    parking: true,
    energyClass: "A",
  },
  {
    id: "2",
    title: "Vilă Mediteraneană cu Piscină",
    price: 680000,
    currency: "EUR",
    type: "house",
    status: "sale",
    city: "Cluj-Napoca",
    area: "Bună Ziua",
    rooms: 6,
    bathrooms: 4,
    surface: 350,
    image: property2,
    images: [property2, property1, property6],
    description: "Vilă exclusivistă în stil mediteranean, cu piscină încălzită, grădină amenajată și finisaje de cea mai înaltă calitate.",
    amenities: ["Piscină", "Grădină", "Garaj dublu", "Smart Home", "Cameră fitness"],
    agent: "Andrei Ionescu",
    featured: true,
    year: 2022,
    parking: true,
    energyClass: "A+",
  },
  {
    id: "3",
    title: "Apartament Premium cu Vedere la Oraș",
    price: 285000,
    currency: "EUR",
    type: "apartment",
    status: "sale",
    city: "București",
    area: "Aviatorilor",
    rooms: 3,
    bathrooms: 2,
    surface: 145,
    image: property3,
    images: [property3, property1, property6],
    description: "Apartament elegant cu design modern, situat într-o clădire nouă cu facilități premium și vedere deosebită.",
    amenities: ["Balcon", "Loc parcare subteran", "Depozitare", "Recepție 24/7"],
    agent: "Elena Vasilescu",
    featured: true,
    year: 2024,
    floor: 8,
    totalFloors: 15,
    parking: true,
    energyClass: "A",
  },
  {
    id: "4",
    title: "Townhouse Modern în Cartier Rezidențial",
    price: 195000,
    currency: "EUR",
    type: "house",
    status: "sale",
    city: "Timișoara",
    area: "Giroc",
    rooms: 4,
    bathrooms: 2,
    surface: 180,
    image: property4,
    images: [property4, property1, property6],
    description: "Casă tip townhouse cu arhitectură contemporană, într-un ansamblu rezidențial de top cu spații verzi generoase.",
    amenities: ["Grădină proprie", "Garaj", "Terasă", "Smart Home"],
    agent: "Maria Popescu",
    featured: true,
    year: 2023,
    parking: true,
    energyClass: "A",
  },
  {
    id: "5",
    title: "Spațiu Comercial Premium",
    price: 3500,
    currency: "EUR",
    type: "commercial",
    status: "rent",
    city: "București",
    area: "Floreasca",
    rooms: 8,
    bathrooms: 3,
    surface: 400,
    image: property5,
    images: [property5, property3],
    description: "Spațiu de birouri clasa A, cu finisaje moderne, în zona de business Floreasca. Ideal pentru companii premium.",
    amenities: ["Recepție", "Sală conferințe", "Parcare", "Securitate 24/7"],
    agent: "Andrei Ionescu",
    featured: false,
    year: 2021,
    floor: 3,
    totalFloors: 10,
    parking: true,
    energyClass: "A",
  },
  {
    id: "6",
    title: "Apartament de Lux cu Bucătărie Deschisă",
    price: 1800,
    currency: "EUR",
    type: "apartment",
    status: "rent",
    city: "București",
    area: "Primăverii",
    rooms: 2,
    bathrooms: 1,
    surface: 95,
    image: property6,
    images: [property6, property1, property3],
    description: "Apartament rafinat cu bucătărie complet utilată, finisaje premium și poziționare excelentă în zona Primăverii.",
    amenities: ["Mobilat complet", "Aer condiționat", "Loc parcare", "Balcon"],
    agent: "Elena Vasilescu",
    featured: true,
    year: 2023,
    floor: 4,
    totalFloors: 8,
    parking: true,
    energyClass: "B",
  },
];

export const propertyTypes = [
  { value: "apartment", label: "Apartament" },
  { value: "house", label: "Casă / Vilă" },
  { value: "land", label: "Teren" },
  { value: "commercial", label: "Comercial" },
];

export const cities = [
  "București", "Cluj-Napoca", "Timișoara", "Iași", "Brașov", "Constanța", "Sibiu",
];

export const formatPrice = (price: number, currency: string, status: string) => {
  const formatted = new Intl.NumberFormat("ro-RO").format(price);
  return `${formatted} ${currency}${status === "rent" ? "/lună" : ""}`;
};
