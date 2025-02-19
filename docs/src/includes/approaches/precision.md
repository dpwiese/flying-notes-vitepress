## Precision Approach Definition

::: warning Precision Instrument Approach
Uses a navigation system that provides lateral *and vertical* course guidance.
:::

## Types of Precision Approaches (PA)

* **Instrument Landing System (ILS)**
  * The "standard" precision approach
  * Has localizer for lateral guidance and glideslope for vertical guidance
  * Requires equipment installed at the airport
* **Localizer Performance with Vertical guidance (LPV)**
  * Is technically *not* a precision approach but rather an approach with vertical guidance (APV)
  * For our purposes these are flown just like precision approaches, but just have a different name
  * Are not precision approaches because they don't meet ICAO standards (Annex 10)
  * GPS equivalent of ILS
  * Same accuracy (width) as a localizer
  * Requires WAAS-GPS
  * `LPV` on GPS display
  * See overview section on GPS Approaches
* **Precision Approach Radar (PAR)**
  * Dedicated radar site with two dishes, one horizontal and one vertical

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

## Precision Approach Radar

![Fort Worth Naval Air Station Joint Reserve Base radar approach minimums. The No-NOTAM MP: 1230-1530Z++ indicates planned maintanence during the time listed, where the conversion to local time is affected by daylight savings.](/img/tpp/dtpp-knfw-radar-mins.png){width=540}

![Quantico PAR.](/img/tpp/dtpp-knyg-par.png){width=540}

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

### Adherance to Stepdowns Prior to FAF

* If the glideslope is flown *prior to* the final approach fix, the pilot is still required to adhere to altitude restrictions imposed by the stepdowns
* See [InFO 11009](https://www.faa.gov/sites/faa.gov/files/other_visit/aviation_industry/airline_operators/airline_safety/InFO11009.pdf)
