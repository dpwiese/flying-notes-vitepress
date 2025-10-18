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
  * See below for some specific examples

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

## Interesting Approaches

### Better LNAV/VNAV Minimums

* Approaches where LNAV/VNAV minimums are lower than the corresponding LPV minimums.
  * `KTTA RNAV (GPS) RWY 21`
  * `KRNO RNAV (GPS) X RWY 17L`
  * `KSCX RNAV (GPS) RWY 5`
  * `KPHK RNAV (GPS) RWY 36`
  * `KHZR RNAV (GPS) RWY 18`
* While LPV does enable lower minimums than LNAV/VNAV, due to some specifics of how the approaches are designed there are cases where LNAV/VNAV minumums end up being lower.

![KTTA RNAV (GPS) RWY 21. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/ktta-rnav-gps-rwy-21.png){width=600 border=true}

![KRNO RNAV (GPS) X RWY 17L. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/krno-rnav-gps-x-rwy-17l.png){width=600 border=true}

![KSCX RNAV (GPS) RWY 5. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/kscx-rnav-gps-rwy-5.png){width=600 border=true}

![KPHK RNAV (GPS) RWY 36. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/kphk-rnav-gps-rwy-36.png){width=600 border=true}

![KHZR RNAV (GPS) RWY 18. The LNAV/VNAV minimums are lower than the corresponding LPV minimums.](/img/iap/khzr-rnav-gps-rwy-18.png){width=600 border=true}

![Avidyne IFD540 simulator, selecting an approach at KHZR. Interestingly on this approach, LPV minima exist, and LNAV/VNAV minima are even lower, but the (simulator) only offers LNAV+V.](/img/ifd540-khzr-approaches.jpg){width=440}

### Vertical Guidance Higher Visibility

* Approaches where vertical guidance (provided by LNAV/VNAV) gives a lower DA (than the corresponding LNAV MDA) but requires higher visibility.
  * `KMKO RNAV (GPS) RWY 4`
  * `PAUT RNAV (GPS) RWY 27`

![KMKO RNAV (GPS) RWY 4. The LNAV/VNAV gives a DA below the LNAV MDA, but with higher visibility minimums.](/img/iap/kmko-rnav-gps-rwy-4.png){width=600 border=true}

![PAUT RNAV (GPS) RWY 27. The LNAV/VNAV gives a DA below the LNAV MDA, but with higher visibility minimums.](/img/iap/paut-rnav-gps-rwy-27.png){width=600 border=true}

### Only LNAV/VNAV Vertical Guidance

* Approaches where only LNAV/VNAV is available for vertical guidance and not LPV.
  * `KSTL RNAV (GPS) RWY 6`
  * `PHKO RNAV (GPS) Y RWY 17`
  * `KLGA RNAV (GPS) Y RWY 31`
* These approaches aren't particularly interesting, but worth reviewing and understanding before flying these appraoches, if the airplane used has the capability to fly LNAV/VNAV.
  * In many GA planes this ability is provided by WAAS.
  * Always check and understand aircraft capabilities before planning a particular approach.

![KSTL RNAV (GPS) RWY 6. WAAS cannot be used for VNAV vertical guidance.](/img/iap/kstl-rnav-gps-rwy-6.png){width=600 border=true}

![PHKO RNAV (GPS) Y RWY 17. WAAS cannot be used for VNAV vertical guidance.](/img/iap/phko-rnav-gps-y-rwy-17.png){width=600 border=true}

![KLGA RNAV (GPS) Y RWY 31. Only LNAV/VNAV is available for vertical guidance.](/img/iap/klga-rnav-gps-y-rwt-31.png){width=600 border=true}

### WAAS Cannot be used for VNAV

* Approaches where WAAS *cannot* be used for VNAV vertical guidance
  * `TJSJ RNAV (GPS) RWY 10`
* This is an interesting case to note in the context of the section above, whereby if the aircraft being used has VNAV capabilities provided only by WAAS, then the VNAV minimum cannot be used.
* If the aircraft has Baro-VNAV, that _can_ be used for vertical guidance

![TJSJ RNAV (GPS) RWY 10. WAAS cannot be used for VNAV vertical guidance.](/img/iap/tjsj-rnav-gps-rwy-10.png){width=600 border=true}

### Circling Only GPS Approaches

* Relatively uninteresting, but despite the fact that GPS approaches are _not_ constrained in their design by ground-based navaids, and therefore seems they should always be designed as straight-in approaches, terrain or other factors might constrain them to being circling-only approaches as below.

![KTRK RNAV (GPS)-A.](/img/iap/ktrk-rnav-gps-a.png){width=600 border=true}

### Bad LNAV/VNAV Minimums

* This is an interesting case where the LNAV/VNAV approach (despite providing vertical guidance) are significantly higher than the the other approaches without vertical guidance, including the LNAV only.
  * `KMDT RNAV (GPS) RWY 13` - LNAV/VNAV minimums just seem _bad_ relative to other options

![KMDT RNAV (GPS) RWY 13. The LNAV/VNAV visibility and DA are significantly higher than the LNAV visbility and MDA.](/img/iap/kmdt-rnav-gps-rwy-13.png){width=600 border=true}

## RNP and PBN on Approaches

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

![PAKT ILS or LOC Z RWY 11. Note that despite being an ILS approach, the equipment requirement notes RNP APCH - GPS, RF, ADF, and DME. Per FAA-AC-90-108, a suitable RNAV system can be used in lieu of ADF.](/img/iap/pakt-ils-loc-z-rwy-11.png){width=600 border=true}

![KHAO ILS or LOC RWY 29. Note that GPS is required to fly the missed approach procedure.](/img/iap/khao-ils-loc-rwy-29.png){width=600 border=true}

#### RF Required but no Authorization

![KRNO ILS Z or LOC Z RWY 17R. RF is required from HOBOA to KLOCK but authorization is not.](/img/iap/krno-ils-z-rwy-17r.png){width=600 border=true}

![KCRQ RNAV (GPS) X RWY 24. RF is required. Note this requirement is not stated in an equipment requirements box, but rather in the notes. However, the nature of this approach (that the RF leg exists prior to the IF) might raise the question whether this approach can be flown in an aicraft that is not approved to fly RF legs if vectors to final can be received. In this case, however, it seems to be a moot point, as the KCRQ RNAV (GPS) Y RWY 24 exists, which is identical from the IF onward.](/img/iap/kcrq-rnav-gps-z-rwy-24.png){width=600 border=true}

![KCRQ RNAV (GPS) Y RWY 24. Note the comparison to the KCRQ RNAV (GPS) X RWY 24 above.](/img/iap/kcrq-rnav-gps-y-rwy-24.png){width=600 border=true}

### RNP Authorization Required

* The plate will say RNP AR in equipment box and/or be titled `RNAV (RNP)`
  * `KLAX RNAV (RNP) Z RWY 24R`
  * `KCRQ RNAV (RNP) Z RWY 24`
* See [FAA-AC-90-101A](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-101A_CHG_1.pdf)

![KLAX RNAV (RNP) Z RWY 24R. Note in the equipment requirements it explicitly states RNP AR APCH-GPS.](/img/iap/klax-rnav-rnp-z-rwy-24r.png){width=600 border=true}

![KCRQ RNAV (RNP) Z RWY 24. Note the absence of the equipment requirements, but the title and "Authorization Required" below the minimums indicates this is an AR approach. Compare this to the KCRQ RNAV (GPS) X RWY 24 and KCRQ RNAV (GPS) Y RWY 24 above. Despite needing authorization, the minimums are significantly higher.](/img/iap/kcrq-rnav-rnp-z-rwy-24.png){width=600 border=true}

* Why would AR approaches be flown when seemingly better ones exist that _don't_ require authorization?
  * `KLAX RNAV (GPS) Y 25L`
  * `KLAX RNAV (RNP) Z 25L`

## Baro-VNAV

* The Piper Archer with G1000 NXi, as an example, uses SBAS (WAAS) as its primary method of vertical navigation
* Certain approaches such as the `TJSJ RNAV (GPS) RWY 10` shown above indicates in the notes that `WAAS VNAV NA`, indicating in this case that WAAS is not authorized for vertical nagivation.
* In the case of the Piper Archer with G1000 NXi, it does have Baro-VNAV which can be used to provide vertical navigation.

![G1000 NXi Pilot's Guide for the PA-28-181 Archer. Vertical guidance.](/img/g1000nxi-pilots-guide/page-36-vertical-guidance.png){width=800 border=true}

![G1000 NXi Pilot's Guide for the PA-28-181 Archer. Compensated Baro-VNAV.](/img/g1000nxi-pilots-guide/page-275-compensated-baro-vnav.png){width=800 border=true}

![G1000 NXi approach with Baro-VNAV  on the KJWY RNAV (GPS) RWY 18. This was accomplished by manually disabling SBAS.](/img/g1000-baro-vnav.jpg){width=700}
