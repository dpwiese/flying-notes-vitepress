# METAR

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

## Decoding

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

<!--@include: ./docs/src/includes/metar-taf-examples/metar-1.md | shift:1-->
<!--@include: ./docs/src/includes/metar-taf-examples/metar-2.md | shift:1-->
<!--@include: ./docs/src/includes/metar-taf-examples/metar-3.md | shift:1-->
<!--@include: ./docs/src/includes/metar-taf-examples/metar-4.md | shift:1-->
