# Overview

* When obtaining weather information, start looking far in advance
  * Use standard sources of weather information, such as apps and online
  * For example, [Prog Charts](https://aviationweather.gov/gfa/#progchart) provides a forecast 7 days out
* Start big picture and then zoom in
  * Look at frontal activity, pressure systems
* See [AIM 7-1-2](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-2)

::: tip
More importantly than memorizing all of the products below, which are constantly being changed, updated, and shut down, it is important to have a general understanding of what information is needed and how to retrieve it using the available products.
:::

* ==Aviation weather services are how we get information about the weather==
* The output of these various services and products can be catagorized as either:
  * ==Observation==
  * ==Forecast== (and outlook)
* Another catagorization of weather products is
  * ==Textual==
  * ==Graphical==
* Yet another categorization is
  * ==Surface==
  * ==Upper-air==
* We use weather products to get information about the following:
  * Want to know pressures zones (e.g. High, Low), as good/bad weather associated with high/low pressure. Also H and L imply wind direction around them, can enable flight to be planned with tailwind, for example.
  * Want to know more about pressures via isobars, as can further help indicate winds.
  * Want to know areas of poor visibility/ceilings, for determining extent to which flight can be VFR/IFR, for example.
  * Want to know freezing level, to avoid icing, for example.
  * Also want to avoid adverse conditions for safety reasons, e.g. convective activity, icing.
  * Also from winds/temps aloft can get temp lapse rate, to give another indicator of stability.

## Textual Products

![Textual products. Reference unknown. This reference was current as of probably the mid 2010s and should not be relied upon today.](/img/textual_products_glance.png){width=600 border=true}

* *Note: only textual products used to have letter acronyms for them.*
  * This seems to have changed with the graphical area forecast (GFA)

## Graphical Products

![Graphical products. Reference unknown. This reference was current as of probably the mid 2010s and should not be relied upon today.](/img/graphical_products_glance.png){width=600 border=true}

* *Note: most graphical products are observations.*
* *Note: weather products are changing all the time, so the above overview may not be current, but should give a pretty good idea of what is available.*

## Observations

* See [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 13: Aviation Weather Services](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/15_phak_ch13.pdf)
* Surface observations
  * **METAR**
    * Provide local weather conditions and other relevant information for a specific airport
    * Equipment
    * **AWOS** - Automated Weather Observing System
      * Controlled and operated by the FAA
      * Located solely at airports
      * Provide near real-time reports
    * **ASOS** - Automated Surface Observing System
      * Controlled and operated by National Weather Service (NWS) and Department of Defense (DOD)
      * Continuous observations of the weather
      * Computer generated voice over phone or radio
      * Observations also available textually via weather service
      * Collects all information needed to generate a METAR
      * Does not report density altitude (recall: density altitude is not part of a METAR report)
      * Provides hourly reports
      * Example: `KSBY` and `KOXB` have an ASOS
    * **AWSS** - Automated Weather Sensor System
* Upper air observations
  * **PIREP**
    * Importance to other pilots (pay it forward)
    * Report to FSS, Approach, Tower
    * Walk through form (GLS)
  * Weather balloons with radiosonde also used to gather upper air information
  * The below are described in PHAK but essentially non-functional - they are not packaged into products that can be readily accessed by pilots
    * Aircraft Meteorological Data Relay (AMDAR)
      * Uses commercial aircraft to provide automated weather observations
      * Captures wind, temperature, humidity/water vapor, turbulence, and icing data
      * See [amdar.noaa.gov](https://amdar.noaa.gov/FAQ.html)
    * Meteorological Data Collection and Reporting System (MDCRS)
* Radar
  * Provide information about precipitation and wind
  * Four types
    * WSR-88D NEXRAD (Doppler)
      * Provides radar images in graphical products
    * FAA terminal Doppler weather radar (TDWR)
      * Installed at some major airports around the country
      * Provides severe weather alerts and warnings to ATC
      * Ensures pilots are aware of wind shear, gust fronts, and heavy precipitation
    * Surveillance Radar
      * Primarily to detect aircraft, but it also detects the location and intensity of precipitation
    * Airborne Radar
      * Installed onboard aircraft
* Satellites
* ATIS
* AIRMET (Sierra, Tango, Zulu)
* SIGMET (Severe icing, severe turbulence, CAT, dust storms, volcanic ash)
* Convective SIGMET

![Chart Supplement. Upper air observing station and radar weather network (NE)](/img/chart-supplement-radar-and-upper-air-observations.png){width=460}

## Forecasts

* **Terminal Aerodrome Forecasts (TAF)**
  * ==5 nm Radius during 24-hour period==
  * Slightly different formatting than METAR
  * Date/Time of origin (111140Z) – 11th day of month at 11:40Z
  * Date/Time of validity (111212) – 11th day of month from 12Z to 12Z following day
  * LLWS (WS 3-digit height AGL & element – 020/35035KT)
  * Indicators: FM (<1hr change), BECMG (<2 hrs beg/end times), TEMPO
  * PROB40 (40% - 50%)
* **Area Forecasts (FA)**
  * ==Forecast of VMC, clouds, general weather conditions across multiple states==
  * Previously established symbols
  * Issued 3 times per day and valid for 18 hours
* **Graphical Forecast for Aviation (GFA)**
  * Replacing textual Area Forecast (FA)
* Inflight Weather Advisories
  * HIWAS
    * Discontinued in 2020
  * AIRMET
  * SIGMET
  * Convective SIGMET
* Winds and Temperatures Aloft Forecast - Graphical (FB)
  * Direction, speed, temps
  * `DDVVTT` (`DD` Dir, `VV` Vel, `TT` Temp)
  * 100-199Kts = -50 from DD, +100 to VV
  * Velocity = 99 => Velocity >200KTS
  * All temps above FL240 assumed negative
