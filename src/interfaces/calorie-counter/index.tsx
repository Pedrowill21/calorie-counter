export interface IDiet {
  weight: number;
  targetWeight: number;
  dietSpeed: TypeDietSpeed;
  dietTarget: TypeDietTarget;
}
export interface ICalorieCounter extends IDiet {
  activity: TypeActivity;
}
export interface ICaloricRecommendation extends IDiet, ITBM {
  TBM: number;
}

export interface ITBM {
  gender: TypeGender;
  weight: number;
  height: number;
  age: number;
}

export type TypeDietTarget = "ganhar peso" | "perder peso";

export type TypeDietSpeed = "normal" | "acelerada" | "agressiva";

export type TypeActivity =
  | "pouca ou nenhuma"
  | "levemente ativo"
  | "moderadamente ativo"
  | "altamente ativo"
  | "extremamente ativo";

export type TypeGender = "woman" | "man";
