# Satellite Based Navigation

::: warning Global Navigation Satellite System (GNSS)
The generic term for satellite based navigation systems used around the world.
:::

* As the title implies, satellite based navigation uses signals from satellites to determine location.
* These satellites are placed in a medium-Earth orbit.
* There are four constellations of such satellites operated by various bodies around the world:
  * GPS - United States
  * GLONASS - Russia
  * Galileo - EU
  * BeiDou (BDS) - China

::: warning Global Positioning System (GPS)
The particular GNSS system used in the United States.
:::

* Given GPS is the system used in the United States, this document will refer to GPS, but much of what applies to GPS applies to the other GNSS systems as well.

## A History of Area Navigation (RNAV)

::: warning [Area Navigation (RNAV)](https://www.ecfr.gov/current/title-14/part-1#p-1.1(Area%20navigation%20(RNAV)))
A method of navigation that permits aircraft operations on any desired flight path.
:::

* GPS systems provide a capability called Area Navigation (RNAV) which, unlike using a traditional VOR receiver which only allows flying toward or away from the ground station, allows the navigation between arbitrary points.
* As GPS is overwhelmingly the means by which modern RNAV is possible these terms are often conflated.
* It is important to remember that they are distinct concepts, and while GPS can provide RNAV capability, RNAV systems did exist prior to GPS.
* Methods of area navigation that predate GPS include
  * Visual reference (e.g. stars)
  * Inertial Navigation Systems (INS)
  * LORAN C
    * See [FAA-AC-90-92](https://www.faa.gov/documentLibrary/media/Advisory_Circular/90-92.pdf)
  * VOR/DME
  * DME/DME
* See [FIU RNAV](https://web.eng.fiu.edu/allstar/RNAV.htm)
* Some such VOR based RNAV recievers include
  * The Bendix/King KNS 80 Digital Area Navigation System is an RNAV receiver based on VOR
  * Narco NS-800
  * King KN-74 
* They enabled flight between waypoints that were *defined by VORs*, but without having to fly *along the radials* of VORs
* [FAA-AC-90-45A Approval of Area Navigation Systems for use in the US National Airspace System](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-45A.pdf) from 1975 describes guidelines for RNAV systems, well before the existence of GPS

![Pilot’s Guide KNS 80 Bendix/King VOR/LOC/GS/DME/RNAV Integrated NAV System page 6.](/img/kns80-pilots-guide-page-6.jpg){width=500}

![Narco NS-900 Pilots Guide. RNV Mode.](/img/narco-ns-800-page-23-rnv-mode.png){width=500}

![KGGP VOR/DME RNAV RWY 27. RNAV based on VOR/DME in this case enables the instrument approach procedure to be flown with no GPS required.](/img/iap/kggp-vor-dme-rnav-rwy-27.png){width=500}

![KTTN COPTER LORAN RNAV RWY 16. This is an experimental COPTER approach based on LORAN.](/img/iap/kttn-copter-loran-c-rnav-rwy-16.png){width=500}

* With a little bit of background on legacy RNAV systems, we can now focus on GPS.

## GPS Satellites

* The GPS constellation currently consists of 31 operational satellites
* GPS is designed so that as long as 24 GPS satellites are working, at least 5 should be visible at any time
  * [AIM 1-1-17(a)(1)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)
* [AIM 1-1-17(a)(3)(a)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)
  * Need 4 satellites to have GPS
    * This gives latitude, longitude, altitude, and time
  * Need 5 satellites for RAIM
    * More on RAIM below
  * Need 6 satellites to remove corrupt GPS signal

## GPS Receiver

* A typical GPS receiver has at least 12 channels

![Garmin GNS430W GPS Specs.](/img/gns430w-gps-specs.png){width=300}

![Garmin G1000 (GIA63) TSO-129 (non-WAAS) system GPS specifications. Garmin G1000 Pilot’s Guide for Cessna Nav III (190-00498-00 Rev. A)](/img/g1000-gia63-gps-specs.png){width=300}

## GPS Database

* GPS databases are updated every 28 days
  * Usually every 4th Thursday of the month
  * Pilots can update GPS database if they can do it from instrument panel without special tools or disassembly of the unit
  * Take the SD card out and update it

## Performance Based Navigation (PBN)

::: warning [Performance Based Navigation](https://www.faa.gov/about/office_org/headquarters_offices/avs/offices/afx/afs/afs400/afs410/pbn)
Performance Based Navigation (PBN) is comprised of Area Navigation (RNAV) and Required Navigation Performance (RNP) and describes an aircraft's capability to navigate using performance standards.
:::

* [AIM 1-2-1](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-1) says:

  > PBN exists under the umbrella of area navigation (RNAV). The term RNAV in this context, as in procedure titles, just means “area navigation,” regardless of the equipment capability of the aircraft.

* This can be confusing given the difference between RNAV as a _concept_ (area navigation) and RNAV as a navigation _specification_ similar to RNP.
* PBN defines a set of _standards_ and doesn't depend on a particular technology.
* Therefore, procedures can be defined that depend on these standards and can be used without being changed as new technology is developed.
* RTCA DO-229 defines these standards.
* These standards, refered to as NavSpecs apply to both aircraft and aircrew.
* It also doesn't help that ICAO and the FAA differ somewhat in their use of terminology.
* [AIM 1-2-2(a)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-2):

  > NavSpecs should be considered different from one another, not “better” or “worse” based on the described lateral navigation accuracy.

  > As a safeguard, the FAA requires that aircraft navigation databases hold only those procedures that the aircraft maintains eligibility for. If you look for a specific instrument procedure in your aircraft's navigation database and cannot find it, it's likely that procedure contains PBN elements your aircraft is ineligible for or cannot compute and fly. Further, optional capabilities such as Radius-to-fix (RF) turns or scalability should be described in the AFM or avionics documents. Use the capabilities of your avionics suite to verify the appropriate waypoint and track data after loading the procedure from your database.

<!--
RTCA DO-229D, Section 2.2.5.2.4 Selection of the Approach Type:
The automatically-selected approach type shall be the most accurate approach where the alert limits) are predicted to be supported, and where a minimum is published for the selected procedure.
The order of precedence is LPV or LP, LNAV/VNAV, then LNAV.
If LPV or LP is both published and predicted to be available, the equipment shall indicate that it is available.
If LPV or LP is published and is not predicted to be available, the equipment shall indicate that it is not available and shall indicate the approach type that is available (e.g. "LPV not available - Use LNAV/VNAV minima").
A prediction for Approach (LNAV) is not necessary.
Once annunciated, the equipment shall not change from Approach (LPV) to Approach (LNAV/VNAV) or from Approach (LP) to Approach (LNAV) unless the approach is reselected or the pilot selects a different approach type.
-->

## Required Navigation Performance (RNP)

* RNP is a navigation specification under Performance Based Navigation (PBN)
* Three standard RNP levels, where the value is nautical miles each side of centerline that must be maintained for aircraft and obstacle clearance
  * RNP 0.3 – Approach
  * RNP 1.0 – Departure, Terminal
  * RNP 2.0 – En route
* The performance requirements of PBN are conveyed to the operators through navigation specifications, or NavSpecs.
* The values listed above are the lateral limits, in nautical miles, of the errors within which the system must remain 95% of the time

::: info NOTE
RNP Requires
  * A specified accuracy be met 95% of the time
  * Onboard performance monitoring and alerting
:::

### Aircraft Equipment Requirements

* The Piper Archer III NXi G1000 system satisfies the following requirements:
  * RNP APCH (without RF)
  * RNP 1 (terminal operations)
  * RNAV 1 and RNAV 2
  * RNP-10 (oceanic and remote continental operations)

![Archer III NXi Navigation system equipment approvals.](/img/archer-poh/archer-poh-page-1-7-nav-system-approvals.png){width=500}

![Archer III NXi Navigation system equipment approvals.](/img/archer-poh/archer-poh-page-1-8-nav-system-approvals.png){width=500}

* Determining what requirements a particular aircraft satisfies can be challenging.
* The excerpt from Garmin Performance-Based Navigation Capabilities document indicates some RNP functions for various products
  * Some capabilities depend on software versions, so be sure to check carefully what RNP capabilities an aicraft has before flying

![Garmin Performance-Based Navigation Capabilities. In the case of the G1000 NXi, the asterisk says to contact Garmin. For the Archer III with the G1000 NXi, the pages above indicate it is not approved for RF legs.](/img/garmin-pbn-capabilities.png){width=800}

* The Garmin GTN750, which can support RF legs, are indicated in the flight plan view as shown below

![Garmin GTN750 with the KRNO ILS Z RWY 17R loaded starting from KLOCK. Note the arc left to get from SLABS to ZOMPO.](/img/garmin-gtn750-krno-ils-z-rwy-17r.jpg){width=500}

* RNP AR APCH (AR for Authorization Required)
  * General aviation operations do not have the authorization required to fly these approaches
  * See [AIM 1-2-2(b)(1)(a)(2)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#aim0102.html.6):

    > In the U.S., RNP AR APCH procedures are titled RNAV (RNP). These approaches have stringent equipage and pilot training standards and require special FAA authorization to fly. Scalability and RF turn capabilities are mandatory in RNP AR APCH eligibility.

* Relevant Advisory Circulars
  * [FAA-AC-91-105A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-105A_Ed_Update_2.pdf) for RNP definitions
  * [FAA-AC-91-100A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-100A_CHG_2.pdf) for RNAV definitions
  * [FAA-AC-91-107](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-107.pdf) for LP and LPV approaches
  * [FAA-AC-90-101A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-101A_CHG_1.pdf) for RNP procedures with AR
  * [FAA-AC-20-138D](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-138D_with_Change_1__2.pdf) for airworthiness approval

* In the past, LNAV/VNAV required a baro-aided altimeter
* This has changed to allow appropriately certified WAAS GPS systems to fly LNAV/VNAV approaches, but I don't know exactly when this happened
  * One data point is in the 2012 version of the AIM, which states that properly certified WAAS received _will_ be able to fly LNAV/VNAV approaches
  * Earlier references indicate the ability to use an appropriate WAAS GPS for LNAV/VNAV approaches
  * WAAS was authorized for IFR use in 2003, so certainly before that LNAV/VNAV approaches would have _required_ a baro-aided altimeter
  * [FAA-AC-90-97](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentid/74461) (which was canceled by [FAA-AC-91-105A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-105A_Ed_Update_2.pdf)) describes the use of barometric vertical guidance for VNAV

![2012 AIM 1-1-20(b)(1)](/img/aim-2012-sect-1-1-20b1.png){width=300}

![FAA-AC-90-97 on WAAS use for VNAV.](/img/faa-ac-90-97-waas-for-vnav.png){width=600}

## GPS Sensitivity Modes

* Three GPS modes
  * **Enroute**
    * More than 30 miles from departure/destination
    * 2 nm full-scale deflection
  * **Terminal**
    * Within 30 nm of departure/destination
    * 1 nm full-scale deflection
  * **Approach**
    * 2 nm before final approach waypoint (FAWP) aka final approach fix (FAF)
    * 0.3 nm full-scale deflection
    * This approximates the sensitivity of a VOR or Localizer approach if located on the field

![G1000 NXi Pilot's Guide for the PA-28-181 Archer. Automatic GPS CDI scaling.](/img/g1000nxi-pilots-guide/figure-2-24-cdi-scaling.png){width=800}

![G1000 NXi Pilot's Guide for the PA-28-181 Archer. Automatic GPS CDI scaling.](/img/g1000nxi-pilots-guide/table-2-2-cdi-scaling.png){width=600}

![G1000 NXi Pilot's Guide for the PA-28-181 Archer. Automatic GPS CDI scaling.](/img/g1000nxi-pilots-guide/figure-2-25-26-cdi-scaling.png){width=800}

## GPS Routes

* See [AIM 5-3-4](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-4)
* Q Routes: from 1,200 up to *but not including* 18,000' MSL
* T Routes: from 18,000 up to FL450
* GPS MEA, e.g. `2900G`
* Airway width is 4 nm on each side of centerline
  * [FAA-H-8083-16B Instrument Procedures Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook) [Chapter 2: En Route Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B_Chapter_2.pdf)
* Jet routes
  * Start with letter J
  * From 18,000 up to FL450
  * Have no specified width
    * [7400.2P 20-4-3](https://www.faa.gov/air_traffic/publications/atpubs/pham_html/chap20_section_4.html)

## Regulations

* Technical Standard Orders (TSO) are the regulations that describe GNSS certification
  * [Technical Standard Orders (TSO) - Regulations and Policy](https://www.faa.gov/aircraft/air_cert/design_approvals/tso/tso_regs)
  * [14 CFR &sect;21 Subpart O—Technical Standard Order Approvals](https://www.ecfr.gov/current/title-14/part-21/subpart-O)
* Three primary categories
  * **TSO-C129 / TSO-C196**
    * Non-WAAS GPS systems
    * TSO-C196 seems to be an improved version of TSO-C129
  * **TSO−C145 / TSO−C146**
    * WAAS GPS systems
  * **Uncertified**
    * VFR-only GPS for advisory / situational awareness
    * See [AIM Table 1-1-6](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#ffAks301atcn)
    * May be used for reference
    * May not be used for navigation or approaches
* Check the AFM or AFM supplement that accompanies the GPS installation that will state whether it is approved for IFR, and under what regulations.
  * [FAA-AC-20-138D](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-138D_with_Change_1__2.pdf)
    * Describes certification of GPS

![Garmin GNS430W is approved for use under TSO-C146a as stated in the approved AFM supplement that accompanies its installation.](/img/garmin-gns-430w-stc-approved.png){width=480}

![Archer III NXi G1000 system is certified under TSO-C145/TSO-C146.](/img/archer-poh/archer-poh-page-1-7-nav-system-approvals.png){width=500}

## Non-WAAS GPS

* Also called non-augmented GPS
* May be used as primary source of navigation if the aircraft has working conventional navigation equipment (e.g. VOR receiver)
  * [AIM 1-2-3(a)(2)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-3)

    > Use of a suitable RNAV system as an Alternate Means of Navigation when a VOR, DME, VORTAC, VOR/DME, TACAN, NDB, or compass locator facility including locator outer marker and locator middle marker is operational and the respective aircraft is equipped with operational navigation equipment that is compatible with conventional navaids. For example, if equipped with a suitable RNAV system, a pilot may fly a procedure or route based on operational VOR using that RNAV system without monitoring the VOR.

* ***However, RAIM must be available and working to use GPS as a primary source of navigation***
  * [AIM 5-1-16(f)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html#$paragraph5-1-16)
  * [FAA-AC-90-108](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-108_CHG_1.pdf)

    > Operators planning to use TSO-C129 equipment as a substitute means of navigation must perform a RAIM prediction during preflight. GPS RAIM availability must be confirmed for the applicable operation and time using current GPS satellite information.

    > For all RNAV systems, substitute and alternate means of navigation must be discontinued upon loss of integrity (for example, RAIM alert) or unacceptable degradation of system performance.

* GPS can be used in lieu of VOR/DME/ADF etc.
  * [FAA-AC-90-108](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-108_CHG_1.pdf)
    * Stated exception is substituting for lateral guidance on final approach course which is discussed in [AIM 1-2-3(c)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-3) Note 5
  * This includes over 24,000 feet requirement to have DME
* When selecting an alternate airport for an IFR flight plan, the alternate must have a non-GPS approach that the aircraft is equipped to fly.
  * [AIM 1-2-3(d)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-3)

    > For the purposes of flight planning, any required alternate airport must have an available instrument approach procedure that does not require the use of GPS.

    > This restriction does not apply to RNAV systems using TSO-C145/-C146 WAAS equipment.

* ***However, if the GPS unit has RAIM, and a RAIM check is performed, then an alternate with only a GPS approach can be used, but only if the destination has an approach other than GPS that the aircraft is equipped to fly.***

  > For flight planning purposes, TSO-C129() and TSO-C196() equipped users (GPS users) ... may file based on a GPS-based IAP at either the destination or the alternate airport, but not at both locations.

::: tip
Basically, if you are using a non-WAAS GPS, you must make sure RAIM is available and working before using the GPS under IFR.
:::

## Receiver autonomous integrity monitoring (RAIM)

::: warning RAIM
Receiver autonomous integrity monitoring (RAIM) is a technology for a GPS unit to assess the integrity of GPS signals it receives to make sure they are correct. [AIM 1-1-17(a)(3)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)
:::

* [AIM 1-1-17(a)(3)(a)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)

  > RAIM requires a minimum of 5 satellites, or 4 satellites and barometric altimeter input (baro-aiding), to detect an integrity anomaly. Baro-aiding is a method of augmenting the GPS integrity solution by using a non-satellite input source in lieu of the fifth satellite. Some GPS receivers also have a RAIM capability, called fault detection and exclusion (FDE), that excludes a failed satellite from the position solution; GPS receivers capable of FDE require 6 satellites or 5 satellites with baro-aiding.

* See also [FAA-AC-90-100A U.S Terminal and En Route Area Navigation (RNAV) Operations](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/73482)
* Regarding RAIM failure during a GPS approach [AIM 1-1-17(b)(5)(g)(6)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#aim0101.html.28):

    > If a RAIM failure/status annunciation occurs prior to the final approach waypoint (FAWP), the approach should not be completed since GPS no longer provides the required integrity. The receiver performs a RAIM prediction by 2 NM prior to the FAWP to ensure that RAIM is available as a condition for entering the approach mode. The pilot should ensure the receiver has sequenced from “Armed” to “Approach” prior to the FAWP (normally occurs 2 NM prior). Failure to sequence may be an indication of the detection of a satellite anomaly, failure to arm the receiver (if required), or other problems which preclude flying the approach.

### Checking RAIM

* There are several ways to check RAIM, the most common by using the SAPT tool online, or using the GPS receivers built-in RAIM prediction functionality
  * [AIM 5-1-16(f)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html#$paragraph5-1-16)

    > During the pre-flight planning phase RAIM prediction must be performed if TSO-C129() equipment is used to solely satisfy the RNAV and RNP requirement. GPS RAIM availability must be confirmed for the intended route of flight (route and time) using current GPS satellite information.

    > Operators may satisfy the predictive RAIM requirement through any one of the following methods: ... 2. Operators may use the Service Availability Prediction Tool (SAPT) on the FAA en route and terminal RAIM prediction website; ... 5. Operators may use the receiver's installed RAIM prediction capability

* See [RAIM Service Availability Prediction Tool (SAPT) Summary Page](https://sapt.faa.gov/default.php)
* Foreflight gives RAIM prediction in the Navlog section.
* GPS NOTAMs
  * [FAA FNS NOTAM Seach](https://notams.aim.faa.gov/notamSearch)
  * ForeFlight briefing

## Wide-Area Augmentation System (WAAS)

::: warning SBAS
Satellite Based Augmentation System (SBAS) augments GNSS with additional ground stations/enhanced information transmitted from satellites for improved accuracy and reliability.
:::

::: warning WAAS
Wide-Area Augmentation System (WAAS) is the US implementation of SBAS.
:::

* Other SBAS implementations include
  * EGNOS - Europe
  * MSAS - Japan
  * SDCM - Russia
  * GAGAN - India
* WAAS accuracy can achieve position accuracy of approximately 25 ft 95% of the time.
* ***Enables certain GPS approaches to be performed to lower minimums than otherwise allowed with a non-WAAS GPS (e.g. LPV)***
* WAAS works by using ground stations at known locations to determine their GPS-measured location
* Based on the difference between their _known location_ and _measured location_ a correction message is sent up to some WAAS satellites in geostationary orbit
* These corrections are then sent from the WAAS satellites to WAAS-capable GPS receivers
  * There are currently 3 such WAAS satellites
* If WAAS is working then do not need to be concerned with RAIM
  * [AIM 5-1-16(f)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html#Vc6MC1203sher)

    > If TSO-C145/C146 equipment is used to satisfy the RNAV and RNP requirement, the pilot/operator need not perform the prediction if WAAS coverage is confirmed to be available along the entire route of flight.

  * In the Piper Archer POH (VB-2749) page 2-8:

    > In areas where GPS WAAS SBAS coverage is not available, the pilot must verify RAIM availability.

  * Regarding checking WAAS in the Piper Archer POH (VB-2749) page 2-8:

    > For information on using the WFDE Prediction Program, refer to Garmin WAAS FDE Prediction Program, part number 190-00643, 'WFDE Prediction Program Instructions'.

  * See [fly.garmin.com/fly-garmin/support/raim](https://fly.garmin.com/fly-garmin/support/raim/)
* May be used as primary source of navigation without any other equipment requirements imposed on the aircraft
  * [AIM 1-1-18(c)(9)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-18)

    > Unlike TSO-C129 avionics, which were certified as a supplement to other means of navigation, WAAS avionics are evaluated without reliance on other navigation systems. As such, installation of WAAS avionics does not require the aircraft to have other equipment appropriate to the route to be flown.

* When using WAAS, alternate airport need only have a GPS approach
  * [AIM 1-2-3(d)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-3)

    > For the purposes of flight planning, any required alternate airport must have an available instrument approach procedure that does not require the use of GPS. ... This restriction does not apply to RNAV systems using TSO-C145/-C146 WAAS equipment.

  * [AIM 1-1-18(c)(9)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-18)

    > Pilots with WAAS receivers may flight plan to use any instrument approach procedure authorized for use with their WAAS avionics as the planned approach at a required alternate, with the following restrictions. When using WAAS at an alternate airport, flight planning must be based on flying the RNAV (GPS) LNAV or circling minima line, or minima on a GPS approach procedure, or conventional approach procedure with “or GPS” in the title.

## Checking WAAS Availability

* The [William J. Hughes Technical Center WAAS Test Team](https://www.nstb.tc.faa.gov/) website seems to be the best resource for checking WAAS availability
* The [Airport Schedules](https://www.nstb.tc.faa.gov/AirportSchedules/) application seems to be the easiest way to determine WAAS availability

![WAAS Airport Schedules application](/img/waas-airport-schedules.jpeg)

## Determining GPS Receiver Capabilities

* Check AFM/POH
  * See, for example on a Cessna 172S G1000, the POH Section 2 - G1000 LIMITATIONS - GPS-WAAS for more info.
  * In the Garmin G1000 NXi Pilot's Guide for the PA-28-181 Archer see the System Overview section
* Check aircraft receiver
* In the Garmin G1000 NXi Pilot's Guide for the PA-28-181 Archer it describes the PRN (pseudo-random noise, the unique ID identifying the satellite) and signal strength bars

    > As the GPS receiver locks onto satellites, a signal strength bar is displayed for each satellite in view, with the appropriate satellite PRN number (01-32 or 120-138 for WAAS) below each bar.

* The signal strength bars are described on page 20, but a solid green bar means the satellite is being used

![G1000 GPS Status Page. Garmin G1000 NXi Pilot's Guide for the PA-28-181 Archer.](/img/g1000-pilots-guide-figure-1-7.jpg){width=800}

![Cessna 172S WAAS Limitations.](/img/c172s-poh-waas-limitation.jpg){width=440}

* WAAS satellite PRN 138 was decommissioned in May 2022 and replaced by PRN 135

## Using GPS During IFR Operations

* Verify database is current
  * See the exception in [AIM Table 1-1-6](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#ffAks301atcn) that allows flying with an expired GPS database
    * Verifying approaches haven't changed or been amended
    * Verifying route hasn't changed
* Check RAIM or WAAS

## Using GPS for Non-GPS Approaches

* GPS can be used in lieu of a VOR for a VOR approach if the underlying NAVAID is monitored for final approach segment coarse alignment
  * [AIM 1-2-3(c)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-3) Note 5

    > Use of a suitable RNAV system as a means to navigate on the final approach segment of an instrument approach procedure based on a VOR, TACAN or NDB signal, is allowable. The underlying NAVAID must be operational and the NAVAID monitored for final segment course alignment.

* If a DME fix on a Localizer approach isn't in the GPS database you may only define that fix using GPS distance from the localizer antenna

::: tip
To satisfy the requirement that the NAVAID underlying frequency be monitored on the final approach course, tune the VOR use the bearing pointers, and ensure they align with guidance provided by GPS.
:::

## GPS Failures

* On the G1000, the GPS flight phase (e.g. `ENR`, `TERM`, `LPV`) is shown on the HSI to the right of the CDI
* Normally this text is magenta
* If cautionary conditions exist this text will be in *amber*
* the `LOI` (Loss of Integrity Monitoring) indication appears to the right of the HSI when GPS integrity is insufficient for the current phase of flight
