import { Package, Code, Layers, Database } from "lucide-react";

import Card from "../ui/Card";

export default function Skills() {
  return (
    <section
      id="competences"
      className="border-b border-gray-200/60 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
              <Package size={18} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Compétences</h2>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <Code
              className="text-indigo-500 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              size={32}
            />
            <div className="font-medium text-gray-800 mb-2 text-lg">
              Langages
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {["PHP", "JavaScript", "Java", "TypeScript", "Dart"].map(
                (lang) => (
                  <span
                    key={lang}
                    className="bg-indigo-100 text-indigo-700 rounded px-3 py-1 text-sm font-semibold"
                  >
                    {lang}
                  </span>
                )
              )}
            </div>
          </Card>
          <Card className="p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <Layers
              className="text-green-500 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              size={32}
            />
            <div className="font-medium text-gray-800 mb-2 text-lg">
              Frameworks
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Laravel", "Vue.js", "React.js", "Flutter", "Express.js"].map(
                (fw) => (
                  <span
                    key={fw}
                    className="bg-green-100 text-green-700 rounded px-3 py-1 text-sm font-semibold"
                  >
                    {fw}
                  </span>
                )
              )}
            </div>
          </Card>
          <Card className="p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <Database
              className="text-yellow-500 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              size={32}
            />
            <div className="font-medium text-gray-800 mb-2 text-lg">
              Bases de données
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {["MySQL", "PostgreSQL", "MariaDB", "SQLite", "MongoDB"].map(
                (db) => (
                  <span
                    key={db}
                    className="bg-yellow-100 text-yellow-800 rounded px-3 py-1 text-sm font-semibold"
                  >
                    {db}
                  </span>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
