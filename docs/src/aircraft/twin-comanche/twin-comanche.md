# Twin Comanche

![Twin Comanche (N24TE)](/img/twin-comanche/n24te.jpeg){width=800}

This document describes the systems on the Twin Comanche.

## Overview

* PA-30 and PA-39
    * PA-39 (`N24TE`) has counter-rotating props
    * PA-30 (`N2VQ`) has normally-rotating props
* For Twin Comanche accelerate-stop and accelerate-go distances need not be published
  * It is a normal category plane not weighing more than 6,000 lbs
    * [14 CFR &sect;23.1585(f)(2) - Operating procedures (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-G/subject-group-ECFR4b4f22832845ca2/section-23.1585#p-23.1585(f)(2))
    * [14 CFR &sect;23.1587(d) - Performance information (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-G/subject-group-ECFR4b4f22832845ca2/section-23.1587#p-23.1587(d))

## Systems

### Engine

* Lycoming IO-320-B, 4-cylinder, fuel-injected, 320 cu in, rated at 160hp @ 2700 RPM
* Crossover-type exhaust creates vacuum to pull exhaust out of cylinder.
* Oil cooler on left rear baffle of each engine, with air exiting through cowl flaps at the nacelle bottom.
* Bendix RSA-5 fuel injection system:
  * Provides consistent fuel distribution, easing cold starts, and preventing carb icing.
* Oil
  * Capacity: 8 qts
  * Normal quantity: 6-7 qts
  * ==Minimum safe quantity: 2 qts==

![PA-30 service manual: engine](/img/twin-comanche/pa-30-service-manual-figure-8-5-engine.png){width=500}

### Propellor

* Loss of governor causes feathering, unlike singles where prop flat pitches with governor loss
* From service manual:

  > Propellers are Hartzell full feathering, constant speed, each conaolled by a pvernor mounted on the englne supplying oil through the propeller shaft at various pressures. Oil pressure from the governor moves the blades into low pitch (high RPM). The centrifugal twisting moment of the blades also tends to move the blades into low pitch. Opposing these two forces is a force produced by compressed air between the cylinder head and the piston which tends to move the blades into high pitch in the absence of governor oil pressure. Thus, feathering is accomplished by compressed air.

### Flaps

* From the POH:

  > Installed on the Twin Comanche are electrically operated fowler flaps which can be lowered and stopped at any position up to 27 degrees.

### Landing Gear

* **Landing Gear**
  * Nose gear steerable through 40&#176; arc.
  * Steering mechanism disconnected during retraction to reduce pedal loads in flight.
  * Gear down lock switch on each gear, with a single green light for mains.
  * Manual gear extension includes raising motor release arm and extending handle through sockets.

![PA-30 service manual: gear retraction mechanism](/img/twin-comanche/pa-30-service-manual-figure-7-14-gear-retraction-mechanism.png){width=600}

![Landing gear switches](/img/twin-comanche/gear-switches.jpeg){width=800}

### Flight Controls

* **Primary Flight Controls**
  * Actuated using cables and pulleys
  * Ailerons & rudders connected with interconnector spring (improves roll & yaw response, but ailerons feel heavy in crosswind landings)
  * Stabilator (fully movable horizontal stabilizer) with anti-servo tab
* **Secondary Flight Controls**
  * Fowler flaps (electrically actuated by motor underneath back seat). Deflect 27&#176;
    * Locking mechanism holds flap up on right
    * Second lock prevents the flap from going fully down if the up lock is not fully engaged
  * Antiservo tab on stabilator's trailing edge, increasing control stability
  * Stabilator trim operated by an overhead crank, controlling a rotating drum in the tail section
  * Rudder trim knob controls a bungee mechanism extending to the nose gear steering arm
  * Ground adjustable tab on left aileron

![PA-30 service manual: trim screw drum](/img/twin-comanche/pa-30-service-manual-figure-5-14-trim-screw-drum.png){width=500}

## N2VQ (PA-30)

![N2VQ (interior)](/img/twin-comanche/n2vq_int.jpg){width=800}

* **Primary Flight Controls**
  * See above
* **Secondary Flight Controls**
  * Vortex generators reduce stall speed (max 5 missing total)
* **Engines**
  * Conventionally rotating (clockwise as viewed from pilot seat)
* **Propellers**
  * Hartzell Q-tip: quieter with reduced tip speeds & increased ground clearance
  * Fully feathers in ~3 seconds
* **Fuel System**
  * 4 bladder tanks (30 gal mains, 15 gal auxiliaries)
  * 2 fuel pumps per side: one engine-driven, one electric
* **Electrical System**
  * Two 14-volt 70-amp alternators
  * 12–14-volt system; battery located aft of baggage in a sealed box

## N24TE (PA-39)

![N24TE (interior)](/img/twin-comanche/n24te_int.jpg){width=800}

* **Primary Flight Controls**
  * Same as N2VQ
* **Secondary Flight Controls**
  * No vortex generators
* **Engines**
  * Left engine: Lycoming IO-320-B1A, clockwise rotation
  * Right engine: Lycoming LIO-320-B1A, counter-clockwise rotation
* **Propellers**
  * Hartzell, constant-speed, controllable pitch, full feathering
  * Fully feathers in ~6 seconds
* **Landing Gear**
  * Same system as N2VQ but with a two-position gear selector handle
* **Fuel System**
  * Wing tip tanks, each holding 15 gal, all usable
* **Electrical System**
  * Two 12-volt 70-amp alternators
  * 35 ampere-hour battery located in the nose

### Avionics

#### Avidyne IFD540 GPS

* [Avidyne: IFD Dimming setup tutorial](https://techsupport.avidyne.com/kb/article/98-ifd-dimming-setup-tutorial/)
* Dim display
  * AUX key on bottom
  * SETUP on touchscreen
  * Expand Display menu
  * Bezel Brightness mode to manual
  * Display Brightness mode to manual

#### Aspen Evolution PFD / MFD

* Use trainer app on iPad
* Display Brightness:
  * Push Menu Button then press Left Knob to toggle between:
    * Automatic – BRT AUTO
    * Manual – BRT ADJUST – rotate knob to desired brightness

#### Hobbs and Other Timers

* Hobbs under center floor by fuses
* Does not have Tach time?

## V-Speeds

The below speeds are all in MPH.

* **$V_{\text{SO}}$**: 69
* **$V_{\text{S}}$**: 76
* **$V_{\text{R}}$**: 85
* **$V_{\text{X}}$**: 90
* **$V_{\text{XSE}}$**: 90
* **$V_{\text{MC}}$**: 90
* **$V_{\text{SSE}}$**: 97
* **$V_{\text{YSE}}$**: 105
* **$V_{\text{Y}}$**: 112
* **$V_{\text{FE}}$**: 125
* **$V_{\text{A}}$ @ 3600 LBS**: 162
* **$V_{\text{LE}}$**: 150 (140 AVAD)
* **$V_{\text{NO}}$**: 200
* **$V_{\text{NE}}$**: 230
* **Abeam #'s**: 115
* **Base**: 110
* **Final**: 105
* **Max Demonstrated Crosswind Component**: 20


## Performance

* $V_{\text{YSE}}$ see chart below

![PA-30 POH Single Engine Rate of Climb](/img/twin-comanche/pa-30-poh-page-5-14-figure-5-10-single-engine-rate-of-climb.png){width=460}

### Glide Ratio

* From the POH:

  > Both-engines-out glide ratio for the Twin Comanche with landing gear and flaps retracted and propellers windmilling is 10 to 1, or approximately two miles of gliding distance for each 1,000 feet of altitude above the terrain. Drag is substantially reduced when the propellers are feathered, and glide ratio improves to 13 to 1. When the landing gear is extended, drag is increased and glide ratio is radically reduced to approximately 7 to 1. For this reason, it is suggested that the landing gear and flaps not be extended in most engine-out emergencies until over the threshold of the landing area. Landing gear down operating time is approximately 7 seconds.
