export interface ItineraryActivity {
  day: number;
  title: string;
  description: string;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: { standard: string; luxury: string };
  countries: string[];
  destinations: string[];
  highlights: string[];
  activities: ItineraryActivity[];
  luxuryLodges?: string[];
  image: string;
  description: string;
}

export const wildlifeItinerariesData: Itinerary[] = [
  {
    id: "classic-kenya-safari-beach",
    title: "Classic Kenya Safari + Beach",
    duration: { standard: "12 days", luxury: "8 days" },
    countries: ["Kenya"],
    description: "Experience the best of Kenya's wildlife and pristine beaches in this comprehensive safari adventure.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    destinations: [
      "Nairobi",
      "Samburu National Reserve",
      "Lake Nakuru National Park",
      "Masai Mara National Reserve",
      "Diani Beach"
    ],
    highlights: [
      "Game drives in Samburu, Lake Nakuru, and Masai Mara",
      "Witness the Great Migration (seasonal)",
      "Visit to David Sheldrick Elephant Orphanage",
      "Relaxation on pristine Diani Beach"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Meet and greet at airport, transfer to hotel" },
      { day: 2, title: "Nairobi to Samburu", description: "Drive north through the Great Rift Valley to Samburu" },
      { day: 3, title: "Full Day in Samburu", description: "Morning and afternoon game drives" },
      { day: 4, title: "Samburu to Lake Nakuru", description: "Travel to Lake Nakuru for afternoon game drive" },
      { day: 5, title: "Lake Nakuru to Masai Mara", description: "Journey to the iconic Masai Mara" },
      { day: 6, title: "Full Day in Masai Mara", description: "Morning and afternoon game drives" },
      { day: 7, title: "Full Day in Masai Mara", description: "Optional hot air balloon safari" },
      { day: 8, title: "Masai Mara to Nairobi", description: "Visit elephant orphanage en route" },
      { day: 9, title: "Nairobi to Diani Beach", description: "Flight to coast for beach relaxation" },
      { day: 10, title: "Diani Beach", description: "Free day at leisure" },
      { day: 11, title: "Diani Beach", description: "Water sports and beach activities" },
      { day: 12, title: "Departure", description: "Transfer to airport for departure" }
    ],
    luxuryLodges: ["Saruni Samburu", "Lake Nakuru Sopa Lodge", "Governors' Camp", "The Sands at Nomad"]
  },
  {
    id: "northern-kenya-explorer-beach",
    title: "Northern Kenya Explorer + Beach",
    duration: { standard: "12 days", luxury: "7-8 days" },
    countries: ["Kenya"],
    description: "Discover Kenya's hidden gems in Samburu and Lewa, with rhino tracking and cultural experiences.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    destinations: [
      "Nairobi",
      "Samburu National Reserve",
      "Lewa Wildlife Conservancy",
      "Diani Beach"
    ],
    highlights: [
      "Game drives in Samburu and Lewa",
      "Rhino tracking at Lewa",
      "Visit to David Sheldrick Elephant Orphanage",
      "Beach relaxation at Diani"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Airport pickup and hotel transfer" },
      { day: 2, title: "Nairobi to Samburu", description: "Scenic drive to Samburu Reserve" },
      { day: 3, title: "Full Day in Samburu", description: "Morning and afternoon game drives" },
      { day: 4, title: "Full Day in Samburu", description: "Cultural visit to Samburu village" },
      { day: 5, title: "Samburu to Lewa", description: "Transfer to Lewa Conservancy" },
      { day: 6, title: "Full Day in Lewa", description: "Rhino tracking and game drives" },
      { day: 7, title: "Full Day in Lewa", description: "Conservation activities" },
      { day: 8, title: "Lewa to Nairobi", description: "Return to Nairobi, visit elephant orphanage" },
      { day: 9, title: "Nairobi to Diani Beach", description: "Flight to coast" },
      { day: 10, title: "Diani Beach", description: "Beach relaxation" },
      { day: 11, title: "Diani Beach", description: "Optional water activities" },
      { day: 12, title: "Departure", description: "Transfer to airport" }
    ],
    luxuryLodges: ["Saruni Samburu", "Lewa Safari Camp", "The Sands at Nomad"]
  },
  {
    id: "kenya-tanzania-grand-safari-zanzibar",
    title: "Kenya & Tanzania Safari + Zanzibar",
    duration: { standard: "14 days", luxury: "9 days" },
    countries: ["Kenya", "Tanzania"],
    description: "Explore Kenya and Tanzania's legendary parks combined with relaxing beach time in Zanzibar.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    destinations: [
      "Nairobi",
      "Amboseli National Park",
      "Tarangire National Park",
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Zanzibar"
    ],
    highlights: [
      "Views of Mount Kilimanjaro from Amboseli",
      "Big game viewing in Serengeti",
      "Ngorongoro Crater descent",
      "Spice tour and beach time in Zanzibar"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Airport transfer and briefing" },
      { day: 2, title: "Nairobi to Amboseli", description: "Drive to Amboseli with Kilimanjaro views" },
      { day: 3, title: "Full Day in Amboseli", description: "Game drives with elephant herds" },
      { day: 4, title: "Amboseli to Arusha", description: "Cross border to Tanzania" },
      { day: 5, title: "Arusha to Tarangire", description: "Game drive in Tarangire" },
      { day: 6, title: "Tarangire to Serengeti", description: "Journey to Serengeti plains" },
      { day: 7, title: "Full Day in Serengeti", description: "Extensive game viewing" },
      { day: 8, title: "Full Day in Serengeti", description: "Optional balloon safari" },
      { day: 9, title: "Serengeti to Ngorongoro", description: "Travel to crater rim" },
      { day: 10, title: "Ngorongoro Crater", description: "Crater descent and game drive" },
      { day: 11, title: "Arusha to Zanzibar", description: "Flight to Zanzibar" },
      { day: 12, title: "Zanzibar", description: "Spice tour and Stone Town exploration" },
      { day: 13, title: "Zanzibar", description: "Beach relaxation" },
      { day: 14, title: "Departure", description: "Transfer to airport" }
    ],
    luxuryLodges: ["Tortilis Camp", "Tarangire Treetops", "Four Seasons Safari Lodge Serengeti", "Ngorongoro Crater Lodge", "The Residence Zanzibar"]
  }
];

export const womenOnlyItinerariesData: Itinerary[] = [
  {
    id: "sisterhood-kenya-safari",
    title: "Sisterhood Safari - Kenya",
    duration: { standard: "10 days", luxury: "7 days" },
    countries: ["Kenya"],
    description: "Connect with like-minded women while exploring Kenya's iconic wildlife destinations.",
    image: "/images/homepage/homepage-adventure-travel.jpg",
    destinations: [
      "Nairobi",
      "Masai Mara National Reserve",
      "Lake Naivasha",
      "Diani Beach"
    ],
    highlights: [
      "Women-led guided safaris in Masai Mara",
      "Empowerment workshops and wellness sessions",
      "Visit to women's cooperatives and community projects",
      "Beach yoga and relaxation at Diani"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Welcome dinner and group introductions" },
      { day: 2, title: "Nairobi to Masai Mara", description: "Journey to Masai Mara with female guide" },
      { day: 3, title: "Full Day in Masai Mara", description: "Morning game drive and afternoon empowerment workshop" },
      { day: 4, title: "Full Day in Masai Mara", description: "Game drive and visit to Masai women's cooperative" },
      { day: 5, title: "Masai Mara to Lake Naivasha", description: "Travel to Lake Naivasha" },
      { day: 6, title: "Lake Naivasha", description: "Boat safari and wellness activities" },
      { day: 7, title: "Naivasha to Diani Beach", description: "Flight to coast for beach relaxation" },
      { day: 8, title: "Diani Beach", description: "Beach yoga and spa treatments" },
      { day: 9, title: "Diani Beach", description: "Free day for water activities or relaxation" },
      { day: 10, title: "Departure", description: "Farewell breakfast and airport transfer" }
    ],
    luxuryLodges: ["Governors' Camp", "Lake Naivasha Sopa Resort", "Almanara Luxury Resort"]
  },
  {
    id: "women-empowerment-uganda",
    title: "Women's Empowerment - Uganda",
    duration: { standard: "9 days", luxury: "6 days" },
    countries: ["Uganda"],
    description: "Gorilla trekking combined with visits to women's community projects in Uganda.",
    image: "/images/homepage/discover-ea-sa-2.jpg",
    destinations: [
      "Entebbe",
      "Bwindi Impenetrable Forest",
      "Queen Elizabeth National Park",
      "Kampala"
    ],
    highlights: [
      "Mountain gorilla trekking with female rangers",
      "Women's craft cooperative visits",
      "Game drives in Queen Elizabeth National Park",
      "Cultural exchange with local women's groups"
    ],
    activities: [
      { day: 1, title: "Arrival in Entebbe", description: "Airport pickup and hotel transfer" },
      { day: 2, title: "Entebbe to Bwindi", description: "Scenic drive to Bwindi Forest" },
      { day: 3, title: "Gorilla Trekking", description: "Mountain gorilla trekking experience" },
      { day: 4, title: "Community Visit", description: "Visit to women's craft cooperative" },
      { day: 5, title: "Bwindi to Queen Elizabeth", description: "Transfer to Queen Elizabeth National Park" },
      { day: 6, title: "Queen Elizabeth NP", description: "Morning game drive and boat cruise" },
      { day: 7, title: "Queen Elizabeth to Kampala", description: "Return to Kampala with cultural stops" },
      { day: 8, title: "Kampala", description: "City tour and women's social enterprise visits" },
      { day: 9, title: "Departure", description: "Transfer to Entebbe for departure" }
    ],
    luxuryLodges: ["Bwindi Lodge", "Mweya Safari Lodge", "Kampala Serena Hotel"]
  },
  {
    id: "coastal-culture-women-tanzania",
    title: "Coastal Culture Women's Journey",
    duration: { standard: "8 days", luxury: "6 days" },
    countries: ["Tanzania"],
    description: "Explore Tanzania's coast with focus on women's cultural experiences and beach relaxation.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    destinations: [
      "Dar es Salaam",
      "Zanzibar Stone Town",
      "Nungwi Beach",
      "Pemba Island"
    ],
    highlights: [
      "Spice plantation tours led by local women",
      "Stone Town cultural walking tours",
      "Beach wellness and yoga sessions",
      "Women's seaweed farming cooperative visit"
    ],
    activities: [
      { day: 1, title: "Arrival in Dar es Salaam", description: "City orientation and welcome dinner" },
      { day: 2, title: "Dar to Zanzibar", description: "Ferry to Zanzibar, Stone Town exploration" },
      { day: 3, title: "Stone Town", description: "Women-led spice tour and cooking class" },
      { day: 4, title: "Zanzibar to Nungwi", description: "Transfer to Nungwi Beach" },
      { day: 5, title: "Nungwi Beach", description: "Beach yoga and snorkeling" },
      { day: 6, title: "Pemba Island Day Trip", description: "Visit women's seaweed cooperative" },
      { day: 7, title: "Nungwi Beach", description: "Wellness day and sunset dhow cruise" },
      { day: 8, title: "Departure", description: "Transfer to airport" }
    ],
    luxuryLodges: ["Park Hyatt Zanzibar", "Zuri Zanzibar", "The Manta Resort"]
  }
];

export const familyItinerariesData: Itinerary[] = [
  {
    id: "family-adventure-kenya",
    title: "Kenya Family Adventure",
    duration: { standard: "10 days", luxury: "8 days" },
    countries: ["Kenya"],
    description: "Perfect family safari with child-friendly activities and educational wildlife experiences.",
    image: "/images/homepage/homepage-mice-solutions.jpg",
    destinations: [
      "Nairobi",
      "Samburu National Reserve",
      "Masai Mara National Reserve",
      "Diani Beach"
    ],
    highlights: [
      "Junior ranger programs and bush walks",
      "Visit to elephant orphanage and giraffe centre",
      "Family-friendly game drives",
      "Beach activities and water sports"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Family welcome and hotel check-in" },
      { day: 2, title: "Nairobi Wildlife Experience", description: "Elephant orphanage and giraffe centre visits" },
      { day: 3, title: "Nairobi to Samburu", description: "Scenic drive with stops at viewpoints" },
      { day: 4, title: "Samburu Safari", description: "Family game drives and junior ranger activities" },
      { day: 5, title: "Samburu to Masai Mara", description: "Journey to Masai Mara" },
      { day: 6, title: "Masai Mara Adventure", description: "Morning and afternoon family game drives" },
      { day: 7, title: "Masai Mara Cultural Day", description: "Masai village visit and cultural activities for kids" },
      { day: 8, title: "Masai Mara to Diani", description: "Flight to coast for beach fun" },
      { day: 9, title: "Diani Beach", description: "Family beach activities and water sports" },
      { day: 10, title: "Departure", description: "Leisure morning and airport transfer" }
    ],
    luxuryLodges: ["Saruni Samburu", "Basecamp Masai Mara", "Leopard Beach Resort"]
  },
  {
    id: "gorilla-family-uganda",
    title: "Uganda Family Gorilla Experience",
    duration: { standard: "8 days", luxury: "6 days" },
    countries: ["Uganda"],
    description: "Family-friendly gorilla trekking adventure with age-appropriate wildlife activities.",
    image: "/images/homepage/discover-ea-sa-3.jpg",
    destinations: [
      "Entebbe",
      "Murchison Falls National Park",
      "Kibale Forest",
      "Bwindi Impenetrable Forest"
    ],
    highlights: [
      "Family gorilla trekking (children 15+)",
      "Boat cruise to Murchison Falls",
      "Chimpanzee tracking in Kibale",
      "Wildlife education programs for children"
    ],
    activities: [
      { day: 1, title: "Arrival in Entebbe", description: "Airport pickup and family briefing" },
      { day: 2, title: "Entebbe to Murchison Falls", description: "Journey to Murchison Falls NP" },
      { day: 3, title: "Murchison Falls", description: "Game drive and boat cruise to falls" },
      { day: 4, title: "Murchison to Kibale", description: "Transfer with community visit" },
      { day: 5, title: "Kibale Forest", description: "Chimpanzee tracking and nature walk" },
      { day: 6, title: "Kibale to Bwindi", description: "Scenic drive to Bwindi" },
      { day: 7, title: "Gorilla Trekking Day", description: "Family gorilla trekking experience" },
      { day: 8, title: "Departure", description: "Return to Entebbe for departure" }
    ],
    luxuryLodges: ["Paraa Safari Lodge", "Primate Lodge Kibale", "Buhoma Lodge"]
  },
  {
    id: "tanzania-family-safari",
    title: "Tanzania Family Safari Classic",
    duration: { standard: "9 days", luxury: "7 days" },
    countries: ["Tanzania"],
    description: "Explore Tanzania's northern circuit with family-focused activities and comfortable lodges.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    destinations: [
      "Arusha",
      "Tarangire National Park",
      "Ngorongoro Crater",
      "Serengeti National Park"
    ],
    highlights: [
      "Big Five game viewing",
      "Crater descent in Ngorongoro",
      "Educational wildlife talks for children",
      "Family bush dinners under the stars"
    ],
    activities: [
      { day: 1, title: "Arrival in Arusha", description: "Airport transfer and safari briefing" },
      { day: 2, title: "Arusha to Tarangire", description: "Game drive in Tarangire NP" },
      { day: 3, title: "Tarangire Safari", description: "Full day of family game drives" },
      { day: 4, title: "Tarangire to Ngorongoro", description: "Journey to crater rim" },
      { day: 5, title: "Ngorongoro Crater", description: "Crater descent and picnic lunch" },
      { day: 6, title: "Ngorongoro to Serengeti", description: "Transfer to Serengeti plains" },
      { day: 7, title: "Serengeti Safari", description: "Full day game drives with junior ranger program" },
      { day: 8, title: "Serengeti", description: "Morning game drive and bush dinner" },
      { day: 9, title: "Departure", description: "Flight back to Arusha" }
    ],
    luxuryLodges: ["Tarangire Safari Lodge", "Ngorongoro Farm House", "Serengeti Serena Safari Lodge"]
  }
];

export const connectionItinerariesData: Itinerary[] = [
  {
    id: "roots-return-kenya",
    title: "Roots Return - Kenya",
    duration: { standard: "12 days", luxury: "9 days" },
    countries: ["Kenya"],
    description: "Reconnect with ancestral heritage through cultural immersion and historical exploration.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    destinations: [
      "Nairobi",
      "Lamu Island",
      "Mombasa",
      "Masai Mara"
    ],
    highlights: [
      "Genealogy research assistance in national archives",
      "Visit to historical coastal settlements",
      "Cultural exchange with local communities",
      "Traditional ceremonies and storytelling sessions"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Heritage orientation and welcome" },
      { day: 2, title: "Nairobi Heritage Tour", description: "National Museum and archives research" },
      { day: 3, title: "Nairobi to Lamu", description: "Flight to historic Lamu Island" },
      { day: 4, title: "Lamu Cultural Immersion", description: "Old Town tour and Swahili cultural experiences" },
      { day: 5, title: "Lamu Heritage Sites", description: "Visit historical settlements and museums" },
      { day: 6, title: "Lamu to Mombasa", description: "Journey to Mombasa coast" },
      { day: 7, title: "Mombasa Historical Tour", description: "Fort Jesus and old town exploration" },
      { day: 8, title: "Mombasa Cultural Day", description: "Community visits and traditional experiences" },
      { day: 9, title: "Mombasa to Masai Mara", description: "Flight to Masai Mara" },
      { day: 10, title: "Masai Mara", description: "Cultural exchange and wildlife experience" },
      { day: 11, title: "Masai Mara to Nairobi", description: "Return journey with reflection session" },
      { day: 12, title: "Departure", description: "Farewell and airport transfer" }
    ],
    luxuryLodges: ["Lamu House Hotel", "Serena Beach Resort", "Governors' Camp"]
  },
  {
    id: "heritage-journey-tanzania",
    title: "Heritage Journey - Tanzania",
    duration: { standard: "10 days", luxury: "7 days" },
    countries: ["Tanzania"],
    description: "Explore Tanzania's rich Swahili heritage and cultural sites from Zanzibar to the mainland.",
    image: "/images/homepage/discover-ea-sa-1.jpg",
    destinations: [
      "Dar es Salaam",
      "Zanzibar Stone Town",
      "Bagamoyo",
      "Arusha"
    ],
    highlights: [
      "Zanzibar Stone Town UNESCO heritage site",
      "Bagamoyo historical town exploration",
      "Swahili cultural immersion experiences",
      "Traditional music and dance ceremonies"
    ],
    activities: [
      { day: 1, title: "Arrival in Dar es Salaam", description: "Welcome ceremony and city orientation" },
      { day: 2, title: "Dar to Zanzibar", description: "Ferry to Zanzibar, Stone Town exploration" },
      { day: 3, title: "Stone Town Heritage", description: "Palace Museum and House of Wonders tour" },
      { day: 4, title: "Zanzibar Spice Tour", description: "Spice plantation visit and cultural cooking class" },
      { day: 5, title: "Zanzibar to Bagamoyo", description: "Ferry and drive to historic Bagamoyo" },
      { day: 6, title: "Bagamoyo Cultural Day", description: "Old town tour and traditional arts centre" },
      { day: 7, title: "Bagamoyo to Arusha", description: "Journey to Arusha with cultural village stops" },
      { day: 8, title: "Arusha Cultural Centre", description: "Maasai and Meru cultural experiences" },
      { day: 9, title: "Cultural Ceremony", description: "Traditional blessing ceremony and farewell dinner" },
      { day: 10, title: "Departure", description: "Transfer to airport" }
    ],
    luxuryLodges: ["Serena Hotel Dar es Salaam", "Park Hyatt Zanzibar", "Arusha Coffee Lodge"]
  },
  {
    id: "cultural-connection-uganda-rwanda",
    title: "Cultural Connection - Uganda & Rwanda",
    duration: { standard: "9 days", luxury: "7 days" },
    countries: ["Uganda", "Rwanda"],
    description: "Experience the cultural richness and heritage of Uganda and Rwanda through community visits.",
    image: "/images/homepage/homepage-adventure-travel.jpg",
    destinations: [
      "Kampala",
      "Jinja",
      "Kigali",
      "Musanze"
    ],
    highlights: [
      "Uganda Martyrs Shrine and cultural sites",
      "Source of the Nile historical significance",
      "Kigali Genocide Memorial visit",
      "Traditional Intore dance performances"
    ],
    activities: [
      { day: 1, title: "Arrival in Kampala", description: "Welcome dinner and cultural orientation" },
      { day: 2, title: "Kampala Cultural Tour", description: "Kasubi Tombs and Uganda Museum visits" },
      { day: 3, title: "Kampala to Jinja", description: "Journey to source of the Nile" },
      { day: 4, title: "Jinja Cultural Experience", description: "Community visits and traditional ceremonies" },
      { day: 5, title: "Jinja to Kigali", description: "Cross border to Rwanda" },
      { day: 6, title: "Kigali City Tour", description: "Genocide Memorial and craft cooperatives" },
      { day: 7, title: "Kigali to Musanze", description: "Journey to Musanze with cultural stops" },
      { day: 8, title: "Cultural Immersion Day", description: "Traditional dance performances and community visit" },
      { day: 9, title: "Departure", description: "Return to Kigali for departure" }
    ],
    luxuryLodges: ["Kampala Serena Hotel", "Kigali Serena Hotel", "Five Volcanoes Boutique Hotel"]
  }
];

export const marathonItinerariesData: Itinerary[] = [
  {
    id: "kilimanjaro-marathon-safari",
    title: "Kilimanjaro Marathon Safari",
    duration: { standard: "8 days", luxury: "6 days" },
    countries: ["Tanzania"],
    description: "Run the iconic Kilimanjaro Marathon and explore Tanzania's wildlife wonders.",
    image: "/images/homepage/homepage-adventure-travel.jpg",
    destinations: [
      "Arusha",
      "Moshi",
      "Tarangire National Park",
      "Ngorongoro Crater"
    ],
    highlights: [
      "Kilimanjaro Marathon race day",
      "Acclimatization runs with Mt. Kilimanjaro views",
      "Post-race safari in Tarangire and Ngorongoro",
      "Sports massage and recovery sessions"
    ],
    activities: [
      { day: 1, title: "Arrival in Arusha", description: "Airport pickup and race packet collection" },
      { day: 2, title: "Arusha to Moshi", description: "Transfer to Moshi for acclimatization run" },
      { day: 3, title: "Marathon Day", description: "Kilimanjaro Marathon race" },
      { day: 4, title: "Recovery Day", description: "Massage therapy and light activities" },
      { day: 5, title: "Moshi to Tarangire", description: "Transfer to Tarangire for safari" },
      { day: 6, title: "Tarangire to Ngorongoro", description: "Game drive en route to crater" },
      { day: 7, title: "Ngorongoro Crater", description: "Crater descent and game viewing" },
      { day: 8, title: "Departure", description: "Return to Arusha for departure" }
    ],
    luxuryLodges: ["Arusha Coffee Lodge", "Tarangire Sopa Lodge", "Ngorongoro Sopa Lodge"]
  },
  {
    id: "safari-marathon-kenya",
    title: "Lewa Safari Marathon Experience",
    duration: { standard: "7 days", luxury: "5 days" },
    countries: ["Kenya"],
    description: "Run through wildlife conservancy and experience Kenya's premier conservation safari.",
    image: "/images/homepage/discover-ea-sa-2.jpg",
    destinations: [
      "Nairobi",
      "Lewa Wildlife Conservancy",
      "Samburu National Reserve"
    ],
    highlights: [
      "Lewa Safari Marathon race",
      "Training runs in wildlife conservancy",
      "Rhino tracking and conservation activities",
      "Post-race celebration safari"
    ],
    activities: [
      { day: 1, title: "Arrival in Nairobi", description: "Airport transfer and marathon briefing" },
      { day: 2, title: "Nairobi to Lewa", description: "Transfer to Lewa Conservancy" },
      { day: 3, title: "Lewa Training Day", description: "Acclimatization run and conservation tour" },
      { day: 4, title: "Marathon Day", description: "Lewa Safari Marathon race" },
      { day: 5, title: "Lewa to Samburu", description: "Recovery transfer to Samburu" },
      { day: 6, title: "Samburu Safari", description: "Game drives and relaxation" },
      { day: 7, title: "Departure", description: "Return to Nairobi for departure" }
    ],
    luxuryLodges: ["Lewa Safari Camp", "Saruni Samburu"]
  },
  {
    id: "gorilla-marathon-uganda-rwanda",
    title: "Gorilla Marathon - Uganda & Rwanda",
    duration: { standard: "9 days", luxury: "7 days" },
    countries: ["Uganda", "Rwanda"],
    description: "Run the Gorilla Marathon in Uganda and experience mountain gorilla trekking adventure.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    destinations: [
      "Entebbe",
      "Kampala",
      "Mgahinga Gorilla National Park",
      "Volcanoes National Park"
    ],
    highlights: [
      "Gorilla Marathon race in Mgahinga",
      "Mountain gorilla trekking in both countries",
      "Training runs with gorilla habitat views",
      "Post-race recovery and wildlife experiences"
    ],
    activities: [
      { day: 1, title: "Arrival in Entebbe", description: "Race packet pickup and marathon briefing" },
      { day: 2, title: "Entebbe to Mgahinga", description: "Journey to southwestern Uganda" },
      { day: 3, title: "Training Day", description: "Acclimatization run and community visit" },
      { day: 4, title: "Marathon Day", description: "Gorilla Marathon race" },
      { day: 5, title: "Recovery and Gorilla Trek", description: "Massage therapy and gorilla trekking" },
      { day: 6, title: "Mgahinga to Volcanoes NP", description: "Cross to Rwanda's Volcanoes National Park" },
      { day: 7, title: "Rwanda Gorilla Trek", description: "Second gorilla trekking experience" },
      { day: 8, title: "Cultural Experience", description: "Iby'Iwacu Cultural Village visit and relaxation" },
      { day: 9, title: "Departure", description: "Return to Kigali for departure" }
    ],
    luxuryLodges: ["Lake Mulehe Safari Lodge", "Virunga Lodge", "Bisate Lodge"]
  }
];
