# Logging Simulator Time

* To satisfy logging the "type and identification" requirement when logging simulator time in Redbird AATD, the tail number does _not_ satisfy the identification requirement as it is a user-configurable field that can be changed
  * Use the serial number
* Log the type of aircraft the simulator represents
  * Consider logging the avionics package used as well
* [14 CFR &sect;61.51(b)(1)(iv)](https://www.ecfr.gov/current/title-14/part-61/section-61.51#p-61.51(b)(1)(iv))

![User configurable tail number field in Redbird AATD does not uniquely identify the simulator in accordance with [14 CFR &sect;61.51(b)(1)(iv)](https://www.ecfr.gov/current/title-14/part-61/section-61.51#p-61.51(b)(1)(iv)).](/img/redbird-tail-number.jpeg){width=500}

![Redbird AATD sim managment page showing serial number and avionics panel.](/img/redbird-sim-management.png){width=800}
