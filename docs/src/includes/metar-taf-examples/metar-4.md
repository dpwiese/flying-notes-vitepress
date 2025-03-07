# Example 4

```
SPECI KDAL 041140Z COR 30034G68KT 3/4SM R13L/2800VP6000FT +TSRA BR SQ
FEW011 BKN017 OVC023CB 11/10 A2953 RMK A02 PK WND 29068/1134 WSHFT 1121
TSB10 FRQ LTGICCC ALQDS TS ALQDS MOV NE P0012 T01060100
```

* `SPECI`
  * Special issuance METAR
* `KDAL`
  * Dallas Love Field
* `041140Z`
  * Issuance time
* `COR`
  * Corrected observation (as opposed to automated)
* `30034G68KT`
  * Winds
* `3/4SM`
  * Visibility
* `R13L/2800VP6000FT`
  * RVR
* `+TSRA BR SQ`
  * Heavy thunderstorms, rain, squalls
* `FEW011 BKN017 OVC023CB`
  * Clouds
* `11/10`
  * Temp and dewpoint in Celcius
* `A2953`
  * Altimeter setting in inHg
* Remarks
  * `A02`
    * Automated station without manual augmentation
    * ==Can tell the difference between types of precipitation==
  * `PK WND 29068/1134`
    * Peak wind 290 at 68 knots that occured at 1134Z
  * `WSHFT 1121`
    * Wind shifted at 1121Z
  * `TSB10`
    * Thunderstorms began 10 minutes past the hour (1110Z)
  * `FRQ LTGICCC ALQDS`
    * Frequent lightning in clouds, cloud-to-cloud, in all quadrants
  * `TS ALQDS MOV NE`
    * Thunderstorms in all quadrants moving northeast
  * `P0012`
    * Hourly precipitation in hundredths of an inch (0.01 inches) since last METAR
  * `T01060100`
    * ==Hourly temperature 10.6 &#176;C and dewpoint 10.0 &#176;C==
    * The leading `0` of each four digit group indicates the values are positive, a leading `1` indicates the values are negative
