# Kestra Resources

## Knowledge

- [Kestra: Build a Hello World Flow](https://kestra.io/docs/tutorial/fundamentals)
  Tutorial primario para criar e executar o primeiro flow, entender o editor e reconhecer a anatomia basica de um workflow. Use na primeira licao.
- [Kestra: Add Inputs to Workflows](https://kestra.io/docs/tutorial/inputs)
  Explica inputs tipados, valores default e expressoes como `{{ inputs.customer }}`. Use para transformar exemplos rigidos em automacoes reutilizaveis.
- [Kestra: Workflow Outputs](https://kestra.io/docs/workflow-components/outputs)
  Mostra como compartilhar resultados entre tarefas e declarar outputs de um flow. Use para ensinar contratos de saida e limites de dados sensiveis.
- [Kestra: Workflow Errors](https://kestra.io/docs/workflow-components/errors)
  Fonte primaria sobre handlers globais e locais, `allowFailure`, `allowWarning` e diferenca entre `errors` e `afterExecution`.
- [Kestra: Task Retries](https://kestra.io/docs/workflow-components/retries)
  Referencia atual para retries constantes, exponenciais e aleatorios, `maxAttempts`, `maxDuration`, restart e replay.
- [Kestra core: Fail](https://kestra.io/plugins/core/execution/io.kestra.plugin.core.execution.fail)
  Tarefa que provoca uma falha intencional; aceita `errorMessage`, `condition` e retry de tarefa. Use no laboratorio da licao 04 para observar tentativas e errors sem integracao externa.
- [Kestra: Triggers](https://kestra.io/docs/tutorial/triggers)
  Introduz schedules, eventos, flow triggers e o timezone UTC padrao. Use quando o aluno passar de execucao manual para automacao operacional.
- [Kestra: Prometheus Metrics](https://kestra.io/docs/administrator-guide/prometheus-metrics)
  Referencia para a camada de observabilidade do Kestra. Use quando a trilha chegar a SLOs, alertas e operacao de clientes.

## Wisdom (Communities)

- [Kestra GitHub Discussions](https://github.com/kestra-io/kestra/discussions)
  Comunidade oficial para perguntas de uso, relatos de integracao e discussoes que complementam a documentacao. Use para validar decisoes de projeto depois de formular uma pergunta concreta.
- [Kestra GitHub Issues](https://github.com/kestra-io/kestra/issues)
  Canal oficial para confirmar bugs conhecidos e acompanhar mudancas de comportamento. Use para separar erro de configuracao de defeito do produto.

## Gaps

- Ainda falta pesquisar fontes confiaveis sobre empacotamento comercial, precificacao, suporte e limites operacionais de um servico baseado em Kestra.
- Ambiente declarado: Kestra 2.0 local em outro computador. O aluno relatou sucesso na execucao manual do resumo diario (com output informado) e no disparo agendado apos mudar o horario para 22h25; exemplos de recuperacao de falhas e de integracao ainda nao foram verificados nessa instancia.
