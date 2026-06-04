// Lista de bairros e taxas. Edite aqui para alterar.
export type Neighborhood = { name: string; fee: number | null }; // null = consultar

export const NEIGHBORHOODS: Neighborhood[] = [
  { name: "Centro", fee: 5 },
  { name: "Jardim América", fee: 7 },
  { name: "Vila Nova", fee: 8 },
  { name: "São José", fee: 10 },
  { name: "Outros bairros", fee: null },
];
