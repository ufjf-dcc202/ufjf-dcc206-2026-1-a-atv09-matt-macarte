# DCC206 ativ9 Matheus AC
atividade pré-prova

# Atividade
Esta é uma lista de exercícios para praticar para a prova (não vale ponto).

Faça uma página diferente para cada questão que carrega e usa os componentes, mas use o mesmo repositório e histórico.

- [ ] **Cartão de Perfil de Usuário.**
    1. Para implementar este componente, você deve começar criando uma classe que estende HTMLElement e, no construtor, anexar um Shadow DOM no modo aberto.
    2. Dentro do escopo encapsulado, defina a estrutura HTML e o CSS básico para um cartão, utilizando a tag <slot> nomeada para permitir que o desenvolvedor insira o nome, a biografia e a foto do usuário diretamente no HTML externo.
    3. Por fim, registre o componente utilizando customElements.define com o nome <user-card>.
- [ ] **Bola de Cristal Mágica (bola 8).**
    1. Construa o componente <magic-ball> visualmente como um círculo escuro usando CSS dentro do Shadow DOM e adicione um elemento de texto em destaque no centro. 
    2. Em seguida, implemente um ouvinte de eventos de clique na estrutura raiz do componente que selecione aleatoriamente uma resposta de um array interno de strings, como "Sim", "Não", "As perspectivas não são boas" ou "Vai dar ruim!". 
    3. A cada clique sorteie uma resposta.
- [ ] **Badge de Notificação (contador de mensagens ou emails).**
    1. Comece definindo o método estático observedAttributes no seu componente <notification-badge> para monitorar um atributo chamado count. 
    2. Implemente o callback attributeChangedCallback de modo que, sempre que o número de notificações for alterado diretamente pelo HTML, o componente atualize seu valor interno e reflita o novo número no visual da bolinha do badge.
    3. Adicione também uma regra de negócio e no CSS do Shadow DOM para ocultar o componente completamente caso o valor de contagem seja zero ou inexistente.
- [ ] **Editor de Pixel Art.**
    1. Crie a estrutura inicial do componente <pixel-editor> lendo atributos como largura e altura diretamente da tag para determinar quantas células a grade terá.
    2. No momento em que o componente for conectado ao DOM pelo connectedCallback, gere dinamicamente uma grade de pequenas divs e use CSS Grid para alinhá-las perfeitamente no Shadow DOM.
    3. Adicione eventos de clique usando o padrão de delegação na grade principal para que, ao interagir com uma célula específica, a cor de fundo dela mude para uma cor previamente selecionada em uma propriedade de estado da classe.
- [ ] **Lançador de Dados de RPG.**
    1. O componente <rpg-dice> deve ler um atributo inicial sides que define o número de faces do dado, configurando-se como um d4, d6, d8, d10, d12 ou d20.
    2. A cada clique no componente do dado, gere um número aleatório, atualize o texto central do dado.

