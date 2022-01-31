import numpy as np

from .color_utils import *


def HCT_to_sRGB(HCT: np.ndarray) -> np.ndarray:
    CAM16 = _find_CAM16(HCT[0], HCT[1], HCT[2])
    if CAM16 is not None:
        return CAM16_to_sRGB(CAM16)
    else:
        return Lab_to_sRGB(np.array([HCT[2], 0.0, 0.0]))


def sRGB_to_HCT(sRGB: np.ndarray) -> np.ndarray:
    XYZ = sRGB_to_XYZ(sRGB)
    CAM16 = XYZ_to_CAM16(XYZ)
    Lab = XYZ_to_Lab(XYZ)
    return np.array([CAM16.h, CAM16.C, Lab[0]])


def HCT_to_HEX(HCT: np.ndarray) -> str:
    return sRGB_to_HEX(HCT_to_sRGB(HCT))


def HEX_to_HCT(HEX: str) -> np.ndarray:
    return sRGB_to_HCT(HEX_to_sRGB(HEX))


def _find_CAM16(hue: float, chroma: float, tone: float) -> CAM16_Specification | None:
    CAM16 = _find_CAM16_by_J(hue, chroma, tone)
    if CAM16 is not None:
        return CAM16

    best_CAM16 = None

    low, high = 0.0, chroma
    while high - low >= 0.1:
        middle = (low + high) / 2

        CAM16 = _find_CAM16_by_J(hue, middle, tone)
        if CAM16 is not None:
            best_CAM16 = CAM16
            low = middle
        else:
            high = middle

    return best_CAM16


def _find_CAM16_by_J(
    hue: float, chroma: float, tone: float
) -> CAM16_Specification | None:
    best_CAM16 = None
    best_delta_Lstar = 100.0
    best_delta_E = 100.0

    low, high = 0.0, 100.0
    while high - low >= 0.01:
        middle = (low + high) / 2

        CAM16 = CAM16_Specification(J=middle, C=chroma, h=hue)
        clipped_sRGB = CAM16_to_sRGB(CAM16)
        clipped_CAM16 = sRGB_to_CAM16(clipped_sRGB)
        clipped_Lab = sRGB_to_Lab(clipped_sRGB)
        clipped_Lstar = clipped_Lab[0]

        delta_Lstar = np.absolute(tone - clipped_Lstar)
        delta_E = CAM16_difference(
            clipped_CAM16,
            CAM16_Specification(J=clipped_CAM16.J, C=clipped_CAM16.C, h=hue),
        )

        if delta_Lstar < 0.2 and delta_E < 1.0:
            if delta_Lstar < best_delta_Lstar and delta_E < best_delta_E:
                best_CAM16 = clipped_CAM16
                best_delta_Lstar = delta_Lstar
                best_delta_E = delta_E

        if clipped_Lstar < tone:
            low = middle
        else:
            high = middle

    return best_CAM16
