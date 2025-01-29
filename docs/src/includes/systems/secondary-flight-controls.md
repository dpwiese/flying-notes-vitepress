# Secondary Flight Controls

::: warning Secondary Flight Controls
Those which are not considered primary and are used to change the aircraft's performance, or reduce the amount of control a pilot has to use.
:::

![Airplane control surfaces. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 5: Aerodynamics of Flight](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/07_phak_ch5.pdf) Figure 5-71.](/img/phak/phak-figure-5-71-control-surfaces.jpg){width=540}

* They may consist of wing flaps, leading edge devices, spoilers, and trim systems.
* Flaps
  * Change the relationship between lift and drag
* Slots / Slats
  * Located on the leading edge
  * Allows higher angles of attack by redirecting airflow from under the wing to the top delaying separation
* Spoilers
  * Reduce lift and increase drag

## Flaps

::: info NOTE
At the most fundamental level, flaps change the shape of the wing with the primary goal of changing the relationship between lift and drag.
:::

### Flap Types

* **Plain Flaps**
  * Characterized by a hinging a rearward section of an airfoil about a point *within the airfoils contour*
  * Main effect is an increase effective camber of the airfoil
  * Increases lift coefficient at zero angle of attack and reduces stall angle of attack
* **Split Flaps**
  * Characterized by hinging only the *lower portion* of a rearward section of an airfoil
  * Similar aerodynamically to plain flaps but with better high angle of attack performance due to less separation on the upper surface
  * Creates least change in pitching moment
* **Slotted Flaps**
  * Characterized by slots between the flap and main airfoil section when the flap is deflected
  * Flap rotates about a point *outside of the airfoils contour* creating a gap, or a slot, through which air can flow
  * Uses high energy air beneath the airfoil to delay separation over the flap
* **Fowler Flaps**
  * Charaterized by a rearward translation of the flap resulting in an increase in the effective wing chord and correspondingly an increase in wing area
  * Produces greatest change in pitching moment
  * Greatest increase in lift with minimal changes in drag

![Five common types of flaps. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 6: Flight Controls](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/08_phak_ch6.pdf) Figure 6-17.](/img/phak/phak-figure-6-17-common-flaps.png){width=800}

### Flap Aerodynamics

![Comparison of Effectiveness of Various Flaps. [Jan Roskam - Airplane Aerodynamics and Performance](https://search.worldcat.org/title/247558516) Figure 3.26.](/img/roskam-figure-3-26-flap-comparison.png){width=600}

* For example, permit a higher $C_{L}$ for a given $C_{D}$ thus permitting slower flight for takeoff and landing.
* Alternatively flaps my permit a larger $C_{D}$ for a given $C_{L}$, enabling the aircraft to better slow down.
* *Basically - flaps shift the drag bucket to obtain the desired $C_{D}$ at a given $C_{L}$*.
* The relationship between lift and drag is often plotted on a **drag curve** which is a generic term to describe a plot of drag (or the drag coefficient) versus a number of other variables.
  * One of these variables is lift (or the lift coefficient) in what is called a **drag polar** or **drag bucket**.
  * From [Modeling and Simulation of Aerospace Vehicle Dynamics, Third Edition](https://doi.org/10.2514/4.102509):

    > We go back to the latter part of the 19th century and find Otto Lilienthal experimenting with hang gliders. He took his hobby very seriously and is credited with relating lift and drag by what he called "die Flugpolare" (the drag polar).

* Flaps change the camber of the wing's airfoil and thus the zero-lift angle of attack
* Flaps also move the center of pressure (CP) aft on the airfoil
  * This effect results in a nose-down pitching moment
  * Other effects are change in airflow over horizontal stabilizer (e.g. more downwash contributing nose-up pitching moment), and increase in drag above the CG which may have different effects depending on the airplane.
  * Such secondary effects are typically not as obvious

![Variations in lift curve with flaps. Fundamentals of Aerodynamics. John D Anderson. Figure 1.62.](/img/anderson-figure-1-62-cl-alpha-flaps.png){width=340}

In the following picture, can see how the drag bucket changes for the given airfoil with different flap settings.
For example, if takeoff $C_{L}$ is 1.2, then flaps achieve this $C_{L}$ at a lower $C_{D}$ than without flaps.

![Drag polar with and without flaps. [Ideal Lift Distributions and Flap Angles for Adaptive Wings](https://doi.org/10.2514/1.38713)](/img/drag-polar-doi-org-10-2514-1-38713.png){width=440}

In the following picture, can see how the drag bucket changes for the given airfoil with different flap settings.

![Drag bucket with and without flaps. [Aviation StackExchange: Why and when to use flaps?](https://aviation.stackexchange.com/questions/5018/why-and-when-to-use-flaps/)](/img/drag_bucket_2.png){width=500}

### Flap Definitions

* The original 1921 patent by Harlan Davey Fowler was for a flap which would *"maintain the general curvature and upper camber of the airfoil"*
* Both the definitions by [Roskam](https://search.worldcat.org/title/247558516), *"Plain trailing edge flaps are formed by hinging the rear-most part of a wing section about a point within the contour"* and [Sadraey](https://search.worldcat.org/title/780415812), *"hinged at the wing trailing edge"* imply that the point about which a plain flap pivots must be within the cross section of the airfoil.
* Flaps such as those found on the Piper Archer or Cirrus SR22 whose pivot point is well outside of and below the airfoil cross section are therefor slotted flaps.

![Fowler flap diagram. [H. D. Fowler Variable Area Wing US Patent 1,392,005](https://patents.google.com/patent/US1392005A/en)](/img/fowler-flap-1921-patent.png){width=600}

![Archer Airplane Maintenance Manual (PN 761-883) 57-50-00 Page 3 flap mechanism.](/img/archer-amm/archer-amm-57-50-00-page-3-flap-mechanism.png){width=300}

![Archer flaps. Note the hinge point offset below the flap surface creates the slot when the flaps are deflected.](/img/archer/archer-flaps.jpeg){width=600}

* For more on flap definitions see
  * [Jan Roskam - Airplane Aerodynamics and Performance](https://search.worldcat.org/title/247558516)
  * [Mohammad H. Sadraey - Aircraft design : a systems engineering approach](https://search.worldcat.org/title/780415812)
* [NASA The Wind and Beyond Volume II: Reinventing the Airplane](https://www.nasa.gov/wp-content/uploads/2023/04/sp-4409-vol2.pdf?emrc=177b1a)

* Key feature of the Fowler flap is a rearward translation of the flap resulting in an increase in the effective wing chord and correspondingly an increase in wing area
* [Mohammad H. Sadraey - Aircraft design : a systems engineering approach](https://search.worldcat.org/title/780415812):

  > A Fowler flap has a special mechanism such that when deployed, it not only deflects downward but also translates or tracks to the trailing edge of the wing. The second feature increases the exposed wing area...

* [Jan Roskam - Airplane Aerodynamics and Performance](https://search.worldcat.org/title/247558516):

  > The Fowler flap (see Figure 3.22d) employs the same principle as the slotted flap, but it also moves backward while deflecting downward. The backward motion increases the effective wing area.

## Slots

* A leading-edge slot is a fixed (non-closing) gap behind the wing's leading edge.

## Slats

* Like a slot, but can be retracted when not needed
* Located on the leading edge
* Delays airflow separation allowing higher angles of attack by redirecting airflow from under the wing to the top delaying separation

![Leading edge high lift devices. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 6: Flight Controls](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/08_phak_ch6.pdf) Figure 6-18.](/img/phak/phak-figure-6-18-leading-edge-high-lift-devices.png){width=340}

## Spoilers

![Spoilers. [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) [Chapter 6: Flight Controls](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/08_phak_ch6.pdf) Figure 6-19.](/img/phak/phak-figure-6-19-spoilers.jpg){width=340}
