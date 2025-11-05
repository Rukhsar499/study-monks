"use client";
import { useEffect, useState } from "react";
import { BookOpen, Calendar, ClipboardList, Award } from "lucide-react";

// Define types for API data
interface DashboardStats {
  myCourses: number;
  completedLessons: number;
  upcomingClasses: number;
  badges: number;
}

interface ClassItem {
  subject: string;
  datetime: string;
  status: string;
}

interface WorksheetItem {
  title: string;
  link: string;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [worksheets, setWorksheets] = useState<WorksheetItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        // Example API endpoints (replace with your real ones)
        const [statsRes, classRes, worksheetRes] = await Promise.all([
          fetch("/api/dashboard-stats"),
          fetch("/api/upcoming-classes"),
          fetch("/api/recent-worksheets"),
        ]);

        const statsData = await statsRes.json();
        const classData = await classRes.json();
        const worksheetData = await worksheetRes.json();

        setStats(statsData);
        setClasses(classData);
        setWorksheets(worksheetData);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#eaf1ff] to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#0a2874] mb-8">
          Welcome back, Rukhsar 👋
        </h1>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading your dashboard...</div>
        ) : (
          <>
            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatCard
                icon={<BookOpen className="text-blue-600 w-10 h-10" />}
                label="My Courses"
                value={stats?.myCourses ?? 0}
              />
              <StatCard
                icon={<ClipboardList className="text-green-600 w-10 h-10" />}
                label="Completed Lessons"
                value={stats?.completedLessons ?? 0}
              />
              <StatCard
                icon={<Calendar className="text-purple-600 w-10 h-10" />}
                label="Upcoming Classes"
                value={stats?.upcomingClasses ?? 0}
              />
              <StatCard
                icon={<Award className="text-yellow-500 w-10 h-10" />}
                label="Badges Earned"
                value={stats?.badges ?? 0}
              />
            </div>

            {/* Upcoming Classes Table */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-10 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#0a2874] mb-4">
                Upcoming Live Classes
              </h3>

              {classes.length > 0 ? (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-gray-600">
                      <th className="text-left py-2">Subject</th>
                      <th className="text-left py-2">Date & Time</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((item, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="py-3">{item.subject}</td>
                        <td>{item.datetime}</td>
                        <td>{item.status}</td>
                        <td>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-700 transition">
                            Join Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500 text-sm">No upcoming classes found.</p>
              )}
            </div>

            {/* Recent Worksheets */}
            <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#0a2874] mb-4">
                Recent Worksheets
              </h3>

              {worksheets.length > 0 ? (
                <ul className="space-y-3 text-sm">
                  {worksheets.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b pb-2 hover:bg-gray-50 px-2 py-1 rounded"
                    >
                      <span>{item.title}</span>
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        View / Download
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No worksheets available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ✅ Reusable StatCard component
function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition">
      {icon}
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2 className="text-2xl font-semibold text-[#0a2874]">{value}</h2>
      </div>
    </div>
  );
}
