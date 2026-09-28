"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setError("Invalid password");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-sm space-y-4 px-4 py-20">
      <h1 className="text-2xl font-semibold text-navy">SONIL admin</h1>
      <p className="text-sm text-muted-foreground">Lead inbox. Default local password is documented in the README.</p>
      <div>
        <Label htmlFor="pw">Password</Label>
        <Input id="pw" className="mt-1.5 h-10" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button className="bg-navy" type="submit">
        Enter
      </Button>
    </form>
  );
}
