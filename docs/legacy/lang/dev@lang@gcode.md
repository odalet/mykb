# G-Code and related CNC languages

## G-Code

* Doc
  * NIST Implementation: <https://www.nist.gov/publications/nist-rs274ngc-interpreter-version-3>
  * RepRap: <https://reprap.org/wiki/G-code>
* Code
  * <https://www.codeproject.com/Articles/17424/CNC-Graphical-Backplotter>
  * C# Parser (for Netduino): <https://github.com/dsuarezv/Netduino-gcode>
  * Reprap: <https://github.com/reprappro/RepRapFirmware>
  * Models + G-Code:
    * <https://github.com/reprappro/Interesting-3D-Prints/blob/master/Business-card-holder/stick.gcode>
    * <https://github.com/reprappro/Ormerod/blob/master/STLs/Trays/528.5PMTray.STL>
* Software
  * Predator: <http://www.predator-software.com/Predator_CNC_Editor_Software.htm>
  * ![predator](http://www.predator-software.com/images/software/cnc_editor/predator_cnc_editor_with_icon.png "Screenshot")
  * Cambam: <http://www.cambam.co.uk/>
  * ![cambam](http://www.cambam.co.uk/screenshots/img/timing-pulley.png "Screenshot")
  * Basic CNC Viewer (later version of the codeproject source code above): <http://www.cncedit.com/basicviewer/Default.aspx>
  * ![basic](http://www.cncedit.com/basicviewer/Images/ViewerSample.png "Screenshot")

## STEP-NG

* Github (CLI to STEP-NC): <https://github.com/steptools/AdditiveNC>
* Steptools - Digital Twin: <http://www.steptools.com/blog/20171011_twin_machining/>
  * Aggregates STEP, MTConnect and QIF

## Examples

### Circle

This one draws a circle (and demonstrates multiple **G** words on the same line as well as no **G** word)

```gcode
G17 G20 G90 G94 G54
G0 Z0.25
X-0.5 Y0.
Z0.1
G01 Z0. F5.
G02 X0. Y0.5 I0.5 J0. F2.5
X0.5 Y0. I0. J-0.5
X0. Y-0.5 I-0.5 J0.
X-0.5 Y0. I0. J0.5
G01 Z0.1 F5.
G00 X0. Y0. Z0.25
```

Test it by loading it inside Basic CNC Viewer or even CamBam+:

* ![cambam-circle](/images/cambam-circle.png "circle")
* ![basic-circle](/images/basic-circle.png "circle")

### EOS CLI

* Github: <https://github.com/tomsoftware/EOS-Formats>
  * <http://www.hmilch.net/h/eosformat.html>

From <http://www.hmilch.net/downloads/cli_format.html>:

```clike
$$HEADERSTART
// This is a example for the use of the Layer Format //
$$ASCII
$$UNITS/1              // all coordinates are given in mm  //
// $$UNITS/0.01     all coordinates are given in units 0.01 mm //
$$DATE/070493                       // 7. April 1993 //
$$LAYERS/100                        //  100 layers //
$$HEADEREND

$$GEOMETRYSTART          // start of GEOMETRY-section//
$$LAYER/5.5              // Layer at height z = 5.5 mm//

$$POLYLINE/0,0,5,1.00,2.02,3.30,3.42,5.23,5.01,1.57,5.6,1.00,2.02
$$HATCHES/0,2,10.2,10.4,12.34,12.5,8.8,9.3,15.7,13.2
$$POLYLINE/0,1,10,1.2,4.01,...........
..
..
$$LAYER/5.6
$$POLYLINE/0,0,200,10.23,12.34,..........................
..........
..
..
$$LAYER/15.5
$$POLYLINE/0,0,200,13.23,12.34,..........................
..........
..
..
$$GEOMETRYEND
```

From <https://raw.githubusercontent.com/steptools/AdditiveNC/master/README.md>:

```clike
$$POWER/175.0
$$SPEED/800.0
$$FOCUS/4.0
$$POLYLINE/1,2,6,298600,1400,298600,248600,51400,248600,51400,1400,298600,1400,298600,50840
$$POWER/310.0
$$SPEED/850.0
$$FOCUS/3.0
$$HATCHES/1,77,52000,84290,92957,100838,93438,99647,52000,82905,52000,81520,93919,98456,94400,97266,52000,80135,52000,78749,94881,96075,95363,94884,52000,77364,52000,75979,95844,93693,96325,92502,52000,74594,52000,73209,96806,91311,97287,90121,52000,71823,52000,70438,97768,88930,98249,87739,52000,69053,52000,67668,98730,86548,99212,85357,52000,66283,52000,64897,99693,84167,100174,82976,52000,63512,52000,62127,100655,81785,101136,80594,52000,60742,52000,59357,101617,79403,102098,78212,52000,57971,52000,56586,102579,77022,103061,75831,52000,55201,52000,53816,103542,74640,104023,73449,52000,52431,52000,51045,104504,72258,104985,71068,52000,49660,52000,48275,105466,69877,105947,68686,52000,46890,52000,45505,106428,67495,106909,66304,52000,44119,52000,42734,107391,65113,107872,63923,52000,41349,52000,39964,108353,62732,108834,61541,52000,38579,52000,37193,109315,60350,109796,59159,52000,35808,52000,34423,110277,57969,110758,56778,52000,33038,52000,31653,111240,55587,111721,54396,52000,30267,52000,28882,112202,53205,112683,52014,52000,27497,52000,26112,113164,50824,113645,49633,52000,24727,52000,23341,114126,48442,114607,47251,52000,21956,52000,20571,115089,46060,115570,44870,52000,19186,52000,17801,116051,43679,116532,42488,52000,16415,52000,15030,117013,41297,117494,40106,52000,13645,52000,12260,117975,38915,118456,37725,52000,10874,52000,9489,118938,36534,119419,35343,52000,8104,52000,6719,119900,34152,120381,32961,52000,5334,52000,3948,120862,31771,121343,30580,52000,2563,54034,2000,121824,29389,122305,28198,57463,2000,60891,2000,122787,27007,123268,25816,64320,2000,67748,2000,123749,24626,124230,23435,71177,2000,74605,2000,124711,22244,125192,21053,78034,2000,81462,2000,125673,19862,126154,18672,84891,2000,88319,2000,126635,17481,127117,16290,91748,2000,95176,2000,127598,15099,128079,13908,98605,2000,102033,2000,128560,12717,129041,11527,105462,2000,108890,2000,129522,10336
```