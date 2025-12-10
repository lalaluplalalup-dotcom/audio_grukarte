input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.clearScreen()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showNumber(input.lightLevel())
})
record.setMicGain(record.AudioLevels.Low)
