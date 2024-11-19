# Overview

::: warning Global Navigation Satellite System (GNSS)
The generic term for satellite-based navigation systems used around the world.
:::

::: warning Global Positioning System (GPS)
The particular GNSS system used in the United States.
:::

* GPS databases are updated every 28 days
  * Usually every 4th Thursday of the month
  * Pilots can update GPS database if they can do it from instrument panel without special tools or disassembly of the unit
  * Take the SD card out and update it
* Three GPS modes
  * **Enroute**
    * More than 30 miles from departure/destination
    * 5 nm full-scale deflection
  * **Terminal**
    * Within 30 nm of departure/destination
    * 1 nm full-scale deflection
  * **Approach**
    * 2 nm before final approach waypoint (FAWP) aka final approach fix (FAF)
    * 0.3 nm full-scale deflection
    * This approximates the sensativity of a VOR or Localizer approach if located on the field
* GPS Routes
  * Q Routes: from 1,200 up to *but not including* 18,000' MSL
  * T Routes: from 18,000 up to FL450
  * GPS MEA, e.g. `2900G`
* Number of visible GPS satellites
  * The GPS constellation currently consists of 31 active satellites
  * GPS is designed so that as long as 24 GPS satellites are working, at least 5 should be visible at any time
    * [AIM 1-1-17(a)(1)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)
  * [AIM 1-1-17(a)(3)(a)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)
    * Need 4 satellites to have GPS
      * This gives latitude, longitude, altitude, and time
    * Need 5 satellites for RAIM
      * More on RAIM below
    * Need 6 satellites to remove corrupt GPS signal
    * A typical GPS receiver has at least 12 channels

![Garmin GNS430W GPS Specs.](/img/gns430w-gps-specs.png){width=300}

![Garmin G1000 (GIA63) GPS Specs.](/img/g1000-gia63-gps-specs.png){width=300}

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

# Non-WAAS GPS

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

# Wide-Area Augmentation System (WAAS)

::: warning SBAS
Satellite-Based Augmentation System (SBAS) augments GNSS with additional ground stations/enhanced information transmitted from satellites for improved accuracy and reliability.
:::

::: warning WAAS
Wide-Area Augmentation System (WAAS) is the US implementation of SBAS.
:::

* WAAS accuracy is at a minimum of approximately 25 ft 95% of the time.
* ***Enables certain GPS approaches to be performed to lower minimums than otherwise allowed with a non-WAAS GPS (e.g. LPV)***
* If WAAS is working then do not need to be concerned with RAIM
  * [AIM 5-1-16(f)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html#Vc6MC1203sher)

    > If TSO-C145/C146 equipment is used to satisfy the RNAV and RNP requirement, the pilot/operator need not perform the prediction if WAAS coverage is confirmed to be available along the entire route of flight.

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

* From [Aviation StackExchange How can I tell if a G430 or G1000 has WAAS or not?](https://aviation.stackexchange.com/questions/14407/how-can-i-tell-if-a-g430-or-g1000-has-waas-or-not)

    > If the G1000 supports WAAS, it'll display that under the 'SBAS Selection' header and you'll see satellites at the bottom numbered in the 100s - 124, 126, 129, etc - all the 100-series satellites are the WAAS augmentation satellites. The satellites augmented by WAAS will also have a "D" at the bottom of the signal strength column.

    > Note that just because a particular receiver has WAAS capability, it does NOT mean that the entire system/installation is certified to use it. The only way to know that is to look at the AFM and see what it is approved for.

* See, for example on a Cessna 172S G1000, the POH Section 2 - G1000 LIMITATIONS - GPS-WAAS for more info.

![Checking WAAS on G1000. Reference unknown.](/img/g1000_sbas02.jpg){width=440}

![Cessna 172S WAAS Limitations.](/img/c172s-poh-waas-limitation.jpg){width=440}

# Using GPS During IFR Operations

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
