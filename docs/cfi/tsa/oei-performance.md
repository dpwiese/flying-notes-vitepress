# OEI Performance

This page covers *Task P. One Engine Inoperative (OEI) Performance* from the [FAA-S-ACS-25 Flight Instructor for Airplane Category Airman Certification Standards](https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf).

## Performance Charts

* TBD

## Effects of Exceeding Limitations

* TBD

## Effects of Atmospheric Conditions on Performance

* TBD

## Factors to Consider when Determining Performance

![E55 Baron (N3622A) OEI climb gradient](/img/c55-baron-poh/c55-baron-poh-page-5-28-oei-climb-gradient.png){width=660}

![E55 Baron (N3622A) Takeoff weight to achieve positive OEI climb rate](/img/c55-baron-poh/c55-baron-poh-page-5-21-takeoff-weight-oei-climb.png){width=460}

* Basically follow everything in POH/AFM
* Takeoff/landing performance
  * Winds
  * Surface condition
  * Density altitude
  * Runway slope
* Cruise performance
  * Winds
  * Density altitude
  * Lean technique
* If there is anything *not* covered in POH/AFM, use good ADM and act conservatively
  * For example, flat spots on tires may decrease landing performance on a wet surface
* Pilot performance
  * For example, demonstrated crosswind doesn't mean it's smart for the pilot to do that
* Make sure to do in flight what you have planned for on ground
  * For example, if planned for given RPM for fuel burn calculations, not using that power setting in flight will change actual fuel burn versus planned
* From AFH page 13-32 -- Without specific guidance for zero sideslip, a bank of 2 degrees and one-third to one-half ball deflection on the slip/skid indicator toward the operative engine is suggested.
* Generally, weight negatively impacts performance
* Generally, a forward CG decreases performance and increases stability

## OEI Aerodynamics

### Critical Engine

::: warning Critical Engine 
The engine which if it fails *most adverserly* effects aircraft performance and handling. [14 CFR &sect; 1.1](https://www.ecfr.gov/current/title-14/part-1/section-1.1#p-1.1(Critical%20engine))
:::

* ==Determining critical engine (**PAST**)==
  * ==**P** - **P-factor**==
    * **Yaw** - due to larger lever arm from center of thrust on the right engine compared to the left
  * ==**A** - **Accelerated slipstream**==
    * **Roll** - increased lift due to ==accelerated slipstream is outboard of the right engine and inboard of the left engine,== hence a longer moment arm on the right as compared to the left
    * **Pitch** - ==accelerated slipstream from the left engine has more interaction with the horizontal stabilizer,== meaning if the left engine fails there is a larger pitching moment change than if the right engine fails
  * ==**S** - **Spiraling slipstream**==
    * **Yaw** - The spiraling slipstreams move to the right (due do the accelerated slipstream) and therefore ==the spiraling slipstream from the left engine interacts more with the vertical stabilizer creating a yawing moment to the left, which is a restoring moment if the right engine is lost.== But if the left engine is lost, there is no restoring moment due to the spiraling slipstream from the right engine.
  * ==**T** - **Torque**==
    * **Roll** - ==Due to the accelerated slipstream and the rolling moment due to the vertical stabilizer, the aircraft will tend to roll towards the inoperative engine. The torque of the propellor on the aircraft tends to roll the aicraft to the left. Hence, if the right engine fails, the torque effect helps balance the roll, whereas if the left engine fails the torque effect worsens the rolling moment.==
* When an engine fails the aicraft will tend to:
  * Yaw - towards the inoperative engine
  * Roll - towards the inoperative engine
  * Pitch - down

::: info NOTE
Conventional engines rotate clockwise when viewed from the pilot's position, therefore on most twins the *left engine* is the critical one.
:::

![Aircraft turning forces. Reference unknown.](/img/turning-forces.jpg){width=400}

![Critical engine. ASA 2022 CFI test prep.](/img/asa-2022-cfi-test-prep-figure-3-7-critical-engine.png){width=400}

### Minimum Control Speed ($V_{\text{MC}}$)

* Definition from [14 CFR &sect;23.149 - Minimum control speed (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149)

> VMC is the calibrated airspeed at which, when the critical engine is suddenly made inoperative, it is possible to maintain control of the airplane with that engine still inoperative, and thereafter maintain straight flight at the same speed with an angle of bank of not more than 5 degrees.

::: warning Minimum Control Speed
Speed below which we cannot maintain directional control if the *critical engine* quits *suddenly*.
:::

* **Minimum control speed ($V_{\text{MC}}$)**
  * ==Denoted by a *red line* on airspeed indicator==
  * See more below
* [FAA-AC-23-8C](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676)
  * Page 70

    > There are variable factors affecting the minimum control speed. Because of this, VMC should represent the highest minimum airspeed normally expected in service.

* However in old CFR that was current at time of certification [14 CFR PART 3 - Airplane Airworthiness; Normal, Utility, and Acrobatic Categories](https://tile.loc.gov/storage-services/service/ll/cfr/cf/r1/96/40/15/-T/14/CI/P3/cfr1964015-T14CIP3/cfr1964015-T14CIP3.pdf) the regulation seems different in that maximum gross was used.

![14 CFR &sect;3.105 - Requirements (1960s)](/img/camel/old-cfr-3-105-requirements.png){width=340}

![14 CFR &sect;3.111 - Minimum Controllable Airpseed (1960s)](/img/camel/old-cfr-3-111-minimum-controllable-airspeed.png){width=340}

* Note that the below has changed when Part 23 was rewritten
  * The below should be accurate for most light twins that were certified before this change
  * Previous Part 23: [14 CFR &sect;23.149 - Minimum control speed (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149)
  * Current Part 23: [14 CFR &sect;23.2135 - Controllability](https://www.ecfr.gov/on/2023-02-07/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR5e241f93ffe0bb3/section-23.2135)
    * Went into effect December 30, 2016?
    * But eCFR seems to show the old one through 17-August-2017
  * The previous Part 23 requirements are explained in [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676)
    * See page 70: *4. &sect;23.149 Minimum Control Speed.*
  * Sample comparison page of old versus new CFR: [14 CFR &sect;23.149(b)(4) (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149#p-23.149(b)(4))
  * Comparison: [14 CFR &sect;23.149 - Minimum control speed (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149)
  * Old CFR from the 1960s: [14 CFR PART 3 - Airplane Airworthiness; Normal, Utility, and Acrobatic Categories](https://tile.loc.gov/storage-services/service/ll/cfr/cf/r1/96/40/15/-T/14/CI/P3/cfr1964015-T14CIP3/cfr1964015-T14CIP3.pdf)
* ==Determined with (**COMBATS**)==
  * ==**C** - Critical engine failed and *windmilling*==
    * ==Failed engine propeller full forward in the high RPM setting==
    * [14 CFR &sect;23.149(b)(5) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(b)(5))
  * ==**O** - Operating engine at takeoff power==
    * Lowering power *decreases* $V_{\text{MC}}$
      * Less moment due to assymetric thrust that needs to be offset by rudder
    * [14 CFR &sect;23.149(b)(1) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(b)(1))
  * ==**M** - Most unfavorable weight (light)==
    * ==Lighter weight is unfavorable and *increases* $V_{\text{MC}}$==
      * This is because the bank effect at light weight is reduced, either in that a bank up to the maximum of 5&#176; is not sufficient to achieve zero sideslip, or that in any case more bank is required at a lighter weight, hence less vertical lift. It is this bank effect that is mentioned in [FAA-AC-23-8C](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676). The argument of weight relating to moment of inertia is not clear to me, but the process for determining $V_{\text{MC}}$ as described in [FAA-AC-23-8C](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676) does discuss using the highest of the static and dynamically determined $V_{\text{MC}}$ values in the AFM.
    * See [14 CFR &sect;23.149(b) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(b))
  * ==**B** - Bank up to 5&#176; to raise the dead engine==
    * 2-3&#176; is usually enough to attain zero sideslip
    * Banking beyond the zero-sideslip value can decrease $V_{\text{MC}}$ but also decreases performance
    * A slight bank decreases $V_{\text{MC}}$ due to the reduction in sideslip, which otherwise during equilibrium wings-level flight creates an additional adverse yawing moment due to weathercock stability. See *Controlling Multi-Engine Airplanes after Engine Failure* by Harry Horlings.
    * [14 CFR &sect;23.149(a) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(a))
  * ==**A** - Most unfavorable CG (aft)==
    * ==Aft CG is unfavorable and *increases* $V_{\text{MC}}$==
    * Forward CG *decreases* $V_{\text{MC}}$
      * Longer moment arm between rudder and CG
    * See [14 CFR &sect;23.149(b) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(b))
  * ==**T** - Takeoff configuration==
    * ==Trimmed for takeoff==
    * ==Flaps in takeoff position==
      * ==More flaps, gear, cowl flaps all decrease $V_{\text{MC}}$==
    * ==Gear up==
      * [14 CFR &sect;23.149(b)(4) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(b)(4))
    * ==Cowl flaps in takeoff position==
    * ==Props forward==
      * [14 CFR &sect;23.149(b)(5) (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/part-23/section-23.149#p-23.149(b)(5))
    * ==Out of ground effect==
      * Ground effect decreases $V_{\text{MC}}$
  * ==**S** - Standard day==
    * ==Sea-level==
    * See [FAA-AC-23-8C](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676) page 74

      > The $V_{\text{MC}}$ resulting from this extrapolation to sea level is the one entered into the AFM and marked on the airspeed indicator.

  * Up to 150 lb of rudder force required
* $V_{\text{MC}}$ is established based on the certification requirements above, but changes with changing aircraft configuration and flight condition
* If we are near $V_{\text{MC}}$ and slowing, recover by decreasing power on remaining engine and decrease pitch
* $V_{\text{MC}}$ decreases with altitude because power decreases
  * But aerodynamic force of rudder to counteract yawing moment from a single engine is also less, what is the functional relationship with aero force versus altitude as compared with thrust versus altitude?
* By [14 CFR &sect;23.149(e) (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149#p-23.149(e)) and [14 CFR &sect;23.149(a) (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149#p-23.149(a)) the "maintaining directional control" is defined that the test pilot must be able to
  * Stop the turn within 20 degrees using max rudder and no more than 5 degree of bank
  * Maintain straight flight with no more than 5 degrees of bank

![C55 Baron VMCA COMBATS parameters](/img/c55-baron-poh/c55-baron-poh-page-1-15-vmca-comabts-half-page.png){width=440}

* [14 CFR &sect;3.105 (1960s)](https://tile.loc.gov/storage-services/service/ll/cfr/cf/r1/96/40/15/-T/14/CI/P3/cfr1964015-T14CIP3/cfr1964015-T14CIP3.pdf)
  * The title page of the POH states that the C55 Baron was certified under CAR 3.
* ==C55 Baron **COMBATS**==
  * ==**C** - Critical engine failed==
    * CAR3 doesn't seem to explicitly state prop full forward, although the newwer [14 CFR &sect;23.149 (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149) does
    * Also that the prop be *windmilling* seems to not be specified in CAR 3, but the Baron E55 POH, under the definition of VMCA, says that CAR 3 does specify with the prop windmilling.
  * ==**O** - Operating engine at takeoff power==
  * ==**M** - Max gross weight==
    * The later [14 CFR &sect;23.149 (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149) specified most unfavorable weight
  * ==**B** - Bank up to 5&#176; to raise the dead engine==
  * ==**A** - Aftmost CG==
  * ==**T** - Takeoff configuration==
    * ==Gear up==
    * ==Flaps up==
  * ==**S** - Standard day==
  * ==**1** - 150 lb rudder force max==
* The later [14 CFR &sect;23.149 (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149) specifies out of ground effect, but CAR3 does not seem to
* [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook) [Chapter 13: Transition to Multiengine Airplanes](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf) says the following

  > A knowledgeable and competent multiengine pilot understands that $V_{\text{MC}}$ is not a fixed airspeed under all conditions. $V_{\text{MC}}$ is a fixed airspeed only for the very specific set of circumstances under which it was determined during aircraft certification. In reality, $V_{\text{MC}}$ varies with a variety of factors as outlined below. The $V_{\text{MC}}$ noted in practice and demonstration, or in actual OEI operation, could be less or even greater than the published value, depending on conditions and pilot technique.

* Increased weight *decreases* $V_{\text{MC}}$
  * There may be an arguement here about the corresponding increased *moment of inertia* in the dynamic case, although this doesn't really apply to the static case
  * [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676) says the following

    > $V_{\text{MC}}$ should be determined at the most adverse weight. Minimum practical test weight is usually the most critical because the *beneficial effect of banking into the operating engine is minimized.*

  * This seems to imply that this is only true of the 5&#176; limit on bank angle is imposed - if in practice we need not respect that limit - then I don't see how weight has that strong of an effect of $V_{\text{MC}}$.
* Addition of bank offsets horizontal aerodynamic force from rudder to achieve lower drag by zero-sideslip flight
* See Section 4 23.149 Minimum Control Speed on Page 70 of [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676)

### Dynamic vs Static $V_{\text{MC}}$

The discussion of dynamic versus static $V_{\text{MC}}$ centers around the way in which a $V_{\text{MC}}$ maneuver is entered.
[14 CFR &sect;23.149(a) (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149#p-23.149(a)) requires aircraft to satisfy the requirement when the critical engine is *suddenly* made inoperative.
Static $V_{\text{MC}}$ demonstration, which is more like the $V_{\text{MC}}$ demo, involves a more gradual slowing of the aircraft until positive directional control can no longer be maintained and is described in [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676).

* [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676)
* Appendix 3. Static Minimum Control Speed Extrapolation to Sea Level

  > The purpose of this appendix is to identify one method of extrapolating minimum control speeds ($V_{\text{MC}}$) observed during flight tests, to sea level, standard temperature conditions. There is a geometric relationship between the yawing moment about the c.g. caused by the operating engine, and the rudder deflection necessary to offset this tendency and cause an equilibrium.

* [14 CFR &sect;23.149(a) (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149#p-23.149(a)) requires the following.

  > $V_{\text{MC}}$ is the calibrated airspeed at which, when the critical engine is *suddenly* made inoperative

* [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676) describes the *static* $V_{\text{MC}}$ testing process.

  > Gradually reduce airspeed until it is no longer possible to prevent heading changes with maximum use of the directional and near maximum use of the lateral controls, or the limit control forces have been reached. No changes in lateral or directional trim should be accomplished during the speed reduction.

* It then requires the applicant to perform *dynamic* $V_{\text{MC}}$ testing as follows.

  > After determining the critical engine static $V_{\text{MC}}$, and at some speed above static $V_{\text{MC}}$, make a series of engine cuts (using the mixture control or idle cutoff control) dynamically while gradually working speed back toward the static speed.

* It goes on to describe the requirements of such dynamic $V_{\text{MC}}$ testing including the heading deviation no more than 20&#176; heading change.

  > Frequently, the dynamic $V_{\text{MC}}$ demonstration will indicate a lower $V_{\text{MC}}$ than is obtained from static runs. This may be because the inoperative engine, during spooldown, may provide net thrust or control force peaks that exceed limit values for a short period and go undetected, or, due to high yaw and pitch angles and rates, the indicated airspeed values are erroneous. Because of the multi-variable nature of the dynamic $V_{\text{MC}}$ demonstration, the AFM $V_{\text{MC}}$ value should represent the highest of the static or dynamic $V_{\text{MC}}$ test data, corrected to critical conditions.

### Effects of Bank Angle on $V_{\text{MC}}$

* There seems to be a lot of incorrect explanations around as to why a bank angle to raise the dead engine is good.
* The best reference I found is [Controlling Multi-Engine Airplanes after Engine Failure](https://www.avioconsult.com/downloads/Controlling%20Multi-Engine%20Airplanes%20after%20Engine%20Failure.pdf) with better diagrams than in the FAA handbooks.
* To explain it concisely, it is easiest to talk about the forces in the aircraft body-fixed axes.
* Without a bank, in steady-level flight, the aircraft is sideslipping.
* The weathercock stability due to this sideslip produces a moment in the same direction as the operative engine, making a larger moment that the rudder needs to counteract, and therefore requiring a higher speed to achieve this moment.
* By banking slightly, a component of gravity acts along the body y-axis preventing sideslip.
* This means the moment the rudder must provide is lower, and therefore at maximum rudder deflection a lower airspeed can be used.

![[Controlling Multi-Engine Airplanes after Engine Failure](https://www.avioconsult.com/downloads/Controlling%20Multi-Engine%20Airplanes%20after%20Engine%20Failure.pdf)](/img/camel/horlings-fig2-steady-oei-wings-level.png){width=340}

![[Controlling Multi-Engine Airplanes after Engine Failure](https://www.avioconsult.com/downloads/Controlling%20Multi-Engine%20Airplanes%20after%20Engine%20Failure.pdf)](/img/camel/horlings-fig3-steady-oei-raising-dead.png){width=340}

![[Controlling Multi-Engine Airplanes after Engine Failure](https://www.avioconsult.com/downloads/Controlling%20Multi-Engine%20Airplanes%20after%20Engine%20Failure.pdf)](/img/camel/horlings-fig4-bank-angle-vs-vmca.png){width=400}

![[Controlling Multi-Engine Airplanes after Engine Failure](https://www.avioconsult.com/downloads/Controlling%20Multi-Engine%20Airplanes%20after%20Engine%20Failure.pdf)](/img/camel/horlings-fig5-bank-angle-weight-vs-vmca.png){width=400}

### Part 23 and $V_{\text{MC}}$

* ==The rules that pertain to an airplane depend upon the *rules in effect during type certification* and *do not depend on the production year after certification*.==
* The determination of $V_{\text{MC}}$ as described above was changed on 30-August-2017.
  * This ammendment was 81 FR 96689
* The article [AOPA Understanding Part 23 Rewrite](https://www.aopa.org/advocacy/advocacy-briefs/understanding-part-23-rewrite) has a bit of information
* [14 CFR &sect;23.149 - Minimum control speed (2017)](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR7916c8bb933daf9/section-23.149) provides the previous rules for certification which is applicable to planes certified under the older rules
* [14 CFR &sect;23.2135 - Controllability](https://www.ecfr.gov/compare/2017-08-30/to/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR5e241f93ffe0bb3/section-23.2135) provides the new rules for certification
* Given the recency of the change, most of the light twins used for training purposes will have been certified under the old rules, so that is probably best considered as the "primary" reference
* [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook) [Chapter 13: Transition to Multiengine Airplanes](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf) says the following, where emphasis has been added.

  > The following bullets describe the way several factors affect $V_{\text{MC}}$ speed for those multiengine airplanes often used during training, which were certified in accordance with *historical 14 CFR part 23, section 23.149*.

### Appendix

* Increased weight *decreases* $V_{\text{MC}}$
  * There may be an arguement here about the corresponding increased *moment of inertia* in the dynamic case, although this doesn't really apply to the static case
  * [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676) says the following

    > $V_{\text{MC}}$ should be determined at the most adverse weight. Minimum practical test weight is usually the most critical because the *beneficial effect of banking into the operating engine is minimized.*

  * This seems to imply that this is only true of the 5&#176; limit on bank angle is imposed - if in practice we need not respect that limit - then I don't see how weight has that strong of an effect of $V_{\text{MC}}$.
* Addition of bank offsets horizontal aerodynamic force from rudder to achieve lower drag by zero-sideslip flight

* See Section 4 23.149 Minimum Control Speed on Page 70 of [FAA-AC-23-8C Flight Test Guide for Certification of Part 23 Airplanes](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1019676)

### Single Engine Aerodynamics Overview

::: info NOTE
Loss of an engine in a twin reduces thrust by 50%, but decreases climb performance by 80-90%.
:::

* Climb *rate* is dependent on *excess power* which is why when losing half the aircraft's thrust results in less than half the normal climb rate
* Climb *angle* is dependent on *excess thrust*
* Recall $P=TV$ where $P$ is power, $T$ is thrust, and $V$ is velocity
* Rolling tendency occurs when an engine fails due to lift distribution being higher on wing with operative engine
* Can use more than 5&#176; bank to improve directional control
  * Greater bank angle = lower $V_{\text{MC}}$
  * This reduces performance though because of increased drag
* After directional control is established reduce the bank to 5&#176;
* Increase in weight also decreases $V_{\text{MC}}$
* Feathering dead engine reduces $V_{\text{MC}}$
* $V_{\text{MC}}$ can increase by as much as 20 knots with wings level
* When practicing $V_{\text{MC}}$ demonstration
  * Sufficiant altitude (Minumum 3,000' AGL in PA-30, 5,000' in B55)
  * Use $V_{\text{SSE}}$ safe single engine speed - 97 mph for PA-30
  * Gear up
  * Flaps and cowl flaps in takeoff setting
  * Trim for takeoff
  * Prop full forward, throttle to takeoff power
  * Reduce throttle on critical engine to idle
  * Raise the dead
  * Slowly pitch to single engine climb attitude
  * Apply rudder to maintain heading until full rudder deflection applied
    * Rudder deflection can be artificially limited with a foot to ensure simulated $V_{\text{MC}}$ occurs sufficiently above stall speed
  * Recovery
    * Reduce power on good engine
    * Pitch down to increase airspeed and increase angle of attack
    * Pitch for $V_{\text{YSE}}$
* If prop loses oil pressure it will feather by default
* The impacts of the loss of an engine can be separated into two categories
  * Loss of performance
  * Loss of control

### Multi-engine Airspeed Definitions

* $V_{\text{MC}}$ - speed below which directional control cannot be maintained
* $V_{\text{SSE}}$ - safe single engine speed, minimum speed to use during OEI training
* $V_{\text{XSE}}$ - best angle of climb with OEI
* $V_{\text{YSE}}$ - best rate of climb with OEI
* $V_{\text{R}}$ - rotation speed - unless otherwise published should be at least $V_{\text{MC}}$ plus 5 knots

![Airspeed indicator markings for multiengine airplane. [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook) [Chapter 13: Transition to Multiengine Airplanes](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf) Figure 13-1.](/img/afh/afh-figure-13-1-airspeed-indicator.png){width=340}

### Single engine best rate of climb ($V_{\text{YSE}}$)

* ==Denoted by *blue line* on airspeed indicator==
* Previous Part 23:
  * [14 CFR &sect;23.63 - Climb: General (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR5ed09dfc2a6b782/section-23.63)
  * [14 CFR &sect;23.66 - Takeoff climb: One-engine inoperative (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR5ed09dfc2a6b782/section-23.66)
  * [14 CFR &sect;23.67(a) - Climb: One engine inoperative (2017)](https://www.ecfr.gov/on/2017-08-29/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR5ed09dfc2a6b782/section-23.67#p-23.67(a))
* Current Part 23: [14 CFR &sect;23.2120 - Climb requirements](https://www.ecfr.gov/on/2023-02-07/title-14/chapter-I/subchapter-C/part-23/subpart-B/subject-group-ECFR0f27e01839859ea/section-23.2120)
* For planes 6,0000 lb or less and $V_{\text{SO}}$ of 61 knots or less (like the PA-30), single-engine climb performance *must simply be determined*
* For planes 6,0000 lb or more and/or $V_{\text{SO}}$ of more than 61 knots (like the C55 Baron) single-engine climb performance must be at least 0.027 $V_{\text{SO}}$

### Comparison of $V_{\text{X}}$, $V_{\text{XSE}}$, $V_{\text{YSE}}$, and $V_{\text{Y}}$

* Total drag is also known as thrust required - the amount of thrust you need to stay level at a specific airspeed.
* Your propellor can generate the most thrust at a slow speed. Why? Because it's at a high angle of attack. As your airspeed increases, the propellor's angle of attack decreases, and it can generate less thrust.
* $V_{\text{X}}$ *is when most thrust is available.* Basically, for $V_{\text{X}}$ want to climb slowly, to minimize distance traveled over the ground.
* $V_{\text{Y}}$ is the speed where you have the biggest difference between power required and power available.
* For a piston plane, the angle of climb depends on excess *thrust*.

![prop](/img/piston_thrust_available.png){width=400}

![prop](/img/piston_power_available.png){width=400}

### Derivation of $V_{\text{X}}$ and $V_{\text{Y}}$

The following are in the aircraft body axes frame.

```math
\begin{align}
\text{x-dir:} & \; & T-D-W\sin(\gamma) &= 0\label{eq.xdir} \\
\text{y-dir:} & \; & L-W\cos(\gamma) &= 0 \\
\text{y-dir:} & \; & \dot{h} &= V\sin(\gamma)\label{eq.ydir}
\end{align}
```

From \eqref{eq.xdir}:

```math
\begin{equation*}
\sin(\gamma)=(T-D)/W
\end{equation*}
```

The maximum flight path angle is therefore given by the following

```math
\begin{equation*}
\gamma_{\text{max}}=(T-D)_{\text{max}}/W
\end{equation*}
```

Thus $V_{\text{X}}$, the airspeed which gives the steepest flight path angle, is at max excess thrust.
From \eqref{eq.xdir} and \eqref{eq.ydir}:

```math
\begin{align*}
\dot{h} &= (T-D)V/W \\
        &= (P_{\text{avail}}-P_{\text{req}})/W
\end{align*}
```

Maximizing $\dot{h}$ gives

```math
\begin{equation*}
\dot{h}_{\text{max}}=(P_{\text{avail}}-P_{\text{req}})_{\text{max}}/W
\end{equation*}
```

Thus $V_{Y}$, the airspeed that gives the maximum rate of climb, is at max excess power.

### Comparing Best Angle and Rate of Climb AEO vs. OEI

![[NAVAIR 00-80T-80 Aerodynamics for Naval Aviators](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/00-80T-80.pdf) Figure 2.19 Propeller Operation](/img/camel/navair-00-80t-80-figure-2-19-propeller-operation.png){width=460}

* Assume a fixed altitude and atmospheric conditions, and evaluate the following
* Start with fixed engine BHP as a function of airspeed
* Take an propellor efficiency curve which is 0 at 0 KIAS and is concave down
  * Propulsive efficiency $\eta_{p} = \frac{\text{output propulsive power}}{\text{input shaft horsepower}}$
* This gives a propulsive power curve of the same shape (as the efficiency curve is multiplied by a constant)
  * $P_{\text{prop}} = P_{\text{engine}} * \eta_{p}$
  * In [NAVAIR 00-80T-80 Aerodynamics for Naval Aviators](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/00-80T-80.pdf) $P_{a}$ is used for propulsive power available
  * Assume as well that the peak propellor efficiency is around cruise airspeed
* Then thrust is given by the following
  * $T = \frac{P_{\text{prop}}}{V}$
* To see how thrust then decreases with airspeed, we can assume a (concave down) quadratic form in $V$
  * When dividing such a quadratic form in $V$ by $V$, the result is linear with a negative slope
* With this, when power is halved (assuming one of two engines is inoperative), given it is increasing over the airspeed range of maximum excess power, this halving results in the available power curve *flattening* and therefore $V_{\text{YSE}}$ being less than $V_{\text{Y}}$.
* Similarly, given thrust is increasing over this range, the same flattening that occurs when it is halved makes $V_{\text{XSE}}$ greater than $V_{\text{X}}$.

### Reasons for loss of directional control

* Unable to balance moments caused by only one operative engine
* This is largely related to a decreased airspeed which reduces rudder effectiveness
* Other factors include
  * Failing to follow the correct procedures
    * Setting correct aircraft configuration
    * Flying the right airspeed and bank angle
  * Inattention due to distraction
* Must stay above $V_{\text{MC}}$ and $V_{\text{YSE}}$ in most situations if possible

### More Stuff

* Indications of loss of directional control
  * After rudder is fully deflect and a yaw occurs
* Importance of maintaining the proper pitch and bank attitude, and the proper coordination of controls
  * Correct pitch and bank lowers $V_{\text{MC}}$
  * Coordination during OEI does not mean centering the ball
  * Proper coordination of the flight controls helps ensure that $V_{\text{MC}}$ is low and performance is good
* Loss of directional control recovery procedures
  * The initial loss of direction control will happen during the maneuver
    * Unless indications of impending stall are experienced first, in which case recovery will be initiated
  * The recovery procedure requires
    * Reducing the overwhelming moment on the plane due to a single operative engine
    * Increasing airspeed to get above $V_{\text{MC}}$, targeting $V_{\text{YSE}}$
  * To perform the recovery
    * Reduce the power on the operative engine to idle
    * Lower the nose to increase airspeed
  * After above $V_{\text{YSE}}$ increase the throttle of the operative engine to full and climb away at $V_{\text{YSE}}$
* Engine failure during takeoff including planning, decisions, and single-engine operations.
  * The plan for what to do should the engine failure at different points during the rollout, takeoff, and climbout should be briefed ahead of time
  * Performance data should be calculated to be able to form the correct plan
  * Environmental effects also must factor into the engine failure plan
  * General recommendation from AFH page 13-16 is raise the gear no later than after reaching $V_{\text{YSE}}$ airspeed on takeoff

## Relationship Between $V_{MC}$ and Stall Speed with Altitude

* As the aircraft is slowing during a VMC demonstration, it is approaching one of two possible things happening
  * Stall
  * Loss of control
* See the figure below, $V_{\text{MC}}$ decreases with altitude, stall speed remains the same
  * When plotted against IAS

![Stall versus yaw versus altitude when OEI. [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook) [Chapter 13: Transition to Multiengine Airplanes](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf) Figure 13-14.](/img/afh/afh-figure-13-14-vmc-vs-versus-altitude.png){width=360}

## Determining Best Course of Action After Engine Failure

* TBD

## References

* [FAA-H-8083-25B Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
  * [Chapter 10: Weight and Balance](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/12_phak_ch10.pdf)
  * [Chapter 11: Aircraft Performance](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/phak/13_phak_ch11.pdf)
* [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook)
  * [Chapter 13: Transition to Multiengine Airplanes](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf)
* [FAA-P-8740-66 Flying Light Twins Safely](https://www.faasafety.gov/files/notices/2015/Nov/FAA_P-8740-66.pdf)
