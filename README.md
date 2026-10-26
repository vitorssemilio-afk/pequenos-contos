# Pequenos Contos

App de histórias infantis ilustradas e narradas, para crianças de 2 a 5 anos, com acompanhamento dos responsáveis.

## Principais recursos

- Catálogo com 40 histórias originais completas (10 por idade: 2, 3, 4 e 5 anos), com capa ilustrada, cenas ilustradas e narração.
- Ilustrações geradas por um sistema de componentes SVG (personagens, cenários e props), garantindo consistência visual dos personagens em toda a narrativa.
- Leitor cena a cena com modos "Ler em família" e "Ouvir história" (narração via Web Speech API do navegador, em português do Brasil).
- Progresso de leitura, favoritos e configurações salvos localmente no dispositivo (sem cadastro).
- Área dos responsáveis protegida por PIN: configurações, criação de histórias personalizadas por IA (opcional) e exclusão de dados.

## Stack

- Frontend: React + Vite + TypeScript + React Router
- Backend: Express (proxy para a API da Anthropic na criação de histórias personalizadas, mantendo a chave de API fora do navegador)
- Narração: Web Speech API do navegador
- Persistência: localStorage (sem backend de contas nesta versão)

## Configuração

```bash
npm install
cp .env.example .env
```

A criação de histórias personalizadas por IA é opcional. Para habilitá-la, preencha `.env`:

```
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-sonnet-5
PORT=3001
```

Sem essa chave, o catálogo de 40 histórias continua funcionando normalmente; a área dos responsáveis apenas informa que a criação por IA não está configurada.

## Desenvolvimento

```bash
npm run dev
```

Roda o backend (porta 3001) e o frontend (porta 5173, com proxy para `/api`) juntos. Acesse http://localhost:5173

## Validar o catálogo de histórias

```bash
npx tsx scripts/validate-stories.ts
```

Confere ids únicos, personagens/cenários/props válidos, categorias e duração estimada (10 a 15 minutos) de cada história.

## Build de produção

```bash
npm run build
npm start
```

O Express passa a servir o frontend buildado e a API na mesma porta (padrão 3001).
