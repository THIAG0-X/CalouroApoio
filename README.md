# Nome do Projeto

O nome do projeto é CalouroApoio, ele foi criado para ajudar os estudantes que iniciaram seus cursos na Faculdade/Universidade(Conhecidos como Calouros).

## Glossário

Calouro: estudante iniciante em uma instituição acadêmica.

# Objetivo do Projeto

## Para quem é feito

Principal: Os calouros, pois eles comumente não possui conhecimento total sobre a faculdade/univerisidade.

Secundário: Estudantes em geral que precisa de uma informação do CalouroApoio.

## Qual problema o projeto resolve

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


## Objetivo Pedagógico
Como objetivo pedagógico esse projeto se trata de um trabalho acadêmico da Univeridade Unicarioca, como parte do Projeto de Extensão Web Front-End.

# Funcionalidades

## Páginas existentes

1. Página Home(principal): Onde aborda brevemente o conteúdo das outras páginas.

2. Página Vida Acadêmica: Possui cards expansíveis informativo, volte para o item "1." de "## Qual problema o projeto resolve", para ter noção completa do seu conteúdo.

3. Página Oportunidades e Benefícios: Possui cards expansíveis informativo, volte para o item "2." de "## Qual problema o projeto resolve", para ter noção completa do seu conteúdo.

4. Página Apoio Psicológico: Possui cards expansíveis informativo, volte para o item "3." de "## Qual problema o projeto resolve", para ter noção completa do seu conteúdo.

## O que o usuário pode fazer no site
1. O usuário poderá visualizar na página home um breve resumo do que ele encontará nas páginas seguintes.

2. Depois ao escolher na "Navbar"(barra de navegação) entre Vida Acadêmica, Oportunidades e Benefícios, e Apoio Psicológico. Ele ele encontará cards explicativos sobre cada tópico daquela página.

3. Ela conterá Um texto explicativo e algumas até mesmo links para outros sites, dependendo do assunto apordado.

4. Abaxio no "footer"(rodapé), que o mesmo para todas as páginas, um FAQ(perguntas frequentes) dos assuntos das dúvidas dos usuários.

5. Apesar de não possuir login e cadastro no site o usuário pode ir em "Fale Conosco", que irá direcionar no site da CalouroApoio para solucionar dúvidas que nem os cards e o FAQ foram capazes. 
    - Podendo ser uma delas um das perguntas FAQ, elas são anônimas no site, por não possuir login e cadastro e ser resolvido de forma externa ao site.

## Lista de Funcionalidades

1. Menu(hamburger) responsivo: Foi através das media queries e alteração de estado. Explicação abaixo:

    - Estado do Menu: 
        ```jsx
            const [menuActive, setMenuActive] = useState(false)
            //Arquivo Header.jsx
        ``` 
        
        
        -- Aqui é criada a variável de estado "menuActive";
        -- Ela recebe o valor inicial "false", pois menu está fechado/invisível(o estado de visiblidade foi feito por media querie);
        -- A função "setMenuActive" serve para alterar esse estado.
    
    - Função para alterar o menu:
        ```jsx
            const toggleMenu = () => {
                setMenuActive(!menuActive)
            }
            //Arquivo Header.jsx
        ```

        -- Sempre que o botão for clicado a função "toggleMenu()" é chamada;
        -- Essa função análisa:
            --- Se o menu está "false"(menu fechado), ela muda para "true"(menu aberto)
            --- Se o menu está "true"(menu aberto) ela muda para "false"(menu fechado)
        -- Isso só possível por causa do código "setMenuActive(!menuActive)".
    
    - Botão de abrir/fechar o menu: 
        ```jsx
            <button className="menu" onClick={toggleMenu}>
                <FaBars />
            </button> //Arquivo Header.jsx
        ```
        -- O botão tem icone através do react-icons;
        -- O evento "onClick={toggleMenu}" executa a função "toggleMenu()" que alterna o menu entre aberto e fechado.

    - Componente Navbar recebe o estado:
        ```jsx 
            <Navbar menuActive={menuActive} /> //Arquivo Header.jsx
        ```

        -- O componente "Navbar" recebe a informação se o menu está aberto(true) ou fechado(false).
    
    - Navbar aplica a condiicional:
        ```jsx 
            <ul className={`itens_navbar ${menuActive ? 'itens_navbar-active' : ''}`}> //Arquivo Navbar.jsx
        ```

        -- Se menuActive for true adciona a classe "itens_navbar_active";
        -- Se for "false", essa classe não aparece;
        -- O CSS usa essa classe para exibir ou esconder o menu.

Para saber as configurações CSS da media querie do Menu acesse: /src/pages/home/Home.css

2. Card expansível: Um card que se expande ao cliclar em um botão, feito com mudança de estado. Explicação abaixo:

    - Estado do card:
        ```jsx
            const [isExpanded, setIsExpanded] = useState(false) //Arquivo ExpandCard.jsx
        ```

        -- Aqui é criada a variável de estado chamada "isExpanded";
        -- Ela recebe o valor "false", ou seja, quando o card está fechado exibindo o título e o sumário do card;
        -- A função "setIsExpanded" serve para alterar esse estado.
    
    - Função que alterna o card:
        ```jsx
            const toggleExpand = () => {
                setIsExpanded(!isExpanded)
            } //Arquivo ExpandCard.jsx
         ```

        -- Sempre que o botão "+"(mais) ou "-"(menos) for clicado a função "toggleExpand()" é chamada;
        -- Essa função análisa:
            --- Se o card está "false"(fechado), ela muda para "true"(abre, mostrando os detalhes)
            --- Se o menu está "true"(aberto) ela volta para "false"(fecha, escondendo os detalhes)
        -- Isso só possível por causa do código "setIsExpanded(!isExpanded)".

    - Botão que controla o card:
        ```jsx
            {isExpanded ? (
                <FaMinus className="plus_icon" onClick={toggleExpand} />
            ) : (
                <FaPlus className="plus_icon" onClick={toggleExpand} />
            )} //Arquivo ExpandCard.jsx
        ```

        -- Se o card está aberto "(isExpanded === true)", mostra o ícone de "-"(menos) para poder recolher o card;
        -- Se o card está fechado, mostra o ícone de "+"(mais) para poder expandir o card.
        -- Com o evento "onClick={toggleExpand}" o clique no "+" ou "-", dispara a função "toggleExpand()", que alterna o estado do card.

    - Classe condicional que controla o conteúdo:
        ```jsx
            <div className={`box_text ${isExpanded ? 'show' : ''}`}>
                <div>{details}</div>
            </div> //Arquivo ExpandCard.jsx
        ```
        -- Se isExpanded for "true", adiciona a classe "show" -> O CSS faz o conteúdo de detalhes aparecer;
        -- Se for "false", a classe não aparece -> o CSS mantém o conteúdo oculto.

    - Também muda a classe no container externo:
        ```jsx
            <div className={`card_group ${isExpanded ? 'expanded' : ''}`}> //Arquivo ExpandCard.jsx
        ```
        - Se o card está expandido(true), adiciona a classe "expanded", para o CSS fazr alterações

    - Aqui estão os parâmetros usados no card expansível e um exemplo de aplicação de propriedade:
        ```jsx
            function ExpandableCard({ title, summary, details, emoji }) //Arquivo ExpandCard.jsx
        ```
        ```jsx
            <ExpandableCard 
                title="Título"
                summary="Resumo"
                details="Detalhes"
                emoji="💻"
            /> //Somente um exemplo, mas pode ser encontrado em VidaAcademica.jsx, OportunidadesBeneficios.jsx, e ApoioPsicologico.jsx. Uma melhor aplicação
        ```

        -- O "details" é onde é o texto da parte expansível.

3. Navegação entre páginas: é realizada utilizando a bliblioteca React Router DOM:

    - Importação principal:
        ```jsx
            import { createBrowserRouter, RouterProvider } from "react-router-dom" //Arquivo main.jsx
        ```

            -- O "createBrowserRouter" cria um conjunto de rotas;
            -- O "RouterProvider" faz o React entender e aplicar as rotas.

        - Definindo as rotas:
            ```jsx
                const router = createBrowserRouter([
                    {
                        path: "/", // Caminho base (raiz)
                        element: <App />, // Elemento principal que carrega o layout base
                        children: [ // Rotas filhas (as páginas internas)
                            {
                                path: "/",
                                element: <Home />, // Página inicial
                            },
                            {
                                path: "/VidaAcademica",
                                element: <VidaAcademica />,
                            },
                            {
                                path: "/OportunidadesBeneficios",
                                element: <OportunidadesBeneficios />,
                            },
                            {
                                path: "/ApoioPsicologico",
                                element: <ApoioPsicologico />,
                            },
                        ],
                    },
                ]) //Arquivo main.jsx
            ```

            -- A página "/" usa o componente "<App />" como estrutura principal(base);
            -- Dentro de "<App />", usa "<Outlet />" para trocar o conteúdo conforme a página clicada; 
            -- As rotas filhas são as páginas que mudam dentro do layout.

        - O papel do arquivo App.jsx:
            ```jsx
                import { Outlet } from "react-router-dom"

                function App() {
                    return(
                        <div className='App'>
                            <Outlet />
                        </div>
                    )
                } //Arquivo App.jsx

                export default App
            ```

            -- O componente "<App />" funciona como layout base;
            -- O "<Outlet />" é um espaço reservado.Quando o usuário navega, O React Router colaca aqui a página correspondente:
                --- Se está na "/", ele renderiza "<Home />";
                --- Se está em "/VidaAcademica", ele coloca "<VidaAcademica />" no lugar do "<Outlet />".
    - Links de navegação na Navbar:
        ````jsx
            <li><Link to="/" className="link">Início</Link></li>
            <li><Link to="/VidaAcademica" className="link">Vida Academica</Link></li>
            <li><Link to="/OportunidadesBeneficios" className="link">Oportunidades e Benefícios</Link></li>
            <li><Link to="/ApoioPsicologico" className="link">Apoio Psicológico</Link></li> 
            //Arquivo Navbar.jsx       
        ```

        -- Cada link é clicavel e altera a rota do site sem recarregar a página;
        -- Quando clica, o React Router atualiza o endereço e coloca "<Outlet />" a página correspondente.


4. Caixa de Mensagem: Ela vai trocando com o tempo várias mensagens motivacionais:

    - Lista de mesagens motivacionais:
    ```jsx
        const messages = [
            "Você é capaz de superar qualquer desafio!",
            "Acredite no seu potencial!",
            "Cada pequeno passo conta!",
            "Seu esforço de hoje é seu sucesso de amanhã!",
            "Confie no processo, você está aprendendo!",
        ]
    ```

        -- Aqui está o "arrray" de mensagens, que é uma lista de várias mensagens motivacionias;
        -- Cada vex que o índice "currentIndex" muda, aparece uma dessas mensagens.

    - Estdado para controlar qual mensagem mostrar:
        ```jsx
            const [currentIndex, setCurrentIndex] = useState(0) //Arquivo MotivationalMsg.jsx
        ```

        -- Aqui é criada a variável de estado "currentIndex";
        -- A princípio ela começa com o valor 0, ou seja, na primeira chamada do "array";
        -- A função "setCurrentIndex" serve para atualizar qual mensagem será exibida

    - Efeito que troca a mensagem a cada intervalo de tempo:
        ```jsx
            useEffect(() => {
                const interval = setInterval(() => {
                    setCurrentIndex((prevIndex) =>
                        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
                    )
                }, 30000)

                return () => clearInterval(interval)
            }, [messages.length])
        ```

        -- O "useEffect" excuta esse código quando o componente é carregado na tela;
        -- O "setInterval()" cria um temporizador que executa uma função a 30 segundos(30000ms)
        -- A função faz o seguinte: 
            --- Se o índice atual "prevIndex" for o último da lista, ele volta para 0(renincia);
            --- Caso contrário, ele soma mais um e vai para próxima mensagem.
        -- O "return () => clearInterval(interval)" faz uma limpeza. Isso impede que o temporizador continue rodando quando o usuário sair da página ou recarregar o componente.

    - Renderizando a mensagem na tela:
        ```jsx
            <div className="Motivational_msg">
                {messages[currentIndex]}
            </div>
        ```

        -- O React exibe uma "<div>" com a mensagem atual, de acordo com o índice armazenado em "currentIndex";
        -- A cada 30 segundos, esse valor muda, e o texto na tela se atualiza automaticamente.

5. CSS Responsivo: Abaixo estão as configutações das media queries.
    ```css
        @media screen and (max-width:880px) {
                .menu {
                    z-index: 1;
                }

                .Motivational_msg{
                    width: 450px;
                }


                .container_IntroCard{
                    flex-direction: column;
                    width: 600px;
                 }

                .itens_navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    clip-path: circle(100px at 90% -15%);
                    transition: 1s ease-out;

                    flex-direction: column;
                    gap: 0;
                    background-color: #6883E4;
                    pointer-events: none;
                }
                .itens_navbar li{
                    font-size: 16px;
                    margin-left: 50%;
                    margin-right: 10%;
                    padding-block: 20px;
                }
                .itens_navbar li:nth-child(1){
                    margin-top: 100px;
                }

                .itens_navbar-active {
                    clip-path: circle(1500px at 90% -15%);
                    pointer-events: all;
                }
                .Faleconosco .icone{
                    z-index: 1;
                }
            }

        @media screen and (min-width: 880px) and (max-width: 1440px) {
            .menu {
                display: none;
            }
        }
    ```
    -- As media queries foram escolhidas para um melhor uso do site em diferentes dispositivos, seja móveis ou desktop.

# Estrutura do Projeto

/src/components -> Componentes reutilizáveis
/src/pages -> Páginas do site
/src/styles -> Configurações globais do CSS
/src -> Além das páginas anteriores possui os arquivos: main.jsx e App.jsx.

# Tecnologias Utilizadas
- ReactJS → Biblioteca JavaScript utilizada para construir a interface do portal no formato SPA (Single Page Application), proporcionando navegação dinâmica sem recarregar a página.

- Vite → Ferramenta de desenvolvimento que oferece um ambiente rápido para projetos React, permitindo carregamento instantâneo e build (compilação) otimizada.

- React Router DOM → Biblioteca responsável pelo sistema de rotas. Permite criar navegação entre as páginas do portal de forma dinâmica, sem atualizar o site inteiro.

- CSS3 → Usado para a estilização da interface, tornando o portal responsivo e visualmente agradável.

- JavaScript (ES6+) → Linguagem base utilizada na construção dos componentes e funcionalidades.

- Font Awesome (React Icons) → Biblioteca de ícones utilizada no menu, botões e seções.

# Como Rodar

# Links Uteis

# Documentação

Este documento apresenta a documentação do projeto: CalouroApoio.


