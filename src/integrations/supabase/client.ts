import { createClient } from "@supabase/supabase-js";

import { getSupabaseConfigErrorMessage, getSupabasePublicConfig } from "@/lib/supabase-env";

export type PedidoItemPayload = {
  nome: string;
  quantidade: number;
  preco: number;
  observacao?: string;
};

export type NovoPedidoPayload = {
  cliente: string;
  telefone: string | null;
  endereco: string | null;
  itens: PedidoItemPayload[];
  total: number;
  status: "pendente";
  tipo_entrega: "entrega" | "retirada";
  taxa_entrega: number;
  forma_pagamento: "pix" | "cartao" | "dinheiro";
  pago: boolean;
};

type Database = {
  public: {
    Tables: {
      pedidos: {
        Row: NovoPedidoPayload & {
          id: number;
          created_at: string;
        };
        Insert: NovoPedidoPayload;
        Update: Partial<NovoPedidoPayload>;
      };
    };
  };
};

function createSupabaseClient() {
  const config = getSupabasePublicConfig();

  if (!config) {
    const message = getSupabaseConfigErrorMessage();
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }

  return createClient<Database>(config.url, config.publishableKey, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : undefined,
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}

let _supabase: ReturnType<typeof createSupabaseClient> | undefined;

export function isSupabaseConfigured(): boolean {
  return getSupabasePublicConfig() !== null;
}

export const supabase = new Proxy({} as ReturnType<typeof createSupabaseClient>, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  },
});
