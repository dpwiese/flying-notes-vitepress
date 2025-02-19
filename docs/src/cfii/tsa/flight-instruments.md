# Aircraft Flight Instruments and Navigation Equipment

This page covers *Task A. Aircraft Flight Instruments and Navigation Equipment* from the [FAA-S-8081-9E Flight Instructor Instrument Practical Test Standards](https://www.faa.gov/training_testing/testing/acs/cfi_instrument_pts_9.pdf).

## Flight Instrument Systems and Their Operating Characteristics

### Pitot-Static System

![Pitot static system and instruments. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-1.](/img/phak/phak-figure-8-1-pitot-static-system.jpg){width=500}

#### Altimeter

* The indicated altitude is correct, however, only when the sea level barometric pressure is standard (29.92 inHg), the sea level free air temperature is standard (15 &#176;C or 59 &#176;F), and the pressure and temperature decrease at a standard rate with an increase in altitude.
* Can adjust the altimeter for nonstandard pressure but not temperature
  * True altitude thus varies with temperature
  * Higher temps means true altitude is higher than indicated and lower temps means true altitude is lower than indicated
  * Recall "hot-to-cold look out below"
  * Beware obstacle clearance especially when flying in colder temps
* Mental model: altimeter setting provides true datum at ground level of the reporting station. Then consider the pressure gradient (which decreases with altitude). Compared to the standard pressure gradient, the pressure gradient in colder more dense air will decrease more quickly, and in hot air the pressure gradient will decrease less quickly.

![Altimeter. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-2.](/img/phak/phak-figure-8-2-altimeter.jpg){width=360}

#### Vertical Speed Indicator (VSI)

![Vertical Speed Indicator (VSI). [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-5.](/img/phak/phak-figure-8-5-vertical-speed-indicator.png){width=360}

#### Airspeed Indicator (ASI)

* Lower limits of green and white arc are power-off stall speeds
* Other speeds not here are, for example, $V_{a}$, $V_{g}$, and $V_{\text{LE}}$
* The same behavior described by "hot-to-cold look out below" for the altimeter applies to the airspeed indicator as well - when flying to a warmer area, for example, true airspeed will increase (given a constant power setting and true altitude)

![Airspeed indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-7.](/img/phak/phak-figure-8-7-airspeed-indicator.png){width=360}

![Airspeed indicator markings. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-8.](/img/phak/phak-figure-8-8-airspeed-indicator-markings.png){width=360}

#### Failure modes

* Alternate static source
  * Due to the venturi effect of the air flowing around the fuselage, *the air pressure inside the flight deck is lower* than the exterior pressure.

![Pitot static system failure modes and instrument indications. Reference unknown.](/img/broken-pitot-static-instruments-table.png){width=500}

### Attitude Indicator

* Also known as artificial horizon
* Principles
  * Rigidity in space
  * Precession
* Electrically or vacuum powered
  * What is in POH might have changed and need to consult supplements
  * For example, the Garmin G5 attitude indicator uses solid state (electrically powered) gyro instead of vacuum powered.
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

<!--@include: ./docs/src/includes/systems/compass.md | shift:2-->

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

* The vacuum system applies a vacuum to instruments that require it spin gyros, as an alternative to electrically powered gyros.
* Attitude and heading indicators are common instruments to use vacuum driven gyros.

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

![G1000 Primary Flight Display (PFD). [Cessna Support](https://support.cessna.com/docs/custsupt/GarminExpertSystem/525%20G1000/525_G1000_PFD1_LRU_Page.html).](/img/g1000-pfd.jpg){width=600}

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
    * Indicates the final approach fix (FAF) / glideslope intercept
  * Middle Marker (MM)
    * Usually 3,500 ft from landing threshold
    * Glideslope 200 ft above touchdown zone elevation
  * Inner Marker (IM)
    * For Category II ILS

![Instrument landing system. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 9: Navigation Systems Figure 9-33](/img/ifh/ifh-figure-9-33-ils.jpg){width=800}

![Instrument Landing System. [AIM 1–1–9 Instrument Landing System](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html#$paragraph1-1-9) Figure 1-1-7.](/img/aim/aim-figure-1-1-7-instrument-landing-system.jpg){width=800}

![Localizer coverage limits. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 9: Navigation Systems Figure 9-34.](/img/ifh/ifh-figure-9-34-localizer-coverage.png){width=600}

![Glideslope antenna at KRBD.](/img/glideslope-antenna.jpeg){width=600}

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

![G1000 MFD with engine instrument display. [High Performance Aviation](https://www.flyhpa.com/2010/10/g1000-descent-planning/)](/img/g1000-mfd.jpg){width=600}

## Ground Based Navigation

<!--@include: ./docs/src/includes/vor.md | shift:2-->
<!--@include: ./docs/src/includes/ndb.md | shift:2-->
<!--@include: ./docs/src/includes/using-ground-based-navaids.md | shift:2-->

<!--@include: ./docs/src/includes/satellite-based-navigation.md | shift:1-->

<!--@include: ./docs/src/includes/systems/deicing-and-anti-icing.md | shift:1-->

## Radar / Lightning Detection System

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
  * Chapter 5: Information Systems
    * Page 5-10: Onboard Weather Radar Systems
* [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf)
  * Chapter 5: Flight Instruments
    * Page 5-28: Multi-Function Display (MFD)
