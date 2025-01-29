# Principles of Flight

This page covers *Task D. Principles of Flight* from the [FAA-S-ACS-25 Flight Instructor for Airplane Category Airman Certification Standards](https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf).

## Overview

![The four forces. ASA 2022 Instructor Test Prep.](/img/asa-2022-instructor-test-prep-figure-2-4-four-forces.png){width=440}

Aerodynamic theory was developed to answer important questions necessary for airplane design.
For example, to calculate how much lift a wing might produce.
This began with simple theories and models.

* 2D inviscid, incompressible flow can be used to calculate the lift on an *airfoil of infinite span*.
  * Air can be considered incompressible (constant density) at speeds of approximatly 260 knots or less.
* Viscous effects were introduced to calculate drag.
* 3D flow, or for *wings of finite span* a spanwise velocity component exists that leads to deflection of the flow downwards and additional drag.
* It's worth keeping these different concepts separate to better understand and interpret results when presented (often incorrectly) in aviation literature.
  * Viscous vs. inviscid
  * Incompressible vs. compressibile
  * 2D (airfoils) vs. 3D (wings)
* Static pressure + dynamic pressure = stagnation pressure (from Bernoulli's)
* Bernoulli's principle is a statement of conservation of energy, so is valid only for inviscid flows.

### Lift

Lift is given by the following equation

```math
\begin{equation}\label{eq.lift}
L=\frac{1}{2}\rho v^{2}SC_{L}
\end{equation}
```

Where $\rho$ is the density, $v$ is the velocity, $S$ is a reference area (such as the wing area) and $C_{L}(\alpha, Re, Ma)$ is the lift coefficient.
$\alpha$ is the angle of attack, $Re$ is the Reynolds number, and $Ma$ is the Mach number.
For the purposes of aerodynamics for pilots, we can consider $C_{L}$ as dependent only on angle of attack.

::: warning Angle of Attack
The angle between the chord line of the wing and the relative airflow.
:::

For small angles of attack, $C_{L}$ varies linearly with $\alpha$ as shown in the figure below.

![Lift and drag versus angle of attack. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-5.](/img/phak/phak-figure-5-5-lift-drag-versus-angle-of-attack.png){width=800}

When the angle of attack becomes sufficiently large, there comes a point where it no longer results in an increase in $C_{L}$.
This is called the *critical angle of attack*.

::: warning Critical Angle of Attack
The angle of attack which results in the maximum lift coefficient.
:::

Any increase in the angle of attack beyond the critical angle of attack results in a decrease in the lift coefficient.
Exceedence of the critical angle of attack is known as an aerodynamic *stall*.

::: info NOTE
Stall is a function only of angle of attack.
When the critical angle of attack is exceeded, the airfoil will stall, regardless of velocity.
:::

However, most general aviation aircraft are not equipped with an angle of attack indicator, so we try to understand for various flight conditions and configurations what *airspeed* an aircraft will stall at.
This is generally done assuming steady level flight or a steady turn.
During steady-level flight at a fixed weight, CG location, and configuration, the relationship beween airspeed and stall is fairly clear - looking at the lift equation \eqref{eq.lift}, as the aircraft slows down $C_{L}$ must increase (therefore $\alpha$ must increase).
The minimum speed at which the aircraft can maintain level flight represents the actual stalling speed in this situation.

::: warning Stall Speed
The speed below which, for a specified aircraft configuration, an aircraft will stall.
:::

* When aircraft manufacturers publish stall speeds, these variables (weight, CG location, and configuration) must be selected to then provide the stall speed. Furthermore, the flight condition must be selected (level flight or turning).
* For example $V_{\text{SO}}$ is stalling speed in *landing configuration* with *most forward CG* during *level flight* at *maximum landing weight* with *power idle*.
  * See: [14 CFR &sect;1.2 Abbreviations and symbols](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-A/part-1/section-1.2) for definitions, although this just says for $V_{\text{SO}}$ that it is the stalling speed or the minimum steady flight speed in the landing configuration.
  * Part 25 of the CFRs defines airworthiness standards for transport category aircraft. [14 CFR &sect;25.103 Stall speed](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-B/subject-group-ECFR14f0e2fcc647a42/section-25.103) defines the conditions under which stall speed is to be determined, and includes requirements, for example, that power is idle and CG is in most forward position.
  * Part 23 of the CFRs defines airworthiness standards for normal category aicraft. [14 CFR &sect;23.2110 Stall speed](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR0f27e01839859ea/section-23.2110) says that the stall speed determination must account for the most adverse conditions for each flight configuration.
* In practice the actual stall speed may be different than the published value.
  * Also, $V_{\text{SO}}$, at least in the C172SP seems to be given in KCAS. In this example it is 48 KCAS, which corresponds to 40 KIAS.
* The stall speed increases in proportion to the square root of the load factor.
  * Looking at the stall speed at the critical angle of attack: $L=\frac{1}{2}\rho v^{2}SC_{L\text{max}}$ we can see that $v\propto\sqrt{L}$
  * See [Load Factors](/cfi/tsa/principles-of-flight#load-factors) below
* The stalling speed increase as CG moves forward and decreases as it moves rearward.
  * This is because as the CG moves forward, there is an increase in downward force produced by the horizontal stabilizer to balance out the moments. But to balance out this increase in downward force, more lift must be produced by the wings. Therefore at a given flight condition, the aircraft with the forward CG will require more lift than that with a rearward CG, meaning a higher minimum speed to maintain the flight condition.

![Stall speeds. Reference: Cessna 172R Information Manual.](/img/stall-speeds-c-172.png){width=400}

![Performance. Reference: Cessna 172R Information Manual.](/img/performance-c-172.png){width=400}

### Drag

* There are a couple of ways to catagorize types of drag.
  * **Pressure drag** is due to normal forces
  * **Skin friction drag** is due to shear forces
* Another catagorization is
  * **Parasitic drag** a pure "unproductive" loss
  * **Induced drag** a necessary consequence of creating lift
* For the purposes of these notes, we'll focus on the latter catagorization.
* However, the former catagorization is useful to help understand which type of drag is dominant for various bodies.
* A *blunt body* is defined as one where pressure drag is dominant, and a *streamlined body* is one where skin friction drag is dominant.
* **Parasitic drag**
  * **Profile drag**
    * The sum of skin friction drag and form drag for an airfoil.
    * When considering a more complex 3D body (where interference drag exists) profile drag becomes synonomous with parasitic drag.
    * **Skin friction drag**
      * Due to shear stress acting on surface
      * Not captured by inviscid flow theory
    * **Form drag**
      * Due to flow separation
      * A type of pressure drag
      * Also known as profile drag
      * Not captured by inviscid flow theory (see d'Alembert's paradox)
  * **Interference drag**
    * Due to the presence of multiple bodies
    * Caused by mixing of airflow streams
    * A type of pressure drag
* **Induced drag**
  * Drag due to lift
  * Occurs on finite, lifting wings
  * The spanwise flow around the wingtips, which induce the wingtip vortices, also changes the pressure distribution in the direction of the flow, rotating the lift vector and adding an additional component of drag.
  * Thus, is a type of pressure drag.
  * Induced drag is present when analyzing inviscid, incompressible flow.
  * See: [NASA Induced Drag Coefficient](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/induced-drag-coefficient/)
  * *Induced drag coefficient* $C_{d_{i}}$ is given by the following where $e$ is the Oswald efficiency
  * $C_{d_{i}} = \frac{C_{l}^{2}}{\pi\text{AR}e}$
  * Lifting line theory shows that the optimum (lowest) induced drag occurs for an elliptic distribution of lift from tip to tip.
    * The efficiency factor $e$ is equal to 1.0 for an elliptic distribution and is some value less than 1.0 for any other lift distribution.
  * For a wing, the total drag coefficient, $C_{d}$ is equal to the base drag coefficient at zero lift $C_{d_{0}}$ plus the induced drag coefficient $C_{d_{i}}$.
    * $C_{d} = C_{d_{0}} + C_{d_{i}}$
* **Wave drag** - compressible fluid near speed of sound
  * A type of pressure drag
  * Occurs in inviscid flow theory
  * In supersonic flow d'Alembert's paradox does not occur

Understanding which type of drag is dominant helps us understand why aircraft are designed the way they are.
For example, for supersonic aircraft, wave drag becomes dominant and to minimize wave drag sharp leading edges and swept wings are used.

Understanding of induced drag is also important to avoid wingtip vortices and help us understand ground effect.
From [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf):

> When the wing is at a height equal to its span, the reduction in induced drag is only 1.4 percent. However, when the wing is at a height equal to one-fourth its span, the reduction in induced drag is 23.5 percent and, when the wing is at a height equal to one-tenth its span, the reduction in induced drag is 47.6 percent.

For example, when doing a soft-field takeoff want to get off the ground soon but stay in ground effect to build airspeed.
Also when taking off, don't retract landing gear before a positive rate is established, or the plane can sink if leaving ground effect prematurely.
When leaving ground effect, can experience a nose-up pitching moment as downwash on the horizontal tail increases.

#### Total Drag

Generally lower case letters are used to denote *profile* values whereas capital letters are used to denote *wing* or *aircraft* values.
For example, $C_{l}$ refers to an *airfoil* lift coefficient, and $C_{L}$ refers to an *aircraft* lift coefficient.
Drag $D$ is given by the following.

```math
\begin{align*}
D &= D_{0} + D_{i} \\
  &= \frac{1}{2}\rho v^{2}SC_{D_{0}} + \frac{1}{2}\rho v^{2}S\frac{C_{L}^{2}}{\pi\text{AR}e}
\end{align*}
```

$D_{0}$ is the parasitic drag term, and $D_{i}$ is the induced drag term.
Recalling lift is given by $L=\frac{1}{2}\rho v^{2}SC_{L}$ and setting $L=W$ for the steady flight condition, the $C_{L}^{2}$ term is given by:

```math
\begin{equation*}
C_{L}^{2}=\frac{W^{2}}{(\frac{1}{2}\rho v^{2}S)^{2}}
\end{equation*}
```

Substituting this in we get $D$ as a function of $v$:

```math
\begin{equation*}
D = \frac{1}{2}\rho v^{2}SC_{D_{0}} + \frac{W^{2}}{\frac{1}{2}\rho v^{2}S\pi\text{AR}e}
\end{equation*}
```

* ***Total drag is composed of a sum of a $v^{2}$ term (parasitic drag) and a $\frac{1}{v^{2}}$ term (induced drag)***
* ***At low airspeeds induced drag dominates and at high airspeeds parasitic drag dominates***

![Total drag as a function of airspeed. [Kermode, Mechanics of Flight](https://books.google.com/books?vid=ISBN1405823593)](/img/philpott-drag-figure-5-10.png){width=500}

![Drag versus airspeed. ASA 2022 Instructor Test Prep Figure 2-9.](/img/asa-2022-instructor-test-prep-figure-2-9-drag-vs-airspeed.png){width=320}

### Coordinated Flight

In a coordinated turn there is no lateral acceleration.
Uncoordinated flight is flying with the wrong turn rate for a given bank angle.
Figure 5-35 in [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) is not helpful.
The reality is the direction of the net lift vector changes in uncoordinated flight so as to not be strictly in the $z$ direction.
Alternatively, the aerodynamic contributions due to other surfaces (e.g. vertical stabilizer) need to be considered.

#### Slipping and Skidding Turns

* The figure below demonstrates the difference between a coordinated turn with
  * (A) appropriate rudder
  * (B) not enough rudder, called slipping
  * (C) too much rudder, called skidding
* In right turn if you are:
  * Slipping, you need to apply more right rudder
  * Skidding, you need to apply more left rudder
* Think of skidding like drifting in a car - too much turn angle for radius of turn, so need to apply rudder in opposite direction
* One thing this image doesn't capture is how in these different scenarios the radius of turn (should?) be different

![Slipping vs skidding turns. [Tappan Toward Introspective Human Versus Machine Learning of Simulated Airplane Flight Dynamics](http://shelby.ewu.edu/research/docs/2014_maics.pdf)](/img/tappan-figure-9-slipping-skidding-turns.png){width=400}

![[FAA-CT-8080-5H Instructor Knowledge Test Supplement](https://www.faa.gov/training_testing/testing/supplements/media/flight_ground_instructor_akts.pdf)](/img/cfi-test-supplement-figure-22-turning-force-vectors.png){width=340}

![Closest diagram I can find to actual free body diagram of turning forces. [Aviation Stackexchange: What is missing from these diagrams of the forces in slips and skids?](https://aviation.stackexchange.com/questions/77528/what-is-missing-from-these-diagrams-of-the-forces-in-slips-and-skids)](/img/turning-forces-non-normal-lift-vector.png){width=800}

### Turn Rate

Consider an aircraft with roll angle $\phi$.
Centripetal acceleration $a_{r}$ is given by $a_{r}=V^{2}/R$ where $V$ is the aircraft velocity and $R$ is the turn radius.

```math
\begin{equation*}
L\cos(\phi)=W
\end{equation*}
```

```math
\begin{equation*}
L\sin(\phi)=ma_{r}=\frac{mV^{2}}{R}=\frac{W}{g}\frac{V^{2}}{R}
\end{equation*}
```

Putting this together we get

```math
\begin{equation*}
R=\frac{V^{2}}{g\tan\phi}
\end{equation*}
```

From this we can see that there is a unique solution for $\phi$ and $R$.
The time to complete one turn is given by

```math
\begin{equation*}
t=\frac{2\pi R}{V}=\frac{2\pi V}{g\tan\phi}
\end{equation*}
```

therefore the rate of turn is given by

```math
\begin{equation*}
\dot{\psi}=\frac{2\pi}{t}=\frac{g\tan\phi}{V}
\end{equation*}
```

This relationship is helpful to see as it indicates an increase in bank angle results in a faster turn rate, as does a decrease in airspeed.
The latter might seem somewhat counter-intuitive but is important to know as it comes into play in many maneuvers which we fly, such as lazy-eights.

#### Distance Lost in Gliding 360

* Knowing how much altitude is lost in a gliding 360 degree turn can be helpful to know for the purposes of planning engine-out landings
* The following uses numbers from a C172S to help understand what might be a reasonable value to expect
* Use the following values
  * Airspeed is $V_{\text{G}}$, or 68 knots which is 35 m/s
  * Bank angle of 30 degrees
  * Glide ratio of 1.5 nm per 1000 ft lost
* Recall the expression for turn rate from above

$\dot{\psi}=\frac{g\tan\phi}{V}$

* This gives a turn rate of a little bit more than 9 degrees per second, or 40 seconds to complete a 360.
* At 68 knots in 40 seconds would travel about 0.76 nm
  * We didn't take into account the extra induced drag due to higher load factor, which in a 30 degree banked turn is only $1/\cos(30^{\circ}) = 1.15$
  * So in 0.76 nm would lose about 500 ft going straight, which we can increase 15% or so
* ==So a good number to assume for C172: about 600 ft lost in 360 gliding turn.==

### More Aerodynamic Theory

![Airfoil pressure distribution. [Mark Drela, Flight Vehicle Aerodynamics](https://books.google.com/books?vid=ISBN0262526441)](/img/drela-figure-5-2.png){width=800}

![Airfoil pressure distribution. [Kermode, Mechanics of Flight](https://books.google.com/books?vid=ISBN1405823593)](/img/bernard-philpott-figure-3-8.png){width=400}

::: warning Center of Pressure (CP)
A single point at which the lift and drag forces on an airfoil can be applied about which they exert zero moment.
:::

* **Center of pressure**
  * The location of the center of pressure moves significantly with a change in angle of attack.
  * When angle of attack increases, CP moves forward.
  * When angle of attack decreases, CP moves rearward.
  * See [NASA Center of Pressure](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/center-of-pressure/)
  * The location of the center of pressure in a *symmetrical airfoil* remains relatively constant as the angle of attack changes, but in an asymmetrical airfoil, the center of pressure moves forward as the angle of attack increases and rearward as the angle of attack decreases.

::: warning Aerodynamic Center
Point at which the pitching moment coefficient for the airfoil does not vary with angle of attack.
:::

* Aerodynamic center
  * Used to simplify calculations in aerodynamic analysis
  * Located roughly at quarter-chord.

#### Aside

* *Equal transit time* - myth that incorrectly assumes that the parcels of air that divide at the leading edge of an airfoil must rejoin at the trailing edge, forcing the air traveling along the longer upper surface to go faster. [wikipedia](https://en.wikipedia.org/wiki/Lift_(force)#False_explanation_based_on_equal_transit-time)
* *"The Step"* - It was a myth that I had heard somewhere before, where a pilot had said by climbing slightly through their desired level-off altitude and descending into it, allowed them to then cruise at a higher airspeed than would have been possible if they had just leveled off upon reaching the target altitude without overshoot.
  * This is not true - see the drag vs velocity curve. For a given velocity, there is one drag value. So for a given power setting (as long as not "behind the power curve") there cannot be two different airspeeds/AOA, while lift and drag are the same.
  * Now, lift could stay the same if for a lower airspeed and larger AOA these effects balanced out. But $C_{L}$ changes pretty much linearly with AOA, and quadratically with velocity. So for lift to remain the same, these would have to balance exactly, which is impossible.
  * Basically for fixed power setting there is one equilibrium level flight condition.
  * [Mysteries Of Flight: On The Step](https://www.planeandpilotmag.com/article/mysteries-of-flight-on-the-step/)
* *Winglets*
  * Changes lift distribution
  * Increases wingtip bending moments

## Airfoil Design Characteristics

* **Airfoil** - the cross-sectional shape of an object whose motion through a gas is capable of generating significant lift.
* Recall lift
  * $L=\frac{1}{2}\rho v^{2}SC_{L}$
* Airfoil vs. wing (2D cross-section vs. 3D)
  * Induced drag is only a 3D phenomenon
* Three primary characteristics of a lift-generating airfoil
  * **Angle-of-attack**
    * Controllable by the pilot during flight by changing aircraft attitude
  * **Camber**
    * Controllable via flaps
  * **Thickness**
    * Fixed in aircraft design
* Change these variables to change lift and drag
  * Consider different phases of flight
  * Not just *maximum* lift and drag, but rather the *curves*
* Common plots that show how aerodynamic performance changes
  * $C_{l}$ vs. $\alpha$ - lift versus angle of attack
  * $C_{l}$ vs. $C_{d}$ - lift versus drag
  * $C_{l}/C_{d}$ vs. $\alpha$ - also $L/D$ versus angle of attack
* Airfoil stall characteristics
* Flaps changing airfoil shape

![Airfoil nomenclature. ASA 2022 Instructor Test Prep. Figure 2.2.](/img/asa-2022-instructor-test-prep-figure-2-2-airfoil-nomenclature.png){width=540}

![Airfoil shapes. ASA 2022 Instructor Test Prep. Figure 2.3.](/img/asa-2022-instructor-test-prep-figure-2-3-airfoil-shapes.png){width=540}

![Airfoil stall. Reference unknown.](/img/airfoil-stall.jpg){width=340}

### Common Aerodynamic Plots

* A **drag curve** is a generic term to describe a plot of drag (or the drag coefficient) versus a number of other variables.
  * If one of these variables is lift (or the lift coefficient) it is called a **drag polar** or **drag bucket**.

![Four common airfoil plots. [NASA Technical Memorandum 4074 - Effects of independent variation of Mach and Reynolds numbers on the low-speed aerodynamic characteristics of the NACA 0012 airfoil section](https://ntrs.nasa.gov/citations/19880019495)](/img/nasa-tm-4074-figure-3.png){width=540}

![Lift curves for three different airfoils. Fundamentals of Aerodynamics. John D Anderson. Figure 5.41.](/img/anderson-figure-5-41-cl-alpha.png){width=300}

![Variations in lift curve with flaps. Fundamentals of Aerodynamics. John D Anderson. Figure 1.62.](/img/anderson-figure-1-62-cl-alpha-flaps.png){width=300}

![Effect of FLaps. [Kermode, Mechanics of Flight](https://books.google.com/books?vid=ISBN1405823593) Figure 3.33.](/img/philpott-flaps-effect-figure-3-33.png){width=400}

### Some Notes on Wings

* The three characteristics of a lift-generating airfoil were given above
* There are additional characteristics which affect lift of a wing
  * **Planform shape**
    * Rectangular
    * Elliptical
    * Delta
  * **Geometric twist**
    * Changing incidence angle of the wing along the wing
    * Usually this is done to reduce the angle of attack towards the wingtip to delay stall there and provide better stall characterstic of stalling at the wing root first
  * **Aerodynamic twist**
    * The angle between the zero-lift angle of an airfoil and the zero-lift angle of the root airfoil.
    * In essence, this means that the airfoil of the wing would actually change shape as it moved farther away from the fuselage.
    * Typically the zero-lift line is rotated downward toward the wing tips, similar to geometric twist.
  * **Aspect ratio**
* These characteristics affect not just the aerodynamics of the wing and airplane, but also it's stability and controllability
  * More on this below

## Airplane Stability and Controllability

### Overview

* **Controllability**
  * ==*Capability of aircraft to respond to pilot inputs*, especially with regard to flight path and attitude==
  * *Ease of roll, pitch, yaw*
  * If an aircraft fails to respond to a pilots inputs (or responds in the opposite manner), then it lacks controlability, for example too much adverse yaw when turning
  * Affected by CP movement
* **Maneuverability**
  * ==Quality of airplane that permits it to be easily operated and withstand stresses imposed on it==
  * *Briskness of roll, pitch, yaw*
* **Stability**
  * ==The behavior or response of an aircraft when perturbed from its equilibrium flight condition.==
* Example
  * An airline would be highly controllable but not very maneuverable - it *does* respond to pilot inputs predictably and easily, changes in aircraft velocity (roll, pitch, yaw) are slow.

![Static stability. ASA 2022 Instructor Test Prep. Figure 2.7.](/img/asa-2022-instructor-test-prep-figure-2-7-static-stability.png){width=300}

Aircraft axes system is below where

* $X$ - longitudinal axis
* $Y$ - lateral axis
* $Z$ - vertical axis

![Aircraft axes notation. [Cook: Flight Dynamics Principles](https://books.google.com/books?vid=ISBN0080982425) Figure 2.3.](/img/cook-aircraft-axes-system.png){width=540}

![Aircraft axes. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 3: Aircraft Construction](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/05_phak_ch3.pdf) Figure 3-2.](/img/phak/phak-figure-3-2-aircraft-axes.png){width=800}

*Note: when we talk about stability it can be confusing because longitudinal stability in not stability about the longitudinal axis, but rather in the longitudinal direction, so just keep that in mind.*

### Types of Stability

* Perturbations can be caused by wind, turbulence, thermals, or pilot inputs
* ==Static versus dynamic stability==
  * ==Initial tendency==
  * ==Eventual tendency==
* Types of stability
  * Positive
  * Neutral
  * Negative
* Stability about each axis
  * Longitudinal
  * Lateral
  * Directional
    * Note: lateral and directional stability more closely coupled

![Static and dynamic stability. ASA 2022 Instructor Test Prep. Figure 2.8.](/img/asa-2022-instructor-test-prep-figure-2-8-stability.png){width=800}

### Aircraft Design for Stability and Controllability

* Stability and Controllability are determined largely by aircraft design choices, and often tradeoffs between the two are made depending on the requirements of the aircraft
* These design choices affect more than just stability, and so are balanced with other requirements as well
  * For example sweep is also used to improve aerodynamic efficiency at higher speeds
* In larger modern airplanes, stability and control are also provided "artificially" through feedback systems
  * May encounter these systems in more expensive and modern GA aircraft as well
* When we consider the restoring moments created on the aircraft due to these different design choices, recall that they are *about the aircraft CG*
  * More on CG location below
* Below we focus on some basic aircraft geometries for stability
  * Dihedral / anhedral
    * Generally biggest contributor to lateral stability
    * Related to high versus low wing location and keel area
    * Increases angle of attack on dropped wing
  * Sweep
    * Lateral stability
    * Increases angle of attack on dropped wing
  * Horizontal Stabilizer
    * Longitudinal stability
      * Affected by size and location of aerodynamic surfaces with respect to CG along longitudinal axis
      * Slightly nose-heavy for pitch stability
    * Size
    * Location
      * Horizontal stabilizer far from datum, has a lot of leverage
      * Vertical location of stabilizer and downwash
      * T-tail versus conventional tail
    * Downwash from wings on tail
      * Provides downward force in level flight, even when horizontal tail is level
      * When speed is reduced, downwash on tail is reduced, aircraft tends to pitch down
      * Closing the throttle also decreases downwash on tail
  * Vertical stabilizer
    * Directional stability
    * Weathervane effect
  * Thrust line
  * Fuselage
  * Taper
  * Twist
  * Engine nacelles
* Wing planform and effect on stall characteristics
* In general, with a lot of the above design choices, given the perturbation of the aircraft consider how this affects aerodynamic forces on different surfaces, and the moment that force creates about the center of gravity
  * For example, rolling moment created on vertical stabilizer
* Stability modes
  * Longitudinal
    * Phugoid
    * Short period
  * Lateral-directional
    * Roll subsidence
    * Dutch roll
    * Spiral divergence
* Important takeaway here is to develop a better understanding for aircraft aerodynamics, and expectations for how and why an aircraft you will be flying behaves the way it does so.

![Dihedral. [Cook: Flight Dynamics Principles](https://books.google.com/books?vid=ISBN0080982425) Figure 13.5.](/img/cook-figure-13-5-dihedral.png){width=540}

![Low vs. high wing in sideslip. [Cook: Flight Dynamics Principles](https://books.google.com/books?vid=ISBN0080982425) 13.8.](/img/cook-figure-13-8-low-vs-high-wing-sideslip.png){width=540}

![Wing location and dihedral effect. [Introduction to Aircraft Stability and Control Course Notes for M&AE 5070](https://courses.cit.cornell.edu/mae5070/Caughey_2011_04.pdf) Figure 4.6.](/img/caughey-mae-5070-course-notes-figure-4-6-wing-fuselage-dihedral.png){width=640}

![Wing location and dihedral effect. [Introduction to Aircraft Stability and Control Course Notes for M&AE 5070](https://courses.cit.cornell.edu/mae5070/Caughey_2011_04.pdf) Figure 4.7.](/img/caughey-mae-5070-course-notes-figure-4-7-wing-fuselage-dihedral.jpg){width=800}

![Dihedral. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-28.](/img/phak/phak-figure-5-28-dihedral.png){width=800}

![Anhedral. [Aircraft Aerodynamic Design: Geometry and Optimization. Andras Sobester, Alexander I J Forrester. Figure 9.1.](https://www.wiley.com/en-us/Aircraft+Aerodynamic+Design:+Geometry+and+Optimization-p-9780470662571)](/img/sobester-aircraft-design-figure-9-1-anhedral.jpg){width=800}

![Polyhedral. [Aircraft Aerodynamic Design: Geometry and Optimization. Andras Sobester, Alexander I J Forrester. Figure 9.2.](https://www.wiley.com/en-us/Aircraft+Aerodynamic+Design:+Geometry+and+Optimization-p-9780470662571)](/img/sobester-aircraft-design-figure-9-2-polyhedral.jpg){width=640}

![Effect of dihedral on lateral stability. [Cook: Flight Dynamics Principles](https://books.google.com/books?vid=ISBN0080982425) Figure 3.17.](/img/cook-flight-dynamic-principles-figure-3-17-dihedral-lateral-stability.png){width=600}

![Sweep. [Cook: Flight Dynamics Principles](https://books.google.com/books?vid=ISBN0080982425) Figure 13.7.](/img/cook-figure-13-7-sweep.png){width=400}

![Keel area for lateral stability. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-31.](/img/phak/phak-figure-5-31-keel-area-lateral-stability.png){width=440}

![Rolling moment on vertical stabilizer. [Cook: Flight Dynamics Principles](https://books.google.com/books?vid=ISBN0080982425) Figure 13.9.](/img/cook-figure-13-9-rolling-moment-on-vertical-stabilizer.png){width=540}

![Directional stability. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-32.](/img/phak/phak-figure-5-32-directional-stability.jpg){width=440}

![Different planforms. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-33.](/img/phak/phak-figure-5-33-wing-planform-stall-characteristics.jpg){width=640}

### Center of Gravity Effect

* The above design choices are something the aircraft designer chooses - not the pilot
* ==The pilot *can* affect stability and control via aircraft loading and the corresponding CG location==
  * Longitudinally
    * Primary axis along which we consider CG location
  * Laterally
    * Fuel burn
* ==CG effects on spin and stall recovery==
* ==CG effects on performance==

![Effects of CG movement.](/img/effects_of_cg_movement.jpg){width=300}

* CG too far forward
  * Longer takeoff distance
  * Higher stalling speed
  * Reduced elevator effectiveness
  * Increased stability
  * Reduced fuel economy and speed
  * Limit imposed by making sure enough elevator authority to hold the aircraft in normal glide with power off / aircraft's landing characteristics are suitable.
* CG too far rearward
  * Worse than too far forward
  * Unstable
  * Reduced elevator effectiveness
    * May not be able to recover from a spin
  * Limit imposed by stability (making sure aircraft has correct damping) / stall recovery

## Turning Tendency (Torque Effect)

* *Note: most United States built aircraft engines rotate the propeller clockwise, as viewed from the pilot's seat.*
* Four causes of turning tendency below.

1. ==**Torque reaction from engine and propeller**==
    * Tends to push left wing down
    * Aircraft may be designed to minimize this, for example by offsetting the engine
    * During takeoff roll, with more force on left gear there is more friction and a left-turning tendency
2. ==**Corkscrewing effect of the slipstream**==
    * Slipstream from propellor tends to hit the vertical stabilizer on the left side causing additional left turning tendency
3. ==**Gyroscopic action of the propeller**==
    * Pitch or yaw generates a force 90 degrees in the direction of rotation
    * More prominent in tailwheel aircraft when rotating during takeoff roll
    * See section below
4. ==**Asymmetric loading of the propeller (P-factor)**==
    * Local angle of attack on propeller is not uniform
    * For example, at large (aircraft) angles of attack the descending blade (on the right side of the aircraft) will have a larger local angle of attack than the ascending blade (on the left side). Thus there will be asymmetric thrust that is higher on the right side of the aircraft causing a yawing moment to the left.
    * The "P" stands for pitch of the prop

![Aircraft turning forces. Reference unknown.](/img/turning-forces.jpg){width=340}

### Aside: Gyroscopic Precession

* The theory here is applicable both to a turning propellor and turning gyroscopic instruments
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

![Gyroscopic precession [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-49](/img/phak/phak-figure-5-49-gyroscopic-precession.png){width=440}

![Gyroscopic precession [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-50](/img/phak/phak-figure-5-50-gyroscopic-precession-tailwheel.png){width=440}

## Load Factors

::: warning Load Factor
The ratio of an aircraft's lift to it's weight.
:::

* The load factor $n$ is given by $n=\frac{L}{W}$ and is important for two reasons:
  1. It is possible for a pilot to impose a dangerous overload on the aircraft structures.
  2. An increased load factor increases the stalling speed and makes stalls possible at seemingly safe flight speeds.

* Load factor is a convenient value which to specify - it's what the occupants feel, and thus certification standards uses this value on which to set limits.
* But since the load factor is dependent on the aircraft weight, the load factors that aircraft are certified for need to meet the requirement at *maximum weight*.
* *==But this also means that if an aircraft is flown overweight, the same load factor results in greater aerodynamic load than the aircraft is designed to withstand.==*

[14 CFR &sect;23.321 General](https://www.ecfr.gov/on/2017-01-03/title-14/chapter-I/subchapter-C/part-23/subpart-C/subject-group-ECFR15834a1d934ead5/section-23.321) states:

> Compliance with the flight load requirements of this subpart must be shown - at each critical altitude within the range in which the airplane may be expected to operate; at each weight from the design minimum weight to the design maximum weight

The load factors themselves were specified in [14 CFR &sect;23.337 Limit maneuvering load factors](https://www.ecfr.gov/on/2017-01-03/title-14/chapter-I/subchapter-C/part-23/subpart-C/subject-group-ECFR15834a1d934ead5/section-23.337).
This section of the CFRs was updated on 2017-08-30, and the relevant diff can be viewed [here](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23).

The new CFRs for normal category aircraft has changed, but basically says the same thing that the limits must be met under all conditions (including worst case for load factors which is maximum weight)

[14 CFR &sect;23.2200 Structural design envelope](https://www.ecfr.gov/current/title-14/section-23.2200)

> The applicant must account for all airplane design and operational parameters that affect structural loads, strength, durability, and aeroelasticity, including: Each critical weight from the airplane empty weight to the maximum weight and the weight and distribution of occupants, payload, and fuel.

[14 CFR &sect;23.2210 Structural design loads](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-23/subpart-C/subject-group-ECFRe6d74319d7f060a/section-23.2210)

> Determine the loads required by paragraph (a)(1) of this section at all critical combinations of parameters

To see how load factor varies with roll angle $\phi$:

```math
\begin{equation*}
W=L\cos(\phi)
\end{equation*}
```

```math
\begin{equation*}
L=\frac{W}{\cos(\phi)}
\end{equation*}
```

```math
\begin{equation*}
n=\frac{L}{W}
\end{equation*}
```

```math
\begin{equation*}
n=\frac{1}{\cos(\phi)}
\end{equation*}
```

So figure 5-53 in PHAK is just a plot of $\frac{1}{\cos(\phi)}$.
Load factor varies with roll angle $\phi$ as $n=\frac{1}{\cos(\phi)}$.

![Load factor as a function of bank angle. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-53.](/img/phak/phak-figure-5-53-load-factor-vs-bank-angle.png){width=340}

The maximum speed at which an airplane may be stalled safely is the design **maneuvering speed** $V_{\text{A}}$ is the speed below which you can move a single flight control, one time, to its full deflection, for one axis of airplane rotation only (pitch, roll or yaw), in smooth air, without risk of damage to the airplane.
It basically ensures that a stall will occur before structural failure.

==Maneuvering speed changes proportionally to weight - the lighter the aircraft the slower its maneuvering speed.==
This is because at lighter weights the angle of attack required for a given flight condition is less, and therefore an abrupt maneuver which can increase the angle of attack to the critical angle of attack will result on a greater increase in load than if the aircraft were heavier and thus starting at larger initial angle of attack.

In the event that maneuvering speed $V_{\text{A}}$ is published without explicitly indicating at what weight this value is evaluated for, it is the *design weight* [14 CFR &sect;23.335(c) Design maneuvering speed VA](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-C/subject-group-ECFR15834a1d934ead5/section-23.335#p-23.335(c)).
FWIW it says airspeeds are equivalent.
Design weight seems to be weight at which compliance with each applicable structural loading condition of Part 23 was shown.
See [14 CFR &sect;27.25(a)(1)(ii)](https://www.ecfr.gov/current/title-14/part-27/section-27.25#p-27.25(a)(1)(ii))

* Be aware of the aircraft's load factor limit and how to avoid exceeding them
  * Stay below $V_{\text{A}}$ during turbulent conditions
  * Note the nonlinear increase in load factor with bank, and be mindful of bank angle in steep turns
* Understand how aircraft loading (weight) affects load factor
  * And how load factor affects stall speed
* Recognize the importance of operating the aircraft within its limitations

## Wingtip Vortices

* Produced as a consequence of a *lifting* wing
* High pressure below the wing moves around the wingtip to low pressure on top in an inward circular motion
* Wingtip vortices sink behind the aircraft
* Wake turbulence
  * Lateral vortex movement near the ground about 3 knots
    * Light crosswind tendency to keep upwind vortex on runway
* ==**Avoiding wake turbulence**==
  * ==Avoid flying through another aircraft's flight path==
    * Recall radio about Gulfstream following A380 and breaking plates
  * ==Rotate prior to the point at which the preceding aircraft rotated when taking off behind another aircraft==
    * ==Waiting 3 minutes for vortices to dissipate also provides a safety==
  * ==Avoid following another aircraft on a similar flight path at an altitude within 1,000 feet==
  * ==Approach the runway above a preceding aircraft's path when landing behind another aircraft and touch down after the point at which the other aircraft wheels contacted the runway==

![Wingtip vortices. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 4: Principles of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/06_phak_ch4.pdf) Figure 4-8.](/img/phak/phak-figure-4-8-tip-vortex.jpg){width=440}

![Wingtip vortices. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-12.](/img/phak/phak-figure-5-12-wingtip-vortices.png){width=440}

![Avoid wake turbulence. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 14: Airport Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/16_phak_ch14.pdf) Figure 14-45.](/img/phak/phak-figure-14-45-vortex-generation.jpg){width=540}

![Avoid wingtip vortices. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-13.](/img/phak/phak-figure-5-13-avoid-wingtip-vortices.png){width=800}

![Avoid wake turbulence. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-14.](/img/phak/phak-figure-5-14-avoid-wake-turbulence.jpg){width=800}

![Vortices near the ground. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-15.](/img/phak/phak-figure-5-15-vortices-near-ground.jpg){width=800}

## References

* [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook)
  * [Chapter 3: Basic Flight Maneuvers](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/04_afh_ch3.pdf)
* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
  * [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf)
  * [Chapter 14: Airport Operations](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/16_phak_ch14.pdf)
* [FAA-AC-90-23G Aircraft Wake Turbulence](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1023467)
* [NASA Center of Pressure](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/center-of-pressure/)
