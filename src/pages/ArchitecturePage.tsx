import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Castle,
  Building,
  Home,
  Church,
  Landmark,
  Mountain,
  Compass,
  Calendar,
  Users,
  MapPin,
  Clock,
  Star,
  Layers,
  Image as ImageIcon
} from "lucide-react";

const ancientPalaces = [
  {
    name: "Forbidden City",
    chineseName: "紫禁城",
    location: "Beijing",
    period: "Ming Dynasty (1406-1420)",
    icon: Castle,
    description: "The world's largest imperial palace complex, home to 24 emperors across Ming and Qing dynasties, with 980 buildings spanning 72 hectares.",
    features: [
      "9,999½ rooms (½ symbolizes humility before heaven)",
      "Yellow glazed roof tiles reserved for emperor",
      "Perfect north-south cosmic alignment",
      "Meridian Gate as ceremonial entrance"
    ],
    significance: "Epitome of Chinese imperial architecture and cosmic symbolism",
    image: "/architecture/forbidden-city.jpg" // Image filename: forbidden-city.jpg
  },
  {
    name: "Summer Palace",
    chineseName: "頤和園",
    location: "Beijing",
    period: "Qing Dynasty (1750)",
    icon: Landmark,
    description: "Imperial garden palace combining palace architecture with natural landscape, serving as summer retreat for royal family.",
    features: [
      "Long Corridor with 14,000 traditional paintings",
      "Marble Boat symbolizing stability of Qing dynasty",
      "Kunming Lake and Longevity Hill integration",
      "Seventeen-Arch Bridge with 544 stone lions"
    ],
    significance: "Masterpiece of Chinese garden design and UNESCO World Heritage",
    image: "/architecture/summer-palace.jpg" // Image filename: summer-palace.jpg
  },
  {
    name: "Potala Palace",
    chineseName: "布達拉宮",
    location: "Lhasa, Tibet",
    period: "7th-17th century",
    icon: Building,
    description: "Fortress-palace-monastery complex, the highest ancient palace in the world at 3,700 meters elevation.",
    features: [
      "13-story structure with 1,000+ rooms",
      "White Palace (administrative) and Red Palace (religious)",
      "Gold-plated roofs weighing over 30 tons",
      "Built into mountainside without deep foundations"
    ],
    significance: "Symbol of Tibetan Buddhism and architectural marvel",
    image: "/architecture/potala-palace.jpg" // Image filename: potala-palace.jpg
  },
  {
    name: "Mukden Palace",
    chineseName: "瀋陽故宮",
    location: "Shenyang",
    period: "Qing Dynasty (1625-1636)",
    icon: Castle,
    description: "Early Qing dynasty imperial palace featuring Manchu architectural influences alongside traditional Chinese styles.",
    features: [
      "Only palace outside Beijing with complete imperial complex",
      "Dazheng Hall with octagonal shape",
      "Integration of Manchu, Han, and Tibetan styles",
      "Ten Kings Pavilion for administrative affairs"
    ],
    significance: "Transitional architecture between Ming and Qing dynasties",
    image: "/architecture/mukden-palace.jpg" // Image filename: mukden-palace.jpg
  },
  {
    name: "Daming Palace",
    chineseName: "大明宮",
    location: "Xi'an, Shaanxi",
    period: "Tang Dynasty (634)",
    icon: Castle,
    description: "The largest palace complex ever built in Chinese history, covering 3.5 square kilometers during Tang dynasty golden age.",
    features: [
      "4.5 times larger than Forbidden City",
      "Hanyuan Hall for grand imperial ceremonies",
      "Advanced underfloor heating system",
      "Sophisticated drainage and water supply"
    ],
    significance: "Symbol of Tang dynasty prosperity and cultural openness",
    image: "/architecture/daming-palace.jpg" // Image filename: daming-palace.jpg
  },
  {
    name: "Weiyang Palace",
    chineseName: "未央宮",
    location: "Xi'an, Shaanxi",
    period: "Han Dynasty (200 BC)",
    icon: Building,
    description: "The main imperial palace of Western Han dynasty, famous for its immense scale and exquisite craftsmanship.",
    features: [
      "Largest palace of its time (5 sq km)",
      "40-meter tall front gate tower",
      "Complex of 43 individual buildings",
      "Center of Silk Road diplomacy"
    ],
    significance: "Architectural peak of Han dynasty imperial power",
    image: "/architecture/weiyang-palace.jpg" // Image filename: weiyang-palace.jpg
  },
  {
    name: "Epang Palace",
    chineseName: "阿房宮",
    location: "Xi'an, Shaanxi",
    period: "Qin Dynasty (212 BC)",
    icon: Castle,
    description: "Legendary imperial palace begun by Qin Shi Huang, said to be the largest palace ever conceived in ancient China.",
    features: [
      "Front hall could seat 10,000 people",
      "Corridors connecting to Mount Li",
      "Moat crossed by elevated walkways",
      "Never completed due to dynasty collapse"
    ],
    significance: "Symbol of Qin dynasty's ambition and excess",
    image: "/architecture/epang-palace.jpg" // Image filename: epang-palace.jpg
  },
  {
    name: "Chengde Mountain Resort",
    chineseName: "承德避暑山莊",
    location: "Chengde, Hebei",
    period: "Qing Dynasty (1703-1792)",
    icon: Mountain,
    description: "Imperial summer retreat and hunting lodge combining palace architecture with natural mountain landscape.",
    features: [
      "Largest existing imperial garden (5.6 sq km)",
      "72 named scenic spots",
      "Integration of Han, Mongolian, and Tibetan styles",
      "Eight Outer Temples surrounding complex"
    ],
    significance: "Political and diplomatic center of Qing dynasty",
    image: "/architecture/chengde-resort.jpg" // Image filename: chengde-resort.jpg
  },
  {
    name: "Yongle Palace",
    chineseName: "永樂宮",
    location: "Ruicheng, Shanxi",
    period: "Yuan Dynasty (1247-1358)",
    icon: Church,
    description: "Taoist temple-palace complex famous for its magnificent Yuan dynasty murals and architectural harmony.",
    features: [
      "Four main halls aligned on central axis",
      "402 square meters of Yuan dynasty murals",
      "Complete Taoist architectural ensemble",
      "Intricate dougong bracket systems"
    ],
    significance: "Best preserved Yuan dynasty Taoist architecture",
    image: "/architecture/yongle-palace.jpg" // Image filename: yongle-palace.jpg
  },
  {
    name: "Prince Gong's Mansion",
    chineseName: "恭王府",
    location: "Beijing",
    period: "Qing Dynasty (1777)",
    icon: Home,
    description: "Best preserved princely mansion from Qing dynasty, combining residential and garden architecture.",
    features: [
      "99.5 rooms (just below imperial 99.5 standard)",
      "Western-style gate unique among Beijing mansions",
      "Exquisite rockeries and water features",
      "Integration of northern and southern garden styles"
    ],
    significance: "Epitome of Qing dynasty aristocratic residence",
    image: "/architecture/prince-gong-mansion.jpg" // Image filename: prince-gong-mansion.jpg
  },
  {
    name: "Confucius Mansion",
    chineseName: "孔府",
    location: "Qufu, Shandong",
    period: "Ming Dynasty (1377)",
    icon: Home,
    description: "Residential palace of Confucius's descendants, adjacent to Confucius Temple and Cemetery.",
    features: [
      "9 courtyards with 463 rooms",
      "Archives with 600,000 documents",
      "Ceremonial halls for ancestral worship",
      "Integration of temple and residence functions"
    ],
    significance: "Only non-imperial family granted palace status",
    image: "/architecture/confucius-mansion.jpg" // Image filename: confucius-mansion.jpg
  },
  {
    name: "Imperial Mountain Resort",
    chineseName: "皇山避暑山莊",
    location: "Various locations",
    period: "Various dynasties",
    icon: Mountain,
    description: "Network of imperial mountain retreats used for escaping summer heat, hunting, and political retreats.",
    features: [
      "Strategic locations near capitals",
      "Combination of palace and natural elements",
      "Military training grounds",
      "Diplomatic reception areas"
    ],
    significance: "Mobile centers of imperial power and leisure",
    image: "/architecture/mountain-retreat.jpg" // Image filename: mountain-retreat.jpg
  }
];

const palaceStyles = [
  {
    name: "Imperial Capital Palaces",
    examples: "Forbidden City, Daming Palace",
    characteristics: "Axial symmetry, yellow roofs, dragon motifs, ceremonial gates",
    period: "All dynasties"
  },
  {
    name: "Mountain Resort Palaces",
    examples: "Chengde Resort, Summer Palace",
    characteristics: "Landscape integration, seasonal use, hunting facilities",
    period: "Qing Dynasty"
  },
  {
    name: "Temple-Palace Complexes",
    examples: "Potala Palace, Yongle Palace",
    characteristics: "Religious functions, monastic quarters, ritual spaces",
    period: "Yuan-Qing Dynasties"
  },
  {
    name: "Aristocratic Mansions",
    examples: "Prince Gong's Mansion, Confucius Mansion",
    characteristics: "Refined gardens, scholar aesthetics, family compounds",
    period: "Ming-Qing Dynasties"
  }
];

const ArchitecturalCard = ({ architecture }: { architecture: typeof ancientPalaces[0] }) => {
  const Icon = architecture.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="museum-card overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      {/* Image Section with Fallback */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden">
        {architecture.image ? (
          <>
            <img
              src={architecture.image}
              alt={`${architecture.name} (${architecture.chineseName})`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="font-chinese text-2xl text-white font-bold">{architecture.chineseName}</span>
            </div>
          </div>
        )}
        
        <div className="absolute top-4 left-4 z-20">
          <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-medium text-accent">
            {architecture.period.split(' ')[0]}
          </span>
        </div>
        
        {/* Placeholder indicator if no image */}
        {!architecture.image && (
          <div className="absolute bottom-4 right-4 z-20">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              <ImageIcon className="w-3 h-3 text-white/70" />
              <span className="text-xs text-white/70">Image Placeholder</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
              {architecture.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{architecture.location}</span>
              <span className="font-chinese">{architecture.chineseName}</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {architecture.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 text-accent" />
            <span className="font-medium text-foreground">Historical Significance:</span>
            <span className="text-muted-foreground">{architecture.significance}</span>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Architectural Highlights:</h4>
            <ul className="space-y-1">
              {architecture.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ArchitecturePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-imperial relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="font-chinese text-5xl text-accent/60 block mb-4">
                宮殿
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Imperial Chinese Palaces
                <br />
                <span className="text-accent">Thrones of Heaven's Mandate</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Journey through the magnificent world of Chinese imperial palaces—architectural embodiments of cosmic order,
                political power, and cultural refinement spanning three millennia of dynastic rule.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Overview */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    Dynastic Evolution
                  </h2>
                  <p className="text-muted-foreground">
                    Chinese palace architecture evolved through successive dynasties, reflecting changing political ideologies, 
                    technological advancements, and cosmological beliefs.
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {['Qin-Han Foundations', 'Tang-Song Golden Age', 'Yuan-Ming Synthesis', 'Qing Perfection'].map((period, idx) => (
                    <div key={period} className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 ${
                        idx === 0 ? 'bg-primary/10 text-primary' :
                        idx === 1 ? 'bg-accent/10 text-accent' :
                        idx === 2 ? 'bg-secondary/10 text-secondary' :
                        'bg-muted/10 text-muted-foreground'
                      }`}>
                        <Calendar className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium">{period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Palaces Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="皇家宮殿"
              title="Imperial Palace Complexes"
              subtitle="From cosmic capitals to mountain retreats—architectural masterpieces of imperial China"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ancientPalaces.map((palace, index) => (
                <ArchitecturalCard key={palace.name} architecture={palace} />
              ))}
            </div>
          </div>
        </section>

        {/* Palace Architecture Styles */}
        <section className="py-24 bg-secondary/5">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="宮殿風格"
              title="Palace Architectural Styles"
              subtitle="Distinct categories of imperial residences and their defining characteristics"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {palaceStyles.map((style, index) => (
                <motion.div
                  key={style.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="museum-card p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="mb-4">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {style.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Period: <span className="text-accent">{style.period}</span>
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Representative Examples:</h4>
                      <p className="text-sm text-muted-foreground">{style.examples}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Key Characteristics:</h4>
                      <p className="text-sm text-muted-foreground">{style.characteristics}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Imperial Innovations */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionTitle
                chineseTitle="皇家創新"
                title="Imperial Architectural Innovations"
                subtitle="Revolutionary design principles and technologies developed for imperial palaces"
              />
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="museum-card p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                      <Compass className="w-6 h-6 text-primary" />
                      Cosmic Alignment System
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Imperial palaces were meticulously aligned with celestial bodies and geographical features to embody the "Mandate of Heaven" and maintain cosmic harmony.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">North-South Axis</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Five Elements</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">Yin-Yang Balance</span>
                    </div>
                  </div>
                  
                  <div className="museum-card p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      Hierarchical Spatial Organization
                    </h3>
                    <p className="text-muted-foreground">
                      Strict zoning based on social hierarchy, with innermost courtyards reserved for emperor, moving outward through family, officials, and public spaces.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="museum-card p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      Ceremonial Processional Design
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Architectural sequences designed for imperial rituals, with gates, courtyards, and halls arranged to create psychological and spiritual progression.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Nine-layer gate system for solemnity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Elevated platforms for celestial connection
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Symmetrical layouts for cosmic order
                      </li>
                    </ul>
                  </div>
                  
                  <div className="museum-card p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary" />
                      Climate Adaptation Systems
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced environmental control including underfloor heating (kang), natural ventilation, sun-shading eaves, and strategic water features for microclimate regulation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Imperial Legacy */}
        <section className="py-24 bg-gradient-imperial text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block font-chinese text-5xl text-accent/60 mb-6"
              >
                皇家遺產
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-bold mb-8"
              >
                The Imperial Architectural Legacy
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-primary-foreground/80 leading-relaxed mb-10"
              >
                Chinese imperial palaces represent the highest achievement of traditional Chinese architecture—where cosmology meets craftsmanship,
                and political power finds physical form. These architectural marvels continue to inspire awe and scholarly study,
                preserving the wisdom of ancient Chinese civilization for future generations.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-accent mb-2">24</div>
                  <div className="text-sm">Emperors in Forbidden City</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-accent mb-2">3,000+</div>
                  <div className="text-sm">Years of Imperial Tradition</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-accent mb-2">72</div>
                  <div className="text-sm">Hectares of Palace Grounds</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-accent mb-2">∞</div>
                  <div className="text-sm">Cultural Symbolism</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArchitecturePage;