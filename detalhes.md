**Histórias de Usuário (User Stories)**

1. **História 1: Como motorista, quero registrar minhas receitas diárias para acompanhar meu faturamento.**
   1. Critérios de aceitação:
      1. O motorista pode registrar o valor das corridas por dia.
      1. O motorista pode adicionar a data e uma descrição da receita.
1. **História 2: Como motorista, quero registrar minhas despesas diárias para entender meus gastos operacionais.**
   1. Critérios de aceitação:
      1. O motorista pode adicionar uma nova despesa com a data, descrição e valor.
      1. O motorista pode categorizar as despesas (ex.: combustível, manutenção, alimentação).
1. **História 3: Como motorista, quero visualizar um resumo mensal das minhas receitas e despesas para saber meu saldo.**
   1. Critérios de aceitação:
      1. O motorista pode ver um gráfico ou tabela com o resumo do mês.
      1. O saldo é calculado automaticamente (receitas - despesas).
1. **História 4: Como motorista, quero receber lembretes de despesas fixas para não esquecer de pagar minhas contas.**
   1. Critérios de aceitação:
      1. O motorista pode configurar lembretes para despesas recorrentes.
      1. Os lembretes aparecem com notificações ou alertas na tela.
1. **História 5: Como motorista, quero acessar um dashboard com estatísticas detalhadas das minhas finanças para visualizar meu desempenho ao longo do tempo.**
   1. Critérios de aceitação:
      1. O motorista pode ver estatísticas por semana, mês ou ano.
      1. As estatísticas incluem gráficos de receitas, despesas, e categorias mais gastas.





**Entidades e Relacionamentos Detalhados**

**1. Motorista (Usuário)**

- **Descrição**: O motorista é o usuário principal do aplicativo. Ele registra suas receitas e despesas e utiliza as funcionalidades de gerenciamento financeiro.
- **Atributos**:
  - **ID** (chave primária): Identificador único do motorista.
  - **Nome**: Nome completo do motorista.
  - **E-mail**: Endereço de e-mail do motorista (usado para login).
  - **Senha**: Senha de acesso, armazenada de forma segura (hash).
  - **Data de registro**: Data em que o motorista se registrou no aplicativo.
- **Relacionamentos**:
  - **Receitas**: Um motorista pode ter muitas receitas (relação 1).
  - **Despesas**: Um motorista pode ter muitas despesas (relação 1).
  - **Alertas**: Um motorista pode configurar muitos alertas (relação 1).
  - **Resumo Financeiro**: O resumo financeiro é gerado automaticamente com base nas receitas e despesas de cada motorista.

**2. Receita**

- **Descrição**: As receitas representam os ganhos financeiros do motorista, como os valores recebidos pelas corridas.
- **Atributos**:
  - **ID** (chave primária): Identificador único da receita.
  - **Valor**: O valor da receita.
  - **Data**: Data em que a receita foi registrada.
  - **Descrição**: Uma breve descrição (ex.: “Corridas de segunda-feira”).
  - **ID do Motorista** (chave estrangeira): Identifica o motorista que registrou essa receita.
- **Relacionamentos**:
  - **Motorista**: Cada receita pertence a um único motorista (relação N:1).

**3. Despesa**

- **Descrição**: As despesas representam os gastos do motorista, como combustível, manutenção do veículo, alimentação, entre outros.
- **Atributos**:
  - **ID** (chave primária): Identificador único da despesa.
  - **Valor**: O valor da despesa.
  - **Data**: Data em que a despesa foi registrada.
  - **Descrição**: Uma breve descrição da despesa (ex.: “Combustível”).
  - **Categoria**: A categoria da despesa (ex.: “Combustível”, “Manutenção”, “Alimentação”).
  - **ID do Motorista** (chave estrangeira): Identifica o motorista que registrou essa despesa.
- **Relacionamentos**:
  - **Motorista**: Cada despesa pertence a um único motorista (relação N:1).

**4. Alerta**

- **Descrição**: Os alertas representam lembretes para despesas recorrentes ou eventos futuros importantes relacionados às finanças do motorista.
- **Atributos**:
  - **ID** (chave primária): Identificador único do alerta.
  - **Mensagem**: Mensagem de lembrete (ex.: “Pagar aluguel do carro”).
  - **Data do Lembrete**: Data em que o alerta deve ser ativado.
  - **Frequência**: Periodicidade do alerta (ex.: semanal, mensal).
  - **ID do Motorista** (chave estrangeira): Identifica o motorista que configurou o alerta.
- **Relacionamentos**:
  - **Motorista**: Cada alerta pertence a um único motorista (relação N:1).

**5. Resumo Financeiro**

- **Descrição**: O resumo financeiro é um cálculo automático gerado com base nas receitas e despesas do motorista durante um determinado período (semana, mês, ano).
- **Atributos**:
  - **ID** (chave primária): Identificador único do resumo.
  - **Período**: O período de tempo que o resumo cobre (ex.: mês de agosto de 2024).
  - **Total de Receitas**: Soma de todas as receitas no período selecionado.
  - **Total de Despesas**: Soma de todas as despesas no período selecionado.
  - **Saldo**: O valor total restante (Total de Receitas - Total de Despesas).
  - **ID do Motorista** (chave estrangeira): Identifica o motorista ao qual o resumo pertence.
- **Relacionamentos**:
  - **Motorista**: O resumo é gerado para um único motorista (relação N:1).
  - **Receitas e Despesas**: O resumo é calculado com base nas receitas e despesas do motorista.

**Diagrama de Relacionamentos (ERD) - Explicação**

1. **Motorista**:
   1. Um motorista pode ter várias receitas (relação 1).
   1. Um motorista pode ter várias despesas (relação 1).
   1. Um motorista pode configurar vários alertas (relação 1).
   1. Um motorista tem um resumo financeiro gerado com base nas receitas e despesas.
1. **Receita**:
   1. Cada receita pertence a um único motorista (relação N:1).
1. **Despesa**:
   1. Cada despesa pertence a um único motorista (relação N:1).
1. **Alerta**:
   1. Cada alerta pertence a um único motorista (relação N:1).
1. **Resumo Financeiro**:
   1. Um resumo financeiro é gerado para um único motorista, com base nas receitas e despesas associadas a ele.

**Exemplo de Cenários e Relacionamentos**

1. **Cadastro de Receitas**: O motorista João adiciona uma receita de R$200,00 referente às corridas do dia. Essa receita é armazenada no banco de dados e associada ao ID de João. No final do mês, o total de receitas de João é calculado automaticamente no resumo financeiro.
1. **Registro de Despesas**: O motorista Maria adiciona uma despesa de R$50,00 para combustível. A despesa é registrada com a categoria “Combustível” e associada ao ID de Maria. Quando Maria visualiza o resumo financeiro, essa despesa é subtraída do total de receitas para calcular o saldo.
1. **Criação de Alerta**: O motorista Pedro configura um alerta para lembrar de pagar o aluguel do carro no valor de R$300,00 todo dia 5 de cada mês. Esse alerta é armazenado e, no dia 5 do próximo mês, Pedro recebe uma notificação.
1. **Geração do Resumo Financeiro**: No final de cada mês, o sistema gera automaticamente um resumo financeiro para cada motorista, somando todas as receitas e despesas do período e exibindo o saldo final.

**Backlog Detalhado para o MVP**

**1. Cadastro e Autenticação de Usuário**

- **Tarefa 1.1**: Criar tela de registro de novos usuários
  - Detalhes: Criar formulário com campos de nome, e-mail, e senha. Adicionar validação de e-mail e senha.
  - Critérios de aceitação: O usuário pode criar uma conta preenchendo os campos corretamente. Se houver erro (ex.: e-mail inválido), uma mensagem de erro clara é exibida.
- **Tarefa 1.2**: Criar tela de login de usuários existentes
  - Detalhes: Criar formulário de login com e-mail e senha. Implementar a validação das credenciais.
  - Critérios de aceitação: O usuário pode fazer login com e-mail e senha corretos. Em caso de erro, exibir mensagem clara (ex.: "E-mail ou senha incorretos").
- **Tarefa 1.3**: Implementar autenticação segura
  - Detalhes: Usar uma biblioteca segura para autenticação (ex.: JWT). Armazenar tokens de autenticação de forma segura.
  - Critérios de aceitação: O sistema deve garantir que o usuário está autenticado antes de acessar áreas protegidas do aplicativo.

**2. Tela de Registro de Receitas**

- **Tarefa 2.1**: Criar interface para adicionar novas receitas
  - Detalhes: Formulário com campos para data, valor, e descrição. Validar entradas (ex.: valor numérico).
  - Critérios de aceitação: O usuário pode inserir uma nova receita com data, valor e descrição. Exibir mensagens de erro caso algum campo esteja incorreto.
- **Tarefa 2.2**: Armazenar dados das receitas no banco de dados
  - Detalhes: Integrar o formulário com o backend para salvar as receitas no banco de dados do usuário.
  - Critérios de aceitação: As receitas são salvas corretamente no banco de dados, associadas ao usuário correto.
- **Tarefa 2.3**: Exibir lista de receitas adicionadas
  - Detalhes: Exibir em uma tabela ou lista todas as receitas registradas pelo motorista.
  - Critérios de aceitação: O usuário pode visualizar suas receitas registradas, ordenadas por data ou valor.

**3. Tela de Registro de Despesas**

- **Tarefa 3.1**: Criar interface para adicionar novas despesas
  - Detalhes: Formulário com campos para data, valor, descrição e categoria (combustível, manutenção, etc.). Validar as entradas.
  - Critérios de aceitação: O usuário pode inserir uma nova despesa com data, valor, descrição e categoria. Exibir mensagens de erro caso algum campo esteja incorreto.
- **Tarefa 3.2**: Armazenar dados das despesas no banco de dados
  - Detalhes: Integrar o formulário com o backend para salvar as despesas no banco de dados do usuário.
  - Critérios de aceitação: As despesas são salvas corretamente no banco de dados, associadas ao usuário correto.
- **Tarefa 3.3**: Exibir lista de despesas adicionadas
  - Detalhes: Exibir em uma tabela ou lista todas as despesas registradas pelo motorista.
  - Critérios de aceitação: O usuário pode visualizar suas despesas registradas, ordenadas por data, valor ou categoria.

**4. Dashboard de Resumo Financeiro**

- **Tarefa 4.1**: Implementar cálculo de saldo mensal (receitas - despesas)
  - Detalhes: Criar uma função para calcular o saldo com base nas receitas e despesas registradas no mês.
  - Critérios de aceitação: O saldo do mês é calculado e exibido corretamente, levando em conta todas as receitas e despesas do período.
- **Tarefa 4.2**: Exibir resumo mensal em gráfico ou tabela
  - Detalhes: Exibir o resumo mensal com receitas, despesas e saldo. O usuário pode visualizar o total de receitas e despesas.
  - Critérios de aceitação: O resumo mensal é exibido em uma tabela ou gráfico, com informações claras sobre receitas, despesas e saldo.
- **Tarefa 4.3**: Adicionar opção de filtragem por mês/ano
  - Detalhes: Permitir que o usuário filtre o resumo por mês ou ano.
  - Critérios de aceitação: O usuário pode selecionar diferentes meses ou anos e ver o resumo financeiro correspondente.

**5. Sistema de Alertas e Lembretes**

- **Tarefa 5.1**: Criar interface para configurar novos lembretes
  - Detalhes: Criar um formulário onde o motorista pode configurar lembretes para despesas recorrentes (ex.: aluguel do carro).
  - Critérios de aceitação: O usuário pode adicionar lembretes com uma mensagem, data e frequência. Exibir mensagens de erro caso algum campo esteja incorreto.
- **Tarefa 5.2**: Implementar sistema de notificação de lembretes
  - Detalhes: Implementar notificações que aparecem quando um lembrete está próximo da data configurada.
  - Critérios de aceitação: O sistema notifica o usuário quando a data de um lembrete está próxima.
- **Tarefa 5.3**: Armazenar lembretes no banco de dados
  - Detalhes: Integrar o formulário de lembretes com o backend para salvar e gerenciar os lembretes no banco de dados.
  - Critérios de aceitação: Os lembretes são salvos corretamente no banco de dados e associados ao usuário correto.

**6. Visualização de Estatísticas Financeiras**

- **Tarefa 6.1**: Criar gráficos para visualização de receitas e despesas ao longo do tempo
  - Detalhes: Implementar gráficos de linhas ou barras para exibir a evolução das receitas e despesas por semana, mês ou ano.
  - Critérios de aceitação: O usuário pode ver gráficos claros e informativos que mostram o desempenho financeiro ao longo do tempo.
- **Tarefa 6.2**: Implementar filtros de período (semana, mês, ano)
  - Detalhes: Permitir que o usuário filtre as estatísticas financeiras por diferentes períodos de tempo (ex.: visualizar apenas dados de uma semana ou mês específico).
  - Critérios de aceitação: O usuário pode selecionar diferentes períodos e visualizar as estatísticas correspondentes de forma clara e rápida.

**7. Testes de Usabilidade e Ajustes Finais**

- **Tarefa 7.1**: Realizar testes de usabilidade com motoristas
  - Detalhes: Conduzir testes com motoristas de aplicativo para identificar pontos de melhoria na interface e usabilidade.
  - Critérios de aceitação: Feedback dos motoristas coletado e analisado, com planos de melhoria definidos.
- **Tarefa 7.2**: Implementar ajustes com base nos feedbacks dos testes
  - Detalhes: Implementar ajustes de interface e funcionalidades com base nos feedbacks coletados.
  - Critérios de aceitação: Melhorias implementadas, focando em facilitar a experiência do usuário.

