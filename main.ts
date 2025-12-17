input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    record.startRecording(record.BlockingState.Blocking)
    control2 = 0
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    record.playAudio(record.BlockingState.Blocking)
})
let control2 = 0
music.setVolume(255)
record.setMicGain(record.AudioLevels.Low)
control2 = 1
basic.forever(function () {
    if (input.lightLevel() > 10) {
        if (control2 == 0) {
            record.playAudio(record.BlockingState.Blocking)
            control2 = 1
        }
    }
})
