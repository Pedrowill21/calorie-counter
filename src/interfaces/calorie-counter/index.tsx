export interface ICalorieCounter {
  gender: typeGender;
  weight: number;
  height: number;
  age: number;
  activity?: TypeActivity;
}

export type TypeActivity =
  | "pouca ou nenhuma"
  | "levemente ativo"
  | "moderadamente ativo"
  | "altamente ativo"
  | "extremamente ativo";
export type typeGender = "woman" | "man";
