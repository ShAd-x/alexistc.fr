import { Package } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-10">
          {/* Compétences techniques */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              Compétences techniques
            </h3>
            <div className="space-y-3">
              <div>
                <div className="font-medium text-gray-800 mb-1">Langages</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "Java",
                    "Kotlin",
                    "Dart",
                    "PHP",
                    "Node.js",
                    "C#",
                    "Python",
                  ].map((lang) => (
                    <span
                      key={lang}
                      className="bg-indigo-100 text-indigo-700 rounded px-2 py-1 text-xs font-semibold"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800 mb-1">Frameworks</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Laravel",
                    "Vue.js",
                    "React.js",
                    "Angular",
                    "Flutter",
                    "Express.js",
                    "Symfony",
                  ].map((fw) => (
                    <span
                      key={fw}
                      className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-semibold"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800 mb-1">
                  Bases de données
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MariaDB", "SQLite", "MongoDB"].map(
                    (db) => (
                      <span
                        key={db}
                        className="bg-yellow-100 text-yellow-800 rounded px-2 py-1 text-xs font-semibold"
                      >
                        {db}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800 mb-1">Logiciels</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "VS Code",
                    "Jetbrains",
                    "Android Studio",
                    "Git",
                    "Figma",
                    "Postman",
                    "Laragon",
                    "StarUML",
                    "Canva",
                    "Office",
                    "Jira",
                    "Trello",
                    "Notion",
                  ].map((soft) => (
                    <span
                      key={soft}
                      className="bg-blue-100 text-blue-700 rounded px-2 py-1 text-xs font-semibold"
                    >
                      {soft}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800 mb-1">DevOps</div>
                <div className="flex flex-wrap gap-2">
                  {["Linux", "Docker", "CI/CD", "Zabbix"].map((devops) => (
                    <span
                      key={devops}
                      className="bg-purple-100 text-purple-700 rounded px-2 py-1 text-xs font-semibold"
                    >
                      {devops}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800 mb-1">
                  Gestion de projet
                </div>
                <div className="flex flex-wrap gap-2">
                  {["SCRUM", "Cahier des charges"].map((gp) => (
                    <span
                      key={gp}
                      className="bg-pink-100 text-pink-700 rounded px-2 py-1 text-xs font-semibold"
                    >
                      {gp}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800 mb-1">UX/UI</div>
                <span className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-semibold">
                  Wireframes
                </span>
              </div>
            </div>
          </div>
          {/* Soft skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              Soft skills
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span>👥</span> Esprit d’équipe et sens du collectif
              </li>
              <li className="flex items-center gap-2">
                <span>💡</span> Force de proposition
              </li>
              <li className="flex items-center gap-2">
                <span>🧐</span> Esprit d’analyse et rigueur
              </li>
            </ul>
          </div>
          {/* Langues */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              Langues
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span>🇫🇷</span> Français :{" "}
                <span className="font-semibold">Natif</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🇬🇧</span> Anglais :{" "}
                <span className="font-semibold">B2+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
