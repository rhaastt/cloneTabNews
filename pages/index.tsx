import React from "react";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-semibold">Conteúdo principal</h2>
      </main>
    </>
  );
}
