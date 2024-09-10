import {
  ICaloricRecommendation,
  ICalorieCounter,
  ITBM,
} from "@/interfaces/calorie-counter";

function CalcTBM({ age, gender, height, weight }: ITBM) {
  const TBM = 10 * weight + 6.25 * height - 5 * age;
  return gender === "woman" ? TBM - 161 : TBM + 5;
}

const activityMultipliers: Record<string, number> = {
  "pouca ou nenhuma": 1.2,
  "levemente ativo": 1.375,
  "moderadamente ativo": 1.55,
  "altamente ativo": 1.725,
  "extremamente ativo": 1.9,
};

export function CalcCalorie({
  age,
  gender,
  height,
  weight,
  activity,
  dietSpeed,
  dietTarget,
  targetWeight,
}: ICalorieCounter) {
  let TBM = CalcTBM({ age, gender, height, weight });

  TBM = TBM * (activityMultipliers[activity] || 1.2);

  CaloricRecommendation({
    dietSpeed,
    dietTarget,
    targetWeight,
    TBM,
    weight,
  });

  return TBM;
}

const dietSpeedMultipliers: Record<string, number> = {
  normal: 0.2,
  acelerada: 0.35,
  agressiva: 0.5,
};

function CaloricRecommendation({
  TBM,
  weight,
  dietTarget,
  targetWeight,
  dietSpeed,
}: ICaloricRecommendation) {
  let currentWeight = weight * 7700;
  const dailyDeficit: string[] = [];
  const deficit = TBM * (dietSpeedMultipliers[dietSpeed] || 0.2);

  while (
    dietTarget === "perder peso"
      ? currentWeight > targetWeight * 7700
      : currentWeight < targetWeight * 7700
  ) {
    currentWeight =
      dietTarget === "perder peso"
        ? currentWeight - deficit
        : currentWeight + deficit;

    dailyDeficit.push((currentWeight / 7700).toFixed(2));
  }

  console.log("peso final", dailyDeficit);
}
