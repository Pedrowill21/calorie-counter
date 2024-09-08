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
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [activity, setActivity] = useState<TypeActivity>();

  function onSubmit() {
    console.log("submit", {
      weight,
      height,
      age,
      gender,
      activity,
    });

    CalcCalorie({
      weight,
      height,
      age,
      gender,
      activity,
    });
  }

  return (
    <div className=" flex flex-col gap-10">
      <h1 className=" text-white font-bold">
        Descubra seu gasto calórico diário
      </h1>

      <div className=" flex flex-col gap-5 p-5">
        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Peso</span>
          <Input
            name="weight"
            className="max-w-72"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Peso em KG"
          />
        </div>

        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Altura</span>
          <Input
            name="weight"
            className="max-w-72"
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="Altura em CM"
          />
        </div>

        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Idade</span>
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
            defaultValue={activity}
            onValueChange={(e) => setActivity(e as TypeActivity)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue defaultValue={activity as string} />
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
