(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{219:function(e,n,r){"use strict";r.r(n);var t=r(20),a=Object(t.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dauersender-babbling-idiot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dauersender-babbling-idiot","aria-hidden":"true"}},[e._v("#")]),e._v(" Dauersender / Babbling Idiot")]),e._v(" "),r("p",[e._v("Abschaltung oder Dauersender/-störer trotz fast voller Batterien")]),e._v(" "),r("p",[e._v("Um die garantierten Spezifikationen des ATMega328P einzuhalten, ist ab Werk die so genannte\n"),r("a",{attrs:{href:"https://www.mikrocontroller.net/articles/Brownout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brown-Out-Detection (BOD)"),r("OutboundLink")],1),e._v(" bei "),r("strong",[e._v("2.7V")]),e._v(" aktiviert.\nSinkt die Eingangsspannung unter diesen Wert, fällt der µC in einen RESET-Zustand.\nDas "),r("em",[e._v("kann")]),e._v(" ungewollte Nebenfolgen haben\n(siehe "),r("a",{attrs:{href:"https://github.com/TomMajor/AskSinPP_Examples/tree/master/Info/Babbling%20Idiot%20Protection",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Babbling Idiot"'),r("OutboundLink")],1),e._v(")!\nWeiterhin werden die Batterien dadurch auch nur sehr ineffektiv genutzt.")]),e._v(" "),r("p",[e._v("Bei der BOD handelt es sich um ein sogenanntes "),r("a",{attrs:{href:"https://de.wikipedia.org/wiki/Fuse-Bit",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Fuse-Bit"'),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Fuse-Bits können nur mithilfe eines ISP (In-System-Programmer)\n(z.B. "),r("a",{attrs:{href:"https://www.ebay.de/i/232496093834",target:"_blank",rel:"noopener noreferrer"}},[e._v("USBasp"),r("OutboundLink")],1),e._v(" oder\n"),r("a",{attrs:{href:"https://www.diamex.de/dxshop/USB-ISP-Programmer-fuer-Atmel-AVR-Rev2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Diamex Programmer"),r("OutboundLink")],1),e._v(")\nverändert werden. Es lässt sich auch ein\n"),r("a",{attrs:{href:"https://www.arduino.cc/en/Tutorial/ArduinoISP",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arduino UNO als ISP"),r("OutboundLink")],1),e._v(" verwenden!")]),e._v(" "),r("p",[e._v("Der ISP ist 1:1 mit 6 Leitungen an den Pro Mini zu verbinden:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Pro Mini")]),e._v(" "),r("th",[e._v("ISP")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("VCC")]),e._v(" "),r("td",[e._v("VCC")])]),e._v(" "),r("tr",[r("td",[e._v("GND")]),e._v(" "),r("td",[e._v("GND")])]),e._v(" "),r("tr",[r("td",[e._v("RESET")]),e._v(" "),r("td",[e._v("RESET")])]),e._v(" "),r("tr",[r("td",[e._v("11")]),e._v(" "),r("td",[e._v("MOSI")])]),e._v(" "),r("tr",[r("td",[e._v("12")]),e._v(" "),r("td",[e._v("MISO")])]),e._v(" "),r("tr",[r("td",[e._v("13")]),e._v(" "),r("td",[e._v("SCK")])])])]),e._v(" "),r("p",[e._v("Das Setzen der Fuse-Bits erfolgt mit dem Tool "),r("code",[e._v("avrdude")]),e._v(".\nEs befindet sich bei installierter "),r("strong",[e._v("Arduino IDE")]),e._v(" und Boardunterstützung "),r("strong",[e._v("Arduino AVR Boards")])]),e._v(" "),r("ul",[r("li",[e._v("in Windows:\n"),r("ul",[r("li",[r("code",[e._v("C:\\Users\\<Benutzer>\\AppData\\Local\\Arduino15\\packages\\arduino\\tools\\avrdude\\6.3.0-arduino14\\bin\\")])])])]),e._v(" "),r("li",[e._v("auf dem Mac:\n"),r("ul",[r("li",[r("code",[e._v("~/Library/Arduino15/packages/arduino/tools/avrdude/6.3.0-arduino14/bin/")])])])]),e._v(" "),r("li",[e._v("bei Linux:\n"),r("ul",[r("li",[r("code",[e._v("~/.arduino15/packages/arduino/tools/avrdude/6.3.0-arduino14/bin/")])])])])]),e._v(" "),r("p",[r("em",[e._v("(Der Ordner "),r("code",[e._v("6.3.0-arduino14")]),e._v(" kann je nach Version abweichen.)")])]),e._v(" "),r("p",[e._v("Der Aufruf erfolgt dann bei Verwendung des USBasp in der Eingabeaufforderung/Kommandozeile mit:")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Pfadangabe"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/avrdude -v -pm328p -cusbasp -Ulfuse:w:0xFF:m -Uhfuse:w:0xD2:m -Uefuse:w:0xFF:m\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[r("em",[e._v("(USBasp benötigt einen "),r("a",{attrs:{href:"http://zadig.akeo.ie",target:"_blank",rel:"noopener noreferrer"}},[e._v('speziellen USB-Treiber "libusb"'),r("OutboundLink")],1),e._v("!)")])]),e._v(" "),r("p",[e._v("Bei Verwendung eines Diamex oder Arduino UNO as ISP sieht der Aufruf so aus "),r("em",[e._v("(com11 ggf. ändern!)")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Pfadangabe"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/avrdude -v -pm328p -P com11 -c stk500v1 -b 19200 -Ulfuse:w:0xFF:m -Uhfuse:w:0xD2:m -Uefuse:w:0xFF:m\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])},[],!1,null,null,null);a.options.__file="babbling_idiot.md";n.default=a.exports}}]);