# VOR

## Overview

::: warning VOR
Very High Frequency (VHF) Omni-directional Range (VOR) is a type of radio based navigation system that allows aircraft to determine their position relative to a ground based antenna.
:::

* [AIM 1-1-3 VHF Omni-directional Range (VOR)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-3)
* VOR is a ground-based station which broadcasts signals that a plane can receive that indicates a *radial* that is the *magnetic bearing* to the station.
* VOR frequencies are standardized in the very high frequency (VHF) band between 108.00 and 117.95 MHz.
* The Omnibearing Selector (OBS) (also referred to as the course selector) is a dial that can be rotated to select a desired course.
* Inside the cockpit, the frequency corresponding to a particular VOR is input and the VOR indicator displays information about where the aircraft is relative to that VOR.
* Radials are projected outward *from* the station.
  * However, any radial can be picked up regardless of where the aircraft is relative to the VOR.
  * For example, if we are south of the Casanova VOR, we can pick up the 360&#176; radial that is projected northward from the station.
* The information provided by a VOR alone is independent of the heading of the aircraft.
* In addition to the *radial* information, we also get information as to whether the selected course will take us *to* or *from* the station.
  * So in the example above about being south of Casanova VOR, if we dialed the 180&#176; radial we would see a `FROM` indication, but if we dialed in the 360&#176; radial we would see `TO`.
  * Remember this information is irrespective of the aircraft's heading.

![VOR ground station. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 9: Navigation Systems Figure 9-11.](/img/ifh/ifh-figure-9-11-vor-ground-station.png){width=500}

![DCA VOR/DME from Gravelly Point. [Gravelly Point Wikipedia](https://upload.wikimedia.org/wikipedia/commons/0/08/MountVernonTrail_GravellyPoint.jpg)](/img/gravelly-point-dca-vor.jpg){width=700}

![VHF line of sight. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 16: Navigation](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/18_phak_ch16.pdf) Figure 16-28.](/img/phak/phak-figure-16-28-vhf-line-of-sight.jpg){width=400}

## VOR Symbols on Charts

* There are several different types of VOR facilities, each of which slightly different capabilities.
* These facilities are described more in detail below.
* For now, note each different type of VOR facility is charted slightly differently on aeronautical charts.
* The screenshots below are from VFR sectionals, but the same symbols are used on IFR charts.
* The most common type of VOR facility is the VORTAC, then the VOR/DME, with VOR being fairly uncommon.

![VFR sectional legend: radio aids to navigation.](/img/section-legend-vors.jpg){width=500}

![Casanova VORTAC on sectional chart.](/img/casanova-vor-sectional.jpg){width=700}

![Frankston VOR/DME on sectional chart.](/img/vfr-sectional/vfr-sectional-fzt-vor-dme.jpg){width=700}

![Otto VOR on sectional chart.](/img/vfr-sectional/vfr-sectional-oto-vor.jpg){width=700}

![Sulphur Springs DME on sectional chart.](/img/vfr-sectional/vfr-sectional-slr-dme.jpg){width=700}

![A NAVAID located on an airport may not always be charted with its typical symbol. [Aeronautical Chart User Guide Complete](https://aeronav.faa.gov/user_guide/cug-complete_20250220.pdf).](/img/chart-users-guide-navaid-on-airport.png){width=800}

## VOR Indicator

![VOR Indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 16: Navigation](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/18_phak_ch16.pdf) Figure 16-29.](/img/phak/phak-figure-16-29-vor-indicator.jpg){width=400}

* The VOR indicator also provides information with the Course Deviation Indicator (CDI)
  * This gives the pilot information as to how far off course they are when they have selected a radial by way of a needle that deflects left or right from center
  * ==Full-scale deflection on VOR is a deviation of 10 to 12 degrees.==
  * ==Each 1 nm from the VOR, two adjacent radials are 100 ft further apart==
  * ==So 60 nm from the VOR two adjacent radials would be 6000 ft apart or about 1 nm==
  * Or if 30 nm from station and 2 degree deflection on needle, are 6000 ft off course, or about 1 nm off course.
* Make sure the selected VOR is correct and functional before using
  * Check the morse code audio
  * Ensure the avionics displays the VOR identifier
* VOR is line-of-sight transmission

## Voice Capabilities

* VORW is a VOR *without voice*
* VORW are denoted on charts by underlining the VOR frequency

![VFR sectional legend: communication boxes.](/img/vfr-sectional-communication-boxes.jpg){width=600}

![Chart supplement for KDAL. Note the Cowboy VOR (CVE) is listed as a VORW.](/img/chart-supplement-kdal-vorw.png){width=700}

## Legacy Service Volumes

* Three classes of legacy VOR / VORTAC that define service volume:
    1. T (Terminal)
    2. L (Low altitude)
    3. H (High altitude)

> 1-1-8. NAVAID SERVICE VOLUMES  
> a. Most air navigation radio aids which provide positive course guidance have a designated standard service volume (SSV).

* To find the service volume class of a given VOR
  * Can find the service volume in the [Chart Supplement](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/).
    * For example see `BOSTON (H) VOR/DME` indicating it is a high class `(H)`
  * See also: [Aviation StackExchange How do you know if a VOR is High, Low, or Terminal?](https://aviation.stackexchange.com/questions/26030/how-do-you-know-if-a-vor-is-high-low-or-terminal)
  * Can also check low and high altitude IFR charts to see which appear on each.
    * Here it is implicit, but Low Class `(L)` VORs will not appear on the IFR High Chart as their service volume tops out at 18,000 ft. AGL, and IFR charts are for use at or above 18,000 ft. MSL.
    * Note the difference between AGL and MSL. I don't know at what altitude the IFR high charts top out at, but there are Maximum Authorized Altitudes (MAA) so conceivably a Low Class `(L)` VOR located at 10,000 ft. MSL, for example, would provide 40 nm radius of service up to 28,000 ft. MSL and be used on a high chart.
    * In any case, following what is on the IFR charts for VOR navigation ensures a pilot need not worry too much about the various service volumes.

![Legacy VOR service volumes. [FAA-CT-8080-3F Airman Knowledge Testing Supplement for Instrument Rating](https://www.faa.gov/sites/faa.gov/files/training_testing/testing/supplements/instrument_rating_akts.pdf)](/img/faa-ct-8080-3f-legend-37-vor-service-volumes.jpg){width=540}

![KBED chart supplement page showing LWM low class VOR/DME and BOS high class VOR/DME.](/img/chart_supplement_vor_ssv.png){width=540}

![[AIM Figure 1-1-1](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html) standard high altitude service volume.](/img/vor_high_volume.jpg){width=340}

![[AIM Figure 1-1-2](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html) standard low altitude service volume.](/img/vor_low_volume.jpg){width=340}

![[AIM Figure 1-1-3](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html) standard terminal service volume.](/img/vor_terminal_volume.png){width=340}

![ASA Instrument Test Prep Figure 4-1 VOR service volumes](/img/asa-2022-instrument-test-prep-figure-4-1-vor-ssv.png){width=800}

![Different edition [AIM Figure 1-1-1](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html) all VOR service volumes.](/img/new-aim-figure-1-1-1-all-vor-service-volumes.jpg){width=600}

## New Service Volumes

* Insert picture here

## TACAN, VORTAC, and VOR/DME

* VOR is present in three different navigational aids
  * **VOR**
    * This is the fundamental capability described above
  * **VOR/DME**
    * When distance measuring equipment (DME) is installed with the VOR, tuning the VOR VHF frequency automatically selects the corresponding UHF DME frequency
    * DME is affected by slant-range errors, worse when closer to station and higher altitudes
    * [AIM 1-1-7 Distance Measuring Equipment (DME)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-7)
  * **VORTAC**
    * Combination of VOR and TACAN, where TACAN is military equipment, but provides DME to civilian users
    * Provides three pieces of information
      * VHF azimuth information
      * UHF TACAN azimuth information (like azimuth provided by VOR but for military only)
      * UHF TACAN distance information (can be used by non-military)
    * If VORTAC undergoing maintenance will not hear the morse code identifier
    * DME and VOR morse codes are transmitted seperately (even though they are the same identifier)
      * DME identifier is transmitted once for each 3-4 times the VOR identifier is transmitted
      * So depending on what is heard when listening for the identifier you can tell whether the DME is out or the VOR or both
    * DME is affected by slant-range errors, worse when closer to station
    * TACAN technology is very different from civilian DME, but the pilot's interaction with each is the same
    * [AIM 1-1-5 Tactical Air Navigation (TACAN)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-5)
    * [AIM 1-1-6 VHF Omni-directional Range/Tactical Air Navigation (VORTAC)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-6)
* VHF radio band is 30 to 300 MHz

![Montebello VOR/DME on sectional chart.](/img/montebello-vor-dme.jpg){width=700}

![DCA VOR/DME from chart supplement.](/img/dca-vor-dme-chart-supplement.jpg){width=400}

## VOR MON

* As VORs are gradually being phased out in favor of GPS, a limited network of VORs will be kept which will make up the VOR MON network, and enable some level of navigation using this system in the event that GPS is unavailable.
* Certain airports are also designated MON airports.
* According to the [Aeronautical Chart User Guide Complete](https://aeronav.faa.gov/user_guide/cug-complete_20250220.pdf):

    > MON Airports with the Airport designator at the top of the Airport Data Block. The MON designation is to alert pilots to those airports that have retained ILS and VOR instrument approach procedures for safe recovery in the event of a GPS outage. Refer to the Aeronautical Information Manual (AIM) for expanded MON Airport guidance.

![Ardmore Municipal airport is designated a MON airport on the IFR low sectional.](/img/ifr-low-chart-adm-mon-airport.jpg){width=700}
