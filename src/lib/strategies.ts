export type Strategy = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  steps: string[];
};

export const strategies: Strategy[] = [
  { id: "prospeccao", title: "Prospecção", summary: "Encontre e aborde as pessoas certas no WhatsApp, direct e e-mail sem parecer invasivo.", tags: ["leads", "abordagem", "whatsapp", "direct"], steps: ["Defina o perfil de cliente ideal", "Mapeie onde ele está", "Abra a conversa com contexto, não com oferta"] },
  { id: "copywriting", title: "Copywriting", summary: "Escreva mensagens, anúncios e páginas que prendem atenção e geram desejo.", tags: ["texto", "anúncio", "headline", "persuasão"], steps: ["Comece pela dor ou desejo", "Mostre a transformação", "Feche com um próximo passo claro"] },
  { id: "conversao", title: "Conversão", summary: "Transforme interesse em compra com objeções bem tratadas e fechamento seguro.", tags: ["fechamento", "objeções", "checkout"], steps: ["Liste as 5 objeções mais comuns", "Prepare uma resposta para cada", "Crie urgência honesta"] },
  { id: "funil", title: "Funil de Vendas", summary: "Organize a jornada do primeiro contato até a recompra com etapas previsíveis.", tags: ["jornada", "automação", "etapas", "recompra"], steps: ["Atrair com conteúdo", "Nutrir com prova", "Converter e reter"] },
  { id: "oferta", title: "Oferta", summary: "Monte uma oferta irresistível com valor percebido maior que o preço.", tags: ["preço", "bônus", "garantia", "valor"], steps: ["Defina a promessa principal", "Empilhe bônus relevantes", "Reverta o risco com garantia"] },
  { id: "mentalidade", title: "Mentalidade", summary: "Desenvolva constância, resiliência e postura de quem vende com confiança.", tags: ["hábitos", "confiança", "rotina"], steps: ["Crie uma rotina diária de vendas", "Meça atividades, não só resultados", "Revise e ajuste toda semana"] },
];

const normalize = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function searchStrategies(query: string, list: Strategy[] = strategies): Strategy[] {
  const q = normalize(query);
  if (!q) return list;
  return list.filter((s) => normalize([s.title, s.summary, ...s.tags, ...s.steps].join(" ")).includes(q));
}
