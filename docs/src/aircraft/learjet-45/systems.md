# Systems

* [FAA-H-8083-31B Aviation Maintenance Technician Handbook Airframe](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-31B_Aviation_Maintenance_Technician_Handbook.pdf)
  * Has good general systems stuff

* Environmental
  * PACK = Pneumatic Air Cycle Kit or Pressurization & Air Conditioning Kit, although lowercase "pack" in Bombardier parlance is just "package"
  * ACM   - Air Cycle Machine

## General

![Learjet 45 aircraft dimensions.](/img/learjet-45/systems/aircraft-dimentions.png){width=460}

* ***Max Zero Fuel Weight is service-bulletin-based: we use 16,500 lb at CAE!***

### Overview

* Read through Quick Reference Handbook (QRH) -- all caps is CAS message
* White CAS = advisory status
* Master EICAS index = go/no-go
* Normal dark concept == normal flight is not illuminated
* MEL = list of stuff that can be broken
* Not in the MEL = required

### Doors

* Entry door messages
  * Red `ENTRY DOOR` CAS / `ENTRY DOOR` CWP
    * Any latch pin is not fully engaged/extended
    * Keylock locked from the outside with power on airplane
    * Door CB popped
  * White `ENTRY DOOR PIN` CAS
    * Door open and one or more pins not retracted
* Amber `EXTERNAL DOORS` CAS
  * Either baggage compartment door or equipment bay door not closed

### Seats

* To raise or lower the seat your inboard hand needs to grab center handle so outboard lever is naturally the one to raise and lower seat
  * Up / Down = outboard
  * Forward / backwards = inboard
* An eye reference locator is mounted on the windshield center post

## Primary Flight Controls

![Learjet 45 cockpit flight controls.](/img/learjet-45/systems/ch-9-flight-controls-figure-12-cockpit-flight-controls.png){width=600}

* Primary flight controls operated by cables, bellcranks, and pushrods.
* Aileron deflection is assisted by a mechanically operated balance tab on each aileron that progressively deflects as aileron deflection increases.
  * The balance tabs deflect in the opposite direction of aileron movement.
* In case of aileron jamming, the pilot control wheel can be disconnected from the ailerons.
  * Subsequent roll control by the pilot control wheel is accomplished exclusively by the spoilerons.
* RUDDER PEDAL Switch used to move rudders forward / aft.
* Control wheel deflection more than 5 degrees will activate the spoilerons.

* *Note: in sim pressing MSW does NOT blow down spoilers*

## Secondary Flight Controls

* Flap positions and VFE speeds
  * 8&#176; - 250 KIAS
  * 20&#176; - 200 KIAS
  * 40&#176; - 150 KIAS
* Spoilers extend up to 60&#176;

::: info NOTE
During flight cannot extend the spoilers with flaps extended.
:::

::: tip
So, do not extend flaps until below 200 kts -- because after flaps 8 you can't use spoilers -- below 200 can't use spoilers but can use flaps 20 and gear to slow down.
:::

::: tip
As soon as you go to flaps 8 is good time to arm spoilers (since can't use them anymore anyway).
:::

* The secondary flight controls consist of hydraulically actuated spoiler/spoileron panels and flaps.
* Flaps
  * Single slot fowler flaps
  * The flaps consist of a single panel on each wing.
* The spoiler/spoileron panels assist the ailerons in roll control and also function as drag devices.
* There are no movable wing leading-edge devices.
* Roll and yaw trim is controlled by conventional trim tabs while pitch trim is controlled by a variable-incidence horizontal stabilizer.
* In ARM position spoilers automatically deploy under these conditions:
  * Both squat switches are in the ground mode
  * Both thrust levers are retarded to idle or cutoff position
  * Wheel speed signal from each main gear is above 60 kt (from either wheel)
* Trim
  * Primary / secondary trim -- just two separate motors but same jack screw
  * Autopilot trims via secondary system
  * Secondary system runs at a fixed slow rate
  * So trim the plane before turning AP on

![Learjet 45 pedestal trim controls.](/img/learjet-45/pedestal-trim-controls.png){width=460}

![Learjet 45 forward pedestal controls.](/img/learjet-45/forward-pedestal-controls.png){width=460}

![Learjet 45 spoiler and flap handles.](/img/learjet-45/spoiler-flap-handles.png){width=460}

![Learjet 45 EICAS/MFD flight controls system page.](/img/learjet-45/eicas-mfd-flight-controls-system-page.png){width=460}

### Aerodynamic Features

* Stall strips
* Triangles
* Vortilons

## Fuel System

![Learjet 45 fuel system schematic.](/img/learjet-45/systems/ch-11-fuel-system-figure-1-fuel-system-schematic.png){width=600}

* The left standby pump transfer fuel FROM the left tank TO the right tank.
* RMU only shows wing quantities
* Engine page only place to see fuel used
  * Fuel used doesn't include APU fuel consumption
* Reset on engine button panel
* Wings are "wet" tanks open celled
* Fuselage is a bladder tank
* Single-Point Pressure Refueling (SPPR)
  * SPPR coupling pre-check valve
  * ==20 psi min truck pressure==
  * ==20 seconds -- needs to stop==
  * If you don't do that test and fuel up, can overfuel and shoot pressure out NACA vent onto ramp
  * If test fails need to gravity fuel
* Rough fuel guide planning burn
  * 2000 lb first hour
  * 1000 lb every hour after that
* Approved fuels
  * Jet A
  * Jet A-1
  * JP-5
  * JP-8
* Are allowed to mix fuels
* Max imbalance is 200 lb all phases of flight
* (SB affects this, but at CAE its always 200 lb)

## Hydraulic System

![Learjet 45 hydraulic system.](/img/learjet-45/systems/ch-12-figure-5-hyraulic-system.png){width=600}

* 3000-psi hydraulic system
* Two independently operating systems (main and auxiliary), which share a common hydraulic reservoir and source of reservoir pressurization.
  * Main hydraulic system uses two engine-driven pumps
    * Either engine-driven pump is sufficient
  * Auxiliary hydraulic system uses a DC motor-driven pump.
* The reservoir is located forward of and above the tailcone baggage compartment and is pressurized by regulated engine bleed air.
* Make a backwards "h" on throttle quadrant (up to gear) to identify hydraulic systems
  * Brakes
  * Spoilers
  * Thrust reversers
  * Flaps
  * Gear (and main gear doors)
* ***Anything above the wing can only be powered by engine driven pump***
* Anything below can be powered by either engine driven OR AUX pump
* Note: before putting the gear down, turn on the AUX pump first
  * Checklist doesn't say this, but it's good practice
* ***Memorize: MIL-H-5606 hydraulic fluid***
* Alternate which engine you start first so you can get an indication of the hydraulic pressure from both left and right engines independently
* If the main and auxiliary hydraulic systems malfunction, a hydraulically charged pneumatic brake accumulator provides emergency braking.
* ***Main hydraulic system cannot charge brake accumulator.***
  * Can provide hydraulic pressure to everything else.
* Hydraulic failure scenario
  * QRH start page A-50 Amber `MAIN HYD PRESS` CAS => A-103
    * Main hydraulic pressure not in 1500 - 3800 psi limits
  * Step 11. L & R IGN -- ON because potential no flap landing => higher pitch => potential compressor stall

::: tip
Before putting the gear down, turn on the AUX pump first.
Checklist doesn't say this, but it's good practice.
:::

* The main hydraulic system has two identical engine-driven pumps, one located on each engine accessory gearbox.
* The pumps are a variable-volume, piston type that maintain a nominal system pressure of 3000 psi.
* The auxiliary system provides three basic functions:
  * Hydraulic pressure to charge the brake accumulator
  * Backup power for the flaps, landing gear, and wheel brakes if the main system malfunctions
  * Power to operate hydraulic services via the main filter manifold during ground servicing
* The crossflow valve is used in conjunction with the auxiliary system to provide power to the flaps and landing gear.
* A brake system shuttle valve automatically moves to allow the hydraulic system with the highest pressure (main or auxiliary) to power the brakes.
* The accumulator provides at least six emergency brake applications or parking brake pressure for approximately 48 hours.
* The auxiliary pump operates on 28 volts DC controlled from the L ESS BUS and powered from the left generator bus.

<!--
Two motor-driven hydraulic firewall shutoff valves are located in the supply line to each engine-driven hydraulic pump.
These valves isolate the supply of hydraulic fluid from the reservoir to the engine-driven pumps during an engine fire.
Each valve is electrically operated by the corresponding FIRE PUSH switch on the ENGINE/FUEL panel.
The firewall shutoff valves are powered from the respective emergency hot bus.
Loss of power causes the valves to remain in their last position.

When the auxiliary pump is activated with the aircraft on the ground prior to engine start, the system provides hydraulic pressure to the wheel brakes and charges the brake accumulator to the required pressure.

After initial gear retraction, selecting the landing gear lever to DN automatically energizes the auxiliary pump.
In this role, the system serves as a standby, alternate source of power if the main system malfunctions.
During this phase, it also recharges the brake accumulator for aircraft parking once on the ground or for emergency brake application on touchdown if the main and auxiliary systems malfunction.
Selecting the landing gear lever to UP automatically de-energizes the auxiliary pump.

If the main hydraulic system malfunctions, a mechanical release mechanism can lower the main gear inboard doors, main landing gear, and nose landing gear.
If the brake accumulator is charged to 3000 psi from the auxiliary system prior to takeoff, it provides sufficient stored energy for emergency braking.
-->

## Ice and Rain Protection

![Learjet 45 anti ice.](/img/learjet-45/systems/ch-13-figure-10-anti-ice.png){width=600}

::: info NOTE
The anti-ice systems must be turned on before icing conditions are encountered.
Icing conditions exist when:

* Outside air temperature (OAT) on the ground and for takeoff is 10 &#176;C (50 &#176;F) or below, or the static air temperature (SAT) in flight is 10 &#176;C to –40 &#176;C (50 &#176;F to –40 &#176;F) and visible moisture in any form is present (such as clouds, fog with visibility of one mile or less, rain, snow, sleet, or ice crystals)
* OAT on the ground and for takeoff is 10 &#176;C (50 &#176;F) or below when operating on ramps, taxiways, or runways where surface snow, ice, standing water, or slush may be ingested by the engines or freeze on engines, nacelles, or engine sensor probes.
:::

## Landing Gear and Brakes

* Landing gear is electrically controlled and hydraulically actuated
* Hydraulic to the gear is provided by the main hydraulic system
  * The crossflow valve is used to use auxiliary hydraulic system for the landing gear (and flaps)

![Learjet 45 landing gear.](/img/learjet-45/systems/ch-14-figure-5-landing-gear.png){width=600}

The gear caution indications are activated when one of the following two situations exist:

* All of the following occur:
  * One or more landing gear not down and locked
  * Both thrust levers set less than MCR
  * Airspeed below approximately 170 KIAS
  * Altitude below approximately 14,500 ft
  * Radio altimeter invalid
* Either of the following occurs when airspeed is greater than 210 KIAS:
  * One or more landing gear in transition
  * Either main gear door not up and locked

The nosewheel steering system (NWS) is a steer-by-wire digital system.

The NWS system limits steering authority as a function of ground speed to provide steering angles which are within safe aircraft NWS operating parameters.
At ground speeds less than 5 kt, the nosewheel may be turned to a maximum of 60&#176; in either direction.

Steering authority on takeoff decreases with increasing ground speed.
As the ground speed increases to 70 kt, the maximum wheel deflection is progressively reduced to +/-7&#176;.

* Nosewheel steering is ELECTRIC
* MSW -- press and release thrust idle if loss of control on ground -- disconnects nosewheel steering
* Indications that gear is down and locked
  * NOSE WHEEL STEERING LIGHT ON == NOSEGEAR DOWN AND LOCKED
  * Also in transit lights extinguished = down and locked
  * taxi lights on = down and locked
  * No gear warning if gear not down and locked and below MCR ... flaps ... below 500'
* Both main and nose gear limited to 165 kts

## APU

* APU ground use only! tied to squat switches
  * (Learjet 40 does not have APU)
* Can't run APU while getting deicing fluid or it will suck up deicing fluid
* Can't run APU while gravity fueling
* Wait 30 seconds MINIMUM after turning off APU to turn (other switch) off
  * Basically wait until the right standby fuel pump (that was feeding fuel to the APU) automatically goes off
* APU fail CAS usually due to shutoff valve
* So can't takeoff cause don't want fuel going to APU in flight
* In mid-90s F ambient temps APU will fail due to overheat, might be on for like 20 minutes before it overheats and shuts off
* APU burns 150 pph
* APU has its own dedicated fire bottle

## Fire Protection

* 3 heat sensitive elements wired in series
* ***FIRE PUSH = shuts down fluids, air, and electrics***
  * Fluids
    * Fuel
    * Hydraulics
  * Air
    * Bleed air
  * Electrics
    * Generator
    * Alternator
    * Ignitors
    * Thrust reversers
* Wait 15-20 seconds after firing one bottle before firing next so the ball valve can "reset"
* 400 - 800 psi is normal pressure on fire bottles
* Fire bottle discharge indicators
  * Red -- thermal discharge (to prevent overpressure)
  * Yellow -- fire bottle squib fired

## Electrical System

* AC system
  * Windshield heat only -- left alternator = left windshield
* DC system
  * Sims have 27 amp-hour Ni-Cad, lasts 30 minutes
  * Emergency battery lasts 1 hour
  * These drain concurrently
  * So after main batteries drain, will have 30 minutes of emergency left
* Circuit breakers -- Red ring = emergency battery bus (powered by emergency battery)
* First thing when getting in plane = turn both batteries on at same time
  * DU2 will power up, always powered off main batteries
  * Wait minimum 5-8 seconds (basically wait until DU2 powers up and everything stops flashing)
  * Don't want to interrupt the ... self test because if you do we will deploy PAX oxygen masks
* "EXTERNAL POWER" CAS indicates that SOMETHING is plugged in
* AVAIL on the EX PWR electrical button means its actually correct?
* Essential busses won't come online unless you have some kind of generator
* Electrical priority
  * GPU
  * Generators
  * APU
* Normal operations it's a split bus system
* Bus tie should close automatically when on GPU or APU or single-generator operations
* Also any time we are starting the engines
* Most of the time its connected already because we are doing APU or GPU starts

## Pneumatic System

The pneumatic system provides bleed air from the left and right engine compressor sections of each engine to aircraft systems which use bleed air.
Many systems on the Learjet 40/45 require pneumatic power to operate.
Engine bleed air is used for airframe anti-icing, environmental control, pneumatic valve control, hydraulic reservoir pressurization, and cabin pressure control system vacuum supply.
The pneumatic system provides engine bleed air at the required pressure and temperature to these systems.
Low-pressure bleed air, supplemented automatically as required by high-pressure bleed air, is supplied to the environmental control unit to meet environmental control system and pressurization requirements.

![Learjet 45 bleed air.](/img/learjet-45/systems/ch-18-figure-2-bleed-air.png){width=600}

Each engine can independently supply bleed air for the systems that require it.

* Two ways to get the emer press valves to open
  * Manually -- press the button
  * Automatically -- over 9,500 feet cabin altitude
* Routes LP unconditioned air into cabin -- hot air
* NAC valves fail open
* HI FLOW just gives pack higher pressure air
* HP valves open when descending to maintain cabin pressure
* Anti-ice check is checking function of lots of valves
* (APU bleed must be off when doing bleed check ... see expanded procedures ... also PACK on?)
* Outflow valves max 13,700 or 9.7 delta p
* EMER power available == can control pressurization
  * Need to do it manually?
* ***Memorize: Low altitude alerting setpoints (see photo)***
  * See Pilot Training Guide page 7-15
* Max takeoff altitude 14,000
* Outflow valves in the FRONT of the aircraft
* When cabin smoke memory items -- this brings all the smoke up front into the cockpit
* HI-FLOW limitations (see AFM page 1-12) must be off when:
  * TO power selected
  * For landing
  * Above 30k feet
  * Anti-ice on
* Need generator or APU for heat in baggage compartment
* Keith AC on aircraft without APU

## Powerplant

![Learjet 45 power plant.](/img/learjet-45/systems/ch-19-figure-11-power-plant.png){width=600}

![Learjet 45 power plant.](/img/learjet-45/systems/ch-19-figure-12-engine-airflow.png){width=600}

![Learjet 45 EICAS - SUMRY page.](/img/learjet-45/systems/ch-20-figure-5-eicas-sumry-page.png){width=460}

![Learjet 45 EICAS - FLT page.](/img/learjet-45/systems/ch-20-figure-9-eicas-flt-page.png){width=460}

![Learjet 45 Engine/Fuel/DEEC control panel.](/img/learjet-45/engine-fuel-deec-control-panel.png){width=600}

<!--
The TFE731 is a two-spool, geared front fan, medium bypass ratio turbofan engine.

The fan is driven by a planetary gearbox from the low-pressure (N1) spool which consists of a four-stage axial compressor coupled through the center shaft to a three-stage, low-pressure (N1) axial turbine.

The high-pressure spool consists of a single-stage centrifugal compressor (N2) driven by a single-stage (N2) axial turbine through the outer concentric shaft.

* DEEC controls the FCU
* Thrust levers mechanically connected to FCU
* The FCU is mounted on the fuel pump attached to the AGB

The FCU has a mechanical governor that protects the engine from overspeed (105% N2 rpm)
-->

* ***Memorize: engine model number TFE-731-20AR (early) TFE-731-20BR (late)***
* Engine overview (page 19-1)
  * Early Learjet 45
    * TFE-731-20AR
    * 3,500 lb at SL up to 87 &#176;F
    * APR gives 150 lb extra thrust (page 19-25)
  * Late Learjet 45
    * TFE-731-20BR
    * Same as above except temp is up to 103 &#176;F
* Bypass ratio 3.1:1
* Engine Computer Toggle Switch (page 19-4)
  * OFF / MAN / ON
  * "ENG CMPTR" switch in the MAN position provides (page 19-23)
    * Surge valve partially open (1/3 open)
    * Fuel scheduling is controlled by the FCU
    * Limits are controlled by the pilot (over-temperature protection not automatically available)
    * Available for emergency use and maintenance troubleshooting
* Overspeed protection
  * FCU has mechanical governor with 105% N2 limit
  * 107% N1 and 109% N2 are hard limits, when those are exceeded engine will be shut down
  * Should the mechanical overspeed protection fail, the DEEC activates the ultimate overspeed solenoid valve to a closed position at 107% N1 or 109% N2 and cuts off fuel flow to the engine.
    * This feature is not functional if the applicable ENG CMPTR switch is in the OFF position.
* Engine sync
  * We normally sync N1
  * SYNC not approved for T/O or landing or single engine ops
* The following components are driven by the accessory gearbox (AGB) (page 19-17)
  * *A Fat Horse Ate Donuts Outside*
    * A - AC alternator
    * F - Fuel pump and fuel control unit (FCU) components
    * H - Hydraulic pump
    * A - Auxiliary motive fuel pump
    * D - DC starter/generator
    * O - Oil pressure and scavenge pumps
* Oil
  * ***Memorize: Type II Oil is what we use***
  * Check within 15 min (but hard limit 1 hour after shutdown)
  * Otherwise need to start back up and stabilize and then check
  * (these engines don't burn oil)
* APR ARMED -- set this mode before takeoff
  * In case of engine failure then DEEC will activate it automatically (e.g. when difference in N2, page 19-25)
* Ignitors
  * Green IGN == both ignitors working
  * White IGN == one ignitor working
* Thrust reversers
  * Main squat switches in ground mode (page 19-36)
  * Thrust IDLE
* Sort me
  * Takeoff thrust is limited to 5 minutes (TOTAL?)
  * Starting 1 minute TOTAL?
* Don't need to memorize ITT, temps, pressures
* ***Memorize: 30 &#176;C -- minimum temp we need before using the engines***
  * Until then thrust leversmust stay at IDLE
  * Box goes away, now can start using thrust lever
  * Pilot Training Guide 19-30
* Wait time after start attempt see "Starter Cooling Periods" (page 19-32)
* Should the starter remain engaged above 51% N2, the START annunciator turns amber. (page 19-32)
* Airstart
  * Do not attempt an airstart following an engine failure which was accompanied by indications of internal engine damage or fire.
  * Do not attempt an airstart without an indication of N1 rotation. (AFM 4-21)


<!--
The DEEC provides electronic overspeed protection and activates the ultimate overspeed solenoid valve at 107% N1 or 109% N2 to cut off fuel flow to the engine.

Ultimate overspeed protection (107% N1 or 109% N2) occurs even if the DEEC is in manual mode.
-->

## Emergency Equipment

* 3 fire extinguishers
    * Under pilot seat
    * Under copilot seat
    * Lavatory
* Life jackets
    * Behind crew seats
    * Under passenger seats
    * Lavatory
* Crash ax
* First aid kit
* Flashlights
* Smoke goggles

## Oxygen System

* Green oxygen disk in nose - oxygen overpressure discharge
  * If overpressure discharge occurs, the quantity indication on EICAS is three amber dashes (page 6-7)
* Oxygen quantity on EICAS doesn't mean oxygen is available because shutoff valve could be off
* Make sure no "OXYGEN OFF" CAS message!
* Quantity displayed in liters
* See oxygen duration chart
* Two ways to get pax ox control valve to open
  * Manually with button
  * Automatically if cabin alt over 14,500'
* Oxygen masks
  * EROS mask in SIM #2
  * Puritan Bennett mask in SIM #1

## Limitations (Sort me)

* Water on runway
  * A runway is considered to be wet when it has a shiny appearance due to a thin layer of water not exceeding 0.125 in. (3mm), but without significant areas of standing water.
  * Maximum water / slush on runway is 0.75 in
* Limitations
  * Paved only
  * Max water depth 0.75 in
  * Max demonstrated crosswind -- 22 kts (not limiting)
  * Max tailwind 10 kts (is limiting)
