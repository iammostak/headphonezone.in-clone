let dealsArr = [
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_1000x.jpg?v=1592332661',
      title: 'HiFiMAN - Sundara (2021)',
      about: 'Planar Magnetic Open-Backs',
      newPrice: '₹ 26,999',
      oldPrice: '₹ 29,999',
      review: '68 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-Pureplay-Z7-012_300x.jpg?v=1626431708',
      title: 'LYPERTEK - PurePlay Z7',
      about: 'True Wireless Earbuds with 1 DD + 2 BA Drivers',
      newPrice: '₹ 9,999',
      oldPrice: '₹ 19,999',
      review: '24 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_300x.jpg?v=1579707573',
      title: 'Beyerdynamic - DT 770 PRO',
      about: 'Closed-Back Studio Headphone',
      newPrice: 'From ₹ 9,999',
      oldPrice: '₹ 17,050',
      review: '342 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/audio-technica-ath-m50xbt-headphone-zone-13978716831807_300x.jpg?v=1590600676',
      title: 'Audio-Technica - ATH-M50xBT',
      about: 'Closed Back Wireless Headphone',
      newPrice: '₹ 16,990',
      oldPrice: '₹ 28,887',
      review: '15 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Fiio-Q3-2_300x.jpg?v=1620643675',
      title: 'FiiO - Q3',
      about: 'Portable DAC & Amplifier',
      newPrice: '₹ 11,999',
      oldPrice: '₹ 14,990',
      review: '20 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/astell-kern-ak-xb10-headphone-zone-13983714246719_300x.jpg?v=1589284696',
      title: 'ASTELL&KERN - AK XB10',
      about: 'Portable Bluetooth DAC & Amp',
      newPrice: '₹ 5,999',
      oldPrice: '₹ 14,999',
      review: '342 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Q1-Red-1_500x.jpg?v=1583928474',
      title: 'Shanling - Q1',
      about: 'Portable Digital Audio Player (DAP)',
      newPrice: '₹ 9,999',
      oldPrice: '₹ 11,999',
      review: '54 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sennheiser-hd-569-headphone-zone-29093553287_300x.jpg?v=1579780219',
      title: 'Sennheiser - HD 569',
      about: 'Semi Open-Back Headphone',
      newPrice: '₹ 8,990',
      oldPrice: '₹ 12,990',
      review: '8 reviews'
   }
];

let trendingArr = [
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_1000x.jpg?v=1592332661',
      title: 'HiFiMAN - Sundara (2021)',
      about: 'Planar Magnetic Open-Backs',
      newPrice: '₹ 26,999',
      oldPrice: '₹ 29,999',
      review: '68 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_300x.jpg?v=1579707573',
      title: 'Beyerdynamic - DT 770 PRO',
      about: 'Closed-Back Studio Headphone',
      newPrice: 'From ₹ 9,999',
      oldPrice: '₹ 17,050',
      review: '342 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_300x.jpg?v=1633698380',
      title: 'Final - E1000',
      about: 'In-Ears With 1 Dynamic Driver',
      newPrice: 'From ₹ 1,799',
      oldPrice: '₹ 2,499',
      review: '172 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-1_300x.jpg?v=1642057984',
      title: 'Sony - WF-C500',
      about: 'Truly Wireless Earbuds With IPX4 Rating',
      newPrice: '₹ 5,890',
      oldPrice: '₹ 8,990',
      review: '29 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_61b891f0-d385-464a-8dfb-a40bc89d0516_300x.jpg?v=1590592479',
      title: 'Audio-Technica - ATH-M50xBT',
      about: 'Closed Back Wireless Headphone',
      newPrice: '₹ 11,299',
      oldPrice: '₹ 20,246',
      review: '234 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-01_300x.jpg?v=1644040398',
      title: 'EPOS - PC 5 Chat',
      about: 'Wired Headphones for Calls',
      newPrice: '₹ 1,490',
      oldPrice: '₹ 1,759',
      review: '133 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-XB910N-Black-01_300x.jpg?v=1645786228',
      title: 'Sony - WH-XB910N',
      about: 'Noise Cancelling Wireless Headphone',
      newPrice: '₹ 14,990',
      oldPrice: '₹ 19,990',
      review: '3 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-20_300x.jpg?v=1593516090',
      title: 'BLON - BL-03',
      about: 'In-Ears With 1 Dynamic Driver',
      newPrice: '₹ 1,990',
      oldPrice: '₹ 3,999',
      review: '455 reviews'
   }
];

let newLaunchesArr = [
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-xDuoo-Link2-Bal-6_300x.jpg?v=1648465999',
      title: 'xDuoo - Link2 Bal',
      about: 'Portable DAC & Amp',
      newPrice: '₹ 12,999',
      oldPrice: '₹ 14,999',
      review: '1 review'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Shanling-UA5-Black-1_300x.jpg?v=1646383763',
      title: 'Shanling - UA5',
      about: 'Portable Balanced DAC & Amp',
      newPrice: '₹ 18,999',
      oldPrice: '₹ 23,499',
      review: '1 review'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-KA1-03_300x.jpg?v=1652523395',
      title: 'FiiO - KA1',
      about: 'Portable USB Amp & DAC',
      newPrice: '₹ 4,799',
      oldPrice: '₹ 4,999',
      review: '1 review'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Deva-Pro-06_300x.jpg?v=1651135982',
      title: 'HiFiMAN - Deva Pro (Wired)',
      about: 'Planar Magnetic Open-Backs',
      newPrice: '₹ 16,999',
      oldPrice: '₹ 19,999',
      review: '2 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynaic-MMX100-Black-02_300x.jpg?v=1653978388',
      title: 'Beyerdynamic - MMX 100',
      about: 'Closed-Back Headphone For Gaming',
      newPrice: '₹ 10,499',
      oldPrice: '₹ 11,999',
      review: '1 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynamic-MMX-150-Black-02_300x.jpg?v=1652875369',
      title: 'Beyerdynamic - MMX 150',
      about: 'Closed-Back Headphone For Gaming',
      newPrice: '₹ 13,599',
      oldPrice: '₹ 14,999',
      review: '7 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Ananda-1160-1160-1_300x.jpg?v=1592322111',
      title: 'HiFiMAN - Ananda (Stealth Magnet Version)',
      about: 'Planar Magnetic Open-Backs',
      newPrice: '₹ 64,999',
      oldPrice: '₹ 74,999',
      review: '4 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-HE6se-02_300x.jpg?v=1653995590',
      title: 'HiFiMAN - HE6se',
      about: 'Planar Magnetic Open-Backs',
      newPrice: '₹ 69,999',
      oldPrice: '₹ 79,999',
      review: '1 review'
   }
];

let wfhArr = [
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-01_300x.jpg?v=1644040398',
      title: 'EPOS - PC 5 Chat',
      about: 'Wired Headphones for Calls',
      newPrice: '₹ 1,490',
      oldPrice: '₹ 1,740',
      review: '133 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-USB-k800-07_300x.jpg?v=1602504992',
      title: 'Edifier - USB K800',
      about: 'Wired Headphones for Calls',
      newPrice: '₹ 1,799',
      oldPrice: '₹ 2,799',
      review: '7 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-K550-Black-01_300x.jpg?v=1602495156',
      title: 'Edifier - K550',
      about: 'Wired Headphones for Calls',
      newPrice: '₹ 999',
      oldPrice: '₹ 1,499',
      review: '21 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-V-MODA-BoomPro-X-1160-1160-1_300x.jpg?v=1638784282',
      title: 'V-MODA - BoomPro X Mic',
      about: 'Studio Professional Mic',
      newPrice: '₹ 3,499',
      oldPrice: '₹ 4,499',
      review: '5 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-JBL-CSLM30B-1160-1160-01_300x.jpg?v=1634727956',
      title: 'JBL - CSLM30B',
      about: 'Battery Powered Lavalier Microphone With Earphone',
      newPrice: '₹ 3,600',
      oldPrice: '₹ 3,999',
      review: '1 review'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-beyerdynamic-phonum-1160-1160_300x.jpg?v=1595419841',
      title: 'Beyerdynamic - Phonum',
      about: 'Wireless Bluetooth Speakerphone',
      newPrice: '₹ 23,999',
      oldPrice: '₹ 27,499',
      review: '18 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-2-1160-1160-Navy-1_300x.jpg?v=1644902277',
      title: 'Jabra - Elite 2',
      about: 'True Wireless Earbuds',
      newPrice: '₹ 3,999',
      oldPrice: '₹ 5,999',
      review: '33 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite3-Navy-01_80084524-f619-4be1-aa31-8f2816c3ba97_300x.jpg?v=1644902693',
      title: 'Jabra - Elite 3',
      about: 'True Wireless Earbuds',
      newPrice: '₹ 4,499',
      oldPrice: '₹ 6,999',
      review: '28 reviews'
   }
];

let unboxedArr = [
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_d3ba8d1d-2b7c-411b-9d19-27f13d46094c_1000x.jpg?v=1640843311',
      title: 'Final - E1000 (Unboxed)',
      about: 'Earphones With Cutting Edge Japanese Engineering',
      newPrice: '₹ 1,499',
      oldPrice: '₹ 2,499',
      review: '172 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-wh-ch510-unboxed-black-headphone-zone-13622136012863_300x.jpg?v=1580363372',
      title: 'Sony - WH-CH510 (Unboxed)',
      about: 'BT Headset with Dynamic Sound',
      newPrice: '₹ 2,299',
      oldPrice: '₹ 4,990',
      review: '290 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/33570e56cc3d3d10e2c826f3876839da_300x.jpg?v=1643272648',
      title: 'JBL - E65BTNC (Unboxed)',
      about: 'BT Headset with Dynamic Sound',
      newPrice: '₹ 5,999',
      oldPrice: '₹ 11,499',
      review: '7 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-a-JAYS-Five-Windows-Remote-Black-1160-1160_300x.jpg?v=1599730196',
      title: 'JAYS - a-Jays Five (Unboxed)',
      about: 'In-Ears with Mic',
      newPrice: '₹ 1,499',
      oldPrice: '₹ 6,999',
      review: '24 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-mdr-xb510as-unboxed-blue-headphone-zone-31175899079_300x.jpg?v=1580408412',
      title: 'Sony - MDR-XB510AS (Unboxed)',
      about: 'In-Ears With 1 Dynamic Driver',
      newPrice: '₹ 2,199',
      oldPrice: '₹ 2,990',
      review: '139 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beats-by-dr-dre-beats-x-unboxed-black-headphone-zone-13980183167039_300x.jpg?v=1579710060',
      title: 'Beats by Dr. Dre - Beats X (Unboxed)',
      about: 'In-Ears BT by Beats',
      newPrice: '₹ 9,799',
      oldPrice: '₹ 11,600',
      review: '64 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-wi-c200-unboxed-black-headphone-zone-11567317221439_300x.jpg?v=1580366972',
      title: 'Sony - WI-C200 (Unboxed)',
      about: 'Wireless Earphone',
      newPrice: '₹ 1,499',
      oldPrice: '₹ 2,490',
      review: '3 reviews'
   },
   {
      img: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-RE400-Andriod-1160-1160-1_edec4a4b-0a1f-4cab-8a29-4ab29e347cc9_300x.jpg?v=1609739867',
      title: 'HiFiMAN - RE400 (Unboxed)',
      about: '1x DD In-Ears',
      newPrice: '₹ 1,799',
      oldPrice: '₹ 3,999',
      review: '3 reviews'
   }
];

let deals = () => { return dealsArr }

let trending = () => { return trendingArr }

let newLaunches = () => { return newLaunchesArr }

let wfh = () => { return wfhArr}

let unboxed = () => { return unboxedArr }

export { deals, trending, newLaunches, wfh, unboxed };