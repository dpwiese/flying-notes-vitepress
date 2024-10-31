# Pitot Static Instruments

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

![Pitot static system and instruments. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-1.](/img/phak/phak-figure-8-1-pitot-static-system.jpg){width=540}

![Altimeter. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-2.](/img/phak/phak-figure-8-2-altimeter.jpg){width=360}

![Vertical Speed Indicator (VSI). [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-5.](/img/phak/phak-figure-8-5-vertical-speed-indicator.png){width=360}

![Airspeed indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-7.](/img/phak/phak-figure-8-7-airspeed-indicator.png){width=360}

![Airspeed indicator markings. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-8](/img/phak/phak-figure-8-8-airspeed-indicator-markings.png){width=300}

![Airspeed indicator markings for multiengine airplane. [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook) [Chapter 13: Transition to Multiengine Airplanes](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf) Figure 13-1.](/img/afh/afh-figure-13-1-airspeed-indicator.png){width=300}

![Pitot static system failure modes and instrument indications.](/img/broken-pitot-static-instruments-table.png){width=300}

# Aside: Static Pressure

For an incompressible fluid the **hydrostatic pressure** is given by the following, where $p_{0}$ indicates some reference pressure at position $z_{0}$ and $z$ actual position ($z$ is positive in the upwards direction).

TODO@dpwiese - insert picture here so sign of $z$ direction is clear

$p=p_{0}+\rho g (z_{0}-z)$  

Using a reference pressure $p_{0}$ at ground level (the altimeter setting) the pressure $p$ at a point $h$ *above* this reference point, it can be written

$p=p_{0}-\rho g h$  

We can differentiate to get the gradient but basically we can see that at a given height $h$, when atmospheric density $\rho$ is less, the pressure decreases more slowly with altitude, and so the pressure at a given height $h$ is higher, therefore the altitude indicates lower.
Similarly, for two different pressure gradients at the same pressure $p$ the one in colder atmosphere will be lower than in warmer atmosphere.

TODO@dpwiese - insert picture showing these pressure gradients

# Aside: Gyroscopic Principles

* Principles
  * Rigidity in space
  * Precession
* These principles areapplicable to understand the gyroscopic action of the propeller as well as gyroscopic instruments.
* First consider precession
  * Consider a rotating disc.
  * $h$ - moment of momentum (or angular momentum) vector, parallel to rotation
  * Moment of momentum measures an objects tendency to continue to spin, it describes the rotary inertia of a system in motion about an axis.
  * Apply couple (or pure moment) $Q$ perpendicular to $h$
  * Newton's second law for rotation is $\dot{h}=Q$, therefore the angular momentum vector $h$ is moving in the direction of $Q$
  * Applying this to an tailwheel aircraft rolling down the runway as it rotates, which is a common instance where this effect can be experienced
    * $h$ is out the nose representing the angular momentum of the spinning propellor, which is spinning clockwise from the pilot's view
    * A pitch down to raise the tailwheel is a couple $Q$ out the left side of the plane
    * Therefore $\dot{h}$ is also out of the left side of the plane, meaning the angular momentum is changing towards the left, indicating a left turning tendency

![Gyroscopic precession [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-49](/img/phak/phak-figure-5-49-gyroscopic-precession.png){width=340}

![Gyroscopic precession [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-50](/img/phak/phak-figure-5-50-gyroscopic-precession-tailwheel.png){width=340}

# Gyroscopic Instruments

* See CFI TSA document for an aside on gyroscopic precession
* Principles
  * Rigidity in space
  * Precession
* Electrically or vacuum powered
  * What is in POH might have changed and need to consult supplements, e.g. G5 attitude indicator using solid state (electrically powered) gyro instead of vacuum powered.
* Due to friction, gyroscopic instruments can drift and need to be reset periodically (for example heading indicator to compass)
  * For example, check and reset every 15 minutes
* Certain gyroscopic instruments have specific pitch and bank limits that induce a tumble of the gyro.
* Turn indicators
  * **Turn coordinator:**
    * Roll rate (initially)
    * Rate of turn (after it stabilizes)
    * Quality of turn
    * Contains **inclinometer** - the ball - "step on the ball" to coordinate flight
  * **Turn and slip indicator:**
    * Rate of turn
    * Quality of turn
* **Attitude indicator**
  * Also known as artificial horizon
* **Heading indicator**
  * Also known as **directional gyro**
  * Usually powered by the aircraft vacuum system
  * Errors in compass make it hard to use to turn to specific headings, especially in turbulent air - heading indicator helps with this
  * Some heading indicators referred to as **horizontal situation indicators** (HSI) receive a magnetic north reference from a magnetic slaving transmitter and generally need no adjustment.
    * See also: remote indicating compass
  * **Radio magnetic indicator** (RMI)
* A standard-rate turn is defined as a turn rate of 3&#176; per second (2 minutes to complete a 360 degree turn).

![C172M Vacuum system diagram. Note the heading indicator and attitude indicator are powered by the vacuum system.](/img/c172m-poh-vacuum-system.jpg){width=400}

![Typical vacuum system. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-20.](/img/phak/phak-figure-8-20-typical-vacuum-system.jpg){width=540}

![Turn indicators. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-21.](/img/phak/phak-figure-8-21-turn-indicators.jpg){width=540}

![Attitude indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-23.](/img/phak/phak-figure-8-23-attitude-indicator.png){width=360}

![Heading indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-25.](/img/phak/phak-figure-8-25-heading-indicator.jpg){width=360}
