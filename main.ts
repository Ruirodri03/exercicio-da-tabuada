input.onButtonPressed(Button.A, function () {
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.showNumber(num1)
    basic.showString("x")
    basic.showNumber(num2)
    nr_jogadas += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(pontuação)
    basic.showString("de")
    basic.showNumber(nr_jogadas)
    basic.pause(1000)
    basic.clearScreen()
    nr_jogadas = 0
    pontuação = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num1 * num2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pontuação += 1
    basic.showString("Boa!!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let pontuação = 0
let nr_jogadas = 0
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
nr_jogadas = 0
pontuação = 0
