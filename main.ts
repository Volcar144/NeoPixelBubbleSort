function ShowInOrder (list2: number[]) {
    for (let index = 0; index <= 7; index++) {
        let previous: number[] = []
        if (previous[index] != list2[index]) {
            strip.setPixelColor(index, list2[index])
            previous[index] = list2[index]
            strip.show()
            basic.pause(75)
        }
    }
}
function shuffleArray (list22: number[]) {
    i = list22.length - 1
    while (i > 0) {
        randomIndex = Math.randomRange(0, i)
        tempValue = list22[i]
        list22[i] = list22[randomIndex]
        list22[randomIndex] = tempValue
        i += 0 - 1
    }
}
input.onButtonPressed(Button.A, function () {
    shuffleArray(shuffled)
    shuffleArray(shuffled)
    ShowInOrder(shuffled)
})
input.onButtonPressed(Button.AB, function () {
    shuffled = [
    neopixel.colors(NeoPixelColors.Red),
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Yellow),
    neopixel.colors(NeoPixelColors.Green),
    neopixel.colors(NeoPixelColors.Blue),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Violet),
    neopixel.colors(NeoPixelColors.Purple)
    ]
    ShowInOrder(shuffled)
})
function bubbleSort (Shuffled: number[], Sorted: number[]) {
    ShowInOrder(Shuffled)
    basic.pause(2000)
    while (pass2 < Shuffled.length - 1) {
        index2 = 0
        while (index2 < Shuffled.length - 1 - pass2) {
            if (Sorted.indexOf(Shuffled[index2]) > Sorted.indexOf(Shuffled[index2 + 1])) {
                temp = Shuffled[index2]
                Shuffled[index2] = Shuffled[index2 + 1]
                Shuffled[index2 + 1] = temp
                ShowInOrder(Shuffled)
                basic.pause(200)
            }
            index2 += 1
        }
        pass2 += 1
    }
}
input.onButtonPressed(Button.B, function () {
    bubbleSort(shuffled, order)
})
let temp = 0
let index2 = 0
let pass2 = 0
let tempValue = 0
let randomIndex = 0
let i = 0
let shuffled: number[] = []
let order: number[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
order = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple)
]
shuffled = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple)
]
ShowInOrder(shuffled)
basic.forever(function () {
	
})
