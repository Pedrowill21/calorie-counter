export interface ICalorieCounter {
  gender: "woman" | "man";
  weight: number;
  height: number;
  age: number;
  activity?:
    | "pouca ou nenhuma"
    | "levemente ativo"
    | "moderadamente ativo"
    | "altamente ativo"
    | "extremamente ativo";
}
