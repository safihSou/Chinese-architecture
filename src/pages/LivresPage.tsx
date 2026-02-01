import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { 
  BookOpen, 
  Calendar, 
  Scroll, 
  FileText, 
  Star, 
  Microscope,
  Calculator,
  Globe,
  Compass,
  Award,
  Zap,
  Lightbulb,
  Brain,
  Cog
} from "lucide-react";

const scientificTexts = [
  {
    title: "Yingzao Fashi",
    chineseTitle: "營造法式",
    author: "Li Jie (李誡)",
    year: "1103",
    dynasty: "Northern Song",
    description: "The world's first complete architectural codex, systematically documenting building standards, materials, and construction methods with mathematical precision.",
    significance: "Established modular construction systems 500 years before Western counterparts, enabling rapid, standardized imperial construction.",
    scientificContributions: [
      "Modular Cai-Fen system (precursor to modular design)",
      "Material science specifications",
      "Structural load calculations",
      "Quality control standards"
    ],
    modernRelevance: "Influenced modern prefabricated construction and standardized building codes worldwide.",
    competitionTheme: "Scientific Innovation",
    icon: <Calculator className="w-6 h-6" />
  },
  {
    title: "Tiangong Kaiwu",
    chineseTitle: "天工開物",
    author: "Song Yingxing (宋應星)",
    year: "1637",
    dynasty: "Ming",
    description: "Comprehensive encyclopedia of Chinese technology and industry, covering agriculture, textiles, metallurgy, ceramics, and architectural materials production.",
    significance: "First systematic documentation of industrial processes, providing insights into sustainable resource management.",
    scientificContributions: [
      "Metallurgical engineering processes",
      "Hydraulic power systems",
      "Material recycling techniques",
      "Energy-efficient production"
    ],
    modernRelevance: "Foundation for industrial archaeology and sustainable engineering studies.",
    competitionTheme: "Technical Documentation",
    icon: <Cog className="w-6 h-6" />
  },
  {
    title: "Lu Ban Jing",
    chineseTitle: "魯班經",
    author: "Attributed to Lu Ban",
    year: "15th century",
    dynasty: "Ming",
    description: "Practical manual blending carpentry techniques with applied mathematics, geometry, and early engineering principles.",
    significance: "Demonstrates how traditional craftsmanship incorporated scientific principles centuries before formal engineering education.",
    scientificContributions: [
      "Geometric construction methods",
      "Structural joinery systems",
      "Material stress analysis",
      "Tool innovation documentation"
    ],
    modernRelevance: "Inspires modern timber construction and sustainable building practices.",
    competitionTheme: "Engineering Principles",
    icon: <Compass className="w-6 h-6" />
  },
  {
    title: "Shuilu Gongdian",
    chineseTitle: "水利宮殿",
    author: "Various Imperial Engineers",
    year: "Various",
    dynasty: "Multiple Dynasties",
    description: "Collected works on hydraulic engineering and water management systems essential for Chinese architectural complexes.",
    significance: "Advanced understanding of fluid dynamics and environmental engineering in architectural planning.",
    scientificContributions: [
      "Hydraulic pressure systems",
      "Water purification methods",
      "Flood control mechanisms",
      "Irrigation integration"
    ],
    modernRelevance: "Principles applied in modern sustainable architecture and water management.",
    competitionTheme: "Environmental Science",
    icon: <Zap className="w-6 h-6" />
  }
];

const modernApplications = [
  {
    title: "Modular Construction",
    description: "Yingzao Fashi's Cai-Fen system inspired modern prefabricated building techniques used worldwide.",
    impact: "Reduced construction time by 40% in contemporary projects",
    icon: <Cog />
  },
  {
    title: "Sustainable Materials",
    description: "Ancient material science from these texts informs modern eco-friendly building materials.",
    impact: "Bamboo composites now used in sustainable architecture",
    icon: <Lightbulb />
  },
  {
    title: "Structural Analysis",
    description: "Traditional joinery techniques studied for earthquake-resistant designs.",
    impact: "Applied in seismic zones across Asia",
    icon: <Brain />
  },
  {
    title: "Heritage Conservation",
    description: "Texts provide crucial data for accurate restoration of historical sites.",
    impact: "Guiding UNESCO World Heritage preservation",
    icon: <Award />
  }
];

const BooksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Scientific Hero - FIXED CONTRAST */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/20 text-white">
                <Microscope className="w-5 h-5" />
                <span className="text-sm font-medium">Competition Focus: Scientific Heritage</span>
              </div>
              
              <span className="font-chinese text-5xl text-yellow-300 block mb-4">
                科學典籍
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Scientific Manuscripts of
                <br />
                <span className="text-yellow-300">Ancient Chinese Architecture</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Exploring the engineering principles, mathematical calculations, and technical innovations 
                that shaped one of the world's most sophisticated architectural traditions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <span>Mathematical Precision</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <span>Engineering Standards</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <span>Material Science</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <span>Sustainable Design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scientific Texts Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="技術文獻"
              title="Engineering & Scientific Texts"
              subtitle="Ancient manuscripts documenting architectural science and innovation"
            />

            <div className="space-y-16">
              {scientificTexts.map((text, index) => (
                <motion.div
                  key={text.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="museum-card overflow-hidden border-l-4 border-blue-600"
                >
                  <div className="grid lg:grid-cols-3">
                    {/* Scientific Text Header */}
                    <div className="bg-blue-50 p-8 flex flex-col items-center justify-center text-center relative">
                      <div className="absolute top-4 left-4">
                        <div className="p-2 rounded-sm bg-blue-100 text-blue-600">
                          {text.icon}
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Scroll className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className="font-chinese text-3xl text-blue-900 mb-2">
                        {text.chineseTitle}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">
                        {text.title}
                      </h3>
                      
                      <div className="space-y-2 w-full">
                        <div className="px-3 py-1 rounded-sm bg-blue-100 text-blue-800 text-sm">
                          {text.dynasty} Dynasty
                        </div>
                        <div className="px-3 py-1 rounded-sm bg-yellow-100 text-yellow-800 text-sm font-medium">
                          {text.competitionTheme}
                        </div>
                      </div>
                    </div>

                    {/* Scientific Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                        <span className="flex items-center gap-2 text-gray-600">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          {text.author}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          {text.year} CE
                        </span>
                        <span className="flex items-center gap-2 text-blue-600 font-medium">
                          <Star className="w-4 h-4" />
                          Scientific Treatise
                        </span>
                      </div>

                      <p className="text-gray-800 leading-relaxed mb-8 text-lg">
                        {text.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="font-serif font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Microscope className="w-5 h-5 text-blue-600" />
                            Scientific Contributions
                          </h4>
                          <ul className="space-y-3">
                            {text.scientificContributions.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-blue-50 p-5 rounded-sm">
                          <h4 className="font-serif font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-600" />
                            Modern Relevance
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {text.modernRelevance}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-sm border border-blue-200">
                        <p className="text-gray-800">
                          <span className="font-semibold text-blue-800">Competition Significance: </span>
                          {text.significance}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Applications */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              chineseTitle="當代應用"
              title="Modern Scientific Applications"
              subtitle="How ancient architectural science informs contemporary innovation"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modernApplications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-sm border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                    {app.icon}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                    {app.title}
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    {app.description}
                  </p>
                  <div className="text-xs text-blue-600 font-medium">
                    Impact: {app.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Competition Section */}
        <section className="py-24 bg-gradient-to-r from-blue-800 to-indigo-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                  Scientific Research Opportunities
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  These ancient manuscripts offer rich material for scientific research, 
                  mathematical analysis, and engineering innovation. They demonstrate how 
                  traditional knowledge can inform modern sustainable architecture.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-6 py-3 bg-yellow-500 text-white rounded-sm font-medium hover:bg-yellow-600 transition-colors">
                    Material Science Studies
                  </div>
                  <div className="px-6 py-3 bg-blue-500 text-white rounded-sm font-medium hover:bg-blue-600 transition-colors">
                    Structural Engineering Analysis
                  </div>
                  <div className="px-6 py-3 bg-green-500 text-white rounded-sm font-medium hover:bg-green-600 transition-colors">
                    Sustainable Design Principles
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

export default BooksPage;