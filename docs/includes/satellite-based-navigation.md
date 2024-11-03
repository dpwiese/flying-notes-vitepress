# Using GPS During IFR Operations

* ==Check the AFM or AFM supplement that accompanies the GPS installation that will state whether it is approved for IFR.==
  * [FAA-AC-20-138D](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-138D_with_Change_1__2.pdf)
    * Describes certification of GPS
* ==GPS can be used in lieu of VOR/DME/ADF etc.==
  * [FAA-AC-90-108](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-108_CHG_1.pdf)
  * Stated exception is substituting for lateral guidance on final approach course
  * [AIM 1-2-3(c)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html#$paragraph1-2-3)
    * Also says GPS can be used in lieu of VOR/DME/ADF etc.
    * Regarding the exception for use on the final approach course, says in Note 5 that the underlying NAVAID must be monitored
  * ==To monitor the underlying frequency on the final approach course, tune the VOR and use the bearing pointers==

![Garmin GNS430W is approved for use under TSO-C146a as stated in the approved AFM supplement that accompanies its installation.](/img/garmin-gns-430w-stc-approved.png){width=600}

# Satellite Navigation Overview

* **Global Navigation Satellite System (GNSS)**
  * The generic term for satellite-based navigation systems used around the world
* **Global Positioning System (GPS)**
  * The particular GNSS system used in the United States
* GPS is designed to always have at least 5 satellites visible
* **==Need 4 satellites to have GPS==**
  * This gives latitude, longitude, altitude, and time
* **==Need 5 satellites for RAIM==**
  * More on RAIM below
* Need 6 satellites to remove corrupt GPS signal
* **Wide Area Augmentation System (WAAS)**
  * WAAS augments signals from satellites with signals from ground
  * More accurate than just GPS
  * ==If WAAS is working then do not need to be concerned with RAIM==
* GPS databases are updated every 28 days
  * Pilots can update GPS database if they can do it from instrument panel without special tools or disassembly of the unit
  * Take the SD card out and update it
* **Using GPS**
  * Verify database is current
    * Updated every 28 days
    * Usually every 4th Thursday
  * Exception in AIM Table 1-1-6
    * Verifying approaches haven't changed or been amended
    * Verifying route hasn't changed
  * Check RAIM
  * Do not need RAIM if GPS is WAAS enabled
* Normally GPS receiving at least 12 satellites
  * [AIM 5-1-16(f)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html#Vc6MC1203sher)
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
* GPS in lieu of DME
  * IFR GPS may be used in lieu of DME
    * This includes over 24,000 feet requirement to have DME
  * If a DME fix on a Localizer approach isn't in the GPS database you may only define that fix using GPS distance from the localizer antenna
* Non-WAAS IFR GPS
  * May be used as primary source of navigation
    * If another source can be used as a backup
    * Need not be monitored if you have RAIM
  * Alternate airport must have a non-GPS approach
    * That you are capable of flying
* WAAS IFR GPS
  * May be used as primary source of navigation
  * Alternate airport need only have a GPS approach
* VFR-only GPS
  * For advisory only
  * See [AIM Table 1-1-6](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#ffAks301atcn)?
  * May be used for reference
  * May not be used for navigation or approaches

# Receiver autonomous integrity monitoring (RAIM)

* ==RAIM is a technology to assess the integrity of GPS signals==
* ==Check RAIM prediction before using non-WAAS GPS==
* GPS NOTAMs
  * [FAA FNS NOTAM Seach](https://notams.aim.faa.gov/notamSearch)
  * ForeFlight briefing
* RAIM is considered available if 24 GPS satellites or more are operative?
* From [AIM 1-1-21](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-21)
  * Need 5 satellites for RAIM
  * Or 4 with baro-aiding altimeter
  * See also [FAA-AC-90-100A U.S Terminal and En Route Area Navigation (RNAV) Operations](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/73482)
* Can check RAIM in GPS such as G1000
* For RAIM prediction see: [RAIM Service Availability Prediction Tool (SAPT) Summary Page](https://sapt.faa.gov/default.php)
* Foreflight gives RAIM prediction in the Navlog section.
* Don't need to do RAIM check if GPS is WAAS enabled.
* [AIM 1-1-21](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-21)
* [AIM 1-1-17 Global Positioning System (GPS)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-17)
* The following reference seems to be from an older version of the AIM

  > The GPS receiver verifies the integrity (usability) of the signals received from the GPS constellation through receiver autonomous integrity monitoring (RAIM) to determine if a satellite is providing corrupted information. At least one satellite, in addition to those required for navigation, must be in view for the receiver to perform the RAIM function; thus, RAIM needs a minimum of 5 satellites in view, or 4 satellites and a barometric altimeter (baro-aiding) to detect an integrity anomaly. For receivers capable of doing so, RAIM needs 6 satellites in view (or 5 satellites with baro-aiding) to isolate the corrupt satellite signal and remove it from the navigation solution. Baro-aiding is a method of augmenting the GPS integrity solution by using a nonsatellite input source. GPS derived altitude should not be relied upon to determine aircraft altitude since the vertical error can be quite large. To ensure that baro-aiding is available, the current altimeter setting must be entered into the receiver as described in the operating manual.

# Wide-Area Augmentation System (WAAS)

::: warning WAAS
Wide-Area Augmentation System (WAAS) is the US implementation of the capability called Satellite-Based Augmentation System (SBAS).
:::

* SBAS augments basic GPS satellite constellation with additional ground stations/enhanced info transmitted from geostationary satellites.
* ==Improves GPS signals for use in precision approaches.==
* ==WAAS accuracy is at a minimum of approximately 25 ft 95% of the time.==
* From [Aviation StackExchange How can I tell if a G430 or G1000 has WAAS or not?](https://aviation.stackexchange.com/questions/14407/how-can-i-tell-if-a-g430-or-g1000-has-waas-or-not)
* ==Enables certain GPS approaches to be performed to lower minimums than otherwise allowed with a non-WAAS GPS (e.g. LPV)==

  > If the G1000 supports WAAS, it'll display that under the 'SBAS Selection' header and you'll see satellites at the bottom numbered in the 100s - 124, 126, 129, etc - all the 100-series satellites are the WAAS augmentation satellites. The satellites augmented by WAAS will also have a "D" at the bottom of the signal strength column.

  > Note that just because a particular receiver has WAAS capability, it does NOT mean that the entire system/installation is certified to use it. The only way to know that is to look at the AFM and see what it is approved for.

* See, for example on a Cessna 172S G1000, the POH Section 2 - G1000 LIMITATIONS - GPS-WAAS for more info.

![Checking WAAS on G1000. Reference unknown.](/img/g1000_sbas02.jpg){width=440}

![Cessna 172S WAAS Limitations.](/img/c172s-poh-waas-limitation.jpg){width=440}
