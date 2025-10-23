"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "../../lib/apiClient";

interface LoginData {
  token: string;
  name: string;
}

interface ApiResponse<T> {
  status: boolean;
  message: string;
  data?: T;
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res: ApiResponse<LoginData> = await apiPost<LoginData, { email: string; password: string; role: string }>(
        "/login",
        { email, password, role }
      );

      if (res.status) {
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Login successful!");

        if (role === "admin") router.push("/lms/admin/dashboard");
        else router.push("/lms/dashboard");
      } else {
        setError(res.message || "Invalid credentials");
      }
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-indigo-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/assets/img/lms-bg.jpg')] bg-cover opacity-8" />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-900 text-white rounded-full w-28 h-28 flex items-center justify-center text-center text-sm font-bold shadow-md">
            Study Monks LMS
          </div>
          <h1 className="text-3xl font-extrabold text-blue-900 mt-3">Welcome Back!</h1>
          <p className="text-gray-600 text-sm text-center">
            Login to continue your learning journey 🚀
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
           <div>
            
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
           
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-800 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition transform hover:scale-[1.02]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <a
            href="/lms/register"
            className="text-blue-900 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
