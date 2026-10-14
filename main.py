def ShowInOrder(list2: List[number]):
    for index in range(8):
        if previous[index] != list2[index]:
            strip.set_pixel_color(index, list2[index])
            previous[index] = list2[index]
            strip.show()
            basic.pause(75)
def shuffleArray(list22: List[number]):
    global i, randomIndex, tempValue
    i = len(list22) - 1
    while i > 0:
        randomIndex = Math.random_range(0, i)
        tempValue = list22[i]
        list22[i] = list22[randomIndex]
        list22[randomIndex] = tempValue
        i += 0 - 1
def bubbleSort(Shuffled: List[number], Sorted: List[number]):
    global index2, temp, pass2
    ShowInOrder(Shuffled)
    basic.pause(2000)
    while pass2 < len(Shuffled) - 1:
        index2 = 0
        while index2 < len(Shuffled) - 1 - pass2:
            if Sorted.index_of(Shuffled[index2]) > Sorted.index_of(Shuffled[index2 + 1]):
                temp = Shuffled[index2]
                Shuffled[index2] = Shuffled[index2 + 1]
                Shuffled[index2 + 1] = temp
                ShowInOrder(Shuffled)
                basic.pause(300)
            index2 += 1
        pass2 += 1
temp = 0
index2 = 0
pass2 = 0
tempValue = 0
randomIndex = 0
i = 0
previous: List[number] = []
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
order = [neopixel.colors(NeoPixelColors.RED),
    neopixel.colors(NeoPixelColors.ORANGE),
    neopixel.colors(NeoPixelColors.YELLOW),
    neopixel.colors(NeoPixelColors.GREEN),
    neopixel.colors(NeoPixelColors.BLUE),
    neopixel.colors(NeoPixelColors.INDIGO),
    neopixel.colors(NeoPixelColors.VIOLET),
    neopixel.colors(NeoPixelColors.PURPLE)]
shuffled = [neopixel.colors(NeoPixelColors.RED),
    neopixel.colors(NeoPixelColors.ORANGE),
    neopixel.colors(NeoPixelColors.YELLOW),
    neopixel.colors(NeoPixelColors.GREEN),
    neopixel.colors(NeoPixelColors.BLUE),
    neopixel.colors(NeoPixelColors.INDIGO),
    neopixel.colors(NeoPixelColors.VIOLET),
    neopixel.colors(NeoPixelColors.PURPLE)]
ShowInOrder(shuffled)
basic.pause(2000)
shuffleArray(shuffled)
shuffleArray(shuffled)
ShowInOrder(shuffled)
bubbleSort(shuffled, order)

def on_forever():
    pass
basic.forever(on_forever)
