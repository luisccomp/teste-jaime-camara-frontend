'use client'

import LoginForm from "./components/login/login-form";
import AuthProvider from "./contexts/auth-context";

export default function Home() {
  return (
    <AuthProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginForm />
      </main>
    </AuthProvider>
  );
}
