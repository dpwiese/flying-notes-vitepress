# Before Departure

## Preflight Inspection

* Open checklist in QRH to preflight
* AUX pump on to charge brake accumulator and THEN pull parking brake
  * Pressure will drop but make sure it stays above 1200 psi
* Hydraulic service panel
  * Only "FULL" light

## Before Starting Engines (AFM 2-9)

* **Step 5b. EMER BATT -- EMER**
  * ***Wait 5-8 seconds after turning on main batteries to turn on EMER BATT***
    * When DU2 powers up and everything stops flashing then can turn on EMER BATT
    * Otherwise will deploy PAX oxygen masks (rubber jungle)
* **Step 5c. L & R AV MSTR -- ON**
  * ***Turn FMS on at same time as turning avionics***
    * Otherwise will have to wait a while
    * Press "ON / OFF DIM" button
* **Step 10. Flight Controls**
  * Just box for freedom of movement
* **Step 12. DU and REVERSION panels -- NORM**
  * 2 DU knobs
  * 4 reversion knobs
* **Step 13. EICAS**
  * Oil temp above -28 &#176;C
    * This from Operations Reference Manual 1-47
    * Pilot Training Guide 19-30 says above -40 &#176;C or -40 &#176;F
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
    * Set top altitude using ASEL knob on flight guidance controller
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
  * Red CAS messages (3)
    * `APU FIRE`
    * `LR BLEED AIR LEAK`
    * `WING/STAB LEAK`
  * Crew warning panel (3)
    * `WING/STAB LEAK`
    * `L BLEED AIR LEAK`
    * `R BLEED AIR LEAK`
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

* 10 indications, go top to bottom
  * 2 master WARN
  * 1 GEAR CAS
  * 1 GEAR CWP
  * 3 green down lights
  * 3 in transit lights
  * 1 aural alert: "Gear"

### Flaps

* 6 indications
  * 2 master CAUT
  * 2 CAS
    * `FLAPS FAIL` Amber CAS
    * `FLAPS FAULT` Amber CAS
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
  * `(L/R) AOA HT FAIL` amber CAS
  * Master CAUT tone and light
  * Stick shaker activation
  * "Stall" voice

### Anti-Ice

* `WG/STAB HT OK` white CAS
* `WING OVHT` red CAS and `STAB OVHT` red CWP
* Master WARN tone and light

### EGPWS

<!-- Operations Reference Manual 1-11 -->

* ***As soon as you see `TERR TEST` pop up in MFD let go of the button***
  * Less than 2 seconds press
* `GPWS SYS FAIL` white CAS message is displayed momentarily
* `GND PROX FAIL` white CAS and `WINDSHEAR FAIL` white CAS messages may also appear momentarily
* `GPWS FAIL` annunciators on the upper, outboard corner of the pilot and copilot instrument panels are also displayed momentarily
* Either
  * This
    * "Glideslope" aural alert will be enunciated
    * Amber `GND PROX` is momentarily displayed in the ADI sphere on both PFDs
    * `GPWS G/S INHB` white CAS message is momentarily posted
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
  * Two handles forward, no `ENTRY DOOR` red CAS
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
  * ***Set to available FIRST ... then once you SEE it's AVAIL then call for disconnect***
* Step 15. Anti-Ice system
  * See below
* Step 18. Bleed Air System
  * See below
* Step 20. EMER PRESS -- check
  * Check -- turn on -- check `L R EMER PRESS ON` amber CAS message -- back off

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
* g. L and R NAC Switches -- ON (NAC green EI), then as required.
  * Engine idle will increase and N1 bugs will shift.
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
  * Recommend waiting until lineup checks to set pitch trim
    * Otherwise control yoke moves towards pilots and is a bit less comfortable
* Step 9. TO Brief
  * Below 80 KIAS abort for anything
  * Between 80 KIAS and V1 abort for 4 things
    * Fire
    * Engine failure
    * Loss of directional control
    * Thrust reverser deployment
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
    * `AUTOSPLR ARMED` white CAS
* Then
  * No boxes
  * No colors
  * No dashes
* Also
  * Flaps handle set to 8&#176; and indicating 8&#176;
  * Runway number callout and identified
