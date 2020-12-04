# Loja Pokemon - Consumindo PokeApi

Projeto simples construído em ReactJs de uma loja de vendas de pokemons para o desafio da B2wfocado em qualidade de código e construção de funcionalidades, possuindo uma UI simples e pequena, porém funcional.

# Páginas

<ul>
    <li>Home</li>
    <li>Detalhes do produto</li>
</ul>

# Funcionalidades

<ul>
<li>Deploy das 5 lojas automáticamente para <b>AWS S3</b> através de <b>CI/CD</b> com github actions</li>
<li>Catálogo de produtos</li>
<li>Paginação simples adaptavel para diversas telas para que a Home não perca desempenho</li>
<li>Estratégia de "cacheamento" de informações usando serviceWorker.</li>
<li>Carrinho lateral (Pop-over) com resumo</li>
<li>5 lojas com estilos e tipos diferentes de Pokémon (Fogo, àgua, elétrico, fantasma e planta) </li>
<li>Barra de busca instantânea para filtrar os Pokémon <br>
    O processo de busca é acionado 500 milisegundos após o usuário parar de digitar, utilizando a estratégia de <b>debounce</b> com a lib <b>Loadsh</b></li>
<li>Busca por Url passando o parametro search</ll>
<li>Botão de finalizar compra, reiniciando o processo de compra</li>
<li>Modal de obrigado ao finalizar compra</li>
<li>Dados do carrinhos salvos localmente para não perdê-los ao atualizar a página</li>
<li>Toas as lojas se encontram online distribuídas em Buckers do <b>AWS S3</b> nos links a seguir:

http://grasspokestore.s3-website-sa-east-1.amazonaws.com/

http://firepokestore.s3-website-sa-east-1.amazonaws.com/

http://ghostpokestore.s3-website-sa-east-1.amazonaws.com/

http://waterpokestore.s3-website-sa-east-1.amazonaws.com/

http://eletricpokestore.s3-website-sa-east-1.amazonaws.com/

</li>
<li>Uma página com mais detalhes do Pokémon, que possui informações sobre seus status iniciais e botão de comprar.</li>

# Outros detalhes técnicos

<ul>
<li>Foi utilizado Context APi para melhor distruição de valores entre os componentes</li>
<li>Foi utilizado ThemeProvider para alterar as cores da loja quando acessadas por diferentes urls</li>
<li>Padronização dos componentes usando Style-Components(até mesmo quando são components do MaterialUi)</li>
<li>Construída 100% em Typescript como forma de aprendizado</li>
</ul>
