import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { sem: "Sem 1", sgpa: 8.13, cgpa: 8.13 },
  { sem: "Sem 2", sgpa: 8.21, cgpa: 8.17 },
  { sem: "Sem 3", sgpa: 8.80, cgpa: 8.38 },
  { sem: "Sem 4", sgpa: 8.64, cgpa: 8.45 },
  { sem: "Sem 5", sgpa: 9.26, cgpa: 8.61 },
  { sem: "Sem 6", sgpa: 9.08, cgpa: 8.69 },
];

export default function AcademicChart() {
  return (
    <section id = "academics" className="min-h-screen py-20 px-6 md:px-16 bg-gradient-to-tr from-midnight to-[#0a0a1f] text-starlight relative">
      <div className="absolute -top-16 left-20 w-[500px] h-[500px] bg-gradient-to-br from-auroraGreen to-nebulaPink opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      <motion.h2
        className="text-4xl font-bold text-center text-auroraGreen mb-10 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Academic Climb 📈
      </motion.h2>

      <div className="z-10 relative w-full max-w-4xl mx-auto bg-white/5 p-6 rounded-2xl shadow-xl border border-white/10">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="sem" stroke="#f4f4f5" />
            <YAxis stroke="#f4f4f5" domain={[8, 9.5]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="sgpa"
              stroke="#7fffd4"
              strokeWidth={3}
              dot={{ stroke: "#7fffd4", strokeWidth: 2, fill: "#0f172a" }}
              name="SGPA"
            />
            <Line
              type="monotone"
              dataKey="cgpa"
              stroke="#ff6ec7"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ stroke: "#ff6ec7", strokeWidth: 1.5, fill: "#0f172a" }}
              name="CGPA"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-glass p-4 rounded-xl border border-white/10 text-center shadow-glass hover:scale-105 transition"
          >
            <h3 className="text-lg font-bold text-auroraGreen mb-1">
              {item.sem}
            </h3>
            <p className="text-sm text-starlight">
              SGPA: <span className="font-semibold">{item.sgpa}</span>
            </p>
            <p className="text-sm text-starlight">
              CGPA: <span className="font-semibold">{item.cgpa}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
