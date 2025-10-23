"use client";
import { useState } from "react";
import { apiPost } from "../../lib/apiClient";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";

export default function RegisterPage() {
const router = useRouter();
const [form, setForm] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleRegister = async (e: React.FormEvent) => {
e.preventDefault();
setError("");
setLoading(true);


if (form.password !== form.confirmPassword) {
  setError("Passwords do not match!");
  setLoading(false);
  return;
}

try {
  const res = await apiPost("/register", {
    name: form.name,
    email: form.email,
    password: form.password,
  });

  if (res.status === true) {
    alert("Registration successful! Please login.");
    router.push("/lms/login");
  } else {
    setError(res.message || "Registration failed");
  }
} catch (err) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("An unexpected error occurred");
  }
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 px-4"> <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
{/* Header Icon */} <div className="flex justify-center mb-1"> <div className="bg-blue-900 p-3 rounded-full"> <GraduationCap className="text-white w-8 h-8" /> </div> </div>

    <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
      Create Your Account
    </h1>
    <p className="text-gray-500 text-center mb-6 text-sm">
      Join the study Monks and start learning today.
    </p>

    {error && (
      <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
    )}

    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-all mt-4"
      >
        {loading ? "Creating Account..." : "Register"}
      </button>
    </form>

    <p className="text-sm text-center mt-4 text-gray-600">
      Already have an account?{" "}
      <a
        href="/lms/login"
        className="text-blue-900 font-medium hover:underline"
      >
        Login here
      </a>
    </p>

    {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl -z-10"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-200 rounded-full opacity-30 blur-2xl -z-10"></div>
  </div>
</div>

);
}
