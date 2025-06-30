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

// Utility to convert Arabic numbers to Hebrew numerals (for daf/page display)
// Handles 1-400+ (א - ת), with special handling for 15 (טו) and 16 (טז)
const hebrewLetters = [
  '', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט',
  'י', 'יא', 'יב', 'יג', 'יד', 'טו', 'טז', 'יז', 'יח', 'יט',
  'כ', 'כא', 'כב', 'כג', 'כד', 'כה', 'כו', 'כז', 'כח', 'כט',
  'ל', 'לא', 'לב', 'לג', 'לד', 'לה', 'לו', 'לז', 'לח', 'לט',
  'מ', 'מא', 'מב', 'מג', 'מד', 'מה', 'מו', 'מז', 'מח', 'מט',
  'נ', 'נא', 'נב', 'נג', 'נד', 'נה', 'נו', 'נז', 'נח', 'נט',
  'ס', 'סא', 'סב', 'סג', 'סד', 'סה', 'סו', 'סז', 'סח', 'סט',
  'ע', 'עא', 'עב', 'עג', 'עד', 'עה', 'עו', 'עז', 'עח', 'עט',
  'פ', 'פא', 'פב', 'פג', 'פד', 'פה', 'פו', 'פז', 'פח', 'פט',
  'צ', 'צא', 'צב', 'צג', 'צד', 'צה', 'צו', 'צז', 'צח', 'צט',
  'ק', 'קא', 'קב', 'קג', 'קד', 'קה', 'קו', 'קז', 'קח', 'קט',
  'ר', 'רא', 'רב', 'רג', 'רד', 'רה', 'רו', 'רז', 'רח', 'רט',
  'ש', 'שא', 'שב', 'שג', 'שד', 'שה', 'שו', 'שז', 'שח', 'שט',
  'ת', 'תא', 'תב', 'תג', 'תד', 'תה', 'תו', 'תז', 'תח', 'תט',
];

export function numberToHebrew(num: number): string {
  if (num < 1 || num >= hebrewLetters.length) {
    // For numbers above 400, build from hundreds, tens, and units
    let result = '';
    let hundreds = Math.floor(num / 100);
    let remainder = num % 100;
    if (hundreds > 0) {
      result += 'ת'.repeat(hundreds); // ת = 400
    }
    if (remainder > 0) {
      result += numberToHebrew(remainder);
    }
    return result;
  }
  return hebrewLetters[num];
} 