# Sources of Weather Data

* NOAA
  * National Weather Service
    * NWS is a NOAA agency, see [NOAA Organization](https://www.noaa.gov/about/organization)
    * The [Aviation Weather Center](https://aviationweather.gov) is an NWS center
* Flight Service

## AWOS, ASOS, and ATIS Reports

* [AIM 7-1-10 Weather Observing Programs](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-10)

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
  * Updated on the receipt of any official weather, regardless of content change or reported values
  * Default ceiling and visibility if not stated on ATIS is at least 5,000 ft and 5 sm

## PATWAS and TIBS

* **Telephone Information Briefing Service (TIBS)**
  * Provided by flight service includes continuous recording of meteorological and/or aeronautical information available by telephone.
* **Pilots Automatic Telephone Weather Answering Service (PATWAS)**
  * Seems to be discontinued, no information in any of the FAA handbooks

## TWEB

* **Transcribed Weather Broadcast (TWEB)**
  * Alaska only
  * A continuous automated broadcast of meteorological and aeronautical data over selected low or medium frequency (L/ MF) and very high frequency (VHF) omnidirectional range (VOR) NAVAID facilities.
