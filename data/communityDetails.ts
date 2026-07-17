export type FAQ = { q: string; a: string };

export type CommunityDetail = {
  slug: string;
  name: string;
  tagline: string;
  medianPrice: string;
  walkScore: number;
  avgSqftPrice: string;
  founded: string;
  heroPlaceholder: string;
  history: string;
  overview: string;
  lifestyle: string;
  housing: {
    summary: string;
    types: string[];
  };
  schools: {
    summary: string;
    names: string[];
  };
  newConstruction: string;
  restaurants: string[];
  shopping: string[];
  entertainment: string[];
  outdoorRecreation: string[];
  healthcare: string[];
  transportation: string;
  faqs: FAQ[];
};

export const communityDetails: Record<string, CommunityDetail> = {
  summerlin: {
    slug: "summerlin",
    name: "Summerlin",
    tagline: "Foothills living framed by Red Rock Canyon",
    medianPrice: "$775K",
    walkScore: 62,
    avgSqftPrice: "$315/sqft",
    founded: "1990",
    heroPlaceholder: "Summerlin foothills at golden hour, Red Rock in the distance",
    history:
      "Developed by the Howard Hughes Corporation starting in 1990, Summerlin was master-planned from the outset around villages, parks, and trails rather than added piecemeal — one of the reasons it still feels cohesive more than three decades on.",
    overview:
      "Summerlin sits on the western edge of the valley, climbing gently toward the Spring Mountains. It's built around a network of urban villages, each with its own parks, schools, and shopping, all connected by more than 150 miles of trails.",
    lifestyle:
      "Life here leans outdoorsy and unhurried: morning trail runs with Red Rock as a backdrop, weekend farmers markets at Downtown Summerlin, and easy access to the Las Vegas Ballpark for a Aviators game.",
    housing: {
      summary:
        "Housing stock spans starter townhomes to golf-course estates, with architecture ranging from Southwest contemporary to modern farmhouse. New-construction villages continue to open on the community's western edge.",
      types: ["Single-family homes", "Golf-course estates", "Townhomes", "New-construction villages", "Active-adult communities"],
    },
    schools: {
      summary:
        "Served primarily by the Clark County School District, with several highly rated elementary and middle schools inside Summerlin's village boundaries, plus a cluster of well-regarded private schools nearby.",
      names: ["Alexander Dawson School", "The Meadows School (nearby)", "Coral Academy of Science", "Clark County School District zoned schools"],
    },
    newConstruction:
      "Active new-construction villages include Redpoint, Redpoint Square, and Stonebridge, with builders such as Lennar, Toll Brothers, and Pulte offering quick move-ins alongside build-to-order floorplans.",
    restaurants: ["Andiron Steak & Sea", "Marche Bacchus", "Made LV", "Crown & Anchor British Pub"],
    shopping: ["Downtown Summerlin", "Boca Park Fashion Village", "Suncoast Marketplace"],
    entertainment: ["Las Vegas Ballpark (Aviators AAA baseball)", "City National Arena (Golden Knights practice facility)", "Red Rock Resort & Casino"],
    outdoorRecreation: ["Red Rock Canyon National Conservation Area", "150+ miles of interconnected trails", "TPC Las Vegas & Bear's Best golf courses", "Mountain's Edge Regional Park"],
    healthcare: ["Summerlin Hospital Medical Center", "Southwest Medical Associates", "Comprehensive Cancer Centers of Nevada"],
    transportation:
      "The 215 Beltway runs along Summerlin's southern edge, giving quick access to the Strip (about 20 minutes) and McCarran/Harry Reid International Airport (about 25 minutes). RTC bus routes connect the community's villages.",
    faqs: [
      {
        q: "Is Summerlin walkable?",
        a: "Individual villages are walkable — Downtown Summerlin especially — but the community overall is spread across the western valley, so a car is useful for getting between villages.",
      },
      {
        q: "What's the HOA situation like?",
        a: "Nearly every Summerlin neighborhood has an HOA, with dues varying by village and amenities. Master HOA fees fund shared trails and parks; individual village HOAs often add their own dues.",
      },
      {
        q: "Is Summerlin good for families?",
        a: "Yes — it's one of the most family-oriented communities in the valley, with parks, top-rated schools, and youth sports leagues built into most villages.",
      },
    ],
  },

  henderson: {
    slug: "henderson",
    name: "Henderson",
    tagline: "Lakeside living with a fast-growing food scene",
    medianPrice: "$540K",
    walkScore: 55,
    avgSqftPrice: "$268/sqft",
    founded: "1953",
    heroPlaceholder: "Henderson suburban streets with Lake Mead visible in the distance",
    history:
      "Henderson was founded during World War II around a magnesium plant and incorporated as a city in 1953. It has since grown into Nevada's second-largest city, largely through master-planned communities built from the 1990s onward.",
    overview:
      "Henderson sits southeast of Las Vegas, bordering Lake Mead and stretching toward the McCullough Range. It's known for clean, well-maintained neighborhoods, strong public services, and a lower overall density than the Strip-adjacent parts of the valley.",
    lifestyle:
      "Henderson skews toward families and retirees who want quiet streets without giving up restaurants and shopping — Green Valley Ranch and the District at Green Valley Ranch anchor a growing dining and nightlife scene without the Strip's intensity.",
    housing: {
      summary:
        "A mix of 1990s-2000s master-planned tract homes, newer luxury construction near Lake Las Vegas, and active-adult communities. Prices run below the Summerlin/Southern Highlands luxury tier but have been rising steadily.",
      types: ["Single-family tract homes", "Luxury lakeside homes", "Townhomes", "Active-adult (55+) communities", "New construction"],
    },
    schools: {
      summary:
        "Served by the Clark County School District, with Henderson generally posting some of the district's higher school ratings, plus several charter and private options.",
      names: ["Coronado High School", "Green Valley High School", "Somerset Academy (charter)", "Clark County School District zoned schools"],
    },
    newConstruction:
      "Cadence and Inspirada (technically an adjacent master-plan) continue active phases, with builders including Lennar, KB Home, and Woodside Homes offering new sections aimed at first-time and move-up buyers.",
    restaurants: ["Todd's Unique Dining", "Marssa Steak & Seafood (Green Valley Ranch)", "Public School 702", "Hank's Fine Steaks"],
    shopping: ["District at Green Valley Ranch", "Water Street District (historic downtown Henderson)", "Galleria at Sunset"],
    entertainment: ["Green Valley Ranch Resort & Casino", "Henderson Pavilion (outdoor amphitheater)", "Cowabunga Bay water park"],
    outdoorRecreation: ["Lake Mead National Recreation Area", "Sloan Canyon National Conservation Area", "Henderson Bird Viewing Preserve", "Wetlands Park"],
    healthcare: ["St. Rose Dominican Hospital (San Martin & Siena campuses)", "Henderson Hospital", "Southwest Medical Associates"],
    transportation:
      "The 215 Beltway and I-515 connect Henderson to the Strip (about 20–25 minutes) and Harry Reid International Airport (about 15 minutes) — among the shortest commutes to the airport in the valley.",
    faqs: [
      {
        q: "Is Henderson safer than Las Vegas proper?",
        a: "Henderson consistently reports lower crime rates than the Las Vegas valley average, which is part of its draw for families and retirees.",
      },
      {
        q: "How far is Henderson from the Strip?",
        a: "Most Henderson neighborhoods are a 20–25 minute drive from the Strip via the 215 Beltway or I-515, depending on traffic and exact location.",
      },
      {
        q: "What's the appeal of Lake Las Vegas versus the rest of Henderson?",
        a: "Lake Las Vegas is a smaller, resort-style enclave within greater Henderson built around a private lake — it commands a premium over typical Henderson pricing for lakefront and lake-view homes.",
      },
    ],
  },

  "southern-highlands": {
    slug: "southern-highlands",
    name: "Southern Highlands",
    tagline: "Guard-gated luxury on the valley's south end",
    medianPrice: "$890K",
    walkScore: 41,
    avgSqftPrice: "$342/sqft",
    founded: "1996",
    heroPlaceholder: "Gated luxury estates with manicured golf greens at dusk",
    history:
      "Southern Highlands broke ground in 1996 as a master-planned community built around a private golf club, positioning itself from the start as one of the valley's premier guard-gated addresses.",
    overview:
      "Located near the southern end of the valley close to the I-15/I-215 interchange, Southern Highlands centers on the Southern Highlands Golf Club, with most residential sections either guard-gated or gated by individual enclave.",
    lifestyle:
      "This is the valley's country-club lifestyle: golf, a private clubhouse, resort-style pools, and a level of privacy that draws executives, professional athletes, and entertainers who want proximity to the Strip without being in the middle of it.",
    housing: {
      summary:
        "Predominantly custom and semi-custom estates on larger lots than typical valley subdivisions, with a smaller inventory of luxury townhomes near the community's commercial core.",
      types: ["Custom golf-course estates", "Semi-custom luxury homes", "Guard-gated enclaves", "Luxury townhomes"],
    },
    schools: {
      summary:
        "Zoned primarily to Clark County School District schools serving the southwest valley, with private-school options concentrated a short drive north toward Summerlin and the southwest suburbs.",
      names: ["Bob Miller Middle School", "Clark County School District zoned schools", "Nearby private options in the southwest valley"],
    },
    newConstruction:
      "Southern Highlands is largely built out; remaining new construction is concentrated in a handful of custom-home lots and infill within existing gated enclaves rather than new tracts.",
    restaurants: ["Prime Steakhouse (South Point, nearby)", "Restaurants at M Resort", "Southern Highlands Golf Club dining (members)"],
    shopping: ["Southern Highlands Marketplace", "The Shops at Sunset (nearby)"],
    entertainment: ["M Resort Spa Casino", "South Point Hotel, Casino & Spa", "Southern Highlands Golf Club"],
    outdoorRecreation: ["Southern Highlands Golf Club", "McCullough Range foothill trails (nearby)", "Community parks throughout the master plan"],
    healthcare: ["St. Rose Dominican Hospital (San Martin campus)", "Southwest Medical Associates"],
    transportation:
      "Direct access to I-15 and the 215 Beltway puts Southern Highlands about 15 minutes from the Strip and roughly 20 minutes from Harry Reid International Airport.",
    faqs: [
      {
        q: "Is Southern Highlands entirely gated?",
        a: "Most, but not all, sections are guard-gated or gated at the enclave level; a few peripheral streets are open access. Gate status varies enough by street that it's worth confirming for a specific address.",
      },
      {
        q: "Do I have to join the golf club to live there?",
        a: "No — golf club membership is separate from home ownership, though many residents do join given the community's design around the course.",
      },
      {
        q: "How does pricing compare to Summerlin?",
        a: "Southern Highlands generally commands a premium per square foot over most of Summerlin, reflecting its larger lots, gated privacy, and country-club positioning, though top Summerlin golf-course estates can overlap in price.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Phase 2 communities below. Content is a reasonable first draft based
  // on general knowledge of each area, not verified against current MLS
  // data, school ratings, or business listings — fact-check every price,
  // school name, and business name below before publishing, the same
  // way you would for the three flagship entries above.
  // ---------------------------------------------------------------------

  "las-vegas": {
    slug: "las-vegas",
    name: "Las Vegas",
    tagline: "The valley's urban core, from downtown to the Strip",
    medianPrice: "$420K",
    walkScore: 68,
    avgSqftPrice: "$255/sqft",
    founded: "1905",
    heroPlaceholder: "Downtown Las Vegas skyline at dusk",
    history:
      "Las Vegas was founded in 1905 as a railroad town and incorporated in 1911, decades before the Strip or the master-planned suburbs existed. The urban core today includes the historic Fremont Street district, the Arts District, and the neighborhoods immediately surrounding the resort corridor.",
    overview:
      "\"Las Vegas\" as a neighborhood distinct from the broader valley generally refers to the urban core — downtown, the Arts District, and the residential pockets closest to the Strip — where density, walkability, and nightlife are highest.",
    lifestyle:
      "This is the valley's most urban lifestyle: walkable blocks, a growing arts and food scene downtown, and easy access to the Strip without needing a car for daily errands in some pockets.",
    housing: {
      summary:
        "A mix of older single-family bungalows near the Arts District, historic homes in neighborhoods like John S. Park, and a growing number of high-rise condo towers near the Strip.",
      types: ["Historic bungalows", "High-rise condos", "Loft conversions", "Townhomes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with a mix of long-established and magnet school options in the urban core.",
      names: ["Clark County School District zoned schools", "Las Vegas Academy of the Arts (magnet)"],
    },
    newConstruction:
      "New construction downtown skews toward condo and mixed-use towers rather than single-family tracts; check current downtown development listings for active projects.",
    restaurants: ["Esther's Kitchen", "Eat.", "Carson Kitchen"],
    shopping: ["Downtown Container Park", "Arts District galleries and boutiques"],
    entertainment: ["Fremont Street Experience", "Smith Center for the Performing Arts", "The Strip resort corridor"],
    outdoorRecreation: ["Downtown Las Vegas parks", "Springs Preserve"],
    healthcare: ["University Medical Center of Southern Nevada"],
    transportation:
      "Central location gives quick access across the valley via I-15 and US-95; the RTC's Deuce and SDX routes connect downtown to the Strip and airport.",
    faqs: [
      {
        q: "Is downtown Las Vegas walkable?",
        a: "Yes, more so than most of the valley — the Fremont Street and Arts District pockets are genuinely walkable, though the broader urban core still benefits from a car.",
      },
      {
        q: "Is this a good area for investment condos?",
        a: "High-rise condos near the Strip see steady rental interest, though HOA fees and special assessments can be higher than suburban alternatives — worth reviewing HOA financials closely.",
      },
    ],
  },

  "green-valley": {
    slug: "green-valley",
    name: "Green Valley",
    tagline: "Henderson's original master-planned neighborhood",
    medianPrice: "$465K",
    walkScore: 52,
    avgSqftPrice: "$260/sqft",
    founded: "1980s",
    heroPlaceholder: "Established Green Valley streets with mature trees",
    history:
      "Green Valley was one of the first large master-planned communities in Henderson, developed starting in the 1980s and predating the newer Green Valley Ranch resort district that borrows its name.",
    overview:
      "Located in central Henderson, Green Valley is more established than newer valley master-plans, with mature landscaping and a settled, centrally located feel.",
    lifestyle:
      "A quieter, established lifestyle — mature trees, long-tenured neighbors, and central access to both Henderson and the broader valley.",
    housing: {
      summary: "Primarily 1980s–1990s single-family homes, generally smaller lots and older construction than Henderson's newer master-plans, priced accordingly.",
      types: ["Single-family homes", "Townhomes", "Condos"],
    },
    schools: {
      summary: "Served by the Clark County School District, with several long-established elementary and middle schools inside the community.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction:
      "Green Valley is fully built out; any \"new construction\" here is infill or renovation rather than new subdivisions.",
    restaurants: ["Restaurants along Green Valley Parkway"],
    shopping: ["The District at Green Valley Ranch (nearby)", "Galleria at Sunset (nearby)"],
    entertainment: ["Green Valley Ranch Resort (nearby)"],
    outdoorRecreation: ["Paseo Verde Parkway trail corridor", "Local community parks"],
    healthcare: ["St. Rose Dominican Hospital (San Martin campus, nearby)"],
    transportation: "Central Henderson location with quick access to the 215 Beltway and I-515.",
    faqs: [
      {
        q: "Is Green Valley the same as Green Valley Ranch?",
        a: "No — Green Valley is the original 1980s master-plan; Green Valley Ranch refers to the newer resort and retail district nearby. They're adjacent but distinct.",
      },
      {
        q: "Are homes here older than in newer Henderson communities?",
        a: "Generally yes — most homes date to the 1980s–1990s, which means lower price points but also aging systems worth budgeting inspections for.",
      },
    ],
  },

  inspirada: {
    slug: "inspirada",
    name: "Inspirada",
    tagline: "A newer, walkable master-plan on Henderson's edge",
    medianPrice: "$560K",
    walkScore: 48,
    avgSqftPrice: "$275/sqft",
    founded: "2006",
    heroPlaceholder: "New-construction homes with landscaped park in Inspirada",
    history:
      "Inspirada broke ground in the mid-2000s as a joint venture between several major homebuilders, designed around walkable villages, parks, and green building standards from the outset.",
    overview:
      "Located southwest of central Henderson, Inspirada is organized into villages centered on parks and greenbelts, with an emphasis on walkability more typical of newer master-plans than Henderson's older neighborhoods.",
    lifestyle:
      "Family-oriented and park-centric — many homes back onto greenbelts, and the community's village structure keeps parks and shopping within a short walk or bike ride.",
    housing: {
      summary: "Predominantly 2010s–present single-family homes and townhomes, with active new-construction phases still underway on the community's edges.",
      types: ["Single-family homes", "Townhomes", "New-construction phases"],
    },
    schools: {
      summary: "Served by the Clark County School District, with newer schools built alongside the community's residential phases.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction:
      "Active building continues with several national builders offering both quick move-ins and build-to-order homes in current phases.",
    restaurants: ["Restaurants along St. Rose Parkway"],
    shopping: ["Inspirada Town Center", "Nearby Henderson retail corridors"],
    entertainment: ["Community parks and event spaces within Inspirada"],
    outdoorRecreation: ["Village greenbelts and parks", "Nearby Sloan Canyon"],
    healthcare: ["St. Rose Dominican Hospital (San Martin campus, nearby)"],
    transportation: "Access via St. Rose Parkway and I-15, roughly 25–30 minutes from the Strip.",
    faqs: [
      {
        q: "Is Inspirada still being built out?",
        a: "Yes — several villages remain in active construction, so buyers can still choose new-construction floorplans in addition to resale homes.",
      },
      {
        q: "Are HOA fees higher here than older Henderson neighborhoods?",
        a: "Generally yes, reflecting the community's extensive parks and greenbelt maintenance — worth comparing specific village HOA dues directly.",
      },
    ],
  },

  anthem: {
    slug: "anthem",
    name: "Anthem",
    tagline: "Henderson foothills, from family neighborhoods to a 55+ country club",
    medianPrice: "$610K",
    walkScore: 44,
    avgSqftPrice: "$285/sqft",
    founded: "1998",
    heroPlaceholder: "Anthem hillside homes with valley views",
    history:
      "Anthem was developed by Del Webb and American West starting in the late 1990s on Henderson's southeastern foothills, and includes both family neighborhoods and the well-known Sun City Anthem active-adult community.",
    overview:
      "Anthem sits on rising terrain in southeast Henderson, offering valley views from many lots, and is really two communities in one: family-oriented Anthem and the age-restricted Sun City Anthem and Anthem Country Club sections.",
    lifestyle:
      "Ranges from family-friendly suburban life in the main Anthem neighborhoods to a resort-style, activity-driven lifestyle in Sun City Anthem, with clubhouses, golf, and organized social calendars.",
    housing: {
      summary: "Single-family homes across a range of price points, plus age-restricted 55+ homes in Sun City Anthem and guard-gated golf estates in Anthem Country Club.",
      types: ["Single-family homes", "Active-adult (55+) homes", "Guard-gated golf estates", "Townhomes"],
    },
    schools: {
      summary: "The family sections are served by the Clark County School District; Sun City Anthem is age-restricted and does not include school-age housing.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction:
      "Anthem is largely built out, with any current activity concentrated in infill lots rather than new tracts.",
    restaurants: ["Anthem Country Club dining (members)", "Restaurants along Eastern Avenue"],
    shopping: ["Anthem Highlands retail center"],
    entertainment: ["Sun City Anthem clubhouse and amenities", "Anthem Country Club"],
    outdoorRecreation: ["Black Mountain foothill trails", "Community parks throughout Anthem"],
    healthcare: ["St. Rose Dominican Hospital (San Martin campus, nearby)"],
    transportation: "Access via I-215 and Eastern Avenue, roughly 20–25 minutes from the Strip.",
    faqs: [
      {
        q: "What's the difference between Anthem and Sun City Anthem?",
        a: "Anthem is the broader family community; Sun City Anthem is an age-restricted (55+) section within it with its own clubhouse and amenities.",
      },
      {
        q: "Do all Anthem homes have views?",
        a: "Not all, but the community's hillside terrain means a meaningful share of homes — especially in the upper sections — have valley or mountain views.",
      },
    ],
  },

  "north-las-vegas": {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    tagline: "The valley's fastest-growing city, north of the core",
    medianPrice: "$400K",
    walkScore: 46,
    avgSqftPrice: "$230/sqft",
    founded: "1946",
    heroPlaceholder: "New-construction neighborhoods in North Las Vegas",
    history:
      "Incorporated in 1946, North Las Vegas has grown from a small industrial and agricultural city into one of the fastest-growing parts of the valley, driven by large master-planned communities like Aliante and newer development pushing toward the Sheep Mountains.",
    overview:
      "North Las Vegas is its own incorporated city bordering Las Vegas to the north, home to Nellis Air Force Base and several major master-planned communities, generally offering more affordable entry points than the southwest valley.",
    lifestyle:
      "A mix of established working-class neighborhoods and newer master-planned suburbs, with a growing logistics and industrial employment base alongside residential growth.",
    housing: {
      summary: "A wide range from older, affordable single-family homes near the city center to newer master-planned tracts on the northern edge.",
      types: ["Single-family homes", "New-construction tracts", "Townhomes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with school quality varying more by specific neighborhood than in more uniform southwest-valley master-plans.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction:
      "Significant active new-home construction on the city's northern and eastern edges, with several national builders offering entry-level and move-up product.",
    restaurants: ["Local restaurants along Craig Road and Losee Road corridors"],
    shopping: ["Craig Ranch Marketplace", "Cheyenne Meadows shopping centers"],
    entertainment: ["Cheyenne Sports Complex", "Nellis Air Force Base air shows (public events)"],
    outdoorRecreation: ["Craig Ranch Regional Park", "Floyd Lamb Park at Tule Springs"],
    healthcare: ["North Vista Hospital"],
    transportation: "I-15 and US-95 run through North Las Vegas, with a longer but direct commute to the Strip, roughly 20–30 minutes depending on the specific neighborhood.",
    faqs: [
      {
        q: "Is North Las Vegas the same as the Las Vegas Strip area?",
        a: "No — North Las Vegas is a separate incorporated city north of the urban core and the Strip, generally 20+ minutes away depending on location.",
      },
      {
        q: "Is it a good area for first-time buyers?",
        a: "Often, yes — North Las Vegas generally offers lower price points than the southwest valley, though it's worth comparing specific neighborhoods closely given the range in housing age and condition.",
      },
    ],
  },

  "skye-canyon": {
    slug: "skye-canyon",
    name: "Skye Canyon",
    tagline: "An active-lifestyle master-plan in the northwest valley",
    medianPrice: "$525K",
    walkScore: 40,
    avgSqftPrice: "$270/sqft",
    founded: "2015",
    heroPlaceholder: "Skye Canyon trailhead with new-construction homes",
    history:
      "Developed by Lennar starting around 2015, Skye Canyon was built from the ground up around an outdoor, active-lifestyle brand, with trail access and a dedicated community recreation center as central features.",
    overview:
      "Skye Canyon sits at the northwest edge of the valley, backing up to the Sheep Mountains and Floyd Lamb Park, positioned squarely as an outdoor-recreation-focused master-plan.",
    lifestyle:
      "Built around hiking, biking, and community fitness programming — the Skye Canyon Park and recreation center anchor a genuinely active-lifestyle identity rather than just marketing language.",
    housing: {
      summary: "Predominantly new-construction single-family homes built since the mid-2010s, with several villages still in active development.",
      types: ["New-construction single-family homes", "Townhomes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with newer schools added as the community has grown.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction:
      "Active building continues, with Lennar and other builders offering current phases; check for the latest quick move-in inventory.",
    restaurants: ["Restaurants along US-95 corridor near Skye Canyon"],
    shopping: ["Skye Canyon Marketplace"],
    entertainment: ["Skye Canyon Park recreation center and event lawn"],
    outdoorRecreation: ["Floyd Lamb Park at Tule Springs", "Sheep Mountains trailheads", "Skye Canyon Park trail network"],
    healthcare: ["Nearby northwest valley urgent care and clinics"],
    transportation: "US-95 provides the primary route into the valley, roughly 30 minutes from the Strip depending on traffic.",
    faqs: [
      {
        q: "Is Skye Canyon still under construction?",
        a: "Yes — several villages remain active, so new-construction inventory is generally available alongside a growing resale market.",
      },
      {
        q: "How far is it from the Strip?",
        a: "Roughly 30 minutes via US-95, making it one of the valley's more distant master-plans from the resort corridor.",
      },
    ],
  },

  "centennial-hills": {
    slug: "centennial-hills",
    name: "Centennial Hills",
    tagline: "Established northwest-valley suburbs",
    medianPrice: "$480K",
    walkScore: 47,
    avgSqftPrice: "$250/sqft",
    founded: "1990s",
    heroPlaceholder: "Established Centennial Hills suburban streets",
    history:
      "Centennial Hills developed through the 1990s and 2000s as the valley's growth pushed northwest, ahead of newer master-plans like Skye Canyon that have since developed further out.",
    overview:
      "Centennial Hills is a broad, established suburban area in the northwest valley, generally more built-out and centrally located than Skye Canyon or Aliante, with a mix of housing ages within its boundaries.",
    lifestyle:
      "A settled suburban lifestyle with mature shopping centers, established schools, and a shorter commute into the valley than the newest northwest master-plans.",
    housing: {
      summary: "Mostly 1990s–2000s single-family homes, with some newer infill construction, generally priced between older valley neighborhoods and the newest master-plans.",
      types: ["Single-family homes", "Townhomes", "Some new-construction infill"],
    },
    schools: {
      summary: "Served by the Clark County School District, with a range of established schools throughout the area.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "Limited — Centennial Hills is largely built out, with most current activity concentrated further northwest.",
    restaurants: ["Restaurants along Centennial Center Boulevard"],
    shopping: ["Centennial Center", "Downtown Summerlin (nearby)"],
    entertainment: ["Texas Station (nearby)", "Centennial Hills Park events"],
    outdoorRecreation: ["Centennial Hills Park", "Floyd Lamb Park at Tule Springs (nearby)"],
    healthcare: ["Centennial Hills Hospital"],
    transportation: "US-95 and the 215 Beltway both provide access, roughly 25 minutes from the Strip.",
    faqs: [
      {
        q: "How does Centennial Hills compare to Skye Canyon?",
        a: "Centennial Hills is more established and generally more centrally located; Skye Canyon is newer and further northwest, with a stronger built-in outdoor-recreation identity.",
      },
      {
        q: "Is this a good area for commuters?",
        a: "It's more central than the newest northwest master-plans, which shortens the commute somewhat, though it's still a 20–25 minute drive to the Strip.",
      },
    ],
  },

  aliante: {
    slug: "aliante",
    name: "Aliante",
    tagline: "A golf-and-casino-anchored master-plan in North Las Vegas",
    medianPrice: "$460K",
    walkScore: 43,
    avgSqftPrice: "$240/sqft",
    founded: "2003",
    heroPlaceholder: "Aliante golf course with new-construction homes",
    history:
      "Aliante began development in the early 2000s in North Las Vegas, anchored from early on by the Aliante Golf Club and later the Aliante Casino + Hotel, giving the community a built-in entertainment and recreation core.",
    overview:
      "Located in North Las Vegas near the US-95/215 interchange, Aliante is organized around its golf course and casino resort, with residential villages built around that core.",
    lifestyle:
      "A suburban, family-oriented lifestyle with the added convenience of on-site dining, entertainment, and golf at the community's casino resort.",
    housing: {
      summary: "Primarily 2000s-era single-family homes and townhomes, with some newer infill construction on remaining parcels.",
      types: ["Single-family homes", "Townhomes", "Golf-adjacent homes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with several schools built alongside the community's original development phases.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "Mostly built out, with limited remaining infill parcels compared to newer North Las Vegas master-plans.",
    restaurants: ["Dining options at Aliante Casino + Hotel"],
    shopping: ["Aliante Marketplace"],
    entertainment: ["Aliante Casino + Hotel", "Aliante Golf Club"],
    outdoorRecreation: ["Aliante Golf Club", "Community parks and trails"],
    healthcare: ["North Vista Hospital (nearby)"],
    transportation: "Direct access via US-95 and the 215 Beltway, roughly 25 minutes from the Strip.",
    faqs: [
      {
        q: "Is Aliante mainly known for its casino?",
        a: "The Aliante Casino + Hotel is a well-known amenity, but the community is primarily residential — the casino is a lifestyle amenity, not the whole identity.",
      },
      {
        q: "Are there still new homes being built in Aliante?",
        a: "Very limited — most of Aliante is built out, so buyers should expect mostly resale inventory here.",
      },
    ],
  },

  "mountains-edge": {
    slug: "mountains-edge",
    name: "Mountain's Edge",
    tagline: "A large master-plan in the growing southwest valley",
    medianPrice: "$510K",
    walkScore: 42,
    avgSqftPrice: "$260/sqft",
    founded: "2004",
    heroPlaceholder: "Mountain's Edge community park with new homes",
    history:
      "Mountain's Edge began development in the mid-2000s as one of the largest master-plans in the southwest valley, designed around an extensive network of parks and trails from its earliest phases.",
    overview:
      "Located in the southwest valley near the 215 Beltway, Mountain's Edge is organized around a large central park system, with residential villages built by multiple national homebuilders.",
    lifestyle:
      "Family-oriented and park-centric, with a strong emphasis on trails, sports fields, and community events, drawing comparisons to Summerlin's village structure at a generally lower price point.",
    housing: {
      summary: "Mostly 2000s–2010s single-family homes across a range of sizes, from starter homes to larger move-up product.",
      types: ["Single-family homes", "Townhomes", "New-construction infill"],
    },
    schools: {
      summary: "Served by the Clark County School District, with several schools built specifically to serve the community's growth.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "Some remaining new-construction parcels are active on the community's outer edges.",
    restaurants: ["Restaurants along Blue Diamond Road"],
    shopping: ["Mountain's Edge Marketplace"],
    entertainment: ["Mountain's Edge Regional Park events and sports fields"],
    outdoorRecreation: ["Mountain's Edge Regional Park", "Extensive internal trail network"],
    healthcare: ["Southwest Medical Associates (nearby)"],
    transportation: "Access via the 215 Beltway and Blue Diamond Road, roughly 20–25 minutes from the Strip.",
    faqs: [
      {
        q: "Is Mountain's Edge similar to Summerlin?",
        a: "It's often compared to Summerlin for its park-centric design and family orientation, though it's generally more affordable and located in the southwest rather than west valley.",
      },
      {
        q: "Does it have its own schools?",
        a: "Yes — several Clark County School District schools were built specifically within the community as it developed.",
      },
    ],
  },

  "rhodes-ranch": {
    slug: "rhodes-ranch",
    name: "Rhodes Ranch",
    tagline: "A golf-course community in the southwest valley",
    medianPrice: "$530K",
    walkScore: 39,
    avgSqftPrice: "$255/sqft",
    founded: "1998",
    heroPlaceholder: "Rhodes Ranch golf course fairway lined with homes",
    history:
      "Rhodes Ranch developed starting in the late 1990s around its namesake golf course, positioning itself as an established golf-community alternative to the newer master-plans that later grew up around it in the southwest valley.",
    overview:
      "Located near Mountain's Edge in the southwest valley, Rhodes Ranch centers on its 18-hole public golf course, with residential streets designed around fairway and course views.",
    lifestyle:
      "A quieter, golf-oriented lifestyle within a broadly suburban southwest-valley setting, appealing to buyers who want course frontage without full country-club gating.",
    housing: {
      summary: "Primarily single-family homes from the late 1990s through the 2000s, many with golf-course frontage or views.",
      types: ["Single-family homes", "Golf-course-frontage homes", "Townhomes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with schools shared across the broader southwest-valley area.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "Largely built out, with limited new-construction activity remaining.",
    restaurants: ["Rhodes Ranch Golf Club dining"],
    shopping: ["Nearby Mountain's Edge and Blue Diamond Road retail"],
    entertainment: ["Rhodes Ranch Golf Club"],
    outdoorRecreation: ["Rhodes Ranch Golf Club", "Community parks"],
    healthcare: ["Southwest Medical Associates (nearby)"],
    transportation: "Access via the 215 Beltway and Blue Diamond Road, roughly 20–25 minutes from the Strip.",
    faqs: [
      {
        q: "Is Rhodes Ranch gated?",
        a: "Some enclaves within Rhodes Ranch are gated, but the community as a whole is not uniformly guard-gated the way Southern Highlands or MacDonald Highlands are.",
      },
      {
        q: "Do homes here have golf-course views?",
        a: "Many do, given the community's design around the course, though not every home borders the fairways — worth confirming lot-by-lot.",
      },
    ],
  },

  "the-lakes": {
    slug: "the-lakes",
    name: "The Lakes",
    tagline: "One of the valley's original man-made-lake communities",
    medianPrice: "$470K",
    walkScore: 58,
    avgSqftPrice: "$245/sqft",
    founded: "1980s",
    heroPlaceholder: "Homes along one of The Lakes' man-made lakes",
    history:
      "The Lakes was developed in the 1980s as one of the valley's earliest planned communities built around a series of man-made lakes, predating most of the master-plans that followed in the western and southwestern valley.",
    overview:
      "Located in the west valley near Sahara Avenue and Rainbow Boulevard, The Lakes is centrally located relative to newer far-west developments, with mature landscaping and its signature lake system.",
    lifestyle:
      "An established, centrally located lifestyle with walking paths around the lakes and a shorter drive to the Strip than most newer west-valley communities.",
    housing: {
      summary: "Primarily 1980s single-family homes, some with lake frontage or views, generally on smaller lots than newer master-plans.",
      types: ["Single-family homes", "Lakefront homes", "Condos and townhomes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with long-established schools in the surrounding area.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "None — The Lakes has been fully built out since the 1990s.",
    restaurants: ["Restaurants along Sahara Avenue and Rainbow Boulevard"],
    shopping: ["Nearby west-valley shopping centers"],
    entertainment: ["Community lake paths and parks"],
    outdoorRecreation: ["Walking paths around the community's lakes", "Nearby Desert Breeze Park"],
    healthcare: ["Southwest Medical Associates (nearby)"],
    transportation: "Central west-valley location with quick access to the Strip via Sahara Avenue, roughly 15 minutes.",
    faqs: [
      {
        q: "Is The Lakes more central than Summerlin?",
        a: "Yes — it sits closer to the Strip than most of Summerlin, which is part of its appeal for buyers wanting an established, centrally located neighborhood.",
      },
      {
        q: "Do all homes have lake views?",
        a: "No — only a portion of homes border the lakes directly; many others are set back on interior streets.",
      },
    ],
  },

  "spanish-trail": {
    slug: "spanish-trail",
    name: "Spanish Trail",
    tagline: "A guard-gated golf enclave minutes from the Strip",
    medianPrice: "$850K",
    walkScore: 35,
    avgSqftPrice: "$320/sqft",
    founded: "1985",
    heroPlaceholder: "Spanish Trail guard-gated entrance with golf course",
    history:
      "Spanish Trail was developed in the mid-1980s as one of the valley's first guard-gated golf communities, built around a private 27-hole golf club close to the Strip rather than out in the suburbs.",
    overview:
      "Located just west of the Strip near I-15 and Russell Road, Spanish Trail is a long-established luxury enclave centered on the Spanish Trail Country Club.",
    lifestyle:
      "A private, established country-club lifestyle with the unusual advantage of being minutes from the Strip rather than a 20–30 minute suburban drive.",
    housing: {
      summary: "Custom and semi-custom single-family estates from the mid-1980s onward, with larger lots than typical for its central location.",
      types: ["Custom golf-course estates", "Guard-gated enclaves"],
    },
    schools: {
      summary: "Served by the Clark County School District, with private-school options nearby in the surrounding central valley.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "None — Spanish Trail has been fully built out for decades; any activity is custom remodels or teardown-rebuilds.",
    restaurants: ["Spanish Trail Country Club dining (members)", "Restaurants along the nearby Strip"],
    shopping: ["Nearby Strip and central-valley retail"],
    entertainment: ["Spanish Trail Country Club", "The Strip resort corridor (nearby)"],
    outdoorRecreation: ["Spanish Trail Golf & Country Club"],
    healthcare: ["Nearby central-valley hospitals and medical centers"],
    transportation: "Direct access to I-15, roughly 10 minutes from the Strip — one of the shortest commutes of any gated community in the valley.",
    faqs: [
      {
        q: "How is Spanish Trail so close to the Strip and still gated luxury?",
        a: "It was built in the mid-1980s before the Strip's growth pushed most luxury development into the suburbs, giving it a rare combination of central location and gated privacy.",
      },
      {
        q: "Is the golf club private?",
        a: "Yes — Spanish Trail Country Club is a private club, separate from home ownership in the community.",
      },
    ],
  },

  "macdonald-highlands": {
    slug: "macdonald-highlands",
    name: "MacDonald Highlands",
    tagline: "Henderson's premier hillside luxury enclave",
    medianPrice: "$1.65M",
    walkScore: 28,
    avgSqftPrice: "$450/sqft",
    founded: "1996",
    heroPlaceholder: "Hillside luxury estate with panoramic valley views",
    history:
      "MacDonald Highlands began development in the mid-1990s on the hillsides above Henderson, built around DragonRidge Country Club and positioned from the outset as one of the valley's top luxury addresses.",
    overview:
      "Perched on the hills above Henderson, MacDonald Highlands offers some of the valley's most dramatic views, paired with large custom-home lots and a private country club.",
    lifestyle:
      "The valley's highest-end hillside lifestyle: custom estates, panoramic views, and a private club scene centered on DragonRidge, drawing high-net-worth buyers including athletes and entertainers.",
    housing: {
      summary: "Custom luxury estates on large hillside lots, most with unobstructed valley or Strip views, among the highest price points in the valley.",
      types: ["Custom hillside estates", "Guard-gated luxury lots"],
    },
    schools: {
      summary: "Served by the Clark County School District, with most families in this price tier also considering private options in the southwest valley.",
      names: ["Clark County School District zoned schools", "Private options in the southwest valley (nearby)"],
    },
    newConstruction: "Ongoing — remaining hillside lots continue to be developed with fully custom homes.",
    restaurants: ["DragonRidge Country Club dining (members)"],
    shopping: ["Nearby Henderson and Green Valley retail"],
    entertainment: ["DragonRidge Country Club"],
    outdoorRecreation: ["DragonRidge Country Club golf course", "McCullough Range foothill trails"],
    healthcare: ["St. Rose Dominican Hospital (San Martin campus, nearby)"],
    transportation: "Access via the 215 Beltway, roughly 20 minutes from the Strip.",
    faqs: [
      {
        q: "Is MacDonald Highlands the most expensive community in the valley?",
        a: "It's consistently among the highest price-per-square-foot communities in the Las Vegas Valley, competitive with Summerlin's top golf-course estates.",
      },
      {
        q: "Can I still build a custom home here?",
        a: "Yes — some hillside lots remain available for custom builds, in addition to a resale market of existing estates.",
      },
    ],
  },

  "lake-las-vegas": {
    slug: "lake-las-vegas",
    name: "Lake Las Vegas",
    tagline: "A resort-style enclave built around a private lake",
    medianPrice: "$720K",
    walkScore: 45,
    avgSqftPrice: "$310/sqft",
    founded: "1990s",
    heroPlaceholder: "Lakefront homes and resort marina at Lake Las Vegas",
    history:
      "Lake Las Vegas was developed starting in the 1990s around a private 320-acre lake in the hills southeast of Henderson, envisioned as a Mediterranean-style resort community with hotels, golf, and residential villages.",
    overview:
      "Set apart from the rest of Henderson by its private lake and resort infrastructure, Lake Las Vegas offers a distinct, vacation-like setting within the broader valley.",
    lifestyle:
      "Resort living day to day — lakefront dining, a marina, golf at Reflection Bay, and hotel amenities within the community, appealing to buyers who want a destination feel without leaving the valley.",
    housing: {
      summary: "A mix of lakefront luxury homes, hillside view estates, and condos, generally priced at a premium over comparable non-lakefront Henderson product.",
      types: ["Lakefront estates", "Hillside view homes", "Condos", "Townhomes"],
    },
    schools: {
      summary: "Served by the Clark County School District, sharing schools with the broader Henderson area.",
      names: ["Clark County School District zoned schools"],
    },
    newConstruction: "Some remaining residential parcels continue to develop around the lake and surrounding hillsides.",
    restaurants: ["Marssa Steak & Seafood", "Restaurants at the Lake Las Vegas resorts and marina"],
    shopping: ["MonteLago Village shops"],
    entertainment: ["Lake Las Vegas marina and lake activities", "Resort hotels within the community"],
    outdoorRecreation: ["Reflection Bay Golf Club", "SouthShore Golf Club", "Lake Las Vegas paddleboarding and boating"],
    healthcare: ["St. Rose Dominican Hospital (San Martin campus, nearby)"],
    transportation: "Access via Lake Las Vegas Parkway and the 215 Beltway, roughly 30 minutes from the Strip.",
    faqs: [
      {
        q: "Is the lake open to the public?",
        a: "Most lake access and water activities are tied to the resort and residential community rather than open public use — check current marina and resort policies for visitor access.",
      },
      {
        q: "Is Lake Las Vegas part of Henderson?",
        a: "Yes — it's within Henderson city limits, though its resort setting and private lake give it a distinct identity from the rest of the city.",
      },
    ],
  },

  "red-rock-country-club": {
    slug: "red-rock-country-club",
    name: "Red Rock Country Club",
    tagline: "Guard-gated golf living inside Summerlin",
    medianPrice: "$1.1M",
    walkScore: 30,
    avgSqftPrice: "$380/sqft",
    founded: "1997",
    heroPlaceholder: "Guard-gated entrance with golf course and Red Rock views",
    history:
      "Red Rock Country Club was developed within Summerlin starting in the late 1990s, built around two Arnold Palmer-designed golf courses and positioned as one of Summerlin's premier guard-gated enclaves.",
    overview:
      "Located within Summerlin's broader master-plan, Red Rock Country Club is its own guard-gated community centered on private golf, offering some of the closest views of Red Rock Canyon of any residential community.",
    lifestyle:
      "A private club lifestyle layered on top of Summerlin's broader amenities — golf, tennis, and a clubhouse scene within a gated setting, with Red Rock Canyon essentially as a backdrop.",
    housing: {
      summary: "Custom and semi-custom luxury homes, most with golf-course or Red Rock Canyon views, among Summerlin's highest price points.",
      types: ["Custom golf-course estates", "Guard-gated luxury homes"],
    },
    schools: {
      summary: "Served by the Clark County School District, sharing Summerlin's broader school options, plus nearby private schools.",
      names: ["Clark County School District zoned schools", "The Meadows School (nearby)"],
    },
    newConstruction: "Largely built out; remaining activity is custom rebuilds on available lots.",
    restaurants: ["Red Rock Country Club dining (members)", "Downtown Summerlin restaurants (nearby)"],
    shopping: ["Downtown Summerlin (nearby)"],
    entertainment: ["Red Rock Country Club", "Red Rock Resort & Casino (nearby)"],
    outdoorRecreation: ["Red Rock Country Club golf courses", "Red Rock Canyon National Conservation Area (adjacent)"],
    healthcare: ["Summerlin Hospital Medical Center (nearby)"],
    transportation: "Access via the 215 Beltway, roughly 25 minutes from the Strip.",
    faqs: [
      {
        q: "Is this the same as general Summerlin?",
        a: "It's a distinct, separately gated community within the broader Summerlin master-plan, with its own private golf clubs and generally higher price points.",
      },
      {
        q: "Do homes here actually see Red Rock Canyon?",
        a: "Many do — the community's western-edge location gives a meaningful share of homes direct sightlines to the canyon, though not universally.",
      },
    ],
  },

  queensridge: {
    slug: "queensridge",
    name: "Queensridge",
    tagline: "Guard-gated luxury next to Tivoli Village",
    medianPrice: "$980K",
    walkScore: 48,
    avgSqftPrice: "$360/sqft",
    founded: "1995",
    heroPlaceholder: "Guard-gated luxury homes near Tivoli Village",
    history:
      "Queensridge developed in the mid-1990s in the west valley, built around a private golf course and positioned alongside the later addition of Tivoli Village, an upscale outdoor shopping and dining destination immediately adjacent.",
    overview:
      "Located in the west valley near the 215 Beltway and Charleston Boulevard, Queensridge pairs guard-gated luxury housing with direct proximity to Tivoli Village's shops and restaurants.",
    lifestyle:
      "Luxury living with unusually strong walkable amenity access for a gated community — Tivoli Village's restaurants and boutiques sit essentially next door.",
    housing: {
      summary: "Custom and semi-custom luxury homes and condos, including some of the higher-end condo product in the west valley.",
      types: ["Custom luxury estates", "Luxury condos", "Guard-gated homes"],
    },
    schools: {
      summary: "Served by the Clark County School District, with several private-school options nearby in the west valley.",
      names: ["Clark County School District zoned schools", "Private options in the west valley (nearby)"],
    },
    newConstruction: "Largely built out, with occasional custom rebuilds on existing lots.",
    restaurants: ["Restaurants at Tivoli Village (adjacent)"],
    shopping: ["Tivoli Village"],
    entertainment: ["Tivoli Village events and dining"],
    outdoorRecreation: ["Queensridge community golf course and parks"],
    healthcare: ["Nearby west-valley hospitals and medical centers"],
    transportation: "Access via the 215 Beltway and Charleston Boulevard, roughly 15–20 minutes from the Strip.",
    faqs: [
      {
        q: "Is Tivoli Village part of Queensridge?",
        a: "Tivoli Village is a separate commercial development immediately adjacent to Queensridge, not part of the residential HOA, though its proximity is a major draw for residents.",
      },
      {
        q: "Is Queensridge fully gated?",
        a: "Most of the community is guard-gated, though it's worth confirming gate status for any specific address, as with most gated communities.",
      },
    ],
  },
};
