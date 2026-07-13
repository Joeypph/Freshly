import {
  beefEmpanada,
  beefIllustration,
  cheeseFocaccia,
  chickenEmpanada,
  chickenIllustration,
  filomenaCard,
  garlicFocaccia,
  hawaiianEmpanada,
  hawaiianIllustration,
  momsCard,
  mushroomFocaccia,
  pepperFocaccia,
  seedsFocaccia,
  spinachEmpanada,
  spinachIllustration,
  tomatoFocaccia,
} from "../assets";

export const empanadas = [
  { name: "Pollo con tocino", note: "La favorita", image: chickenEmpanada, accent: chickenIllustration, tone: "gold" },
  { name: "Hawaiana", note: "Dulce + salada", image: hawaiianEmpanada, accent: hawaiianIllustration, tone: "sun" },
  { name: "Carne de res", note: "Cocción lenta", image: beefEmpanada, accent: beefIllustration, tone: "ember" },
  { name: "Espinacas", note: "Verde y cremosa", image: spinachEmpanada, accent: spinachIllustration, tone: "leaf" },
];

export const focaccias = [
  { name: "Jitomate", image: tomatoFocaccia },
  { name: "Queso", image: cheeseFocaccia },
  { name: "Champiñones", image: mushroomFocaccia },
  { name: "Semillas", image: seedsFocaccia },
  { name: "Pimiento", image: pepperFocaccia },
  { name: "Ajo", image: garlicFocaccia },
];

export const locations = [
  { name: "Filomena Bazar", image: filomenaCard, mapUrl: "https://maps.google.com/?q=Juan+Ruiz+de+Alarcon+9+Cuernavaca" },
  { name: "Mom’s and Pop’s", image: momsCard, mapUrl: "https://maps.google.com/?q=Pasaje+Comercial+Florencia+Cuernavaca" },
];
