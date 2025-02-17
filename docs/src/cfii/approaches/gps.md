# GPS Approaches

## Overview

* GPS is a type of RNAV
  * Original RNAV system used multiple VORs and DME to determine location and enable the creation of waypoints and routes
    * Non-GPS RNAV is essentially no longer used
  * With GPS you can shoot any RNAV approach, e.g. `RNAV (GPS) RWY 33`
  * Other RNAV systems cannot shoot GPS-only approaches, e.g. `GPS RWY 15`
  * In practice, RNAV is equivalent to GPS
* GPS approach use
  * GPS MUST have sequenced into approach mode by the final approach waypoint (FAWP) aka FAF
    * If not pilot must proceed MAP at the next published altitude higher than the MDA
    * In WAAS-equipped planes also make sure the glidepath indicator is shown
  * RAIM failure before FAWP (FAF)
    * Must go missed
    * May not descend to MDA
    * See [AIM 1-1-17(b)(5)(g)(6)](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#aim0101.html.28) and more in RAIM section below
  * RAIM failure after FAWP (FAF)
    * Go missed immediately
* GPS will give you the lowest minimums it is capable of giving you
* GPS (LNAV, LPV, etc.)
  * If you CAN use LPV minimums, the GPS unit MUST show you "LPV" in the annunciator window.
  * It's possible that you're LPV-equipped, but your annunciator window shows you only "LNAV", for example.
  * To see WAAS status? [FAA William J. Hughes Technical Center WAAS Test Team](https://www.nstb.tc.faa.gov)

## GPS Approach Types

### LNAV

* Original kind of approaches, basically overlay of existing non-precision approaches like VOR or NDB
* Lateral navigation
* No vertical guidance
* `APP`, `APR`, `LNAV` on GPS display
* "standard" GPS minimums
* Don't need WAAS
* 0.3 nm (556 m) lateral limit
* With the needle centered, will be within 0.3 nm (556 m) of the final approach course 95% of the time

### LP

* GPS equivalent of localizer, more accurate than LNAV, but still no vertical guidance, but falls into WAAS family of approaches
* 0.02 nm (40 m) lateral limit
* With the needle centered, will be within 0.02 nm (40 m) of the final approach course 95% of the time

### LNAV/VNAV

* Approach with vertical guidance
* Requires baro-aided altimeter or appropriately certified WAAS GPS
* Typically has minimums that are higher than LPV minimums, but occasionally LNAV/VNAV minimums are below those for LPV
  * `KHZR RNAV (GPS) RWY 18`
  * `KTTA RNAV (GPS) RWY 21`
  * `KRNO RNAV (GPS) X RWY 17L`
  * `KSXW RNAV (GPS) RWY 5`

### LPV

* Approach with vertical guidance
* Localizer performance with vertical guidance
* GPS equivalent of ILS
* Same accuracy (width) as a localizer
* `LPV` on GPS display

### LNAV+V

* In plane with WAAS-equipped GPS can be provided an *advisory glidepath* on LNAV non-precision approach to help fly the approach
* Still responsible for adhering to MDA and do not descent below
* Advisory glidepath does not ensure obstacle clearance

### GPS overlay approaches

* `VOR OR GPS RWY 14`
* Not too common
* If an approach is in the GPS database but is not a GPS approach
* You must fly it with NAV radios
* You may use GPS for reference only
* Exception is NDB approaches
* NDB Approaches
* May be flown solely with GPS if it says `NDB or GPS`
* Or if you have a working NDB onboard, although you need not monitor it

## GPS Approach Nuances

### Interesting Approach Minima

* Approaches where LNAV/VNAV minimums are lower than the corresponding LPV minimums
  * `KHZR RNAV (GPS) RWY 18`
  * `KTTA RNAV (GPS) RWY 21`
  * `KRNO RNAV (GPS) X RWY 17L`
  * `KSCX RNAV (GPS) RWY 5`
* Approaches where vertical guidance gives a lower DA but requires higher visibility
  * `KMKO RNAV (GPS) RWY 4`
  * `PAUT RNAV (GPS) RWY 27`
* Approaches where only LNAV/VNAV is available for vertical guidance and not LPV
  * `KSTL RNAV (GPS) RWY 6`
  * `PHKO RNAV (GPS) Y RWY 17`
  * `KLGA RNAV (GPS) Y RWY 31`
* Approaches where WAAS *cannot* be used for VNAV vertical guidance
  * `TJSJ RNAV (GPS) RWY 10`
* Others
  * `KMDT RNAV (GPS) RWY 13` - LNAV/VNAV minimums just seem _bad_ relative to other options

![KHZR RNAV (GPS) RWY 18. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/khzr-rnav-gps-rwy-18.png){width=600}

![Avidyne IFD540 simulator, selecting an approach at KHZR. Interestingly on this approach, LPV minima exist, and LNAV/VNAV minima are even lower, but the (simulator) only offers LNAV+V.](/img/ifd540-khzr-approaches.jpg){width=440}

![KTTA RNAV (GPS) RWY 21. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/ktta-rnav-gps-rwy-21.png){width=600}

![KRNO RNAV (GPS) X RWY 17L. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/krno-rnav-gps-x-rwy-17l.png){width=600}

![KSCX RNAV (GPS) RWY 5. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/kscx-rnav-gps-rwy-5.png){width=600}

![KMKO RNAV (GPS) RWY 4. The LNAV/VNAV gives a DA below the LNAV MDA, but with higher visibility minimums.](/img/iap/kmko-rnav-gps-rwy-4.png){width=600}

![PAUT RNAV (GPS) RWY 27. The LNAV/VNAV gives a DA below the LNAV MDA, but with higher visibility minimums.](/img/iap/paut-rnav-gps-rwy-27.png){width=600}

![KLGA RNAV (GPS) Y RWY 31. Only LNAV/VNAV is available for vertical guidance.](/img/iap/klga-rnav-gps-y-rwt-31.png){width=600}

![KSTL RNAV (GPS) RWY 6. WAAS cannot be used for VNAV vertical guidance.](/img/iap/kstl-rnav-gps-rwy-6.png){width=600}

![PHKO RNAV (GPS) Y RWY 17. WAAS cannot be used for VNAV vertical guidance.](/img/iap/phko-rnav-gps-y-rwy-17.png){width=600}

![TJSJ RNAV (GPS) RWY 10. WAAS cannot be used for VNAV vertical guidance.](/img/iap/tjsj-rnav-gps-rwy-10.png){width=600}

![KMDT RNAV (GPS) RWY 13. The LNAV/VNAV visibility and DA are significantly higher than the LNAV visbility and MDA.](/img/iap/kmdt-rnav-gps-rwy-13.png){width=600}

* On PBN approach minima: [FAA Order 8260.58D](https://www.faa.gov/documentLibrary/media/Order/Order_8260.58D.pdf)
* On approach plate definitions: [FAA Order 8260.19H](https://www.faa.gov/documentLibrary/media/Order/Order_8260.19H.pdf).

### RNP Equipment Requirements

*  `RNP APCH - GPS`, to signify that the RNP APCH requirements must be met using GPS and not some other RNAV method
  * Reference for this?
* Most other approaches list `RNP APCH`
* Systems which satisfy RNP requirement _without_ GPS include
  * DME/DME/IRU on B757/B767

#### RNP Required on ILS and Other Approaches

* In these cases `RNP APCH - GPS` may be required, even though final approach course guidance might be ILS, for example

![PAKT ILS or LOC Z RWY 11. Note that despite being an ILS approach, the equipment requirement notes RNP APCH - GPS, RF, ADF, and DME. Per FAA-AC-90-108, a suitable RNAV system can be used in lieu of ADF.](/img/iap/pakt-ils-loc-z-rwy-11.png){width=600}

![KHAO ILS or LOC RWY 29. Note that GPS is required to fly the missed approach procedure.](/img/iap/khao-ils-loc-rwy-29.png){width=600}

#### RF Required but no Authorization

![KRNO ILS Z or LOC Z RWY 17R. RF is required from HOBOA to KLOCK but authorization is not.](/img/iap/krno-ils-z-rwy-17r.png){width=600}

![KCRQ RNAV (GPS) X RWY 24. RF is required. Note this requirement is not stated in an equipment requirements box, but rather in the notes. However, the nature of this approach (that the RF leg exists prior to the IF) might raise the question whether this approach can be flown in an aicraft that is not approved to fly RF legs if vectors to final can be received. In this case, however, it seems to be a moot point, as the KCRQ RNAV (GPS) Y RWY 24 exists, which is identical from the IF onward.](/img/iap/kcrq-rnav-gps-z-rwy-24.png){width=600}

![KCRQ RNAV (GPS) Y RWY 24. Note the comparison to the KCRQ RNAV (GPS) X RWY 24 above.](/img/iap/kcrq-rnav-gps-y-rwy-24.png){width=500}

### RNP Authorization Required

* The plate will say RNP AR in equipment box and/or be titled `RNAV (RNP)`
  * `KLAX RNAV (RNP) Z RWY 24R`
  * `KCRQ RNAV (RNP) Z RWY 24`
* See [FAA-AC-90-101A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-101A_CHG_1.pdf)

![KLAX RNAV (RNP) Z RWY 24R. Note in the equipment requirements it explicitly states RNP AR APCH-GPS.](/img/iap/klax-rnav-rnp-z-rwy-24r.png){width=600}

![KCRQ RNAV (RNP) Z RWY 24. Note the absence of the equipment requirements, but the title and "Authorization Required" below the minimums indicates this is an AR approach. Compare this to the KCRQ RNAV (GPS) X RWY 24 and KCRQ RNAV (GPS) Y RWY 24 above. Despite needing authorization, the minimums are significantly higher.](/img/iap/kcrq-rnav-rnp-z-rwy-24.png){width=600}

* Why would AR approaches be flown when seemingly better ones exist that _don't_ require authorization?
  * `KLAX RNAV (GPS) Y 25L`
  * `KLAX RNAV (RNP) Z 25L`

### Circling Only GPS Approaches

![KTRK RNAV (GPS)-A.](/img/iap/ktrk-rnav-gps-a.png){width=500}
