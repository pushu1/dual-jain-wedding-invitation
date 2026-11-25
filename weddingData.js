// Wedding Information Data Model - Entirely in English
// Accurate Transliteration and Translations from Original Reference Cards

const WEDDING_DATA = {
  header: {
    sacredInvocations: [
      "Salutations to Shri Baan Mataji",
      "Salutations to Lord Shri Ganesha",
      "Salutations to Shri Majisa & Holy Ancestors"
    ],
    traditionalVerse: {
      title: "Divine Invocations & Auspicious Grace",
      verse: "O Lord Ganesha, Remover of Obstacles and Bestower of Auspicious Fortune, graced by Riddhi and Siddhi, please arrive and fulfill our sacred celebration.",
      rhyme: "Written with heartfelt love, please honor our call; this priceless moment beckons, bestow your blessings on all."
    }
  },

  couples: [
    {
      id: "couple-1",
      role1: "Groom",
      name1: "Ayushman Akash",
      parents1: "Mrs. Anuradha & Mr. Kailash Gehlot",
      role2: "Bride",
      name2: "Ayushmati Reena",
      parents2: "Mrs. Jashoda Devi & Mr. Gopalji Chauhan",
      auspiciousDate: "Thursday, 10 December 2026",
      calendarContext: "Vikram Samvat 2083 Margashirsha Shukla Paksha",
      description: "With divine blessings and joyous hearts, embarking together on the sacred journey of matrimony.",
      lineage: {
        greatGrandparents: "Late Mrs. Lehari Bai & Late Mr. Gyarsilalji",
        grandparents: "Mrs. Durga Bai & Late Mr. Madanlalji Gehlot"
      }
    },
    {
      id: "couple-2",
      role1: "Bride",
      name1: "Ayushmati Shivani (Jeenu)",
      parents1: "Mrs. Anuradha & Mr. Kailash Gehlot",
      role2: "Groom",
      name2: "Ayushman Dheeraj Ji",
      parents2: "Mrs. Renu Ji & Mr. Mukeshji Parihar",
      auspiciousDate: "Saturday, 12 December 2026",
      calendarContext: "Vikram Samvat 2083 Margashirsha Shukla Paksha 3",
      description: "Bound by love, sacred vows, and cherished family traditions, stepping into a lifetime of harmony.",
      lineage: {
        greatGrandparents: "Late Mrs. Lehari Bai & Late Mr. Gyarsilalji",
        grandparents: "Mrs. Durga Bai & Late Mr. Madanlalji Gehlot"
      }
    }
  ],

  mainInvitation: {
    title: "THE ROYAL WEDDING INVITATION",
    subtitle: "Auspicious Union of Two Soulful Couples",
    mainDate: "Saturday, 12 December 2026",
    message: "By the boundless grace and divine blessings of Lord Shri Vinayak Ji Maharaj, we cordially invite you and your family to grace the auspicious wedding celebration of our beloved children. Your warm presence and pious blessings will illuminate their new beginning and bestow lasting happiness on our families.",
    salutation: "Respected Family, Relatives & Esteemed Friends,"
  },

  events: [
    {
      id: "event-1",
      name: "Ghritpaan Ceremony",
      subtitle: "Auspicious Ghee & Sanctification Ritual",
      date: "7 December 2026",
      day: "Monday",
      time: "3:15 PM",
      icon: "flame",
      description: "The sacred traditional ritual signifying purity, divine blessings, and auspicious initiation into the wedding celebrations."
    },
    {
      id: "event-2",
      name: "Vinayak Ceremony",
      subtitle: "Lord Ganesha Auspicious Invocation",
      date: "7 December 2026",
      day: "Monday",
      time: "5:15 PM",
      icon: "om",
      description: "Ceremonial invocation of Lord Ganesha to bless the family, consecrate the home, and remove all obstacles."
    },
    {
      id: "event-3",
      name: "Haldi & Mehendi",
      subtitle: "Turmeric Blessings & Henna Artistry",
      date: "8 December 2026",
      day: "Tuesday",
      time: "1:15 PM",
      icon: "sparkles",
      description: "A joyous celebration adorned with radiant golden turmeric paste, intricate henna artwork, melodious songs, and cheerful laughter."
    },
    {
      id: "event-4",
      name: "Mayra Ceremony",
      subtitle: "Maternal Uncle's Traditional Offerings",
      date: "9 December 2026",
      day: "Wednesday",
      time: "12:15 PM",
      icon: "gift",
      description: "The grand Bhat/Mayra ceremony where respected maternal uncles arrive with ceremonial wedding garments, jewels, and blessings."
    },
    {
      id: "event-5",
      name: "Bandoli Ceremony",
      subtitle: "Royal Wedding Procession & Folk Rejoicing",
      date: "9 December 2026",
      day: "Wednesday",
      time: "5:15 PM",
      icon: "crown",
      description: "An exuberant traditional procession celebrating the couple with royal pomp, music, folk instruments, and sweets."
    },
    {
      id: "event-6",
      name: "Ladies Sangeet",
      subtitle: "Musical Evening & Traditional Folk Dances",
      date: "9 December 2026",
      day: "Wednesday",
      time: "8:00 PM",
      icon: "music",
      description: "A spectacular musical night featuring vibrant Rajasthani folk dances, family performances, and festive harmony."
    },
    {
      id: "event-7",
      name: "Departure of Baraat",
      subtitle: "Groom's Royal Wedding Procession Departs",
      date: "10 December 2026",
      day: "Thursday",
      time: "12:15 PM",
      icon: "horse",
      description: "The grand ceremonial departure of the groom's procession accompanied by joyous dhol beats, brass bands, and relatives."
    },
    {
      id: "event-8",
      name: "Welcome of Baraat",
      subtitle: "Grand Royal Reception of Baraat",
      date: "12 December 2026",
      day: "Saturday",
      time: "5:15 PM",
      icon: "flower",
      description: "Warm traditional greeting with flower showers, rosewater essence, ceremonial aarti, and joyful welcoming of the baraat."
    },
    {
      id: "event-9",
      name: "Wedding Ceremony (Panigrahan Sanskar)",
      subtitle: "Sacred Vedic Nuptials & Seven Holy Vows",
      date: "12 December 2026",
      day: "Saturday",
      time: "10:15 PM",
      icon: "heart-handshake",
      description: "The sacred nuptial rites around the holy fire where both couples take the sacred vows of eternal union and companionship."
    }
  ],

  reception: {
    title: "BLESSING CEREMONY & WEDDING RECEPTION",
    tagline: "Ashirwad Samaroh & Grand Wedding Feast (Pritibhoj)",
    date: "Saturday, 12 December 2026",
    time: "From 6:15 PM onwards until your arrival",
    venueName: "Kumawat Vatika",
    venueAddress: "Punayata Road, Pali, Rajasthan – 306401, India",
    notes: "We humbly request the pleasure of your esteemed company to shower your heartfelt blessings upon both couples and enjoy a sumptuous traditional royal dinner."
  },

  travelNotes: [
    {
      route: "Samdari Route",
      text: "The Baraat of respected Samdhi Shri Chhagan ji, Kishan ji, Nandkishor ji, Gopal ji (son of Dhanraj ji Chauhan) will proceed to Samdari by Bus."
    },
    {
      route: "Balotra Route",
      text: "The Baraat of respected Samdhi Shri Bhanwarlal ji, Gopal ji, Murli ji, Manohar ji, Mukesh ji (son of Madanlal ji) will arrive from Balotra by Bus."
    }
  ],

  familyLetter: {
    title: "TRADITIONAL FAMILY INVITATION LETTER",
    intro: "Dear Kinfolk, Respected Elders & Esteemed Friends,",
    body: "With the pious blessings of Lord Vinayak Maharaj and our revered ancestors, it brings our family immense joy to invite you to celebrate the sacred matrimonial union of our beloved grandchildren and children. Two divine unions are taking place together under one roof, doubling our happiness and celebrations.",
    childPleasure: {
      quote: "Please do come and celebrate my dearest Uncle and Aunt's wedding with lots of fun and joy!",
      name: "Kunwar Raj Solanki (Ladu)"
    },
    eagerAwaiting: [
      "Jaanvi", "Pihu", "Adhishree", "Swaroopa", "Yakshita", 
      "Pari", "Yashvi", "Tanushree", "Komal", "Veera"
    ]
  },

  familySections: {
    specialBlessings: {
      title: "Special Blessings",
      members: [
        "Mrs. Durga Devi",
        "Mrs. Kamla Devi",
        "Mrs. Annu Devi"
      ]
    },

    specialGuests: {
      title: "Special Guests & Dignitaries",
      members: [
        "Mr. Dineshji (Bhopaji)",
        "Mr. Sanjay ji Rathore"
      ]
    },

    specialRequest: {
      title: "Special Sincere Request",
      members: [
        "Mr. Rakeshji",
        "Mr. Rajeshji",
        "Mr. Vinodji"
      ]
    },

    welcomers: {
      title: "Welcoming You With Warmth (Swagatatur)",
      members: [
        "Mrs. Kamla Devi - Late Banshilalji",
        "Mrs. Bhaga Bai - Ishwarlalji"
      ]
    },

    hosts: {
      title: "Hosts & Welcome Committee (Swagatkarta)",
      members: [
        "Mrs. Santosh - Advocate Kishorji Gehlot",
        "Mrs. Sunita - Mr. Umesh ji",
        "Mrs. Taroona - Mr. Shekhar",
        "Mrs. Kaushalya - Mr. Ramesh",
        "Mrs. Poonam - Late Ashok ji",
        "Mrs. Kashak - Mr. Mahadev",
        "Mrs. Deepika - Mr. Tarun ji",
        "Mrs. Rajeshwari - Mr. Dev ji"
      ]
    },

    humbleSolicitations: {
      title: "Humble Solicitations (Vineet)",
      members: [
        "Mr. Banshilalji", "Mr. Punamchandji",
        "Mr. Kanhaiyalalji", "Mr. Lalchandji",
        "Mr. Ranchhodji", "Mr. Kailashji", "Mr. Mukeshji",
        "Mr. Kishorji", "Mr. Ratanji", "Mr. Shekharji",
        "Mr. Jitendraji", "Mr. Gresik", "Mr. Krishna", "Mr. Jay",
        "Mr. Siddharth",
        "& the Entire Gehlot Family"
      ]
    },

    sonsInLawSide: {
      title: "Sons-in-law & Daughters' Side (Javai Paksh)",
      members: [
        "Mrs. Kamla Devi - Late Devkishanji Parihar",
        "Mrs. Gayatri - Mr. Chandraprakash ji",
        "Mrs. Premlata - Mr. Ashok ji",
        "Mrs. Rekha - Mr. Susheel ji",
        "Mrs. Bhagwanti - Mr. Dilip ji",
        "Mrs. Deepika - Mr. Mahendra ji",
        "Mrs. Rekha - Mr. Manish ji",
        "Mrs. Pooja - Mr. Laxman ji",
        "Mrs. Taroona - Mr. Tarun ji",
        "Mrs. Pramila - Mr. Ashok ji",
        "Mrs. Manju - Mr. Gajendra ji",
        "Mrs. Khushboo - Mr. Prateek ji"
      ]
    },

    maternalFamily: {
      title: "Maternal Family (Nanihal Paksh)",
      members: [
        "Mr. Ashok ji Bhomiya", "Late Banshilalji",
        "Mr. Kailashji", "Mr. Rameshwarji", "Mr. Chandraprakashji",
        "Mr. Nathulalji", "Mr. Dineshji", "Mr. Rajendraji",
        "Mr. Chandraprakashji", "Mr. Rakeshji",
        "Mr. Rameshji", "Mr. Pintu ji", "Mr. Vikramji", "Mr. Manohar ji",
        "Mr. Rameshji", "Mr. Himmat", "Mr. Mahadev", "Mr. Bhavesh",
        "Mr. Naresh", "Mr. Dhiraj", "Mr. Rajendra",
        "& Entire Parihar Family (Jodhpur)"
      ]
    },

    nephewsSide: {
      title: "Nephews & Sister's Family (Bhanej Paksh)",
      members: [
        "Arun", "Gaurav", "Bhavya",
        "Jayesh", "Raunak", "Vaibhav (Kanha)", "Bhavya",
        "Raghuvir", "Kunwar Raj Solanki"
      ]
    }
  },

  familyFirms: [
    {
      name: "Gehlot Dhaar Center",
      location: "Pali-Marwar"
    },
    {
      name: "Jasol Maa Hastkala Udyog",
      location: "Pali-Marwar"
    }
  ],

  residence: {
    head: "Mr. Kailashchand",
    lineage: "Son of Late Shri Madanlalji Gehlot (Lohar)",
    familyCrest: "Gehlot Parivar - Suryavanshi Rajput",
    addressLine1: "162, Pancham Nagar, Near Khetaramji Pyau Wali Gali",
    addressLine2: "Ramdev Road, Pali-Marwar",
    stateAndPin: "Rajasthan – 306401, India",
    phones: [
      { label: "Kailashchand", number: "+91 9214537106", tel: "+919214537106" },
      { label: "Akash", number: "+91 8824338255", tel: "+918824338255" },
      { label: "Residence Care", number: "+91 7014922660", tel: "+917014922660" }
    ],
    whatsapp: "+919214537106",
    mapsQuery: "Kumawat+Vatika+Punayata+Road+Pali+Rajasthan"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WEDDING_DATA;
}
