def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
radio.on_received_number(on_received_number)

def on_forever():
    radio.set_group(1)
basic.forever(on_forever)
