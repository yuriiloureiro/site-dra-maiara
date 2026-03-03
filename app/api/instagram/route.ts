import { NextResponse } from "next/server";

export async function GET() {
  const BEHOLD_URL = process.env.BEHOLD_URL;

  if (!BEHOLD_URL) {
    console.error("ERRO: BEHOLD_URL não encontrada no .env.local");
    return NextResponse.json({ error: "URL não configurada" }, { status: 500 });
  }

  try {
    // Fazemos a chamada forçando o formato JSON
    const res = await fetch(BEHOLD_URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0", // Algumas APIs exigem isso para responder
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("ERRO BEHOLD:", res.status, res.statusText);
      return NextResponse.json(
        { error: "Erro na resposta do Behold" },
        { status: res.status },
      );
    }

    const data = await res.json();

    // Log para você ver no terminal se os dados chegaram
    console.log("DADOS DO INSTAGRAM CARREGADOS COM SUCESSO!");

    return NextResponse.json(data);
  } catch (err) {
    console.error("FALHA NA REQUISIÇÃO:", err);
    return NextResponse.json(
      { error: "Falha ao buscar dados" },
      { status: 500 },
    );
  }
}
