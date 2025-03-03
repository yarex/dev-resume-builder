import data from "@/data/data.json";
import App from "../components/App";

export default function Home() {
  return (
    <div>
      <App data={data} />
    </div>
  );
}
