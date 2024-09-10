import {
  ICaloricIntakeRecommendation,
  ICalorieCounter,
} from "@/interfaces/calorie-counter";

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
      TBM = TBM * 1.2;
      break;

    case "levemente ativo":
      TBM = TBM * 1.375;
      break;

    case "moderadamente ativo":
      TBM = TBM * 1.55;
      break;

    case "altamente ativo":
      TBM = TBM * 1.725;
      break;

    case "extremamente ativo":
      TBM = TBM * 1.9;
      break;

    default:
  }

  CaloricRecommendation({ TBM, weight });
  return TBM;
}

export function CaloricRecommendation({
  TBM,
  weight,
}: ICaloricIntakeRecommendation) {

  let pesoNextYear = weight * 7700;
  const dayDeficit = [];

  const deficit = TBM * 0.3;

  for (let i = 0; i < 160; i++) {
    pesoNextYear = pesoNextYear - deficit;
    dayDeficit.push((pesoNextYear / 7700).toFixed(2));
  }

  console.log("peso final", dayDeficit);
}

//recomendação de gasto calórico para emagrecer
//recomendação de gasto calórico para ganhar massa
// criar uma função que mostra a progressão do peso da pessoa ao longo de um ano consumindo as calorias e macro nutrientes sugeridos
