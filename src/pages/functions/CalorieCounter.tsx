import { ICalorieCounter } from "@/interfaces/calorie-counter";

function CalcTBM({ age, gender, height, weight }: ICalorieCounter) {
  const TBM = 10 * weight + 6.25 * height - 5 * age;
  if (gender === "woman") {
    return TBM - 161;
  }
  return TBM + 5;
}

export function CalcCalorie({
  age,
  gender,
  height,
  weight,
  activity,
}: ICalorieCounter) {
  let TBM = CalcTBM({ age, gender, height, weight });

  switch (activity) {
    case "pouca ou nenhuma":
      return (TBM = TBM * 1.2);
      break;

    case "levemente ativo":
      return (TBM = TBM * 1.375);
      break;

    case "moderadamente ativo":
      return (TBM = TBM * 1.55);
      break;

    case "altamente ativo":
      return (TBM = TBM * 1.725);
      break;

    case "extremamente ativo":
      return (TBM = TBM * 1.9);
      break;

    default:
  }

  return TBM;
}
