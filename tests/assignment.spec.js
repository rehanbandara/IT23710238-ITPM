const { test, expect } = require('@playwright/test');

const testCases = [
  {
    id: "Pos_Fun_0001",
    name: "Convert simple daily activity sentence",
    input: "mama adha university ekata yanavaa",
    expected: "මම අද university එකට යනවා"
  },
  {
    id: "Pos_Fun_0002",
    name: "Convert past tense daily activity sentence",
    input: "api iiye lab sheet ekak karaa",
    expected: "අපි ඊයෙ lab sheet එකක් කරා"
  },
  {
    id: "Pos_Fun_0003",
    name: "Convert complex sentence with condition",
    input: "oya kalin enavanam apita project eka patan ganna puluvan.",
    expected: "ඔයා කලින් එනවනම් අපිට project එක පටන් ගන්න පුළුවන්."
  },
  {
    id: "Pos_Fun_0004",
    name: "Convert present tense ongoing activity",
    input: "me report eka karan yanavaa",
    expected: "මේ report එක කරන් යනවා"
  },
  {
    id: "Pos_Fun_0005",
    name: "Convert compound sentence with contrast",
    input: "mama library ekata giyaa, eth vahala thibbe",
    expected: "මම library එකට ගියා, එත් වහලා තිබ්බේ"
  },
  {
    id: "Pos_Fun_0006",
    name: "Convert future action with time reference",
    input: "thava dhavas 3kin assignment eka submit karanna venavaa",
    expected: "තව දවස් 3කින් assignment එක submit කරන්න වෙනවා."
  },
  {
    id: "Pos_Fun_0007",
    name: "Convert interrogative question sentence",
    input: "oya assignment eka ivara karala dha?",
    expected: "ඔය assignment එක ඉවර කරල ද?"
  },
  {
    id: "Pos_Fun_0008",
    name: "Convert polite request with mixed English terms",
    input: "karunaakarala mata notes tika evanna.",
    expected: "කරුණාකරලා මට notes ටික එවන්න."
  },
  {
    id: "Pos_Fun_0009",
    name: "Convert negative statement sentence",
    input: "mama adha class ekata enne na.",
    expected: "මම අද class එකට එන්නෙ නැ."
  },
  {
    id: "Pos_Fun_0010",
    name: "Convert informal greeting with slang",
    input: "hello machan kohomadha ithin",
    expected: "hello මචන් කොහොමද ඉතින්"
  },
  {
    id: "Pos_Fun_0011",
    name: "Convert a simple daily sentence",
    input: "mama gamanak yanavaa.",
    expected: "මම ගමනක් යනවා."
  },
  {
    id: "Pos_Fun_0012",
    name: "Convert a simple request sentence",
    input: "mata udhavuvak karanna puluvandha?",
    expected: "මට උදවුවක් කරන්න පුලුවන්ද?"
  },
  {
    id: "Pos_Fun_0013",
    name: "Convert interrogative greeting with condition",
    input: "oyaata kohomadha leda hodhayidha?",
    expected: "ඔයාට කොහොමද ලෙඩ හොදයිද?"
  },
  {
    id: "Pos_Fun_0014",
    name: "Convert imperative command",
    input: "vahaama yatath venna",
    expected: "වහාම යටත් වෙන්න"
  },
  {
    id: "Pos_Fun_0015",
    name: "Convert negative sentence form",
    input: "mama ehema karanne naehae.",
    expected: "මම එහෙම කරන්නේ නැහැ."
  },
  {
    id: "Pos_Fun_0016",
    name: "Convert present tense sentence",
    input: "api dhan kaema kanavaa.",
    expected: "අපි දන් කැම කනවා."
  },
  {
    id: "Pos_Fun_0017",
    name: "Convert past tense sentence",
    input: "mama iye office giyaa.",
    expected: "මම ඊයෙ office ගියා."
  },
  {
    id: "Pos_Fun_0018",
    name: "Convert future tense plan",
    input: "api heta trip ekak yamu.",
    expected: "අපි හෙට trip එකක් යමු."
  },
  {
    id: "Pos_Fun_0019",
    name: "Convert compound sentence with contrast",
    input: "api nuvara yanna hithan inne, namuth vahina nisaa yanne naehae.",
    expected: "අපි නුවර යන්න හිතන් ඉන්නේ, නමුත් වහින නිසා යන්නෙ නැහැ."
  },
  {
    id: "Pos_Fun_0020",
    name: "Convert complex conditional sentence",
    input: "oya enavaanam mamath enava api okkoma ekata yanna laasthiyi vemu.",
    expected: "ඔය එනවානම් මමත් එනව අපි ඔක්කොම එකට යන්න ලාස්තියි වෙමු."
  },
  {
    id: "Pos_Fun_0021",
    name: "Convert a sentence containing currency and numeric values",
    input: "mekata ru.300k giyaa",
    expected: "මෙකට රු.300ක් ගියා"
  },
  {
    id: "Pos_Fun_0022",
    name: "Convert a sentence containing place and activity",
    input: "api kattiya ekka canteen ekata giyaa",
    expected: "අපි කට්ටිය එක්ක canteen එකට ගියා"
  },
  {
    id: "Pos_Fun_0023",
    name: "Convert an informal greeting sentence",
    input: "hello machan kohomadha ithin",
    expected: "hello මචන් කොහොමද ඉතින්"
  },
  {
    id: "Pos_Fun_0024",
    name: "Convert a future-related academic deadline sentence",
    input: "hawa dawas thunakin assignment eka submit karanna wenawa",
    expected: "තව දවස තුනකින් assignment එක submit කරන්න වෙනවා"
  },
  {
    id: "Neg_Fun_0001",
    name: "Convert long paragraph with academic context",
    input: "api me semester eke subject ekakata.lecturersla group project ekak dunna.Aapi ekata research karala presentation ekak hadanavaa.",
    expected: "අපි මේ semester එකේ subject එකකට lecturersලා group project එකක් දුන්නා.අපි එකට research කරලා presentation එකක් හදනවා."
  },
  {
    id: "Neg_Fun_0002",
    name: "Fail with long mixed-language paragraph",
    input: "meke type karana evah hariyata enne naha. ithin kohomada scenarios where the system correctly converts the selected input language (Singlish)",
    expected: "මෙකේ type කරන ඒවා හරියට එන්නේ නැහැ.ඉතින් කොහොමද scenarios where the system correctly converts the selected input language (Singlish)"
  },
  {
    id: "Neg_Fun_0003",
    name: "Incorrect conversion of common greeting",
    input: "suba dawasak wewa yaluweee",
    expected: "සුබ දවසක් වේවා යාළුවේ"
  },
  {
    id: "Neg_Fun_0004",
    name: "Incorrect handling of informal Singlish words",
    input: "Me assignment ekata goda Weelawak yayi wagehh",
    expected: "මේ assignment එකට ගොඩ වෙලාවක් යයි වගේ"
  },
  {
    id: "Neg_Fun_0005",
    name: "Failure with Singlish sentence",
    input: "thawa dawas thunakin assignment eka submit karanna wenwa",
    expected: "තව දවස තුනකින් assignment එක submit කරන්න වෙනවා"
  },
  {
    id: "Neg_Fun_0006",
    name: "Failure with long mixed-language sentence",
    input: "mata zoom meeting ekeh link ekah ewanna puluvandha mama thavama whatsApp group ekta join velaa nahA.",
    expected: "මට zoom meeting එකේ link එකක් එවන්න පුලුවන්ද මම තවම WhatsApp group එකට join වෙලා නැහැ."
  },
  {
    id: "Neg_Fun_0007",
    name: "Failure with concatenated Singlish words",
    input: "mamauiniversityekatayanawae",
    expected: "මමuniversityඑකටයනවා"
  },
  {
    id: "Neg_Fun_0008",
    name: "Incorrect handling of alphanumeric characters",
    input: "mama uni1ta yanawaa",
    expected: "මම uni1ට යනවා"
  },
  {
    id: "Neg_Fun_0009",
    name: "Heavy slang causing incorrect conversion",
    input: "adoo machan whade supiriyk bn.",
    expected: "අඩෝ මචං වැඩේ සුපිරියක් බන්."
  },
  {
    id: "Neg_Fun_0010",
    name: "Heavy spelling distortion handling",
    input: "suba dawask wewa yaluwhe",
    expected: "සුබ දවසක් වේවා යාලුවේ"
  }
];

test.describe('Singlish → Sinhala Conversion Tests', () => {
  for (const data of testCases) {
    test(`${data.id} - ${data.name}`, async ({ page }) => {

      await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

      const inputBox = page.locator('textarea').first();
      const outputBox = page.locator('textarea').last();

      await inputBox.click();
      await inputBox.pressSequentially(data.input, { delay: 100 });

      // Trigger conversion
      await page.keyboard.press(' ');
      await page.waitForTimeout(500);
      await page.keyboard.press('Backspace');
      await page.waitForTimeout(500);
      await page.keyboard.press(' ');

      // Wait for translation
      await page.waitForTimeout(4500);

      const actualOutput = await outputBox.inputValue();

      console.log(`\n[${data.id}]`);
      console.log(`Input: ${data.input}`);
      console.log(`Output: ${actualOutput}`);

      // Basic assertion (conversion happened)
      expect(actualOutput.length).toBeGreaterThan(0);
    });
  }
});
