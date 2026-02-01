import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award,
  Hammer,
  Crown,
  Building,
  Lightbulb,
  Quote
} from "lucide-react";

const architects = [
  {
    name: "Lu Ban",
    chineseName: "魯班",
    period: "507 – 444 BCE",
    dynasty: "Spring & Autumn",
    role: "Master Carpenter & Inventor",
    achievement: "Patron Saint of Builders",
    description: "Legendary inventor and craftsman considered the patron saint of Chinese builders. His innovations revolutionized construction techniques and tools.",
    contributions: [
      "Invented carpenter's tools",
      "Developed measurement systems",
      "Created mechanical devices",
      "Established construction principles"
    ],
    quote: "A craftsman's work reflects his heart; a building's strength reflects its maker's integrity.",
    image: "/architect/lu-ban.jpg",
    icon: <Hammer className="w-6 h-6" />
  },
  {
    name: "Li Jie",
    chineseName: "李誡",
    period: "1065 – 1110",
    dynasty: "Northern Song",
    role: "Architectural Scientist",
    achievement: "Yingzao Fashi (營造法式)",
    description: "Authored the world's first comprehensive architectural codex, establishing scientific standards and modular systems for construction.",
    contributions: [
      "Created modular cai-fen system",
      "Standardized measurements",
      "Documented material specifications",
      "Systematized construction processes"
    ],
    quote: "Construction must follow the principles of heaven and earth, combining strength and harmony.",
    image: "/architect/li-jie.jpg",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    name: "Kuai Xiang",
    chineseName: "蒯祥",
    period: "1398 – 1481",
    dynasty: "Ming",
    role: "Chief Imperial Architect",
    achievement: "Forbidden City Builder",
    description: "Master architect who oversaw the construction of the Forbidden City and perfected traditional joinery techniques.",
    contributions: [
      "Forbidden City construction",
      "Advanced Dougong systems",
      "Seismic-resistant designs",
      "Integrated Feng Shui principles"
    ],
    quote: "Imperial architecture is the earthly mirror of the sovereign's virtue.",
    image: "/architect/kuai-xiang.jpg",
    icon: <Building className="w-6 h-6" />
  },
  {
    name: "Lei Fada",
    chineseName: "雷發達",
    period: "1619 – 1693",
    dynasty: "Qing",
    role: "Head of Imperial Design",
    achievement: "Lei Architectural Dynasty",
    description: "Founder of a family dynasty that served as imperial architects for seven generations, designing most Qing imperial buildings.",
    contributions: [
      "Established family tradition",
      "Created scaled models",
      "Summer Palace design",
      "Imperial standards"
    ],
    quote: "Every beam carries the weight of the empire; every tile reflects the glory of heaven.",
    image: "/architect/lei-fada.jpg",
    icon: <Crown className="w-6 h-6" />
  }
];

const architecturalAchievements = [
  {
    title: "Modular Construction",
    description: "The cai-fen system allowed for standardized, prefabricated components",
    dynasty: "Song Dynasty"
  },
  {
    title: "Earthquake Resistance",
    description: "Dougong brackets and flexible timber frames withstood seismic activity",
    dynasty: "Tang & Song Dynasties"
  },
  {
    title: "Urban Planning",
    description: "Grid-based city layouts with systematic infrastructure",
    dynasty: "Zhou Dynasty onward"
  },
  {
    title: "Garden Design",
    description: "Harmonious integration of architecture with natural landscapes",
    dynasty: "Ming & Qing Dynasties"
  }
];

const ArchitectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-imperial relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-primary/20 text-primary">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Competition Focus: Master Builders</span>
              </div>
              
              <span className="font-chinese text-5xl text-accent block mb-4">
                建築大師
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Master Architects
                <br />
                <span className="text-accent">of Ancient China</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Discover the visionary minds who shaped China's architectural heritage through innovation,
                engineering excellence, and profound cultural understanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Master Architects */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="大師"
              title="Master Builders"
              subtitle="The visionaries who defined architectural excellence across dynasties"
            />

            <div className="space-y-16">
              {architects.map((architect, index) => (
                <motion.div
                  key={architect.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Box */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[3/4] rounded-sm overflow-hidden relative border border-border chinese-frame group">
                      <img
                        src={architect.image}
                        alt={`Portrait of ${architect.name} (${architect.chineseName})`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Type-safe fallback for image errors
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          
                          const parent = target.parentElement;
                          if (!parent) return;
                          
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 flex flex-col items-center justify-center p-8';
                          fallback.innerHTML = `
                            <div class="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border-2 border-white/20">
                              <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                                ${React.isValidElement(architect.icon) ? 
                                  `<div class="w-12 h-12 flex items-center justify-center">
                                    ${architect.icon.type === Hammer ? '🔨' : 
                                      architect.icon.type === BookOpen ? '📖' : 
                                      architect.icon.type === Building ? '🏛️' : 
                                      architect.icon.type === Crown ? '👑' : '⭐'}
                                  </div>` : 
                                  '<div class="w-12 h-12 flex items-center justify-center">⭐</div>'}
                              </div>
                            </div>
                            <span class="font-chinese text-4xl text-white font-bold tracking-wider mb-2">${architect.chineseName}</span>
                            <div class="w-24 h-1 bg-white/30 my-4"></div>
                            <div class="text-center">
                              <div class="text-white/90 text-lg font-serif">${architect.name}</div>
                              <div class="text-white/70 text-sm mt-1">${architect.role}</div>
                            </div>
                          `;
                          parent.appendChild(fallback);
                        }}
                      />
                      
                      {/* Dynasty Badge */}
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">{architect.dynasty} Dynasty</span>
                      </div>
                      
                      {/* Period Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">{architect.period}</span>
                      </div>
                      
                      {/* Chinese Name Overlay */}
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium font-chinese">{architect.chineseName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          {architect.icon}
                        </div>
                        <div>
                          <h2 className="font-serif text-3xl font-bold text-foreground">
                            {architect.name}
                          </h2>
                          <div className="text-accent font-medium">{architect.achievement}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm mb-6">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {architect.period}
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {architect.dynasty} Dynasty
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4" />
                          {architect.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {architect.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-accent" />
                        Key Innovations & Contributions
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {architect.contributions.map((contribution, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-card rounded-sm border border-border hover:border-accent/30 transition-colors"
                          >
                            <div className="w-2 h-2 rounded-full mt-2 bg-accent flex-shrink-0" />
                            <span className="text-sm text-foreground/90">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="relative p-6 bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-accent rounded-r-sm">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                      <p className="text-foreground/80 italic pl-8 relative z-10">
                        "{architect.quote}"
                      </p>
                      <div className="text-sm text-primary mt-3 pl-8 font-medium">
                        — {architect.name}
                      </div>
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architectural Achievements */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="成就"
              title="Architectural Achievements"
              subtitle="Key innovations that defined Chinese architectural excellence"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {architecturalAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-6 rounded-sm border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-foreground/70 text-sm mb-3">
                    {achievement.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {achievement.dynasty}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-24 bg-gradient-science">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/20 text-primary">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Competition Inspiration</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Legacy of Innovation
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                  These master architects demonstrate that true innovation combines technical mastery with 
                  cultural wisdom. Their work shows how architecture can harmonize with nature, respect 
                  tradition while embracing innovation, and create beauty through mathematical precision.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-6 py-3 bg-accent text-accent-foreground rounded-sm font-medium">
                    Technical Excellence
                  </div>
                  <div className="px-6 py-3 bg-primary/20 text-primary-foreground rounded-sm font-medium">
                    Cultural Integration
                  </div>
                  <div className="px-6 py-3 bg-accent/20 text-accent-foreground rounded-sm font-medium">
                    Sustainable Design
                  </div>
                  <div className="px-6 py-3 bg-primary/10 text-primary-foreground rounded-sm font-medium">
                    Systematic Innovation
                  </div>
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

export default ArchitectsPage;