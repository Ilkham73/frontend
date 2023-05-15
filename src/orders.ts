/** Описание товара. */
export interface Order { 
    /** Название товара. */
    name?: string;
    /** Описание товара. */
    description?: string;
    /** Ссылка на изображение товара. */
    imgSrc?: string;
};

/** Список кроссовок. */
export const telephone: Order[] = [
    { name: 'Samsung', description: 'Смартфон Samsung Galaxy A53 256GB Awesome Graphite', imgSrc: '/images/telephone1.jpg' },
    { name: 'Samsung', description: 'Смартфон Samsung Galaxy A13 3/32GB Blue (SM-A137F/DSN)', imgSrc: '/images/telephone2.jpg' },
    { name: 'Apple', description: 'Смартфон Apple iPhone 14 Pro Max 128GB nanoSim/eSim Deep Purple', imgSrc: '/images/telephone3.jpg' },
    { name: 'Apple', description: 'Смартфон Apple iPhone 11 64GB nanoSim/eSim Black', imgSrc: '/images/telephone4.jpg' },
    { name: 'Honor', description: 'Смартфон Honor X8A 6/128GB 5109APCN Midnight black', imgSrc: '/images/telephone5.jpg' },
    { name: 'Honor', description: 'Смартфон Honor X7A 4/128GB 5109AMLQ Midnigh', imgSrc: '/images/telephone6.jpg' },
    
];

export const tv: Order[] = [
    { name: 'Haier', description: 'Телевизор Haier 50 Smart TV S3', imgSrc: '/images/tv1.jpg' },
    { name: 'Grundig', description: 'Телевизор Grundig 55 GFU 7800B', imgSrc: '/images/tv2.jpg' },
    { name: 'Toshiba', description: 'Телевизор Toshiba 65C450KE', imgSrc: '/images/tv3.jpg' },
    { name: 'Яндекс', description: 'Телевизор Яндекс 43 умный телевизор с Алисой (YNDX-00071)', imgSrc: '/images/tv4.jpg' },
    { name: 'Haier', description: 'Телевизор Haier 43 Smart TV S1', imgSrc: '/images/tv5.jpg' },
    { name: 'Hisense', description: 'Телевизор Hisense 55U7HQ', imgSrc: '/images/tv6.jpg' },

];

export const computer: Order[] = [
    { name: 'HUAWEI', description: 'Ноутбук HUAWEI 53013ERR BoD-WDH9 MateBook D15 i5/8GB/512GB My/S', imgSrc: '/images/comp1.jpg' },
    { name: 'Honor', description: 'Ноутбук Honor MagicBook 16 R5/16/512 Grey (HYM-W56)', imgSrc: '/images/comp2.jpg' },
    { name: 'Thunderobot', description: 'Ноутбук игровой Thunderobot 911 Plus X', imgSrc: '/images/comp3.jpg' },
    { name: 'Honor', description: 'Ноутбук Honor MagicBook 16 R5/16/512 Silver (HYM-W56)', imgSrc: '/images/comp4.jpg' },
    { name: '4Aces', description: 'Системный блок игровой 4Aces BlackJack BJ360 (R5-3600/16Gb/512Gb/HDD1Tb/RTX3050/Win Trial)', imgSrc: '/images/comp5.jpg' },
    { name: 'Acer', description: 'Системный блок игровой Acer Nitro N50-620 (DG.E2DER.00C)', imgSrc: '/images/comp6.jpg' },

];