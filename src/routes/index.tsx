import { CalorieCounter } from "@/pages/calorie-counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CalorieCounter />} />
      </Routes>
    </BrowserRouter>
  );
}
