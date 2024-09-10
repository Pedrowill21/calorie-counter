import { Input } from "@/components/ui/input";
import { TypeActivity, typeGender } from "@/interfaces/calorie-counter";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CalcCalorie } from "../functions/CalorieCounter";

export function CalorieCounter() {
  const [gender, setGender] = useState<typeGender>("man");
  const [weight, setWeight] = useState<number>(80);
  const [height, setHeight] = useState<number>(175);
  const [age, setAge] = useState<number>(30);
  const [activity, setActivity] = useState<TypeActivity>();
  const [TBM, setTBM] = useState<number>();

  function onSubmit() {
    // console.log("submit", {
    //   weight,
    //   height,
    //   age,
    //   gender,
    //   activity,
    // });

    setTBM(
      CalcCalorie({
        weight,
        height,
        age,
        gender,
        activity,
      })
    );
  }

  return (
    <div className=" flex flex-col items-center p-5 gap-10">
      <h1 className=" text-white font-bold">
        Descubra seu gasto calórico diário
      </h1>

      {TBM && (
        <span className=" text-white text-lg">
          Meta calórica <span className=" font-bold text-green-500">{TBM.toFixed(0)}</span> calorias
        </span>
      )}

      <div className=" flex flex-col gap-5 p-5">
        <div className="flex items-center">
          <span className=" text-white font-medium w-16">Peso</span>
          <Input
            name="weight"
            className="max-w-72"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Peso em KG"
          />
        </div>

        <div className="flex items-center">
          <span className=" text-white font-medium  w-16">Altura</span>
          <Input
            name="weight"
            className="max-w-72"
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="Altura em CM"
          />
        </div>

        <div className="flex items-center">
          <span className=" text-white font-medium w-16">Idade</span>
          <Input
            name="weight"
            className="max-w-72"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Idade"
          />
        </div>

        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Atividade física</span>
          <Select
            value={activity}
            onValueChange={(e) => setActivity(e as TypeActivity)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="pouca ou nenhuma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pouca ou nenhuma">Pouca ou nenhuma</SelectItem>
              <SelectItem value="levemente ativo">Levemente ativo</SelectItem>
              <SelectItem value="moderadamente ativo">
                Moderadamente ativo
              </SelectItem>
              <SelectItem value="altamente ativo">Altamente ativo</SelectItem>
              <SelectItem value="extremamente ativo">
                Extremamente ativo
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Gênero</span>
          <Select
            value={gender}
            onValueChange={(e) => setGender(e as typeGender)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Homem" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="man">Homem</SelectItem>
              <SelectItem value="woman">Mulher</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={onSubmit}
          className=" transition max-w-32 h-12 bg-green-600 text-base hover:bg-white hover:text-green-500 "
        >
          Calcular
        </Button>
      </div>
    </div>
  );
}
