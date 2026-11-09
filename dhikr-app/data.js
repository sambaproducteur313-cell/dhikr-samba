const DHIKR=[
{id:"sub",n:"SubhanAllah wa bihamdihi",a:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",g:100,c:"Sunna",t:"100 fois par jour : les fautes sont effacées même si elles égalent l’écume de la mer (Bukhari, Muslim)."},
{id:"azi",n:"SubhanAllah al-Azim",a:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",g:100,c:"Sunna",t:"Deux paroles légères sur la langue, lourdes dans la balance, aimées d’Ar-Rahman (Bukhari, Muslim)."},
{id:"la",n:"La ilaha illa Allah",a:"لَا إِلَهَ إِلَّا اللَّهُ",g:100,c:"Sunna",t:"Le meilleur dhikr est « La ilaha illa Allah » (Tirmidhi)."},
{id:"haw",n:"La hawla wa la quwwata illa billah",a:"لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",g:100,c:"Sunna",t:"Un trésor parmi les trésors du Paradis (Bukhari, Muslim)."},
{id:"ist",n:"Astaghfirullah",a:"أَسْتَغْفِرُ اللَّهَ",g:100,c:"Sunna",t:"Le Prophète ﷺ demandait pardon plus de 70 fois par jour (Bukhari), 100 fois selon Muslim."},
{id:"sal",n:"Salat sur le Prophète ﷺ",a:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",g:100,c:"Sunna",t:"Qui prie une fois sur moi, Allah le bénit dix fois (Muslim)."},
{id:"t1",n:"Après la prière : SubhanAllah",a:"سُبْحَانَ اللَّهِ",g:33,c:"Sunna",t:"33 SubhanAllah, 33 Alhamdulillah, 34 Allahu Akbar après chaque prière (Muslim)."},
{id:"t2",n:"Après la prière : Alhamdulillah",a:"الْحَمْدُ لِلَّهِ",g:33,c:"Sunna",t:"Deuxième partie du tasbih après la prière."},
{id:"t3",n:"Après la prière : Allahu Akbar",a:"اللَّهُ أَكْبَرُ",g:34,c:"Sunna",t:"Troisième partie du tasbih après la prière."},
{id:"bis",n:"Bismillah ar-Rahman ar-Rahim",a:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",g:12000,c:"Wird",t:"Grand wird de la tradition spirituelle. Ce nombre n’est pas fixé par un hadith : la régularité et la présence du cœur comptent."},
{id:"sa1",n:"Salat sur le Prophète ﷺ · 1000",a:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",g:1000,c:"Wird",t:"Wird de 1000, pratiqué selon la tradition."},
{id:"is1",n:"Astaghfirullah · 1000",a:"أَسْتَغْفِرُ اللَّهَ",g:1000,c:"Wird",t:"Wird d’istighfar de 1000."},
{id:"la1",n:"La ilaha illa Allah · 1000",a:"لَا إِلَهَ إِلَّا اللَّهُ",g:1000,c:"Wird",t:"Wird de tahlil de 1000."}];
const P=["أَصْبَحْنَا وَأَصْبَحَ","أَمْسَيْنَا وَأَمْسَى"];
const AZ=[
{a:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",f:"Ayat al-Kursi (Coran 2:255)",n:1},
{a:"قُلْ هُوَ اللَّهُ أَحَدٌ · قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ · قُلْ أَعُوذُ بِرَبِّ النَّاسِ",f:"Sourates Al-Ikhlas, Al-Falaq et An-Nas, à réciter en entier",n:3},
{a:"§ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",f:"Nous voici au nouveau moment de la journée et la royauté appartient à Allah…",n:1},
{a:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",f:"Sayyid al-Istighfar, le maître des invocations de pardon (Bukhari)",n:1},
{a:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",f:"Au nom d’Allah, avec Son nom rien ne nuit sur terre ni au ciel (Abu Dawud, Tirmidhi)",n:3},
{a:"رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا",f:"Je suis satisfait d’Allah comme Seigneur, de l’Islam comme religion, de Muhammad ﷺ comme prophète (Abu Dawud)",n:3},
{a:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",f:"Allah me suffit, nul autre dieu que Lui, en Lui je place ma confiance (Abu Dawud)",n:7},
{a:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",f:"Gloire et louange à Allah (Muslim)",n:100},
{a:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",f:"Équivaut à affranchir des esclaves, selon le hadith (Bukhari, Muslim)",n:10},
{a:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",f:"Je demande pardon à Allah et me repens à Lui",n:100},
{a:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",f:"Prière et salut sur notre Prophète Muhammad ﷺ",n:10}];
