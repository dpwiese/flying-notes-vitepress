# Weather Information

This page covers *Task C. Weather Information* from the [FAA-S-ACS-25 Flight Instructor for Airplane Category Airman Certification Standards](https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf).

* When obtaining weather information, start looking far in advance
  * Use standard sources of weather information, such as apps and online
  * [Prog Charts](https://www.aviationweather.gov/progchart/sfc) provides a forecast 7 days out
* Start big picture and then zoom in
  * Look at frontal activity, pressure systems

## Sources of Weather Data

* Four types of weather briefings
  * **Outlook briefing**
    * More than 6 hours in advance
    * Will get mostly forecast information without bothering too much with current conditions
  * **Standard briefing**
    * Immediately before flight (within 6 hours of your departure time)
  * **Abbreviated briefing**
    * If you've already received an outlook briefing
    * There is no standard format, need to tell the briefer what info you need
  * **In flight briefing**

### AWOS, ASOS, and ATIS Reports

* **Automated Weather Observing System (AWOS)**
  * Controlled and operated by the FAA
  * Located solely at airports
  * Provide near real-time reports
  * Different types of equipment give different information
* **Automated Surface Observing System (ASOS)**
  * Controlled and operated by National Weather Service (NWS) and Department of Defense (DOD)
  * Continuous observations of the weather
  * Computer generated voice over phone or radio
  * Observations also available textually via weather service
  * Collects all information needed to generate a METAR
  * Does not report density altitude (recall: density altitude is not part of a METAR report)
  * Provides hourly reports
  * Example: `KSBY` and `KOXB` have an ASOS
  * All ASOS give the same information
* **Automated Weather Sensor System (AWSS)**
* **Automatic Terminal Information Service (ATIS)**
  * Weather
  * Runways in use
  * NOTAMs
  * Other pertinent information
  * Usually recorded 10 minutes before the hour

### PATWAS and TIBS

* **Telephone Information Briefing Service (TIBS)**
  * Provided by flight service includes continuous recording of meteorological and/or aeronautical information available by telephone.
* **Pilots Automatic Telephone Weather Answering Service (PATWAS)**
  * Seems to be discontinued, no information in any of the FAA handbooks

### TWEB

* **Transcribed Weather Broadcast (TWEB)**
  * Alaska only
  * A continuous automated broadcast of meteorological and aeronautical data over selected low or medium frequency (L/ MF) and very high frequency (VHF) omnidirectional range (VOR) NAVAID facilities.

<!--@include: ./docs/includes/weather-products.md | shift:1-->
<!--@include: ./docs/includes/meteorology.md | shift:1-->

## Onboard Weather

* **Onboard Weather Radar**
  * Most up-to-date weather information available
  * May be used for "tactical" weather avoidance
  * Good supplement to existing weather sources
  * Has limitations like blind splot where distance stuff can be blocked by near stuff
* **XM lightning**
  * Lightning strikes sensed by ground stations
  * Lightning can't hide from ground stations
  * Broadcast to plane via satellite
* **NEXRAD**
  * Ground-based radar information broadcast to planes via satellite
  * Information may be 15 minutes or more old
  * NEXRAD and ADS-B weather both come from NWS
* **ADS-B**
  * Flight Information Services-Broadcast (FIS-B)
  * Information sent directly to planes from ground stations
  * Usually no more than 5 minutes old
* **Flight service**
  * Nationwide on 122.2
  * Available over most VORs
* **Hazardous Inflight Weather Advisory Service (HIWAS)**
  * Continuous broadcast service over selected VORs of Inflight Weather Advisories; i.e. SIGMETs, CONVECTIVE SIGMETs, AIRMETs, Severe Weather Forecast Alerts (AWWs), and Center Weather Advisories (CWAs).
  * Discontinued in 2020

## References

* [AIM 7-1-28 Key to Aerodrome Forecast (TAF) and Aviation Routine Weather Report (METAR)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-28)
* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
    * [Chapter 13: Aviation Weather Services](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/15_phak_ch13.pdf)
    * Page 13-4: Transcribed Weather Broadcast (TWEB) (Alaska Only)
* [FNL Pilots METAR Remarks](https://www.fnlpilots.org/blog/2018/10/metar-remarks/)
* [FAA METAR Abbreviations](https://www.weather.gov/media/wrh/mesowest/metar_decode_key.pdf)
* [http://meteocentre.com/doc/metar.html](http://meteocentre.com/doc/metar.html)
* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 12: Weather Theory](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/14_phak_ch12.pdf)
* [FAA-AC-00-6B Aviation Weather](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1029851)
* [FAA-AC-00-24C Thunderstorms](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1020774)
* [FAA-AC-00-30C Clear Air Turbulence Avoidance](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1029211)
