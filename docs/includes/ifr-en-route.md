# En Route Charts Overview

* See the FAA document [Aeronautical Chart Users' Guide IFR Enroute Charts](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/aero_guide/) for descriptions of terms and symbols used on IFR enroute charts.
* Updated every 56 days
* IFR low chart is used under 18,000 ft.
* Victor airways - from 1200 AGL up to *but not including FL 180*
* ==T-Routes - like victor airways but for GPS navigation on IFR low charts==
  * ==Can use T-Routes with a suitable GPS==
  * On IFR high charts these are Q-Routes
  * [AIP ENR 3.3 Area Navigation (RNAV) Routes](https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_3.3.html)
  * [AIM Chapter 1 Section 2 Performance-Based Navigation (PBN) and Area Navigation (RNAV)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html)
* **Magnetic Reference Bearing (MRB)**
  * Published magnetic bearing between two waypoints on an RNAV/GPS/GNSS route
  * Used to enhance situational awareness by associating magnetic course with GPS leg to check against compass
* Blue or green airports on IFR chart have instrument approach procedure (IAP) and/or radar minima, where this is related to ASR or PAR (radar) approaches

![Changeover points. [FAA-H-8083-16B Instrument Procedures Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook) [Chapter 2: En Route Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B_Chapter_2.pdf)](/img/iph/iph-figure-2-42-changeover-points.jpg){width=460}

![Minimum Crossing Altitude (MCA). [FAA-H-8083-16B Instrument Procedures Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook) [Chapter 2: En Route Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B_Chapter_2.pdf)](/img/iph/iph-figure-2-62-mca.jpg){width=460}

# IFR Altitudes

* ==**Minimum Enroute Altitude (MEA)**==
  * ==Ensures acceptable nav signal coverage and meets obstacle clearance requirements==
    * ==1,000' in non-mountainous areas, 2,000' in mountainous areas==
  * ==Ensures radio communication==
  * ==Does not guarantee radar coverage==
* ==**Minimum Obstruction Clearance Altitude (MOCA)**==
  * ==Meets obstacle clearance requirements==
  * ==Ensure acceptable navigation signal only within 22 nm of VOR==
  * ==Only published when it is lower than the MEA==
* ==**Minimum Crossing Altitude (MCA)**==
  * ==Lowest altitude at crossing point when going to a higher MEA, indicated on chart by flag with x.==
* ==**Minimum Reception Altitude (MRA)**==
  * ==Lowest altitude at which an intersection can be determined.==
* ==**Maximum Authorized Altitude (MAA)**==
  * ==Maximum altitude that ensures adequate reception of navigation aid signals.==
* **Off-Route Obstruction Clearance Altitude (OROCA)**
  * OROCA is computed just as the Maximum Elevation Figure (MEF) found on Visual Flight Rule (VFR) Charts except that it provides an additional vertical buffer of 1,000 feet in designated non-mountainous areas and a 2,000 foot vertical buffer in designated mountainous areas within the United States.
  * Does not guarantee nav aid or radio reception.
* **Minimum Turning Altitude (MTA)**
  * Minimum turning altitude (MTA) is a charted altitude providing vertical and lateral obstruction clearance based on turn criteria over certain fixes, NAVAIDs, waypoints, and on charted route segments.
* **Minimum Vectoring Altitude (MVA)**
  * This altitude is not published, but something ATC has (and can be requested if you want to know)
  * Lowest altitude a controller can issue a clearance for
  * For example, if would like vectors for a visual approach, this is the lowest altitude they can clear you too, so if it's not below the ceiling won't work for visual approach
  * Provides 1,000 feet of clearance above the highest obstacle in non-mountainous areas and 2,000 feet above the highest obstacle in designated mountainous areas
* **Maximum Elevation Figure (MEF)**
  * On VFR charts.
* **Minimum IFR Altitude (MIA)**
  * In designated mountainous areas, 2,000 feet above the highest obstacle within a horizontal distance of 4 NM from the course to be flown
  * Other than mountainous areas, 1,000 feet above the highest obstacle within a horizontal distance of 4 NM from the course to be flown
  * Or as otherwise authorized by the Administrator or assigned by ATC
  * Mountainous areas are defined in [14 &sect;CFR 95.13 Eastern United States Mountainous Area](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-95/subpart-B/section-95.13) and other parts within [14 &sect;CFR 95 Subpart B Designated Mountainous Areas](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-95/subpart-B?toc=1)
* **Changeover point**
  * When to change from one navaid to another

![IFR chart legend altitude symbols](/img/ifr-chart-legend-altitude-symbols.png){width=240}

![IFR chart legend OROCA symbols](/img/ifr-chart-legend-oroca.png){width=240}

![[AIM Figure 5-6-3](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_6.html#$paragraph5-6-16) Mountainous areas.](/img/aim/aim-figure-5-6-3-mountainous-areas.jpg){width=580}

# Mandatory Reporting Points

* ==Required reports (**MARVELOUS VFR C500**)==
  * ==**M** - Missed approach==
  * ==**A** - Airspeed==
    * +/- 10 kts or 5% of filed TAS (whichever greater)
    * ATC basically wants to know if we are making a deliberate power change
  * ==**R** - Reaching a holding fix==
    * Time and altitude
    * Crossing the holding fix outbound as part of our entry procedure
  * ==**V** - VFR on-top altitude changes==
  * ==**E** - ETA change==
    * Of more than +/- 2 minutes
    * *In non-radar environment*
  * ==**L** - Leaving a holding fix==
  * ==**O** - Outer marker inbound==
    * *In non-radar environment*
    * Outer marker indicates final approach fix for non-precision approach
  * ==**U** - Unforecast weather==
    * Especially icing, turbulence, wind
  * ==**S** - Safety of flight==
  * ==**V** - Vacating an altitude or flight level==
  * ==**F** - FAF inbound==
    * *In non-radar environment*
  * ==**R** - Radio or navigation failure==
    * [AIM 5-3-3 a.1 (h)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-3)
    * Report loss of any equipment which may impair safety and/or ability to operate under IFR
  * ==**C** - Compulsory reporting points==
    * *In non-radar environment*
  * ==**500** - Failure to maintain at least 500 FPM climb or descent==

# Waypoints

* This is applicable to other portions of IFR flight too, e.g. departure, arrival, and approach
* Flyover vs. flyby waypoints

![Flyover vs. flyby waypoints. [FAA-H-8083-16B Instrument Procedures Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook) [Chapter 2: En Route Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B_Chapter_2.pdf)](/img/iph/iph-figure-2-53-flyover-vs-flyby-waypoints.jpg){width=340}
