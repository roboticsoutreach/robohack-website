# Motor Board API

The Motor Board can control up to two motors.

## Accessing the Motor Board
The Motor Board can be accessed by importing `motors` from `sbot`.

```python
from sbot import motors
```

## Powering Motors

Motor power is controlled using [Pulse-Width Modulation
(PWM)](https://en.wikipedia.org/wiki/Pulse-width_modulation). You set
the power with a fractional value between `-1` and `1` inclusive, where
`1` is maximum speed in one direction, `-1` is maximum speed in the
other direction and `0` causes the motor to brake.

```python
motors.set_power(0, 1)
motors.set_power(1, -1)
```

These values can also be read back:

```python
>>> motors.get_power(0)
1

>>> motors.get_power(1)
-1
```

:::warning
Setting a value outside of the range `-1` to `1` will raise an exception and your code will crash.
:::

:::warning
Sudden large changes in the motor speed setting (e.g. `-1` to `0`, `1` to `-1` etc.) will likely trigger the over-current protection and your robot will shut down with a distinct beeping noise and/or a red light next to the power board output that is powering the motor board.
:::

### Special Values

In addition to the numeric values, there are two special constants that
can be used: `BRAKE` and `COAST`. In order to use these, they must be
imported from the `sbot` module like so:

```python
from sbot import BRAKE, COAST
```

#### `BRAKE`

`BRAKE` will stop the motors from turning, and thus stop your robot as
quick as possible.

:::info
`BRAKE` does the same as setting the power to `0`.
:::

```python
from sbot import motors, BRAKE

motors.set_power(0, BRAKE)
```

#### `COAST`

`COAST` will stop applying power to the motors. This will mean they
continue moving under the momentum they had before.

```python
from sbot import motors, COAST

motors.set_power(1, COAST)
```

## Motor Status

Several functions are provided to manage the Motor Board.

### Get Motor Current

You can get the current being drawn by either motor by passing a motor number to the `get_motor_current` function.

```python
current = motors.get_motor_current(0)
```

The function returns the current being drawn in Amps as a float.

### Check Fault Status

For various reasons, such as a motor drawing too much current, the motor board can enter a 'fault' state. You can use the `in_fault` function to check for faults on either output.

```python
m0_has_fault = motors.in_fault(0)

if m0_has_fault:
    print("Fault on motor 0 :(")
```

### Reset Motor Board

You can clear any faults by resetting the motor board.

```python
motors.reset()
```
