export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishDate: string;
  readMinutes: number;
  heroPlaceholder: string;
  body: string[]; // paragraphs; first-level headings handled via ## markers
};

export const blogPosts: BlogPost[] = [
  {
    slug: "moving-to-las-vegas-first-timers-guide",
    title: "Moving to Las Vegas: A First-Timer's Guide",
    category: "Relocation",
    excerpt:
      "Everything to know before you move to the Las Vegas Valley — from choosing a side of town to understanding how the area actually lives day to day.",
    publishDate: "2026-05-04",
    readMinutes: 7,
    heroPlaceholder: "Moving truck in front of a new Las Vegas Valley home",
    body: [
      "Most people picture the Strip when they think of Las Vegas, but the vast majority of the valley's roughly 2.3 million residents live nowhere near it. The city you'll actually live in is quieter, more suburban, and more spread out than its reputation suggests — and figuring out which part of that spread-out valley fits you is the first real decision to make before you move.",
      "## Start with commute, not aesthetics",
      "It's tempting to pick a neighborhood by photos alone, but the Las Vegas Valley is large enough that commute time varies dramatically by area. Southwest-valley communities like Mountain's Edge and Rhodes Ranch sit a solid 20–25 minutes from the Strip and downtown; west-valley neighborhoods like The Lakes or Spanish Trail are notably closer; and newer northwest master-plans like Skye Canyon can run 30 minutes or more. If your job or lifestyle is anchored near the resort corridor, start your search closer in and work outward.",
      "## Understand the master-plan model",
      "Much of the valley's growth over the last 30 years has come through large master-planned communities — Summerlin, Henderson's various master-plans, Mountain's Edge, Skye Canyon — each built around its own parks, schools, and shopping rather than relying on the broader city's infrastructure. This means two neighborhoods 10 minutes apart can feel like entirely different towns in terms of amenities, HOA culture, and price point.",
      "## Budget for HOA dues and desert-specific costs",
      "Almost every newer community carries a homeowners association, and dues vary widely by amenities — expect anywhere from modest monthly fees in older neighborhoods to several hundred dollars a month in golf or lake communities. Also budget for desert-specific costs that surprise a lot of transplants: higher summer electric bills from air conditioning, and landscaping that leans toward xeriscape rather than traditional lawns in most HOAs.",
      "## Give yourself a full season before deciding where to buy",
      "If you can, rent for a few months or take an extended look-around trip before committing to a neighborhood. Summer in Las Vegas is genuinely different from the rest of the year, and a community that feels perfect in February can feel very different in August. Beth regularly walks new-to-the-valley clients through this exact tradeoff — reach out if you want a second opinion on any specific area.",
    ],
  },
  {
    slug: "living-in-henderson-what-to-expect",
    title: "Living in Henderson: What to Expect",
    category: "Neighborhoods",
    excerpt:
      "Henderson consistently ranks among the safest cities in Nevada. Here's what day-to-day life actually looks like across its many master-planned communities.",
    publishDate: "2026-04-18",
    readMinutes: 5,
    heroPlaceholder: "Henderson neighborhood street with Lake Mead in the distance",
    body: [
      "Henderson is Nevada's second-largest city, but it doesn't feel like one big place — it feels like a collection of distinct master-planned communities that happen to share a city government. Green Valley, Anthem, Inspirada, MacDonald Highlands, and Lake Las Vegas are all technically Henderson, but each has its own character, price point, and pace of life.",
      "## Who Henderson tends to fit",
      "Families and retirees make up a large share of Henderson's draw, largely because of its consistently strong school ratings relative to the rest of the valley and its lower overall crime rates. If quiet streets, established HOAs, and a shorter drive to Lake Mead matter more to you than proximity to the Strip, Henderson is usually the right starting point for a search.",
      "## The food and retail scene has grown up fast",
      "The District at Green Valley Ranch and the historic Water Street District downtown have both become genuine dining destinations in their own right over the past decade, not just convenient options for locals — worth a visit even if you end up buying elsewhere in the valley.",
      "## Commute reality check",
      "Henderson's biggest practical advantage is its proximity to Harry Reid International Airport — often the shortest airport commute of any major valley community. The tradeoff is a slightly longer drive to Summerlin or the northwest valley if that's where you work.",
    ],
  },
  {
    slug: "best-neighborhoods-for-families-las-vegas-valley",
    title: "5 Best Neighborhoods for Families in the Las Vegas Valley",
    category: "Neighborhoods",
    excerpt:
      "Schools, parks, and safety are the three things families ask about most. Here's how five of the valley's top family-oriented communities actually compare.",
    publishDate: "2026-03-22",
    readMinutes: 6,
    heroPlaceholder: "Family playing in a community park with new homes behind",
    body: [
      "\"Best for families\" means something a little different to every buyer, but a few things come up in nearly every conversation Beth has with parents relocating to or moving within the valley: school ratings, walkable parks, and a genuine sense of neighbors knowing each other. These five communities consistently deliver on all three, at different price points.",
      "## Summerlin",
      "Summerlin's village structure means most families end up within walking or biking distance of a park, and its trail network gives kids room to roam safely. Schools inside Summerlin's boundaries are generally strong, and the community's overall scale means there's a village-level option for nearly every budget.",
      "## Mountain's Edge",
      "Often described as a more affordable Summerlin, Mountain's Edge was built around the same park-centric philosophy at a lower price point, making it a strong option for families who want the lifestyle without the west-valley premium.",
      "## Anthem",
      "The family sections of Anthem (distinct from the age-restricted Sun City Anthem) sit on hillside terrain with genuine views, paired with Henderson's generally strong school ratings.",
      "## Inspirada",
      "A newer, still-growing master-plan with a heavier emphasis on walkability than most Henderson-area communities — many homes back directly onto greenbelts and parks.",
      "## Skye Canyon",
      "Built specifically around an active, outdoor-lifestyle identity, Skye Canyon suits families who want trail access and community fitness programming as a genuine daily feature, not just a marketing line.",
    ],
  },
  {
    slug: "first-time-buyer-guide-las-vegas-market",
    title: "A First-Time Buyer's Guide to the Las Vegas Market",
    category: "Buying",
    excerpt:
      "The basics of buying your first home in the Las Vegas Valley — from loan types to what actually moves the needle in a competitive offer.",
    publishDate: "2026-02-10",
    readMinutes: 6,
    heroPlaceholder: "First-time buyers reviewing paperwork with keys on the table",
    body: [
      "Buying your first home anywhere is a process with a lot of moving parts; buying in the Las Vegas Valley specifically comes with a few local wrinkles worth knowing going in.",
      "## Get pre-approved before you tour anything",
      "Given how quickly well-priced homes move in many valley communities, a pre-approval letter (not just a pre-qualification) is close to a requirement before touring seriously, and it's essential before writing an offer.",
      "## Understand HOA disclosures",
      "Nevada requires detailed HOA disclosure packages for any home within an association, covering dues, reserve funds, and pending litigation. Read these closely — a community with underfunded reserves can mean a large special assessment down the line.",
      "## New construction vs. resale",
      "The valley has an unusually large new-construction market relative to many other metros, thanks to communities like Inspirada, Skye Canyon, and Mountain's Edge still actively building. New construction often means builder incentives (rate buydowns, closing-cost credits) that resale sellers can't match — but resale homes in established neighborhoods often come with more mature landscaping and lower initial HOA dues.",
      "## Work with someone who knows the valley's patchwork of communities",
      "Because so much of the valley is organized into distinct master-plans rather than one uniform city grid, local expertise matters more here than in many markets — a 10-minute difference in location can mean a completely different school district, HOA culture, or price tier.",
    ],
  },
  {
    slug: "north-las-vegas-up-and-coming-guide",
    title: "North Las Vegas: An Up-and-Coming Guide",
    category: "Neighborhoods",
    excerpt:
      "North Las Vegas has quietly become one of the valley's fastest-growing areas. Here's what's driving it and where to look.",
    publishDate: "2026-01-15",
    readMinutes: 5,
    heroPlaceholder: "New-construction homes under a wide desert sky in North Las Vegas",
    body: [
      "North Las Vegas doesn't get the same attention as Summerlin or Henderson, but it's been one of the valley's fastest-growing cities for years, driven by newer master-plans like Aliante and Skye Canyon's neighbors on the city's northern edge, plus a growing logistics and industrial employment base.",
      "## Why it's growing",
      "Available land and generally lower price points have made North Las Vegas an attractive target for both national homebuilders and buyers priced out of the southwest and west valley. That growth has, in turn, brought newer retail and infrastructure that didn't exist a decade ago.",
      "## What to expect price-wise",
      "North Las Vegas remains one of the more affordable entry points into valley homeownership, particularly in newer-construction neighborhoods, though pricing has been rising as the area's amenities catch up to its growth.",
      "## Where to focus a search",
      "Aliante offers an established, golf-and-casino-anchored option with mature landscaping; the areas further north and east toward the Sheep Mountains carry more active new-construction inventory for buyers who want the newest possible product.",
    ],
  },
];
