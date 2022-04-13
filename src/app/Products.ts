// import { Input } from "@angular/core";

export interface Products {
    name: string;
    brand: string;
    gender: string;
    description: string;
    price: string;
    logoAlt: string;
    logoSrc: string;
    size: string
    id: number;
    celebrity: boolean;
  }

  export const products = [
    {
        name: 'Azzaro Chrome', brand: 'Azzaro', celebrity: false, gender: 'men',  description: 'Azzaro Chrome For Men By Azzaro Eau De Toilette Spray', price: '96.00', logoAlt: 'Azzaro Chrome For Men', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1580828154', size: '1.7 oz.', id: 1
    },
    {
        name: 'Eternity Aqua', brand: 'Calvin Klein', celebrity: false, gender: 'men', description: 'Eternity Eau De Toilete for Men', price: '200', logoAlt: 'Chanel Eternity Aqua', logoSrc: 'https://cdn.shopify.com/s/files/1/0910/0818/products/Calvin-Klein-Eternity-6.7-oz.-Mens-Eau-de-Toilette-EDT-S-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1626805784', size: '1.7 oz.', id: 2
    },
    {
        name: 'Burberry Brit For Him', brand: 'BURBERRY', celebrity: false, gender: 'men', description: 'Burberry Brit For Men By Burberry Eau De Toilette Spray', price: '66.00', logoAlt: 'Chanel Eternity Aqua', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS_1024x1024.jpg?v=1591879801', size: '1.7 oz.', id: 3
    },
    {
        name: 'Burberry Brit For Her', brand: 'BURBERRY', celebrity: false, gender: 'women', description: 'Burberry Brit For Women By Burberry Eau De Parfum Spray', price: '106.00', logoAlt: 'Burberry Brit For Her', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Women-Eau-de-Parfum-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS_1024x1024.jpg?v=1591879601', size: '1.7 oz.', id: 4
    },
    {
        name: 'Ralph Lauren Romance', brand: 'Ralph Lauren', celebrity: false, gender: 'women', description: 'Romance Eau de Parfum Spray for Women by Ralph Lauren', price: '88.00', logoAlt: 'Ralph Lauren Romance', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Romance-Womens-Eau-de-Parfume-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579124877', size: '1.7 oz.', id: 5
    },
    {
        name: 'Man Eau Fraiche', brand: 'VERSACE', celebrity: false, gender: 'men', description: 'Man Eau Fraiche Eau de Toilette Spray for Men by Versace', price: '70.00', logoAlt: 'Ralph Lauren Romance', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Versace-Man-Eau-Fraiche-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579124490', size: '1.7 oz.', id: 6
    },
    {
        name: 'Obsession For Men', brand: 'CALVIN KLEIN', celebrity: false, gender: 'men', description: 'Obsession For Men By Calvin Klein Eau De Toilette Spray', price: '66.00', logoAlt: 'Calvin Klein Obsession', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Men-Eau-De-Toilette-Spray-Best-Price-Fragrance-Parfume-Fragranceoutlet.Com-details_1024x1024.jpg?v=1579124151', size: '2.5 oz.', id: 7
    },
    {
        name: 'Fancy Love', brand: 'JESSICA SIMPSON', celebrity: true, gender: 'women', description: 'Fancy Love For Women By Jessica Simpson Eau De Parfum Spray', price: '55.00', logoAlt: 'Jessica Simpson Fancy Love', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Jessica-Simpson-Fancy-Love-Womens-Eau-de-Parfume-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579722663', size: '1.7 oz.', id: 8
    },
    {
        name: 'Cool Water', brand: 'DAVIDOFF', celebrity: false, gender: 'women', description: 'Cool Water For Women By Davidoff Eau De Toilette Spray', price: '57.00', logoAlt: 'Davidoff Cool Water', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Davidoff-Cool-Water-Women-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Detail_1024x1024.jpg?v=1580151490', size: '1.7 oz.', id: 9
    },
    {
        name: 'Versace Pour Homme', brand: 'VERSACE', celebrity: false, gender: 'men', description: 'Versace Pour Homme For Men By Gianni Versace Eau De Toilette Spray', price: '70.00', logoAlt: 'Versace Pour Homme', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Versace-Pour-Homme-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579124476', size: '1.7 oz.', id: 10
    },
    {
        name: 'Polo Blue', brand: 'RALPH LAUREN', celebrity: false, gender: 'men', description: 'Polo Blue For Men By Ralph Lauren Eau De Toilette Spray', price: '82.00', logoAlt: 'Ralph Lauren Polo Blue', logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Blue-Mens-Eau-de-Toilette-Spray-6.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1580141339', size: '2.5 oz.', id: 11
    },
    {
        name: "L'Eau D'issey Pour Homme", brand: 'ISSEY MIYAKE', celebrity: false, gender: 'men', description: "L'Eau D'issey Pour Homme For Men By Issey Miyake Eau De Toilette Spray", price: '74.00', logoAlt: "Issey Miyake L'Eau D'issey", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Issey-Miyake-Issey-Miyake-Mens-Eau-De-Toilette-EDT-Spray-1.3-oz.-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS_1024x1024.jpg?v=1579124286', size: '2.5 oz.', id: 12
    },
    {
        name: "Burberry New London", brand: 'BURBERRY', celebrity: false, gender: 'women', description: "Burberry New London For Women By Burberry Eau De Parfum Spray", price: '81.00', logoAlt: "Burberry New London", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-London-Women-Eau-de-Parfume-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579724717', size: '1.7 oz.', id: 13
    },
    {
        name: "Fancy For Women", brand: 'JESSICA SIMPSON', celebrity: true, gender: 'women', description: "Fancy For Women By Jessica Simpson Eau De Parfum Spray", price: '55.00', logoAlt: "Jessica Simpson Fancy For Women", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Jessica-Simpson-Fancy-Womens-Eau-De-Parfum-EDP-Spray-1.7-oz.-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS_1024x1024.jpg?v=1579723552', size: '1.7 oz.', id: 14
    },
    {
        name: "360° For Women", brand: 'PERRY ELLIS', celebrity: false, gender: 'women', description: "360° Eau de Toilette Spray for Women by Perry Ellis", price: '50.00', logoAlt: "Perry Ellis 360° For Women", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Perry-Ellis-360-Womens-Eau-de-Toilette-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_1024x1024.jpg?v=1579123873', size: '1.7 oz.', id: 15
    },
    {
        name: "Burberry Weekend For Women", brand: 'BURBERRY', celebrity: false, gender: 'women', description: "Weekend Eau de Parfum Spray for Women by Burberry", price: '81.00', logoAlt: "Burberry Weekend For Women", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/W-1314larger_1024x1024.jpg?v=1617046171', size: '1.7 oz.', id: 16
    },
    {
        name: "Vince Camuto", brand: 'VINCE CAMUTO', celebrity: false, gender: 'women', description: "Vince Camuto Eau de Parfum Spray for Women by Vince Camuto", price: '85.00', logoAlt: "Vince Camuto For Women", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Vince-Camuto-Vince-Camuto-W-Women-Eau-de-Parfum-Spray-EDP-S-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-details_1024x1024.jpg?v=1598970841', size: '3.4 oz.', id: 17
    },
    {
        name: "Brit Sheer For Women", brand: 'BURBERRY', celebrity: false, gender: 'women', description: "Burberry Brit Sheer For Women By Burberry Eau De Toilette Spray", price: '80.00', logoAlt: "Burberry Brit Sheer", logoSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Sheer-Women-Eau-de-Toilette-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_2_1024x1024.jpg?v=1579723696', size: '3.4 oz.', id: 18
    },
  ]


//   export class products {

//       @Input() 
//   }