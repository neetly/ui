ANSI_reset = "\x1B[0m"
ANSI_bold = "\x1B[1m"


def ANSI_foreground(R: int, G: int, B: int) -> str:
    return f"\x1B[38;2;{R};{G};{B}m"


def ANSI_background(R: int, G: int, B: int) -> str:
    return f"\x1B[48;2;{R};{G};{B}m"
