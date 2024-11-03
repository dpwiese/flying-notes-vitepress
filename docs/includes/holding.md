# Holding Overview

* The following are some of the reasons for holds
  * Await further clearance
    * Upon reaching the clearance limit (C in CRAFT) before further clearance has been received
    * For example to allow separation with other traffic
  * Reverse course on an approach
  * Buy time to get configured for an approach
  * Lose altitude as needed before beginning an approach
  * Wait for hazardous weather or low ceilings or bad visibility to pass
  * Allow traffic congestion to clear
  * Wait for airport or runway closures to clear up
  * Equipment outages
  * Providing more time when handling abnormal situations and emergencies
  * As part of a missed approach procedure as next steps are determined

# Basic Structure of a Hold

![Holding pattern descriptive terms. [AIM 5–3–8 Holding](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-8) Figure 5-3-3.](/img/aim/aim-figure-5-3-3-holding-pattern-structure.png){width=600}

* The figure above shows the basic structure of a hold
  * ==Holding fix==
  * ==Radial==
  * ==Size==
  * ==Direction of turns==
* The holding fix can be defined by
  * The location of a VOR
  * The intersection of VOR radials
  * A VOR radial and DME
  * A GPS waypoint
  * And just about any other way to define a location
* Holds can be defined by *time* or *distance*
  * ==In timed holds, it is the *inbound* leg that is the reference==
  * ==In the case of distance holds, it is the *outbound* leg==
* Standard hold direction is *right turns*
  * In the case of timed holds, the standard hold time depends on altitude
  * 1 minute *inbound* leg at or below 14,000 ft MSL
  * 1.5 minute *inbound* leg above 14,000 ft MSL
    * To remember this **1.5** minutes comes into play at **15**,000 ft MSL
* Airlines typically ask for 10 mile legs
  * It is not a bad idea to ask for 5 mile legs to reduce workload
* Never hurts to ask ATC to slow down as soon as holding instructions are given when approaching the holding fix
  * Can save some more fuel
  * And may be the case that by the time you arrive at the holding fix you don't even need to hold anymore
* Bank angle in hold
  * Use 15&#176; bank which is approximately standard rate
* When given a hold ATC should give EFC time, but if they don't it's a good idea to ask for it so in case comms are lost, we know when to leave the holding fix
* Can hold at a GPS fix using OBS mode
  * OBS suspends GPS from progressing to next waypoint and allows us to dial in a radial
* Note: the outbound leg could be greater or less than the 1 minute inbound leg due to wind
    * More on wind correction below

# Example of a Hold on an Instrument Approach Plate

![Digital Terminal Procedures: KHEF ILS 16R IAP. Note the holding pattern at Casanova for the missed approach. Default 1 minute inbound leg.](/img/tpp/dtpp-khef-ils-16r-iap.jpg){width=600}

![Distance hold with inbound leg toward the navaid. [AIM 5–3–8 Holding](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-8) Figure 5-3-5.](/img/aim/aim-figure-5-3-5-distance-hold-toward-navaid.png){width=600}

![Distance hold with inbound leg away from the navaid. [AIM 5–3–8 Holding](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-8) Figure 5-3-6.](/img/aim/aim-figure-5-3-6-distance-hold-away-navaid.png){width=600}

![Examples of holding. [AIM 5–3–8 Holding](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-8) Figure 5-3-2.](/img/aim/aim-figure-5-3-2-hold-examples.jpg){width=440}

# Holding Entry

![Holding pattern entry procedures. (a) Parallel, (b) Teardrop, (c) Direct. [AIM 5–3–8 Holding](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-8) [Figure 5-3-4](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#S$C2d0ROBE).](/img/aim/aim-figure-5-3-4-holding-pattern-entry.jpg){width=400}

* There are three standard holding entry procedures that are used depending on the relative direction from which you are approaching the holding fix
  * **Direct Entry**
  * **Teardrop Entry**
    * Use 30&#176; angle for 1 minute legs
    * Use 15&#176; angle for 4 nm legs
    * Closer to 6&#176; angle for 10 nm legs
  * **Parallel Entry**
    * Use 45&#176; intercept angle
    * Note: Parallel hold entry does **not** fly the inbound leg outbound, it *parallels* it only
      * In fact the AIM expressly says to fly over the holding fix then turn to a *heading* that is parallel the inbound course
      * However, it's acceptable to cheat and use the pink diamond to *track* the outbound course, but again it will be parallel
      * Also the closer we are to flying the inbound course outbound the harder the intercept is
* While we should always strive to execute the proper procedure to enter into the hold, ATC doesn't really care
  * ==The most important thing is to remain in the protected area==
  * In flight this means don't get bogged down with single degree precision determinations of hold entries, or re-determining your entry if your bearing relative to the fix changes slightly
  * Rather, make a reasonable calculation of the hold entry and the necessary heading after crossing the fix, and execute this entry
* *It's good practice to determine the hold entry while on the ground if able, or as early as practicable when expecting to hold*

# Compensating for Wind

![Drift correction in holding pattern. [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf) Chapter 10: IFR Flight Figure 10-5.](/img/ifh/ifh-figure-10-5-holding-wind.jpg){width=340}

* In timed holds, both *crosswind corrections* and *timing corrections* must be made
* In distance holds, only crosswind corrections need to be made
* **Timing corrections**
  * **==Adjust outbound to achieve 1 minute inbound legs==**
  * Time the outbound leg when over/abeam the fix
    * ==Abeam the fix is most accurately determined by flag flip==
    * If the abeam position cannot be determined, start timing when turn to outbound is completed
  * If you fly an initial outbound leg of 1 minute and that gives an inbound leg of 50 seconds, then
    * Take this deficit of 10 seconds
    * Multiply it by 1.5 and apply it to the next outbound leg
    * This would give an outbound leg of 1:15
  * If you have a wind vector in the cockpit, *==fly an extra second outbound per knot of headwind on the outbound leg==*
    * Some rules-of-thumb propose flying an extra half second outbound per knot of headwind on the outbound leg
  * *Note: when flying, don't overthink these rules-of-thumb - come up with a reasonable adjustment to the outbound and fly it, don't get fixated on perfecting mental math*
  * *Note: it is better to go out a bit further and give more time on the inbound than cutting the inbound too tight*
* **Crosswind corrections**
  * ==**To compensate for crosswind, *triple* the inbound wind correction angle on the outbound leg**==
    * So if heading 10&#176; right of the inbound course is required to stay on course, on the outbound leg use a 30&#176; wind correction to the left
  * Do not compensate for wind when turning - just fly standard rate turns (15&#176; bank angle)
* The most important thing is to *stay within the protected airspace for the hold*

# Compensating for Wind Using Track Diamond

* In the following images we are holding inbound on the R-180 from the Armel VOR over Washington Dulles
* There is a 20 knot wind from the East

![Crosswind correction on inbound leg. The inbound *course* is 360&#176;, and to track this course a *heading* of 010&#176; must be flown -- a crosswind correction of 10&#176; to the *right*. The track diamond shows the *track* of 360&#176; as desired.](/img/xplane-holding-inbound.jpg){width=340}

![This shows the *wrong* crosswind correction on outbound leg -- using the same crosswind correction as on the inbound leg of 10&#176; (only here the crosswind correction is to the left) for a heading of 170&#176;. This results in a *track* of 180&#176;, which is parallel to the inbound. This might seem like a reasonable approach, but it means when the outbound leg is completed that the turn inbound, turning through a headwind, can not simply be a continuous standard rate to intercept the inbound course. Rather, the aircraft will either roll out significantly left of the inbound course, or require rolling out for a period as shown here.](/img/xplane-holding-outbound-1x-crosswind-correction-with-track.jpg){width=800}

![This shows the *correct* crosswind correction on the outbound leg. The no-wind outbound course is 180&#176; but the 10&#176; crosswind correction (to the right) on the inbound leg is *tripled* on the outbound leg. That means in this case a crosswind correction of 30&#176; (to the left on the outbound) Given the no-wind track of 180&#176; on the outbound, this correction gives a *heading* to fly of 150&#176;. This gives a *track* of 160&#176; and brings the plane a bit closer to the inbound course. When completing the outbound leg, this ensures a standard-rate turn will bring the aircraft right back onto the inbound course when the turn is completed.](/img/xplane-holding-outbound-3x-crosswind-correction-with-track.jpg){width=800}

# Holding Procedures

* Approaching the holding fix
  * Determine the hold from the chart or ATC instructions
  * Determine hold entry
  * ==**Draw the hold** on the chart to help with situational awareness and ensure the hold is as cleared==
* Prior to entering the hold
  * ==Start slowdown 3 minutes before reaching holding fix==
    * Remember it's a good idea to ask ATC to slow down as soon as you are expecting to hold
  * Power 2100 RPM
  * Use a little left rudder
  * 2 slow turns of nose-up trim
  * Airspeed should be about 90-95 KIAS
* Crossing the holding fix run **T + 5 T's**
  * **Toggle**
    * Switch to OBS/SUSP as necessary
      * SUSP prevents the GPS from sequencing
    * OBS also suspends GPS from progressing to next waypoint and allows us to dial in a radial
  * **Turn**
    * Turn to the outbound heading determined by the entry procedure
  * **Time**
    * ==Start the timer when wings are level==
    * Don't rush to start the timer, having a bit more time is better than being rushed
    * This is in case there is a tailwind on the inbound leg
    * Especially on parallel entry that has a tighter turn
    * Better to go out a bit further and give more time on the inbound than cutting the inbound too tight
  * **Twist**
    * Twist OBS to inbound course
    * Twist heading bug to outbound heading
  * **Throttle**
    * Set throttle for holding speed
    * This should have been done within 3 minutes of holding fix
  * **Talk**
    * Talk to ATC as needed or requested
* When the timer reaches 1 minute or whatever the length or duration outbound of the hold is supposed to be then run the 5 T's again
  * **Turn**
    * Inbound
  * **Time**
    * Reset the timer
  * **Twist**
    * Twist heading bug to inbound heading
  * **Throttle**
    * Verify throttle setting
  * **Talk**
    * Talk to ATC as needed or requested
* Established inbound run the 5 T's again
  * **Turn**
    * Heading as needed to maintain inbound course
  * **Time**
    * ==When getting established back inbound start the timer *at the first of*==
      * ==Wings level==
      * ==Course centered==
  * **Twist**
    * Heading bug to inbound heading
  * **Throttle**
    * Verify throttle setting
  * **Talk**
    * Talk to ATC as needed or requested
* Crossing the fix run the 5 T's again
  * **Turn**
    * To outbound heading
  * **Time**
    * Note time of inbound leg
    * Reset timer
  * **Twist**
    * Heading bug to outbound heading
    * We should know what the outbound heading is based on wind correction on our inbound leg
  * **Throttle**
    * Verify throttle setting
  * **Talk**
    * Talk to ATC as needed or requested
* When completing the turn and heading outbound
  * ==Time the outbound leg when over/abeam the fix==
  * **==Abeam the fix is most accurately determined by flag flip==**
  * If the abeam position cannot be determined, start timing when turn to outbound is completed
* Repeat this process for each turn in the hold
* Exiting the hold and returning to cruise
  * Full power
  * A little right rudder
  * 2 turns of nose-down trim
  * At 100 KIAS power to 2400 RPM
  * Trim as required

# Review of Timing

* When **initially crossing the fix** and turning outbound
  * ==Start the timer when wings are level==
  * This buys a bit of extra time on the outbound leg
* When **getting established back inbound**
  * ==Start the timer *at the first of*==
    * ==Wings level==
    * ==Course centered==
* When **completing the turn and heading outbound**
  * ==Time the outbound leg when over/abeam the fix==
  * **==Abeam the fix is most accurately determined by flag flip==**
  * If the abeam position cannot be determined, start timing when turn to outbound is completed as indicated by wings level
    * See the example below

![Consider the hold on the published missed approach at PADDR. The completion of the outbound turn cannot be determined using the VORs, so the outbound turn is considered complete when wings are level.](/img/vor-30-klgb.jpg){width=600}

# Unpublished Holds

* Holds can be published or unpublished
* When the hold is not published an ATC clearance will specify
    1. Location of the inbound leg relative to the fix (in terms of N, SE, etc.)
    2. Holding fix
    3. Radial, course, bearing, airway, or route on which the aircraft is to hold
    4. Leg length in miles if DME or RNAV is to be used
    5. Direction of turn, if left turns are to be made
    6. Time to expect-further-clearance (EFC) and any pertinent additional delay information
* Note how DME holds are defined in the image below

![Distance holds. [FAA-H-8083-16B Instrument Procedures Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook) [Chapter 3: Arrivals](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B_Chapter_3.pdf)](/img/iph/iph-figure-3-18-distance-holds.jpg){width=800}

# Holding Speed Limits

* There are limits on the maximum holding airspeed that must be complied with
  * See table below

![Holding airspeeds. [AIM 5–3–8 Holding](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html#$paragraph5-3-8) Table 5-3-20.](/img/aim/aim-figure-5-3-20-holding-airspeeds.png){width=340}

# Operational Notes

* When holding at a VOR, for example, use pink needles (GPS) instead of green needles
  * Recall 60:1 rule - 60 nm from VOR each degree is 1 nm
  * Also recall cone of confusion
* Use the MFD to your advantage to see how the aircraft is tracking relative to what you want
* Additional notes
  * When substituting GPS for DME distance, slant-range distance is usually negligible
  * Know how your aircrafts RNAV/FMS will provide guidance / exectute the hold, as different systems may behave differently, and in some cases can cause a hold to extend outside the protected area
    * For example, distance specified in terms of inbound leg rather than outbound
