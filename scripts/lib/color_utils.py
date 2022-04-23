import colour
import numpy as np

CAM16_Specification = colour.CAM_Specification_CAM16


def sRGB_round(sRGB: np.ndarray) -> np.ndarray:
    return np.rint(sRGB.clip(0.0, 1.0) * 255.0) / 255.0


def sRGB_to_XYZ(sRGB: np.ndarray) -> np.ndarray:
    return colour.sRGB_to_XYZ(sRGB_round(sRGB))


def XYZ_to_sRGB(XYZ: np.ndarray) -> np.ndarray:
    return sRGB_round(colour.XYZ_to_sRGB(XYZ))


def sRGB_to_HEX(sRGB: np.ndarray) -> str:
    return colour.notation.RGB_to_HEX(sRGB_round(sRGB))


def HEX_to_sRGB(HEX: str) -> np.ndarray:
    return sRGB_round(colour.notation.HEX_to_RGB(HEX))


def Lab_to_XYZ(Lab: np.ndarray) -> np.ndarray:
    return colour.Lab_to_XYZ(Lab)


def XYZ_to_Lab(XYZ: np.ndarray) -> np.ndarray:
    return colour.XYZ_to_Lab(XYZ)


def sRGB_to_Lab(sRGB: np.ndarray) -> np.ndarray:
    return XYZ_to_Lab(sRGB_to_XYZ(sRGB))


def Lab_to_sRGB(Lab: np.ndarray) -> np.ndarray:
    return XYZ_to_sRGB(Lab_to_XYZ(Lab))


_CAM16_parameters = {
    "XYZ_w": colour.TVS_ILLUMINANTS["CIE 1931 2 Degree Standard Observer"]["D65"],
    "L_A": (200.0 / np.pi) / (20.0 / 100.0),
    "Y_b": 20.0,
}


def CAM16_to_XYZ(CAM16: CAM16_Specification) -> np.ndarray:
    return colour.CAM16_to_XYZ(CAM16, **_CAM16_parameters) / 100.0


def XYZ_to_CAM16(XYZ: np.ndarray) -> CAM16_Specification:
    return colour.XYZ_to_CAM16(XYZ * 100.0, **_CAM16_parameters)


def CAM16_to_sRGB(CAM16: CAM16_Specification) -> np.ndarray:
    return XYZ_to_sRGB(CAM16_to_XYZ(CAM16))


def sRGB_to_CAM16(sRGB: np.ndarray) -> CAM16_Specification:
    return XYZ_to_CAM16(sRGB_to_XYZ(sRGB))


def CAM16UCS_to_XYZ(CAM16UCS: np.ndarray) -> np.ndarray:
    return colour.CAM16UCS_to_XYZ(CAM16UCS)


def XYZ_to_CAM16UCS(XYZ: np.ndarray) -> np.ndarray:
    return colour.XYZ_to_CAM16UCS(XYZ)


def CAM16_to_CAM16UCS(CAM16: CAM16_Specification) -> np.ndarray:
    return XYZ_to_CAM16UCS(CAM16_to_XYZ(CAM16))


def CAM16UCS_to_CAM16(CAM16UCS: np.ndarray) -> CAM16_Specification:
    return XYZ_to_CAM16(CAM16UCS_to_XYZ(CAM16UCS))


def CAM16_difference(
    CAM16_1: CAM16_Specification,
    CAM16_2: CAM16_Specification,
) -> float:
    return colour.difference.delta_E_CAM16UCS(
        CAM16_to_CAM16UCS(CAM16_1),
        CAM16_to_CAM16UCS(CAM16_2),
    )


def CAM16UCS_difference(CAM16UCS_1: np.ndarray, CAM16UCS_2: np.ndarray) -> float:
    return colour.difference.delta_E_CAM16UCS(CAM16UCS_1, CAM16UCS_2)
