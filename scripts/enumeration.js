"use strict";
var Eyecolor;
(function (Eyecolor) {
    Eyecolor[Eyecolor["Brown"] = 1] = "Brown";
    Eyecolor[Eyecolor["Black"] = 5] = "Black";
    Eyecolor[Eyecolor["Blue"] = 10] = "Blue";
})(Eyecolor || (Eyecolor = {}));
;
var myEyeColor = Eyecolor.Brown;
console.log(myEyeColor);
console.log(Eyecolor[myEyeColor]);
//# sourceMappingURL=enumeration.js.map