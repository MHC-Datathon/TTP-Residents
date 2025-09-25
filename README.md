# 🚍 NYC Bus Lane Enforcement & Community Needs

## 📖 Overview
This project explores the question:  
**“How does the distribution of bus lane enforcement (ACE + ABLE) align with bus service quality and community needs across NYC?”**

Bus lanes are designed to keep buses moving quickly and reliably, but persistent lane blockages reduce their effectiveness. Through data analysis and visualization, we investigate whether automated bus lane enforcement is applied fairly and effectively across different communities in New York City.

---

## 🗂️ Data Sources Links
We used multiple open datasets to examine enforcement, service quality, and neighborhood needs:

  [NYC Open Data – MTA Bus Automated Camera Enforced Routes](https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforced-Routes-Beginning/ki2b-sg5y)  

  [MTA Bus Customer Journey-Focused Metrics: Beginning 2025](https://data.ny.gov/Transportation/MTA-Bus-Customer-Journey-Focused-Metrics-Beginning/k5f7-e4wr/about_data)

  [MTA Subway Origin-Destination Ridership Estimate: 2024](https://data.ny.gov/Transportation/MTA-Subway-Origin-Destination-Ridership-Estimate-2/jsu2-fbtj/about_data)

  [MTA Bus Hourly Ridership: 2020-2024](https://data.ny.gov/Transportation/MTA-Bus-Hourly-Ridership-2020-2024/kv7t-n8in/about_data)
  
  [MTA Bus Automated Camera Enforcement Violations: Beginning October 2019](https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforcement-Violations-Be/kh8p-hcbm/about_data)


- **Community Needs Data:**  
  Census and NYC Planning data used as proxies for community transit needs, including income levels and car ownership rates.
 

---

## 🔍 Methodology
1. **Data Preparation:**  
   - Loaded bus lane enforcement data (ACE/ABLE).  
   - Mapped NYC bus data using GeoJSON.  
   - Incorporated community-level demographic indicators.

2. **Visualization:**  
   - Used **Kepler.gl** to build interactive maps showing enforcement cameras, violations, bus routes, and community overlays.  
   - Created layers to visualize hotspots, ridership demand, and enforcement intensity.  

3. **Case Study Analysis:**  
   - Examined specific corridors (e.g., **Fulton Street, Brooklyn**) where violations clustered near major bus stops.  
   - Compared enforcement coverage with community reliance on buses.  
   - Identified mismatches between enforcement and service needs.

---

## 📊 Key Findings
- **Persistent Hotspots:** On Fulton Street, heavy violation clustering was observed at major bus stops. Despite cameras, violations remained frequent, suggesting enforcement has not fully addressed congestion.  
- **Borough Disparities:** Manhattan corridors tend to have denser enforcement, while high-ridership corridors in the Bronx, Brooklyn, and Queens remain underserved.  
- **Community Impact:** Enforcement does not always match neighborhoods with high transit reliance (low car ownership, lower incomes).  

---

## 💻 Tech Stack
- **Frontend:** React.js (with components for each case study and findings)  
- **Data Visualization:** Kepler.gl (embedded maps)  
- **Styling:** CSS for consistent layout and readability  
- **Data Processing:** CSV/JSON preparation from NYC Open Data  

---

## 👥 Team Members
Bilal Burton
Jocsan Rodriguez
Alex Nurci
Mohammed Shaikh

---

## 📌 Conclusion
Automated enforcement has captured hundreds of thousands of violations across NYC and has improved speeds on some corridors. However, our analysis shows that enforcement resources are not always aligned with bus service quality or community needs. High-demand, transit-dependent neighborhoods still experience unreliable service, demonstrating that enforcement alone is insufficient to guarantee equity in bus service.
