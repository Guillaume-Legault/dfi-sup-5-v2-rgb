let etatactuel2 = 0
let rouge = 0
let vert = 0
let bleu = 0
let nombre = 0
let etatpasse = 0
let etatactuel = 0
basic.forever(function () {
    basic.showNumber(nombre)
    etatactuel = pins.digitalReadPin(DigitalPin.P16)
    etatactuel2 = pins.digitalReadPin(DigitalPin.P0)
    pins.analogWritePin(AnalogPin.P1, rouge)
    pins.analogWritePin(AnalogPin.P2, vert)
    pins.analogWritePin(AnalogPin.P8, bleu)
    if (etatactuel2 == 0) {
        rouge += 250
        nombre += 1
    }
    if (etatactuel != etatpasse) {
        if (etatactuel == 1) {
            rouge += 250
            nombre += 1
        }
    }
    if (rouge >= 1023) {
        vert += 250
    } else if (vert >= 1023) {
        bleu += 250
    } else {
    	
    }
})
