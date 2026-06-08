require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const newTitles = [
  "Kurs haqida umumiy ma'lumot. Raqamli texnologiyalar va ularning rivojlanish bosqichlari",
  "Bulutli hisoblash va uning afzalliklari",
  "Kriptovalyutalar bilan tanishish va ular bilan muhim aloqalar, shu jumladan ularning asosiy diskursiv ramkalari, energiya talablari va geosiyosiy oqibatlarini ko'rib chiqish.",
  "Raqamli platformalar va mikromobilitet. velosiped ijarasi va elektr skuterlar orqali shahar harakatlanish tizimini transformatsiya qilish",
  "Raqamli platformalar asosidagi ridehailing xizmatlari. Shahar transport tizimi va ekologiyaga ta'siri (Uber, Lyft, Yandex Go, Bolt) platformalari",
  "Raqamli platformalarda “Gig work” ishlash: Tovarlar va xizmatlarning shahar bo'ylab harakati, ijtimoiy va ekologik ta'sirlar",
  "Yetkazib berish va talab bo'yicha iqtisodiyot.",
  "Raqamli platformalarda qisqa muddatli ijara: Uy-joy bozori, arzonlik va shahar boshqaruviga ta'siri",
  "Aqlli uy texnologiyalari va Narsalar interneti (IoT). Shaxsiy makondagi raqamli nazorat va uning ijtimoiy-ekologik ta'siri",
  "Algoritmlar va sun'iy intellekt (AI). Raqamli tizimlarning ijtimoiy fazoni shakllantirishdagi roli va istisno qilish mexanizmlari",
  "Raqamli texnologiyalarning ijtimoiy tengsizliklar va hududiy farqlarni shakllantirishdagi tizimli roli",
  "YAKUNIY SERTIFIKATLASH LOYIHASI TOPSHIRIG'I"
];

const projectText = `# YAKUNIY SERTIFIKATLASH LOYIHASI TOPSHIRIG'I

Loyiha mavzusi: "Aqlli, Adolatli va Barqaror Shahar: Yangi Avlod Raqamli Platformasi Konsepsiyasi"

## Loyihaning maqsadi:
Kurs davomida o'rganilgan barcha raqamli texnologiyalar (Bulutli hisoblash, AI, IoT, Kriptovalyuta) va ularning ijtimoiy-iqtisodiy ta'sirlarini (Gig iqtisodiyot, tengsizlik, ekologiya) amalda qo'llagan holda, zamonaviy shahar muammolaridan birini hal qiluvchi innovatsion raqamli platforma (startap) loyihasini ishlab chiqish.

## LOYIHA BOSQICHLARI VA TALABLARI:

### 1-qism: Platforma g'oyasi va Infratuzilmasi (M1, M2, M4, M5, M7, M8 - mavzular asosida)
**G'oya:** Shahar transporti (mikromobilitet, ridehailing), yetkazib berish xizmati yoki qisqa muddatli ijara tizimidagi mavjud muammoni hal qiluvchi yangi platforma o'ylab toping.

**Infratuzilma:** Ushbu platformaning ma'lumotlar bazasi va ishlash mexanizmi nima uchun Bulutli hisoblash (Cloud computing) texnologiyalariga asoslanishi kerakligini va uning 3 ta asosiy afzalligini asoslab bering.

### 2-qism: Texnologik Integratsiya (M3, M9, M10 - mavzular asosida)
Tizimingiz qanday qilib quyidagi texnologiyalardan foydalanishini tushuntiring:
- **IoT (Narsalar interneti):** Tizimingizdagi ob'ektlar (masalan, aqlli skuterlar, uylar yoki avtomobillar) qanday qilib raqamli nazorat qilinadi va ma'lumot almashadi?
- **Sun'iy Intellekt (AI) va Algoritmlar:** Mijozlarga xizmat ko'rsatishda yoki narxlarni belgilashda AI qanday ishlaydi? Algoritm insonlarni kamsitmasligi va ijtimoiy fazoni adolatli shakllantirishi uchun qanday istisno mexanizmlari qo'llaniladi?
- **Kriptovalyuta va To'lov:** Platformada blokcheyn yoki kriptovalyutadan to'lov tizimi (yoki sodiqlik bonuslari) sifatida foydalanish imkoniyatini tahlil qiling. Bunga ketadigan energiya talablari va ekologik oqibatlarini hisobga oling.

### 3-qism: Ijtimoiy va Ekologik Tahlil (M6, M11 - mavzular asosida)
- **"Gig work" va Ishchilar huquqi:** Platformangizda ishlovchi kuryerlar yoki haydovchilarning (Gig workers) ijtimoiy himoyasini qanday ta'minlaysiz?
- **Tizimli ta'sir:** Siz yaratgan texnologiya jamiyatdagi ijtimoiy tengsizlikni va hududiy farqlarni (masalan, markaz va chekka tumanlar o'rtasidagi) kuchaytirib yubormasligi uchun qanday chora-tadbirlar ko'rasiz? Platformaning shahar ekologiyasiga (uglerod izi) ta'siri qanday bo'ladi?

## TOPSHIRISH SHAKLI VA QOIDALARI:
- **Yozma hisobot (Biznes reja/Tahlil):** Loyiha yuqoridagi 3 ta qismni to'liq qamrab olgan holda, akademik va professional tilda (Word yoki PDF formatida, kamida 5-7 bet) yozilishi shart.
- **Taqdimot (Pitch Deck):** Loyiha g'oyasini himoya qilish uchun 10-12 ta slayddan iborat taqdimot (PowerPoint) tayyorlanishi kerak.

## SERTIFIKAT BERISH MEZONLARI:
Talaba muvaffaqiyatli o'tishi va Maxsus Sertifikatga ega bo'lishi uchun loyiha quyidagi mezonlarga javob berishi kerak:
1. **Komplekslik (30%):** Barcha 11 ta mavzudagi bilimlar loyihada o'zaro mantiqiy bog'langan bo'lishi.
2. **Innovatsiya va Amaliylik (30%):** Taklif qilinayotgan g'oyaning real hayotda, shahar sharoitida qo'llash mumkinligi.
3. **Tanqidiy fikrlash (40%):** Texnologiyaning nafaqat yutug'i, balki ijtimoiy-ekologik zararlarini ko'ra bilishi va unga yechim bera olishi.

> Eslatma: Loyiha belgilangan muddatda topshirilib, taqdimot komissiya (yoki o'qituvchi) oldida muvaffaqiyatli himoya qilinganidan so'ng, talabaga kursni to'liq o'zlashtirganini tasdiqlovchi sertifikat taqdim etiladi. Avtomatik sertifikat olishingiz uchun pastdagi testda himoya qilganingizni tasdiqlang.
`;

async function run() {
  console.log('Fetching lessons...');
  const { data: lessons, error: lErr } = await supabase.from('lessons').select('*').order('sort_order');
  if (lErr) { console.error('Error fetching lessons:', lErr); return; }

  for (let i = 0; i < lessons.length; i++) {
    if (i < 11) {
      console.log('Updating lesson ' + (i + 1) + '...');
      await supabase.from('lessons').update({
        title: newTitles[i],
        slug: 'mavzu-' + (i + 1)
      }).eq('id', lessons[i].id);
    } else if (i === 11) {
      console.log('Setting up lesson 12 as Project...');
      await supabase.from('lessons').update({
        title: newTitles[11],
        slug: 'yakuniy-loyiha',
        description: "Sertifikat olish uchun yakuniy loyiha topshirig'i",
        lecture_text: projectText
      }).eq('id', lessons[i].id);

      console.log('Resetting questions for Project...');
      await supabase.from('questions').delete().eq('lesson_id', lessons[i].id);
      await supabase.from('questions').insert({
        lesson_id: lessons[i].id,
        topic_number: 12,
        text: "Loyihani tayyorlab, taqdimot (Pitch Deck) va hisobotni (Word/PDF) ustozga topshirdingizmi?",
        options: ["Ha, topshirdim va himoya qildim", "Yo'q, hali tayyor emas"],
        correct_index: 0,
        explanation: "Sertifikatni olish uchun loyihani himoya qilgan bo'lishingiz shart."
      });
    } else {
      console.log('Deleting extra lesson ' + (i + 1) + '...');
      await supabase.from('questions').delete().eq('lesson_id', lessons[i].id);
      await supabase.from('lesson_progress').delete().eq('lesson_id', lessons[i].id);
      await supabase.from('test_attempts').delete().eq('lesson_id', lessons[i].id);
      await supabase.from('lessons').delete().eq('id', lessons[i].id);
    }
  }
  console.log('Database updated successfully! All 15 lessons scaled down to 12.');
}
run();
