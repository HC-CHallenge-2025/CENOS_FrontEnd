# 🚀 CENOS: Centro de Notificações e Otimização de Serviços

## 🔗 Repositório, Contato e Guia

| Detalhe | Valor |
| :--- | :--- |
| **Link do Repositório** | [HC-CHallenge-2025/CENOS\_FrontEnd](https://github.com/HC-CHallenge-2025/CENOS_FrontEnd) |
| **Clone (HTTPS)** | `https://github.com/HC-CHallenge-2025/CENOS_FrontEnd.git` |
| **Guia em Vídeo** | [Assista à Apresentação do Projeto](https://youtu.be/8PQQUvHPkWc) |

---

## 📄 Sobre o Projeto

A plataforma **CENOS** é uma solução digital inovadora desenvolvida para otimizar o fluxo de agendamentos e, crucialmente, **combater as altas taxas de absenteísmo** nos tratamentos de reabilitação. O objetivo é garantir a continuidade e a eficácia do cuidado ao paciente, maximizando o aproveitamento dos horários de atendimento no **IMREA** e no **HCFMUSP**.

Este sistema foi desenvolvido através de uma parceria estratégica entre os alunos da **FIAP**, o **IMREA** e o **HCFMUSP**.

---

## 🛠️ Tecnologia, Hooks e Estrutura

O CENOS é uma *Single Page Application (SPA)* que utiliza uma arquitetura modular baseada em **React** e **TypeScript**.

### Estrutura de Pastas Principal

A organização modular do projeto segue este padrão:

src/
├── components/
│   ├── Agendamentos/      (Cards e Formulários)
│   ├── Ajuda/              (Itens da FAQ)
│   ├── Dashboard/          (DashboardCard)
│   ├── Filtros/            (Componentes genéricos de filtros)
│   └── Layout/             (Header, Footer, Sidebar, AuxHeader)
├── data/                   (MOCK_PATIENTS.ts, MOCK_COLLABORATORS.ts, *Types.ts)
├── pages/                  (Componentes Container de Rotas)
│   ├── Agendamentos/

│   ├── AnaliseAvancada/

│   └── ...                 (Rotas auxiliares: EquipeCenos, Sobre, Contatos)
├── routes.ts               (Configuração central de todas as rotas)
└── App.tsx                 (Root Componente e Lógica de Layout Condicional)



Entendido\! Vou atualizar a seção de contato do `README.md` para incluir o link do vídeo guia, garantindo que a documentação esteja completa.

-----

```markdown
# 🚀 CENOS: Centro de Notificações e Otimização de Serviços

## 🔗 Repositório, Contato e Guia

| Detalhe | Valor |
| :--- | :--- |
| **Link do Repositório** | [HC-CHallenge-2025/CENOS\_FrontEnd](https://github.com/HC-CHallenge-2025/CENOS_FrontEnd) |
| **Clone (HTTPS)** | `https://github.com/HC-CHallenge-2025/CENOS_FrontEnd.git` |
| **Guia em Vídeo** | [Assista à Apresentação do Projeto](https://youtu.be/8PQQUvHPkWc) |

---

## 📄 Sobre o Projeto

A plataforma **CENOS** é uma solução digital inovadora desenvolvida para otimizar o fluxo de agendamentos e, crucialmente, **combater as altas taxas de absenteísmo** nos tratamentos de reabilitação. O objetivo é garantir a continuidade e a eficácia do cuidado ao paciente, maximizando o aproveitamento dos horários de atendimento no **IMREA** e no **HCFMUSP**.

Este sistema foi desenvolvido através de uma parceria estratégica entre os alunos da **FIAP**, o **IMREA** e o **HCFMUSP**.

---

## 🛠️ Tecnologia, Hooks e Estrutura

O CENOS é uma *Single Page Application (SPA)* que utiliza uma arquitetura modular baseada em **React** e **TypeScript**.

### Estrutura de Pastas Principal

A organização modular do projeto segue este padrão:

```

src/
├── components/
│   ├── Agendamentos/      (Cards e Formulários)
│   ├── Ajuda/              (Itens da FAQ)
│   ├── Dashboard/          (DashboardCard)
│   ├── Filtros/            (Componentes genéricos de filtros)
│   └── Layout/             (Header, Footer, Sidebar, AuxHeader)
├── data/                   (MOCK\_PATIENTS.ts, MOCK\_COLLABORATORS.ts, \*Types.ts)
├── pages/                  (Componentes Container de Rotas)
│   ├── Agendamentos/  
│   ├── AnaliseAvancada/  
│   └── ...                 (Rotas auxiliares: EquipeCenos, Sobre, Contatos)
├── routes.ts               (Configuração central de todas as rotas)
└── App.tsx                 (Root Componente e Lógica de Layout Condicional)

```

### Principais Hooks do React e Funções

| Hook/Função | Uso no Projeto | Propósito Principal |
| :--- | :--- | :--- |
| **`useState`** | Layout, Cadastro | Gerencia a abertura/fechamento da **Sidebar**, a alternância de visualização **Lista ↔ Cadastro** (`viewMode`) e o estado dos **Filtros**. |
| **`useMemo`** | Listagem/Filtros | Otimiza a performance, recalculando as listas filtradas **apenas** quando o estado de filtros é alterado. |
| **`useLocation`** | Roteamento/Layout | Lê a URL atual para determinar qual rota está ativa e aplicar o **Layout Condicional**. |
| **`useForm` (RHF)** | Formulários | Centraliza o estado, a validação (`regex`) e a submissão dos campos em cadastros complexos. |
| **`setValue` (RHF)** | Cadastros | Utilizado nas funções de **Busca e Vinculação** para atualizar campos *read-only* (ex: nome do tutor) após a pesquisa no *mock data*. |

---

## 💡 Principais Funcionalidades Implementadas

### 1. Sistema de Roteamento Condicional

* **Layouts Dinâmicos:** O **Header** e o **AuxHeader** são renderizados de forma **condicional** (`isPrimaryLayout`) apenas nas páginas principais, garantindo que as páginas auxiliares (`/ajuda`, `/sobre`) mantenham um layout limpo e independente, conforme a regra de negócio.

### 2. Módulos de Gestão de Dados

* **Cadastros Tipados:** Formulários robustos com regras específicas (vinculação de Tutor, campos de Conselho Profissional) e validação de formato.
* **Listagem Otimizada:** Painéis de listagem com filtros em tempo real, utilizando `useMemo` para eficiência.
* **Alternância de Visualização:** Lógica de `useState` para alternar entre o modo **Lista/Filtros** e **Formulário de Cadastro** na mesma rota (ex: `/pacientes`), melhorando a UX (Experiência do Usuário).

### 3. Ícones e Mapeamentos Visuais

O projeto utiliza *emojis* e caracteres simples como *placeholders* visuais para os links e botões da Sidebar e Dashboard:

| Seção | Ícone (Exemplo) | Contexto de Uso |
| :--- | :--- | :--- |
| **Navegação Principal** | 🏠, 🗓️, 🧑‍⚕️, 🩺 | Utilizados na Sidebar e no sistema de links. |
| **Informações** | ❓ | Ícone de Ajuda/Suporte. |
| **Dashboard (Métricas)** | 🗓️, ✅, ❌, 📊 | Representam agendamentos, confirmações, faltas e progresso. |
| **Redes Sociais** | 🐙, 🔗 | Placeholders para GitHub e LinkedIn. |

---

## 🧑‍💻 Equipe de Desenvolvimento

| Nome | RM | Turma |
| :--- | :--- | :--- |
| Gabriel Cedraz | RM565911 | 1TDSA |
| Henrique Nogueira | RM554684 | 1TDSR |
| Samara Oliveira | RM566133 | 1TDSR |
```