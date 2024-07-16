import hpPavilionPlus14 from "../../images/hp-pavilion-plus-14.png";
import asusTufGaming15 from "../../images/asus-tuf-gaming-15.png";
import acerAspire7 from "../../images/acer-aspire-7.png";
import lenovoIdeapadGaming3 from "../../images/lenovo-ideapad-gaming3.png";
import lenovoThinkbook16 from "../../images/lenovo-thinkbook16.png";
import hpVictusGaming16 from "../../images/hp-victus-gaming-16.png";
import macbookAir13M2 from "../../images/macbook-air-13.6-m2.png";
import redmibookPro14 from "../../images/redmi-book-pro-14.png";
import macbookPro14M2Pro from "../../images/macbook-pro-14-m2-pro.png";

export const productList = [
  {
    id: Math.random(),
    image: hpPavilionPlus14,
    info: "Laptop HP Pavilion Plus 14",
    price: "26099",
    expire: true,

    more: {
      processor: "Intel Core i5-1135G7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14.6\"",
    }
  },
  {
    id: Math.random(),
    image: asusTufGaming15,
    info: "Laptop ASUS TUF Gaming A15 (2023)",
    price: "36999",
    expire: false,

    more: {
      processor: "Ryzen 5 7535HS",
      ram: "16GB",
      storage: "1024GB SSD",
      display: "15.6\"",
    }
  },
  {
    id: Math.random(),
    image: acerAspire7,
    info: "Laptop Acer Aspire 7",
    price: "31999",
    expire: true,

    more: {
      processor: "Intel Core i5-12450H",
      ram: "16GB",
      storage: "1024GB SSD",
      display: "15.6\"",
    }
  },
  {
    id: Math.random(),
    image: lenovoIdeapadGaming3,
    info: "Laptop Lenovo Ideapad Gaming 3",
    price: "31999",
    expire: false,

    more: {
      processor: "AMD Ryzen 5 5500H",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6\"",
    }
  },
  {
    id: Math.random(),
    image: lenovoThinkbook16,
    info: "Laptop Lenovo ThinkBook 16",
    price: "39999",
    expire: false,

    more: {
      processor: "AMD Ryzen 7 7730U",
      ram: "32GB",
      storage: "1024GB SSD",
      display: "16\"",
    }
  },
  {
    id: Math.random(),
    price: "52999",
    expire: true,
    image: hpVictusGaming16,
    info: "Laptop HP Victus Gaming 16",
    more: {
      processor: "Intel Core i5-13500H",
      ram: "32GB",
      storage: "512GB SSD",
      display: "16.1\"",
    }
  },
  {
    id: Math.random(),
    image: macbookAir13M2,
    info: "Laptop MacBook Air 13.6 M2",
    price: "48499",
    expire: true,
    more: {
      processor: "M2",
      ram: "8GB",
      storage: "256GB SSD",
      display: "13.6\"",
    }
  },
  {
    id: Math.random(),
    image: redmibookPro14,
    info: "Laptop Xiaomi Redmi Book Pro 14",
    price: "34999",
    expire: false,

    more: {
      processor: "Intel Ultra 5",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14.6\"",
    }
  },
  {
    id: Math.random(),
    image: macbookPro14M2Pro,
    info: "Laptop Apple MacBook Pro 14\" M2 Pro",
    price: "75999",
    expire: false,

    more: {
      processor: "M2 Pro",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14.2\"",
    }
  },
];
