# Cross Country Planning

This page covers *Task B. Cross Country Flight Planning* from the [FAA-S-8081-9E Flight Instructor Instrument Practical Test Standards](https://www.faa.gov/training_testing/testing/acs/cfi_instrument_pts_9.pdf).

## Airspace Regulatory Requirements

* Transponders requirements
  * Used in general aviation are mode A
  * If it can do altitude encoding it has mode C capability
  * Must have transponder with mode C in
    * Class A, B, and C airspace
    * Above 10,000 MSL, except when 2,500 AGL.
      * See: [14 CFR &sect;91.215(b)(5)(i)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.215)
    * Within 30 nm of class B primary airports (in and above the mode-C veil)
  * Mode S transponder sends/receives some extra data

![VFR airspace entry requirements. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 15: Airspace](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/17_phak_ch15.pdf) Figure 15-9.](/img/vfr-entry-requirements.png)

## Computation of Time Enroute and Fuel Requirements

* First need to select a route from departure to destination
  * What will ATC assign?
  * What makes the most sense?
  * What gives you largest fuel reserve?
  * How's the weather?
  * What is your airplane capable of?
    * Performance
    * Navigation
    * Emergencies
  * Also look at
    * Departure procedures
    * Preferred routes
      * Listed in chart supplement
    * TEC routes
      * Agreement between [Terminal Radar Approach Control Facilities (TRACON)](https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/air_traffic_services/tracon) e.g. Potomac Approach
      * No need to talk to [Air Route Traffic Control Centers (ARTCC)](https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/air_traffic_services/artcc) e.g. Washington Center
      * Listed in chart supplement
      * Listed for terminal areas and satellite airports
    * Arrivals
    * Approaches
    * Alternates
* **Fuel Requirements**
  * Be able to fly to first airport of intended landing, then to alternate, and still have 45 min reserve at normal cruise. [14 CFR &sect;91.167 - Fuel requirements for flight in IFR conditions](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRef6e8c57f580cfd/section-91.167)
* Planning from True Course to Compass Heading
  * TC - WCA -> TH
  * TH - Variation -> MH
  * MH - Deviation -> CH (Compass Heading)

### Determining an Alternate

<!--@include: ./docs/src/includes/ifr-alternates.md-->

[Aeronautical Chart Users' Guide Terminal Procedure Publications](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/aero_guide/)

**Fuel Requirements** - be able to fly to first airport of intended landing, then to alternate, and still have 45 min reserve at normal cruise. [14 CFR &sect;91.167 - Fuel requirements for flight in IFR conditions](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRef6e8c57f580cfd/section-91.167)

![Digital Terminal Procedures: approach with non-standard alternate minimums, as indicated by the `A` in the triangle within the first box of the middle briefing strip notes box.](/img/tpp/dtpp-vji-rnav-24.png){width=600}

![Digital Terminal Procedures: alternate minimums. For example, the LOC Rwy 15 approach is not available when the tower is closed, and when it is open, the minimums are 900-2 instead of the 800-2 standard minimums.](/img/tpp/dtpp-alternate-minimums.png){width=600}

## Selection and Interpretation of Charts and Procedures

* See the FAA document [Aeronautical Chart Users' Guide IFR Enroute Charts](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/aero_guide/) for descriptions of terms and symbols used on IFR enroute charts.
* IFR low chart is used under 18,000 ft.
* Victor airways - from 1200 AGL up to but not including FL 180
* T-Routes - like victor airways but for GPS navigation on IFR low charts
  * On IFR high charts these are Q-Routes
* Blue or green airports on IFR chart have instrument approach procedure (IAP) and/or radar minima, where this is related to ASR or PAR (radar) approaches

## Procurement and Interpretation of NOTAMS

* Two types
  * FDC (Flight Data Center)
    * Regulatory changes, approach procedures, aeronautical charts
  * GPS
    * ==GPS NOTAMs **must** be checked before using a GPS under IFR==
  * D
    * Airport and airport facility changes
    * Examples: temporary outages, runway closures
* NOTAMs with short effective period will be received with weather briefing
* If NOTAM will remain in effect for at least 7 days they will be published in the Notices to Airmen publication
  * This publication has been discontinued
* Can obtain NOTAMs from
  * Foreflight
  * Online
    * FAA
    * 1800wxbrief.com
  * 1-800-WXBRIEF Briefing (see: [https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/systemops/fs/alaskan/alaska/fai/pfpwb/](https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/systemops/fs/alaskan/alaska/fai/pfpwb/))
  * *Q: I assume Foreflight gives all NOTAMs with briefing, not just short term NOTAMs?*

## Completes and Files IFR Flight Plan

<!--@include: ./docs/src/includes/preflight-information.md-->

* File flight plan to IAF
  * Use time to IAF
  * Altitude is initial cruising altitude
  * *I think this is different than what was in the FAA written?*
* For aircraft equipment suffixes also see
  * [7110.65 2-3-8 Aircraft Equipment Suffix](https://www.faa.gov/air_traffic/publications/atpubs/atc_html/chap2_section_3.html)
  * [AIM Appendix 4. FAA Form 7233−4 International Flight Plan](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/appendix_4.html#ubFHX14cShaw)

![Old [AIM Table 5-1-3 Aircraft Equipment Suffixes](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html)](/img/aim/aim-table-5-1-3-aircraft-equipment-suffixes.png){width=600}

* Flight plan uses true airspeed when filing
* VFR flight plans are held for 1 hour after proposed departure time
* Have 30 minutes to close VFR flight plan after ETA
* If no runway gradient information is specified in the [Chart Supplement](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/) (formerly called airport facility directory or AF/D) then by definition it is less than 0.3 percent

## Demonstrates Knowledge of GPS and RAIM

<!--@include: ./docs/src/includes/satellite-based-navigation.md | shift:2-->

## Recognizes Airframe Icing {#recognizes-airframe-icing}

* For ice to form need
  * Visible moisture
  * Surface temperatures freezing or below
    * Often occurs when outside temperatures are between -20 and 5 &#176;C
* Typically forms on wing and propellor
* **Clear ice**
  * ==Most dangerous==
  * ==Happens when flying through rain==
  * Most rapid ice formation
  * Typically forms in cumuliform clouds
* **Rime ice**
  * ==Happens when flying through clouds==
* **Mixed ice**
  * ==Has the properties of both clear and rime icing==
  * Large and small supercooled droplets coexist
  * Appearance is whitish, irregular and rough
* **Frost**
  * Aircraft surface temperature and dew point both below freezing
* **Freezing rain**
  * Rain falling from warmer air into air that is colder than freezing
  * Ice pellets indicates there is freezing rain above

![Clear ice. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 4: Aerodynamic Factors Figure 4-17.](/img/ifh/ifh-figure-4-17-clear-ice.jpg){width=380}

![Rime ice. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 4: Aerodynamic Factors Figure 4-19.](/img/ifh/ifh-figure-4-19-rime-ice.jpg){width=380}

## Understands Adverse Effects of Airframe Icing

* Disturbed airflow over wings and other surfaces
* More drag
* Less lift
* Reduces stall angle-of-attack
* Adds weight

## Demonstrates Familiarity with Icing Procedures

* **Wings**
  * Boots
    * Use as soon as icing is observed
  * Heated leading edge
    * Also called "hot wing"
    * Uses hot bleed air from turbine compressor, for example
  * Weeping wing
    * Deicing fluid (e.g. TKS fluid, like antifreeze) comes out of small holes in leading edge
    * TKS (Tecalemit-Kilfrost-Sheepbridge Stokes) was the name of a British aerospace company during WWII that developed the original weeping wing technology
* **Prop**
  * Heated
  * Deicing fluid
* **Windscreen**
  * Alcohol
  * Hot air defrost
  * Electric (like rear window of car)
  * Icing fluid from prop in single engine also sprays back on windscreen
* ==When encountering icing==
  * ==Exit area of icing==
  * ==Generally climb==
    * ==To find temps colder than -20 &#176;C==
    * ==Being higher gives more options==
    * Alternatively descend to find temperatures warmer than 5 &#176;C
  * ==Gentle maneuvers==
    * Avoid increasing load factor too much
  * ==Fly faster==
  * ==Avoid configuration change==
    * No flaps to avoid tailplane stall

![Deicing boots. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-48.](/img/phak/phak-figure-7-48-deicing-boots.jpg){width=380}

![Weeping wing. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-49.](/img/phak/phak-figure-7-49-deicing-weeping-wing.jpg){width=380}

## References

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 4: Aerodynamic Factors
* [FAA-AC-91-74B Pilot Guide: Flight In Icing Conditions](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1028388)
* [FAA-AC-20-73A Aircraft Ice Protection](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/22031)
