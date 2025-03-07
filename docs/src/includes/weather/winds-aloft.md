# Winds and Temperatures Aloft

## Textual

* Winds and Temperatures Aloft Forecast - Textual (FD)
* See also the graphical version Winds and Temperatures Aloft Forecast - Graphical (FB)
* See Aviation Weather Center's [Winds/Temps Data](https://aviationweather.gov/data/windtemp/)
* Winds and temps aloft are *forecasts* based on observations made a few hours prior
* Made twice a day based on the radiosonde upper air observations taken at 0000Z and 1200Z
* Format `DDSSTT` where
  * `D` is wind direction
  * `S` is wind speed
  * `T` is temperature
* Example `2321-04` is wind from 230 at 21 knots and temperature -21 &#176;C
* No winds given below 1,000 ft AGL
  * [NATIONAL WEATHER SERVICE INSTRUCTION 10-812](https://www.weather.gov/media/directives/010_pdfs/pd01008012curr.pdf)
* No temp is given for 3,000 ft MSL or when 2,500 ft AGL
* ==Above 24,000 feet all temperatures are negative so minus sign is dropped==
* Wind `9900` means light and variable (less than 5 kts)
* For winds greater than 99 knots, add `50` to the `DD` and subtract 100 from the wind speed to get `SS` values
  * Example: `7545` means winds of 145 knots from 250

## Graphical

* Winds and Temperatures Aloft Forecast - Graphical (FB)
  * See Aviation Weather Center [Aviation Weather Center GFA Winds Aloft](https://aviationweather.gov/gfa/#winds)

![GFA Tool: winds aloft. [https://aviationweather.gov/gfa/#winds](https://aviationweather.gov/gfa/#winds)](/img/gfa-tool-winds-aloft.jpg){width=800}
