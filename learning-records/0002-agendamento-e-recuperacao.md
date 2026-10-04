# Agendamento com fuso e sua diferenca de recuperacao

O aluno escreveu um Schedule com `cron: "30 14 * * *"` e `timezone: America/Sao_Paulo`, atendendo ao requisito de inicio diario as 14h30, e explicou que o novo disparo nao recupera uma tarefa de uma execucao anterior. Essa evidencia permite passar do desenho do agendamento para a verificacao de logs, outputs e disparos no ambiente existente.

## Evidence

O YAML enviado preserva inputs com default e um output declarado; o id do trigger ainda menciona 09h, mas quem determina o horario e o cron. O aluno associou recuperacao a retry: foi apresentada a nuance de que retry e automatico quando configurado e Restart permite retomada manual de tarefas falhas; nao ha evidencia ainda de assimilacao dessa nuance, do alcance de retry ou de errors sem retry.

Ao ser perguntado qual cliente apareceria em um disparo agendado sem preenchimento do input, respondeu cliente_demo e justificou pelo default. Demonstrou assim que consegue prever o valor de entrada nessa execucao; isso nao comprova que o Schedule ja disparou.

## Implications

Ha uma instalacao local do Kestra 2.0 em outro computador, segundo o aluno. Nao e necessario instalar outra instancia neste computador para continuar o estudo. O aluno relatou sucesso tanto na execucao manual quanto no disparo agendado; o proximo ponto de pratica e recuperacao controlada de falhas, sem efeitos externos.

## Evidencia pratica do contrato

O aluno relatou execucao manual bem-sucedida no Kestra 2.0 e informou o output `comprovante`: `Resumo de loja_demo / 2gedrwnX2UOkJUJBTqRpx9`. O resultado corresponde ao input cliente informado e ao identificador da execucao interpolados no YAML, oferecendo evidencia pratica do contrato de entrada e saida, alem do desenho do agendamento. Trata-se de resultado relatado pelo aluno, nao de uma execucao observada pelo agente; nao comprova o disparo automatico, a leitura dos logs nem a recuperacao de falhas.

## Evidencia pratica do agendamento

Posteriormente, o aluno informou que mudou o trigger para 22h25 para testar sem esperar pelo dia seguinte e que ele executou corretamente. Isso acrescenta evidencia relatada de um disparo automatico bem-sucedido, concluindo a pratica de agendamento da licao 03; o YAML alterado, o identificador e o output dessa execucao nao foram fornecidos. Nao houve observacao direta pelo agente nem demonstracao de recuperacao de falhas.