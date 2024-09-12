# Controle de corrida API

# App de Gerenciamento Financeiro para Motoristas de Aplicativo (MVP)

Este projeto consiste em um aplicativo que oferece funcionalidades para o controle financeiro de motoristas de aplicativo. O objetivo é fornecer uma plataforma simples, intuitiva e eficiente para o registro de receitas e despesas, além de oferecer alertas, lembretes e visualizações detalhadas de estatísticas financeiras.

## Tecnologias Utilizadas
- Backend: NestJs
- Banco de Dados: MongoDB
- Autenticação: JWT
- Outras: 

## Funcionalidades

### 1. Cadastro e Autenticação de Usuário
- [ ] Tela de registro de novos usuários.
- [ ] Tela de login para usuários existentes.
- [ ] Implementação de autenticação segura com JWT.
- [ ] Sistema de logout e manutenção de sessão do usuário.

### 2. Tela de Registro de Receitas
- [ ] Formulário para adicionar novas receitas (com data, valor e descrição).
- [ ] Validação de entradas (valores numéricos, datas válidas).
- [ ] Armazenamento de receitas no banco de dados.
- [ ] Exibição de lista de receitas registradas pelo motorista.

### 3. Tela de Registro de Despesas
- [ ] Formulário para adicionar novas despesas (com data, valor, descrição e categoria).
- [ ] Validação de entradas (valores numéricos, categorias definidas).
- [ ] Armazenamento de despesas no banco de dados.
- [ ] Exibição de lista de despesas registradas pelo motorista.

### 4. Dashboard de Resumo Financeiro
- [ ] Cálculo do saldo mensal (receitas - despesas).
- [ ] Exibição de resumo mensal em tabela ou gráfico.
- [ ] Opção para filtrar o resumo financeiro por mês/ano.

### 5. Sistema de Alertas e Lembretes
- [ ] Interface para configurar novos lembretes (com data e frequência).
- [ ] Sistema de notificação para lembretes configurados.
- [ ] Armazenamento de lembretes no banco de dados.
- [ ] Exibição de lista de alertas configurados pelo motorista.

### 6. Visualização de Estatísticas Financeiras
- [ ] Exibição de gráficos de receitas e despesas ao longo do tempo (semanal, mensal, anual).
- [ ] Implementação de filtros de período (semana, mês, ano).
- [ ] Exibição de estatísticas por categoria de despesa.
