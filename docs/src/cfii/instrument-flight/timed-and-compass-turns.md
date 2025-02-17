# Timed and Compass Turns

## Purpose

* Attempting to use the compass like a heading indicator and rolling out upon reaching the desired heading (as indicated by the compass) can result in large heading errors.
  * This is due to errors associated with the compass
* Therefore alternative techniques to be able to use the compass to accurately are required

## Elements

:::warning Timed and compass turns
Timed and compass turns are two different techniques that exist to enable accurate heading changes be made when the only source of heading information is a magnetic compass.
:::

* A magnetic compass provides an accurate heading reference during straight and level flight but it does not accurately indicate the aircraft's heading during turns
* Timed turns used for turns of less than 60&#176;
* Compass turns used for turns of more than 60&#176;
* "Times 3 minus 3"
  * Take the leading digit of the heading change, multiply it by 3 and sutract 3 to get the number of seconds to hold the 15&#176; bank turn
  * For example, to turn 30&#176; (3&times;3=9, 9&minus;3=6) roll into a 15&#176; degree turn and hold for 6 seconds then roll out
* For compass turns, the lead/lag depends on the latitude
  * Using 30&#176; for the US works well enough
  * Including the standard roll-out lead when turning results in the table seen in the Aviation Adventures procedures guide
* From [FAA-H-8083-15B Instrument Flying Handbook](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf):

    > With an angle of bank between 15&#176; and 18&#176;, the amount of lead or lag to be used when turning to northerly or southerly headings varies with, and is approximately equal to, the latitude of the locality over which the turn is being made. When turning to a heading of north, the lead for roll-out must include the number of degrees of change of latitude, plus the lead normally used in recovery from turns. During a turn to a south heading, maintain the turn until the compass passes south the number of degrees of latitude, minus normal rollout lead.

* Applying the above is dependent on latitude and normal rollout lead that depends on bank angle, and various rules-of-thumb exist for how much rollout lead should be used.
* For typical single-engine IFR trainers like the Piper Archer or Cessna 172, a 5&#176; rollout lead is reasonable.
* For flight training conducted in the southern United States, 30&#176; latitude can be assumed.
* Applying the rules above with some simplifications and interpolating between the cardinal directions gives the following diagram that should be committed to memory for use in planes where backup heading information is provided by a compass.

![Rollout lead/lag for compass turns. When rolling out on any of the headings above when using the compass, roll out the number of degrees before as indicated by the 'B' or after 'A' when reading your compass.](/img/compass-turns.png){width=400}

* For example, if you are flying east and are making a turn to north, roll out when the compass indicates 35&#176; *before* the desired heading, or in this example when the compass reads 35&#176;.
* If you are are flying east and making a turn to south, roll out when the compass indicates 25&#176; *after* the desired heading, or in this example when the compass reads 205&#176;.
