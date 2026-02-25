import React from 'react';
import { ShieldAlert, ArrowRightLeft, Lock, Map, Trees, Compass, Route } from 'lucide-react';
import { motion } from 'motion/react';

const geoData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "label": "Old Entrance (Closed)", "type": "point" },
      "geometry": { "coordinates": [-82.33572487589143, 36.405455645096154], "type": "Point" },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": { "label": "New Entrance", "type": "point", "highlight": true },
      "geometry": { "coordinates": [-82.33805508892144, 36.40818791993637], "type": "Point" }
    },
    {
      "type": "Feature",
      "properties": { "label": "Rocky Mount (1790)", "type": "point" },
      "geometry": { "coordinates": [-82.33667902576211, 36.40558225902204], "type": "Point" },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": { "type": "boundary" },
      "geometry": {
        "coordinates": [
          [-82.33699730656649, 36.40340677331203],
          [-82.33387521527311, 36.40473658196642],
          [-82.33439019940379, 36.40528058803817],
          [-82.3342614533713, 36.405332397941805],
          [-82.33499101422282, 36.40615271680835],
          [-82.33476570866577, 36.406290874923556],
          [-82.33514121792771, 36.40673988710016],
          [-82.3345189454363, 36.40711118367123],
          [-82.33657498217295, 36.40937765579697],
          [-82.33827079707429, 36.40829008420435],
          [-82.34060254256379, 36.406605384426356],
          [-82.33699893589836, 36.40338516042155]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": { "type": "path" },
      "geometry": {
        "coordinates": [
          [-82.33840328261363, 36.40820478382793],
          [-82.3346406933015, 36.40445147454045]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": { "type": "path" },
      "geometry": {
        "coordinates": [
          [-82.33804504490695, 36.40821217047137],
          [-82.33658866283021, 36.40914176861256],
          [-82.33510214871005, 36.40748465112357],
          [-82.33550390928302, 36.40718555785995],
          [-82.33540346913962, 36.406797543261945],
          [-82.33581527372708, 36.406514614729346],
          [-82.33533316103961, 36.40603767572749],
          [-82.33572487759811, 36.40550414727335]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": { "label": "Heritage Center", "type": "building" },
      "geometry": {
        "coordinates": [[
          [-82.33587394588275, 36.407697620076675],
          [-82.33587394588275, 36.407507049369016],
          [-82.33564505062266, 36.407507049369016],
          [-82.33564505062266, 36.407697620076675],
          [-82.33587394588275, 36.407697620076675]
        ]],
        "type": "Polygon"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": { "label": "Oldest Farm (1775)", "type": "building" },
      "geometry": {
        "coordinates": [[
          [-82.33604759056259, 36.40678922884183],
          [-82.33604759056259, 36.40664312296674],
          [-82.33570819414301, 36.40664312296674],
          [-82.33570819414301, 36.40678922884183],
          [-82.33604759056259, 36.40678922884183]
        ]],
        "type": "Polygon"
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": { "type": "road", "label": "The Time Bridge" },
      "geometry": {
        "coordinates": [
          [-82.33577133766285, 36.40545520847729],
          [-82.33701201674542, 36.40422211704498],
          [-82.33743208142805, 36.40418046687921],
          [-82.33725168937869, 36.40492455504965],
          [-82.33680070925455, 36.4052512256543],
          [-82.33673306223568, 36.40539641214919],
          [-82.33691345428504, 36.40555974663127],
          [-82.33713894434749, 36.405360115550465],
          [-82.33725168937869, 36.4050334454042],
          [-82.33752227745275, 36.40479751611022],
          [-82.33801835558995, 36.40479751611022],
          [-82.33826639465822, 36.404942703452846],
          [-82.33801835558995, 36.40543270873039],
          [-82.3378605125464, 36.40583197000488],
          [-82.33754482645931, 36.4061223405524],
          [-82.33722914037216, 36.406321969674266],
          [-82.33711639534094, 36.406594190377305],
          [-82.33738698341573, 36.4069571498313],
          [-82.33815364962699, 36.407882688764104]
        ],
        "type": "LineString"
      }
    }
  ]
};

const SurveyorMap = () => {
    // Dynamic Bounds Calculation
    const allCoords = geoData.features.flatMap(f => {
        if (f.geometry.type === 'Point') return [f.geometry.coordinates as number[]];
        if (f.geometry.type === 'LineString') return f.geometry.coordinates as number[][];
        if (f.geometry.type === 'Polygon') return (f.geometry.coordinates as number[][][])[0];
        return [] as number[][];
    }) as number[][];
    
    // Calculate extents
    const minLon = Math.min(...allCoords.map(c => c[0]));
    const maxLon = Math.max(...allCoords.map(c => c[0]));
    const minLat = Math.min(...allCoords.map(c => c[1]));
    const maxLat = Math.max(...allCoords.map(c => c[1]));

    // Aspect Ratio correction (Force 4:3)
    const dataWidth = maxLon - minLon;
    const dataHeight = maxLat - minLat;
    const padding = Math.max(dataWidth, dataHeight) * 0.15; // 15% Padding

    const bounds = {
        minLon: minLon - padding,
        maxLon: maxLon + padding,
        minLat: minLat - padding,
        maxLat: maxLat + padding
    };

    const width = bounds.maxLon - bounds.minLon;
    const height = bounds.maxLat - bounds.minLat;

    const project = ([lon, lat]: number[]) => {
        const x = ((lon - bounds.minLon) / width) * 100;
        const y = 100 - ((lat - bounds.minLat) / height) * 100; // Invert Y
        return `${x},${y}`;
    };

    const projectPath = (coords: number[][]) => {
        return coords.map(c => project(c)).join(' L ');
    };

    return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] bg-[#F9F7F2] rounded-sm overflow-hidden border border-frontier-slate/20 shadow-xl group"
        >
             {/* Paper Texture Effect */}
             <div className="absolute inset-0 opacity-10" style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}></div>
             
             {/* Map Legend / Title Block */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-sm border border-frontier-slate/10 shadow-sm text-right"
             >
                 <div className="text-[10px] font-bold tracking-widest uppercase text-frontier-slate/50 mb-1">Survey Plan</div>
                 <div className="font-serif font-bold text-frontier-slate text-sm">Piney Flats, TN</div>
                 <div className="text-[9px] font-mono text-frontier-slate/70 mt-1">LAT 36.40 | LON -82.33</div>
                 <div className="mt-2 flex items-center justify-end gap-2 text-[9px] text-frontier-slate/60">
                    <span className="w-8 h-px bg-frontier-slate"></span> 1000 FT
                 </div>
             </motion.div>

             {/* Compass Rose */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-6 right-6 opacity-40"
             >
                 <Compass className="w-10 h-10 text-frontier-slate" />
             </motion.div>

             <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 p-2 transform group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out">
                 <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodColor="#5D4037" floodOpacity="0.2"/>
                    </filter>
                    {/* Hatch Pattern for Buildings */}
                    <pattern id="hatch" width="2" height="2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <rect width="1" height="2" transform="translate(0,0)" fill="#7B241C" opacity="0.3"></rect>
                    </pattern>
                 </defs>

                 {/* Render Features */}
                 {geoData.features.map((feature, i) => {
                     // LineStrings (Roads & Boundaries)
                     if (feature.geometry.type === 'LineString') {
                         const pathData = `M ${projectPath(feature.geometry.coordinates as number[][])}`;
                         const type = feature.properties.type;
                         
                         if (type === 'road') {
                             return (
                                 <g key={i}>
                                     {/* Road Casing (Whiteout) */}
                                     <motion.path 
                                         initial={{ pathLength: 0 }}
                                         whileInView={{ pathLength: 1 }}
                                         viewport={{ once: true }}
                                         transition={{ duration: 1.5, delay: 0.2 }}
                                         d={pathData} 
                                         fill="none" 
                                         stroke="#F9F7F2" 
                                         strokeWidth="3.5" 
                                         strokeLinecap="round"
                                     />
                                     {/* Road Line (Gold) */}
                                     <motion.path 
                                         initial={{ pathLength: 0 }}
                                         whileInView={{ pathLength: 1 }}
                                         viewport={{ once: true }}
                                         transition={{ duration: 1.5, delay: 0.2 }}
                                         d={pathData} 
                                         fill="none" 
                                         stroke="#C5A059" 
                                         strokeWidth="1.2" 
                                         strokeDasharray="1.5,1"
                                         strokeLinecap="round"
                                         filter="url(#shadow)"
                                     />
                                 </g>
                             );
                         }

                         if (type === 'boundary') {
                            return (
                                <g key={i}>
                                    <motion.path 
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2 }}
                                        d={pathData} 
                                        fill="none" 
                                        stroke="#2C3E50" 
                                        strokeWidth="0.5" 
                                        strokeDasharray="2,2"
                                        strokeLinecap="round"
                                    />
                                </g>
                            );
                         }

                         // Generic Paths
                         return (
                            <g key={i}>
                                <motion.path 
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    d={pathData} 
                                    fill="none" 
                                    stroke="#5D4037" 
                                    strokeWidth="0.3" 
                                />
                            </g>
                         );
                     }

                     // Buildings (Polygons)
                     if (feature.geometry.type === 'Polygon') {
                         const coords = (feature.geometry.coordinates as number[][][])[0];
                         const pathData = `M ${projectPath(coords)} Z`;
                         const isHeritage = feature.properties.label === "Heritage Center";
                         
                         return (
                             <g key={i}>
                                <motion.path 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    d={pathData} 
                                    fill={isHeritage ? "url(#hatch)" : "#5D4037"} 
                                    fillOpacity={isHeritage ? "1" : "0.3"}
                                    stroke={isHeritage ? "#7B241C" : "#5D4037"}
                                    strokeWidth="0.4"
                                    filter="url(#shadow)"
                                />
                             </g>
                         )
                     }

                     // Points (Markers)
                     if (feature.geometry.type === 'Point') {
                         const [x, y] = project(feature.geometry.coordinates as number[]).split(',').map(Number);
                         const isHighlight = feature.properties.highlight;
                         const label = feature.properties.label;

                         return (
                             <g key={i}>
                                 {/* Label Line */}
                                 {label && (
                                     <motion.g
                                       initial={{ opacity: 0 }}
                                       whileInView={{ opacity: 1 }}
                                       viewport={{ once: true }}
                                       transition={{ delay: 1.2 }}
                                     >
                                        <line x1={x} y1={y} x2={x} y2={y-3} stroke="#2C3E50" strokeWidth="0.2" />
                                        <text x={x} y={y - 4} fill="#2C3E50" fontSize="2.5" fontFamily="serif" textAnchor="middle" fontWeight="bold" className="uppercase tracking-wider">
                                            {label}
                                        </text>
                                     </motion.g>
                                 )}
                                 
                                 {/* Marker */}
                                 <motion.circle 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, delay: 1 }}
                                    cx={x} cy={y} 
                                    r={isHighlight ? "1.2" : "0.8"} 
                                    fill={isHighlight ? "#7B241C" : "#C5A059"} 
                                    stroke="#F9F7F2" 
                                    strokeWidth="0.3" 
                                    filter="url(#shadow)"
                                 />
                             </g>
                         )
                     }
                     return null;
                 })}
             </svg>
        </motion.div>
    );
};

export const CampusSection: React.FC = () => {
  return (
    <section id="campus" className="py-24 bg-frontier-limestone relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#5D4037 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
                 <span className="text-frontier-red font-bold tracking-widest uppercase text-sm">Site Master Plan</span>
                 <h2 className="font-serif text-4xl md:text-5xl font-bold text-frontier-slate mt-2 mb-6">One Campus.<br/>One Perimeter.</h2>
                 <p className="text-lg text-frontier-slate/70 leading-relaxed mb-6">
                    Currently, Hyder Hill Road acts as a scar, slicing the historic core in half and dumping school buses into a high-speed blind curve. It fragments our two greatest assets: the Massengill Farm and the Rocky Mount capital.
                 </p>
                 <p className="text-lg text-frontier-slate/70 leading-relaxed">
                     We don't just close the road; we reclaim the land. The asphalt becomes <strong>"The Time Bridge,"</strong> a pedestrian promenade that safely transitions visitors from the modern world into the 1790s.
                 </p>
            </div>
            <div className="flex justify-start lg:justify-end">
                <div className="bg-white px-8 py-6 rounded-sm border-l-4 border-frontier-gold shadow-sm">
                    <span className="block text-xs uppercase tracking-widest text-frontier-slate/50 font-bold mb-2">Total Acreage Secured</span>
                    <span className="font-serif text-5xl font-bold text-frontier-slate">50+ Acres</span>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: The Schematic */}
            <div className="lg:col-span-8">
                <SurveyorMap />
                <div className="mt-4 flex justify-between items-center text-xs text-frontier-slate/50 font-mono">
                    <span>FIG 2.1: SURVEYOR'S SITE PROJECTION</span>
                    <span className="flex items-center gap-1"><Map className="w-3 h-3" /> PINEY FLATS, TN</span>
                </div>
            </div>

            {/* Right Column: The Strategic Value */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
                
                <div className="group">
                    <div className="flex items-center gap-3 mb-2">
                        <Route className="w-6 h-6 text-frontier-gold" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate group-hover:text-frontier-gold transition-colors">The Time Bridge</h3>
                    </div>
                    <p className="text-sm text-frontier-slate/70 leading-relaxed">
                        Repurposing the roadbed into a pedestrian promenade creates a physical narrative link between the settlement era (1775) and the government era (1790).
                    </p>
                </div>

                <div className="w-full h-px bg-frontier-slate/10"></div>

                <div className="group">
                    <div className="flex items-center gap-3 mb-2">
                        <Lock className="w-6 h-6 text-frontier-slate" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate group-hover:text-blue-900 transition-colors">Secure Perimeter</h3>
                    </div>
                    <p className="text-sm text-frontier-slate/70 leading-relaxed">
                         By eliminating public through-traffic, we create a single, contiguous 50-acre secure zone. One gate, one ticket, one safe journey for students.
                    </p>
                </div>

                <div className="w-full h-px bg-frontier-slate/10"></div>

                <div className="group">
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldAlert className="w-6 h-6 text-frontier-red" />
                        <h3 className="font-serif text-xl font-bold text-frontier-slate group-hover:text-frontier-red transition-colors">Operational Control</h3>
                    </div>
                    <p className="text-sm text-frontier-slate/70 leading-relaxed">
                        The vacated road becomes a controlled maintenance and emergency corridor, removing liability from the city while ensuring rapid access for first responders.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};