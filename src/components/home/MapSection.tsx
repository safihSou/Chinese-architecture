import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import chinaMap from "@/assets/china-map.jpg";

const sites = [
  {
    name: "Forbidden City",
    location: "Beijing",
    description: "Imperial palace complex of 980 buildings",
    coords: { top: "30%", left: "60%" },
  },
  {
    name: "Summer Palace",
    location: "Beijing",
    description: "Imperial garden palace masterpiece",
    coords: { top: "32%", left: "62%" },
  },
  {
    name: "Potala Palace",
    location: "Lhasa, Tibet",
    description: "Highest ancient palace in the world",
    coords: { top: "45%", left: "40%" },
  },
  {
    name: "Daming Palace",
    location: "Xi'an",
    description: "Largest palace complex in Chinese history",
    coords: { top: "45%", left: "48%" },
  },
  {
    name: "Mukden Palace",
    location: "Shenyang",
    description: "Only complete palace complex outside Beijing",
    coords: { top: "35%", left: "65%" },
  },
  {
    name: "Chengde Resort",
    location: "Chengde",
    description: "Imperial mountain retreat with 72 scenic spots",
    coords: { top: "38%", left: "62%" },
  },
  {
    name: "Weiyang Palace",
    location: "Xi'an",
    description: "Main imperial palace of Western Han dynasty",
    coords: { top: "47%", left: "49%" },
  },
  {
    name: "Yongle Palace",
    location: "Ruicheng",
    description: "Best preserved Yuan dynasty Taoist palace",
    coords: { top: "48%", left: "52%" },
  },
];

export const MapSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          chineseTitle="宮殿地圖"
          title="Imperial Palace Sites"
          subtitle="Explore the geography of China's magnificent imperial palaces and residences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] relative rounded-sm overflow-hidden border border-border"
          >
            <img
              src={chinaMap}
              alt="Map of imperial Chinese palace sites"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

            {/* Decorative pins */}
            {sites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ top: site.coords.top, left: site.coords.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-accent shadow-lg border-2 border-background animate-pulse" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-background/95 backdrop-blur-sm px-3 py-2 rounded-sm shadow-lg border border-border whitespace-nowrap">
                      <p className="text-xs font-semibold text-foreground">{site.name}</p>
                      <p className="text-xs text-accent">{site.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{site.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sites list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group museum-card p-4 cursor-pointer hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                        {site.name}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-primary mb-1">{site.location}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {site.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};