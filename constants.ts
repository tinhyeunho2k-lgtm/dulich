import { Country } from './types';

export const COUNTRIES: Country[] = [
  {
    id: 'top_beaches',
    name: 'Top Bãi Biển',
    flag: '🏝️',
    imageCover: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'maldives',
        name: 'Maldives',
        description: 'Thiên đường nghỉ dưỡng với biệt thự trên mặt nước.',
        imageUrl: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing on the wooden deck of a luxury overwater villa in the Maldives. Turquoise crystal clear water below. Sunny blue sky. Relaxed luxury vacation vibe.',
            'Walking on a long wooden pier extending into the ocean at a Maldives resort. White sand visible at the bottom of the clear water. Sunset time.',
            'Sitting in a hammock suspended over the water at a Maldives water villa. Relaxing and enjoying the view of the horizon.'
        ],
        isBeach: true
      },
      {
        id: 'bora_bora',
        name: 'Bora Bora',
        description: 'Hòn đảo lãng mạn nhất thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1580741270425-c603fc538dd4?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the crystal clear lagoon of Bora Bora with Mount Otemanu in the background. Tropical paradise, thatched roof bungalows nearby.',
        isBeach: true
      },
      {
        id: 'navagio',
        name: 'Bãi tàu đắm Navagio',
        description: 'Vịnh biển đẹp nhất Hy Lạp.',
        imageUrl: 'https://images.unsplash.com/photo-1566320091763-880907409249?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the white pebble beach of Navagio (Shipwreck Beach) in Zakynthos, Greece. The rusty shipwreck behind, surrounded by towering white limestone cliffs and electric blue water.',
        isBeach: true
      },
      {
        id: 'kelingking',
        name: 'Sống lưng khủng long',
        description: 'Biểu tượng của đảo Nusa Penida, Bali.',
        imageUrl: 'https://images.unsplash.com/photo-1535581652167-3d6b98636053?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing on the cliff edge overlooking Kelingking Beach (T-Rex shape) in Nusa Penida, Bali. Dramatic cliff drop and deep blue ocean below. Windy travel adventurer vibe.',
            'Sitting on the stairs leading down to Kelingking Beach, looking out at the T-Rex shaped cliff. Lush greenery and turquoise water.'
        ],
        isBeach: true
      },
      {
        id: 'el_nido',
        name: 'El Nido, Palawan',
        description: 'Vịnh biển hoang sơ Philippines.',
        imageUrl: 'https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a boat or shallow water in the Big Lagoon of El Nido. Limestone karst formations rising from emerald green water. Tropical adventure.',
        isBeach: true
      },
      {
        id: 'seychelles',
        name: 'Anse Source d\'Argent',
        description: 'Những tảng đá granite khổng lồ.',
        imageUrl: 'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the white sand of Anse Source d\'Argent in Seychelles. Famous giant smooth granite boulders and coconut palms in background. Golden hour light.',
        isBeach: true
      },
      {
        id: 'tulum',
        name: 'Tulum, Mexico',
        description: 'Di tích Maya bên bờ biển Caribbean.',
        imageUrl: 'https://images.unsplash.com/photo-1504730655668-71c4c114385a?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the beach with the ancient Mayan ruins of Tulum perched on the cliff in the background. Turquoise Caribbean sea. Boho-chic vibe.',
        isBeach: true
      },
      {
        id: 'pig_beach',
        name: 'Pig Beach, Bahamas',
        description: 'Bơi cùng những chú heo đáng yêu.',
        imageUrl: 'https://images.unsplash.com/photo-1589785237937-67c858547285?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in clear shallow water in Exuma, Bahamas. Cute swimming pigs interacting nearby. Bright turquoise water and white sand.',
        isBeach: true
      },
      {
        id: 'waikiki',
        name: 'Waikiki, Hawaii',
        description: 'Thiên đường lướt sóng huyền thoại.',
        imageUrl: 'https://images.unsplash.com/photo-1542259681-d4cd7093db29?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on Waikiki Beach with the Diamond Head crater in the background. Surfers, catamaran boats, and blue pacific ocean. Hawaiian vibe.',
        isBeach: true
      },
      {
        id: 'turks_caicos',
        name: 'Grace Bay',
        description: 'Nước biển trong xanh nhất thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on the powdery white sand of Grace Bay, Turks and Caicos. The water is an unbelievable gradient of clear to turquoise. Luxury Caribbean vacation.',
        isBeach: true
      }
    ]
  },
  {
    id: 'vietnam',
    name: 'Việt Nam',
    flag: '🇻🇳',
    imageCover: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'halong',
        name: 'Vịnh Hạ Long',
        description: 'Check-in trên du thuyền giữa kỳ quan thiên nhiên.',
        imageUrl: 'https://images.unsplash.com/photo-1506812502392-426c11c1d45c?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing casually on the wooden deck of a luxury cruise boat in Ha Long Bay. Background features iconic limestone karsts rising from green water. Candid travel photo.',
            'Kayaking in the emerald waters of Ha Long Bay. Limestone mountains towering around. Adventurous perspective.',
            'Standing inside a massive limestone cave (Hang Sung Sot) in Ha Long Bay, looking out at the bay view through the cave entrance.'
        ],
        isBeach: true
      },
      {
        id: 'hoian',
        name: 'Phố Cổ Hội An',
        description: 'Dạo bước dưới những chiếc đèn lồng rực rỡ.',
        imageUrl: 'https://images.unsplash.com/photo-1565060169194-177b83cb5c16?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Walking on the street in Hoi An Ancient Town at twilight. Surrounded by glowing colorful silk lanterns and yellow heritage walls. Warm, nostalgic lighting.',
            'Sitting on a small wooden boat on the Hoai River in Hoi An, holding a floating paper lantern (hoa dang) to release into the water. Night scene.',
            'Standing on the iconic Japanese Covered Bridge (Cau Chua) in Hoi An. Historical wooden architecture.'
        ],
      },
      {
        id: 'goldenbridge',
        name: 'Cầu Vàng (Đà Nẵng)',
        description: 'Đứng giữa bàn tay khổng lồ trên mây.',
        imageUrl: 'https://images.unsplash.com/photo-1599708153386-53c8c9359a60?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing on the Golden Bridge (Cau Vang) in Da Nang, held by giant stone hands. Cloudy, misty mountain atmosphere. High altitude view.',
            'Walking along the curve of the Golden Bridge with the giant stone hand prominently in the background. Panoramic view of mountains below.'
        ],
      },
      {
        id: 'hanoi_train',
        name: 'Phố Đường Tàu Hà Nội',
        description: 'Uống cà phê bên đường ray độc đáo.',
        imageUrl: 'https://images.unsplash.com/photo-1595306786445-564344d32a9c?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on a small plastic stool sipping coffee at Hanoi Train Street. Old narrow buildings on both sides, train tracks in the middle. Candid street life vibe.',
      },
      {
        id: 'sapa',
        name: 'Ruộng Bậc Thang Sapa',
        description: 'Hòa mình vào thiên nhiên Tây Bắc.',
        imageUrl: 'https://images.unsplash.com/photo-1533550493867-b52f90240d12?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a dirt path in Sapa, surrounded by green terraced rice fields and misty mountains. Wearing outdoor travel clothes. Fresh, airy atmosphere.',
      },
      {
        id: 'trangan',
        name: 'Tràng An (Ninh Bình)',
        description: 'Ngồi thuyền nan giữa non nước hữu tình.',
        imageUrl: 'https://images.unsplash.com/photo-1623812239454-e91023773177?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting in a small traditional bamboo boat being rowed on the river in Trang An, Ninh Binh. Towering green mountains on both sides, lotus flowers on water. Peaceful vibe.',
      },
      {
        id: 'landmark81',
        name: 'Landmark 81 (Sài Gòn)',
        description: 'Check-in sang chảnh với tòa nhà cao nhất VN.',
        imageUrl: 'https://images.unsplash.com/photo-1647833072288-72c0508a8df0?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in Vinhomes Central Park with the towering Landmark 81 building rising high in the background. Modern city vibe, blue sky, green grass.',
      },
      {
        id: 'dalat_hydrangea',
        name: 'Vườn Cẩm Tú Cầu (Đà Lạt)',
        description: 'Lạc lối giữa rừng hoa thơ mộng.',
        imageUrl: 'https://images.unsplash.com/photo-1510499878204-6178a3c03b12?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the middle of a vast blooming blue hydrangea garden in Da Lat. Soft sunlight filtering through pine trees. Romantic, dreamy atmosphere.',
      },
      {
        id: 'phuquoc_sunset',
        name: 'Hoàng Hôn Phú Quốc',
        description: 'Check-in tại Sunset Sanato.',
        imageUrl: 'https://images.unsplash.com/photo-1590422915842-83b63297a06a?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the beach in Phu Quoc at golden hour sunset. Silhouette of art installations (elephants or fish) on stilts in the water background. Warm orange sky.',
        isBeach: true
      },
      {
        id: 'buivien',
        name: 'Phố Bùi Viện',
        description: 'Sôi động nhịp sống về đêm.',
        imageUrl: 'https://images.unsplash.com/photo-1566374828695-9477063f6087?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking in the middle of Bui Vien walking street at night. Neon signs, crowded plastic chairs, loud music atmosphere. Vibrant nightlife photography.',
      }
    ]
  },
  {
    id: 'korea',
    name: 'Hàn Quốc',
    flag: '🇰🇷',
    imageCover: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'bukchon',
        name: 'Làng Hanok Bukchon',
        description: 'Dạo bước giữa những ngôi nhà cổ Seoul.',
        imageUrl: 'https://images.unsplash.com/photo-1563806203-d1434c4f3460?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Walking uphill on a paved street in Bukchon Hanok Village, Seoul. Traditional Korean roofs on both sides. Blue sky. Quiet morning atmosphere.',
            'Peeking out from a traditional wooden gate in Bukchon Hanok Village. Wearing traditional Hanbok (optional). Close up shot.',
            'Standing at the top of the hill in Bukchon village looking down the street with modern Seoul skyline in far distance.'
        ],
      },
      {
        id: 'gyeongbokgung',
        name: 'Cung điện Gyeongbokgung',
        description: 'Check-in cung điện hoàng gia.',
        imageUrl: 'https://images.unsplash.com/photo-1620006760592-23c3b03597d3?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the grand courtyard of Gyeongbokgung Palace. Majestic traditional Korean architecture with colorful paint work. Mountain peak visible in distance.',
      },
      {
        id: 'itaewon',
        name: 'Phố đêm Itaewon',
        description: 'Không khí sôi động như trong phim.',
        imageUrl: 'https://images.unsplash.com/photo-1627883265882-628d689658db?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a sloped street in Itaewon, Seoul at night. Neon signs in Korean and English, string lights, bustling nightlife vibe. "Itaewon Class" style.',
      },
      {
        id: 'jeju_field',
        name: 'Đảo Jeju',
        description: 'Cánh đồng hoa cải vàng rực.',
        imageUrl: 'https://images.unsplash.com/photo-1584883196885-b9e77609a365?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the middle of a bright yellow canola flower field in Jeju Island. Blue ocean and black basalt rocks in the background. Windy, sunny spring day.',
      },
      {
        id: 'nseoultower',
        name: 'Tháp N Seoul',
        description: 'Ngắm toàn cảnh Seoul từ trên cao.',
        imageUrl: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the observation deck at Namsan Mountain with the N Seoul Tower directly behind. Love locks on the railings. Cityscape of Seoul below.',
      },
      {
        id: 'starfield_library',
        name: 'Thư viện Starfield',
        description: 'Thiên đường sách khổng lồ tại COEX.',
        imageUrl: 'https://images.unsplash.com/photo-1627481358983-5095d38b6d88?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the escalator inside Starfield Library. Massive towering bookshelves reaching the ceiling with glowing lights. Modern intellectual vibe.',
      },
      {
        id: 'gamcheon',
        name: 'Làng văn hóa Gamcheon',
        description: 'Santorini của Hàn Quốc tại Busan.',
        imageUrl: 'https://images.unsplash.com/photo-1580139157209-51475c404eb5?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a viewpoint overlooking the colorful stacked houses of Gamcheon Culture Village in Busan. Artistic murals and winding alleys. Bright, playful colors.',
      },
      {
        id: 'nami_island',
        name: 'Đảo Nami',
        description: 'Con đường hàng cây tình yêu.',
        imageUrl: 'https://images.unsplash.com/photo-1601823984263-b87b5972c2c1?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking down the famous Metasequoia Lane on Nami Island. Tall straight trees lining both sides of the path. Autumn leaves or winter snow setting.',
      },
      {
        id: 'hongdae',
        name: 'Phố Hongdae',
        description: 'Năng động, trẻ trung và nghệ thuật.',
        imageUrl: 'https://images.unsplash.com/photo-1596489398565-d0532588c2b5?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a busy street in Hongdae. Street performers nearby, trendy fashion shops, youthful crowd. K-pop culture energy.',
      },
      {
        id: 'ddp',
        name: 'Dongdaemun DDP',
        description: 'Kiến trúc tàu vũ trụ tương lai.',
        imageUrl: 'https://images.unsplash.com/photo-1616149562385-1d84e79478bb?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in front of the futuristic silver curves of the Dongdaemun Design Plaza (DDP). Modern architectural masterpiece. Night time with LED rose garden nearby.',
      }
    ]
  },
  {
    id: 'thailand',
    name: 'Thái Lan',
    flag: '🇹🇭',
    imageCover: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'wat_arun',
        name: 'Chùa Wat Arun',
        description: 'Biểu tượng Bangkok bên sông Chao Phraya.',
        imageUrl: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing on the steps of the Wat Arun temple in Bangkok, detailed ceramic mosaic tiles visible. Blue sky. Bright sunlight.',
            'Standing across the Chao Phraya river with Wat Arun glowing in the sunset background. Boat passing by.'
        ],
      },
      {
        id: 'phiphi',
        name: 'Đảo Phi Phi',
        description: 'Ngồi trên thuyền đuôi dài trứ danh.',
        imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on the prow of a traditional Thai longtail boat decorated with colorful ribbons. Turquoise water and limestone cliffs of Phi Phi islands in background.',
        isBeach: true
      },
      {
        id: 'chinatown_bkk',
        name: 'Yaowarat (Chinatown)',
        description: 'Thiên đường ẩm thực đường phố.',
        imageUrl: 'https://images.unsplash.com/photo-1505315055006-2594d4d673da?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking through a crowded night market street in Yaowarat Bangkok. Huge neon signs in Chinese and Thai overhead. Steaming street food stalls nearby.',
      },
      {
        id: 'grand_palace',
        name: 'Cung điện Hoàng gia',
        description: 'Kiến trúc vàng son lộng lẫy.',
        imageUrl: 'https://images.unsplash.com/photo-1599543085675-9e66cb3a73c9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the courtyard of the Grand Palace in Bangkok. Elaborate golden chedis and ornate Thai roofs in background. Sunny and majestic.',
      },
      {
        id: 'floating_market',
        name: 'Chợ nổi Damnoen Saduak',
        description: 'Trải nghiệm mua bán trên sông.',
        imageUrl: 'https://images.unsplash.com/photo-1598218944583-04a43a0d1796?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting in a wooden boat at a busy floating market. Canal filled with other boats selling fruits and food. Vibrant colors and lively atmosphere.',
      },
      {
        id: 'railay_beach',
        name: 'Biển Railay',
        description: 'Thiên đường leo núi và biển xanh.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the soft white sand of Railay Beach. Massive limestone cliffs towering overhead next to turquoise water. Tropical paradise vibe.',
        isBeach: true
      },
      {
        id: 'sanctuary_truth',
        name: 'Đền Chân Lý (Pattaya)',
        description: 'Kiến trúc gỗ điêu khắc tỉ mỉ.',
        imageUrl: 'https://images.unsplash.com/photo-1596791238697-74403310707a?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing before the massive wooden Sanctuary of Truth temple. Intricate carvings covering every inch of the structure. Ocean background.',
      },
      {
        id: 'khaosan',
        name: 'Đường Khao San',
        description: 'Phố Tây ba lô huyền thoại.',
        imageUrl: 'https://images.unsplash.com/photo-1569046049257-234b6e768393?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking amidst the chaotic energy of Khao San Road at night. Bars, backpackers, tuk-tuks and street vendors everywhere. Party atmosphere.',
      },
      {
        id: 'big_buddha_phuket',
        name: 'Tượng Phật Lớn (Phuket)',
        description: 'Tượng Phật trắng khổng lồ trên đồi.',
        imageUrl: 'https://images.unsplash.com/photo-1583250682430-c4e9c70a93c7?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the hilltop platform next to the giant white marble Big Buddha of Phuket. Panoramic view of the sea and island below. Spiritual and serene.',
      },
      {
        id: 'ayutthaya',
        name: 'Cố đô Ayutthaya',
        description: 'Di tích đền đài cổ kính.',
        imageUrl: 'https://images.unsplash.com/photo-1549429188-e21dd9777df5?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing among the ancient red brick ruins of Ayutthaya temples. Head of Buddha in tree roots nearby. Historical and mysterious atmosphere.',
      }
    ]
  },
  {
    id: 'japan',
    name: 'Nhật Bản',
    flag: '🇯🇵',
    imageCover: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'fuji_street',
        name: 'Phố nhìn ra núi Phú Sĩ',
        description: 'Góc phố Honcho nổi tiếng.',
        imageUrl: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Walking down the famous Honcho Street in Fujiyoshida. Mount Fuji is looming huge and snow-capped at the end of the road. Retro signs, electric wires. Street photography style.',
            'Standing in front of the Chureito Pagoda with Mount Fuji in the background. Cherry blossoms (Sakura) blooming around.'
        ],
      },
      {
        id: 'kyoto_torii',
        name: 'Cổng Torii (Kyoto)',
        description: 'Ngàn cổng đỏ tại Fushimi Inari.',
        imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing inside the tunnel of vermilion Torii gates at Fushimi Inari Shrine. Sunlight filtering through the orange gates. Mysterious and spiritual vibe.',
            'Walking up the stairs through the Torii gates at Fushimi Inari. Looking back over shoulder. Lush forest visible through gaps.'
        ],
      },
      {
        id: 'shibuya',
        name: 'Ngã tư Shibuya',
        description: 'Hòa mình vào dòng người Tokyo.',
        imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing in the middle of the famous Shibuya Crossing scramble in Tokyo. Neon lights, large advertisements, crowds of people blurring in motion around. Cyberpunk city vibe.',
            'Looking down at Shibuya Crossing from a high glass window (like Starbucks or Shibuya Sky). Rain falling, umbrellas everywhere below.',
            'Standing next to the Hachiko statue in Shibuya. Crowded meeting spot.'
        ],
      },
      {
        id: 'osaka_dotonbori',
        name: 'Dotonbori (Osaka)',
        description: 'Check-in với biển hiệu Glico Man.',
        imageUrl: 'https://images.unsplash.com/photo-1590559399607-e009590dce64?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the Ebisu Bridge in Osaka at night. The famous Glico Running Man neon sign is glowing in the background. Vibrant city lights and nightlife atmosphere.',
      },
      {
        id: 'arashiyama',
        name: 'Rừng trúc Arashiyama',
        description: 'Lạc lối giữa rừng tre xanh mát.',
        imageUrl: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on the path inside Arashiyama Bamboo Grove in Kyoto. Tall green bamboo stalks rising high on both sides. Soft, filtered green light.',
      },
      {
        id: 'tokyo_tower',
        name: 'Tháp Tokyo',
        description: 'Biểu tượng màu đỏ cam rực rỡ.',
        imageUrl: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing in a park (Shiba Park) with the red and white Tokyo Tower rising majestically in the background. Blue sky and cherry blossoms if possible.',
            'Standing on a busy street intersection in Roppongi with Tokyo Tower glowing orange at night in the background.'
        ],
      },
      {
        id: 'himeji_castle',
        name: 'Lâu đài Himeji',
        description: 'Lâu đài Hạc Trắng cổ kính.',
        imageUrl: 'https://images.unsplash.com/photo-1624823183496-0e9e4b679b38?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the path leading to Himeji Castle. The white castle complex is imposing against a clear sky. Traditional samurai movie aesthetic.',
      },
      {
        id: 'shirakawago',
        name: 'Làng Shirakawa-go',
        description: 'Ngôi làng cổ tích mái tranh.',
        imageUrl: 'https://images.unsplash.com/photo-1545502648-5c4908a73562?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a snowy viewpoint overlooking the historic village of Shirakawa-go. Gassho-style farmhouses with thick thatched roofs covered in snow. Winter wonderland.',
      },
      {
        id: 'teamlab',
        name: 'TeamLab Planets',
        description: 'Nghệ thuật ánh sáng huyền ảo.',
        imageUrl: 'https://images.unsplash.com/photo-1560931139-44755106ee52?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing barefoot in a room filled with crystal LED lights hanging from ceiling to floor (TeamLab Crystal Universe). Mirror floor reflection. Magical, futuristic infinity space.',
      },
      {
        id: 'nara_park',
        name: 'Công viên Nara',
        description: 'Vui đùa cùng những chú hươu.',
        imageUrl: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Crouching down slightly to feed a deer in Nara Park. Green grass, trees and traditional temple structures in background. Gentle, nature vibe.',
      }
    ]
  },
  {
    id: 'france',
    name: 'Pháp',
    flag: '🇫🇷',
    imageCover: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'eiffel_cafe',
        name: 'Cafe Paris & Eiffel',
        description: 'Thưởng thức croissant view tháp Eiffel.',
        imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Sitting at a small round table on a balcony with a coffee and croissant. The Eiffel Tower is clearly visible in the near background. Romantic Parisian morning light.',
            'Standing at Place du Trocadéro with a perfect symmetrical view of the Eiffel Tower across the river. Sunrise time, golden light.',
            'Sitting on the grass at Champ de Mars having a picnic. The Eiffel Tower towering above. Relaxed afternoon vibe.'
        ],
      },
      {
        id: 'louvre',
        name: 'Bảo tàng Louvre',
        description: 'Check-in trước kim tự tháp kính.',
        imageUrl: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the courtyard of the Louvre Museum in Paris. The iconic glass pyramid is in the background. Sunset lighting reflecting on the glass.',
      },
      {
        id: 'arc_triomphe',
        name: 'Khải Hoàn Môn',
        description: 'Biểu tượng lịch sử giữa Paris.',
        imageUrl: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=600&auto=format&fit=crop',
        promptContext: [
            'Standing on the Champs-Élysées avenue with the massive Arc de Triomphe centered in the background. Busy Paris street life around, autumn leaves. Classic tourist shot.',
            'Standing on the rooftop of the Arc de Triomphe with the roads radiating out below. Paris skyline in distance.'
        ],
      },
      {
        id: 'mont_saint_michel',
        name: 'Mont Saint-Michel',
        description: 'Lâu đài cổ tích giữa biển.',
        imageUrl: 'https://images.unsplash.com/photo-1454178345722-e3251a37c442?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the causeway leading to Mont Saint-Michel. The medieval abbey island rises majestically in the background against a dramatic sky. Windy atmosphere.',
      },
      {
        id: 'versailles',
        name: 'Cung điện Versailles',
        description: 'Hào nhoáng hoàng gia Pháp.',
        imageUrl: 'https://images.unsplash.com/photo-1549488346-60144d82b451?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the Hall of Mirrors or the Grand Gardens of Versailles. Opulent gold decorations, chandeliers, or perfectly manicured gardens behind. Royal vibe.',
      },
      {
        id: 'provence',
        name: 'Cánh đồng Oải hương',
        description: 'Mùa hè tím ngắt tại Provence.',
        imageUrl: 'https://images.unsplash.com/photo-1533630239268-c17244976453?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking through a blooming purple lavender field in Valensole, Provence. Sunset light. A small stone house in the distance. Dreamy and fragrant.',
      },
      {
        id: 'nice_promenade',
        name: 'Bờ biển Nice',
        description: 'Nắng vàng biển xanh Riviera.',
        imageUrl: 'https://images.unsplash.com/photo-1534258936925-c48947b6bf02?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Leaning on the railing of the Promenade des Anglais in Nice. Azure blue Mediterranean sea and palm trees in background. Summer holiday style.',
        isBeach: true
      },
      {
        id: 'notre_dame',
        name: 'Nhà thờ Đức Bà',
        description: 'Kiến trúc Gothic huyền thoại.',
        imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the banks of Seine river with Notre Dame Cathedral in the background. Classic French architecture. Peaceful river scene.',
      },
      {
        id: 'sacre_coeur',
        name: 'Đồi Montmartre',
        description: 'Vương cung thánh đường trắng.',
        imageUrl: 'https://images.unsplash.com/photo-1501908740523-2680df1a5518?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on the steps of Montmartre with the white Sacré-Cœur Basilica behind. Panoramic view of Paris rooftops below. Artistic bohemian vibe.',
      },
      {
        id: 'moulin_rouge',
        name: 'Moulin Rouge',
        description: 'Cối xay gió đỏ rực.',
        imageUrl: 'https://images.unsplash.com/photo-1559569720-c659779df34d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the street corner in front of the famous red windmill of Moulin Rouge. Night time, neon lights glowing. Cabaret atmosphere.',
      }
    ]
  },
  {
    id: 'china',
    name: 'Trung Quốc',
    flag: '🇨🇳',
    imageCover: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'great_wall',
        name: 'Vạn Lý Trường Thành',
        description: 'Chinh phục kỳ quan thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the Great Wall of China, winding through green mountains. Blue sky. The stone path stretches into the distance. Majestic travel photo.',
      },
      {
        id: 'shanghai_bund',
        name: 'Bến Thượng Hải',
        description: 'View tháp truyền hình Đông Phương Minh Châu.',
        imageUrl: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Leaning on the railing at The Bund in Shanghai. Across the river is the futuristic skyline with the Oriental Pearl Tower. Night scene with vibrant city lights.',
      },
      {
        id: 'forbidden_city',
        name: 'Tử Cấm Thành',
        description: 'Khám phá cung điện hoàng gia Bắc Kinh.',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the vast stone courtyard of the Forbidden City in Beijing. Majestic red palace buildings with golden roofs behind. Historical atmosphere.',
      },
      {
        id: 'phoenix_town',
        name: 'Phượng Hoàng Cổ Trấn',
        description: 'Thị trấn cổ kính bên dòng sông.',
        imageUrl: 'https://images.unsplash.com/photo-1634300461311-66b6c023d6a2?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a stone bridge in Fenghuang Ancient Town. Wooden stilt houses hanging over the river in the background. Misty, traditional Chinese painting vibe.',
      },
      {
        id: 'terracotta',
        name: 'Đội quân đất nung',
        description: 'Di sản lịch sử Tây An.',
        imageUrl: 'https://images.unsplash.com/photo-1526494631344-8c6fa6462917?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the viewing platform overlooking the pits of the Terracotta Warriors. Rows of ancient clay soldiers below. Historical excavation site.',
      },
      {
        id: 'zhangjiajie',
        name: 'Trương Gia Giới',
        description: 'Núi Avatar hùng vĩ.',
        imageUrl: 'https://images.unsplash.com/photo-1621845112185-115df600b333?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a glass walkway or cliff edge in Zhangjiajie National Forest Park. Quartz-sandstone pillars rising from the mist like in the movie Avatar.',
      },
      {
        id: 'west_lake',
        name: 'Tây Hồ (Hàng Châu)',
        description: 'Vẻ đẹp thơ mộng như tranh.',
        imageUrl: 'https://images.unsplash.com/photo-1569668579737-2d4d985db574?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the Broken Bridge at West Lake, Hangzhou. Willow trees drooping over the water, pagodas in the distance. Peaceful and poetic.',
      },
      {
        id: 'potala_palace',
        name: 'Cung điện Potala',
        description: 'Thánh địa Tây Tạng.',
        imageUrl: 'https://images.unsplash.com/photo-1545634563-7925e59c0379?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the square in front of the massive Potala Palace in Lhasa. White and red fortress against a deep blue high-altitude sky. Spiritual atmosphere.',
      },
      {
        id: 'chengdu_panda',
        name: 'Gấu trúc Thành Đô',
        description: 'Thăm quê hương gấu trúc.',
        imageUrl: 'https://images.unsplash.com/photo-1527192491265-7301292080a9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing near a bamboo grove with a cute Giant Panda eating bamboo in the background. Green nature setting. Cheerful animal encounter.',
      },
      {
        id: 'lijiang',
        name: 'Lệ Giang Cổ Trấn',
        description: 'Thành phố của những con kênh.',
        imageUrl: 'https://images.unsplash.com/photo-1547432415-1160d5b1285e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on the cobblestone streets of Lijiang Old Town. Water wheels, red lanterns, and Jade Dragon Snow Mountain visible in the distance.',
      }
    ]
  },
  {
    id: 'italy',
    name: 'Ý',
    flag: '🇮🇹',
    imageCover: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'venice',
        name: 'Kênh đào Venice',
        description: 'Ngồi trên thuyền Gondola.',
        imageUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting in a traditional Gondola boat navigating a narrow canal in Venice. Old brick buildings rising from the water on both sides. Romantic atmosphere.',
      },
      {
        id: 'colosseum',
        name: 'Đấu trường La Mã',
        description: 'Di tích lịch sử hùng vĩ.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in front of the Colosseum in Rome. Ancient stone arches visible in the background. Golden hour sunlight.',
      },
      {
        id: 'pisa',
        name: 'Tháp nghiêng Pisa',
        description: 'Check-in vui nhộn với tháp nghiêng.',
        imageUrl: 'https://images.unsplash.com/photo-1543835683-ec5466c688ee?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the green lawn in the Square of Miracles. The Leaning Tower of Pisa is visible leaning in the background. Sunny Italian day. Fun tourist pose.',
      },
      {
        id: 'trevi',
        name: 'Đài phun nước Trevi',
        description: 'Cầu nguyện tại Rome.',
        imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing near the edge of the Trevi Fountain in Rome. Turquoise water and elaborate baroque sculptures behind. Crowded tourist spot vibe.',
      },
      {
        id: 'amalfi',
        name: 'Bờ biển Amalfi',
        description: 'Lái xe Vespa ven biển Địa Trung Hải.',
        imageUrl: 'https://images.unsplash.com/photo-1633321088355-d0f811346df4?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on a vintage Vespa scooter parked on the roadside of Amalfi Coast. Colorful cliffside village (Positano) and blue sea in the background. La Dolce Vita vibe.',
      },
      {
        id: 'florence_duomo',
        name: 'Duomo Florence',
        description: 'Kiệt tác phục hưng.',
        imageUrl: 'https://images.unsplash.com/photo-1543429258-102553754c0b?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in a square with the magnificent facade of Florence Cathedral (The Duomo) behind. Red tiled dome and green/white marble walls. Renaissance art vibe.',
      },
      {
        id: 'lake_como',
        name: 'Hồ Como',
        description: 'Nghỉ dưỡng sang trọng.',
        imageUrl: 'https://images.unsplash.com/photo-1579606829777-a892b152d11b?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on a boat or a garden terrace overlooking Lake Como. Mountains and luxury villas in the background. Peaceful, wealthy atmosphere.',
      },
      {
        id: 'cinque_terre',
        name: 'Cinque Terre',
        description: 'Những ngôi nhà màu sắc trên vách đá.',
        imageUrl: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a hiking trail overlooking Manarola, Cinque Terre. Colorful houses stacked on the cliff edge dropping into the sea. Bright, sunny postcard view.',
      },
      {
        id: 'pompeii',
        name: 'Tàn tích Pompeii',
        description: 'Thành phố cổ đại.',
        imageUrl: 'https://images.unsplash.com/photo-1563829048035-779836173a38?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking down a preserved Roman street in Pompeii. Mount Vesuvius looming in the background. Ancient stone columns and ruins.',
      },
      {
        id: 'vatican',
        name: 'Quảng trường Thánh Peter',
        description: 'Trung tâm Công giáo thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc14f?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the vast St. Peter\'s Square in Vatican City. The Basilica dome and colonnades in the background. Grand scale architecture.',
      }
    ]
  },
  {
    id: 'usa',
    name: 'Mỹ',
    flag: '🇺🇸',
    imageCover: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'nyc_times_square',
        name: 'Times Square',
        description: 'Trung tâm New York sôi động.',
        imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a busy sidewalk in Times Square, surrounded by blurred pedestrians. Yellow taxis in background. Neon lights reflecting on the ground. Urban street style.',
      },
      {
        id: 'golden_gate',
        name: 'Cầu Cổng Vàng',
        description: 'Biểu tượng San Francisco.',
        imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing at a lookout point with the red Golden Gate Bridge in the background spanning the bay. Fog rolling in slightly over the water. Windy, fresh atmosphere.',
      },
      {
        id: 'hollywood',
        name: 'Biển báo Hollywood',
        description: 'Giấc mơ điện ảnh Los Angeles.',
        imageUrl: 'https://images.unsplash.com/photo-1582650630663-e57833215904?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a hiking trail in the Hollywood Hills. The white Hollywood sign is visible in the distance on the hill. Dry California landscape. Blue sky.',
      },
      {
        id: 'grand_canyon',
        name: 'Grand Canyon',
        description: 'Kỳ quan thiên nhiên hùng vĩ.',
        imageUrl: 'https://images.unsplash.com/photo-1474044159687-1ee9f03fd3f4?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting safely on a rocky ledge overlooking the vast Grand Canyon. Red rocks and deep gorges stretching to the horizon. Majestic nature landscape.',
      },
      {
        id: 'las_vegas',
        name: 'Biển hiệu Las Vegas',
        description: 'Chào mừng đến với thiên đường giải trí.',
        imageUrl: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the median grass in front of the famous "Welcome to Fabulous Las Vegas" neon sign. Palm trees and desert sky in background. Fun, energetic tourist photo.',
      },
      {
        id: 'statue_liberty',
        name: 'Tượng Nữ Thần Tự Do',
        description: 'Biểu tượng tự do của nước Mỹ.',
        imageUrl: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the ferry or Liberty Island with the Statue of Liberty towering in the background. Blue sky and New York harbor water.',
      },
      {
        id: 'brooklyn_bridge',
        name: 'Cầu Brooklyn',
        description: 'Đi dạo trên cây cầu huyền thoại.',
        imageUrl: 'https://images.unsplash.com/photo-1502209877429-d7c6d9bc5732?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on the wooden pedestrian walkway of the Brooklyn Bridge. Steel cables web pattern above. Manhattan skyline in distance.',
      },
      {
        id: 'central_park',
        name: 'Central Park',
        description: 'Lá phổi xanh giữa lòng NYC.',
        imageUrl: 'https://images.unsplash.com/photo-1512411606553-f726cb789279?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on a rock or bench in Central Park. Green trees, lake, and skyscrapers peeking over the treeline in the background. Relaxed urban nature.',
      },
      {
        id: 'miami_beach',
        name: 'Biển Miami',
        description: 'Nắng vàng và kiến trúc Art Deco.',
        imageUrl: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the white sands of Miami Beach near a colorful lifeguard tower. Ocean waves and Art Deco hotels in background. Bright summer vibes.',
        isBeach: true
      },
      {
        id: 'yellowstone',
        name: 'Vườn quốc gia Yellowstone',
        description: 'Hồ nước nóng Prismatic Spring.',
        imageUrl: 'https://images.unsplash.com/photo-1575408264798-b50d29e31746?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the boardwalk near the Grand Prismatic Spring. Colorful steam (orange, blue, green) rising from the hot spring. Unique geothermal landscape.',
      }
    ]
  },
  {
    id: 'uk',
    name: 'Vương Quốc Anh',
    flag: '🇬🇧',
    imageCover: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'big_ben_phone',
        name: 'Bốt điện thoại đỏ & Big Ben',
        description: 'Biểu tượng kinh điển của London.',
        imageUrl: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Leaning casually against a classic red telephone booth in London. The Big Ben (Elizabeth Tower) is visible in the background. Overcast London weather aesthetic.',
      },
      {
        id: 'tower_bridge',
        name: 'Cầu Tháp London',
        description: 'Dạo bước bên bờ sông Thames.',
        imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the walkway along the River Thames. The majestic Tower Bridge is in the background. City of London skyline visible. Modern urban vibe.',
      },
      {
        id: 'cotswolds',
        name: 'Làng quê Cotswolds',
        description: 'Những ngôi nhà đá cổ kính.',
        imageUrl: 'https://images.unsplash.com/photo-1508866579294-878950c40608?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on a small path in a Cotswolds village (like Bibury). Honey-colored stone cottages with thatched roofs and flowers. Peaceful countryside atmosphere.',
      },
      {
        id: 'london_eye',
        name: 'Vòng quay London Eye',
        description: 'Ngắm sông Thames.',
        imageUrl: 'https://images.unsplash.com/photo-1454551433246-0b1d3d659543?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the South Bank of the Thames. The giant London Eye wheel is directly behind. Tourists walking by. Cloudy or sunny London day.',
      },
      {
        id: 'stonehenge',
        name: 'Bãi đá cổ Stonehenge',
        description: 'Di tích bí ẩn ngàn năm.',
        imageUrl: 'https://images.unsplash.com/photo-1599831633534-f2a89c8a9010?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the grass with the mysterious stone circle of Stonehenge in the background. Open green field and dramatic sky.',
      },
      {
        id: 'edinburgh_castle',
        name: 'Lâu đài Edinburgh',
        description: 'Pháo đài cổ kính Scotland.',
        imageUrl: 'https://images.unsplash.com/photo-1558273760-4927f8792019?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the Royal Mile or Princes Street Gardens with Edinburgh Castle dominating the rock hill above. Gothic, moody Scottish atmosphere.',
      },
      {
        id: 'oxford',
        name: 'Đại học Oxford',
        description: 'Thành phố của những tháp mơ màng.',
        imageUrl: 'https://images.unsplash.com/photo-1589140228475-680c10b48455?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in a quadrangle of an old Oxford college (like Christ Church). Golden stone buildings, manicured lawns. Harry Potter academic vibe.',
      },
      {
        id: 'the_shard',
        name: 'The Shard',
        description: 'Tòa nhà cao nhất London.',
        imageUrl: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing inside the viewing gallery of The Shard. Floor-to-ceiling glass windows with a bird\'s eye view of the entire London city below.',
      },
      {
        id: 'buckingham',
        name: 'Cung điện Buckingham',
        description: 'Nơi ở của Hoàng gia.',
        imageUrl: 'https://images.unsplash.com/photo-1565530751336-7c25c6dc8b09?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing at the Victoria Memorial with Buckingham Palace gates and guards in the background. Tourist crowd, royal atmosphere.',
      },
      {
        id: 'lake_district',
        name: 'Lake District',
        description: 'Thiên nhiên thơ mộng.',
        imageUrl: 'https://images.unsplash.com/photo-1486022643506-655513d6a275?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on a wooden pier by a lake in the Lake District. Rolling green hills and water reflecting the sky. Peaceful and quiet.',
      }
    ]
  },
  {
    id: 'switzerland',
    name: 'Thụy Sĩ',
    flag: '🇨🇭',
    imageCover: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'isletwald',
        name: 'Cầu tàu Iseltwald',
        description: 'Bối cảnh phim "Hạ cánh nơi anh".',
        imageUrl: 'https://images.unsplash.com/photo-1629854743475-6e0696b001d9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing at the end of the wooden pier in Iseltwald, Lake Brienz. Turquoise water, green pine trees and Alps mountains in the background. Romantic, drama movie scene style.',
      },
      {
        id: 'zermatt',
        name: 'Núi Matterhorn',
        description: 'Đỉnh núi Toblerone huyền thoại.',
        imageUrl: 'https://images.unsplash.com/photo-1538356396654-20a2e55eb84d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Hiking on a green trail near Zermatt. The distinctive triangular peak of the Matterhorn mountain is clear in the blue sky background. Fresh alpine air.',
      },
      {
        id: 'grindelwald',
        name: 'Thung lũng Grindelwald',
        description: 'Ngôi làng giữa lưng chừng núi.',
        imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on a wooden bench overlooking the Grindelwald valley. Traditional Swiss chalets scattered on green slopes. Huge Eiger mountain face in background.',
      },
      {
        id: 'kapellbrucke',
        name: 'Cầu Chapel (Lucerne)',
        description: 'Cầu gỗ cổ nhất châu Âu.',
        imageUrl: 'https://images.unsplash.com/photo-1563721345-4235e165d774?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing near the water\'s edge in Lucerne. The wooden Chapel Bridge covered in flowers and the Water Tower are in the background. Swans on the lake.',
      },
      {
        id: 'jungfraujoch',
        name: 'Jungfraujoch',
        description: 'Nóc nhà châu Âu.',
        imageUrl: 'https://images.unsplash.com/photo-1508115509939-5079a4054a10?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the snowy Sphinx Observatory platform at Jungfraujoch. Surrounded by eternal snow and glaciers. Sunglasses on, cold snowy atmosphere.',
      },
      {
        id: 'lauterbrunnen',
        name: 'Thung lũng Lauterbrunnen',
        description: 'Thung lũng 72 thác nước.',
        imageUrl: 'https://images.unsplash.com/photo-1499238302526-78b1f45c850d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on a road in the Lauterbrunnen valley. Vertical rock walls on both sides, the famous Staubbach Fall cascading down. Green meadows.',
      },
      {
        id: 'bern_old_town',
        name: 'Phố cổ Bern',
        description: 'Di sản UNESCO trung cổ.',
        imageUrl: 'https://images.unsplash.com/photo-1598448834614-22b464223292?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking near the Zytglogge clock tower in Bern Old Town. Cobblestone streets, arcades, and Swiss flags flying. Medieval city charm.',
      },
      {
        id: 'zurich',
        name: 'Zurich',
        description: 'Thành phố bên hồ.',
        imageUrl: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the Lindenhof hill overlooking Zurich. View of the Limmat river and church steeples below. Peaceful urban scenery.',
      },
      {
        id: 'landwasser',
        name: 'Cầu cạn Landwasser',
        description: 'Tàu tốc hành Glacier Express.',
        imageUrl: 'https://images.unsplash.com/photo-1634994432095-2c8c634df344?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing at a viewpoint (hypothetically) watching the red Glacier Express train cross the curved Landwasser Viaduct. Dramatic cliffs and forest.',
      },
      {
        id: 'lake_geneva',
        name: 'Hồ Geneva',
        description: 'Vòi rồng Jet d\'Eau khổng lồ.',
        imageUrl: 'https://images.unsplash.com/photo-1574677271457-37b510c4a037?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the promenade of Lake Geneva. The massive Jet d\'Eau water fountain is shooting high into the air in the background. Sailboats on the lake.',
      }
    ]
  },
  {
    id: 'australia',
    name: 'Úc',
    flag: '🇦🇺',
    imageCover: 'https://images.unsplash.com/photo-1523482580672-01e6f063f9eb?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'sydney_opera',
        name: 'Nhà hát Opera Sydney',
        description: 'Biểu tượng kiến trúc thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1624138784181-dc7f5b75e52e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the harbour promenade in Sydney. The white sails of the Opera House are distinct in the background under blue sky. Windy, sunny vibe.',
      },
      {
        id: 'bondi_beach',
        name: 'Bãi biển Bondi',
        description: 'Hồ bơi vô cực Icebergs.',
        imageUrl: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Leaning on the white railing overlooking the Bondi Icebergs pool and the ocean waves crashing. Sunny Australian summer day.',
        isBeach: true
      },
      {
        id: 'great_barrier_reef',
        name: 'Rạn san hô Great Barrier',
        description: 'Lặn biển ngắm san hô.',
        imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Snorkeling (underwater view context) or standing on a boat deck in the middle of the Great Barrier Reef. Turquoise clear water, coral reefs visible below. Adventure style.',
        isBeach: true
      },
      {
        id: 'uluru',
        name: 'Núi đá Uluru',
        description: 'Trái tim đỏ của nước Úc.',
        imageUrl: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the red desert landscape with the massive Uluru rock formation in the background at sunset. Orange/red glow. Outback vibe.',
      },
      {
        id: '12_apostles',
        name: '12 Vị Tông Đồ',
        description: 'Kỳ quan đá vôi ven biển.',
        imageUrl: 'https://images.unsplash.com/photo-1490218156170-07a829398f6d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a wooden lookout platform on the Great Ocean Road. Limestone stacks (12 Apostles) rising from the ocean. Dramatic waves and cliffs.',
      },
      {
        id: 'melbourne_hosier',
        name: 'Hẻm Hosier Lane',
        description: 'Nghệ thuật Graffiti đường phố.',
        imageUrl: 'https://images.unsplash.com/photo-1505058925562-b9e763836151?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in a narrow cobblestone laneway covered in colorful street art/graffiti (Hosier Lane, Melbourne). Urban, edgy vibe.',
      },
      {
        id: 'gold_coast',
        name: 'Gold Coast',
        description: 'Thiên đường lướt sóng.',
        imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the endless golden sand beach of Gold Coast. Skyscrapers of Surfers Paradise rising right behind the beach. Surfboards and waves.',
        isBeach: true
      },
      {
        id: 'byron_bay',
        name: 'Ngọn hải đăng Byron Bay',
        description: 'Điểm cực Đông nước Úc.',
        imageUrl: 'https://images.unsplash.com/photo-1596707328634-11883377264a?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the path leading to the white Cape Byron Lighthouse. Blue ocean on both sides. Windy coastal scenery.',
        isBeach: true
      },
      {
        id: 'whitsundays',
        name: 'Biển Whitehaven',
        description: 'Bãi biển cát trắng nhất thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1524820197278-540916411e20?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the pure white silica sand of Whitehaven Beach. Swirling turquoise water patterns. Brightest beach scene imaginable.',
        isBeach: true
      },
      {
        id: 'harbour_bridge',
        name: 'Cầu Cảng Sydney',
        description: 'Leo cầu ngắm toàn cảnh.',
        imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the walkway of the Sydney Harbour Bridge. Steel arches above, Opera House and city skyline visible below. Urban climbing adventure.',
      }
    ]
  },
  {
    id: 'egypt',
    name: 'Ai Cập',
    flag: '🇪🇬',
    imageCover: 'https://images.unsplash.com/photo-1539650116455-251d9a044617?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'pyramids_sphinx',
        name: 'Kim tự tháp & Nhân sư',
        description: 'Khám phá huyền bí ngàn năm.',
        imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the desert sand in Giza. The Great Sphinx and Pyramids are majestic in the background. Bright desert sun, clear sky. Adventure travel style.',
      },
      {
        id: 'abu_simbel',
        name: 'Abu Simbel',
        description: 'Đền thờ Ramses II khổng lồ.',
        imageUrl: 'https://images.unsplash.com/photo-1576014131795-d440191a8e8b?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in front of the colossal seated statues of Ramses II at Abu Simbel temple. Massive stone figures carved into the mountain.',
      },
      {
        id: 'karnak',
        name: 'Đền Karnak',
        description: 'Rừng cột đá vĩ đại.',
        imageUrl: 'https://images.unsplash.com/photo-1563804825656-7883d6a4c28f?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking among the giant hypostyle hall columns of Karnak Temple in Luxor. Ancient hieroglyphs carved on stone. Shafts of light filtering through.',
      },
      {
        id: 'luxor_temple',
        name: 'Đền Luxor',
        description: 'Di tích bên dòng sông Nile.',
        imageUrl: 'https://images.unsplash.com/photo-1566838318101-35f9927d3539?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing between the statues and obelisks at the entrance of Luxor Temple. Sunset light turning the stone golden.',
      },
      {
        id: 'nile_cruise',
        name: 'Du thuyền sông Nile',
        description: 'Lênh đênh trên dòng sông huyền thoại.',
        imageUrl: 'https://images.unsplash.com/photo-1599388308801-447047f3f1e1?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Relaxing on the sundeck of a Nile cruise ship. Palm trees and desert dunes passing by on the river bank. Felucca sailboats in background.',
      },
      {
        id: 'cairo_citadel',
        name: 'Thành cổ Cairo',
        description: 'Nhà thờ Hồi giáo Alabaster.',
        imageUrl: 'https://images.unsplash.com/photo-1553913861-c0fdd5261b0c?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the courtyard of the Mosque of Muhammad Ali at the Citadel. Large domes and minarets. View of Cairo city below.',
      },
      {
        id: 'valley_kings',
        name: 'Thung lũng các vị Vua',
        description: 'Nơi yên nghỉ của các Pharaoh.',
        imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the dry path leading into the Valley of the Kings. Limestone hills and tomb entrances. Hot desert atmosphere.',
      },
      {
        id: 'khan_khalili',
        name: 'Chợ Khan el-Khalili',
        description: 'Chợ cổ nhất Cairo.',
        imageUrl: 'https://images.unsplash.com/photo-1576495370285-d8ec7676735e?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking in a narrow, bustling alley of Khan el-Khalili market. Lanterns, spices, and carpets hanging in shops. Vivid colors and textures.',
      },
      {
        id: 'red_sea',
        name: 'Biển Đỏ (Hurghada)',
        description: 'Thiên đường nghỉ dưỡng biển.',
        imageUrl: 'https://images.unsplash.com/photo-1568294657159-4d64024d9c4c?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Relaxing on a sunbed under a straw umbrella at a Red Sea resort. Crystal clear turquoise water and yellow sand. Vacation mode.',
        isBeach: true
      },
      {
        id: 'alexandria_lib',
        name: 'Thư viện Alexandria',
        description: 'Kiến trúc hiện đại bên Địa Trung Hải.',
        imageUrl: 'https://images.unsplash.com/photo-1594895058727-b610c3c2f9e4?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in front of the modern sloping granite wall of the Bibliotheca Alexandrina. Reflection pool and blue sky. Modern architectural contrast.',
      }
    ]
  },
   {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    imageCover: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop',
    destinations: [
      {
        id: 'rio_christ',
        name: 'Tượng Chúa Cứu Thế',
        description: 'Ngắm toàn cảnh Rio de Janeiro.',
        imageUrl: 'https://images.unsplash.com/photo-1598981492586-79643d3a63a5?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing with arms wide open (imitating the statue) on the observation deck at Christ the Redeemer. Panoramic view of Rio de Janeiro, mountains and sea below. High altitude, misty.',
      },
      {
        id: 'sugarloaf',
        name: 'Núi Sugarloaf',
        description: 'Cáp treo ngắm vịnh Guanabara.',
        imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the summit of Sugarloaf Mountain. Cable cars moving in the background. Sunset over the bay and city lights starting to twinkle.',
      },
      {
        id: 'copacabana',
        name: 'Biển Copacabana',
        description: 'Bãi biển nổi tiếng nhất thế giới.',
        imageUrl: 'https://images.unsplash.com/photo-1518182170546-0766be6f3740?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking on the famous black and white wave-patterned promenade of Copacabana. Beach volleyball players and ocean in background. Energetic vibe.',
        isBeach: true
      },
      {
        id: 'iguazu',
        name: 'Thác Iguazu',
        description: 'Hệ thống thác nước hùng vĩ.',
        imageUrl: 'https://images.unsplash.com/photo-1563385732-c51d6be1e43c?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on the walkway overlooking the Devil\'s Throat at Iguazu Falls. Massive amounts of water thundering down. Mist and rainbows around. Wet and wild.',
      },
      {
        id: 'selaron',
        name: 'Cầu thang Selarón',
        description: 'Bậc thang gốm sứ rực rỡ.',
        imageUrl: 'https://images.unsplash.com/photo-1566418304037-975949540b61?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting on the colorful tiled steps of Escadaria Selarón. Vibrant red, yellow, and blue tiles. Artistic bohemian vibe.',
      },
      {
        id: 'amazon',
        name: 'Rừng nhiệt đới Amazon',
        description: 'Khám phá lá phổi xanh.',
        imageUrl: 'https://images.unsplash.com/photo-1533596918803-518293998782?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Sitting in a canoe on a winding river in the Amazon rainforest. Dense green jungle vegetation on banks. Wildlife adventure vibe.',
      },
      {
        id: 'sambadrome',
        name: 'Sân vận động Sambadrome',
        description: 'Sàn diễn Carnival rực lửa.',
        imageUrl: 'https://images.unsplash.com/photo-1551699042-45e353273e72?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing in the middle of the Sambadrome avenue. Colorful grandstands on sides (even if empty, grand scale). Imagine the carnival energy.',
      },
      {
        id: 'lencois',
        name: 'Cồn cát Lençóis',
        description: 'Sa mạc cát trắng và hồ nước xanh.',
        imageUrl: 'https://images.unsplash.com/photo-1571253013898-1e4334304892?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a white sand dune in Lençóis Maranhenses. Crystal clear blue freshwater lagoon at the bottom of the dune. Surreal landscape.',
        isBeach: true
      },
      {
        id: 'pelourinho',
        name: 'Phố cổ Pelourinho',
        description: 'Trung tâm lịch sử Salvador.',
        imageUrl: 'https://images.unsplash.com/photo-1577488339591-9c600109044d?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Walking in a cobblestone square in Pelourinho. Pastel colored colonial buildings and baroque churches. Afro-Brazilian cultural vibe.',
      },
      {
        id: 'pantanal',
        name: 'Vùng đầm lầy Pantanal',
        description: 'Thiên đường động vật hoang dã.',
        imageUrl: 'https://images.unsplash.com/photo-1596700085424-df3b36365f02?q=80&w=600&auto=format&fit=crop',
        promptContext: 'Standing on a wooden viewing tower or boat in the Pantanal wetlands. Water lilies and lush green nature. Birdwatching binoculars context.',
      }
    ]
  }
];