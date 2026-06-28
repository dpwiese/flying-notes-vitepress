# Maneuvers

* Generally 180 KIAS is good airspeed to fly that is above minimum maneuvering speeds

## Preflight Inspection

* Open checklist in QRH to preflight
* AUX pump on to charge brake accumulator and THEN pull parking brake
  * Pressure will drop but make sure it stays above 1200 psi
* Hydraulic service panel
  * Only "FULL" light

## Before Starting Engines (AFM 2-9)

* **Step 5b. EMER BATT -- EMER**
  * ***WAIT 5-8 SECONDS after turning on main batteries to turn on EMER BATT!!!!!!!!!***
  * Otherwise will deploy PAX oxygen masks (rubber jungle)
* **Step 5c. L & R AV MSTR -- On**
  * ***Turn FMS on at same time as turning avionics!!!!***
  * Otherwise will have to wait a while
  * Press "ON / OFF DIM" button
* **Step 10. Flight Controls**
  * Just box for freedom of movement
* **Step 12. DU and REVERSION panels -- NORM**
  * 2 DU knobs
  * 4 reversion knobs
* **Step 13. EICAS**
  * Oil temp above -28 deg C
    * This from Operations Reference Manual 1-47
    * Pilot Training Guide 19-30 says above -40 C or -40 F
* **Step 18. Environmental Control**
  * 11 o'clock is good starting point
* **Step 20. SYSTEM TEST Panel -- Test**
  * Need to memorize the procedures for all these tests
  * All of these are in the Pilot Training Guide starting on 20-16
* **Step 21. Master CAUT -- Inhibit**
  * Press and hold on one side and look at the other side
* **Step 22. Trim system -- Check**
  * Commit to memory because after transitioning from AFM to QRH the QRH doesn't say WHAT to test
* **Step 26. Standby Instruments -- Uncaged & Checked**
  * Cage standby attitude indicator
  * Pull out and turn
    * Left to uncage
    * Right to cage
* **Step 27. FMS -- Set**
  * Always start with Fuel page
  * (pink I's in top = independent)
  * FOB -- hit "BACK" (next to 0)
  * Hit enter (this pulls from fuel computer how much fuel is on board)
  * Flight Plan Page
  * Menu
  * Notes:
    * "First to reverse, last to pass"
    * Also the one with asterisk is the hold???
* **Step 28. Takeoff Data -- Computed & Speeds Set**
  * MFD press "MFD button" and go to "SPDS" page
    * Note: press the VSPEED button on the far right until three magenta dashes before inputting speeds
    * V1 = 110
    * VR = 115
    * V2 = 124
  * (Set speed bug 149 -> V2 + 25)
  * Now upside down "U" check
    * Verify source
      * e.g. GPS-based departure -- FMS source (starts bottom left of PFD)
      * Puts us into white needles
    * Check V-speeds are posted
    * Airspeed shows zero
    * Speed bug set
      * Top left is speed reference
      * Verify V2 + 25 -- flap retraction speed
    * 1. Arrow pointing towards whoever flying (XFR button on flight guidance controller)
    * 2. Hit go-around button
    * 3. Mode (and Source?)
    * Flight guidance controller -- heading or nav Mode -- since departure fly NAV
    * Set top altitude to 5000 feet (again in top AP panel ASEL)
    * Altimeters set
      * Indicated alt within 75 feet of field elevation
    * VSI zero
    * Set heading bug to runway heading

<!--
* Step 27.
  * 5 PAX, press 5 hit enter, enter to accept
  * 100 lb of cargo
  * Menu
    * Depart, 18C, Enter
    * CHLDR FIVE departure ANSWA transition
    * Select open line KMEM, Enter
    * Brings up summary page
    * Menu
    * Arrive, 36C, BBQ3 arrival, igloo transition
    * RNAV 36C approach, Nesbit transition
-->

### Trim System Check (Step 22)

<!-- Before Starting Engines: Step 22. Trim System -- Check (1/4) -->

* a. PITCH TRIM Switch -- Select SEC.
* b. SEC Switch -- Trim NDN or NUP.
* c. Copilot’s Control Wheel Master Switch (MSW) -- Check cutout of SEC trim.
* d. PITCH TRIM Switch -- Select OFF.
* e. Pilot’s or Copilot’s Control Wheel Trim Switch -- Trim NDN or NUP. No trim should occur.
* f. PITCH TRIM Switch -- Select PRI.
* g. Copilot’s Control Wheel Trim Switch -- Trim NDN or NUP.
* h. Pilot’s Control Wheel Trim Switch -- Trim NDN or NUP.
* i. Pilot’s Control Wheel Master Switch (MSW) -- Check cut-out of PRI trim.
* j. Pilot’s Control Wheel Trim Switch -- Trim LWD or RWD.
  * *Note: go two units and see box around trim value, than back to 0 (only need to check either left or right)*
* k. RUDDER TRIM Switch -- Reset to zero (0).
  * *Note: go two units and see box around trim value, than back to 0 (only need to check either left or right)*

## Rotary System Test Panel

<!--
Step 20. of both QRH and AFM -- System Test Panel
All of these are in the Pilot Training Guide starting on 20-16
-->

### Fire Detection

* ***Before starting the test***
  * ***Select APU master ON***
  * ***Put the RMU on "engine" page***
   * Press test to clear test results if needed
* ***Hold the test for minimum 15 seconds***
  * Just long enough to hear the APU fire horn sounding from the nose
* ***If you hold for 30 seconds it will shut the APU down -- so don't hold more than 30 seconds***
* ***Press and hold fire test button = 21 indications, go top to bottom***
  * Master warning switch indicators (2)
  * EICAS ITT FIRE annunciated (2)
  * CAS messages (3)
    * APU FIRE
    * BLEED AIR LEAK
    * WING/STAB LEAK
  * Crew warning panel (3)
    * WING/STAB LEAK
    * L BLEED AIR LEAK
    * R BLEED AIR LEAK
  * RMU select PGE -- right side -- engine (4)
    * 2 indications on each engine
  * Bottom of pedestal get all red switches illuminated (7)
    * For each engine
      * FIRE PUSH
      * ARMED (EXTINGUISHER #1)
      * ARMED (EXTINGUISHER #2)
    * APU FIRE
  * Listen for APU fire horn coming from nose
* After completing test
  * APU Master OFF
  * RMU page -> Radio
* Pilot Training Guide page 8-7

### Gear

* 2 master WARN
* 1 GEAR CAS
* 1 GEAR CWP
* 3 green down lights
* 3 in transit lights
* 1 aural alert: "Gear"

### Flaps

* 2 master CAUT
* 2 CAS
  * `FLAPS FAIL`
  * `FLAPS FAULT`
* 1 Amber box around flap setting on EICAS
* 1 aural tone
* (no CWP)

### ADC

* "Overspeed" aural alert
* Red `ADC TEST` on both primary flight displays (PFDs)
* Airspeed = 330 kt (red)
* Mach = 0.81 (red)
* Altitude = 1000 ft
* Altitude trend = +1500 fpm
* Vertical speed = +5000 fpm
* Overspeed cue = 330 kt and above
* TAS (MFD) = 466 kt
* SAT (MFD) = – 45°C
* Altimeter indicates 29.92

### Stall

* This whole process runs through on left and then right side
  * Red LSA (low-speed awareness band) moves up
  * AOA needle sweeps
  * (L/R) AOA HT FAIL amber CAS
  * Master CAUT tone and light
  * Stick shaker activation
  * "Stall" voice

### Anti-Ice

* `WG/STAB HT OK` white CAS
* `WING OVHT` and `STAB OVHT` red CWP
* Master WARN tone and light

### EGPWS

<!-- Operations Reference Manual 1-11 -->

* As soon as you see `TERR TEST` pop up in MFD let go of the button (less than 2 seconds press)
* White `GPWS SYS FAIL` CAS message is displayed momentarily
* White `GND PROX FAIL` and `WINDSHEAR FAIL` CAS messages may also appear momentarily
* `GPWS FAIL` annunciators on the upper, outboard corner of the pilot and copilot instrument panels are also displayed momentarily
* Either
  * This
    * "Glideslope" aural alert will be enunciated
    * Amber `GND PROX` is momentarily displayed in the ADI sphere on both PFDs
    * White `GPWS G/S INHB` CAS message is momentarily posted
  * Or this
    * "Glideslope Inop" aural alert will be enunciated

### TCAS

* Rotate rotary knob to empty spot
  * This is just procedural / a reminder -- it doesn't do anything
<!-- * Select TCAS display on MFD -->
* Select any 4 lines in TCAS DSPY window on RMU, press buttons
  * If do this, don't need to select TCAS on MFD
* Press and hold test button on RMU
* Aural "TCAS test" => "TCAS test pass"
* Want to see four indications in TCAS windows and ... ?

### Off

* Once done all tests, move the rotary switch to "OFF"

## Starting Engines

<!-- AFM 2-14 -->

* Step 1. Cabin Door -- Closed and latched
  * Two handles forward, no ENTRY DOOR CAS
* Step 2. L & R AV MSTR -- OFF (If desired)
  * Just leave them on
* Step 7. Engine -- Start
  * ***Co-pilot start timer when engine starts***
  * Pilot keep hand on thrust lever during start
  * Hot start is rapidly increased ITT past the 6 o'clock position
  * No checklist for hot or hung start -- CUTOFF, shutdown and call MX
    * Note max ITT attained
  * N2 nice continuous acceleration up to about 55 percent
  * Engine takes about 25 seconds to start, more than that is probably hung start
* Step 13. EX PWR Switch -- AVAIL and disconnect
  * Set to available FIRST ... then once you SEE it's AVAIL then call for disconnect
* Step 15. Anti-Ice system
  * See below
* Step 18. Bleed Air System
  * See below
* Step 20. EMER PRESS -- check
  * Check -- turn on -- check amber `L R EMER PRESS ON` CAS message -- back off

### Anti-Ice System Check

<!-- Starting Engines: Step 15. Anti-Ice System (2/4) -->

* *Note: starts with both bleeds ON (think of this as 8 button pushes)*
* a. L BLEED Switch -- OFF.
* b. WING/STAB Switch -- ON. Check both ITTs rise.
* c. R BLEED Switch -- OFF. Check both ITTs reduce.
* d. L BLEED Switch -- On. Check both ITTs rise.
* e. R BLEED Switch -- On.
* f. WING/STAB Switch -- As required.
  * *Just turn it off since it needs to be off in next step*
* g. L and R NAC Switches -- ON (NAC green EI), then as required. Engine idle will increase and N1 bugs will shift.
  * *Just turn NAC OFF when done*

### Bleed Air System Check

<!-- Starting Engines: Step 18. Bleed Air System (3/4) -->

* a. ***WING/STAB Switch -- OFF***
* b. L BLEED Switch -- OFF. Verify normal cockpit airflow.
* c. L BLEED Switch -- On
* d. R BLEED Switch -- OFF. Verify normal cockpit airflow.
* e. R BLEED Switch -- On
* f. WING/STAB Switch -- As required.
  * *On if below 10 &#176;C and visible moisture*

## Before Taxi

<!-- AFM 2-16 -->

* Step 3. Manual Mode Governor -- Checked
  * See below
* Step 5. Spoilers
  * Bring up "FLT" system page on EICAS
* Step 6. Flaps
  * We always do flaps 8 takeoffs!
  * ***Don't set flaps until lineup if in snowy conditions!***
* Step 7. Flight controls
  * Checking spoilerons
* Step 14. Emergency / Parking Brake -- Release
  * Note: skip down to non-movement "taxi and before takeoff" checks step 4 and do those before removing parking brake and moving

### Manual Mode Governor Check

<!-- Before Taxi: Step 3. Manual Mode Governor -- Check (4/4) -->

Test each engine separately, keep hands there in case engine runs away, problem with manual mode governor

* a. L ENG CMPTR Switch — MAN. (MAN white EI)
* b. Gradually advance left thrust lever until an increase in N1 is observed.
  * *Go to about 35% or so*
* c. Retard thrust lever and note decrease in N1.
* d. L ENG CMPTR Switch — ON.
* e. Repeat steps a thru d using R ENG CMPTR Switch and Right Thrust Lever.

## Taxi and Before Takeoff

<!-- AFM 2-17 -->

First start with item 4 and below -- the non-movement items.
Then release parking break and do steps 1, 2, and 3

* Step 8. Trims
  * Aileron rudder 0 trim, pitch set by weight and balance
  * Recommend waiting until lineup checks to set pitch trim (or it moves back into your lap?)
* Step 9. TO Brief
  * Below 80 KIAS abort for anything
  * Between 80 KIAS and V1 abort for 4 things
    * Fire
    * Engine failure
    * Loss of dir control
    * TR deployment
  * Anything other than these 4 is in-flight emergency
  * Brief MSA
  * Don't need to spew off memory items
* Step 11, Radar -- As required
  * Set it to STBY

After completing the latter part of this checklist, release parking brake and go back to the first 3 items of "Taxi and Before Takeoff" check.

Turn on Taxi and Recog lights

* Step 1. Brake and nose-wheel steering check
  * Throttle up to about 35% N1
* Step 2. Flight instruments -- checked
  * TBD
* Step 3.
  * Deploy TRs, don't add thrust, just deploy
  * Then push them back down
  * Keep palm of hand on thrust lever and just use fingers for TRs

## Runway Lineup

<!--
AFM 2-18
-->

* Now back to runway lineup checks
* Done by PM
* FLOW
* Transponder TA/RA mode -- line select key (will get out of standby)
* Step 6. -- APR is always desired to ARM if it is working
* MAKE SURE TO SET PITCH TRIM HERE!!

* Before takeoff (3-2-1)
  * EICAS (3)
    * REV
    * APR armed
    * REV
  * Buttons illuminated on hydraulic panel (2)
    * NOSE STEER ON
    * AUX HYD ON
  * CAS Messages (1)
    * AUTOSPOILERS ARM
* Then
  * No boxes
  * No colors
  * No dashes
* Also
  * Flaps handle set to 8&#176; and indicating 8&#176;
  * Runway number callout and identified

## Takeoff

* Before callout = see green T/O AND make sure N1 needle comes up to the bug
  * "Thrust set"
* "Airpseed alive" / "80 knots" -- "cross check" / "V1" / "Rotate" / "Positive Rate" / "Gear up"
* ***When putting the gear up, also turn landing and taxi lights off and spoiler lever RET***
* At 400' AND V2 + 25 "V2 + 25 flaps up" -- "flaps up ... indicating up"
* At 500' AGL -- Autopilot available
* FMS Source, Autopilot Mode
  * e.g. "white needles, Nav mode, speed mode"

![Learjet 45 standard calls: takeoff.](/img/learjet-45/ropat/ropat-pg-4-9-standard-calls-takeoff.png){width=600}

### Engine Out Takeoff

* Positive rate
* "Gear up"
* "Speed mode"
* "Bug V2"
* "HDG / NAV mode"
  * Depending on if vectored or a published procedure
* Half bank
  * Press `BNK` on flight guidance controller
  * Limits to 14&#176;
* Don't need to accelerate to 200 KIAS -- can just go to 180 KIAS

## Steep Turns

* Minimum 5,000' AGL
* Select crosspointer flight director command bar
  * Use `CUE` button on display controller
* 250 KIAS
  * 75% N1
* Bump power 2-4% N1
* Roll to 45&#176; bank
* 3-4 seconds of nose up trim
  * Just do nose up trim to kill AP -- leave YD on
* Do 180&#176; turns
* Lead roll-in/out by about 5&#176; to 10&#176; of heading
  * Heading bug is 8&#176; either side

![Learjet 45 steep banked turns.](/img/learjet-45/ropat/ropat-old-steep-banked-turns.png){width=600}

## Slow Flying

* Maximum 18,000' MSL
  * Maximum flaps extended altitude
* If required, set the "R" and "2" airspeed marks to VREF and VAPP

## Stalls

* Stall recovery -- lower nose = nose on horizon
* At higher altitude might have to go a few degrees below the horizon
* Only graded on recovery from stall
* ***Three chimes is autopilot disconnect? Silence with control wheel MSW?***

### Clean Stall

* Thrust levers IDLE
* Spoilers until decelerating through 150 KIAS
* Maintain altitude
* Recover at first indication
  * Recover to level flight at initial altitude

![Learjet 45 approach to stall (clean).](/img/learjet-45/ropat/ropat-fig-13-approach-to-stall-clean.png){width=600}

### Takeoff / Approach Stall

* Configure
  * Flaps 20&#176;
  * Landing gear extended
  * Bug VREF and VAPP
* Bank 15&#176; to 30&#176;
* Thrust set at 55% N1?
* Start a climb?
* Thrust levers to IDLE?
* Increase the pitch to maintain altitude and allow the airspeed to decrease
* Recover at first indication
  * ***Tip of chevron right to horizon***
  * Do not change configuration when airspeed is below VREF
  * As the airplane accelerates above VREF, call for flaps 8&#176;
  * When a positive rate of climb or increase in airspeed is indicated, call for gear up
  * When airspeed increases above VAPP + 20 kt, call for flaps up

![Learjet 45 approach to stall (takeoff or approach configuration).](/img/learjet-45/ropat/ropat-fig-14-approach-to-stall-takeoff.png){width=600}

### Landing Stall

* Configure
  * Flaps 40&#176;
  * Gear down
* Heading mode on recovery?
* 122 and 132 on VSPDS
* Recovery
  * ***Tip of chevron on horizon***
  * VREF -- goaround, flaps 8&#176;

![Learjet 45 approach to stall (landing configuration).](/img/learjet-45/ropat/ropat-fig-15-approach-to-stall-landing.png){width=600}

### Recovery

1. Lower the pitch attitude to reduce angle of attack.
2. Thrust Levers T/O (Manual APR, if Required)
3. Level the wings.
4. Accelerate out of stall condition.

## Unusual attitudes

* Minimum 5,000' AGL
* Center controls
* Disengage autopilot
  * Press CWS
* Look at all 3: both PFD and standby attitude indicator
* The pilot with the reliable attitude information assumes control and flies the recovery.
* Check airspeed:
  * Airspeed decreasing PF announces "Nose High Recovery"
  * Airspeed increasing PF announces "Nose Low Recovery"

### Nose High Recovery

* T/O thrust
  * (In the sky power high)
  * Call "Nose High Recovery, Verify Takeoff Thrust."
* Make sure spoilers down
* Leave the bank in OR increase to up to 60&#176; until 10-15&#176; degrees nose up pitch and start leveling wings
  * Let that help reduce altitude -- do NOT push forward due to negative G limits
* Back to straight-and-level

### Nose Low Recovery

* IDLE thrust
  * (In the brown, power down)
  * Call "Nose Low Recovery, Verify Idle Thrust."
* Spoilers if needed
* Wings level
* Raise the nose
* Put power back in
* Lower spoilers
* Back to straight-and-level at original altitude

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

## Approaches

*When calling for the checklists, call for descent and approach checklists.*

* Generally 180 KIAS is good airspeed to fly ... when approaching FAF?
* When putting in approach speeds (instead of takeoff speeds)
  * VR = VREF
  * V2 = VAPP
* Use acronym **ABBBC** when setting up for the approach
  * **A** -- ATIS (PM)
  * **B** -- Build - in FMS (PM)
    * Make sure for green-needle approaches "bug" is
      * Localizer frequency
      * Set course
      * BARO mins
  * **B** -- Bug - depends ILS/LOC/VOR or RNAV -- if RNAV just put mins in, for ... course, frequency, and mins (PM)
  * **B** -- Brief (PF)
  * **C** -- Checklist
* When cleared for the approach
  * ***Arm the approach***
    * Unless white needles and not yet in approach level of service then need to wait
  * Taxi lights on
  * Arm spoilers?
* Techniques for configuring
  * Do not extend flaps until below 200 kts -- because after flaps 8 you can't use spoilers -- below 200 cant use spoilers but can use flaps 20 and gear to slow down
  * As soon as you go to flaps 8 is good time to arm spoilers (since can't use them anymore anyway)
  * Callout: AUX HYD ON -- GEAR DOWN
  * Flaps 40 => call for before landing checklist
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
* Cleared to circle == heading mode
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

* Technique when being vectored flaps 8 and 180 KIAS
* Once you see GS starting to move -- flaps 20 and reduce power about 15%
* Will slow us to 132 KIAS
* GS half a dot high put gear down
* For NPA 3 miles out flaps 8&#176; 180, 2 miles flaps 20&#176;, 1 mile gear down

## Go-Around

* ***Memorize: VAPP is single engine, flaps 8 go-around speed (in landing data?)***

<!--
* POSITIVE RATE -- GEAR UP -- "HDG/NAV MODE" (whichever you want) <- include that in your callout
-->

### Single Engine Go-Around

* Procedurally single engine go-around is same as two-engine go around
  * GA button
  * TO thrust
  * Flaps 8&#176;
* Pitch to 9&#176; minimum - FD is single engine go-around at max gross weight
* Positive rate, gear up, speed mode, bug VAPP, HDG/NAV mode
  * Need to call for FMS source first?
* ***VAPP is single engine flaps 8 go-around speed***

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

