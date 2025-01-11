# Weather Products

::: tip
More importantly than memorizing all of the products below, which are constantly being changed, updated, and shut down, it is important to have a general understanding of what information is needed and how to retrieve it using the available products.
:::

## Overview

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

### Textual Products

![Textual products. Reference unknown.](/img/textual_products_glance.png){width=460}

* *Note: only textual products used to have letter acronyms for them.*
  * This seems to have changed with the graphical area forecast (GFA)

### Graphical Products

![Graphical products. Reference unknown.](/img/graphical_products_glance.png){width=460}

* *Note: most graphical products are observations.*
* *Note: weather products are changing all the time, so the above overview may not be current, but should give a pretty good idea of what is available.*

### Observations

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

### Forecasts

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

## METAR

* METAR
  * Meteorological Terminal Aviation Routine Weather Report
  * Meteorological Aerodrome Report
* Provide local weather conditions and other relevant information for a specific airport
* Issued every hour or when a significant change to the weather occurs
* Genereated from
  * Automated Weather Observing Systems (AWOS)
  * Automated Surface Observing Systems (ASOS)
* Type
  * Hourly routine
  * SPECI - special report that can be given at any time to update the METAR for rapidly changing weather conditions, aircraft mishaps, or other critical information
* [Aviation Weather Center: METARs & TAFs](https://aviationweather.gov/data/metar/)

### Example

```
KRBD 112153Z 18013G25KT 10SM CLR 12/M03 A2982 RMK AO2 PK WND 19026/2122
SLP099 T01171028
```

* Vertical visibility constitutes a ceiling when there is obscuration
  * For example `VV600` on METAR would correspond to a ceiling of 600 feet
* Fog (`FG`)can only be reported if visibility is less than 5/8 mile
  * If the visibility is 5/8 mile or more up to 6 miles, it can be reported as `BR` for mist
* Negative temperatures indicated with leading `M` for minus
* There is no format to report partial obscurations
  * But using `FEW000`, `SCT000`, or `BKN000` as examples is when bases are below 50 feet
* When METAR countains `AUTO` it means there was no human intervention to augment the report with information like thunderstorms in vicinity
* Dollar sign `$` at the end of METAR indicates system that generated it may be in need of maintenance
* `AO1`
  * ==Thinks any precipitation is rain==
* `AO2`
  * ==Can tell the difference between types of precipitation==
* `PRESRR`
  * Pressure rising rapidly
  * ==When pressure is rising or falling rapidly it means winds will be strong==
* `LTGIC`
  * Lightning in cloud
* `LTGCC`
  * Lightning cloud to cloud
* `LTGCG`
  * Lightning cloud to ground

![METAR descriptors. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 13: Aviation Weather Services](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/15_phak_ch13.pdf)](/img/phak/phak-figure-13-5-metar-descriptors.png){width=800}

![Sky conditions. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 13: Aviation Weather Services](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/15_phak_ch13.pdf)](/img/phak/phak-figure-13-6-sky-conditions.png){width=360}

![[AIM Fig 7-1-21 Kev to Aerodrome Forecast (TAF) and Aviation Routine Weather Report (METAR) (Front)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html)](/img/aim/aim-figure-7-1-21.png){width=560}

![[AIM Fig 7-1-22 Kev to Aerodrome Forecast (TAF) and Aviation Routine Weather Report (METAR) (Back)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html)](/img/aim/aim-figure-7-1-22.png){width=560}

::: warning Ceiling
Ceiling is the lowest layer of clouds or obscuring phenomenon that is reported as "broken," "overcast," or "obscuration"
:::

* From [AIM 7−1−14 Reporting of Cloud Heights](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-14):

  > a. Ceiling, by definition in the CFRs and as used in aviation weather reports and forecasts, is the height above ground (or water) level of the lowest layer of clouds or obscuring phenomenon that is reported as "broken," "overcast," or "obscuration,"

* Note: in `RMK` the group `SLPXXX` - 1 hPa = 1 mb, and
  * 1013 mb = 29.92 inHg
  * 1017 mb = 30.02 inHg
  * Sea Level Pressure in mbar
  * To get Sea Level Pressure from the `SLP` need to prepend a `9` or `10`, to get a value that is closest to 1000 mbar, with a decimal place inserted as `XX.X`
  * For example, given `SLP099` this would give a pressure of 1009.9 mbar, which converts to 29.82 inHg

* From [https://www.aviationweather.ws/072_Obscured_or_Partially_Obscured_Sky.php](https://www.aviationweather.ws/072_Obscured_or_Partially_Obscured_Sky.php):

  > When the sky is totally hidden by the surface based phenomena, the ceiling is the vertical visibility from the ground upward into the obscuration.

* From [AIM 7-1-29 International Civil Aviation Organization (ICAO) Weather Formats](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-29):

  > Except for precipitation, phenomena located within 5 statute miles of the point of observation will be reported as at the station. Phenomena between 5 and 10 statute miles will be reported in the vicinity, "VC." Precipitation not occurring at the point of observation but within 10 statute miles is also reported as in the vicinity, "VC." Phenomena beyond 10 statute miles will be shown as distant, "DSNT." Distances are in statute miles except for automated lightning remarks which are in nautical miles.

* The descriptors `MI` (shallow), `BC` (patches) and `PR` (partial) are used only in combination with the letter abbreviation `FG` (fog), e.g. `MIFG`.
* The descriptors `DR` (drifting) and `BL` (blowing) are used only in combination with `SN` (snow), `DU` (dust) and `SA` (sand).
* Drifting is used if the snow, dust or sand is raised less than two metres above ground; if two metres or more, blowing is used.
* If blowing snow (`BLSN`) and snow (`SN`) are occurring together, both are reported but in separate w'w' groups, e.g. `SN BLSN`.
* `SH` (shower) is used only in combination with precipitation types `RA` (rain), `SN` (snow), `PE` (ice pellets), `GR` (hail) and `GS` (snow pellets) if occurring at the time of observation, e.g. `SHPE` or `-SHRAGR`.
* `TS` (thunderstorm) is either reported alone or in combination with one or more of the precipitation types. The end of a thunderstorm is the time at which the last thunder was heard, followed by a 15-minute period with no further thunder.
* (Note: `TS` and `SH` are not used together, since w'w' groups can have only one descriptor.)
* `FZ` (freezing) is used only in combination with the weather types `DZ` (drizzle), `RA` (rain) and `FG` (fog).
* [http://meteocentre.com/doc/metar.html](http://meteocentre.com/doc/metar.html)

## PIREP

* **PIREP (UA)** - Pilot report of observed weather conditions.
* Pilots are pretty good about reporting icing and turbulence
* Good idea when checking in with a controller to state how the ride is
  * "Approach Cessna 12345 level 8,000 light chop"
* Most accurate weather report
* When reading a PIREP, each piece of information is within the forward slashes
* Required info for PIREP: location, time, altitude MSL, type of aircraft, weather encountered.

![Front chart symbols. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 13: Aviation Weather Services](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/15_phak_ch13.pdf) Figure 13-7.](/img/phak/phak-figure-13-7-decoding-pireps.png){width=540}

![ASA Instrument Test Prep Figure 2-3: PIREP form](/img/asa-2022-instrument-test-prep-figure-2-3-pirep.png){width=660}

![Table 3-7 PIREP Weather Type and Symbols](/img/weather-information-systems-3-pirep-symbos.png){width=360}

**PIREP icing reporting levels**

See: [AIM 7-1-19 PIREPs Relating to Airframe Icing](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-19).

1. **Trace Icing**
    * Ice becomes noticeable or perceiptible
    * The rate of accumulation is slightly greater than the rate of sublimation
    * A representative accretion rate for reference purposes is less than 1/4 inch (6 mm) per hour on the outer wing
    * The pilot should consider exiting the icing conditions before they become worse
2. **Light Icing**
    * The rate of ice accumulation requires occasional cycling of manual deicing systems to minimize ice accretions on the airframe
    * A representative accretion rate for reference purposes is 1/4 inch to 1 inch (0.6 to 2.5 cm) per hour on the unprotected part of the outer wing
    * The pilot should consider exiting the icing condition.
    * Problem if flight is prolonged more than one hour, no problem if anti-icing equipment used
3. **Moderate Icing**
    * The rate of ice accumulation requires frequent cycling of manual deicing systems to minimize ice accretions on the airframe
    * A representative accretion rate for reference purposes is 1 to 3 inches (2.5 to 7.5 cm) per hour on the unprotected part of the outer wing
    * The pilot should consider exiting the icing condition as soon as possible.
    * Short encounters are potentially hazardous; anti-icing or diversion is necessary
4. **Severe Icing**
    * The rate of ice accumulation is such that ice protection systems fail to remove the accumulation of ice and ice accumulates in locations not normally prone to icing, such as areas aft of protected surfaces and any other areas identified by the manufacturer
    * A representative accretion rate for reference purposes is more than 3 inches (7.5 cm) per hour on the unprotected part of the outer wing
    * By regulation, immediate exit is required
    * De/anti-icing insufficient to deal with hazard; need immediate diversion

**PIREP turbulence reporting levels**

See: [AIM 7-1-21 PIREPs Relating to Turbulence](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-21).

* **Light**
  * *Momentary* without appreciable changes in altitude or attitude
  * *Note: keyword is momentary*
* **Moderate**
  * Variations in indicated airspeed
* **Severe**
  * Aircraft may be momentarily out of control
* **Extreme**
  * Impossible to control
* **Chop**
  * Rhythmic bumpiness without appreciable changes in altitude or attitude

![[AIM Table 7-1-8 Turbulence Reporting Criteria Table](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html)](/img/turbulence_intensities.png){width=460}

![Icing intensities. [FAA-AC-00-45H Aviation Weather Services](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1030235)](/img/icing_intensities_table.png){width=540}

![Turbulence intensities. [FAA-AC-00-45H Aviation Weather Services](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1030235)](/img/turbulence_intensities_table.png){width=540}

## Freezing Level Charts

* See Aviation Weather Center [Current Freezing Level Forecast](https://www.aviationweather.gov/icing/frzlvl)
* Shows forecast freezing level in 100s of feet MSL for a given forecast window
  * It shows the current freezing level
  * Also shows forecast in windows of 1 hour up to 18 hours out

![Freezing level chart. Aviation Weather Center [Current Freezing Level Forecast](https://www.aviationweather.gov/icing/frzlvl)](/img/awc-freezing-level-chart.jpg){width=440}

* The above seems to have been replaced by [Aviation Weather Center GFA Temperature](https://aviationweather.gov/gfa/#temps)

![Temperature. [https://aviationweather.gov/gfa/#temps](https://aviationweather.gov/gfa/#temps)](/img/gfa-tool-temperature.jpg){width=800}

## Stability Charts

* This used to be the lifted index chart which is no longer produced

## Severe Weather Outlook Charts

* See NOAA's National Weather Service Storm Prediction Center [Convective Outlook Chart](https://www.spc.noaa.gov/products/outlook/)

## TAF

* Terminal Aerodrome Forecast (TAF)
* ==Covers five statute mile radius around an airport==
* ==Each TAF is valid for a 24 or 30-hour time period and is updated four times a day at 0000Z, 0600Z, 1200Z, and 1800Z==
  * 30 hour TAFs are usually at airports that serve long-range aircraft, so they can get their TAFs in more advance before taking off
* Some common
  * `NSW` - No significant weather
  * `SKC` - Sky clear
  * `SLP` - Sea level pressure
  * `TEMPO` - Last for less than an hour and occur during less than half of the time period specified

## Area Forecast

* Area Forecast (FA)
* [aviationweather.gov](https://www.aviationweather.gov) has discontinued textual area forecasts, but it seems they are still on FAA exams
* From [https://www.aviationweather.gov/areafcst](https://www.aviationweather.gov/areafcst):

  > THE TEXT AREA FORECAST FOR THE CONTIGUOUS UNITED STATES HAS BEEN DISCONTINUED. TO GET THE FORECAST FOR THESE AREAS CHECK THE GFA TOOL.

* The FA gives a picture of clouds, general weather conditions, and visual meteorological conditions (VMC) expected over a large area encompassing several states.
* There are six areas for which area forecasts are published in the contiguous 48 states.
* Area forecasts are issued three times a day and are valid for 18 hours.
* Note the difference in valid time of 12 hours for the *forecast* and an additional 6 for the categorical *outlook*
  * I'm not really sure exactly the difference between these two
  * On the FAA exam, they will try to trick based on these two things

## Graphical Forecast for Aviation

* Graphical Forecast for Aviation (GFA)
* See [Aviation Weather Center Graphical Forecast for Aviation](https://www.aviationweather.gov/gfa)
* To replace the textual area forecast (FA)
* Gives a brief summary of the location and movement of fronts, pressure systems, and circulation patterns
* The *forecast* is valid for 12 hours with an additional 6 hours categorical *outlook*
* This tool seems to have replaced many other existing charts and combined them into this page
* See the [help](https://aviationweather.gov/gfa/help/) page to learn more about the tool

![Graphical forecast for aviation. [https://www.aviationweather.gov/gfa](https://www.aviationweather.gov/gfa)](/img/gfa.jpg){width=560}

* Can select
  * Region
  * Forecast time
* Dots represent types of significant weather
  * e.g. 2 dots = light rain
  * See: [Weather Symbols](https://www.aviationweather.gov/metar/symbol) or figure below
* Red wind barb means gusting

![Graphical forecast for aviation symbols](/img/gfa-wx-symbols.jpg){width=560}

![Graphical forecast for aviation [https://www.aviationweather.gov/gfa/plot](https://www.aviationweather.gov/gfa/plot)](/img/gfa_plot_sfc.jpg){width=560}

![Graphical forecast for aviation [https://www.aviationweather.gov/gfa/plot](https://www.aviationweather.gov/gfa/plot)](/img/gfa_plot_clouds.jpg){width=560}

## Winds and Temperatures Aloft

### Textual

* Winds and Temperatures Aloft Forecast - Textual (FD)
* See also the graphical version Winds and Temperatures Aloft Forecast - Graphical (FB)
* See Aviation Weather Center's [Winds/Temps Data](https://aviationweather.gov/data/windtemp/)
* Winds and temps aloft are *forecasts* based on observations made a few hours prior
* Made twice a day based on the radiosonde upper air observations taken at 0000Z and 1200Z
* Format `DDSSTT` where
  * `D` is wind direction
  * `S` is wind speed
  * `T` is temperature
* Example `2321-04` is wind from 230 at 21 knots and temperature -21 &#176;C
* No winds given below 1,000 ft AGL
  * [NATIONAL WEATHER SERVICE INSTRUCTION 10-812](https://www.weather.gov/media/directives/010_pdfs/pd01008012curr.pdf)
* No temp is given for 3,000 ft MSL or when 2,500 ft AGL
* ==Above 24,000 feet all temperatures are negative so minus sign is dropped==
* Wind `9900` means light and variable (less than 5 kts)
* For winds greater than 99 knots, add `50` to the `DD` and subtract 100 from the wind speed to get `SS` values
  * Example: `7545` means winds of 145 knots from 250

### Graphical

* Winds and Temperatures Aloft Forecast - Graphical (FB)
  * See Aviation Weather Center [Aviation Weather Center GFA Winds Aloft](https://aviationweather.gov/gfa/#winds)

![Winds aloft. [https://aviationweather.gov/gfa/#winds](https://aviationweather.gov/gfa/#winds)](/img/gfa-tool-winds-aloft.jpg){width=800}

## Surface Analysis Chart

* See: [NOAA Surface analysis chart](https://www.wpc.ncep.noaa.gov/html/sfc2.shtml)
* Shows pressure systems and fronts, with an overview of winds, temperatures, and dew point.
* Is an *observation*
* Updated every 3 hours
* Valid time, bottom left
* Isobars are spaced 4 mb apart and labeled
  * ==Closer isobars means more wind==
* H, L, Trough, Ridges
* Note: there are many different display formats of the surface analysis chart, including with color or black-and-white, or interactive maps.
* Shows:
  * **Fronts**
  * **Pressure systems** (high - H, low - L) labeled in underline bold pressure in mb
  * **Winds** shown with the lines with barbs
  * **Sky cover** shown
  * **Temperature** and **dew point**

![Surface analysis chart. [http://www.wpc.ncep.noaa.gov/html/sfc2.shtml](http://www.wpc.ncep.noaa.gov/html/sfc2.shtml)](/img/surface_analysis_4.gif){width=560}

![Surface analysis chart legend. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 13: Aviation Weather Services](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/15_phak_ch13.pdf) Figure 13-11](/img/phak/phak-figure-13-11-surface-analysis-chart-legend.png){width=560}

![Surface analysis chart legend. [FAA-AC-00-45H Aviation Weather Services](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1030235)](/img/ac-00-45h-figure-4-3-surface-analysis-chart-symbols.png){width=460}

* *Note: frontolysis is the weakening or dissipation of a front and frontogenesis is the strengthening of the front*

## Weather Depiction Chart

From [FAA-AC-00-45H Aviation Weather Services](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1030235):

> The Weather Depiction Chart is being phased out by the NWS, in favor of newer ceiling and visibility products, like the CVA product.

* However, CVA product seems to have died, or never existed
* A weather depiction chart details surface conditions as derived from METAR and other surface observations.
* Shows areas where conditions are reported above or below VFR weather minimums
* Observation
* Every 3 hours
* Collection of radar weather reports, updated hourly
* Good for: Weather, precipitation, cell movement
* Intensity indicated by symbols located adjacent to precipitation areas
* Arrows denote cell movement

![Weather depiction chart. The chart is no longer available at this link: [https://www.aviationweather.gov/briefing](https://www.aviationweather.gov/briefing)](/img/weather_depiction_2.gif){width=800}

* *Note: a smooth line that is not shaded in encloses an area of MVFR*
* *Note: a smooth line that is shaded inside encloses an area of IFR*

![Weather depiction chart legend.](/img/weather_depiction_legend.jpg){width=360}

![Weather depiction chart. From FIA Supplement Figure 12.](/img/weather-depection-chart-supplement-fig-12.jpg){width=800}

## Prognostic Chart

* See: [Prog Charts](https://aviationweather.gov/gfa/#progchart)
* Map displaying weather forecast.
* Forecast - up to 7 days for surface
* Surface charts show pressure systems and fronts.
* Significant weather charts (surface level, low level, mid level, high level) show:
  * Ceiling and visibility
  * Turbulence
  * Freezing levels
* One of the best uses of a low-level prognostic chart is determining areas to avoid
* *Note: areas of continuous rain are hatched in but I can't find the legend for that anywhere.*
* Example `**` means light snow (see GFA legend above)
* Snapshot of weather expected at specific time
* Low = <FL240 | High = >FL240
* Turbulence, IFR/MVFR/VFR, Ground Feezing Level

![Prog chart: surface](/img/prog_chart_sfc.gif){width=560}

![Prog chart: low](/img/prog_chart_low.gif){width=560}

![Prog chart exam supplement Figure 14.](/img/supplement-fig-14.jpg){width=560}

![Prog chart symbols](/img/prognostic-chart-symbols-1.png){width=360}

## Constant Pressure Analysis

* Gives
  * Wind
  * Observed temperature
  * Temperature/dew point spread
* For a flight at 10,000 MSL use the 700 mb chart
  * This can be figured out roughly by remembering the standard sea level pressure corresponding to 29.92 inHg is 1013.2 mb and using the resulting lapse rate of 33.9 mb per 1000 ft. to get about 700 mb
* It is for "flight levels" because it is at constant pressure levels rather than constant altitude?

![Constant pressure analysis chart. [https://www.aviationweather.gov/briefing](https://www.aviationweather.gov/briefing)](/img/700mb_constant_pressure_chart.gif){width=800}

![Sky cover symbols. Reference unknown.](/img/sky_cover_symbols.gif){width=240}

## Convective Outlook

* Tornado, Hail 1"+, T-storms
* See the National Weather Service Storm Prediction Center [Curent Convective Outlooks](https://www.spc.noaa.gov/products/outlook/)

![Convective Outlook Chart](/img/convective-outlook-chart.jpg){width=560}

![Convective Outlook Chart from testing supplement. Bottom panel indicates severe thunderstorm areas.](/img/test-supplement-convective-outlook-fig-15.jpeg){width=560}

## Radar Weather Report

* Radar Weather Report (SD)
* Doesn't seem to exist anymore
* Gives the following for precipitation
  * Location
  * Type
  * Intensity
  * Trend

## Radar Summary Chart

![Radar summary chart. [https://www.aviationweather.gov/briefing](https://www.aviationweather.gov/briefing)](/img/radar_summary_2.gif){width=800}

## Inflight Weather Advisories

* **Center Weather Advisory (CWA)**
  * Current conditions and/or short term forecast
  * Issued by ARTCCs
  * Valid for 2 hours

## SIGMETS and AIRMETS

* **AIRMET (WA)**:
  * Stands for Airmen's Meteorological Information
  * Less intense than requiring a SIGMET, used in preflight to enhance flight safety.
  * ==Forecasts valid for 6 hours==
  * Issued every 6 hours, as well as unscheduled updates.
  * Include info about IFR, extensive mountain obscuration, turbulence, strong surface winds, icing, freezing levels.
  * *Of operational interest to all aircraft*, ==*potentially hazardous to light aircraft*==
    * Pilots of heavy aircraft aren't really going to worry about AIRMETs
  * Types
    * **Sierra**: describes IFR conditions and/or extensive mountain obscurations
    * **Tango**: Turbulence, sustained surface winds more than 30kts, low level wind shear
    * **Zulu**: Moderate icing and freezing level heights
  * Includes forecast of moderate icing, moderate turbulence, sustained surface winds of 30 knots or greater, widespread areas of ceilings less than 1,000 feet and/or visibilities less than three miles, and extensive mountain obscurement.
  * [https://www.aviationweather.gov/sigmet/help](https://www.aviationweather.gov/sigmet/help)
    * The definition here is a bit different than in PHAK, for example
* **SIGMET (WS)**
  * Significant Meteorological Information [AIM 7-1-6 Inflight Aviation Weather Advisories](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-6)
  * *Weather that is potentially hazardous to all aircraft*
  * ==Forecasts valid for 4 hours==
  * Types
    * Severe icing
    * Severe turbulence / clear air turbulence (CAT)
    * IMC due to sandstorms, volcanic ash
* **Convective SIGMET (WST)**
  * Advises of significant weather due to thunderstorms
  * Severe or greater turbulence, severe icing, low-level wind shear
  * ==*Hazardous to all categories of aircraft*==
  * Issued hourly at H+55
  * ==Forecasts valid for 2 hours==
  * ==Conditions to issue Convective SIGMET==
    * ==Severe thunderstorms due to 50 kts or greater surface winds or hail more than 3/4" in diameter==
    * ==Tornadoes==
    * ==A line of thunderstorms 60+ nm long==
    * ==Severe or embedded thunderstorms for 30+ minutes==
    * ==Area of thunderstorms covering at least 40% of the area concerned== and exhibiting a very strong radar reflectivity or a significant satellite or lightning signature.
* Look up [AIRMETs/SIGMETs](https://www.aviationweather.gov/sigmet) online
* See also [Graphical AIRMETs](https://www.aviationweather.gov/gairmet)

## Appendix

* *All local barometric pressure readings are converted to a sea level pressure*.
  * At an airport at elevation with altimeter setting of 29.92 needs to cause altimeter to read field elevation, as does an airport at sea level with altimeter of 29.92. Thus in these two cases *the same altimeter setting corresponds to a different barometric pressure at the field*.
  * *To achieve this, each station converts its barometric pressure by adding approximately 1 inHg for every 1,000 feet of elevation.*
* ==***Wind directions on weather observations based on true north.***==
* Wind direction is reported by the direction *from which it originates*
* All charts and textual sources (METAR, TAF, winds aloft, surface analysis charts, etc) use true north as the reference.
* ATIS/AWOS/ASOS broadcasts, or any information a controller gives you over the radio, is magnetic.
* From [AIM 7–1–10 Weather Observing Programs](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_1.html#$paragraph7-1-10):

  > Wind direction broadcast over FAA radios is in reference to magnetic north.

::: tip
The general rule regarding weather reported winds are referenced to true or magnetic direction is: if you read it, it's true. If you hear it, it's magnetic.
:::

![Weather station symbols. Reference unknown.](/img/symboles_meteo_en.gif){width=560}

* *Note: In the above chart, to remember that the vertically aligned dots indicate "intermittent" precipitation, the vertical dots is like an "I", for intermittent.*
* Basic definitions used across the different products
  * ==**LIFR**: Low IFR - ceiling less than 500ft and/or visibility less than 1 mile==
  * ==**IFR**: Ceiling 500 to less than 1,000ft and/or visibility 1 to less than 3 miles==
  * ==**MVFR**: Marginal VFR - ceiling 1,000 to 3,000ft and/or visibility 3 to 5 miles==
  * ==**VFR**: Ceiling greater than 3,000ft and visibility greater than 5 miles, sky clear==
  * **Ceiling** is the lowest layer of clouds reported as being *broken or overcast*
    * or the vertical visibility into an obscuration like fog or haze
  * **Visibility** is the greatest horizontal distance at which prominent objects can be viewed with the naked eye
* [https://www.aviationweather.gov/adds/](https://www.aviationweather.gov/adds/)
* [https://www.aviationweather.gov/briefing](https://www.aviationweather.gov/briefing)
* [http://www.wpc.ncep.noaa.gov/html/sfc2.shtml](http://www.wpc.ncep.noaa.gov/html/sfc2.shtml)

![Weather legend](/img/weather-legend.jpg){width=360}
