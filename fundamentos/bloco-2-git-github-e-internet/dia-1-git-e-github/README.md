# Parte 4 - O seu repositório no GitHub

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o GitHub, é hora de colocar a casa em ordem!

Durante seu curso na Trybe, seus projetos serão entregues através de pushes nos repositórios do GitHub. Para podermos simular um exercício feito, você criará um arquivo.txt com um nome de sua escolha (Exemplo: trybe-skills.txt) e utilizará o conteúdo abaixo.

O que eu vou aprender na Trybe:

- Unix
- Bash
- Git

## Agora vamos transformar essa pasta em um repositório Git:

Retorne para a raiz da pasta de exercícios;

Inicialize o repositório com git init;

Crie um arquivo de README utilizando o comando touch README.md;

Crie um commit inicial utilizando:

git add .
git commit -m "Initial commit"

Vá até o seu GitHub e crie um repositório público, onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;

Dê ao repositório um nome descritivo, como por exemplo trybe-exercicios;

⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md, pois você já criou um nos passos anteriores! 😉

Clique no botão SSH e então copie a URL do repositório;

Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO";

Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso:

origin	git@github.com:john-snow/know-nothing.git (fetch)
origin	git@github.com:john-snow/know-nothing.git (push)

Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;

Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub! 🤩

Execute o comando git push origin master no terminal;

Vá até o seu GitHub e verifique as novas alterações.