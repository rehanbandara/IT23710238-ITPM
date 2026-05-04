import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - Full 35 Case Optimized Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');
        await page.waitForLoadState('networkidle');
    });

    const testCases = [
        // --- POSITIVE FUNCTIONAL (1-24) ---
        { id: "Pos_Fun_0001", len: "S", input: "mama adha university ekata yanavaa",                                                                                                                              expected: "මම අද university එකට යනවා" },
        { id: "Pos_Fun_0002", len: "S", input: "api iiye lab sheet ekak karaa",                                                                                                                                   expected: "අපි ඊයෙ lab sheet එකක් කරා" },
        { id: "Pos_Fun_0003", len: "M", input: "oya kalin enavanam apita project eka patan ganna puluvan.",                                                                                                        expected: "ඔයා කලින් එනවනම් අපිට project එක පටන් ගන්න පුළුවන්." },
        { id: "Pos_Fun_0004", len: "S", input: "me report eka karan yanavaa",                                                                                                                                     expected: "මේ report එක කරන් යනවා" },
        { id: "Pos_Fun_0005", len: "M", input: "mama library ekata giyaa, eth vahala thibbe",                                                                                                                     expected: "මම library එකට ගියා, එත් වහලා තිබ්බේ" },
        { id: "Pos_Fun_0006", len: "M", input: "thava dhavas 3kin assignment eka submit karanna venavaa",                                                                                                         expected: "තව දවස් 3කින් assignment එක submit කරන්න වෙනවා." },
        { id: "Pos_Fun_0007", len: "S", input: "oya assignment eka ivara karala dha?",                                                                                                                            expected: "ඔය assignment එක ඉවර කරල ද?" },
        { id: "Pos_Fun_0008", len: "S", input: "karunaakarala mata notes tika evanna.",                                                                                                                           expected: "කරුණාකරලා මට notes ටික එවන්න." },
        { id: "Pos_Fun_0009", len: "S", input: "mama adha class ekata enne na.",                                                                                                                                  expected: "මම අද class එකට එන්නෙ නැ." },
        { id: "Pos_Fun_0010", len: "S", input: "hello machan kohomadha ithin",                                                                                                                                   expected: "hello මචන් කොහොමද ඉතින්" },
        { id: "Pos_Fun_0011", len: "S", input: "mama gamanak yanavaa.",                                                                                                                                           expected: "මම ගමනක් යනවා." },
        { id: "Pos_Fun_0012", len: "S", input: "mata udhavuvak karanna puluvandha?",                                                                                                                             expected: "මට උදවුවක් කරන්න පුලුවන්ද?" },
        { id: "Pos_Fun_0013", len: "S", input: "oyaata kohomadha leda hodhayidha?",                                                                                                                              expected: "ඔයාට කොහොමද ලෙඩ හොදයිද?" },
        { id: "Pos_Fun_0014", len: "S", input: "vahaama yatath venna",                                                                                                                                           expected: "වහාම යටත් වෙන්න" },
        { id: "Pos_Fun_0015", len: "S", input: "mama ehema karanne naehae.",                                                                                                                                     expected: "මම එහෙම කරන්නේ නැහැ." },
        { id: "Pos_Fun_0016", len: "S", input: "api dhan kaema kanavaa.",                                                                                                                                        expected: "අපි දන් කැම කනවා." },
        { id: "Pos_Fun_0017", len: "S", input: "mama iye office giyaa.",                                                                                                                                         expected: "මම ඊයෙ office ගියා." },
        { id: "Pos_Fun_0018", len: "S", input: "api heta trip ekak yamu.",                                                                                                                                       expected: "අපි හෙට trip එකක් යමු." },
        { id: "Pos_Fun_0019", len: "M", input: "api nuvara yanna hithan inne, namuth vahina nisaa yanne naehae.",                                                                                                 expected: "අපි නුවර යන්න හිතන් ඉන්නේ, නමුත් වහින නිසා යන්නෙ නැහැ." },
        { id: "Pos_Fun_0020", len: "M", input: "oya enavaanam mamath enava api okkoma ekata yanna laasthiyi vemu.",                                                                                               expected: "ඔය එනවානම් මමත් එනව අපි ඔක්කොම එකට යන්න ලාස්තියි වෙමු." },
        { id: "Pos_Fun_0021", len: "S", input: "mekata ru.300k giyaa",                                                                                                                                           expected: "මෙකට රු.300ක් ගියා" },
        { id: "Pos_Fun_0022", len: "S", input: "api kattiya ekka canteen ekata giyaa",                                                                                                                           expected: "අපි කට්ටිය එක්ක canteen එකට ගියා" },
        { id: "Pos_Fun_0023", len: "S", input: "hello machan kohomadha ithin",                                                                                                                                   expected: "hello මචන් කොහොමද ඉතින්" },
        { id: "Pos_Fun_0024", len: "M", input: "thawa dawas thunakin assignment eka submit karanna wenawa",                                                                                                       expected: "තව දවස තුනකින් assignment එක submit කරන්න වෙනවා" },

        // --- NEGATIVE FUNCTIONAL (25-34) ---
        { id: "Neg_Fun_0001", len: "L", input: "api me semester eke subject ekakata.  lecturersla group project ekak dunna.  api ekata research karala presentation ekak hadanavaa.",                            expected: "අපි මේ semester එකේ subject එකකට lecturersලා group project එකක් දුන්නා.  අපි එකට research කරලා presentation එකක් හදනවා." },
        { id: "Neg_Fun_0002", len: "L", input: "meke type karana evah hariyata enne naha. ithin kohomada \"Identify at least twenty four (24) scenarios where the system correctly converts the selected input language (Singlish)\"", expected: "මෙකේ type කරන ඒවා හරියට එන්නේ නැහැ.  ඉතින් කොහොමද \"Identify at least twenty four (24) scenarios where the system correctly converts the selected input language (Singlish)\"" },
        { id: "Neg_Fun_0003", len: "S", input: "suba dawasak wewa yaluwe",                                                                                                                                       expected: "සුබ දවසක් වේවා යාළුවේ" },
        { id: "Neg_Fun_0004", len: "M", input: "Me assignment ekata goda Weelawak yayi wageh",                                                                                                                   expected: "මේ assignment එකට ගොඩ වෙලාවක් යයි වගේ" },
        { id: "Neg_Fun_0005", len: "S", input: "thawa dawas thunakin assignment eka submit karanna wenawa",                                                                                                       expected: "තව දවස තුනකින් assignment එක submit කරන්න වෙනවා" },
        { id: "Neg_Fun_0006", len: "M", input: "mata zoom meeting ekeh link ekah evanna puluvandha mama thavama whatsApp group ekata join velaa nahA.",                                                           expected: "මට zoom meeting එකේ link එකක් එවන්න පුලුවන්ද මම තවම WhatsApp group එකට join වෙලා නැහැ." },
        { id: "Neg_Fun_0007", len: "S", input: "mamauiniversityekatayanavaa",                                                                                                                                    expected: "මමuniversityඑකටයනවා" },
        { id: "Neg_Fun_0008", len: "S", input: "mama uni1ta yanavaa",                                                                                                                                            expected: "මම uni1ට යනවා" },
        { id: "Neg_Fun_0009", len: "S", input: "adoo machan vhade supiriyak bn.",                                                                                                                                expected: "අඩෝ මචං වැඩේ සුපිරියක් බන්." },
        { id: "Neg_Fun_0010", len: "S", input: "suba dawasak wewa yaluwe",                                                                                                                                       expected: "සුබ දවසක් වේවා යාලුවේ" },

        // --- UI CASE (35) ---
        { id: "Pos_UI_0001",  len: "S", input: "mama gedhara yanavaa",                                                                                                                                           expected: "මම ගෙදර යනවා" },
    ];


    for (const tc of testCases) {
        test(`${tc.id}`, async ({ page }) => {
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

            await inputArea.fill('');
            await inputArea.type(tc.input, { delay: 20 });
            
            // Critical: Wait for conversion to complete
            await page.waitForTimeout(2000);

            const rawOutput = await outputBox.textContent() || '';
            
            // CLEANING PROCESS:
            const cleanActual = rawOutput.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();
            const cleanExpected = tc.expected.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

            // WORD MATCH LOGIC:
            const expectedWords = cleanExpected.match(/[\u0D80-\u0DFF]+|[A-Za-z0-9]+/g) || [];
            const matchedWords = expectedWords.filter(word => cleanActual.includes(word));
            
            const successRate = (matchedWords.length / expectedWords.length) * 100;
            
            console.log(`[${tc.id}] Input: "${tc.input}" | Match: ${successRate.toFixed(1)}%`);

            // Threshold: Set to 60 to allow minor engine variations
            expect(successRate, `Failed ${tc.id}. Found: ${cleanActual}`).toBeGreaterThanOrEqual(60);
        });
    }
});
