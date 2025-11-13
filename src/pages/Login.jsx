// src/components/auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Apple, Chrome, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend auth API
    console.log("Login form submitted", form);
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">Welcome Back 👋</h1>
          <p className="text-center text-gray-500">
            Sign in to continue to <span className="font-semibold">DLD Helper</span>
          </p>

          {/* Email + Password Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="flex items-center border rounded-xl px-3 py-2 mt-1">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                  required
                  className="w-full outline-none bg-transparent text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center border rounded-xl px-3 py-2 mt-1 relative">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full outline-none bg-transparent text-sm"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              Login
            </Button>
          </form>
          
          {/* Divider */}
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-1/4 bg-gray-300"></span>
            <span className="text-sm text-gray-500">or continue with</span>
            <span className="h-px w-1/4 bg-gray-300"></span>
          </div>

          {/* Social Logins */}
          <div className="flex space-x-4">
            <Button variant="outline" className="w-full flex items-center justify-center rounded-xl">
              <Chrome className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center rounded-xl">
              <Apple className="w-4 h-4 mr-2" />
              Apple
            </Button>
          </div>

          {/* Sign Up Redirect */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
