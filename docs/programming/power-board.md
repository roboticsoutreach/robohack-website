# Power Board API

The power board can be accessed using the `power` submodule in `sbot`:

```python
power.get_battery_data(...)
```
## Power outputs

The power board's outputs (H0, H1, L0, L1, etc) are identified in the `PowerOutputPosition` enum (importable from `sbot`):

```python
power.set_output(PowerOutputPosition.H0, True)
```

The power board's six outputs can be turned on and off using the
`set_output` function of the submodule, which takes a boolean on/off value.

:::tip
All outputs are set on when you set up your robot, so
this doesn't need to be called manually. The ports will come on
automatically as soon as your robot is ready, before the start button is
pressed.
:::

```python
power.set_output(PowerOutputPosition.H0, True)
power.set_output(PowerOutputPosition.L1, False)
```

You can also get information about and control each output in the group:

```python
from sbot import PowerOutputPosition

power.set_output(PowerOutputPosition.H0, True)
power.set_output(PowerOutputPosition.L3, False)

boolean_value = power.is_output_on(PowerOutputPosition.L2)

current_amps = power.get_output_current(PowerOutputPosition.H1)
```

:::warning
The motor and servo boards are powered through these
power outputs, whilst the power is off, you won't be able to control
your motors or servos. They will register as a missing board and your code will
break if you try and control them.
:::

## Battery Sensor

The power board has some sensors that can monitor the status of your battery.
This can be useful for checking the charge status of your battery.

```python
battery_voltage, battery_current = power.get_battery_data()
```
