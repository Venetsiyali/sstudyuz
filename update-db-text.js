require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const newText = `# Yakuniy sertifikatlash loyihasi topshirig'i\n\nLoyiha mavzusi: "Aqlli, adolatli va barqaror shahar: yangi avlod raqamli platformasi konsepsiyasi"\n\n## Loyihaning maqsadi:\nKurs davomida o'rganilgan barcha raqamli texnologiyalar (Bulutli hisoblash, AI, IoT, Kriptovalyuta) va ularning ijtimoiy-iqtisodiy ta'sirlarini (Gig iqtisodiyot, tengsizlik, ekologiya) amalda qo'llagan holda, zamonaviy shahar muammolaridan birini hal qiluvchi innovatsion raqamli platforma (startap) loyihasini ishlab chiqish.\n\n## Loyiha bosqichlari va talablari:\n\n### 1-qism: Platforma g'oyasi va infratuzilmasi (M1, M2, M4, M5, M7, M8 - mavzular asosida)\n**G'oya:** Shahar transporti (mikromobilitet, ridehailing), yetkazib berish xizmati yoki qisqa muddatli ijara tizimidagi mavjud muammoni hal qiluvchi yangi platforma o'ylab toping.\n\n**Infratuzilma:** Ushbu platformaning ma'lumotlar bazasi va ishlash mexanizmi nima uchun Bulutli hisoblash (Cloud computing) texnologiyalariga asoslanishi kerakligini va uning 3 ta asosiy afzalligini asoslab bering.\n\n### 2-qism: Texnologik integratsiya (M3, M9, M10 - mavzular asosida)\nTizimingiz qanday qilib quyidagi texnologiyalardan foydalanishini tushuntiring:\n- **IoT (Narsalar interneti):** Tizimingizdagi ob'ektlar (masalan, aqlli skuterlar, uylar yoki avtomobillar) qanday qilib raqamli nazorat qilinadi va ma'lumot almashadi?\n- **Sun'iy intellekt (AI) va algoritm:** Mijozlarga xizmat ko'rsatishda yoki narxlarni belgilashda AI qanday ishlaydi? Algoritm insonlarni kamsitmasligi va ijtimoiy fazoni adolatli shakllantirishi uchun qanday istisno mexanizmlari qo'llaniladi?\n- **Kriptovalyuta va to'lov:** Platformada blokcheyn yoki kriptovalyutadan to'lov tizimi (yoki sodiqlik bonuslari) sifatida foydalanish imkoniyatini tahlil qiling. Bunga ketadigan energiya talablari va ekologik oqibatlarini hisobga oling.\n\n### 3-qism: Ijtimoiy va ekologik tahlil (M6, M11 - mavzular asosida)\n- **"Gig work" va ishchilar huquqi:** Platformangizda ishlovchi kuryerlar yoki haydovchilarning (Gig workers) ijtimoiy himoyasini qanday ta'minlaysiz?\n- **Tizimli ta'sir:** Siz yaratgan texnologiya jamiyatdagi ijtimoiy tengsizlikni va hududiy farqlarni (masalan, markaz va chekka tumanlar o'rtasidagi) kuchaytirib yubormasligi uchun qanday chora-tadbirlar ko'rasiz? Platformaning shahar ekologiyasiga (uglerod izi) ta'siri qanday bo'ladi?\n\n## Topshirish shakli va qoidalari:\n- **Yozma hisobot (Biznes reja/tahlil):** Loyiha yuqoridagi 3 ta qismni to'liq qamrab olgan holda, akademik va professional tilda (Word yoki PDF formatida, kamida 5-7 bet) yozilishi shart.\n- **Taqdimot (Pitch deck):** Loyiha g'oyasini himoya qilish uchun 10-12 ta slayddan iborat taqdimot (PowerPoint) tayyorlanishi kerak.\n\n## Sertifikat berish mezonlari:\nTalaba muvaffaqiyatli o'tishi va maxsus sertifikatga ega bo'lishi uchun loyiha quyidagi mezonlarga javob berishi kerak:\n1. **Komplekslik (30%):** Barcha 11 ta mavzudagi bilimlar loyihada o'zaro mantiqiy bog'langan bo'lishi.\n2. **Innovatsiya va amaliylik (30%):** Taklif qilinayotgan g'oyaning real hayotda, shahar sharoitida qo'llash mumkinligi.\n3. **Tanqidiy fikrlash (40%):** Texnologiyaning nafaqat yutug'i, balki ijtimoiy-ekologik zararlarini ko'ra bilishi va unga yechim bera olishi.\n\n> Eslatma: Loyiha belgilangan muddatda topshirilib, taqdimot komissiya (yoki o'qituvchi) oldida muvaffaqiyatli himoya qilinganidan so'ng, talabaga kursni to'liq o'zlashtirganini tasdiqlovchi sertifikat taqdim etiladi. Avtomatik sertifikat olishingiz uchun pastdagi testda himoya qilganingizni tasdiqlang.\n`;

async function updateDbText() {
  const { error } = await supabase.from('lessons')
    .update({ lecture_text: newText })
    .eq('topic_number', 12);

  if (error) {
    console.error("Error updating lesson 12", error);
  } else {
    console.log("Database update complete for lesson 12 text");
  }
}

updateDbText();
