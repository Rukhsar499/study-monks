"use client";
import { useState } from "react";
import { apiProxy } from "../../lib/apiClient";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [authMethod, setAuthMethod] = useState<"password" | "otp">("password");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Password registration
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await apiProxy("/api/v1/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      console.log("Register response:", res);

      if (res.status) {
        alert("Registration successful! OTP sent to your email.");
        setOtpSent(true);
        setShowOtpModal(true);
      } else {
        setError(res.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);  // use it here
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // OTP handlers
  const handleSendOtp = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await apiProxy("v1/send-otp", { email: form.email });
      if (res.status) {
        setOtpSent(true);
        setShowOtpModal(true);
      } else {
        setError(res.message || "Failed to send OTP");
      }
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
      const res = await apiProxy("v1/verify-otp", { email: form.email, otp });
      if (res.status) {
        alert("OTP verified! You are logged in.");
        setShowOtpModal(false);
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
            className={authMethod === "password" ? "font-bold text-blue-900" : "text-gray-600"}
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
            className={authMethod === "otp" ? "font-bold text-blue-900" : "text-gray-600"}
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
              {!otpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-all mt-4"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              )}
            </>
          )}
        </form>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg w-80">
              <h2 className="text-lg font-bold mb-3">Enter OTP</h2>
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border-b border-gray-400 px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-900 rounded"
              />
              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                onClick={() => setShowOtpModal(false)}
                className="mt-2 w-full text-gray-700 underline text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

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
