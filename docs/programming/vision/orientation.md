# Orientation

![Yaw Pitch and Roll (Image source: Wikipedia)](https://upload.wikimedia.org/wikipedia/commons/c/c1/Yaw_Axis_Corrected.svg)

Orientation represents the rotation of a marker around its center. These can be accessed as follows:

-   `yaw` - the angle of rotation in radians clockwise about the vertical axis.
-   `pitch` - the angle of rotation in radians upwards about the transverse axis.
-   `roll` - the angle of rotation in radians clockwise about the longitudinal axis.

```python
markers = vision.detect_markers()

for marker in markers:
   print(marker.orientation.yaw)
   print(marker.orientation.pitch)
   print(marker.orientation.roll)
```

## Examples

The following table visually explains what positive and negative rotations represent.

0 in all axes:

    ![m0x0y0z](../../assets/img/api/vision/m0x0y0z.png)

|             |                           π/4                           |                          -π/4                           |
| ----------: | :-----------------------------------------------------: | :-----------------------------------------------------: |
|   **`yaw`** |  ![m0x45y0z](../../assets/img/api/vision/m0x45y0z.png)  | ![m0x-45y0z](../../assets/img/api/vision/m0x-45y0z.png) |
| **`pitch`** | ![m-45x0y0z](../../assets/img/api/vision/m-45x0y0z.png) |  ![m45x0y0z](../../assets/img/api/vision/m45x0y0z.png)  |
|  **`roll`** | ![m0x0y-45z](../../assets/img/api/vision/m0x0y-45z.png) |  ![m0x0y45z](../../assets/img/api/vision/m0x0y45z.png)  |

[m0x0y0z]: ../../assets/img/api/vision/m0x0y0z.png
[m-45x0y0z]: ../../assets/img/api/vision/m-45x0y0z.png
[m0x-45y0z]: ../../assets/img/api/vision/m0x-45y0z.png
[m0x0y-45z]: ../../assets/img/api/vision/m0x0y-45z.png
[m0x0y0z]: ../../assets/img/api/vision/m0x0y0z.png
[m0x0y45z]: ../../assets/img/api/vision/m0x0y45z.png
[m0x45y0z]: ../../assets/img/api/vision/m0x45y0z.png
[m45x0y0z]: ../../assets/img/api/vision/m45x0y0z.png

