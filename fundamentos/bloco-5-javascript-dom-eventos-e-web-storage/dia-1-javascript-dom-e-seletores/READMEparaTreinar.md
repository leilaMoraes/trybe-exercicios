# Exercícios sobre seletores de elementos

## Primeira parte

1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

3 - Por fim, recupere o subtítulo e altere-o também.

## Segunda parte

1 - Adicione uma classe igual para os dois parágrafos.

2 - Recupere os seus parágrafos via código JavaScript, usando a função **getElementsByClassName**;

3 - Altere algum estilo do primeiro deles.

4 - Recupere o subtítulo e altere a cor dele usando a função **getElementsByTagName**.

# Exercícios: Qual seletor usar?

Antes de iniciar, crie um arquivo HTML na pasta exercises/5_1 e copie o código abaixo:

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Administrador do Tempo</title>
  </head>
  <body id="container">
    <header id="header-container">
      <h1>Administrador do Tempo da Trybe</h1>
    </header>

    <section class="emergency-tasks">
      <div>
        <h3>Urgente e Importante</h3>
      </div>
      <div>
        <h3>Urgente e Não-Importante</h3>
      </div>
    </section>

    <section class="no-emergency-tasks">
      <div>
        <h3>Não-Urgente e Importante</h3>
      </div>
      <div>
        <h3>Não-Urgente e Não-Importante</h3>
      </div>
    </section>

    <footer id="footer-container">
      <div>&copy; Trybe</div>
    </footer>
    <script src="script.js"></script>
  </body>
</html>

Crie um arquivo JavaScript com o nome de "script.js" na pasta **exercises/5_1** e coloque seus conhecimentos de **getElementBy** e **querySelector** em prática.

Crie também um arquivo CSS e copie o código abaixo para adicionar estilo à página. Fique a vontade para soltar a criatividade e alterar o arquivo como desejar!

* {
  margin: 0;
}

#container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

#header-container {
  color: white;
  padding: 20px;
}

.emergency-tasks {
  display: inline-block;
  height: 400px;
  margin: 56px 0;
  width: 400px;
}

.emergency-tasks div {
  height: 198px;
}
.emergency-tasks h3 {
  color: white;
  margin-top: 10px;
  padding: 10px;
}

.no-emergency-tasks {
  display: inline-block;
  height: 400px;
  width: 400px;
}

.no-emergency-tasks div {
  height: 198px;
}

.no-emergency-tasks h3 {
  color: white;
  margin-top: 10px;
  padding: 10px;
}

#footer-container {
  color: white;
  font-weight: 700;
  padding: 15px;
  text-align: center;
}

Perceba que todo o conteúdo da página está na cor branca, utilize o que aprendeu no conteúdo de hoje para que a página fique igual ao Administrador do Tempo da Trybe.