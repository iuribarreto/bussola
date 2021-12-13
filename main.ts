let ver = 0
basic.forever(function () {
    input.calibrateCompass()
    ver = input.compassHeading()
    if (ver < 45) {
        basic.showString("N")
    } else if (ver < 135) {
        basic.showString("L")
    } else if (ver < 225) {
        basic.showString("S")
    } else if (ver < 315) {
        basic.showString("O")
    }
})
