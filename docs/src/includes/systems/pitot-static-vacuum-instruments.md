<!--@include: ./docs/src/includes/instruments/pitot-static.md-->

## Static Pressure

Consider the atmosphere as an ideal gas.
The moisture content in the air also affects its density.

```math
\begin{equation*}
p = \rho RT
\end{equation*}
```

From [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf):

> Adjustments to compensate for nonstandard pressure do not compensate for nonstandard temperature. Since cold air is denser than warm air, when operating in temperatures that are colder than standard, the altitude is lower than the altimeter indication.

> When flying into a cooler air mass while maintaining a constant indicated altitude, true altitude is lower. If terrain or obstacle clearance is a factor in selecting a cruising altitude, particularly in mountainous terrain, remember to anticipate that a colder-than-standard temperature places the aircraft lower than the altimeter indicates. Therefore, a higher indicated altitude may be required to provide adequate terrain clearance.

> When the air is warmer than standard, the aircraft is higher than the altimeter indicates.

![Effects of nonstandard temperature on an altimeter. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-3.](/img/phak/phak-figure-8-3-altimeter-nonstandard-temperature.png){width=800 border=true}

![[FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Figure 5-8 Effects of nonstandard pressure on an altimeter of an aircraft flown into air of lower than standard pressure (air is less dense).](/img/ifh/ifh-figure-5-8-nonstandard-pressure.png){width=440 border=true}

For an incompressible fluid the **hydrostatic pressure** is given by the following, where $p_{0}$ indicates some reference pressure at position $z_{0}$ and $z$ actual position ($z$ is positive in the upwards direction).

TODO@dpwiese - insert picture here so sign of $z$ direction is clear

```math
\begin{equation*}
p=p_{0}+\rho g (z_{0}-z)
\end{equation*}
```

Using a reference pressure $p_{0}$ at ground level (the altimeter setting) the pressure $p$ at a point $h$ *above* this reference point, it can be written

```math
\begin{equation*}
p=p_{0}-\rho g h
\end{equation*}
```

We can differentiate to get the gradient but basically we can see that at a given height $h$, when atmospheric density $\rho$ is less, the pressure decreases more slowly with altitude, and so the pressure at a given height $h$ is higher, therefore the altitude indicates lower.
Similarly, for two different pressure gradients at the same pressure $p$ the one in colder atmosphere will be lower than in warmer atmosphere.

TODO@dpwiese - insert picture showing these pressure gradients

## Gyroscopic Principles

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

![Gyroscopic precession [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-49](/img/phak/phak-figure-5-49-gyroscopic-precession.png){width=360 border=true}

![Gyroscopic precession [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-50](/img/phak/phak-figure-5-50-gyroscopic-precession-tailwheel.png){width=360 border=true}

# Gyroscopic Instruments

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

![C172M Vacuum system diagram. Note the heading indicator and attitude indicator are powered by the vacuum system.](/img/c172m-poh-vacuum-system.jpg){width=400 border=true}

![Typical vacuum system. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-20.](/img/phak/phak-figure-8-20-typical-vacuum-system.jpg){width=540 border=true}

![Turn indicators. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-21.](/img/phak/phak-figure-8-21-turn-indicators.jpg){width=540 border=true}

![Attitude indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-23.](/img/phak/phak-figure-8-23-attitude-indicator.png){width=360 border=true}

![Heading indicator. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 8: Flight Instruments](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/10_phak_ch8.pdf) Figure 8-25.](/img/phak/phak-figure-8-25-heading-indicator.jpg){width=360 border=true}
