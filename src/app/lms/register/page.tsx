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
  const [authMethod, setAuthMethod] = useState<"password" | "otp">("password");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Password registration
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authMethod !== "password") return;

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
      if (err instanceof Error) setError(err.message);
      else setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  // OTP handlers
  const handleSendOtp = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await apiPost("/send-otp", { email: form.email });
      if (res.status) setOtpSent(true);
      else setError(res.message || "Failed to send OTP");
    } catch (err) {
      setError("Something went wrong while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await apiPost("/verify-otp", { email: form.email, otp });
      if (res.status) {
        alert("OTP verified! You are logged in.");
        router.push("/lms/dashboard");
      } else {
        setError(res.message || "OTP verification failed");
      }
    } catch (err) {
      setError("Something went wrong while verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        {/* Header Icon */}
        <div className="flex justify-center mb-1">
          <div className="bg-blue-900 p-3 rounded-full">
            <GraduationCap className="text-white w-8 h-8" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Create Your Account
        </h1>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Join the study Monks and start learning today.
        </p>

        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
        )}

        {/* Auth method toggle */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            type="button"
            onClick={() => {
              setAuthMethod("password");
              setOtpSent(false);
              setOtp("");
              setError("");
            }}
            className={
              authMethod === "password"
                ? "font-bold text-blue-900"
                : "text-gray-600"
            }
          >
            Password
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthMethod("otp");
              setOtpSent(false);
              setOtp("");
              setError("");
            }}
            className={
              authMethod === "otp" ? "font-bold text-blue-900" : "text-gray-600"
            }
          >
            OTP
          </button>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >
          {authMethod === "password" ? (
            <>
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
            </>
          ) : (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={form.email}
                onChange={handleChange}
                required
                disabled={otpSent}
              />
              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-all mt-4"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="w-full border-b border-[#0000008a] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={loading}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-all mt-4"
                  >
                    {loading ? "Verifying OTP..." : "Verify OTP"}
                  </button>
                </>
              )}
            </>
          )}
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
