# Transponder

* A transponder is a radar beacon transmitter/receiver installed in the instrument panel.
* ATC beacon transmitters send out interrogation signals continuously as the radar antenna rotates.
* When an interrogation is received by a transponder, a coded reply is sent to the ground station where it is displayed on the controller's scope.
* A reply light on the transponder panel flickers every time it receives and replies to a radar interrogation. Transponder codes are assigned by ATC.
* Transponders used in general aviation are mode A
* If it can do altitude encoding it has mode C capability
* Mode C sends *pressure altitude* to ATC
  * Adjusting the altimeter's Kollsman window has no effect on the altitude read by the controller.
  * A transponder code consists of four numbers from 0 to 7 (4,096 possible codes)
* Mode S transponder sends/receives some extra data
* Mode S offers improvements over Mode C
  * 24-bit addresses instead of 4-bit
  * Transmits more data
    * Aircraft Collision Avoidance System (ACAS)
    * Heading, roll angle, etc.

## Requirements

* Must have transponder with mode C in
  * Class A, B, and C airspace
  * Above 10,000 MSL, except when 2,500 AGL.
    * See: [14 CFR &sect;91.215(b)(5)(i)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.215)
  * Within 30 nm of class B primary airports (in and above the mode-C veil)
  * Within 10 nm of certain designated airports, excluding airspace which is both outside the Class D surface area and below 1,200' AGL
  * Flying into, within, or across the ADIZ
    * [14 CFR &sect;99.13](https://www.ecfr.gov/current/title-14/section-99.13)

### Comparison Against ADS-B Requirements

* Mode-C is required in the same places as ADS-B _except_ it is _all airspace_ at or above 10,000 feet MSL, excluding airspace at and below 2,500 feet AGL (not just class E).
* Mode-C is _not_ required in the Gulf of Mexico area specified for ADS-B.
* Mode-C _is_ required into/within/across the ADIZ
  * [14 CFR &sect;99.13](https://www.ecfr.gov/current/title-14/section-99.13)
