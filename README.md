## Nome do Projeto

O nome do projeto é CalouroApoio, ele foi criado para ajudar os estudantes que iniciaram seus cursos na Faculdade/Universidade(Conhecidos como Calouros).

## Glossário

Calouro: estudante iniciante em uma instituição acadêmica.

## Objetivo do Projeto

# Para quem é feito

Principal: Os calouros, pois eles comumente não possui conhecimento total sobre a faculdade/univerisidade.

Secundário: Estudantes em geral que precisa de uma informação do CalouroApoio.

# Qual problema o projeto resolve

O projeto: CalouroApoio, busca como pricipal objetivo atender a necessidade dos Calouros, compreender diversos aspectos da vida universitária.

Para isso o projeto possúi as seguintes categorias:

1. Vida Acadêmica: Onde são abordadas diversas questôes para lidar com estilo de vida universitário.

    - Como usar os portais acadêmicos da universidade que o aluno está cursando: 
    Aqui aborda o que comumente possui em um sistema acadêmico, e o que fazer para obter as informações para seu uso.

    - Como se organizar nos estudos: Aqui aborda a importância da organização nos estudos e técnicas para aplica-lá.

    - Como se Adaptar a rotina universitária: Aqui estão algumas dicas que ajudarão o aluno a passar pelo processo de adaptação ao entrar na universidade.

2. Oportunidades e Benefícios Estudantis: Apresenta os estudantes as diversas alternativas para auxílio financeiro e oportunidades de se acostumar no mundo profissional.

    - Descrição sobre bolsas de estudo: Explica o que são as bolsas de estudos, suas vantagens, e seus tipos.

    - Descrição sobre estágios: Explica o conceito de estágio, o qual importante são para se acostumar com mercado de trablho, seus tipos, e link de plataformas de estágio.

    - Descrição sobre projetos e programas estudantis: Explica sobres os projetos e progrmas estudantis e como eles ajudam a se conectar com a instituição acadêmica, e dando exemplo quais são os tipos de projetos e programas existentes.

3. Apoio Psicológico: Mostra as explicações sobre saúde mental, bem-estar e onde buscar apoio psicológico.

    - A saúde mental no mundo acadêmico: Aborda sobre a saúde mental e como os estudantes podem a manter-la.

    - O bem-estar na vida universitária: Aborda sobre o bem-estar demonstrando as diversas práticas para aplicá-lo, como ele tão essencial para os estudos.

    - Apoio Psicológico: Aborda sobre onde conseguir apoio psicológico, seja na própria universidade ou outros serviços de auto-ajuda.


# Objetivo Pedagógico
Como objetivo pedagógico esse projeto se trata de um trabalho acadêmico da Univeridade Unicarioca, como parte do Projeto de Extensão Web Front-End.

## Funcionalidades

# Páginas existentes

# Lista de Funcionalidades

1. Menu(hamburger) responsivo: Foi através das media queries e alteração de estado Explicação abaixo:
    - Estado do Menu: 
        ```jsx
            const [menuActive, setMenuActive] = useState(false)
            //Arquivo Header.jsx
        ``` 
        
        
        Aqui é criada a variável de estado "menuActive";
        Ela recebe o valor inicial "false", pois menu está fechado/invisível(o estado de visiblidade foi feito por media querie);
        A função "setMenuActive" serve para alterar esse estado.
    
    - Função para alterar o menu:
        ```jsx
            const toggleMenu = () => {
                setMenuActive(!menuActive)
            }
            //Arquivo Header.jsx
        ```

        Sempre que o botão for clicado a função "toggleMenu()" é chamada;
        Essa função análisa:
            Se o menu está "false"(menu fechado), ela muda para "true"(menu aberto)
            Se o menu está "true"(menu aberto) ela muda para "false"(menu fechado)
        Isso só possível por causa do código "setMenuActive(!menuActive)".
    
    - Botão de abrir/fechar o menu: 
        ```jsx
            <button className="menu" onClick={toggleMenu}>
                <FaBars />
            </button> //Arquivo Header.jsx
        ```
        O botão tem icone através do react-icons;
        O evento "onClick={toggleMenu}" executa a função "toggleMenu()" que alterna o menu entre aberto e fechado.

    - Componente Navbar recebe o estado:
        ```jsx 
            <Navbar menuActive={menuActive} /> //Arquivo Header.jsx
        ```

        O componente "Navbar" recebe a informação se o menu está aberto(true) ou fechado(false).
    
    - Navbar aplica a condiicional:
        ```jsx 
            <ul className={`itens_navbar ${menuActive ? 'itens_navbar-active' : ''}`}> //Arquivo Navbar.jsx
        ```

        Se menuActive for true adciona a classe itens_navbar_active;
        Se for false, essa classe não aparece;
        O CSS usa essa classe para exibir ou esconder o menu.

Para saber as configurações CSS da media querie do Menu acesse: /src/pages/home/styles.css





# O que o usuário pode fazer no site


# Documentação

Este documento apresenta a documentação do projeto: CalouroApoio.


