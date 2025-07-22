# Archer III G1000 NXi

![Piper Archer III PA-28-181 G1000 NXi.](/img/archer/archer-nxi.jpeg){width=800}

## Primary Flight Controls

* Stabilator
* Rudder
* Ailerons
  * Differential
* Cables between the controls and the surfaces
* Balance weights on control surfaces prevent flutter of the control surfaces in flight
  * See [FAA-H-8083-31B Aviation Maintenance Technician Handbook - Airframe](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-31B_Aviation_Maintenance_Technician_Handbook.pdf) page 4-88:

    > As a general rule, repair the control surface in such a manner that the weight distribution is not affected in any way, in order to preclude the occurrence of flutter of the control surface in flight. Under certain conditions, counterbalance weight is added forward of the hinge line to maintain balance. Add or remove balance weights only when necessary in accordance with the manufacturer’s instructions. Flight testing must be accomplished to ensure flutter is not a problem. Failure to check and retain control surface balance within the original or maximum allowable value could result in a serious flight hazard.

![TCDS 2A13 XV - B.- Model PA-28-181 (Archer III), 4 PCLM (Normal Category), 2 PCLM (Utility Category), Approved August 30, 1994, for S/N 2890206 through 2890231, 2843001 and up, and 2881001 and up. Control surface movements.](/img/tcds-2a13/tcds-2a13-control-surface-movements.png){width=800}

## Secondary Flight Controls

::: info NOTE
While the right flap can be used as a step while in the up position, it's generally advisable to avoid doing so if it is safe to prevent damaging the attachment bracket, which can break from the weight of a person.
:::

* Flaps
  * Slotted type
  * Mechanically actuated with spring to return to up position
  * See POH (VB-2749) page 7-5:

    > A past-center lock incorporated in the actuating linkage holds the flap when it is in the up position so that it may be used as a step on the right side. The flap will only support a step load in the full up position.

* Trim
  * Stabilator
  * Rudder
* Stabilator trim is an anti-servo tab, moving in the same direction as the stabilator to increase control pressure

![Archer slotted flaps. Note the hinge point offset below the flap surface creates the slot when the flaps are deflected.](/img/archer/archer-flaps.jpeg){width=600}

## Powerplant

* LHAND
  * Lycoming IO-360-B4A
  * Horizontally opposed
  * Air-cooled
  * Naturally aspirated
  * Direct-drive
* Takeoff power: 180 HP @ 2700 RPM
* Fuel injected

![Lycoming 360 series engine. [Lycoming](https://www.lycoming.com/engines/8844)](/img/lycoming-io-360.png){width=400}

![Archer Airplane Maintenance Manual (PN 761-883) 71-00-00 Page 5 Lycoming engine installation.](/img/archer-amm/archer-amm-71-00-00-page-5-lycoming.png){width=800}

![Archer Airplane Maintenance Manual (PN 761-883) 71-00-00 Page 6 Lycoming engine installation.](/img/archer-amm/archer-amm-71-00-00-page-6-lycoming.png){width=800}

### Cooling System

* Air cooled
* Air flows into the inlets behind the prop, over the engine, and exits out the bottom
* Circulating oil (along with the oil cooler) aids in cooling

### Exhaust System

![Archer Airplane Maintenance Manual (PN 761-883) 78-00-00 Page 1 Figure 1 exhaust system. Annotations removed for clarity.](/img/archer-amm/archer-amm-78-00-00-page-1-figure-1-exhaust-system.png){width=800}

### Ignition System

* Archer Airplane Maintenance Manual (PN 761-883) 71-00-00 page 2:

    > The ARCHER III is equipped with two Slick 4373 magnetos. These magnetos are engineered to give trouble free ignition, are completely self contained, and have an impulse coupling to aid in starting.

![Archer Airplane Maintenance Manual (PN 761-883) 71-10-00 Page 1 ingition system.](/img/archer-amm/archer-amm-71-10-00-page-1-ignition.png){width=800}

![[L-1363J 4300/6300 Series Magneto Maintenance and Overhaul Manual](https://www.championaerospace.com/pdfs/techdocs/F1100/L-1363J_corrected%2020210420.pdf) magneto. Additional annotations added.](/img/l-1363j-magnetos/l-1363j-figure-7-16-a-magneto.png){width=400}

### Induction System

* TBD

### Propeller

![Archer Sensenich propeller.](/img/archer/archer-prop-sensenich-logo.jpeg){width=400}

* 2-bladed
* Fixed-pitch
* Sensenich
* Model 76EM8S14-0-62
* Aluminum
* 76 inch diameter

## Fuel System

* 50 gallons total capacity
* 48 gallons usable
  * 24 gallons usable per side
* Engine driven and electric fuel pump
* Archer Airplane Maintenance Manual (PN 761-883) 71-00-00 page 1:

    > The fuel injection system is a conventional, Bendix-type RSA5 system, consisting of a fuel injection servo that meters fuel delivery based on engine intake airflow, a flow divider that evenly distributes fuel to the 4 cylinders and injection nozzles that direct vaporized fuel into the cylinder head intake ports. An alternate air control is provided in the event of blockage of the primary, filtered airflow path to the engine. The design of the system will also continue to provide the required, minimum heat rise to prevent or eliminate icing of the system by pulling airflow from around the exhaust tailpipe.

![Archer Airplane Maintenance Manual (PN 761-883) 78-00-00 Page 3 fuel system.](/img/archer-amm/archer-amm-28-00-00-page-3-fuel-system.png){width=800}

![Archer Airplane Maintenance Manual (PN 761-883) 73-10-00 Page 4 fuel distribution.](/img/archer-amm/archer-amm-73-10-00-page-4-figure-2-fuel-distribution.png){width=800}

## Oil System

* Wet sump
* Capacity: 8 quarts
* Minimum safe quantity: 2 quarts

## Electrical

* 70 ampere alternator
* 28 volt electrical system
* 24 volt primary battery
* Single external power connector
* Isolated 24 volt emergency battery

* POH Page 7-49:

    > When energized by the battery master switch the primary battery supplies electrical power to the starter, as well as all items on the Essential Bus, Non-Essential Bus and Lighting Bus.

    > The emergency battery provides electrical power to the emergency bus in the unlikely event of a complete electrical failure. With the EMERG BATT switch in the ARM position, power is applied to the emergency bus automatically if electrical power is removed from the primary electrical system. Functions available via the emergency bus include all standby instrument functions, PFD functions (nav/com #1 only), and the audio panel. The emergency battery is sized to provide a minimum duration of 30 minutes of electrical power to the emergency bus equipment.

* `ALTR AMPS`
  * Positive means the alternator is providing current *to the system*
  * This is expected and normal while the engine is running
* `BATT AMPS`
  * Negative means the battery is providing current *to the system*
  * This is normal when the electrical system is on but the engine is not running
  * This is *abnormal* when the engine is running as it indicates the battery is discharging

* Archer Airplane Maintenance Manual (PN 761-883) 71-00-00 page 2:

    > In addition to the previously mentioned components, each ARCHER III engine is furnished with a starter, 70 ampere alternator, 28 volt electrical system, shielded ignition, and fuel pump. The exhaust system is stainless steel with two mufflers. A shroud is provided to supply heat for the cabin.


## Hydraulic System

* Piper Archer has a separate master cylinder for the handbrake, see POH (VB-2749) page 7-7:

    > The toe and hand brakes have their own master brake cylinders, but they share a common reservoir.

![Archer Airplane Maintenance Manual (PN 761-883) 27-20-00 Page 5 Rudder Controls and Steering Pedal Assembly.](/img/archer-amm/archer-amm-27-20-00-page-5-brakes.png){width=440}

## Landing Gear

* Fixed tricycle gear
* Oleo struts

## Avionics

### Primary

* **Garmin G1000 system**
  * **GDU 1050**
    * PFD and MFD screens
  * **GIA 64 Integrated Avionics Unit (IAU)**
    * VHF COM/ NAV receivers
    * WAAS GPS receiver
    * Flight Director
    * Processor
    * Communication interface
  * **GSU 75 ADAHRS**
    * Located on left rear side of fuselage
  * **GMU 44 Magnetometer**
    * Located on the underside of the left wing

![[G1000 NXi Pilot's Guide 190-02130-02 Rev. A](https://static.garmin.com/pumac/190-02130-02_A.pdf)](/img/archer-poh/g1000-pilots-guide-figure-1-1-lru-diagram.png){width=600}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 1 Instrument Panel.](/img/archer-amm/archer-amm-34-25-03-page-1-instrument-panel.png){width=800}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 34 GDU 105x. Note the part number is GDU 1050 and GDU 1054 when the GFC 700 is installed.](/img/archer-amm/archer-amm-34-25-03-page-34-gdu-105x.png){width=340}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 35 Garmin GMA 1360 audio panel.](/img/archer-amm/archer-amm-34-25-03-page-35-gma-1360.png){width=260}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 36 Garmin GIA 64 Integrated Avionics Unit.](/img/archer-amm/archer-amm-34-25-03-page-36-gia-64.png){width=340}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 38 Garmin GEA 71 Engine/Airframe Unit.](/img/archer-amm/archer-amm-34-25-03-page-38-gea-71.png){width=340}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 41 Garmin GDU 75 ADAHRS.](/img/archer-amm/archer-amm-34-25-03-page-41-gdu-75.png){width=340}

![Archer Airplane Maintenance Manual (PN 761-883) 34-25-03 Page 44 Garmin GMU 44 Magnetometer.](/img/archer-amm/archer-amm-34-25-03-page-44-gmu-44.png){width=340}

### Backup

![Aspen EBD. [Evolution Backup Display Pilot's Guide (091-00027-001)](https://aspenavionics.com/documents/091-00027-001%20A%20EBD%20Pilots%20Guide%20Final%20for%20web.pdf)](/img/archer-poh/aspen-ebd.jpeg){width=280}

* Aspen Avionics Evolution Backup Display (EBD) provides backup attitude, heading, altitude, airspeed, and VSI
* The POH (VB-2749) page 2-15 states that the [Evolution Backup Display Pilot's Guide (091-00027-001)](https://aspenavionics.com/documents/091-00027-001%20A%20EBD%20Pilots%20Guide%20Final%20for%20web.pdf) is the correct supplement for the EBD

* Archer Airplane Maintenance Manual (PN 761-883) 34-24-00 page 1:

    > The Aspen Avionics Evolution Backup Display (EBD) system provides a standby display for the primary IFDS system. The EBD contains an internal ADAHRS that is used to provide attitude and heading data for the display. The EBD as installed by Piper is connected to the emergency power buss and is powered by the emergencey battery to provide a minimum of 30 minute operation in the event of power loss under all foreseeable operating conditions. In addition, the EBD contains an internal battery which will provide an additional nominal 30 minute operation in the event emergency battery exhaustion.

* Remote Sensor Module (RSM)
  * Located on the underside of the right wing
* The RSM contains the following sub-systems:
  * 3D magnetic flux (heading) sensors
  * Outside Air Temperature (OAT) sensor
  * Emergency backup GPS engine and antenna
* Archer Airplane Maintenance Manual (PN 761-883) 34-24-00 page 10:

    > The RSM is installed internally on an access cover on the underside of the aircraft right wing.

![Archer Airplane Maintenance Manual (PN 761-883) 34-24-00 Page 11 RSM installation.](/img/archer-amm/archer-amm-34-24-00-page-11-rsm.png){width=600}

### Antennas

![Piper Archer III NXi antennas (top).](/img/archer/archer-antennas-upper.jpeg){width=600}

![Piper Archer III NXi antennas (bottom).](/img/archer/archer-antennas-lower.jpeg){width=600}

## Pitot-static / Vacuum System

* TBD

![Archer Airplane Maintenance Manual (PN 761-883) 34-10-00 Page 5 pitot-static system.](/img/archer-amm/archer-amm-34-10-00-page-5-static-system.png){width=600}

## Environmental

* TBD

## Deicing and Anti-icing

* TBD

## Appendix

![Archer serial number plate. Located just in front of the leading edge of the stabilator on the left side of the empennage.](/img/archer/archer-serial-number-plate.jpeg){width=400}

## References

* [G1000 NXi Pilot's Guide 190-02130-02 Rev. A](https://static.garmin.com/pumac/190-02130-02_A.pdf)
