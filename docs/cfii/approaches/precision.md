# Precision Approach

This page covers *Task B. Precision Instrument Approach (PA)* from the [FAA-S-8081-9E Flight Instructor Instrument Practical Test Standards](https://www.faa.gov/training_testing/testing/acs/cfi_instrument_pts_9.pdf).

## Precision Approach Definition

* An **Instrument Approach Procedure** is a series of predetermined maneuvers for the orderly transfer of an aircraft operating under instrument flight rules from the beginning of the initial approach to a landing, or to a point from which a landing may be made visually.
* ==A **Precision Instrument Approach** uses a navigation system that provides course *and glidepath* guidance.==

## Types of Precision Approaches (PA)

* **==Instrument Landing System (ILS)==**
  * The "standard" precision approach
  * Has localizer for lateral guidance and glideslope for vertical guidance
  * Requires equipment installed at the airport
* **==Precision Approach Radar (PAR)==**
  * Dedicated radar site with two dishes, one horizontal and one vertical
* **==Localizer Performance with Vertical guidance (LPV)==**
  * Is technically *not* a precision approach but rather an approach with vertical guidance (APV)
  * For our purposes these are flown just like precision approaches, but just have a different name
  * Are not precision approaches because they don't meet ICAO standards (Annex 10)
  * GPS equivalent of ILS
  * Same accuracy (width) as a localizer
  * Requires WAAS-GPS
  * `LPV` on GPS display
  * See overview section on GPS Approaches

## Chart Overview

* ***==Know how to read an instrument approach chart, review charts before flight, and make sure to have the charts during flight==***
* Components of approach chart
  * Margins
  * Briefing strip and procedure notes
  * Plan view
  * Profile view
  * Minimums
  * Airport diagram

![Instrument approach chart. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 1: The National Airspace System Figure 1-10.](/img/ifh/ifh-figure-1-10-approach-chart.jpg){width=540}

## Chart Review

* Review `KHEF ILS RWY 16L` approach chart
* A few notes
  * Triangle `A` and `T`
    * Nonstandard alternate and takeoff minimums
    * Alternate minimums see [Digital Terminal Procedures Publication (d-TPP)/Airport Diagrams](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/)
      * ForeFlight `Procedure` > `Arrival` > `ALTERNATE MINIMUMS`
    * Takeoff minimums see [Digital Terminal Procedures Publication (d-TPP)/Airport Diagrams](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/)
      * ForeFlight `Procedure` > `Departure` > `TAKEOFF MINIMUMS`
  * Note lighting and that is pilot controlled
    * See legend below
    * More on why this is important below
  * Note dark `C` for expanded circling radius
    * See legend in the Terminal Procedures Publication
  * Final approach fix for a precision is glideslope intercept given by lightning bolt symbol
  * Below profile view in the *minimums* strip
    * Altitudes MSL, visibility, then AGL
    * In parentheses for military
  * Note different approach categories
  * Note 3&#176; glideslope and Threshold Crossing Height (TCH) of 58'
  * *For us we are flying down to Decision Altitude (DA)*
  * TDZE is defined as the highest elevation in the first 3,000 feet of the landing surface
  * Airport elevation is defined as the highest point of an airport's usable runways measured in feet from mean sea level.

![Digital Terminal Procedures: KHEF ILS 16R IAP](/img/tpp/dtpp-khef-ils-16r-iap.jpg){width=540}

## Beginning a Precision Approach

* Load the approach
  * Load the full approach and then if getting vectored press "activate vectors to final"
  * That way if ATC changes their mind about vectoring us and wants to send us to a point on the approach, it's already there and ready to go
  * Load the approach on the ground with the flight plan when able
* Dial the localizer frequency into NAV radio
  * This should happen automatically when the approach is loaded
  * Recommend putting the ILS frequency into both NAV radios in case one fails
  * Glideslope comes with "for free"
* Identify the localizer frequency
  * See morse code in plan view of approach chart
  * The G-1000 can identify it for us - see code next to NAV frequency

## Flying an ILS

* The Course Deviation Indicator (CDI) needle indicates where the course is relative to us
  * For example, if the course needle is to the right, the course is to our right
* The glideslope diamond shows the location of the glideslope relative to us
  * For example, if the diamond is above center, the glideslope is above us
* Localizer and glideslope signals get more sensitive the closer we get
* Usually given a heading and told to intercept the localizer
  * Plan accordingly depending on heading given and winds
* Intercept glideslope from below to avoid false glideslope

![G1000 when flying ILS. Reference unknown.](/img/g1000-ils.jpg){width=800}

![Localizer course indications. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 9: Navigation Systems Figure 9-38.](/img/ifh/ifh-figure-9-38-localizer.jpg){width=540}

## Precision Approach Procedures (Cessna 172S)

* When cleared for approach
  * Taxi light on
  * If non-towered field, landing light on also
* When established inbound
  * Mixture rich, timer zeroed
* Half dot above GS/GP intercept
  * 1800 RPM, hold altitude
* At flap speed
  * 10&#176; of flaps
* At GS/GP intercept
  * Adjust pitch to glideslope/glidepath, power to 80 KIAS
* At FAF
  * Start timer, cross check altitude: "GS (or GP) verified"
  * Always start timer at FAF because a plane could enter the ILS critical area on ground and block glideslope, then you can keep flying as localizer approach
  * Also keeps you in habit so you never forget to start the timer when you do need to
* When cleared to land
  * Landing light on
* If criteria not met at Decision Altitude (DA)
  * Execute missed approach

## GPS Approach Overview

* GPS is a type of RNAV
  * Original RNAV system used multiple VORs and DME to determine location and enable the creation of waypoints and routes
    * RNAV is basically dead
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
  * RAIM failure after FAWP (FAF)
    * Go missed immediately
* GPS will give you the lowest minimums it is capable of giving you
* GPS (LNAV, LPV, etc.)
  * If you CAN use LPV minimums, the GPS unit MUST show you "LPV" in the annunciator window.
  * It's possible that you're LPV-equipped, but your annunciator window shows you only "LNAV", for example.
  * To see WAAS status? [FAA William J. Hughes Technical Center WAAS Test Team](https://www.nstb.tc.faa.gov)

## GPS Approach Types

* **LNAV**
  * Original kind of approaches, basically overlay of existing non-precision approaches like VOR or NDB
  * Lateral navigation
  * No vertical guidance
  * `APP`, `APR`, `LNAV` on GPS display
  * "standard" GPS minimums
  * Don't need WAAS
  * 0.3 nm (556 m) lateral limit
  * With the needle centered, will be within 0.3 nm (556 m) of the final approach course 95% of the time
* **LP**
  * GPS equivalent of localizer, more accurate than LNAV, but still no vertical guidance, but falls into WAAS family of approaches
  * 0.02 nm (40 m) lateral limit
  * With the needle centered, will be within 0.02 nm (40 m) of the final approach course 95% of the time
* **LNAV/VNAV**
  * Approach with vertical guidance
  * Requires baro-aided altimeter to get slightly lower minima
  * We don't have any aircraft that support this because it requires more checking of altimeter system
  * In WAAS-equipped aircraft can also fly to LNAV/VNAV minimums, but usually there will be an LPV approach with lower minimums that can be flown instead
* **LPV**
  * Approach with vertical guidance
  * Localizer performance with vertical guidance
  * GPS equivalent of ILS
  * Same accuracy (width) as a localizer
  * `LPV` on GPS display
* **LNAV+V**
  * In plane with WAAS-equipped GPS can be provided an *advisory glidepath* on LNAV non-precision approach to help fly the approach
  * Still responsible for adhering to MDA and do not descent below
  * Advisory glidepath does not ensure obstacle clearance
* GPS overlay approaches
  * `VOR OR GPS RWY 14`
  * Not too common
  * If an approach is in the GPS database but is not a GPS approach
    * You must fly it with NAV radios
    * You may use GPS for reference only
    * Exception is NDB approaches
  * NDB Approaches
    * May be flown solely with GPS if it says `NDB or GPS`
    * Or if you have a working NDB onboard, although you need not monitor it

## Common Errors

* Failure to have essential knowledge of the information on the instrument approach procedure chart
* Incorrect communications procedures or noncompliance with ATC clearances
* Failure to accomplish checklist items
* Faulty basic instrument flying technique
* Inappropriate application of DH/DA

### Operational Errors

* Failure to understand the fundamentals of ILS ground equipment, particularly the differences in course dimensions.
  * Since the VOR receiver is used on the localizer course, the assumption is sometimes made that interception and tracking techniques are identical when tracking localizer courses and VOR radials.
  * Remember that the CDI sensing is sharper and faster on the localizer course.
* Disorientation during transition to the ILS due to poor planning and reliance on one receiver instead of on all available airborne equipment.
  * Use all the assistance available; a single receiver may fail.
* Disorientation on the localizer course, due to the first error noted above.
* Incorrect localizer interception angles.
  * A large interception angle usually results in overshooting and possible disorientation.
  * When intercepting, if possible, turn to the localizer course heading immediately upon the first indication of needle movement.
  * An ADF receiver is an excellent aid to orient you during an ILS approach if there is a locator or NDB on the inbound course.
* Chasing the CDI and glidepath needles, especially when you have not sufficiently studied the approach before the flight.

## Completion Standards

![[FAA-S-ACS-8B Instrument Rating Airplane Airman Certification Standards Change 1](https://www.faa.gov/sites/faa.gov/files/training_testing/testing/acs/instrument_rating_acs_change_1.pdf)](/img/instrument-acs/instrument-acs-vi-b-precision-approach.png){width=540}

## References

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
