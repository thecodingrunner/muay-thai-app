import Image from "next/image";

export default function Workout() {
  return (
    <main className="flex flex-col justify-center items-center bg-[rgb(0,0,0)] h-[70vh]">
        <div className="text-7xl text-red-700 mb-10">Workout 1</div>
        <div className="flex gap-10 justify-center items-center">
            <div>
                <h2 className="text-2xl text-white mb-6">Statistics</h2>
                <div className="flex text-xl">
                    <ul className="w-80 text-red-600">
                        <li>Workout time:</li>
                        <li>Total Strikes:</li>
                        <li>Average Force/Speed:</li>
                        <li>Average Strikes/Second:</li>
                        <li>Defensive Score (%):</li>
                        <li>Jabs:</li>
                        <li>Uppercuts:</li>
                        <li>Hook:</li>
                    </ul>
                    <ul className="w-10 text-white">
                        <li>5:20</li>
                        <li>44</li>
                        <li>500</li>
                        <li>0.5</li>
                        <li>60</li>
                        <li>22</li>
                        <li>10</li>
                        <li>12</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="text-2xl text-white">Graph</h2>
            </div>
        </div>
    </main>
  );
}