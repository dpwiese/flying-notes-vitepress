# Maneuvers

* Generally 180 KIAS is good airspeed to fly that is above minimum maneuvering speeds

## Speeds Notes

* Following speeds are what we _bug_
* Takeoff v-speeds
  * V1 = takeoff decision speed
  * VR = rotation speed
  * V2 = Takeoff safety speed / second segment climb speed
    * Speed at which plane safely climbs with one engine inoperative
* Landing v-speeds
  * VR = Landing reference speed
    * VREF for flaps 40 or VLNDX for flaps < 40
    * Use VLND20 for single engine landing
  * V2 = Approach Climb speed (VAPP)
    * This is single engine, flaps 8 go-around speed
    * This we get from the VLND8 chart?

<!--
Why in some procedures we use V2 + 25 and others V2 + 20?
Because V2 is set as either V2 or VAPP
On takeoffs it is V2, around 124
On approach to landing it is VAPP around 132
Given those numbers are different as they mean different things, we need to add different "buffer" to them
So remember, add 25 on TAKEOFF v-speeds and 20 on LANDING v-speeds?
Is this actually true??????

These speeds with "buffer" are "flap safety speed" or "flap retraction speed"?????

* Q: what exactly is the difference between V2 and VAPP?
  * They are both single engine and for flaps 8??
-->

## Takeoff

### Normal Takeoff

* Before callout = see green T/O AND make sure N1 needle comes up to the bug
  * "Takeoff Thrust set"
* "Airpseed alive" / "80 knots" -- "cross check" / "V1" / "Rotate"
* Pitch 12-15&#176;
* PM calls "Positive Rate"
  * Call "Gear up"
* ***When putting the gear up, also turn landing and taxi lights off and spoiler lever RET***
* At 400' and V2 + 25 PM should call "flap safety speed" or "flap retraction speed" or "V2 + 25"
  * Call "flaps up"
  * PM should confirm "flaps set up ... indicating up"
  * This speed, VFS, should be set in the speed bug prior to takeoff, so all PM has to do is check when airspeed exceeds the bug and over 400' AGL
* At 500' AGL PM should call "autopilot available"
* Source should already be set, so call the MODE to put in the autopilot
  * e.g. "nav mode, AP on"
  * This alone puts the AP vertical mode in pitch -- set to desired vertical mode
    * e.g. FLC if on departure that requires 250 KIAS, or speed mode and set 250 KIAS

<!--
* PFD source, autopilot mode(s)
  * e.g. "FMS source, nav mode, speed mode"
-->

![Learjet 45 standard calls: takeoff.](/img/learjet-45/ropat/ropat-pg-4-9-standard-calls-takeoff.webp){width=600}

### Engine Out Above V1

* Directional control with rudder
* Rotate at 3&#176;/sec to target pitch attitude
  * This has been calculated on the card
  * Often 11-12&#176;
* PM calls "positive rate"
  * Call "Gear up"
* Then command
  * "Speed mode"
  * "Bug V2"
  * "HDG / NAV mode"
    * Depending on if assigned runway heading or a published procedure
* Call for "AP on"
* When obstacle clearance assured (1500' AGL), accelerate to V2 + 25
  * Passing V2 + 25 PM calls "flap retraction speed"
  * Call for "flaps up"
  * Note radar altimeter to get 1500' AGL
* ***Call for engine failure above V1 checklist***
* Reduce thrust to get level flight at 180 KIAS
* Consider half bank?
  * Press `BNK` on flight guidance controller
  * Limits to 14&#176;

![Learjet 45 engine out above V1.](/img/learjet-45/ropat/ropat-fig-16-engine-out-above-v1.webp){width=800}

## Steep Turns

* Minimum 5,000' AGL
* Select crosspointer flight director command bar
  * Use `CUE` button on display controller
* Ensure N1 sync on
* Start at 245 KIAS
  * Approximately 71% N1
* Bump power 4% N1
* Call for PM to turn autopilot off
  * Use AP button on flight guidance controller
  * Leave YD on
* Roll to 45&#176; bank
* 3-4 seconds of nose up trim
* Do 180&#176; turns
* Lead roll-in/out by about 5&#176; to 10&#176; of heading
  * Heading bug is 8&#176; either side

![Learjet 45 steep banked turns.](/img/learjet-45/ropat/ropat-old-steep-banked-turns.webp){width=800}

<!--
## Slow Flying

* Maximum 18,000' MSL
  * Maximum flaps extended altitude
* If required, set the "R" and "2" airspeed marks to VREF and VAPP
-->

## Stalls

* General Recovery Procedure
  * Stall recovery -- lower nose = nose on horizon
  * At higher altitude might have to go a few degrees below the horizon
  * Only graded on recovery from stall
  * ***Three chimes is autopilot disconnect -- silence with control wheel MSW when the autopilot disconnects and you start the stall recovery procedure.***

1. Lower the pitch attitude to reduce angle of attack.
2. Thrust Levers T/O (manual APR, if required)
3. Level the wings.
4. Accelerate out of stall condition.

### Clean Stall

* Thrust levers IDLE
* Spoilers until decelerating through 150 KIAS
* Maintain altitude
* Recover at first indication
* **Recovery**
  * Lower the nose
    * To the horizon
  * T/O thrust
  * Level wings
  * Accelerate
* Press MSW for 2 seconds to silence audible alert
* ***At 130 KIAS start pitching up to return to starting altitude***
* ***Make sure to bring power out and pitch down to return to starting altitude and 180 KIAS***

![Learjet 45 approach to stall (clean).](/img/learjet-45/ropat/ropat-fig-13-approach-to-stall-clean.webp){width=800}

### Takeoff / Approach Stall

* Configure
  * Flaps 20&#176;
  * Bug VREF and VAPP
* Entry
  * On departure will
    * Set pitch mode and heading mode in AP
    * Command a 90 degree heading change with AP as we are climbing
    * Bring thrust levers to idle
* Recover at first indication
  * ***Tip of chevron right to horizon***
  * Do not change configuration when airspeed is below VREF
  * As the airplane accelerates above VREF
    * PM should call out "VREF"
    * Call "flaps 8&#176;"
  * When a positive rate of climb and increase in airspeed is indicated
    * PM calls "positive rate"
    * Call "gear up"
  * When airspeed increases above VAPP + 20 KIAS
    * PM calls "flap safety speed"
    * Call "flaps up"
    * VAPP is called Approach Climb Speed

<!--
* Landing gear NOT extended??
* Bank 15&#176; to 30&#176;
* Thrust set at 55% N1?
* Start a climb?
* Thrust levers to IDLE?
* Increase the pitch to maintain altitude and allow the airspeed to decrease
-->

![Learjet 45 approach to stall (takeoff or approach configuration).](/img/learjet-45/ropat/ropat-fig-14-approach-to-stall-takeoff.webp){width=800}

### Landing Stall

* Configure
  * Flaps 40&#176;
  * Gear down
* VSPDS set
  * VREF = 122
  * VAPP = 132
* Recovery
  * Lower the nose
    * ***Tip of chevron on horizon***
  * T/O thrust
  * Wings level and accelerate
* _Upon accelerating through VREF (as called by PM) the procedure becomes a normal two-engine go-around_
  * TOGA, power, pitch
    * Press GA button
    * (T/O thrust is already set)
    * Pitch to 12-15&#176; nose up
  * Call for flaps 8&#176;
  * Wait for PM to call positive rate
    * Call "gear up"
  * PM should call flap safety speed (i.e. VAPP + 20)
    * Call "flaps up"
  * Call for HDG/NAV mode?
    * Need to call for FMS source first?
  * Call for speed mode
    * "speed mode, bug VAPP + 20"
  * Call for autopilot on
  * Reduce thrust as needed to level off according to missed approach procedure / instructions
* Make sure to bring power out and pitch down to return to level flight at entry altitude and 180 KIAS

![Learjet 45 approach to stall (landing configuration).](/img/learjet-45/ropat/ropat-fig-15-approach-to-stall-landing.webp){width=800}

## Unusual attitudes

* Minimum 5,000' AGL
* Look at all 3: both PFD and standby attitude indicator
* The pilot with the reliable attitude information assumes control and flies the recovery.

<!--
* Center controls
* Disengage autopilot
  * Press CWS
* Check airspeed:
  * Airspeed decreasing PF announces "Nose High Recovery"
  * Airspeed increasing PF announces "Nose Low Recovery"
-->

### Nose High Recovery

* T/O thrust
  * "In the sky power high"
  * Call "Nose High Recovery, Verify Takeoff Thrust."
* Make sure spoilers down
* Leave the bank in OR increase to up to 60&#176; until 10-15&#176; degrees nose up pitch and start leveling wings
  * Let that help reduce altitude
  * ***Do NOT push forward due to negative G limits***
* Back to straight-and-level

### Nose Low Recovery

* IDLE thrust
  * "In the brown, power down"
  * Call "Nose Low Recovery, Verify Idle Thrust."
* Spoilers if needed
* Wings level
* Raise the nose
* Put power back in
* Lower spoilers
* Back to straight-and-level at original altitude

## EGPWS Escape Maneuver

The following procedure should be employed for EGPWS recoveries:

1. Disengage autopilot.
2. Advance thrust levers to T/O or greater, verify spoilers retracted.
3. Roll wings level.
4. Smoothly apply back pressure on the yoke to raise the nose.
5. Maintain an airspeed at least 10 kt above the low speed awareness cue.
6. Configure flaps and gear for minimum drag.
7. Once clear of obstacles or terrain establish level flight.
8. Check airspeed and adjust thrust as required.

## Engine Failure In Flight

* ***TODO@dwiese -- review drift-down***
* Have copilot add rudder trim so you can keep flying
* Be very specific about what rudder trim you want, e.g. 3 units of right trim
* Make sure bus tie closed, and NON-ESS busses go off (step 6 of engine shutdown)
* TA only mode broadcasts to other aircraft we can't do RA (since single engine)
* When NOT to attempt engine restart
  * Fire
  * FOD
  * Frozen
* Need ~60% N2 to do restart

## Holding

* Recall holding airspeeds
  * Up to 6,000' MSL = 200 KIAS
  * 6,000' MSL to 14,000' MSL = 230 KIAS
  * Above 14,000' MSL = 265 KIAS

## Approaches

* *Call for descent and approach checklists.*
* Use acronym **ABBBC** when setting up for the approach
  * **A** -- ATIS (PM)
  * **B** -- Build - in FMS (PM)
  * **B** -- Bug - depends ILS/LOC/VOR or RNAV (PM)
    * Make sure for green-needle approaches "bug" is
      * Localizer frequency
      * Set course
      * BARO mins
    * For RNAV just set BARO mins
  * **B** -- Brief (PF)
  * **C** -- Checklist
* When cleared for the approach
  * ***Arm the approach***
    * Unless white needles and not yet in approach level of service then need to wait
  * Taxi lights on
  * Arm spoilers?
* Generally 180 KIAS is good airspeed to fly in the pattern or prior to the FAF
  * About 54% N1?
  * No power changes needed until past the FAF
* Precision
  * Glideslope showing 2 dots above = flaps 20&#176;, gear down
  * Glideslope showing 1 dot above = flaps 40&#176;
  * Add a few percent N1 to hold VREF + 5 KIAS descending on GS
* Non-precision
  * 2 miles before?
  * 1 mile before?
* When putting in approach speeds (instead of takeoff speeds)
  * VR = VREF
  * V2 = VAPP
* Techniques for configuring
  * Do not extend flaps until below 200 kts -- because after flaps 8 you can't use spoilers -- below 200 cant use spoilers but can use flaps 20 and gear to slow down
  * As soon as you go to flaps 8 is good time to arm spoilers (since can't use them anymore anyway)
  * Callout: AUX HYD ON -- GEAR DOWN
    * Turning on the aux hydraulic pump before gear down is not prescribed in the checklist but is good practice
  * Flaps 40&#176; => call for before landing checklist
* Techniques for landing
  * Don't flare just round out
  * 50 feet power idle
  * 20 feet a little back pressure to get mains to touch first
* Fully configured BY FAF (flaps 40&#176;, gear down)

### Circling

<!--
At KMEM stay over or just inside the road
Treat all landings as max braking landing?
-->

* We circle fully configured (flaps 40&#176;, gear down)
* When on LOC and captured, set heading bug in anticipated direction of turn 45&#176;
* Cleared to circle = heading mode
* Once wings level start timer for about 25 seconds
* At 25 seconds turn base
* When to descend below MDA on circling approach
  * Once abeam 18L -- take right side of chevron and put it on horizon
  * Kick off autopilot with nose down trim
  * Min speed until final is VREF + 10 (while maneuvering, MINIMUM)

### No-flap Approach

* No flare on no-flap approaches
* Centerline between mains and touching down in touchdown zone

### Single Engine Approach

* Technique when being vectored flaps 8&#176; and 180 KIAS
* Once you see GS starting to move -- flaps 20&#176; and reduce power about 15%
* Will slow us to 132 KIAS
* GS half a dot high put gear down
* For NPA
  * 3 miles out flaps 8&#176; 180 KIAS
  * 2 miles out flaps 20&#176;
  * 1 mile out gear down

## Go-Around

<!--
* POSITIVE RATE -- GEAR UP -- "HDG/NAV MODE" (whichever you want) <- include that in your callout
-->

### Two Engine Go-Around

* ==TOGA, power, pitch==
  * Press GA button
  * T/O thrust
  * Pitch to 12-15&#176; nose up
* ==Call "go around"==
* ==Call "flaps 8&#176;"==
* Wait for PM to call positive rate
  * ==Call "gear up"==
* ==Call for speed mode==
  * "speed mode, bug V2 + 20"
  * Recall, V2 bug indicates VAPP (approach climb speed)
* Call for HDG/NAV mode?
  * Need to call for FMS source first?
* PM should call flap safety speed (i.e. VAPP + 20)
  * ==Call "flaps up"==
* Call for autopilot on
* Reduce thrust as needed to level off according to missed approach procedure / instructions
* ==***Call for go-around checklist***==

![Learjet 45 two engine go-around.](/img/learjet-45/ropat/ropat-fig-10-two-engine-go-around.webp){width=800}

### Single Engine Go-Around

* ***Memorize: VAPP (Approach Climb Speed) is single engine, flaps 8 go-around speed that we set in V2 bug.***
* Procedurally single engine go-around is same as two-engine go around
* ==TOGA, power, pitch==
  * ==GA button==
  * ==T/O thrust==
  * ==Pitch to 9&#176; _minimum_==
    * FD is single engine go-around at max gross weight
* ==Call "go around"==
* ==Call "flaps 8&#176;"==
* Wait for PM to call "positive rate"
  * ==Call "gear up"==
* ==Call "speed mode, bug V2"==
  * Which is set to contain VAPP (approach climb speed)
* ==Call "HDG/NAV mode"==
  * Whichever is appropriate
* ==Obstacle clearance altitude, accelerate to V2 + 20==
  * ==Call "flaps up"==
* ==***Call for go-around checklist***==

![Learjet 45 single engine go-around.](/img/learjet-45/ropat/ropat-fig-19-single-engine-go-around.webp){width=800}

## Landing

* ***Note: "Landing" checklist in title of checklist indicates it's the final and only checklist we need to run***

## After Landing / Clearing Runway

* Done by PM
* 2 unlocked, 2 deployed -- wrt to the TRs so can indicate to PF if only one deploys
* Most airports want transponder in ALT mode until at ramp spot
* Step 11. Thrust Lever -- CUTOFF
  * Only if doing single engine taxi

## Shutdown

* Done by PF (read-and-do, PM reads, PF does)
* ***Don't turn mains off BEFORE EMER or will deploy oxygen masks!!!!***
  * Just follow ordering: step 14 is EMER BAT Switch -- OFF, step 15 is L and R BATT switches -- OFF
* When shutting down the APU it's not powering anything
  * But not bad idea to turn off APU GEN
  * See page 35 ... ?
* Wait 30 seconds before APU master off
  * When R STBY fuel pump turns off that indicates 30 seconds

## Emergency Procedures

### LR GEN FAIL

* Checklist
  * 5. FLOOD Light -- the knob is on pilot side crew light panel
  * 16. Standby Pitot Heat -- it is controlled from the "R PROBES" button

### Engine Failure

No specific red CAS message for engine failure, see e.g. `L OIL PRESS LOW` red CAS

* During takeoff -- memory items then checklist
* During flight -- checklist

## Abnormal Procedures

### Hydraulic Failure

* Checklist
