export const mishnahOrders = [
  { hebrew: "זרעים", english: "Zeraim", folder: "Zeraim" },
  { hebrew: "מועד", english: "Moed", folder: "Moed" },
  { hebrew: "נשים", english: "Nashim", folder: "Nashim" },
  { hebrew: "נזיקין", english: "Nezikin", folder: "Nezikin" },
  { hebrew: "קדשים", english: "Kodashim", folder: "Kodashim" },
  { hebrew: "טהרות", english: "Taharot", folder: "Taharot" }
];

export interface Tractate {
  hebrew: string;
  english: string;
  pages: number;
}

export interface TractatesByOrder {
  [key: string]: Tractate[];
}

export const tractatesByOrder: TractatesByOrder = {
  Zeraim: [
    { hebrew: "ברכות", english: "Brochos", pages: 64 }
  ],
  Moed: [
    { hebrew: "שבת", english: "Shabbos", pages: 157 },
    { hebrew: "עירובין", english: "Eruvin", pages: 105 },
    { hebrew: "פסחים", english: "Pesachim", pages: 121 },
    { hebrew: "יומא", english: "Yoma", pages: 88 },
    { hebrew: "סוכה", english: "Succah", pages: 56 },
    { hebrew: "ראש השנה", english: "RoshHashana", pages: 35 },
    { hebrew: "תענית", english: "Taanis", pages: 31 },
    { hebrew: "מגילה", english: "Megillah", pages: 32 },
    { hebrew: "מועד קטן", english: "MoedKatan", pages: 29 },
    { hebrew: "חגיגה", english: "Chagigah", pages: 27 }
  ],
  // ... continue for all orders as needed
}; 