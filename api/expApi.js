import { COLORS } from "../constants";

const getExpWeeklyData = () => {
  //call backend api to retrieve weekly exp data for user
  return {
    title: "EXP",
    subTitle: "WEEKLY AVERAGE",
    value: 1000,
    data: {
      labels: ["9/11", "10/11", "11/11", "12/11", "13/11", "14/11", "15/11"],
      datasets: [
        {
          data: [41, 41, 42, 45, 41, 40, 40],
          color: [
            (opacity) => COLORS.gray,
            (opacity) => COLORS.gray,
            (opacity) => COLORS.gray,
            (opacity) => COLORS.gray,
            (opacity) => COLORS.gray,
            (opacity) => COLORS.gray,
            (opacity) => "blue",
          ],
        },
      ],
    },
  };
};

export { getExpWeeklyData };
