import RouteWithLayout from "./routes/routesWithLayout";
import RouteWithoutLayout from "./routes/routesWithoutLayout";

export default function App() {
  return (
    <main className="w-full bg-[#f2f2f2]">
      <RouteWithLayout />
      <RouteWithoutLayout />
    </main>
  );
}
