import { Course, Lesson, Question } from '@/types'

export const COURSE_DATA: Course = {
  id: 'raqamli-texnologiyalar',
  title: 'Raqamli Texnologiyalar va Innovatsiyalar',
  slug: 'raqamli-texnologiyalar',
  description: 'Mustaqil o\'rganish uchun mo\'ljallangan ushbu kurs raqamli texnologiyalar, sun\'iy intellekt, blokcheyn, bulut hisoblash va boshqa zamonaviy innovatsiyalar haqida chuqur bilim beradi.',
  shortDesc: '11 ta mavzu bo\'yicha video darslar, ma\'ruza matnlari, testlar va Yakuniy loyiha',
  thumbnail: '/images/course-thumb.jpg',
  totalLessons: 12,
  totalDuration: '22 soat 30 daqiqa',
  lessons: [],
}

export const LESSONS: Lesson[] = [
  {
    id: "lesson-1",
    topicNumber: 1,
    title: "Kurs haqida umumiy ma'lumot. Raqamli texnologiyalar va ularning rivojlanish bosqichlari",
    slug: "mavzu-1",
    description: "Raqamli iqtisodiyotning mohiyati, rivojlanish tarixi va zamonaviy hayotdagi o'rni",
    videoUrl: "https://www.youtube.com/embed/vbgeyaDR7EU",
    videoDuration: "1:45:00",
    order: 1,
    lectureText: "# Raqamli Iqtisodiyot Asoslari\n\n## Kirish\n\nRaqamli iqtisodiyot — bu axborot-kommunikatsiya texnologiyalari (AKT) asosida faoliyat yurituvchi iqtisodiy tizimdir. U an'anaviy iqtisodiyotdan farqli ravishda, asosan raqamli ma'lumotlar va internet texnologiyalariga tayanadi.\n\n## Raqamli Iqtisodiyotning Asosiy Xususiyatlari\n\n### 1. Ma'lumotlar — yangi \"neft\"\nZamonaviy iqtisodiyotda ma'lumotlar eng qimmatli resurs hisoblanadi. Har kuni 2.5 kvintillion bayt yangi ma'lumot ishlab chiqarilmoqda.\n\n### 2. Platformalar iqtisodiyoti\n- **Amazon** — savdo platformasi\n- **Uber** — transport platformasi\n- **Airbnb** — turar-joy platformasi\n- **Alibaba** — B2B va B2C savdo platformasi\n\n### 3. Iqtisodiy ko'rsatkichlar\n\n| Ko'rsatkich | 2020 | 2025 (prognoz) |\n|-------------|------|-----------------|\n| Hajm (trln $) | 11.5 | 23.3 |\n| Ulushi (%) | 15.5 | 24.3 |\n\n## Raqamli Iqtisodiyotning Rivojlanish Bosqichlari\n\n**1-bosqich (1990-2000):** Internet va elektron tijoratning paydo bo'lishi. Amazon, eBay, Yahoo kabi kompaniyalar vujudga keldi.\n\n**2-bosqich (2000-2010):** Mobil internet, ijtimoiy tarmoqlar. Facebook, Twitter, YouTube platformalari rivojlandi.\n\n**3-bosqich (2010-hozir):** Sun'iy intellekt, Big Data, IoT texnologiyalari. Bulut hisoblash keng qo'llanila boshladi.\n\n## O'zbekistonda Raqamli Iqtisodiyot\n\nO'zbekiston 2030 yilga qadar raqamli iqtisodiyotni rivojlantirish bo'yicha strategik rejani amalga oshirmoqda:\n\n- **E-hukumat** tizimini kengaytirish\n- **IT-parklar** va texnoparklar barpo etish\n- **IT-ta'lim**ni rivojlantirish\n- **Raqamli to'lovlar**ni kengaytirish\n\n## Asosiy Tushunchalar\n\n> **Raqamli transformatsiya** — bu kompaniya yoki tashkilotning an'anaviy biznes modelidan raqamli texnologiyalarga asoslangan modelga o'tish jarayoni.\n\n**Omillar:**\n1. Texnologik tezlanish\n2. Iste'molchilar xulqining o'zgarishi\n3. Raqobat bosimi\n4. COVID-19 pandemiyasining ta'siri\n\n## Xulosa\n\nRaqamli iqtisodiyot bugungi kunda barcha sohalarga kirib bormoqda: sog'liqni saqlash, ta'lim, moliya, sanoat va boshqa ko'plab sohalar. Ushbu jarayonni tushunish va unga moslashish zamonaviy mutaxassis uchun muhim ko'nikma hisoblanadi."
  },
  {
    id: "lesson-2",
    topicNumber: 2,
    title: "Bulutli hisoblash va uning afzalliklari",
    slug: "mavzu-2",
    description: "AI va ML texnologiyalarining asoslari, turlari va amaliy qo'llanilishi",
    videoUrl: "https://www.youtube.com/embed/H8NJQ5CfAEE",
    videoDuration: "2:00:00",
    order: 2,
    lectureText: "# Sun'iy Intellekt va Machine Learning\n\n## Sun'iy Intellekt Nima?\n\nSun'iy intellekt (AI — Artificial Intelligence) — bu kompyuter tizimlarining odamga xos bo'lgan intellektual vazifalarni bajarish qobiliyatidir.\n\n## AI Turlari\n\n### Toraytirilgan AI (Narrow AI)\nFaqat bitta vazifani bajaradi:\n- Yuz tanish tizimi\n- Spam filtri\n- Tarjima dasturlari (Google Translate)\n\n### Umumiy AI (General AI)\nInson kabi turli vazifalarni bajaroladi. Hozircha nazariy konsept.\n\n### Super AI\nInsonda ustun keluvchi AI. Kelgusidagi perspektiva.\n\n## Machine Learning\n\nMachine Learning (ML) — bu kompyuterlarga aniq dasturlash orqali emas, balki ma'lumotlardan o'rganish qobiliyatini berish texnologiyasidir.\n\n### ML Turlari\n\n**1. Nazoratli o'rganish (Supervised Learning)**\n```\nInput: Belgilangan ma'lumotlar (labeled data)\nAlgoritm: Linear Regression, Decision Trees, SVM\nOutput: Prognoz (prediction)\n```\n\n**2. Nazorat qilinmagan o'rganish (Unsupervised Learning)**\n```\nInput: Belgilanmagan ma'lumotlar\nAlgoritm: K-Means, PCA, Autoencoders\nOutput: Klasterlar, yashirin naqshlar\n```\n\n**3. Mustahkamlash orqali o'rganish (Reinforcement Learning)**\n```\nAgent → Muhit → Mukofot/Jazo → O'rganish\nMisol: AlphaGo, OpenAI Five\n```\n\n## Deep Learning\n\nDeep Learning — bu ko'p qatlamli neyron tarmoqlarga asoslangan ML usuli.\n\n**Qo'llanilishi:**\n- Rasm tanish (Computer Vision)\n- Nutqni qayta ishlash (NLP)\n- Avtonom harakatlanuvchi mashinalar\n- Tibbiy diagnostika\n\n## ChatGPT va LLM\n\nLarge Language Models (LLM) — katta til modellari:\n- **GPT-4** (OpenAI)\n- **Gemini** (Google)\n- **Claude** (Anthropic)\n- **LLaMA** (Meta)\n\n## Amaliy Misollar\n\n> O'zbekistondagi AI qo'llanilishi: MyGov platformasi, Smart City loyihasi, Oson tibbiy diagnostika tizimi.\n\n## Xulosa\n\nAI va ML texnologiyalari tez sur'atlar bilan rivojlanmoqda. 2030 yilga qadar global AI bozori 1.8 trln dollarga yetishi kutilmoqda."
  },
  {
    id: "lesson-3",
    topicNumber: 3,
    title: "Kriptovalyutalar bilan tanishish va ular bilan muhim aloqalar, shu jumladan ularning asosiy diskursiv ramkalari, energiya talablari va geosiyosiy oqibatlarini ko'rib chiqish.",
    slug: "mavzu-3",
    description: "Raqamli pullar evolyutsiyasi, blokcheyn DLT, PoW va PoS, CBDC va global tartibga solish",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:50:00",
    order: 3,
    lectureText: "# Blokcheyn Texnologiyasi va Kriptovalyutalar\n\n## 3.1.1. Raqamli Pullarning Evolyutsiyasi: David Chaumdan Satoshi Nakamotogacha\n\nRaqamli pullarning evolyutsiyasi o'n yilliklar davomida kriptograflar, matematiklar va iqtisodchilarning birgalikdagi intilishlari mahsuli bo'lib, bu jarayon 1980-yillarning boshlarida \"sayferpanklar\" harakatining paydo bo'lishi bilan bevosita bog'liqdir.\n\n**David Chaum (1983)** — \"Blind Signatures for Untraceable Payments\" ilmiy ishi bilan raqamli pullarning tamal toshini qo'ydi. U anonimlik va xavfsizlikni ta'minlovchi **DigiCash** tizimini yaratdi — markazlashgan bank tizimidan mustaqil bo'lgan birinchi elektron pul prototipi. Biroq tizim markazlashtirilgan bo'lgani uchun 1990-yillar oxiriga kelib tijoriy muvaffaqiyatsizlikka uchradi.\n\n**Adam Back (1997)** — **Hashcash** tizimini taklif qildi. Elektron pochtadagi spamga qarshi kurashish vositasi sifatida yaratilgan bu tizim zamonaviy kriptovalyutalarning o'zagi bo'lgan **Proof of Work (PoW)** algoritmining ilk ko'rinishini taqdim etdi.\n\n**Wei Dai (1998)** — **\"b-money\"** loyihasida birinchi marta markazsizlashtirilgan, har bir ishtirokchi o'z reyestriga ega bo'lgan pul tizimini tasvirlab berdi.\n\n**Nick Szabo** — **\"Bit Gold\"** kontsepsiyasini ishlab chiqdi — raqamli tanqislik (scarcity) va matematik murakkablikka asoslangan, bitkoinga eng yaqin tizim.\n\n**Satoshi Nakamoto (2008-yil 31-oktabr)** — global moliyaviy inqiroz pallasida \"Bitcoin: A Peer-to-Peer Electronic Cash System\" oq qog'ozini e'lon qildi. U oldingi barcha g'oyalarni — Chaumning anonimligini, Backning PoW algoritmini, Szaboning raqamli tanqisligini — yagona tizimga birlashtirdi.\n\n**2009-yil 3-yanvar** — bitkoinning birinchi **\"Genesis Block\"** i yaratildi, yangi raqamli moliya erasi boshlandi.\n\n---\n\n## 3.1.2. Blokcheyn — Kriptovalyutalarning \"Umurtqa Pog'onasi\": Taqsimlangan Reyestr Texnologiyasi (DLT)\n\nBlokcheyn — bu ma'lumotlarni **taqsimlangan reyestr texnologiyasi (Distributed Ledger Technology — DLT)** asosida saqlash usuli. Barcha tranzaksiyalar xronologik tartibda zanjirsimon bog'langan bloklar ko'rinishida saqlanadi va tarmoqning har bir ishtirokchisi ma'lumotlar bazasining nusxasiga ega.\n\n**Har bir blok quyidagilarni saqlaydi:**\n1. **Ma'lumotlar** — tranzaksiyalar ro'yxati\n2. **Xesh (Hash)** — blokning noyob identifikatori\n3. **Oldingi blokning xeshi** — zanjirning uzviyligi\n\n**Xesh funksiyasi** — har qanday hajmdagi ma'lumotni qat'iy belgilangan uzunlikdagi noyob belgilar qatoriga aylantiruvchi matematik algoritm. Blok ichidagi hatto birgina belgining o'zgarishi butun zanjirning buzilishiga olib keladi.\n\n### Blokcheynning asosiy xususiyatlari:\n- **Markazsizlashuv** — yagona nazorat markazi yo'q\n- **Shaffoflik** — har bir ishtirokchi zanjirni boshidan oxirigacha kuzatishi mumkin\n- **O'zgartirib bo'lmaslik** — ma'lumotlarni soxtalashtirish uchun butun zanjirni qayta hisoblash kerak\n- **Ishonchsiz muhitda ishonch** (Trustless Environment) — vositachilarsiz ishlash\n\n### Tarmoq arxitekturasi:\n\n**A — Markazlashgan tarmoq (Centralized):** Barcha ma'lumotlar bitta markaziy tugun orqali o'tadi. Zaif nuqta — agar markaz ishdan chiqsa, butun tizim to'xtaydi.\n\n**B — Markazsizlashgan tarmoq (Decentralized):** Bir nechta mahalliy hublar mavjud. Markazlashgan modelga qaraganda chidamliroq.\n\n**C — Taqsimlangan tarmoq (Distributed):** Blokcheyn texnologiyasining asosi. Hech qanday markaziy boshqaruv organi yo'q, ma'lumotlar barcha ishtirokchilarda bir xil nusxada saqlanadi.\n\n---\n\n## 3.1.3. Konsensus Mexanizmlari: PoW va PoS\n\n### Ish Isboti (Proof of Work — PoW)\n\nBirinchi konsensus algoritmi, bitkoinning asosi. Maynerlar yangi blokni zanjirga qo'shish uchun murakkab matematik masalani yechishi kerak.\n\n**Afzalliklari:**\n- O'ta yuqori xavfsizlik\n- 51% hujumdan himoya (ulkan resurs talab qiladi)\n\n**Kamchiliklari:**\n- Ulkan energiya iste'moli\n- Past tranzaksiya tezligi (skalabillik)\n\n### Ulush Isboti (Proof of Stake — PoS)\n\nPoW ga muqobil. Validatorlar o'z kripto-aktivlarini \"steyking\" qilib, blok tasdiqlash huquqiga ega bo'ladilar.\n\n**Afzalliklari:**\n- 99%+ energiya samaradorligi\n- Tezroq va arzonroq tranzaksiyalar\n\n**Kamchiliklari:**\n- \"Boylar yanada boyiydi\" — markazlashuv xavfi\n\n**Taqqoslash jadvali:**\n\n| Xususiyat | PoW | PoS |\n|-----------|-----|-----|\n| Resurs | Hisoblash quvvati (ASIC) | Steyking (tangalar) |\n| Energiya | Juda ko'p | Minimal |\n| Xavfsizlik | 51% hisoblash quvvati kerak | 51% tangalar kerak |\n| Misol | Bitcoin | Ethereum 2.0 |\n\n**Ethereum \"The Merge\" (2022-yil 15-sentabr)** — Ethereum PoW dan PoS ga o'tdi. Natija: energiya iste'moli **99.95%** ga kamaydi.\n\n---\n\n## 3.2.1. \"Raqamli Oltin\" Diskursi\n\nBitkoin \"raqamli oltin\" sifatida talqin qilinadi — uzoq muddatli boylikni saqlash va inflyatsiyadan himoyalanish aktivi.\n\n**O'xshash xususiyatlar:**\n\n| Xususiyat | Oltin | Bitkoin |\n|-----------|-------|---------|\n| Cheklangan miqdor | Geologik cheklov | 21 mln dona |\n| Chidamlilik | Kimyoviy barqarorlik | Raqamli doimiylik |\n| Bo'linuvchanlik | Cheklangan | 1 BTC = 100 mln Satoshi |\n| Portativlik | Og'ir | Seed-fraza bilan osongina |\n\n**Xalving (Halving)** — har 210 000 blokdan keyin yangi tangalar ishlab chiqarish ikki barobar kamayadi. Bu raqamli tanqislikni ta'minlaydi va deflyatsion tabiati bilan investorlar ishonchini oshiradi.\n\n---\n\n## 3.2.2. Texno-libertarianizm va Kiber-Anarxizm\n\nKriptovalyutalar chuqur ijtimoiy-siyosiy falsafaga tayangan. **Texno-libertarianizm** shaxsiy erkinlikni oliy qadriyat deb biladi; **kiber-anarxizm** kriptografiyani ozodlik vositasi sifatida ko'radi.\n\n> **Timoti Mey (1988):** \"Kripto-Anarxist Manifest\" — kriptografiya hukumatlarning nazorat qilish qobiliyatini yo'qqa chiqaradi.\n\n**Markazsizlashtirish** = nafaqat texnik yechim, balki pul emissiyasi monopoliyasini sindirish vositasi. Satoshi Nakamotoning maqsadi ham aynan shu edi.\n\n---\n\n## 3.2.3. Moliyaviy Inklyuzivlik: Unbanked Aholi uchun Imkoniyatlar\n\nDunyo miqyosida milliardlab insonlar rasmiy bank hisobiga ega emas. Sabablari:\n- Shaxsni tasdiqlovchi hujjatlar yo'qligi\n- Bank infratuzilmasining uzoqligi\n- Yuqori xizmat haqlari\n\nKriptovalyutalar bu to'siqlarni bartaraf etadi: **internetga ulangan har qanday smartfon egasi** hech qanday vositachisiz global moliya tizimiga ulanishi mumkin.\n\n**Stabilkoinlar** — milliy valyutalari yuqori inflyatsiyaga uchrayotgan rivojlanayotgan mamlakatlarda jamg'armalarni himoya qilishning raqamli vositasi.\n\n---\n\n## 3.2.4. Spekulyativ Aktiv va \"Ko'pik\" Diskursi\n\nTanqidchilar nuqtai nazaridan kriptovalyutalar:\n- Real iqtisodiy qiymatga ega bo'lmagan spekulyativ aktivlar\n- Tarixiy \"lolalar isitmasi\" (Tulip Mania) ga o'xshash\n- **\"Katta ahmoq nazariyasi\"** (Greater Fool Theory) ga asoslangan\n\n**Asosiy xavflar:**\n- O'ta yuqori volatillik (narxlar keskin o'zgarishi)\n- FOMO psixologiyasi\n- Noqonuniy operatsiyalar uchun ishlatilish xavfi\n- Ekologik zarar (PoW)\n\n---\n\n## 3.3.1. Mayning Jarayonining Energiya Sig'imi\n\nBitkoin mayningi **SHA-256 xesh-funksiyasi** yechimini topish uchun soniyada trillionlab matematik amallarni bajarishni talab qiladi. **\"Murakkablikni moslashtirish\"** (Difficulty Adjustment) mexanizmi tarmoq quvvati ortgani sayin masalani qiyinlashtiradi.\n\nNatija: global miqyosda Bitkoin iste'mol qiladigan elektr energiyasi ko'plab rivojlangan davlatlarning yillik iste'moli bilan tenglashadi.\n\n---\n\n## 3.3.2. \"Uglerod Izi\" va Iqlim O'zgarishi\n\n**Uglerod izi (Carbon Footprint)** — mayning jarayonida sarflanadigan elektr energiyasi ishlab chiqarish natijasida atmosferaga chiqariladigan CO₂ miqdori.\n\n**Qo'shimcha muammo — Elektron chiqindilar (e-waste):**\n- ASIC qurilmalar tezda eskiradi\n- Boshqa maqsadlarda ishlatish imkoni yo'q\n- Har yili minglab tonna toksik chiqindi\n\n---\n\n## 3.3.3. Yashil Mayning (Green Mining)\n\nQayta tiklanuvchi energiya manbalariga o'tish:\n- ☀️ Quyosh energiyasi\n- 💨 Shamol energiyasi\n- 💧 Gidroenergetika\n- 🌋 Geotermal energiya\n\n**Afzalligi:** Ortiqcha yoki to'lib-toshgan energiya (\"stranded energy\") dan samarali foydalanish. Masalan, uzoq hududlardagi GES da hosil bo'lgan va umumiy tarmoqqa yetib bormaydigan energiyani mayningga yo'naltirish.\n\n> Bugungi kunda global bitkoin mayning tarmog'ining **50%+ i** barqaror energiya manbalariga tayangan.\n\nO'zbekiston: Quyosh energetikasi imkoniyatlari yuqori — yashil mayning uchun katta istiqbol.\n\n---\n\n## 3.3.4. Ethereum 2.0 (PoS) ga O'tish: \"The Merge\"\n\n**2022-yil 15-sentabr** — \"The Merge\":\n- PoW → PoS ga to'liq o'tish\n- Energiya iste'moli: **99.95%** ga kamaydi\n- Ulkan mayning fermalariga bo'lgan ehtiyoj yo'qoldi\n\nBu raqamli innovatsiyalarning ekologik mas'uliyat bilan integratsiyasining eng yirik laboratoriya tajribasi hisoblanadi.\n\n---\n\n## 3.4.1. Milliy Suverenitet va Kriptovalyutalar\n\nMarkaziy banklar tarixan pul emissiyasi va pul-kredit siyosatida mutloq monopoliyaga ega. Kriptovalyutalar bu leverlarni chetlab o'tadi:\n\n**Asosiy xavotirlar:**\n- Soliq yig'ishning qiyinlashishi\n- Iqtisodiy rag'batlantirishning samarasizligi\n- Moliyaviy barqarorlik nazoratining zaiflashishi\n\n**Javob: CBDC (Markaziy bank raqamli valyutalari)** — markazsizlashgan tizimlar qulayliklarini saqlab, pul ustidan davlat nazoratini qayta tiklash.\n\n---\n\n## 3.4.2. Sanksiyalarni Aylanib O'tish: Kripto \"Iqtisodiy Qurol\" Sifatida\n\nKriptovalyutalar zamonaviy sanksiyalar mexanizmlarini murakkablashtiradi:\n- SWIFT kabi markazlashgan tizimlardan foydalanmaslik imkoni\n- Transchegaraviy P2P o'tkazmalar\n- Blokirovka qilish uchun markaziy organ yo'q\n\n**Javob:** FATF standartlari, \"on-chain\" tahliliy vositalar, kiber-iqtisodiy razvedka.\n\n---\n\n## 3.4.3. El Salvador Tajribasi: Bitcoin Davlat Valyutasi Sifatida\n\n**2021-yil 7-sentabr** — El Salvador Bitkoinni rasmiy to'lov vositasi sifatida tan olgan dunyodagi birinchi davlat.\n\n**Maqsadlar:**\n- Unbanked aholini moliya tizimiga integratsiya (70%+)\n- Remittances komissiyalarini kamaytirish (YIM ning 20-25%)\n- Xorijiy investitsiyalarni jalb qilish\n\n**Natijalar:**\n- ✅ Turizm ~30% o'sdi\n- ✅ \"Bitcoin Beach\" texnologik klasterlar\n- ❌ Aholining past raqamli savodxonligi skeptitsizmni oshirdi\n- ❌ IMF va Jahon banki moliyaviy xavflar haqida ogohlantirdi\n\n**Xulosa:** Texnologiya yetarli emas — raqamli ta'lim, huquqiy infratuzilma va makroiqtisodiy xavf boshqaruvi zarur.\n\n---\n\n## 3.4.4. Markaziy Bank Raqamli Valyutalari (CBDC)\n\n**CBDC** — an'anaviy naqd pullarning raqamli ekvivalenti, davlat tomonidan kafolatlangan.\n\n### CBDC va Kriptovalyutalarning Qiyosiy Tahlili\n\n| Xususiyat | Kriptovalyutalar | CBDC |\n|-----------|-----------------|------|\n| Boshqaruv | Markazsizlashgan | Markazlashgan (MB) |\n| Kafolat | Hech kimniki emas | Davlat majburiyati |\n| Qiymat | Volatil (bozor) | Barqaror (milliy valyuta) |\n| Anonimlik | Psevdonim | Cheklangan (davlat nazorati) |\n| Texnologiya | Ochiq blokcheyn | Yopiq/Gibrid DLT |\n| Maqsad | Muqobil moliya | To'lov modernizatsiyasi |\n\n**Misollar:**\n- 🇨🇳 **Xitoy Raqamli Yuani (e-CNY)** — 100 mln+ foydalanuvchi (2026)\n- 🇺🇿 **O'zbekiston \"Raqamli So'm\"** — moliya shaffofligini oshirish, yashirin iqtisodiyotni kamaytirish\n\n---\n\n## 3.5.1. Global Tartibga Solish Trendlari\n\n### AQSh (SEC)\n- Kripto-aktivlarni \"qimmatli qog'oz\" deb hisoblaydi\n- **\"Xoui testi\"** (Howey Test) mezonlarini qo'llaydi\n- 2024-2025: yangi yo'riqnomalar bilan shaffoflik oshdi\n\n### Yevropa Ittifoqi (MiCA)\n**Markets in Crypto-Assets** — dunyo uchun \"oltin standart\":\n- Kripto-aktivlarni aniq klassifikatsiyalash\n- CASP (xizmat ko'rsatuvchi provayderlar) litsenziyalash\n- Iste'molchilar xavfsizligi\n- Yagona huquqiy makon\n\n### Xitoy\n- 2021: barcha kripto-tranzaksiyalar noqonuniy, mayning taqiqlangan\n- Lekin: blokcheyn texnologiyasi (kriptovalyutasiz) qo'llaniladi\n- Davlat nazoratidagi e-CNY va BSN rivojlantirilmoqda\n\n---\n\n## 3.5.2. O'zbekistonda Kripto-Aktivlar: NAPP Roli\n\n**Istiqbolli Loyihalar Agentligi (NAPP)** — O'zbekistonda kripto-aktivlar sohasida yagona vakolatli organ.\n\n**Huquqiy asos:** Prezident Farmoni PF-121 (2022-yil 27-aprel).\n\n**Tartibga solish modeli:** \"Regulatory Sandbox\" — innovatsion loyihalarni maxsus huquqiy rejim ostida sinovdan o'tkazish.\n\n**Litsenziyalanadigan faoliyat turlari:**\n- Kripto-birjalar\n- Kripto-do'konlar\n- Kripto-depozitariylar\n- Mayning-pullar\n\n**Mayning:** Faqat yuridik shaxslar, yashil energiya orqali. Jismoniy shaxslarga taqiqlangan.\n\n**Soliq imtiyozi:** Kripto-aktivlar aylanmasidan olingan daromadlar soliqqa tortilmaydi — xalqaro investorlar uchun jozibador.\n\n---\n\n## 3.5.3. O'zbekistonda Kripto-Aktivlarni Sotib Olish: Amaliy Ko'rsatmalar\n\n**Asosiy qoida:** Barcha operatsiyalar faqat NAPP litsenziyasiga ega milliy provayderlar orqali.\n\n**Provayderlar turlari:**\n- **Kripto-birjalar** — kotirovka, savdo, ayirboshlash\n- **Kripto-do'konlar** — milliy/chet el valyutasida soddalashtirilgan xarid/sotuv\n\n**Xalqaro integratsiya:**\n- O'zbekiston rezidentlariga litsenziyasiz xorijiy birjalarda (Bybit va h.k.) operatsiyalar qonunan **taqiqlangan**\n- **Binance** 2025-yil yanvarda O'zbekiston bilan kelishuvga erishdi — milliy qonunchilik talablariga muvofiq ishlash huquqini oldi (CE #0004 litsenziyali mahalliy hamkor orqali)\n\n**AML/CFT:** Barcha operatsiyalar FATF standartlariga muvofiq kuzatiladi.\n\n---\n\n## Xulosa\n\nBlokcheyn texnologiyasi va kriptovalyutalar raqamli iqtisodiyotning fundamental ustuniga aylandi. David Chaumning 1983-yildagi g'oyasidan boshlab, bugungi CBDC, DeFi va global tartibga solish tizimlarigacha bo'lgan yo'l texnologik innovatsiya va ijtimoiy-siyosiy o'zgarishlarning ajralmas birligi ekanligini ko'rsatadi.\n\n**Asosiy xulosalar:**\n1. Blokcheyn = ishonchsiz muhitda ishonch (Trustless Trust)\n2. PoW → PoS evolyutsiyasi ekologik mas'uliyatni anglatadi\n3. CBDC = davlatning raqamli mustaqilligini saqlash vositasi\n4. O'zbekiston = mintaqada tartibga solishda peshqadam davlat\n5. Moliyaviy inklyuzivlik = kriptovalyutaning ijtimoiy missiyasi"
  },
  {
    id: "lesson-4",
    topicNumber: 4,
    title: "Raqamli platformalar va mikromobilitet. velosiped ijarasi va elektr skuterlar orqali shahar harakatlanish tizimini transformatsiya qilish",
    slug: "mavzu-4",
    description: "Cloud computing asoslari, xizmat modellari va yetakchi provayderlar",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:55:00",
    order: 4,
    lectureText: "# Bulut Hisoblash (Cloud Computing)\n\n## Bulut Hisoblash Nima?\n\nBulut hisoblash — internet orqali hisoblash resurslari (serverlar, saqlash, ma'lumotlar bazalari, tarmoq, dasturiy ta'minot) ni talab bo'yicha taqdim etish texnologiyasidir.\n\n## Xizmat Modellari\n\n### IaaS (Infrastructure as a Service)\nInfratuzilma xizmati sifatida.\n- **Misol:** AWS EC2, Google Compute Engine, Azure VMs\n- **Kim uchun:** IT mutaxassislari, DevOps\n\n### PaaS (Platform as a Service)\nPlatforma xizmati sifatida.\n- **Misol:** Heroku, AWS Elastic Beanstalk, Google App Engine\n- **Kim uchun:** Dasturchilar\n\n### SaaS (Software as a Service)\nDasturiy ta'minot xizmati sifatida.\n- **Misol:** Gmail, Salesforce, Microsoft 365, Zoom\n- **Kim uchun:** Barcha foydalanuvchilar\n\n## Joylashuv Modellari\n\n| Model | Tavsif | Misol |\n|-------|---------|-------|\n| Public Cloud | Umumiy foydalanish | AWS, Azure, GCP |\n| Private Cloud | Tashkilot ichki | VMware, OpenStack |\n| Hybrid Cloud | Aralash | AWS Outposts |\n| Multi-Cloud | Bir nechta provayder | Ko'pgina katta kompaniyalar |\n\n## Yetakchi Provayderlar\n\n### Amazon Web Services (AWS)\n- Bozor ulushi: ~32%\n- 200+ xizmat\n- 99 ta mavjudlik zonasi\n\n### Microsoft Azure\n- Bozor ulushi: ~23%\n- Microsoft mahsulotlari integratsiyasi\n- Hybrid cloud yechimlar\n\n### Google Cloud Platform (GCP)\n- Bozor ulushi: ~12%\n- AI/ML xizmatlari ustunligi\n- BigQuery, Kubernetes\n\n## Docker va Kubernetes\n\n**Docker** — konteynerizatsiya platformasi:\n```dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n```\n\n**Kubernetes (K8s)** — konteyner orkestratsiyasi:\n- Avtomatik masshtablash\n- O'z-o'zini tiklash\n- Load balancing\n\n## Afzalliklari\n\n1. **Moslashuvchanlik** — resurlarni kerakicha oshirish/kamaytirish\n2. **Xarajat tejash** — kapital xarajatlar o'rniga operatsion\n3. **Ishonchlillik** — yuqori mavjudlik (99.99% SLA)\n4. **Xavfsizlik** — professional himoya\n\n## O'zbekistonda Bulut Hisoblash\n\n**UzCloud** — milliy bulut platforma\n- Davlat idoralari uchun\n- Ma'lumotlar mahalliy serverda\n- O'zbek tilidagi qo'llab-quvvatlash\n\n## Xulosa\n\nBulut hisoblash zamonaviy IT infratuzilmasining asosiga aylandi. 2026 yilga qadar global bozor $947 milliardga yetishi kutilmoqda."
  },
  {
    id: "lesson-5",
    topicNumber: 5,
    title: "Raqamli platformalar asosidagi ridehailing xizmatlari. Shahar transport tizimi va ekologiyaga ta'siri (Uber, Lyft, Yandex Go, Bolt) platformalari",
    slug: "mavzu-5",
    description: "Kiberxavfsizlik tahdidlari, himoya usullari va xavfsiz dasturlash",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "2:10:00",
    order: 5,
    lectureText: "# Kiberxavfsizlik Asoslari\n\n## Kiberxavfsizlik Nima?\n\nKiberxavfsizlik — kompyuter tizimlari, tarmoqlar va ma'lumotlarni ruxsatsiz kirish, o'g'irlash yoki buzish kabi kiber tahdidlardan himoya qilish amaliyotidir.\n\n## Asosiy Tahdid Turlari\n\n### Zararli Dasturlar (Malware)\n- **Virus** — o'z-o'zini ko'paytiruvchi kod\n- **Worm** — tarmoq orqali tarqaluvchi\n- **Trojan** — foydali dastur sifatida yashiringan\n- **Ransomware** — ma'lumotlarni shifrlab pul talab qiluvchi\n- **Spyware** — josuslik dasturi\n\n### Fishing (Phishing)\nAldamchi email, SMS yoki saytlar orqali maxfiy ma'lumot o'g'irlash.\n\n```\nFishing emaili misoli:\nMavzu: \"Hisobingiz bloklanmoqda!\"\n\"Quyidagi havolaga kiring va ma'lumotlaringizni tasdiqlang...\"\n⚠️ Bu fishing! Hech qachon bunday xabarlarga ishonmang!\n```\n\n### SQL Injection\n```sql\n-- Zaiflik misoli\nSELECT * FROM users WHERE username = '$input';\n\n-- Hujum: input = \"admin' OR '1'='1\"\nSELECT * FROM users WHERE username = 'admin' OR '1'='1';\n-- Barcha foydalanuvchilarni qaytaradi!\n\n-- Himoya: Prepared Statements\n$stmt = $pdo->prepare(\"SELECT * FROM users WHERE username = ?\");\n$stmt->execute([$input]);\n```\n\n## CIA Triadi\n\n**Maxfiylik (Confidentiality):**\n- Ma'lumotlarga faqat vakolatli shaxslar kirishi\n\n**Yaxlitlik (Integrity):**\n- Ma'lumotlar o'zgartirilmasligi\n\n**Mavjudlik (Availability):**\n- Tizimlar doimo ishlashi\n\n## Kriptografiya\n\n### Simmetrik Shifrlash\n```\nAES-256: Bir kalit (shifrlash va deshifrlash uchun)\nTez, lekin kalit almashish muammosi\n```\n\n### Asimmetrik Shifrlash\n```\nRSA, ECC: Ochiq va maxfiy kalit juftligi\nHTTPS, raqamli imzolar uchun\n```\n\n### Hashing\n```\nSHA-256: \"password\" → \"5e884898da...\"\nBir tomonlama, parollarni saqlash uchun\n```\n\n## OWASP Top 10\n\n1. Injection\n2. Broken Authentication\n3. Sensitive Data Exposure\n4. XML External Entities\n5. Broken Access Control\n6. Security Misconfiguration\n7. XSS (Cross-Site Scripting)\n8. Insecure Deserialization\n9. Known Vulnerabilities\n10. Insufficient Logging\n\n## Xavfsizlik Amaliyotlari\n\n**Kuchli parol:**\n- Kamida 12 belgi\n- Katta/kichik harflar, raqamlar, belgilar\n- Har bir sayt uchun alohida\n- Password manager ishlatish\n\n**Ikki faktorli autentifikatsiya (2FA):**\n- SMS kodi\n- Authenticator ilovasi (Google Authenticator)\n- Apparat kaliti (YubiKey)\n\n## Penetration Testing\n\n**Ethical Hacking** — ruxsat asosida tizimni tekshirish:\n1. Reconnaissance (Razvedka)\n2. Scanning (Skanerlash)\n3. Exploitation (Ekspluatatsiya)\n4. Post-Exploitation\n5. Reporting (Hisobot)\n\n## Xulosa\n\nKiberxavfsizlik har bir tashkilot va shaxs uchun muhim masala. 2025 yilda global kiberxavfsizlik bozori $212 milliardga yetdi."
  },
  {
    id: "lesson-6",
    topicNumber: 6,
    title: "Raqamli platformalarda “Gig work” ishlash: Tovarlar va xizmatlarning shahar bo'ylab harakati, ijtimoiy va ekologik ta'sirlar",
    slug: "mavzu-6",
    description: "Big Data texnologiyalari, Hadoop, Spark va ma'lumotlar tahlili usullari",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:40:00",
    order: 6,
    lectureText: "# Big Data va Ma'lumotlar Tahlili\n\n## Big Data Nima?\n\nBig Data — an'anaviy ma'lumotlar bazasi vositalari bilan qayta ishlash qiyin bo'lgan katta hajmdagi ma'lumotlar to'plamidir.\n\n## 5V Modeli\n\n| V | Ta'rif | Misol |\n|---|---------|-------|\n| **Volume** | Hajm | Petabaytlar |\n| **Velocity** | Tezlik | Real-time oqimlar |\n| **Variety** | Xilma-xillik | Tuzilgan/tuzilmagan |\n| **Veracity** | Ishonchlilik | Ma'lumotlar sifati |\n| **Value** | Qiymat | Biznes foydasi |\n\n## Hadoop Ekotizimi\n\n**HDFS (Hadoop Distributed File System):**\n- Katta fayllarni bloklarga bo'lib saqlash\n- Replikatsiya (odatda 3x)\n- Yuqori mavjudlik\n\n**MapReduce:**\n```python\n# So'z soni misoli\ndef map(document):\n    for word in document.split():\n        emit(word, 1)\n\ndef reduce(word, counts):\n    emit(word, sum(counts))\n```\n\n## Apache Spark\n\nSpark — tezkor katta ma'lumotlar qayta ishlash tizimi.\n\n```python\nfrom pyspark.sql import SparkSession\n\nspark = SparkSession.builder.appName(\"Analysis\").getOrCreate()\n\n# CSV o'qish\ndf = spark.read.csv(\"data.csv\", header=True)\n\n# Tahlil\ndf.groupBy(\"category\").agg({\"sales\": \"sum\"}).show()\n```\n\n**Spark vs Hadoop MapReduce:**\n- Spark 100x tezroq (in-memory)\n- Real-time va batch qayta ishlash\n- ML va graph analytics\n\n## Ma'lumotlar Tahlili Jarayoni\n\n1. **Ma'lumot yig'ish** — API, sensorlar, loglar\n2. **Tozalash** — Null qiymatlar, duplikatlar\n3. **Transformatsiya** — Normalizatsiya, agregatsiya\n4. **Tahlil** — Statistika, ML modellari\n5. **Vizualizatsiya** — Grafiklar, dashboard\n\n## Python bilan Tahlil\n\n```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Ma'lumot yuklash\ndf = pd.read_csv('students.csv')\n\n# Asosiy statistika\nprint(df.describe())\n\n# Korrelyatsiya\ncorr = df[['score', 'attendance']].corr()\nprint(corr)\n\n# Vizualizatsiya\ndf['score'].hist(bins=20)\nplt.title(\"Ball taqsimoti\")\nplt.show()\n```\n\n## Business Intelligence (BI)\n\n**BI vositalari:**\n- **Tableau** — interaktiv vizualizatsiya\n- **Power BI** — Microsoft ekotizimi\n- **Apache Superset** — ochiq kodli\n- **Metabase** — oddiy va bepul\n\n## Data Warehouse\n\n**OLTP vs OLAP:**\n| | OLTP | OLAP |\n|-|------|------|\n| Maqsad | Tranzaksiyalar | Tahlil |\n| So'rovlar | Oddiy, tez | Murakkab, sekin |\n| Ma'lumot | Joriy | Tarixiy |\n| Misol | MySQL | Snowflake |\n\n## Xulosa\n\nBig Data va ma'lumotlar tahlili zamonaviy biznesning asosiga aylandi. Data Science mutaxassislari eng talab qilinadigan kasblar ro'yxatida."
  },
  {
    id: "lesson-7",
    topicNumber: 7,
    title: "Yetkazib berish va talab bo'yicha iqtisodiyot.",
    slug: "mavzu-7",
    description: "IoT qurilmalari, protokollari va smart home/city loyihalari",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:35:00",
    order: 7,
    lectureText: "# Internet of Things (IoT)\n\n## IoT Nima?\n\nInternet of Things (IoT) — internetga ulangan \"aqlli\" qurilmalar tarmog'i bo'lib, ular bir-biri bilan va bulut bilan ma'lumot almashadi.\n\n## IoT Arxitekturasi\n\n```\n[Qurilmalar/Sensorlar]\n        ↓\n[Gateway/Protokollar]\n        ↓\n[Bulut platformasi]\n        ↓\n[Ilovalar/Tahlil]\n```\n\n## Asosiy Protokollar\n\n| Protokol | Qo'llanish | Xususiyat |\n|----------|-----------|-----------|\n| MQTT | Sensorlar | Yengil, kam kanal |\n| CoAP | Constrained devices | REST-ga o'xshash |\n| HTTP/REST | Web integratsiya | Keng tarqalgan |\n| Zigbee | Smart home | Mesh tarmoq |\n| Z-Wave | Home automation | Ishonchli |\n| BLE | Yaqin masofa | Mobil qurilmalar |\n\n## Arduino va Raspberry Pi\n\n**Arduino (mikrokontroller):**\n```cpp\n// Harorat o'lchash\n#include <DHT.h>\nDHT dht(2, DHT22);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\n\nvoid loop() {\n  float temp = dht.readTemperature();\n  float hum = dht.readHumidity();\n  Serial.print(\"Harorat: \");\n  Serial.print(temp);\n  Serial.println(\"°C\");\n  delay(2000);\n}\n```\n\n**Raspberry Pi (mini kompyuter):**\n- Linux OS\n- Python dasturlash\n- Wi-Fi, Bluetooth\n- Camera moduli\n\n## Smart Home\n\n**Aqlli uy tizimi komponentlari:**\n- Aqlli chiroqlar (Philips Hue)\n- Termostat (Nest, Ecobee)\n- Qulf (August Smart Lock)\n- Kamera (Ring, Arlo)\n- Ovozli yordamchi (Alexa, Google Home)\n\n## Industrial IoT (IIoT)\n\n**Zavod avtomatizatsiyasi:**\n- Predictive Maintenance (oldini oluvchi texnik xizmat)\n- Quality Control (sifat nazorati)\n- Energy Management (energiya boshqaruvi)\n- Supply Chain (ta'minot zanjiri)\n\n## Smart City\n\n**Aqlli shahar komponentlari:**\n- Aqlli svetoforlar\n- Yashil energiya boshqaruvi\n- Chiqindi boshqaruvi\n- Suv tizimi monitoring\n- Jamoat transporti\n\n**Toshkent Smart City loyihasi:**\n- Video kuzatuv tizimi\n- Aqlli svetoforlar\n- Elektron to'lov tizimlari\n\n## IoT Xavfsizligi\n\n**Asosiy muammolar:**\n- Zaif parollar\n- Yangilanmagan firmware\n- Shifrlanmagan ma'lumotlar\n- DDoS hujumlar (Mirai botnet)\n\n**Himoya choralari:**\n- Kuchli autentifikatsiya\n- Ma'lumotlarni shifrlash (TLS)\n- Muntazam yangilashlar\n- Tarmoq segmentatsiyasi\n\n## Xulosa\n\n2030 yilga qadar 30 milliarddan ortiq IoT qurilmalar ishlaydi deb kutilmoqda. IoT sog'liqni saqlash, qishloq xo'jaligi, sanoat va transport sohalarini o'zgartirmoqda."
  },
  {
    id: "lesson-8",
    topicNumber: 8,
    title: "Raqamli platformalarda qisqa muddatli ijara: Uy-joy bozori, arzonlik va shahar boshqaruviga ta'siri",
    slug: "mavzu-8",
    description: "iOS va Android dasturlash, React Native va Flutter texnologiyalari",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "2:05:00",
    order: 8,
    lectureText: "# Mobil Dasturlash\n\n## Mobil Ekotizim\n\n**Bozor ulushi (2024):**\n- Android: ~72%\n- iOS: ~27%\n- Boshqa: ~1%\n\n## Native Dasturlash\n\n### Android (Kotlin/Java)\n```kotlin\n// Kotlin - MainActivity\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        val button: Button = findViewById(R.id.btnHello)\n        button.setOnClickListener {\n            Toast.makeText(this, \"Salom Dunyo!\", Toast.LENGTH_SHORT).show()\n        }\n    }\n}\n```\n\n### iOS (Swift)\n```swift\n// Swift - ViewController\nimport UIKit\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var label: UILabel!\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        label.text = \"Salom iOS!\"\n    }\n\n    @IBAction func buttonTapped(_ sender: Any) {\n        label.text = \"Bosildi!\"\n    }\n}\n```\n\n## Cross-Platform Yechimlar\n\n### React Native\nFacebook tomonidan ishlab chiqilgan, JavaScript asosida:\n\n```jsx\nimport React, { useState } from 'react';\nimport { View, Text, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Hisoblagich: {count}</Text>\n      <Button title=\"+\" onPress={() => setCount(count + 1)} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },\n  title: { fontSize: 24, marginBottom: 20 },\n});\n```\n\n### Flutter\nGoogle tomonidan ishlab chiqilgan, Dart tili:\n\n```dart\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: Text('Flutter App')),\n        body: Center(\n          child: Text(\n            'Salom Flutter!',\n            style: TextStyle(fontSize: 24),\n          ),\n        ),\n      ),\n    );\n  }\n}\n```\n\n## Taqqoslash\n\n| Xususiyat | Native | React Native | Flutter |\n|-----------|--------|-------------|---------|\n| Tezlik | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |\n| UI | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |\n| Rivojlanish | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |\n| Xarajat | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ |\n\n## App Store va Google Play\n\n**Nashr qilish jarayoni:**\n1. Dasturni sertifikat bilan imzolash\n2. Screenshot va tavsif tayyorlash\n3. App Store / Play Store'ga yuklash\n4. Ko'rib chiqish (review) — 1-3 kun\n5. Nashr etish\n\n**Monetizatsiya:**\n- Bepul + reklama (AdMob)\n- Premium (bir martalik to'lov)\n- Obuna (subscription)\n- In-app purchases\n\n## Mobil UI/UX Prinsiplari\n\n1. **Barmoq qulay** (44pt minimal touch target)\n2. **Bir qo'l bilan ishlash** (thumb zone)\n3. **Tez yuklash** (< 3 sekund)\n4. **Oflayn ishlash** (offline-first)\n5. **Push bildirishnomalar** (o'rinli ishlatish)\n\n## Xulosa\n\nMobil ilovalar bozori yiliga $500 milliarddan ortiq daromad keltiradi. Flutter va React Native kross-platforma rivojlanishni soddalashtirdi."
  },
  {
    id: "lesson-9",
    topicNumber: 9,
    title: "Aqlli uy texnologiyalari va Narsalar interneti (IoT). Shaxsiy makondagi raqamli nazorat va uning ijtimoiy-ekologik ta'siri",
    slug: "mavzu-9",
    description: "Zamonaviy web texnologiyalar: React, Next.js, Node.js va REST API",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "2:15:00",
    order: 9,
    lectureText: "# Web Dasturlash Texnologiyalari\n\n## Web Rivojlanish Tarixi\n\n- **1991** — Tim Berners-Lee HTTP va HTML yaratdi\n- **1995** — JavaScript, CSS paydo bo'ldi\n- **2004** — AJAX, Web 2.0 davri\n- **2010** — Node.js, HTML5\n- **2013** — React (Facebook)\n- **2016** — Next.js, Vue.js\n- **2022** — React Server Components, Edge Computing\n\n## Frontend Texnologiyalar\n\n### HTML5\n```html\n<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>S-Study</title>\n</head>\n<body>\n    <header>\n        <nav>Navigatsiya</nav>\n    </header>\n    <main>\n        <article>Kontent</article>\n    </main>\n    <footer>Footer</footer>\n</body>\n</html>\n```\n\n### CSS3 / Tailwind CSS\n```css\n/* CSS o'zgaruvchilar */\n:root {\n    --primary: #3b82f6;\n    --bg: #0a0e1a;\n}\n\n/* Flexbox */\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n/* Grid */\n.grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1.5rem;\n}\n```\n\n### React\n```jsx\nimport { useState, useEffect } from 'react';\n\nfunction CourseCard({ title, students, rating }) {\n    const [isEnrolled, setIsEnrolled] = useState(false);\n\n    return (\n        <div className=\"card\">\n            <h2>{title}</h2>\n            <p>{students} talaba</p>\n            <p>Reyting: {rating}/5</p>\n            <button onClick={() => setIsEnrolled(!isEnrolled)}>\n                {isEnrolled ? 'Bekor qilish' : \"Ro'yxatdan o'tish\"}\n            </button>\n        </div>\n    );\n}\n```\n\n## Next.js 14\n\n**App Router:**\n```tsx\n// app/courses/[id]/page.tsx\ninterface Props {\n    params: { id: string }\n}\n\nexport default async function CoursePage({ params }: Props) {\n    const course = await getCourse(params.id);\n\n    return (\n        <main>\n            <h1>{course.title}</h1>\n            <p>{course.description}</p>\n        </main>\n    );\n}\n```\n\n**Server Actions:**\n```tsx\nasync function submitTest(formData: FormData) {\n    'use server'\n    const answers = formData.getAll('answer');\n    const result = await gradeTest(answers);\n    redirect(`/results/${result.id}`);\n}\n```\n\n## Backend: Node.js va Express\n\n```javascript\nconst express = require('express');\nconst app = express();\n\napp.use(express.json());\n\n// REST API\napp.get('/api/courses', async (req, res) => {\n    const courses = await db.find('courses');\n    res.json({ success: true, data: courses });\n});\n\napp.post('/api/tests/submit', async (req, res) => {\n    const { userId, answers } = req.body;\n    const result = await gradeTest(userId, answers);\n    res.json({ success: true, result });\n});\n\napp.listen(3000, () => console.log('Server ishlamoqda'));\n```\n\n## Ma'lumotlar Bazalari\n\n**SQL (PostgreSQL, MySQL):**\n```sql\nCREATE TABLE students (\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    student_id VARCHAR(20),\n    created_at TIMESTAMP DEFAULT NOW()\n);\n\nSELECT s.name, AVG(t.percentage) as avg_score\nFROM students s\nJOIN test_results t ON s.id = t.student_id\nGROUP BY s.name\nORDER BY avg_score DESC;\n```\n\n**NoSQL (MongoDB):**\n```javascript\n// Document misoli\n{\n  \"_id\": \"ObjectId(...)\",\n  \"studentId\": \"U12345\",\n  \"name\": \"Ali Valiyev\",\n  \"progress\": {\n    \"lesson1\": { \"watched\": true, \"score\": 85 },\n    \"lesson2\": { \"watched\": false, \"score\": null }\n  }\n}\n```\n\n## REST API Dizayn\n\n**HTTP metodlari:**\n- GET /api/courses — barcha kurslar\n- GET /api/courses/:id — bitta kurs\n- POST /api/courses — yangi kurs\n- PUT /api/courses/:id — yangilash\n- DELETE /api/courses/:id — o'chirish\n\n**Status kodlar:**\n- 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error\n\n## Xulosa\n\nWeb dasturlash tezkor rivojlanmoqda. Next.js, TypeScript, Tailwind CSS zamonaviy web ilovalar uchun standartga aylandi."
  },
  {
    id: "lesson-10",
    topicNumber: 10,
    title: "Algoritmlar va sun'iy intellekt (AI). Raqamli tizimlarning ijtimoiy fazoni shakllantirishdagi roli va istisno qilish mexanizmlari",
    slug: "mavzu-10",
    description: "Agile, Scrum, DevOps va CI/CD jarayonlari",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:45:00",
    order: 10,
    lectureText: "# Agile va DevOps Metodologiyalari\n\n## Waterfall vs Agile\n\n**Waterfall (an'anaviy):**\n```\nTahlil → Dizayn → Ishlab chiqish → Test → Deploy\n(6-12 oy)\n```\n\n**Agile (zamonaviy):**\n```\nSprint 1 (2 hafta): Plan → Dev → Test → Deploy\nSprint 2 (2 hafta): Plan → Dev → Test → Deploy\n...\n(Iterativ, moslashuvchan)\n```\n\n## Agile Manifesti (2001)\n\n**Qadriyatlar:**\n1. Jarayonlar va vositalar ustida **shaxslar va o'zaro munosabatlar**\n2. Hujjatlar ustida **ishlaydigan dasturiy ta'minot**\n3. Shartnoma muzokaralari ustida **mijoz hamkorligi**\n4. Rejaga amal qilish ustida **o'zgarishlarga javob berish**\n\n## Scrum Framework\n\n**Rollar:**\n- **Product Owner** — mahsulot egasi\n- **Scrum Master** — jarayon boshqaruvchisi\n- **Development Team** — ishlab chiquvchilar (3-9 kishi)\n\n**Hodisalar:**\n1. **Sprint Planning** — sprint rejalashtirish (4 soat)\n2. **Daily Standup** — kunlik uchrashuv (15 daqiqa)\n3. **Sprint Review** — natijalarni ko'rsatish\n4. **Sprint Retrospective** — jarayonni takomillashtirish\n\n**Artefaktlar:**\n- **Product Backlog** — barcha vazifalar ro'yxati\n- **Sprint Backlog** — joriy sprint vazifalari\n- **Increment** — ishlaydigan mahsulot versiyasi\n\n## Kanban\n\nVizual ish boshqarish tizimi:\n\n```\n| To Do | In Progress | Review | Done |\n|-------|-------------|--------|------|\n| Task1 | Task3       | Task5  | Task6|\n| Task2 | Task4       |        | Task7|\n```\n\n**WIP limiti:** In Progress ustunda maksimal 3 ta vazifa.\n\n## DevOps\n\nDevOps — Development va Operations jamoalarini birlashtiruvchi madaniyat va amaliyotlar to'plami.\n\n### DevOps Siklasi\n\n```\nPlan → Code → Build → Test → Release → Deploy → Operate → Monitor\n                ←————————————————————————————————————————————————\n```\n\n## CI/CD Pipeline\n\n**GitHub Actions misoli:**\n```yaml\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm install\n      - run: npm test\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - name: Deploy to Vercel\n        run: vercel --prod\n```\n\n## Vositalar\n\n| Kategoriya | Vositalar |\n|-----------|---------|\n| Version Control | Git, GitHub, GitLab |\n| CI/CD | Jenkins, GitHub Actions, CircleCI |\n| Konteyner | Docker, Kubernetes |\n| Monitoring | Grafana, Prometheus, DataDog |\n| IaC | Terraform, Ansible |\n\n## Git Workflow\n\n```bash\n# Feature branch yaratish\ngit checkout -b feature/login-page\n\n# O'zgarishlarni saqlash\ngit add .\ngit commit -m \"feat: add login page\"\n\n# Pull Request\ngit push origin feature/login-page\n# GitHub'da PR ochish → Review → Merge\n```\n\n## Xulosa\n\nAgile va DevOps amaliyotlari dasturiy ta'minot sifatini oshiradi va bozorga chiqish vaqtini qisqartiradi. Zamonaviy IT kompaniyalarining 90%+ Agile metodologiyasidan foydalanadi."
  },
  {
    id: "lesson-11",
    topicNumber: 11,
    title: "Raqamli texnologiyalarning ijtimoiy tengsizliklar va hududiy farqlarni shakllantirishdagi tizimli roli",
    slug: "mavzu-11",
    description: "VR, AR, MR texnologiyalari va Metaverse konsepsiyasi",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:30:00",
    order: 11,
    lectureText: "# Metaverse va Virtual Reallik\n\n## Virtual Reallik (VR) Nima?\n\nVirtual Reallik — foydalanuvchini to'liq sun'iy muhitga g'arq qiladigan texnologiya. VR shlemi (headset) yordamida 360° muhitni his qilish mumkin.\n\n## XR Spektri\n\n```\nHaqiqiy dunyo ←————————————→ Virtual dunyo\n    AR          MR          VR\n(Augmented) (Mixed)    (Virtual)\n```\n\n**AR (Augmented Reality) — Kengaytirilgan reallik:**\n- Haqiqiy dunyoga raqamli elementlar qo'shish\n- Misol: Pokemon GO, IKEA Place, Snapchat filtrlari\n\n**MR (Mixed Reality) — Aralash reallik:**\n- Raqamli va haqiqiy ob'ektlar bir-biri bilan ta'sirlanadi\n- Misol: Microsoft HoloLens\n\n**VR (Virtual Reality) — Virtual reallik:**\n- To'liq virtual muhit\n- Misol: Meta Quest, PlayStation VR, Valve Index\n\n## Qurilmalar\n\n| Qurilma | Turi | Narx |\n|---------|------|------|\n| Meta Quest 3 | Standalone VR | $499 |\n| Apple Vision Pro | Spatial Computing | $3,499 |\n| PlayStation VR2 | Console VR | $549 |\n| HTC Vive Pro 2 | PC VR | $799 |\n| Microsoft HoloLens 2 | Enterprise MR | $3,500 |\n\n## Metaverse\n\nMark Zuckerberg 2021 yilda \"Metaverse\" kontsepsiyasini e'lon qildi.\n\n**Metaverse xususiyatlari:**\n- Doimiy virtual dunyo (24/7 ishlaydi)\n- Avatar orqali mavjudlik\n- Raqamli iqtisodiyot (NFT, kriptovalyuta)\n- Ijtimoiy o'zaro ta'sir\n- Cross-platform\n\n**Platformalar:**\n- Meta Horizon Worlds\n- Roblox\n- Fortnite (Epic Games)\n- Decentraland\n- The Sandbox\n\n## Ta'limdagi VR\n\n**VR ta'limning afzalliklari:**\n- Xavfli muhitni simulyatsiya qilish (jarrohlik, uchish)\n- Interaktiv o'rganish\n- Geografiya o'rgatish (virtual sayohat)\n- Tarix (virtual muzey)\n\n**Misol — Stanford VR laboratoriyasi:**\n- Virtual anatomiya darslari\n- Kimyo laboratoriyasi\n- Fizika tajribalari\n\n## VR Dasturlash\n\n**Unity bilan VR:**\n```csharp\nusing UnityEngine;\nusing UnityEngine.XR;\n\npublic class VRController : MonoBehaviour\n{\n    void Update()\n    {\n        // O'ng qo'l controller\n        InputDevice rightHand = InputDevices.GetDeviceAtXRNode(\n            XRNode.RightHand\n        );\n\n        bool triggerPressed;\n        rightHand.TryGetFeatureValue(\n            CommonUsages.triggerButton,\n            out triggerPressed\n        );\n\n        if (triggerPressed)\n        {\n            GrabObject();\n        }\n    }\n}\n```\n\n## O'zbekistonda XR\n\n**Qo'llanilishi:**\n- Ta'lim: Virtual laboratoriyalar (bir necha universitetda)\n- Arxitektura: Virtual bino loyihalashtirish\n- Turizm: Virtual Samarqand, Buxoro\n- Tibbiyot: Jarrohlik simulyatori\n\n## Kelajak\n\n2030 yilga qadar:\n- VR/AR bozori $250 milliard\n- Global Metaverse bozori $800 milliard\n- 5G va edge computing VR sifatini oshiradi\n\n## Xulosa\n\nVR/AR/MR texnologiyalari ta'lim, tibbiyot, arxitektura, o'yin va biznes sohalarini o'zgartirmoqda. Metaverse internet evolyutsiyasining keyingi bosqichi sifatida ko'rilmoqda."
  },
  {
    id: "lesson-12",
    topicNumber: 12,
    title: "YAKUNIY SERTIFIKATLASH LOYIHASI TOPSHIRIG'I",
    slug: "yakuniy-loyiha",
    description: "Sertifikat olish uchun yakuniy loyiha topshirig'i",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "1:50:00",
    order: 12,
    lectureText: "# YAKUNIY SERTIFIKATLASH LOYIHASI TOPSHIRIG'I\n\nLoyiha mavzusi: \"Aqlli, Adolatli va Barqaror Shahar: Yangi Avlod Raqamli Platformasi Konsepsiyasi\"\n\n## Loyihaning maqsadi:\nKurs davomida o'rganilgan barcha raqamli texnologiyalar (Bulutli hisoblash, AI, IoT, Kriptovalyuta) va ularning ijtimoiy-iqtisodiy ta'sirlarini (Gig iqtisodiyot, tengsizlik, ekologiya) amalda qo'llagan holda, zamonaviy shahar muammolaridan birini hal qiluvchi innovatsion raqamli platforma (startap) loyihasini ishlab chiqish.\n\n## LOYIHA BOSQICHLARI VA TALABLARI:\n\n### 1-qism: Platforma g'oyasi va Infratuzilmasi (M1, M2, M4, M5, M7, M8 - mavzular asosida)\n**G'oya:** Shahar transporti (mikromobilitet, ridehailing), yetkazib berish xizmati yoki qisqa muddatli ijara tizimidagi mavjud muammoni hal qiluvchi yangi platforma o'ylab toping.\n\n**Infratuzilma:** Ushbu platformaning ma'lumotlar bazasi va ishlash mexanizmi nima uchun Bulutli hisoblash (Cloud computing) texnologiyalariga asoslanishi kerakligini va uning 3 ta asosiy afzalligini asoslab bering.\n\n### 2-qism: Texnologik Integratsiya (M3, M9, M10 - mavzular asosida)\nTizimingiz qanday qilib quyidagi texnologiyalardan foydalanishini tushuntiring:\n- **IoT (Narsalar interneti):** Tizimingizdagi ob'ektlar (masalan, aqlli skuterlar, uylar yoki avtomobillar) qanday qilib raqamli nazorat qilinadi va ma'lumot almashadi?\n- **Sun'iy Intellekt (AI) va Algoritmlar:** Mijozlarga xizmat ko'rsatishda yoki narxlarni belgilashda AI qanday ishlaydi? Algoritm insonlarni kamsitmasligi va ijtimoiy fazoni adolatli shakllantirishi uchun qanday istisno mexanizmlari qo'llaniladi?\n- **Kriptovalyuta va To'lov:** Platformada blokcheyn yoki kriptovalyutadan to'lov tizimi (yoki sodiqlik bonuslari) sifatida foydalanish imkoniyatini tahlil qiling. Bunga ketadigan energiya talablari va ekologik oqibatlarini hisobga oling.\n\n### 3-qism: Ijtimoiy va Ekologik Tahlil (M6, M11 - mavzular asosida)\n- **\"Gig work\" va Ishchilar huquqi:** Platformangizda ishlovchi kuryerlar yoki haydovchilarning (Gig workers) ijtimoiy himoyasini qanday ta'minlaysiz?\n- **Tizimli ta'sir:** Siz yaratgan texnologiya jamiyatdagi ijtimoiy tengsizlikni va hududiy farqlarni (masalan, markaz va chekka tumanlar o'rtasidagi) kuchaytirib yubormasligi uchun qanday chora-tadbirlar ko'rasiz? Platformaning shahar ekologiyasiga (uglerod izi) ta'siri qanday bo'ladi?\n\n## TOPSHIRISH SHAKLI VA QOIDALARI:\n- **Yozma hisobot (Biznes reja/Tahlil):** Loyiha yuqoridagi 3 ta qismni to'liq qamrab olgan holda, akademik va professional tilda (Word yoki PDF formatida, kamida 5-7 bet) yozilishi shart.\n- **Taqdimot (Pitch Deck):** Loyiha g'oyasini himoya qilish uchun 10-12 ta slayddan iborat taqdimot (PowerPoint) tayyorlanishi kerak.\n\n## SERTIFIKAT BERISH MEZONLARI:\nTalaba muvaffaqiyatli o'tishi va Maxsus Sertifikatga ega bo'lishi uchun loyiha quyidagi mezonlarga javob berishi kerak:\n1. **Komplekslik (30%):** Barcha 11 ta mavzudagi bilimlar loyihada o'zaro mantiqiy bog'langan bo'lishi.\n2. **Innovatsiya va Amaliylik (30%):** Taklif qilinayotgan g'oyaning real hayotda, shahar sharoitida qo'llash mumkinligi.\n3. **Tanqidiy fikrlash (40%):** Texnologiyaning nafaqat yutug'i, balki ijtimoiy-ekologik zararlarini ko'ra bilishi va unga yechim bera olishi.\n\n> Eslatma: Loyiha belgilangan muddatda topshirilib, taqdimot komissiya (yoki o'qituvchi) oldida muvaffaqiyatli himoya qilinganidan so'ng, talabaga kursni to'liq o'zlashtirganini tasdiqlovchi sertifikat taqdim etiladi. Avtomatik sertifikat olishingiz uchun pastdagi testda himoya qilganingizni tasdiqlang.\n"
  },
];

export const QUESTIONS: Question[] = [
  {
    id: "q1-1",
    lessonId: "lesson-1",
    topicNumber: 1,
    text: "Raqamli iqtisodiyotda qaysi resurs \"yangi neft\" deb ataladi?",
    options: ["Neft va gaz","Ma'lumotlar (Data)","Oltin","Elektr energiyasi"],
    correctIndex: 1,
    explanation: "Zamonaviy iqtisodiyotda ma'lumotlar eng qimmatli resurs hisoblanadi va \"yangi neft\" deb ataladi."
  },
  {
    id: "q1-2",
    lessonId: "lesson-1",
    topicNumber: 1,
    text: "Quyidagi qaysi kompaniya platforma iqtisodiyotining namunasidir?",
    options: ["General Motors","ExxonMobil","Uber","Nestle"],
    correctIndex: 2,
    explanation: "Uber transport platformasi sifatida platforma iqtisodiyotining klassik namunasidir."
  },
  {
    id: "q1-3",
    lessonId: "lesson-1",
    topicNumber: 1,
    text: "Raqamli iqtisodiyotning uchinchi bosqichi (2010-hozir) qaysi texnologiyalar bilan bog'liq?",
    options: ["Internet va elektron tijorat","Mobil internet va ijtimoiy tarmoqlar","Sun'iy intellekt, Big Data, IoT","Telegraph va telefon"],
    correctIndex: 2,
    explanation: "2010 yildan boshlab sun'iy intellekt, Big Data va IoT texnologiyalari raqamli iqtisodiyotning asosiga aylandi."
  },
  {
    id: "q1-4",
    lessonId: "lesson-1",
    topicNumber: 1,
    text: "O'zbekistonda raqamli iqtisodiyotni rivojlantirishning qaysi yo'nalishi to'g'ri ko'rsatilgan?",
    options: ["Faqat neft eksportini ko'paytirish","E-hukumat tizimini kengaytirish va IT-ta'limni rivojlantirish","Raqamli texnologiyalardan voz kechish","Faqat an'anaviy savdoni rivojlantirish"],
    correctIndex: 1,
    explanation: "O'zbekiston E-hukumat, IT-parklar, IT-ta'lim va raqamli to'lovlarni kengaytirish bo'yicha strategiyani amalga oshirmoqda."
  },
  {
    id: "q1-5",
    lessonId: "lesson-1",
    topicNumber: 1,
    text: "Raqamli transformatsiya deganda nima tushuniladi?",
    options: ["Kompyuter sotib olish","Tashkilotning an'anaviy modeldan raqamli texnologiyalarga asoslangan modelga o'tishi","Internet ulanish tezligini oshirish","Ijtimoiy tarmoqlarda sahifa ochish"],
    correctIndex: 1,
    explanation: "Raqamli transformatsiya — kompaniya yoki tashkilotning an'anaviy biznes modelidan raqamli texnologiyalarga asoslangan modelga o'tish jarayoni."
  },
  {
    id: "q10-1",
    lessonId: "lesson-10",
    topicNumber: 10,
    text: "Scrum'da Sprint qancha davom etadi?",
    options: ["1 kun","1-4 hafta","3-6 oy","1 yil"],
    correctIndex: 1,
    explanation: "Scrum'da Sprint odatda 1-4 hafta davom etadi, eng ko'p 2 haftalik sprintlar qo'llaniladi."
  },
  {
    id: "q10-2",
    lessonId: "lesson-10",
    topicNumber: 10,
    text: "Daily Standup uchrashuvi qancha vaqt davom etishi kerak?",
    options: ["5 daqiqa","15 daqiqa","1 soat","4 soat"],
    correctIndex: 1,
    explanation: "Daily Standup (kunlik to'siq yo'qotish uchrashuvi) maksimal 15 daqiqa davom etishi kerak."
  },
  {
    id: "q10-3",
    lessonId: "lesson-10",
    topicNumber: 10,
    text: "CI/CD nima degan qisqartma?",
    options: ["Code Integration / Code Deployment","Continuous Integration / Continuous Delivery","Cloud Infrastructure / Cloud Development","Customer Interface / Customer Delivery"],
    correctIndex: 1,
    explanation: "CI/CD — Continuous Integration (Uzluksiz integratsiya) va Continuous Delivery/Deployment (Uzluksiz yetkazib berish)."
  },
  {
    id: "q10-4",
    lessonId: "lesson-10",
    topicNumber: 10,
    text: "Agile Manifesti qachon e'lon qilindi?",
    options: ["1991","1995","2001","2010"],
    correctIndex: 2,
    explanation: "Agile Manifesti 2001 yilda 17 dasturchi tomonidan imzolandi."
  },
  {
    id: "q10-5",
    lessonId: "lesson-10",
    topicNumber: 10,
    text: "Scrum'da Product Owner vazifasi nima?",
    options: ["Kod yozish","Jamoa ruhiyatini oshirish","Mahsulot talablari va backlogni boshqarish","Serverlarni sozlash"],
    correctIndex: 2,
    explanation: "Product Owner mahsulot egasi sifatida Product Backlog'ni boshqaradi va biznes qiymatini maksimallashtirishga javobgar."
  },
  {
    id: "q11-1",
    lessonId: "lesson-11",
    topicNumber: 11,
    text: "AR (Augmented Reality) nima?",
    options: ["To'liq virtual dunyo","Haqiqiy dunyoga raqamli elementlar qo'shadigan texnologiya","Aralash reallik","Sun'iy intellekt"],
    correctIndex: 1,
    explanation: "AR (Augmented Reality) — haqiqiy dunyo ko'rinishiga raqamli elementlar qo'shadigan texnologiya. Misol: Pokemon GO."
  },
  {
    id: "q11-2",
    lessonId: "lesson-11",
    topicNumber: 11,
    text: "Apple Vision Pro qaysi kategoriyaga kiradi?",
    options: ["Standalone VR","Spatial Computing","Console VR","Mobile AR"],
    correctIndex: 1,
    explanation: "Apple Vision Pro — Spatial Computing (Fazoviy hisoblash) qurilmasi bo'lib, AR va VR imkoniyatlarini birlashtiradi."
  },
  {
    id: "q11-3",
    lessonId: "lesson-11",
    topicNumber: 11,
    text: "\"Metaverse\" kontsepsiyasini kim e'lon qildi?",
    options: ["Elon Musk","Jeff Bezos","Mark Zuckerberg","Tim Cook"],
    correctIndex: 2,
    explanation: "Mark Zuckerberg 2021 yilda Facebook'ni Meta deb qayta nomlash va Metaverse kontsepsiyasini e'lon qildi."
  },
  {
    id: "q11-4",
    lessonId: "lesson-11",
    topicNumber: 11,
    text: "VR (Virtual Reality) texnologiyasida qanday qurilma ishlatiladi?",
    options: ["Aqlli telefon","VR shlemi (headset)","Smart soat","AR ko'zoynak"],
    correctIndex: 1,
    explanation: "VR tajribasini his qilish uchun VR shlemi (headset) kerak bo'ladi, bu foydalanuvchini to'liq virtual muhitga g'arq qiladi."
  },
  {
    id: "q11-5",
    lessonId: "lesson-11",
    topicNumber: 11,
    text: "Unity qaysi soha uchun ishlatiladi?",
    options: ["Faqat 2D o'yinlar","Faqat mobil ilovalar","O'yinlar, VR/AR, 3D simulyatsiyalar","Faqat veb-saytlar"],
    correctIndex: 2,
    explanation: "Unity — o'yinlar, VR/AR tajribalari, 3D simulyatsiyalar va vizualizatsiyalar uchun keng qo'llaniladigan platforma."
  },
  {
    id: "q2-1",
    lessonId: "lesson-2",
    topicNumber: 2,
    text: "Nazoratli o'rganish (Supervised Learning) qanday ma'lumotlardan foydalanadi?",
    options: ["Belgilanmagan ma'lumotlar","Belgilangan ma'lumotlar (labeled data)","Tasodifiy ma'lumotlar","Hech qanday ma'lumot kerak emas"],
    correctIndex: 1,
    explanation: "Nazoratli o'rganish belgilangan (labeled) ma'lumotlardan foydalanib, prognoz qilishni o'rganadi."
  },
  {
    id: "q2-2",
    lessonId: "lesson-2",
    topicNumber: 2,
    text: "AlphaGo va OpenAI Five qaysi ML turiga misol bo'ladi?",
    options: ["Nazoratli o'rganish","Nazorat qilinmagan o'rganish","Mustahkamlash orqali o'rganish","Transfer learning"],
    correctIndex: 2,
    explanation: "AlphaGo va OpenAI Five mustahkamlash orqali o'rganish (Reinforcement Learning) texnologiyasidan foydalanadi."
  },
  {
    id: "q2-3",
    lessonId: "lesson-2",
    topicNumber: 2,
    text: "LLM nima degan qisqartma?",
    options: ["Linux Language Model","Large Language Model","Local Learning Machine","Linear Logical Method"],
    correctIndex: 1,
    explanation: "LLM — Large Language Model (Katta til modeli), GPT-4, Gemini, Claude kabi modellar bunga misol."
  },
  {
    id: "q2-4",
    lessonId: "lesson-2",
    topicNumber: 2,
    text: "Qaysi AI turi faqat bitta vazifani bajaradi?",
    options: ["Umumiy AI (General AI)","Super AI","Toraytirilgan AI (Narrow AI)","Kvant AI"],
    correctIndex: 2,
    explanation: "Toraytirilgan AI (Narrow AI) faqat bitta vazifani bajaradi, masalan yuz tanish yoki spam filtri."
  },
  {
    id: "q2-5",
    lessonId: "lesson-2",
    topicNumber: 2,
    text: "Deep Learning nima asosida ishlaydi?",
    options: ["Oddiy if-else qoidalar","Ko'p qatlamli neyron tarmoqlar","SQL so'rovlar","XML fayllar"],
    correctIndex: 1,
    explanation: "Deep Learning ko'p qatlamli neyron tarmoqlarga asoslangan machine learning usuli hisoblanadi."
  },
  {
    id: "q3-1",
    lessonId: "lesson-3",
    topicNumber: 3,
    text: "Blokcheyn texnologiyasining asosiy xususiyati nima?",
    options: ["Markazlashgan boshqaruv","Markazlashmagan va o'zgartirib bo'lmaydigan daftar","Tezkor ma'lumot o'chirish","Bitta server tomonidan boshqarish"],
    correctIndex: 1,
    explanation: "Blokcheyn markazlashmagan, o'zgartirib bo'lmaydigan raqamli daftar (ledger) hisoblanadi."
  },
  {
    id: "q3-2",
    lessonId: "lesson-3",
    topicNumber: 3,
    text: "Bitcoin whitepaper kim tomonidan qachon e'lon qilindi?",
    options: ["Vitalik Buterin, 2015","Satoshi Nakamoto, 2008","Elon Musk, 2010","Mark Zuckerberg, 2012"],
    correctIndex: 1,
    explanation: "Bitcoin whitepaper'i Satoshi Nakamoto tomonidan 2008 yilda e'lon qilindi."
  },
  {
    id: "q3-3",
    lessonId: "lesson-3",
    topicNumber: 3,
    text: "Smart kontrakt nima?",
    options: ["Yuridik shartnoma","Blokcheynda saqlanadigan va avtomatik bajariladigan kod","Bank kartasi","Raqamli imzo"],
    correctIndex: 1,
    explanation: "Smart kontrakt — blokcheynda saqlanadigan va shartlar bajarilganda avtomatik ishga tushadigan kod."
  },
  {
    id: "q3-4",
    lessonId: "lesson-3",
    topicNumber: 3,
    text: "NFT nima degan qisqartma?",
    options: ["New Financial Technology","Non-Fungible Token","Network File Transfer","National Fund Transfer"],
    correctIndex: 1,
    explanation: "NFT — Non-Fungible Token, almashtirish mumkin bo'lmagan raqamli token."
  },
  {
    id: "q3-5",
    lessonId: "lesson-3",
    topicNumber: 3,
    text: "Ethereum 2.0 qaysi konsensus mexanizmidan foydalanadi?",
    options: ["Proof of Work","Proof of Stake","Proof of Authority","Proof of History"],
    correctIndex: 1,
    explanation: "Ethereum 2.0 energiya tejamkor Proof of Stake mexanizmiga o'tdi."
  },
  {
    id: "q4-1",
    lessonId: "lesson-4",
    topicNumber: 4,
    text: "IaaS nima degan qisqartma?",
    options: ["Internet and Application Service","Infrastructure as a Service","Integrated Access System","Internal Application Software"],
    correctIndex: 1,
    explanation: "IaaS — Infrastructure as a Service (Infratuzilma xizmati sifatida)."
  },
  {
    id: "q4-2",
    lessonId: "lesson-4",
    topicNumber: 4,
    text: "Gmail qaysi cloud xizmat modeliga misol bo'ladi?",
    options: ["IaaS","PaaS","SaaS","DaaS"],
    correctIndex: 2,
    explanation: "Gmail — Software as a Service (SaaS), to'g'ridan-to'g'ri foydalanuvchiga dasturiy xizmat ko'rsatadi."
  },
  {
    id: "q4-3",
    lessonId: "lesson-4",
    topicNumber: 4,
    text: "AWS (Amazon Web Services) global cloud bozorida qancha ulushga ega?",
    options: ["~12%","~23%","~32%","~50%"],
    correctIndex: 2,
    explanation: "2024 yil holatiga ko'ra AWS global cloud bozorining taxminan 32% ulushiga ega."
  },
  {
    id: "q4-4",
    lessonId: "lesson-4",
    topicNumber: 4,
    text: "Docker qanday texnologiya?",
    options: ["Dasturlash tili","Konteynerizatsiya platformasi","Ma'lumotlar bazasi","Brauzer"],
    correctIndex: 1,
    explanation: "Docker — ilovalarni konteynerga o'rab, istalgan muhitda ishga tushirish imkonini beruvchi platforma."
  },
  {
    id: "q4-5",
    lessonId: "lesson-4",
    topicNumber: 4,
    text: "Hybrid Cloud modeli nimani anglatadi?",
    options: ["Faqat public cloud","Faqat private cloud","Public va private cloud birgalikda","Hech qanday cloud yo'q"],
    correctIndex: 2,
    explanation: "Hybrid Cloud — public va private cloud infratuzilmalarini birgalikda ishlatish modeli."
  },
  {
    id: "q5-1",
    lessonId: "lesson-5",
    topicNumber: 5,
    text: "CIA Triadaning \"C\" harfi nimani anglatadi?",
    options: ["Complexity (Murakkablik)","Confidentiality (Maxfiylik)","Connectivity (Ulanish)","Compliance (Muvofiqlik)"],
    correctIndex: 1,
    explanation: "CIA Triadada C — Confidentiality (Maxfiylik), I — Integrity (Yaxlitlik), A — Availability (Mavjudlik)."
  },
  {
    id: "q5-2",
    lessonId: "lesson-5",
    topicNumber: 5,
    text: "Ransomware nima?",
    options: ["Tezkor internet ta'minlovchi dastur","Ma'lumotlarni shifrlab pul talab qiluvchi zararli dastur","Antivirus dastur","Tarmoq monitoring vositasi"],
    correctIndex: 1,
    explanation: "Ransomware — qurbonning ma'lumotlarini shifirlab, ularni qaytarish uchun to'lov talab qiluvchi zararli dastur."
  },
  {
    id: "q5-3",
    lessonId: "lesson-5",
    topicNumber: 5,
    text: "SQL Injection hujumidan himoyalanish uchun qaysi usul tavsiya etiladi?",
    options: ["Kuchli parol ishlatish","Prepared Statements (tayyorlangan so'rovlar) ishlatish","Antivirusni yangilash","Firewall o'rnatish"],
    correctIndex: 1,
    explanation: "SQL Injection hujumidan himoyalanishning eng samarali usuli — Prepared Statements yoki parameterized queries ishlatish."
  },
  {
    id: "q5-4",
    lessonId: "lesson-5",
    topicNumber: 5,
    text: "2FA (ikki faktorli autentifikatsiya) nimani anglatadi?",
    options: ["Ikkita parol kiriting","Parol + qo'shimcha tasdiqlash (SMS, app)","Ikkita foydalanuvchi nomi","Biometrik va parol"],
    correctIndex: 1,
    explanation: "2FA — parol (birinchi faktor) + qo'shimcha tasdiqlash (SMS, authenticator app va hokazo - ikkinchi faktor)."
  },
  {
    id: "q5-5",
    lessonId: "lesson-5",
    topicNumber: 5,
    text: "OWASP Top 10 roʻyxatining birinchi oʻrnida qaysi zaiflik turiladi?",
    options: ["XSS","SQL Injection","Injection","Broken Authentication"],
    correctIndex: 2,
    explanation: "OWASP Top 10 ro'yxatida birinchi o'rinda Injection (SQL, NoSQL, Command injection va boshqalar) turiladi."
  },
  {
    id: "q6-1",
    lessonId: "lesson-6",
    topicNumber: 6,
    text: "Big Data'ning \"5V\" modelida \"Velocity\" nimani anglatadi?",
    options: ["Hajm","Tezlik","Xilma-xillik","Qiymat"],
    correctIndex: 1,
    explanation: "Velocity — ma'lumotlar oqimining tezligini bildiradi (real-time ma'lumotlar)."
  },
  {
    id: "q6-2",
    lessonId: "lesson-6",
    topicNumber: 6,
    text: "Apache Spark Hadoop MapReduce ga nisbatan qanchalik tezroq?",
    options: ["2x","10x","100x","1000x"],
    correctIndex: 2,
    explanation: "Apache Spark in-memory hisoblash tufayli Hadoop MapReduce ga nisbatan 100x tezroq ishlaydi."
  },
  {
    id: "q6-3",
    lessonId: "lesson-6",
    topicNumber: 6,
    text: "OLAP tizimi asosan nima uchun ishlatiladi?",
    options: ["Tranzaksiyalarni qayta ishlash","Tahlil va hisobotlar","Fayllarni saqlash","Tarmoqni boshqarish"],
    correctIndex: 1,
    explanation: "OLAP (Online Analytical Processing) — katta ma'lumotlarni murakkab so'rovlar orqali tahlil qilish uchun."
  },
  {
    id: "q6-4",
    lessonId: "lesson-6",
    topicNumber: 6,
    text: "HDFS (Hadoop Distributed File System) ma'lumotlarni qanday saqlaydi?",
    options: ["Bitta katta server","Bloklarga bo'lib, replikatsiya bilan tarqatib","Bulut serverida","Mahalliy diskda"],
    correctIndex: 1,
    explanation: "HDFS ma'lumotlarni bloklarga bo'lib, odatda 3 marta replikatsiya qilgan holda tarqatib saqlaydi."
  },
  {
    id: "q6-5",
    lessonId: "lesson-6",
    topicNumber: 6,
    text: "Power BI va Tableau qaysi kategoriyaga kiradi?",
    options: ["Dasturlash tillari","Business Intelligence (BI) vositalari","Ma'lumotlar bazalari","Operatsion tizimlar"],
    correctIndex: 1,
    explanation: "Power BI va Tableau — Business Intelligence vositalari bo'lib, ma'lumotlarni vizualizatsiya qilish uchun ishlatiladi."
  },
  {
    id: "q7-1",
    lessonId: "lesson-7",
    topicNumber: 7,
    text: "MQTT protokoli asosan nima uchun ishlatiladi?",
    options: ["Veb-saytlar uchun","IoT sensorlari uchun yengil protokol","Video streaming uchun","Email yuborish uchun"],
    correctIndex: 1,
    explanation: "MQTT — IoT sensorlari va qurilmalari uchun mo'ljallangan yengil, kam kanal talab qiluvchi protokol."
  },
  {
    id: "q7-2",
    lessonId: "lesson-7",
    topicNumber: 7,
    text: "Arduino va Raspberry Pi o'rtasidagi asosiy farq nima?",
    options: ["Ikkalasi bir xil","Arduino mikrokontroller, Raspberry Pi mini kompyuter","Arduino qimmatroq","Raspberry Pi faqat sensorlar uchun"],
    correctIndex: 1,
    explanation: "Arduino — mikrokontroller (oddiy dasturlar uchun), Raspberry Pi — to'liq operatsion tizimli mini kompyuter."
  },
  {
    id: "q7-3",
    lessonId: "lesson-7",
    topicNumber: 7,
    text: "2030 yilga qadar qancha IoT qurilma ishlaydi deb kutilmoqda?",
    options: ["5 million","1 milliard","30 milliard+","100 milliard"],
    correctIndex: 2,
    explanation: "2030 yilga qadar 30 milliarddan ortiq IoT qurilmalar dunyo bo'ylab ishlaydi deb kutilmoqda."
  },
  {
    id: "q7-4",
    lessonId: "lesson-7",
    topicNumber: 7,
    text: "Mirai botnet qanday qurilmalardan tashkil topgan edi?",
    options: ["Kompyuterlar va laptoplar","Himoyasiz IoT qurilmalar (kameralar, routerlar)","Smartfonlar","Serverlar"],
    correctIndex: 1,
    explanation: "Mirai botnet — zaif parolga ega IoT qurilmalar (IP kameralar, routerlar) ni infektsiya qilgan DDoS hujum tarmog'i."
  },
  {
    id: "q7-5",
    lessonId: "lesson-7",
    topicNumber: 7,
    text: "IIoT nima degan qisqartma?",
    options: ["International Internet of Things","Industrial Internet of Things","Intelligent IoT","Integrated IoT"],
    correctIndex: 1,
    explanation: "IIoT — Industrial Internet of Things (Sanoat Internet of Things), zavod va ishlab chiqarishda qo'llaniladi."
  },
  {
    id: "q8-1",
    lessonId: "lesson-8",
    topicNumber: 8,
    text: "Flutter qaysi dasturlash tilida yozilgan?",
    options: ["JavaScript","Swift","Dart","Kotlin"],
    correctIndex: 2,
    explanation: "Flutter Google tomonidan ishlab chiqilgan bo'lib, Dart dasturlash tilidan foydalanadi."
  },
  {
    id: "q8-2",
    lessonId: "lesson-8",
    topicNumber: 8,
    text: "2024 yilda Android bozor ulushi taxminan qanchani tashkil etadi?",
    options: ["~27%","~50%","~72%","~90%"],
    correctIndex: 2,
    explanation: "2024 yil holatiga ko'ra Android global smartfon bozorining taxminan 72% ulushini egallaydi."
  },
  {
    id: "q8-3",
    lessonId: "lesson-8",
    topicNumber: 8,
    text: "React Native kim tomonidan yaratilgan?",
    options: ["Google","Microsoft","Facebook (Meta)","Apple"],
    correctIndex: 2,
    explanation: "React Native Facebook (hozir Meta) tomonidan 2015 yilda yaratilgan cross-platform mobil framework."
  },
  {
    id: "q8-4",
    lessonId: "lesson-8",
    topicNumber: 8,
    text: "Mobil UI dizaynda minimal touch target o'lchami qancha?",
    options: ["20pt","30pt","44pt","60pt"],
    correctIndex: 2,
    explanation: "Barmoq bilan qulay bosish uchun minimal touch target o'lchami 44pt (Apple HIG) bo'lishi tavsiya etiladi."
  },
  {
    id: "q8-5",
    lessonId: "lesson-8",
    topicNumber: 8,
    text: "iOS uchun native dasturlash qaysi tilda amalga oshiriladi?",
    options: ["Java","Kotlin","Swift","Go"],
    correctIndex: 2,
    explanation: "iOS uchun native dasturlash Swift (yoki Objective-C) tilida amalga oshiriladi."
  },
  {
    id: "q9-1",
    lessonId: "lesson-9",
    topicNumber: 9,
    text: "HTTP va HTML kim tomonidan yaratilgan?",
    options: ["Bill Gates","Tim Berners-Lee","Linus Torvalds","Dennis Ritchie"],
    correctIndex: 1,
    explanation: "Tim Berners-Lee 1991 yilda HTTP protokoli va HTML tilini yaratdi va World Wide Web asosini qo'ydi."
  },
  {
    id: "q9-2",
    lessonId: "lesson-9",
    topicNumber: 9,
    text: "Next.js 14'da Server Actions qanday belgilanadi?",
    options: ["\"use client\"","\"use server\"","\"server action\"","\"async function\""],
    correctIndex: 1,
    explanation: "Next.js 14'da Server Actions funksiya boshida \"use server\" direktivi bilan belgilanadi."
  },
  {
    id: "q9-3",
    lessonId: "lesson-9",
    topicNumber: 9,
    text: "REST API'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?",
    options: ["GET","PUT","POST","DELETE"],
    correctIndex: 2,
    explanation: "REST API'da yangi resurs yaratish uchun POST metodi ishlatiladi."
  },
  {
    id: "q9-4",
    lessonId: "lesson-9",
    topicNumber: 9,
    text: "MongoDB qaysi ma'lumotlar bazasi turiga kiradi?",
    options: ["Relational (SQL)","NoSQL","Graph DB","Time-series DB"],
    correctIndex: 1,
    explanation: "MongoDB document-oriented NoSQL ma'lumotlar bazasi hisoblanadi."
  },
  {
    id: "q9-5",
    lessonId: "lesson-9",
    topicNumber: 9,
    text: "React kim tomonidan yaratilgan?",
    options: ["Google","Microsoft","Facebook (Meta)","Amazon"],
    correctIndex: 2,
    explanation: "React JavaScript kutubxonasi Facebook (Meta) tomonidan 2013 yilda yaratilgan."
  },
];
