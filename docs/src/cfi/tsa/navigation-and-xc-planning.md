# Navigation and Cross-Country Planning

This page covers *Task I. Navigation and Cross-Country Flight Planning* from the [FAA-S-ACS-25 Flight Instructor for Airplane Category Airman Certification Standards](https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf).

## Terms

### Navigation

* **Latitude**
  * Horizontal lines that run around the globe where the north-south distance is constant
* **Longitude**
  * Vertical lines that specify east-west coordinate
  * Together longitude and latitude give coordinates on the globe
  * Specified in degrees, where each degree is further divided into 60 minutes, and each minute into 60 seconds, where seconds can be decimals
* **Time zones**
  * Use of GMT / UTC or "Zulu" time
* **True** vs **Magnetic** coordinates
* **Heading**
  * Direction the airplane is pointed
* **Course**
  * Planned direction of flight
* **Track**
  * Actual direction plane is flying
* **Magnetic Variation**
  * Also called magnetic declination
  * Angle between true north and magnetic north
  * Easterly vs. Westerly variation
  * ==Variation can be thought of as where you would end up if you tried to follow your compass to true north==
    * For example, in the northeastern United States where the variation is *westerly*, if you followed your compass north you would end up *west* of true north.
    * I find this easier than the memory aid "west is best, east is least" as it doesn't help remember if it applies when converting from or to magnetic direction
  * This is encountered mostly in flight planning, where courses are initially defined by and most readily read from charts as a true course
    * These then need to be converted to magnetic course to be able to fly with a compass
* **Isogonic line**
  * Magnetic variation is constant
* **Agonic line**
  * No magnetic variation - compass points to true north
* **Magnetic Deviation**
  * Compass error caused by local magnetic field around airplane
  * Dependent on which direction the aircraft is facing
* **Bearing**
  * Angle between two lines, such as between aircraft's track and VOR radial
* **Map projections**
  * How to display a "round" globe on a flat piece of paper
  * Azimuthal Projection – sphere onto a plane (Earth)
  * Conic Projection – map fitted to a cone
  * Cylindrical Projection – projects entire world map at once
  * When measuring true course on a line drawn on a sectional chart, measure the course angle at the midpoint of the line
* **Standard Sea Level Pressure**
  * 29.92" Hg
* **Standard Sea Level Temperature**
  * 15 &#176;C

![Magnetic variation and agonic line.](/img/phak/phak-figure-16-9-agonic-lines.png){width=360 border=true}

<!--@include: ./docs/src/includes/altitudes.md | shift:2-->

<!--@include: ./docs/src/includes/airspeeds.md | shift:2-->

<!--@include: ./docs/src/includes/charts/overview.md | shift:1-->

<!--@include: ./docs/src/includes/charts/sectional.md | shift:2-->
<!--@include: ./docs/src/includes/charts/tac.md | shift:2-->
<!--@include: ./docs/src/includes/charts/flyway.md | shift:2-->
<!--@include: ./docs/src/includes/charts/wac.md | shift:2-->
<!--@include: ./docs/src/includes/charts/helicopter.md | shift:2-->

### Altitude Figures

* **Maximum Elevation Figure (MEF)**
  * Figure on a sectional that represents the highest elevation within a quadrant, including terrain and other vertical obstacles (towers, trees, etc.). A quadrant on Sectionals is the area bounded by ticked lines dividing each 30 minutes of latitude and each 30 minutes of longitude. MEF figures are calculated as follows:
  * Find the highest point in the quadrant (manmade or natural) and take the highest of the following:
    * If it is a manmade structure, add 100 ft to account for error, then round up
    * If it is natural, add 100 ft for error, add another 200 ft for obstacles which might exist but are low enough they don't require portrayal on the chart, then round up.

*For example consider the following figure. The highest terrain is 3150 ft. There is a manmade obstacle that is 424 ft tall, which has an MSL height of 3284 ft (thus it is sitting on terrain of 2860 ft.) To calculate the MEF using the (known) manmade obstacle (which is the highest point in the quadrant) add 100 ft for error and round up, giving 3300 ft. However, there could be a manmade obstacle of up to 200 ft sitting on the terrain of 3150 ft (that is not required to be portrayed.) Using this to calculate the MEF, add 200 ft to the terrain, and 100 ft for error, then round up giving: 3150 + 200 + 100 = 3450 -> 3500 ft. Thus the MEF is 3500 ft.*

![Maximum Elevation Figure.](/img/mef_example.jpg){width=340}

* There are many other minimum altitudes that pertain to IFR flight not discussed here.
  * See CFII TSA document
* Minimum safe altitudes see: [14 CFR &sect;91.119 - Minimum safe altitudes: General](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRe4c59b5f5506932/section-91.119)
  * **Anywhere** - An altitude allowing, if a power unit fails, an emergency landing without undue hazard to persons or property on the surface.
  * **Over congested areas** - Over any congested area of a city, town, or settlement, or over any open air assembly of persons, an altitude of 1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet of the aircraft.
  * **Over other than congested areas** - An altitude of 500 feet above the surface, except over open water or sparsely populated areas. In those cases, the aircraft may not be operated closer than 500 feet to any person, vessel, vehicle, or structure.
* Acrobatics must be done no lower than 1,500 AGL and with 3 miles of visibility.

![Altitudes.](/img/altitudes.png){width=400}

## Proper and Current Charts

* Motivating examples
  * In Aviation Adventures there was a printed taxi diagram of KHEF posted on the wall that was quite old and different from the current taxi diagram
  * San Francisco Bay Area airspace has changed a lot since I first flew there in 2011 to a decade later
* Before a flight, PIC must become familiar with all available information concerning that flight.
  * [14 CFR &sect;91.103 - Preflight action](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRe4c59b5f5506932/section-91.103)
* This information must include:
  * For a flight under IFR or a flight not in the vicinity of an airport
    * Weather reports and forecasts
    * Fuel requirements
    * Alternatives available if the planned flight cannot be completed
    * Any known traffic delays of which the pilot in command has been advised by ATC
  * For any flight
    * Runway lengths at airports of intended use
    * Aircraft performance information under expected values of airport elevation and runway slope, aircraft gross weight, and wind and temperature.
* The above list though is not comprehensive
  * Route of flight and altitude
  * Airspace
  * Obstacles
  * Airport environment at destination (taxi destination)
  * Planned instrument approach procedures and potential alternate approaches that might be likely
  * NOTAMs

## Plotting Course, Stops, Alternates, Unforseen Circumstances

* Time, distance, fuel calculations
  * Make sure to plan route to avoid terrain and certain airspace
  * [14 CFR &sect;91.151 Fuel requirements for flight in VFR conditions](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFR4d5279ba676bedc/section-91.151)
  * Personal minimum should be higher than these
  * Consider winds, visibility, communications, radar service (flight following) when planning altitude
* Terrain, navaids
* Services available at stops
* **VFR cruising altitudes**
  * ==Required to be maintained when flying more than 3,000 feet AGL (and less than 18,000 MSL) based on *magnetic course*.==
  * See [14 CFR &sect;91.159](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFR4d5279ba676bedc/section-91.159)
  * ==Use acronym **ONE - Odd North / East**==
    * East: odd feet + 500 (e.g. 3,500, 5,500)
    * West: even feet + 500 (e.g. 4,500, 6,500)
* No person may operate any portable electronic device on any aircraft while it is operated under IFR.
  * [14 CFR &sect;91.21(a)(2)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.21)
* Unforseen events
  * Availability of alternates along route
  * Impact of terrain if emergency landing is required

## Pilotage and Dead Reckoning

* **Pilotage**
  * Navigation by reference to landmarks or checkpoints
  * For example, following a highway
  * Becomes difficult in low visibility or in areas that lack prominent features
  * Use prominent checkpoints that can be seen
  * Consider checkpoints as boundaries
* **Dead reckoning**
  * Navigation solely by means of computations based on time, airspeed, distance, and direction.
  * For example, calculating wind correction and speed, and figuring out what approximately southerly heading would be required to fly from `KHEF` to `KRIC`.
* Pilotage and dead reckoning combine well, using visual references as checkpoints with dead reckoning between
  * For example, `KEDU` to `KCIC` (buttes and grain elevator)

## Fundamentals of Radio Navigation

* Predetermined path followed using radio waves
* Tune appropriate navigation facility and control ground track based on the instrument's indication
* Can use ground stations or space satellites that transmit signals to navigation radio receivers in the airplane
  * VOR
  * NDB
  * LORAN-C
  * GPS

## Diversion to Alternate

* Might be required due to
  * Weather
  * Illness
  * Aircraft problems
* Determine where you are
* Assess limitations (PAVE) and how soon you need to land
* Find nearest practical airport
  * Charts
  * GPS (NRST function)
  * ATC
* Turn in direction of airport
  * Note time
* Use groundspeed to determine ETE and fuel requirements
* Assess the consequences (Will I make it, are there services available)
* Always use a safe margin
* Leverage ATC & FSS (122.2) – "Radio" & Location
* Use shortcuts and rules of thumb in calculations

<!--@include: ./docs/src/includes/lost-procedures.md | shift:1-->

## Fuel Consumption Calculation

* Distance - measure length of course
* Time - divide distance by groundspeed
  * Correct TAS for wind
* Total fuel consumption - multiply projected hourly fuel burn by time
* Repeat calculation for every segment of the flight where the groundspeed changes

## Importance of Flight Log

![Navigation log.](/img/nav-log-kbed-klkp.jpg){width=540}

* Track position and progress along flight
* Compare plans against reality
  * Are we on the right track
  * Are we using as much fuel as expected
* Helps keep information organized, in order, and available
  * Frequencies

## Weather Check and Go/No-go

* Obtain weather briefing-shows where problems may occur during the flight
* Pilot must be familiar with weather for the flight
  * [14 CFR &sect;91.103 - Preflight action](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRe4c59b5f5506932/section-91.103)
* Use good judgment in deciding if to take the flight
* Consider weather factors in relation to the equipment to see if the plane can handle the flight
* Personal minimums
* Should be a no-go decision if
  * Thunderstorms, especially embedded
  * Fast-moving fronts/squall lines
  * Moderate turbulence
  * Icing
  * Fog, visual obscurations
* Pilot mental and physical condition a factor (IMSAFE)
* Recent flight experience is important in making the decision

<!--@include: ./docs/src/includes/flight-plan.md | shift:1-->

## References

* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
  * [Chapter 16: Navigation](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/18_phak_ch16.pdf)
* [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook)
* [Private Pilot - Airplane Airman Certification Standards (FAA-S-ACS-6B)](https://www.faa.gov/training_testing/testing/acs/media/private_airplane_acs_change_1.pdf)
* [FAA Aeronautical Chart Users' Guide](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/aero_guide/)
* [VFR Raster Charts](https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/vfr/)
* Aeronautical Charts
* Foreflight
* AOPA Chart Symbols PDF
