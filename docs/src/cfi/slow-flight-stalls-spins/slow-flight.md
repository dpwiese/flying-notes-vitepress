# Slow Flight

This page covers *Task A. Slow Flight* from the [FAA-S-ACS-25 Flight Instructor for Airplane Category Airman Certification Standards](https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf).

## Purpose and Procedure

The objective of maneuvering in slow flight is to develop the pilot’s ability to fly at low speeds and high AOAs.
Below are a few notes from the [FAA-H-8083-3C Airplane Flying Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook).

> Maintaining controlled flight without activating the stall warning — 5 to 10 knots above the 1G stall
speed is a good target.

> Slow flight training includes straight-ahead climbs and climbing medium-banked (approximately 20 degrees) turns.

> Slow flight is typically performed and evaluated in the landing configuration. Therefore, both the landing gear and the flaps should be extended to the landing position, as applicable.

With this guidance and that in the ACS the following procedure is typical for the Piper Archer, targeting an airspeed of 55 KIAS.

1. From cruise, make an initial power reduction to around 1,500 RPM
    * This particular power setting is somewhat arbitrary, but allows the aircraft to decelerate more quickly
2. Introduce the flaps sequentially
    * Gentle application of the flaps will help minimize altitude deviations
3. As the plane slows through 60 KIAS increase power to 2,000 RPM
    * This is anticipation of the needed power to "catch" and maintain altitude, with full flaps, at 55 KIAS
    * Small adjustments to power will be needed, but this power setting gets close
4. After being initially established on heading and altitude, making use of outside visual references, a series of climbs, turns, and descents should be performed
    * 15 degrees of bank is a reasonable value to use
    * 200 feet climbs and 30&#176; of heading change are reasonable

![Piper Archer POH (VB-2749) page 4-25 stalls.](/img/archer-poh/archer-poh-page-4-25-stalls.png){width=600}

![Piper Archer POH (VB-2749) page 5-13 power off stall speed. Note the stall speeds are in KIAS.](/img/archer-poh/archer-poh-page-5-13-power-off-stall-speed.png){width=800}

Published stall speed is (power-off, at 2550 lb and full flaps, VSO) is 45 KIAS.
Using 55 KIAS as a target good.

## Slow Flight in "Clean" Configuration

Flaps up slow flight target about 60-65 KIAS, below which the stall warning will activate.

## Common Error: Too Much Bank

In certain instances, pilots may wish to use significantly more than the AFH recommended 20 degrees.
Recall the equation for turn rate below:

```math
\begin{equation*}
\dot{\psi}=\frac{g\tan\phi}{V}
\end{equation*}
```

The table below shows the turn rate achieved with various bank angle and airspeed combinations.

| Bank Angle (&#176;) | Speed (knots)  | Turn Rate (&#176;/s) |
|---------------------|----------------|----------------------|
| 10                  | 55             | 3.5                  |
| 15                  | 55             | 5.3                  |
| 20                  | 55             | 7.2                  |
| 30                  | 55             | 11.5                 |
| 10                  | 60             | 3.2                  |
| 15                  | 60             | 4.9                  |
| 20                  | 60             | 6.6                  |
| 30                  | 60             | 10.5                 |
| 30                  | 95             | 6.6                  |
| 30                  | 105            | 6.0                  |

From this table we can see that at airspeeds of 55-60 knots even a 10 degree bank already gives turn performance greater than that of a standard-rate turn, and a 20 degree bank is giving turn performance better than a 30 degree bank during cruise.
*At such slow airspeeds, modest bank angles of 15-20 degrees give more than sufficient turn performance.*

### Stall Speed vs Bank Angle

The next thing to consider when maneuvering at increasing bank angles at slow airspeeds is how the stall speed changes.
Recall the relationship between lift, weight, and bank angle during level flight:

```math
\begin{equation*}
\begin{aligned}
W &= L\cos(\phi) \\
  &= \frac{1}{2}\rho V^{2}C_{L}\cos(\phi)
\end{aligned}
\end{equation*}
```

Rearranging this equation gives an expression of stall speed versus bank angle:

```math
\begin{equation*}
V = \sqrt{\frac{2W}{\rho C_{L}\cos(\phi)}}
\end{equation*}
```

At 30 degrees bank stall speed goes up by about 7% and by 40 degrees it's 14%.
While these bank angles will not necessarily induce a stall while maneuvering during slow flight due to operating 5-10 knots above stall speed, they could activate the *stall warning*.
Both the AFH and ACS are consistent in the guidance that during slow flight the stall warning should not be activated.
*Therefore if 15-20 degrees of bank give sufficient turn performance, and an airspeed must be maintained which avoids activation of the stall warning, there is little reason to motivate using bank angles in excess of 15-20 degrees.*
