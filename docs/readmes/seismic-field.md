# SEISMIC FIELD — Real-Time Observatory (v0.2)

A state-of-the-art, real-time earthquake observatory visualizing official event telemetry from **BMKG** (Badan Meteorologi, Klimatologi, dan Geofisika), integrated with an interactive **MapLibre GL Locator Map**, an **Interactive GLSL Seismic Fragment Shader**, and a dynamic **Earth Crust Hypocenter Depth Visualizer**.

```
                           OBSERVATORY ARCHITECTURE
                                       │
                ┌──────────────────────┼──────────────────────┐
                ↓                      ↓                      ↓
          LIVE TELEMETRY        PHYSICS & GEOLOGY       INTERACTIVE UI
                │                      │                      │
         BMKG 3-Feeds Ingestion   Fukushima–Tanaka       MapLibre GL Map
         TTL 60s Cache           Wald (1999) PGA->MMI   GLSL WebGL Shader
         Location Normalization  Lithosphere Attenuation Depth Cross-Section
         Recent M5+ & Felt List  Compound Energy Decay  News Syndication
                │                      │                      │
                └──────────────────────┼──────────────────────┘
                                       ↓
                          UNIFIED DASHBOARD RUNTIME
                                       ↓
               Epistemic Honesty • Real-Time GPU Rendering • High Accuracy
```

---

## 🌟 Key Features & Capabilities

### 1. 📡 Live BMKG Telemetry Ingestion Pipeline
- **3 Concurrent Data Feeds**: Continuously ingests `autogempa.json` (latest event), `gempaterkini.json` (15 significant events $M \ge 5.0$), and `gempadirasakan.json` (15 felt earthquakes with MMI report).
- **Location Normalization Pipeline**: Converts raw BMKG strings into clean Title Case, standardizes regional acronyms (`NTT`, `SULTENG`, `JABAR`, `DKI`, etc.), fixes glued compass directions (*"Timur Laut"*, *"Barat Daya"*), and trims redundant prefixes.
- **Unified 4-Tier Magnitude Palette**:
  - `Minor (< 4.0)`: Emerald Green (`#10b981`)
  - `Ringan (4.0 – 4.9)`: Cyan (`#06b6d4`)
  - `Sedang (5.0 – 5.9)`: Amber Yellow (`#f59e0b`)
  - `Kuat (≥ 6.0)`: Rose Red (`#f43f5e`)
- **Depth Classification**:
  - `Dangkal (≤ 60 km)`: Upper lithospheric crust.
  - `Menengah (61 – 300 km)`: Subduction slab lithosphere.
  - `Dalam (> 300 km)`: Deep mantle / asthenosphere.
- **Logarithmic Energy Indicator**: Explains magnitude physics (+1.0 magnitude releases $\approx 31.62\times$ more energy).

---

### 2. 🗺️ MapLibre GL Epicenter & Felt Radius Zone Map
- **High-Resolution Topography**: Powered by CARTO Retina Voyager basemap with crisp geographic clarity.
- **True MMI Felt Radius Zone Polygons**: Calculates geographic shaking envelopes using the *Fukushima–Tanaka (1990)* attenuation model and renders dynamic GeoJSON rings on MapLibre.
- **Atomic GeoJSON Updates**: Uses single-source `source.setData()` for seamless, real-time polygon synchronization between selected earthquakes.
- **Interactive Multi-Event Markers**: Displays clickable background pins for all recent earthquakes in the active feed with smooth camera `flyTo` transitions.
- **Centered Radar Ping Pulse**: Concentric CSS radar wavefronts expanding symmetrically from the epicenter beacon.

---

### 3. 🌋 Earth Crust Hypocenter Depth Cross-Section Visualizer
- **Vertical Geological Strata Diagram**:
  - **Kerak Bumi (0 – 60 km - Dangkal)**: High-resolution upper crust layer.
  - **Mantel Atas (61 – 300 km - Menengah)**: Intermediate lithospheric subduction zone.
  - **Mantel Dalam (> 300 km – 700 km - Dalam)**: Deep Earth mantle layer.
- **Flexible Dynamic Left Depth Ruler**: Real-time sliding depth badge and guide line that smoothly animates to the exact earthquake depth ($km$).
- **Compound Seismological Attenuation Model**:
  $$\log_{10}(\text{PGA}) = 0.41 M - \log_{10}(R + 0.032 \times 10^{0.41 M}) - 0.0034 R + 1.30$$
  - Eliminates visual contradictions by evaluating **both Magnitude ($M$) and Depth ($R$)** together:
    - *Example (M 3.0, 4 km)*: Accurately classified as *Getaran Lemah / Minor* (Emerald Green) because low source energy produces mild shaking despite shallow depth.
    - *Example (M 5.8, 10 km)*: Classified as *Guncangan Kuat* (Amber) due to high source energy combined with short vertical travel path.
    - *Example (M 5.1, 491 km)*: Classified as *Teredam Signifikan / Aman* (Indigo/Cyan) due to massive mantle rock dissipation ($>95\%$).
- **Dynamic Seismological Impact Narrative**: Automatically synthesizes location-specific, physical explanations for each individual earthquake.
- **Interactive 3-Tier Depth Simulator**: Quick-switch buttons (*Dangkal 10 km*, *Menengah 120 km*, *Dalam 580 km*) with auto-reset when changing active feed items.

---

### 4. 🌊 Interactive GLSL Seismic Wavefield Shader
- **GPU-Accelerated Background Canvas**: Custom fragment shader generating dynamic seismic shockwave ripples based on active earthquake magnitude.
- **Uniform Inputs**:
  - `u_intensity`: Normalized visual energy scaled from active magnitude ($M$).
  - `u_time`: Elapsed clock for continuous fluid wave propagation.
  - `u_resolution`: Dynamic viewport pixel dimensions.
  - `u_mouse`: Interactive pointer turbulence reacting to user cursor movement.
- **Wavefield Energy Monitor**: Live intensity percentage meter with explanatory tooltip.

---

### 5. 📰 Real-Time Earthquake News Syndication
- **Verified Media Ingestion**: Curated press feed aggregating verified reports from national media outlets (*BMKG Siaran Pers*, *Antara News*, *Kompas*, *Detik*, *CNN Indonesia*, *Tempo*).
- **Interactive Keyword Search & Filter**: Real-time client-side search across locations, media sources, and topics.
- **Direct Source Links**: Clickable cards linking directly to full verified articles.

---

### 6. 🛡️ Performance, Accessibility & Reliability
- **Strict BMKG Rate-Limit Compliance**: 60-second in-memory server cache adhering strictly to BMKG's 60 req/min/IP guideline.
- **Tab Visibility Auto-Pause**: Automatically halts WebGL `requestAnimationFrame` render loops when the browser tab is hidden (`document.visibilitychange`) to conserve battery and GPU resources.
- **`prefers-reduced-motion` Support**: Disables heavy animations and renders a clean static gradient for users with motion sensitivity.
- **Resilient Fallback Telemetry**: Automatic fallback mode serving verified baseline telemetry if BMKG live endpoints experience upstream connectivity issues.

---

## 🛠️ Architecture & Data Pipeline

```
BMKG TEWS 3-Feeds (autogempa.json, gempaterkini.json, gempadirasakan.json)
                               │
                               ↓
                   Next.js Server API Route
             (/api/earthquakes with 60s Cache TTL)
                               │
                               ↓
         normalizeEarthquake() & formatLocation() Pipeline
                               │
                               ↓
                 Domain Model: EarthquakeFeed
             (latest, recentM5, recentFelt, news)
                               │
       ┌───────────────────────┼───────────────────────┐
       ↓                       ↓                       ↓
EarthquakeHero &        EpicenterMap            DepthVisualizer
Active Event Telemetry  (MapLibre GL + Zones)   (Crust Cross-Section + PGA)
       │                       │                       │
       └───────────────────────┼───────────────────────┘
                               ↓
                    Seismic GLSL Wavefield
             (u_time, u_res, u_mouse, u_intensity)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm, pnpm, or yarn

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/AhmadBayu1412/seismic-field.git
cd seismic-field

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live observatory.

---

## 📐 Seismological References & Models

- **Attenuation Model**: Fukushima, Y., & Tanaka, T. (1990). *A new attenuation relation for peak ground acceleration of strong earthquake ground motion in Japan*. Bulletin of the Seismological Society of America, 80(4), 757-783.
- **PGA to MMI Conversion**: Wald, D. J., Quitoriano, V., Heaton, T. H., & Kanamori, H. (1999). *Relationships between peak ground acceleration, peak ground velocity, and modified Mercalli intensity in California*. Earthquake Spectra, 15(3), 557-564.
- **Telemetry Data Provider**: BMKG Open Data (Badan Meteorologi, Klimatologi, dan Geofisika Indonesia - TEWS).

---

## 📜 Documentation

- [MVP Architecture, Memory & Invariants](file:///c:/Users/ThinkPad/Desktop/seismic-field/docs/mvp.md)
- [Architectural Decision Records (ADRs)](file:///c:/Users/ThinkPad/Desktop/seismic-field/docs/decisions.md)
- [GLSL Seismic Shader Guide](file:///c:/Users/ThinkPad/Desktop/seismic-field/docs/shader-guide.md)
