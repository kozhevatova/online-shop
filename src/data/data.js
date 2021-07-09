import chemistry from "../images/chemistry.svg";
import parts from "../images/parts.svg";
import tires from "../images/tires.svg";
import electro from "../images/electro.svg";
import tools from "../images/tools.svg";
import accessories from "../images/accessories.svg";

import belt from "../images/belt.jpg";
import tire from "../images/tire.jpg";
import lens from "../images/lens.jpg";

export const categories = [
  {
    name: "Автохимия",
    image: chemistry,
  },
  {
    name: "Запчасти на ТО",
    image: parts,
  },
  {
    name: "Шины и диски",
    image: tires,
  },
  {
    name: "Автоэлектроника",
    image: electro,
  },
  {
    name: "Инструменты",
    image: tools,
  },
  {
    name: "Аксессуары и другое",
    image: accessories,
  },
];

export const popularProducts = [
  {
    isWinter: false,
    isSummer: false,
    image: belt,
    title: "Ремень",
    price: 440,
    isInStock: true,
    isLiked: false,
    isOnSale: false,
  },
  {
    isWinter: true,
    isSummer: false,
    image: tire,
    title: "Шина 205/80 R16 104Q Misha RF Power Grum",
    price: 11680,
    isInStock: true,
    isLiked: false,
    isOnSale: true,
  },
  {
    isWinter: false,
    isSummer: false,
    image: lens,
    title: "Фара Nokian 2025",
    price: 680,
    isInStock: true,
    isLiked: false,
    isOnSale: true,
  },
  {
    isWinter: false,
    isSummer: true,
    image: tire,
    title: "Шина 245/60 R18 105T Contyther Crosh Conta...",
    price: 0,
    isInStock: false,
    isLiked: false,
    isOnSale: false,
  },
  {
    isWinter: false,
    isSummer: false,
    image: belt,
    title: "Ремень",
    price: 440,
    isInStock: true,
    isLiked: false,
    isOnSale: false,
  },
  {
    isWinter: true,
    isSummer: false,
    image: tire,
    title: "Шина 205/80 R16 104Q Misha RF Power Grum",
    price: 11680,
    isInStock: true,
    isLiked: false,
    isOnSale: true,
  },
  {
    isWinter: false,
    isSummer: false,
    image: lens,
    title: "Фара Nokian 2025",
    price: 680,
    isInStock: true,
    isLiked: false,
    isOnSale: true,
  },
  {
    isWinter: false,
    isSummer: true,
    image: tire,
    title: "Шина 245/60 R18 105T Contyther Crosh Conta...",
    price: 0,
    isInStock: false,
    isLiked: false,
    isOnSale: false,
  },
];

export const recommendedProducts = [
  {
    isWinter: false,
    isSummer: true,
    image: tire,
    title: "Шина 205/80 R16 104Q Misha RF Power Grum",
    price: 0,
    isInStock: false,
    isLiked: false,
    isOnSale: true,
  },
  {
    isWinter: true,
    isSummer: false,
    image: tire,
    title: "Шина 205/80 R16 104Q Misha RF Power Grum",
    price: 11680,
    isInStock: true,
    isLiked: false,
    isOnSale: false,
  },
  {
    isWinter: false,
    isSummer: true,
    image: tire,
    title: "Шина 205/80 R16 104Q Misha RF Power Grum",
    price: 0,
    isInStock: false,
    isLiked: true,
    isOnSale: true,
  },
  {
    isWinter: false,
    isSummer: true,
    image: tire,
    title: "Шина 245/60 R18 105T Contyther Crosh Conty...",
    price: 11680,
    isInStock: true,
    isLiked: false,
    isOnSale: false,
  },
];

export const productsNavTypes = [
  "запчасти",
  "автохимия",
  "шины и диски",
  "автоэлектроника",
  "инструменты",
  "аксессуары и другое",
];
