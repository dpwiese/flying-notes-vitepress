# Magnetic Compass

*Note: much of the tendencies described below are specific to the northern hemisphere and the opposite behavior would occur in the southern hemisphere.*

* **Variation**
  * The difference between true and magnetic directions
  * More on magnetic variation below
* **Deviation**
  * Created by local magnetic field around aircraft
* **Dip**
  * Magnetic field isn't in the plane of the aircraft, so it tends to pull compass down
  * Only really an issue near magnetic poles, and minimum at magnetic equator
* **Oscillation**
  * Combination of all other errors
* **Acceleration / Turning**
  * These are related to, or manifestations of dip errors
  * Recall ANDS/UNOS
  * Accelerate North Decelerate South
    * This acronym indicates the *error* we would see - that is during accelerations on an easterly or westerly heading, we would see the compass falsely turn towards north when accelerating and falsely turn towards south when decelerating.
    * Causes errors when accelerating and decelerating on easterly and westerly headings
    * Acceleration causes an indication toward north, deceleration causes an indication toward south
  * Undershoot North Overshoot South
    * When turning from a northerly heading the compass will undershoot and initially show a turn in the opposite direction - undershooting the initial heading change
    * When turning from a southerly heading, the compass will overshoot and initially show a turn in the correct direction that is greater than the actual initial heading change
    * e.g. a northerly turn should be stopped prior to arrival at the desired heading

![Compass dip (unknown reference)](/img/figure-18-9-compass-dip.png){width=440}

![Vertical card compass. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 5: Flight Instruments Figure 5-22.](/img/ifh/ifh-figure-5-22-vertical-compass.jpg){width=340}

The explanation in [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) regarding compass dip-correction weights doesn't make sense.
It states:

> This is done by lowering the center of gravity below the pivot point and making the assembly heavy enough that the vertical component of the magnetic force is too weak to tilt it significantly out of the horizontal plane.

But the next sentence after it states:

> Because the dip angle is of no navigational interest, the compass is made so that it can rotate only in the horizontal plane.

So if the compass can only rotate in the horizontal ($x-y$) plane of the aircraft, it's not clear why the location of the compass card CG in the $z$ direction is of any consequence.
Also not that this explanation of compass design in [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) is different than in older FAA handbooks.
For example, in a previous FAA-H-8083-15A Instrument Flying Handbook from 2008 on page 3-14 and in a previous FAA-H-8083-25A Pilot's Handbook of Aeronautical Knowledge also from 2008 on page 7-25, the same paragraph appears:

> In acceleration error, the dip-correction weight causes the end of the float and card marked N (the south-seeking end) to be heavier than the opposite end. When the aircraft is flying at a constant speed on a heading of east or west, the float and card is level. The effects of magnetic dip and the weight are approximately equal. If the aircraft accelerates on a heading of east [Figure 3-21], the inertia of the weight holds its end of the float back and the card rotates toward north. As soon as the speed of the aircraft stabilizes, the card swings back to its east indication. If, while flying on this easterly heading, the aircraft decelerates, the inertia causes the weight to move ahead and the card rotates toward south until the speed again stabilizes.

It's also not reasonable to expect that compass technology has changed in the 8 years between the current and former edition of the PHAK.
But more importantly, there is no physical basis for the explanation in the current PHAK.
Also browsing Aircraft Spruce, the compasses require selection of northern or southern hemisphere, indicating presumably the asymmetric dip-correction weight.

There seem to be other compass types, and different ways to accommodate dip error without a weight on one of the compass "seeking" ends.
==However, for the purposes of understanding compass errors, the mental model of a weight opposite the "seeking" end is probably the best.==

## Magnetic Variation

* **==The E/W variation on isogonic lines indicates where you would end up relative to true north if you followed your compass north.==**
* Thinking back to private pilot flight planning with the flight plan form and manually charting on a sectional chart, we want to navigate based on true directions. If magnetic north and true north were collocated, life would be good. They are not, so we need to correct for magnetic directions so that we can navigate by true directions.
* Note: Figure 45 in the [FAA-CT-8080-5H Instructor Knowledge Test Supplement](https://www.faa.gov/training_testing/testing/supplements/media/flight_ground_instructor_akts.pdf) shows the sectional chart around Corpus Christi TX and easterly magnetic variation, in case that is helpful to remember anything on the test.
* By convention, magnetic variation is *positive when magnetic north is east of true north*, and *negative when it is to the west*.
  * In other words, if we are trying to fly to true north from Corpus Christi (which indicates an easterly magnetic variation) using our compass, we would *end up east of true north*. This is how to think about easterly / westerly magnetic variation - *it's where you would end up relative to true north if you followed your compass north.*
  * So, in this case we would need a more westerly heading to actually end up at true north.
* TC +W/-E Var = MC +R/-L WCA = MH (this is what we do on flight plan form)
  * Remember for the test it is *subtract E and L* and *add W and R* when going *from TC to MC*
  * It is the opposite when going the other way
* When measuring true course on a line drawn on a sectional chart, measure the course angle at the midpoint of the line
* The `K` identifier in front of airports is for ICAO recognized airports that are located in the contiguous United States

![Notice easterly magnetic variation on isogonic line. This means that if you took off from Corpus Christi and pointed your aircraft to compass north, you would end up east of true north. CFI test supplement CT-8080-5H.](/img/test-supplement-cfi-figure-45.jpg){width=440}

![Isogonic lines. [FAA-H-8083-25C Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) Figure 8-33.](/img/phak/phak-figure-8-33-cropped-isogonic-lines.jpg){width=440}
