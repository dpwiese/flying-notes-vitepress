# Example 1

```
KIAD 241952Z 31005KT 1/2SM R01R/2000V2800FT FG VV002 07/06 A2946 RMK
AO2 RAE19 SLP978 P0001 T00670061
```

* METAR
* `241952Z`
  * Issuance time
* `31005KT`
  * Winds 310 at 5 knots
* `1/2SM`
  * Half statute mile visibility
* `R01R/2000V2800FT`
  * RVR Runway 01R is variable between 2000 and 2800 feet
* `FG`
  * Fog
* `VV002`
  * Vertical visibility 200 feet
* `07/06`
  * Temperature 7 &#176;C, dewpoint 6 &#176;C
* `A2946`
  * Altimeter setting in inches of mercury
* Remarks
  * `AO2`
    * Automated station without manual augmentation
    * ==Can tell the difference between types of precipitation==
  * `RAE19`
    * Rain ended 19 minutes past the hour
  * `SLP978`
    * Sea Level Pressure in mbar
    * To get Sea Level Pressure need to prepend a `9` or `10`, to get a value that is closest to 1000 mbar
    * In this case we prepend `9` to get `9978` or 997.8 mbar
    * If we prepended a `10` the value would be too large
  * `P0001`
    * Hourly precipitation in hundredths of an inch (0.01 inches) since last METAR
  * `T00670061`
    * ==Hourly temperature 6.7 &#176;C and dewpoint 6.1 &#176;C==
    * The leading `0` of each four digit group indicates the values are positive, a leading `1` indicates the values are negative
