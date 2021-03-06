EESchema Schematic File Version 4
LIBS:HM-LC-Dim2PWM_ohne_Taster-cache
EELAYER 26 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title "HM-LC-Dim2PWM"
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Device:R R1
U 1 1 5BE1E847
P 4200 3300
F 0 "R1" H 4270 3346 50  0000 L CNN
F 1 "330" H 4270 3254 50  0000 L CNN
F 2 "" V 4130 3300 50  0001 C CNN
F 3 "~" H 4200 3300 50  0001 C CNN
	1    4200 3300
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR0101
U 1 1 5BE1EA34
P 8650 3200
F 0 "#PWR0101" H 8650 2950 50  0001 C CNN
F 1 "GND" H 8655 3027 50  0000 C CNN
F 2 "" H 8650 3200 50  0001 C CNN
F 3 "" H 8650 3200 50  0001 C CNN
	1    8650 3200
	1    0    0    -1  
$EndComp
Wire Wire Line
	8800 2000 8650 2000
Wire Wire Line
	8650 2000 8650 3200
Wire Wire Line
	8800 2100 7750 2100
Wire Wire Line
	7750 2100 7750 3100
Wire Wire Line
	7750 3100 7050 3100
Wire Wire Line
	8800 2200 7500 2200
Wire Wire Line
	7500 2200 7500 2900
Wire Wire Line
	7500 2900 7050 2900
Wire Wire Line
	8800 2300 7600 2300
Wire Wire Line
	7600 2300 7600 3000
Wire Wire Line
	7600 3000 7050 3000
Wire Wire Line
	8800 2500 7900 2500
Wire Wire Line
	5850 2200 6150 2200
Wire Wire Line
	8800 2600 7900 2600
Wire Wire Line
	7900 2600 7900 3200
Wire Wire Line
	7900 3200 7050 3200
$Comp
L Switch:SW_Push Config
U 1 1 5BE1F5F2
P 5250 3650
F 0 "Config" V 5296 3601 50  0000 R CNN
F 1 "SW_Push" V 5204 3601 50  0001 R CNN
F 2 "" H 5250 3850 50  0001 C CNN
F 3 "" H 5250 3850 50  0001 C CNN
	1    5250 3650
	0    -1   -1   0   
$EndComp
$Comp
L SparkFun-Boards:ARDUINO_PRO_MINI U1
U 1 1 5BE1E4D6
P 6600 2800
F 0 "U1" H 6600 3860 45  0000 C CNN
F 1 "ARDUINO_PRO_MINI" H 6600 3776 45  0000 C CNN
F 2 "ARDUINO_PRO_MINI" H 6600 3750 20  0001 C CNN
F 3 "" H 6600 2800 50  0001 C CNN
F 4 "XXX-00000" H 6600 3681 60  0000 C CNN "Feld4"
	1    6600 2800
	1    0    0    -1  
$EndComp
Wire Wire Line
	5250 3100 5250 3450
$Comp
L power:GND #PWR0102
U 1 1 5BE20E4E
P 5250 3800
F 0 "#PWR0102" H 5250 3550 50  0001 C CNN
F 1 "GND" H 5255 3627 50  0000 C CNN
F 2 "" H 5250 3800 50  0001 C CNN
F 3 "" H 5250 3800 50  0001 C CNN
	1    5250 3800
	1    0    0    -1  
$EndComp
Wire Wire Line
	5250 3800 5250 3850
$Comp
L Device:LED Status1
U 1 1 5BE21229
P 4200 3650
F 0 "Status1" V 4237 3531 50  0000 R CNN
F 1 "LED" V 4145 3531 50  0000 R CNN
F 2 "" H 4200 3650 50  0001 C CNN
F 3 "~" H 4200 3650 50  0001 C CNN
	1    4200 3650
	0    -1   -1   0   
$EndComp
$Comp
L power:GND #PWR0103
U 1 1 5BE212DE
P 4200 3800
F 0 "#PWR0103" H 4200 3550 50  0001 C CNN
F 1 "GND" H 4204 3626 50  0000 C CNN
F 2 "" H 4200 3800 50  0001 C CNN
F 3 "" H 4200 3800 50  0001 C CNN
	1    4200 3800
	1    0    0    -1  
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q1
U 1 1 5BE2306A
P 4800 1950
F 0 "Q1" H 5006 1996 50  0000 L CNN
F 1 "IRLZ44N" H 5006 1904 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Vertical" H 5050 1875 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 4800 1950 50  0001 L CNN
	1    4800 1950
	1    0    0    -1  
$EndComp
$Comp
L Device:R R2
U 1 1 5BE23102
P 5450 2000
F 0 "R2" H 5520 2046 50  0000 L CNN
F 1 "4k7" H 5520 1954 50  0000 L CNN
F 2 "" V 5380 2000 50  0001 C CNN
F 3 "~" H 5450 2000 50  0001 C CNN
	1    5450 2000
	1    0    0    -1  
$EndComp
Wire Wire Line
	4900 2150 5450 2150
$Comp
L power:GND #PWR0105
U 1 1 5BE24B50
P 4900 1750
F 0 "#PWR0105" H 4900 1500 50  0001 C CNN
F 1 "GND" H 4905 1575 50  0000 C CNN
F 2 "" H 4900 1750 50  0001 C CNN
F 3 "" H 4900 1750 50  0001 C CNN
	1    4900 1750
	-1   0    0    1   
$EndComp
Wire Wire Line
	5450 1750 4900 1750
Connection ~ 4900 1750
$Comp
L Connector:Screw_Terminal_01x02 X2
U 1 1 5BE26469
P 4200 1950
F 0 "X2" H 4120 1624 50  0000 C CNN
F 1 "LED1" H 4120 1716 50  0000 C CNN
F 2 "" H 4200 1950 50  0001 C CNN
F 3 "~" H 4200 1950 50  0001 C CNN
	1    4200 1950
	-1   0    0    1   
$EndComp
$Comp
L power:VCC #PWR0106
U 1 1 5BE28209
P 4550 1250
F 0 "#PWR0106" H 4550 1100 50  0001 C CNN
F 1 "VCC" H 4567 1425 50  0000 C CNN
F 2 "7-30V" H 4550 1250 50  0001 C CNN
F 3 "" H 4550 1250 50  0001 C CNN
	1    4550 1250
	1    0    0    -1  
$EndComp
$Comp
L Regulator_Linear:L78L05_TO92 U3
U 1 1 5BE2A438
P 7550 1200
F 0 "U3" V 7504 1305 50  0000 L CNN
F 1 "L78L05_TO92" V 7596 1305 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-92_Inline" H 7550 1425 50  0001 C CIN
F 3 "http://www.st.com/content/ccc/resource/technical/document/datasheet/15/55/e5/aa/23/5b/43/fd/CD00000446.pdf/files/CD00000446.pdf/jcr:content/translations/en.CD00000446.pdf" H 7550 1150 50  0001 C CNN
	1    7550 1200
	0    1    1    0   
$EndComp
Wire Wire Line
	7900 2500 7900 1650
Wire Wire Line
	7900 1650 5850 1650
Wire Wire Line
	5850 1650 5850 2200
$Comp
L cc1101-module:CC1101 U2
U 1 1 5BE1E59D
P 9300 2250
F 0 "U2" H 9325 2889 60  0000 C CNN
F 1 "CC1101" H 9325 2783 60  0000 C CNN
F 2 "" H 9150 2800 60  0001 C CNN
F 3 "" H 9150 2800 60  0001 C CNN
	1    9300 2250
	1    0    0    -1  
$EndComp
Wire Wire Line
	8800 1900 7400 1900
Wire Wire Line
	7400 1900 7400 2400
Wire Wire Line
	7400 2400 7050 2400
Wire Wire Line
	7550 1500 7550 1800
Wire Wire Line
	7550 1800 7300 1800
Wire Wire Line
	7300 1800 7300 2100
Wire Wire Line
	7300 2100 7050 2100
Wire Wire Line
	7250 1200 7150 1200
Wire Wire Line
	7150 1200 7150 2200
Wire Wire Line
	7150 2200 7050 2200
$Comp
L power:GND #PWR0107
U 1 1 5BE32C24
P 7050 1200
F 0 "#PWR0107" H 7050 950 50  0001 C CNN
F 1 "GND" V 7054 1071 50  0000 R CNN
F 2 "" H 7050 1200 50  0001 C CNN
F 3 "" H 7050 1200 50  0001 C CNN
	1    7050 1200
	0    1    1    0   
$EndComp
Connection ~ 7150 1200
Wire Wire Line
	4400 1950 4600 1950
Wire Wire Line
	4550 1850 4400 1850
Wire Wire Line
	7050 1200 7150 1200
Wire Wire Line
	5450 2600 6150 2600
Wire Wire Line
	4550 1250 4550 1300
Wire Wire Line
	7550 900  6250 900 
Wire Wire Line
	6250 900  6250 1300
Wire Wire Line
	6250 1300 4550 1300
Connection ~ 4550 1300
Wire Wire Line
	4550 1300 4550 1850
Wire Wire Line
	4200 3450 4200 3500
Wire Wire Line
	4200 2700 4200 3150
$Comp
L Switch:SW_Push SW1
U 1 1 5C17D9B5
P 4850 3650
F 0 "SW1" V 4896 3601 50  0000 R CNN
F 1 "SW_Push" V 4804 3601 50  0001 R CNN
F 2 "" H 4850 3850 50  0001 C CNN
F 3 "" H 4850 3850 50  0001 C CNN
	1    4850 3650
	0    -1   -1   0   
$EndComp
$Comp
L power:GND #PWR?
U 1 1 5C17D9BD
P 4850 3800
F 0 "#PWR?" H 4850 3550 50  0001 C CNN
F 1 "GND" H 4855 3627 50  0000 C CNN
F 2 "" H 4850 3800 50  0001 C CNN
F 3 "" H 4850 3800 50  0001 C CNN
	1    4850 3800
	1    0    0    -1  
$EndComp
Wire Wire Line
	4850 3800 4850 3850
Wire Wire Line
	4200 2700 6150 2700
Wire Wire Line
	4850 3000 6150 3000
Wire Wire Line
	4850 3000 4850 3450
Wire Wire Line
	5250 3100 6150 3100
$Comp
L power:GND #PWR?
U 1 1 5C1846A7
P 5750 3800
F 0 "#PWR?" H 5750 3550 50  0001 C CNN
F 1 "GND" H 5755 3627 50  0000 C CNN
F 2 "" H 5750 3800 50  0001 C CNN
F 3 "" H 5750 3800 50  0001 C CNN
	1    5750 3800
	1    0    0    -1  
$EndComp
Wire Wire Line
	5750 3800 5750 3850
$Comp
L Switch:SW_Push SW?
U 1 1 5C1846A0
P 5750 3650
F 0 "SW?" V 5796 3601 50  0000 R CNN
F 1 "SW_Push" V 5704 3601 50  0001 R CNN
F 2 "" H 5750 3850 50  0001 C CNN
F 3 "" H 5750 3850 50  0001 C CNN
	1    5750 3650
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5750 3450 5750 3200
Wire Wire Line
	5750 3200 6150 3200
Connection ~ 5450 2150
Wire Wire Line
	5450 2150 5450 2600
Wire Wire Line
	5450 1850 5450 1750
$EndSCHEMATC
