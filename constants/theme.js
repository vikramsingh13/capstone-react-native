const COLORS = {
  primary: "#BB86FC",
  primaryVariant: "#3700b3",
  secondary: "#03DAC6",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",
  grayDark: "#5A5A5A",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  background: "#121212",
  surface: "#121212",
  error: "#CF6679",

  goldStar: "#FFD700",

    //text colors
  onPrimary: "#000000",
  onSecondary: "#000000",
  onError: "#000000",
  onBackground: "#FFFFFF",
  onSurface: "#FFFFFF",

};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };