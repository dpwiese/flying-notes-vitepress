# Precision Approach

This page covers *Task B. Precision Instrument Approach (PA)* from the [FAA-S-8081-9E Flight Instructor Instrument Practical Test Standards](https://www.faa.gov/training_testing/testing/acs/cfi_instrument_pts_9.pdf).

## Precision Approach Definition

::: warning Precision Instrument Approach
Uses a navigation system that provides lateral *and vertical* course guidance.
:::

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

![Quantico PAR](/img/knyg-par.png){width=540}

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

Note from (the older) [FAA-S-ACS-8B](https://www.faa.gov/sites/faa.gov/files/training_testing/testing/acs/instrument_rating_acs_change_1.pdf) regarding the use of LPV approaches in lieu of an ILS:

> Localizer performance with vertical guidance (LPV) minimums with a decision altitude (DA) greater than 300 feet
height above touchdown (HAT) may be used as a nonprecision approach; however, due to the precision of its
glidepath and localizer-like lateral navigation characteristics, an LPV minimums approach can be used to
demonstrate precision approach proficiency if the DA is equal to or less than 300 feet HAT.

The language changed in the more recent [FAA-S-ACS-8C](https://www.faa.gov/training_testing/testing/acs/instrument_rating_airplane_acs_8.pdf):

> The applicant must accomplish a precision approach to the decision altitude (DA) using aircraft navigational equipment
for centerline and vertical guidance in simulated or actual instrument meteorological conditions. A precision approach is a
standard instrument approach procedure to a published decision altitude using provided approved vertical guidance.

## References

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
