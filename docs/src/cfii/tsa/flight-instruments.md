# Aircraft Flight Instruments and Navigation Equipment

This page covers *Task A. Aircraft Flight Instruments and Navigation Equipment* from the [FAA-S-8081-9E Flight Instructor Instrument Practical Test Standards](https://www.faa.gov/training_testing/testing/acs/cfi_instrument_pts_9.pdf).

## Flight Instrument Systems and Their Operating Characteristics

### Pitot-Static System

* Alternate static source
  * Due to the venturi effect of the air flowing around the fuselage, *the air pressure inside the flight deck is lower* than the exterior pressure.
* Altimeter
  * The indicated altitude is correct, however, only when the sea level barometric pressure is standard (29.92 inHg), the sea level free air temperature is standard (15 &#176;C or 59 &#176;F), and the pressure and temperature decrease at a standard rate with an increase in altitude.
  * Can adjust the altimeter for nonstandard pressure but not temperature
    * True altitude thus varies with temperature
    * Higher temps means true altitude is higher than indicated and lower temps means true altitude is lower than indicated
    * Recall "hot-to-cold look out below"
    * Beware obstacle clearance especially when flying in colder temps
  * Mental model: altimeter setting provides true datum at ground level of the reporting station. Then consider the pressure gradient (which decreases with altitude). Compared to the standard pressure gradient, the pressure gradient in colder more dense air will decrease more quickly, and in hot air the pressure gradient will decrease less quickly.
* Vertical Speed Indicator (VSI)
* Airspeed Indicator (ASI)
  * Lower limits of green and white arc are power-off stall speeds
  * Other speeds not here are, for example, $V_{a}$, $V_{g}$, and $V_{\text{LE}}$
  * The same behavior described by "hot-to-cold look out below" for the altimeter applies to the airspeed indicator as well - when flying to a warmer area, for example, true airspeed will increase (given a constant power setting and true altitude)
* Failure modes

![Pitot static system and instruments. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-1.](/img/phak/phak-figure-8-1-pitot-static-system.jpg){width=500}

![Altimeter. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-2.](/img/phak/phak-figure-8-2-altimeter.jpg){width=360}

![Vertical Speed Indicator (VSI). [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-5.](/img/phak/phak-figure-8-5-vertical-speed-indicator.png){width=360}

![Airspeed indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-7.](/img/phak/phak-figure-8-7-airspeed-indicator.png){width=360}

![Airspeed indicator markings. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-8.](/img/phak/phak-figure-8-8-airspeed-indicator-markings.png){width=360}

![Pitot static system failure modes and instrument indications. Reference unknown.](/img/broken-pitot-static-instruments-table.png){width=400}

### Attitude Indicator

* Also known as artificial horizon
* Principles
  * Rigidity in space
  * Precession
* Electrically or vacuum powered
  * What is in POH might have changed and need to consult supplements, e.g. G5 attitude indicator using solid state (electrically powered) gyro instead of vacuum powered.
* Due to friction, gyroscopic instruments can drift and need to be reset periodically (for example heading indicator to compass)
  * For example, check and reset every 15 minutes
* Certain gyroscopic instruments have specific pitch and bank limits that induce a tumble of the gyro.
* Modern systems such as G5 or G1000 use solid-state devices instead of spinning gyros to determine the aircraft attitude

![Attitude indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-23.](/img/phak/phak-figure-8-23-attitude-indicator.png){width=400}

### Heading Indicator / Horizontal Situation Indicator / Radio Magnetic Indicator

* **Heading indicator**
  * Also known as **directional gyro**
  * Usually powered by the aircraft vacuum system
  * Gyroscopic rigidity keeps them fixed in space, but need to be periodically set to the compass
  * Errors in compass make it hard to use to turn to specific headings, especially in turbulent air - heading indicator helps with this
  * Some heading indicators referred to as **horizontal situation indicators** (HSI) receive a magnetic north reference from a magnetic slaving transmitter and generally need no adjustment.
    * See also: remote indicating compass
* **Radio magnetic indicator** (RMI)
* Modern systems use an Altitude Heading Reference System (AHRS) to determine the aircrafts heading that incorporate a magnetometer in them

![Heading indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-25.](/img/phak/phak-figure-8-25-heading-indicator.jpg){width=400}

### Magnetic Compass

*Note: much of the tendencies described below are specific to the northern hemisphere and the opposite behavior would occur in the southern hemisphere.*

* **Variation**
  * The difference between true and magnetic directions
* **Deviation**
  * Created by local magnetic field around aircraft
* **Dip**
  * Magnetic field isn't in the plane of the aircraft, so it tends to pull compass down
  * Only really an issue near magnetic poles, and minimum at magnetic equator
* **Oscillation**
  * Combination of all other errors
* **Acceleration / Turning**
  * These are related to, or manifestations of dip errors
  * Recall ANDS/UNOS
  * Accelerate North Decelerate South
    * This acronym indicates the *error* we would see - that is during accelerations on an easterly or westerly heading, we would see the compass falsely turn towards north when accelerating and falsely turn towards south when decelerating.
    * Causes errors when accelerating and decelerating on easterly and westerly headings
    * Acceleration causes an indication toward north, deceleration causes an indication toward south
  * Undershoot North Overshoot South
    * When turning from a northerly heading the compass will undershoot and initially show a turn in the opposite direction - undershooting the initial heading change
    * When turning from a southerly heading, the compass will overshoot and initially show a turn in the correct direction that is greater than the actual initial heading change
    * e.g. a northerly turn should be stopped prior to arrival at the desired heading

![Compass dip (unknown reference)](/img/figure-18-9-compass-dip.png){width=440}

![Vertical card compass. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 5: Flight Instruments Figure 5-22.](/img/ifh/ifh-figure-5-22-vertical-compass.jpg){width=340}

The explanation in [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) regarding compass dip-correction weights doesn't make sense.
It states:

> This is done by lowering the center of gravity below the pivot point and making the assembly heavy enough that the vertical component of the magnetic force is too weak to tilt it significantly out of the horizontal plane.

But literally the sentence after it states:

> Because the dip angle is of no navigational interest, the compass is made so that it can rotate only in the horizontal plane.

So if the compass can only rotate in the horizontal ($x-y$) plane of the aircraft, it's not clear why the location of the compass card CG in the $z$ direction is of any consequence.
Also not that this explanation of compass design in [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) is different than in older FAA handbooks.
For example, in a previous FAA-H-8083-15A Instrument Flying Handbook from 2008 on page 3-14 and in a previous FAA-H-8083-25A Pilot's Handbook of Aeronautical Knowledge also from 2008 on page 7-25, the same paragraph appears:

> In acceleration error, the dip-correction weight causes the end of the float and card marked N (the south-seeking end) to be heavier than the opposite end. When the aircraft is flying at a constant speed on a heading of east or west, the float and card is level. The effects of magnetic dip and the weight are approximately equal. If the aircraft accelerates on a heading of east [Figure 3-21], the inertia of the weight holds its end of the float back and the card rotates toward north. As soon as the speed of the aircraft stabilizes, the card swings back to its east indication. If, while flying on this easterly heading, the aircraft decelerates, the inertia causes the weight to move ahead and the card rotates toward south until the speed again stabilizes.

It's also not reasonable to expect that compass technology has changed in the 8 years between the current and former edition of the PHAK.
But more importantly, there is no physical basis for the explanation in the current PHAK.
Also browsing Aircraft Spruce, the compasses require selection of northern or southern hemisphere, indicating presumably the asymmetric dip-correction weight.

There seem to be other compass types, and different ways to accommodate dip error without a weight on one of the compass "seeking" ends.
==However, for the purposes of understanding compass errors, the mental model of a weight opposite the "seeking" end is probably the best.==

* Charts and magnetic variation
  * **==The E/W variation on isogonic lines indicates where you would end up relative to true north if you followed your compass north.==**
  * Thinking back to private pilot flight planning with the flight plan form and manually charting on a sectional chart, we want to navigate based on true directions. If magnetic north and true north were collocated, life would be good. They are not, so we need to correct for magnetic directions so that we can navigate by true directions.
  * Note: Figure 45 in the [FAA-CT-8080-5H Instructor Knowledge Test Supplement](https://www.faa.gov/training_testing/testing/supplements/media/flight_ground_instructor_akts.pdf) shows the sectional chart around Corpus Christi TX and easterly magnetic variation, in case that is helpful to remember anything on the test.
  * By convention, magnetic variation is *positive when magnetic north is east of true north*, and *negative when it is to the west*.
    * In other words, if we are trying to fly to true north from Corpus Christi (which indicates an easterly magnetic variation) using our compass, we would *end up east of true north*. This is how to think about easterly / westerly magnetic variation - *it's where you would end up relative to true north if you followed your compass north.*
    * So, in this case we would need a more westerly heading to actually end up at true north.
  * TC +W/-E Var = MC +R/-L WCA = MH (this is what we do on flight plan form)
    * Remember for the test it is *subtract E and L* and *add W and R* when going *from TC to MC*
    * It is the opposite when going the other way
* When measuring true course on a line drawn on a sectional chart, measure the course angle at the midpoint of the line
* The `K` identifier in front of airports is for ICAO recognized airports that are located in the contiguous United States

![Notice easterly magnetic variation on isogonic line. This means that if you took off from Corpus Christi and pointed your aircraft to compass north, you would end up east of true north. CFI test supplement CT-8080-5H.](/img/test-supplement-cfi-figure-45.jpg){width=440}

![Isogonic lines. PHAK Figure 8-33.](/img/phak/phak-figure-8-33-cropped-isogonic-lines.jpg){width=440}

### Turn-and-Slip Indicator / Turn Coordinator

* **Turn coordinator**
  * Roll rate (initially)
  * Rate of turn (after it stabilizes)
  * Quality of turn
  * Contains **inclinometer** - the ball - "step on the ball" to coordinate flight
* **Turn and slip indicator**
  * Rate of turn
  * Quality of turn

![Turn indicators. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-21.](/img/phak/phak-figure-8-21-turn-indicators.jpg){width=540}

### Electrical System

* Most planes 14 or 28 volt (DC) systems
* Alternator or generator supplies power
  * Alternator provides more power than a generator at a lower RPM
  * One of the basic differences between a generator and an alternator is the number of magnetic poles used to produce the electricity. Generators normally have 2 or 4 poles, while alternators have between 8 and 14 poles. The larger number of poles allows an alternator to produce its electrical power at a lower engine RPM than a generator.
* Batteries store power
* Receptacle to connect plane to external power
  * Good for cold weather starting
* Bus bar as common point for powered connections
* Fuses / breakers
* Ammeter
  * Positive is charging, negative is discharging

![Master switch. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-33.](/img/phak/phak-figure-7-33-master-switch.png){width=300}

![Ammeter and loadmeter. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-35.](/img/phak/phak-figure-7-35-ammeter-loadmeter.png){width=380}

![Starting circuit. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-20.](/img/phak/phak-figure-7-20-starting-circuit.png){width=400}

![Electrical system. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-34.](/img/phak/phak-figure-7-34-electrical-system.jpg){width=800}

### Vacuum System

![C172M Vacuum system diagram. Note the heading indicator and attitude indicator are powered by the vacuum system.](/img/c172m-poh-vacuum-system.jpg){width=600}

![Typical vacuum system. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-20.](/img/phak/phak-figure-8-20-typical-vacuum-system.jpg){width=600}

### Electronic Engine Instrument Display {#task-a-1-h}

* Tachometer
* Oil pressure
* Oil temperature
* EGT
* Vacuum
* More

![G1000 MFD with engine instrument display. [High Performance Aviation](https://www.flyhpa.com/2010/10/g1000-descent-planning/).](/img/g1000-mfd.jpg){width=600}

### Primary Flight Display {#task-a-1-i}

PFDs provide increased situational awareness (SA) to the pilot by replacing the traditional six instruments used for instrument flight with an easy-to-scan display that provides the horizon, airspeed, altitude, vertical speed, trend, trim, rate of turn among other key relevant indications.

![G1000 Primary Flight Display (PFD). [Cessna Support](https://support.cessna.com/docs/custsupt/GarminExpertSystem/525%20G1000/525_G1000_PFD1_LRU_Page.html).](/img/g1000-pfd.jpg){width=500}

## Navigation Equipment and Their Operating Characteristics

See [Ground Based Navigation](/cfii/tsa/flight-instruments#ground-based-navigation)

### Instrument Landing System (ILS)

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 9: Navigation Systems
    * Page 9-35: Instrument Approach Systems
* [AIM 1-1-9 Instrument Landing System](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-9)

* Provides
  * Guidance information
    * Localizer
      * Up to 18 nm
    * Glide slope
      * Up to 10 nm
  * Range information
    * Marker beacons
      * See below
    * DME
  * Visual information
    * Approach lights
    * Runway and touchdown lights
* Marker beacons
  * Outer Marker (OM)
    * Indicates glideslope intercept
  * Middle Marker (MM)
    * Usually 3,500 ft from landing threshold
    * Glidepath 200 ft above touchdown zone elevation
  * Inner Marker (IM)
    * For Category II ILS

![Instrument landing system. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 9: Navigation Systems Figure 9-33](/img/ifh/ifh-figure-9-33-ils.jpg){width=800}

![Instrument Landing System. [AIM 1–1–9 Instrument Landing System](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-9) Figure 1-1-7.](/img/aim/aim-figure-1-1-7-instrument-landing-system.jpg){width=800}

![Localizer coverage limits. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 9: Navigation Systems Figure 9-34.](/img/ifh/ifh-figure-9-34-localizer-coverage.png){width=600}

* **What are the dimensions of an ILS?**
  * Localizer: Usually 5&#176; total width, with the width at the threshold being 700 feet.
  * Glideslope: Usually a 3&#176; slope, with 1.4&#176; total width.

* **When can you descend to the next instrument approach segment?**
  * When cleared for the approach and established on a segment of a published approach or route.

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 9: Navigation Systems
    * Page 9-35: Instrument Approach Systems
* [AIM 1-1-9 Instrument Landing System](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-9)

### Marker Beacon Receiver / Indicators

* Outer Marker (OM)
  * Indicates glideslope intercept
* Middle Marker (MM)
  * Usually 3,500 ft from landing threshold
  * Glidepath 200 ft above touchdown zone elevation
* Inner Marker (IM)
  * For Category II ILS

### Automatic Direction Finder (ADF)

* See [Nondirectional Beacon (NDB) / Automatic Direction Finder (ADF)](/cfii/tsa/flight-instruments#nondirectional-radio-beacon-ndb-automatic-direction-finder-adf)

### Transponder / Altitude Encoding

* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
  * [Chapter 14: Airport Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/16_phak_ch14.pdf)
    * Page 14-25: Transponder
* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 2: The Air Traffic Control System
    * Page 2-3: Radar and Transponders

* A transponder is a radar beacon transmitter/receiver installed in the instrument panel.
* ATC beacon transmitters send out interrogation signals continuously as the radar antenna rotates.
* When an interrogation is received by a transponder, a coded reply is sent to the ground station where it is displayed on the controller's scope.
* A reply light on the transponder panel flickers every time it receives and replies to a radar interrogation. Transponder codes are assigned by ATC.

* Mode C sends *pressure altitude* to ATC
  * Adjusting the altimeter's Kollsman window has no effect on the altitude read by the controller.
  * A transponder code consists of four numbers from 0 to 7 (4,096 possible codes)
* Mode S offers improvements over Mode C
  * 24-bit addresses instead of 4-bit
  * Transmits more data
    * Aircraft Collision Avoidance System (ACAS)
    * Heading, roll angle, etc.

### Electronic Flight Instrument Display

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 5: Flight Instruments
    * Page 5-27: Primary Flight Display
* See [Task A.1.I. Primary Flight Display](#task-a-1-i) for more information

### Automatic Pilot

* Electrically powered actuators connected to primary flight controls
  * 2-axis: roll and pitch
* Basic control system that can automatically fly a flight path

### Flight Management System (FMS)

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 5: Flight Instruments
    * Page 5-26: Flight Management Systems (FMS)

* An FMS uses an electronic database of worldwide navigational data including navigation aids, airways and intersections, Standard Instrument Departures (SIDs), STARs, and Instrument Approach Procedures (IAPs) together with pilot input through a CDU to create a flight plan.
* The FMS provides outputs to several aircraft systems including desired track, bearing and distance to the active waypoint, lateral course deviation and related data to the flight guidance system for the HSI displays, and roll steering command for the autopilot/flight director system.
* This allows outputs from the FMS to command the airplane where to go and when and how to turn.

### Multifunction Display

* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 5: Flight Instruments
    * Page 5-28: Multi-Function Display (MFD)

![G1000 MFD with engine instrument display. [High Performance Aviation](https://www.flyhpa.com/2010/10/g1000-descent-planning/)](/img/g1000-mfd.jpg){width=600}

## Ground Based Navigation

<!--@include: ./docs/src/includes/vor.md | shift:2-->
<!--@include: ./docs/src/includes/ndb.md | shift:2-->
<!--@include: ./docs/src/includes/using-ground-based-navaids.md | shift:2-->

<!--@include: ./docs/src/includes/satellite-based-navigation.md | shift:1-->

## Anti-ice/deicing and Weather Detection Equipment and Their Operating Characteristics

### Airframe

* Wings
  * Boots
    * Use as soon as icing is observed
  * Heated leading edge
    * Uses hot air from turbine compressor, for example
  * Weeping wing
    * Antifreeze comes out of small holes
* Windscreen
  * Alcohol
  * Hot air defrost
  * Electric (like rear window of car)

![Deicing boots. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-48.](/img/phak/phak-figure-7-48-deicing-boots.jpg){width=380}

![Weeping wing. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-49.](/img/phak/phak-figure-7-49-deicing-weeping-wing.jpg){width=380}

### Propellor or Rotor

* Propellor
  * Alcohol
  * Electric heating element
  * Boots

![Prop deicing. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 7: Aircraft Systems](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/09_phak_ch7.pdf) Figure 7-50.](/img/phak/phak-figure-7-50-prop-deicing.jpg){width=380}

### Air Intake

* Carb heat
* Spring-loaded air-filter bypass door
* Alternate air?

### Fuel System

* Check for water in fuel during preflight

### Pitot-Static System

* Pitot heat
* Alternate static source

### Radar / Lightning Detection System

* Radar weather can be either onboard or ground-based, and transmitted to the aircraft.
  * Onboard weather radar systems
    * Onboard weather radar uses an adjustable aircraft mounted radar antenna to detect, in real time, weather phenomena near the aircraft.
    * You must be careful not to assume that the only cells in the area are the ones shown on the radar display.
    * When a cell is detected by an onboard weather radar system, that cell often absorbs or reflects all of the radio signals sent out by the radar system. This phenomenon, called attenuation, prevents the radar from detecting any additional cells that might lie behind the first cell.
  * Ground weather surveillance radar
    * Ground weather surveillance integrates weather information from many ground radar stations.
    * The weather information collected from many sources is then used to create a composite picture that covers large volumes of airspace.
    * These composite radar images can then be transmitted to aircraft equipped with weather data receivers.
  * Limitations
    * Weather radar does not detect most other kinds of hazardous weather such as fog, icing, and turbulence.
    * A second limitation of weather radar is that the earliest (cumulus) stage of a thunderstorm is usually free of precipitation and may not be detected by radar.
* Lightning detection
  * Can also come from source onboard the aircraft or on the ground
  * An onboard lightning detection system consists of a simple antenna and processing unit that senses electrical discharges in the atmosphere and attempts to determine which electromagnetic signals have the "signature" of lightning strikes.
  * See Stormscope and Strikefinder as examples

![Weather radar. [FAA-H-8083-6 Advanced Avionics Handbook](https://bookstore.gpo.gov/products/advanced-avionics-handbook-2009) Chapter 5: Information Systems Figure 5-12.](/img/aah/aah-figure-5-12-weather-radar.jpg){width=380}

* [FAA-H-8083-6 Advanced Avionics Handbook](https://bookstore.gpo.gov/products/advanced-avionics-handbook-2009)
  * Chapter 5: Information Systems
    * Page 5-10: Onboard Weather Radar Systems

### Other Inflight Weather Systems

* FIS-B or XM Weather can get METAR and TAF in the plane from ground-based sources

## References

* [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook)
  * [Chapter 2: Ground Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/03_afh_ch2.pdf)
* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
  * [Chapter 17: Aeromedical Factors](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/19_phak_ch17.pdf)
* [Aeronautical Information Manual](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/)
  * [AIM Chapter 8: Medical Factors for Pilots](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap_8.html)
* [FAA-H-8083-6 Advanced Avionics Handbook](https://bookstore.gpo.gov/products/advanced-avionics-handbook-2009)
