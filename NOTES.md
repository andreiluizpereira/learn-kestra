# Notes

- Idioma de ensino: portugues do Brasil.
- Formato preferido: licoes HTML curtas, visualmente limpas, com uma vitoria pratica e exercicio de recuperacao.
- Missao atual: criar automacoes empresariais robustas para vende-las como servico.
- Estado inicial: nenhuma experiencia previa em Kestra foi declarada.
- Primeira zona de desenvolvimento: anatomia de um flow, inputs, outputs e execucao manual.
- Nao criar learning record apenas por expor conteudo; registrar somente quando houver evidencia de entendimento, conhecimento previo declarado ou correcao de uma ideia equivocada.
- O glossario canonico deve amadurecer depois que os termos forem usados corretamente pelo aluno.
- Variar a posicao das respostas corretas entre perguntas; nao colocar sempre a correta na primeira opcao. Manter alternativas com o mesmo numero de palavras, sem pistas de formatacao.
- Licoes 01 e 02 declaradas concluidas pelo aluno. Inputs reutilizaveis e finalidade de retries transitorios foram explicados com suas palavras; alcance de retry e independencia de errors ainda precisam de confirmacao por exercicio.
- Schedule diario com timezone explicito demonstrado no exercicio das 14h30; o aluno distinguiu novo disparo agendado de recuperacao de falha.
- Ambiente declarado: Kestra 2.0 local em outro computador, nao neste workspace; nao presumir acesso remoto nem exigir nova instalacao neste computador.
- Execucao manual bem-sucedida relatada pelo aluno com cliente loja_demo; comprovante: `Resumo de loja_demo / 2gedrwnX2UOkJUJBTqRpx9`. Evidencia de input consumido e output declarado retornado; nao houve verificacao direta pelo agente.
- O aluno identificou corretamente cliente_demo como valor usado na execucao agendada sem input fornecido, justificando pelo default.
- O aluno mudou o agendamento para 22h25 e relatou disparo automatico correto no Kestra 2.0; pratica de agendamento da licao 03 concluida pelo relato. YAML alterado e output dessa execucao nao foram informados nem observados pelo agente.
- Proximo degrau: pratica controlada de recuperacao de falhas. Alcance de retry e independencia de errors ainda precisam de evidencia especifica antes de integracoes com efeitos externos.
- Licao 04 preparada: laboratorio separado com Fail, retry de tarefa limitado e handler global de log; comparar execucoes manuais com e sem retry. Aguardar estados, tentativas e explicacao do aluno antes de registrar dominio desses mecanismos. YAML ainda nao executado na instancia do aluno.
