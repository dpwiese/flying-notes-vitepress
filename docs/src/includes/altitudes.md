# Altitudes

* **Indicated altitude**
  * What altimeter says
* **True altitude**
  * Actual MSL height
* **Absolute altitude**
  * AGL height
  * Given by subtracting height of terrain from true altitude
* **Pressure altitude**
  * Height above 29.92 inHg standard datum plane (SDP).
  * The standard datum plane is the theoretical level in the atmosphere where the pressure is 29.92 inHg.
  * ==What altimeter reads when setting altimeter to 29.92 inHg.==
* **Density altitude**
  * Pressure altitude corrected for nonstandard temperature
  * Vertical distance above sea level in the standard atmosphere at which a given density is to be found.

## Converting

* If the temperature is colder than that of the standard atmosphere, true altitude will be lower than indicated altitude
* First determine the standard temperature at the indicated altitude
  * Recall: 15 &#176;C at sea level and lapse rate of 2 &#176;C per 1000 ft
  * Example: at 20,000 ft the standard temperature is -25 &#176;C, if the actual temperature is -35 &#176;C then the _ISA deviation_ is -10 &#176;C.
* True Altitude = Indicated Altitude + ((OAT - ISA Temperature) x Indicated Altitude / 273 )
* Pressure Altitude = ((29.92 - Current Altimeter Setting) x 1,000) + True Altitude
* Density Altitude = Pressure Altitude + (120 x (OAT - ISA Temperature))
