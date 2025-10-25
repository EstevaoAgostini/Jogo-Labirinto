# Jogo-Labirinto
Trabalho da disciplina programação web sobre um jogo interativo (labirinto).
O projeto é um jogo de labirinto interativo desenvolvido com HTML, CSS e JavaScript puro. Ele combina um sistema simples de autenticação com telas de login, cadastro e recuperação de senha, além de oferecer um jogo dividido em várias fases de dificuldade crescente. O objetivo é proporcionar uma experiência completa ao usuário, unindo navegação entre páginas e interatividade dentro do jogo.

Na tela inicial, o jogador encontra o título e as principais opções: acessar o login, cadastrar-se, recuperar a senha, saber mais sobre o jogo ou iniciar diretamente a partida. Essa página exibe também uma mensagem de boas-vindas personalizada de acordo com o horário do dia e um relógio que é atualizado em tempo real.

A tela de login permite que o usuário entre no sistema informando o e-mail e a senha cadastrados. Já a tela de cadastro possibilita criar uma nova conta informando nome, e-mail e senha, exibindo uma mensagem de sucesso ao concluir o processo. A página de recuperação de senha solicita o e-mail do usuário e faz a verificação apenas no momento do envio, evitando mensagens automáticas enquanto se digita. Todas essas telas possuem botões de navegação para retornar à página inicial.

O jogo em si é composto por seis fases de labirintos diferentes, cada uma com o objetivo de guiar o personagem até a saída. O jogador pode controlar o movimento tanto pelo teclado, usando as setas ou as teclas W, A, S e D, quanto por botões na tela com setas direcionais. Quando o jogador atinge a saída, avança automaticamente para a próxima fase, e ao completar todas, é exibida uma tela final com uma mensagem de parabéns e opções para jogar novamente ou voltar ao menu inicial.

Toda a estrutura do jogo é gerada dinamicamente através do código JavaScript, que desenha o labirinto no navegador com base em matrizes pré-definidas. O sistema também faz uso do armazenamento local do navegador (localStorage) para manter as informações de login e cadastro. A estilização foi feita de modo a garantir um visual limpo e uma navegação intuitiva entre as telas.

O resultado é uma aplicação totalmente funcional e independente, que pode ser executada localmente sem necessidade de servidor. Ela demonstra conceitos fundamentais de front-end, manipulação do DOM, controle de eventos e lógica de programação aplicada à criação de um jogo interativo em navegador.
