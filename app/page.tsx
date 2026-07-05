import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1">
        <Header />

        <div className="p-8">
          <h1 className="text-4xl font-bold">Project Atlas</h1>

          <p className="mt-2 text-muted-foreground">
            AI-powered client onboarding for digital agencies
          </p>
        </div>
      </main>
    </div>
  );
}