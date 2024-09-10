import { Input } from "@/components/ui/input";
import {
  TypeActivity,
  TypeDietSpeed,
  TypeDietTarget,
  TypeGender,
} from "@/interfaces/calorie-counter";
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
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
interface IData {
  TBM: number;
  chart: string[];
}

interface IChart {
  days: string;
  peso: string;
}

export function CalorieCounter() {
  const [gender, setGender] = useState<TypeGender>("man");
  const [weight, setWeight] = useState<number>(80);
  const [height, setHeight] = useState<number>(175);
  const [age, setAge] = useState<number>(30);
  const [activity, setActivity] = useState<TypeActivity>("pouca ou nenhuma");
  const [TBM, setTBM] = useState<number>();
  const [dietTarget, setDietTarget] = useState<TypeDietTarget>("perder peso");
  const [dietSpeed, setDietSpeed] = useState<TypeDietSpeed>("normal");
  const [targetWeight, setTargetWeight] = useState<number>(70);
  const [chart, setChart] = useState<IChart[] | null>(null);

  const chartConfig = {
    peso: {
      label: "peso",
      color: "#05c23e",
    },
  } satisfies ChartConfig;

  function onSubmit() {
    const data: IData = CalcCalorie({
      weight,
      height,
      age,
      gender,
      activity,
      dietSpeed,
      dietTarget,
      targetWeight,
    });

    setTBM(data.TBM);
    setChart(
      data.chart.map((item, i) => ({ days: `Dia ${i}`, peso: `${item}` }))
    );
  }

  return (
    <div className=" w-full flex flex-col items-center p-5 gap-10">
      <h1 className=" text-white font-bold">
        Descubra seu gasto calórico diário
      </h1>

      <div className=" flex flex-col gap-5 p-5">
        <div className="flex items-center">
          <span className=" text-white font-medium w-16">peso</span>
          <Input
            name="weight"
            className="max-w-72"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="peso em KG"
          />
        </div>

        <div className="flex items-center">
          <span className=" text-white font-medium w-16">Objetivo</span>
          <Input
            name="target-weight"
            className="max-w-72"
            type="number"
            value={targetWeight}
            onChange={(e) => setTargetWeight(Number(e.target.value))}
            placeholder="peso em KG"
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
            onValueChange={(e) => setGender(e as TypeGender)}
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

        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Dieta</span>
          <Select
            value={dietTarget}
            onValueChange={(e) => setDietTarget(e as TypeDietTarget)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="perder peso" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="perder peso">Perder peso</SelectItem>
              <SelectItem value="ganhar peso">Ganhar peso</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-5">
          <span className=" text-white font-medium">Ritmo </span>
          <Select
            value={dietSpeed}
            onValueChange={(e) => setDietSpeed(e as TypeDietSpeed)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="normal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="acelerada">Acelerado</SelectItem>
              <SelectItem value="agressiva">Agressivo</SelectItem>
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

      {TBM && (
        <span className=" text-white text-lg">
          Meta calórica{" "}
          <span className=" font-bold text-green-500">{TBM.toFixed(0)}</span>{" "}
          calorias
        </span>
      )}

      {chart && (
        <div className=" w-full flex flex-col items-center gap-5">
          <span className=" text-white font-bold">{chart.length} dias de dieta </span>
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] w-full max-w-[800px]"
          >
            <BarChart accessibilityLayer data={chart}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="days"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend
                className=" text-white"
                content={<ChartLegendContent />}
              />
              <Bar dataKey="peso" fill="var(--color-peso)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      )}
    </div>
  );
}
