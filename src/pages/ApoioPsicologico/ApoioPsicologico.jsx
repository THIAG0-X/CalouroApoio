

import '../ApoioPsicologico/ApoioPsicologico.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExpandCard from '../../components/ExpandCard/ExpandCard'

function ApoioPsicologico() {
    return (
        <div>
            <Header />
            <p className='text_mini'>Em Apoio Psicológico, você saberá como cuidar da sua saúde mental principalmente nesse ambiente acadêmico, com orientações, serviços de apoio e dicas de bem-estar.</p>
            <section className="Apoio_section_card">

                <ExpandCard 
                    title="Saúde Mental no Mundo Acadêmico"
                    summary="Compreenda o porquê a saúde mental é tão importante no  ambiente universitário."
                    details={
                        <div>
                            <p>
                                Durante a vida acadêmica, é notável como todo o processo é deafiador, existem vários casos, que por exemplo podem gerar estresse, ansiedade e sobrecarga. 
                                <br />
                                <br />
                                É normal, se sentir precionado por prazos, provas e combraças da vida. O primeiro é reconhecer que se sentir sobre carregado em certos momentos, não é sinal de fraqueza, mas um alerta para olhar como sua mente está saudável, ou não.
                                <br />
                                As práticas que ajudam a mante a saúde mental são:
                            </p>
                            <br />
                            <p>
                                Estabelecer pausas e momentos de descanso;
                                <br />
                                <br />
                                Evitar comparar seu desempenho com o dos outros;
                                <br />
                                <br />
                                Manter uma rede de apoio (amigos, colegas, familiares);
                                <br />
                                <br />
                                Reconhecer seus limites e não se sobrecarregar;
                                <br />
                                <br />
                                Buscar ajuda quando perceber sinais de esgotamento, ansiedade ou tristeza frequente.
                            </p>
                            <br />
                            <p>
                                Adquir conhecimento profissional é muito importante, mas sem uma mente saudável, além de lhe fazer se sentir mal, pode também atrapalhar seus estudos, e sua vida como um todo.
                            </p>
                        </div>
                    }
                    emoji="🧠"
                />

                <ExpandCard 
                    title="Bem-estar na Vida Universitária"
                    summary="Descubra as práticas simples que ajudam a manter o equilíbrio e bem-estar no dia a dia acadêmico."
                    details= {
                        <div>
                            <p>
                                Muitos estudantes são tão focados nos estudos que esquecem algo muito, importante que é o bem-estar, até os mais organizados, podem deixá-la de lado por não a considerar.
                                <br />
                                <br />
                                São pequenas ações no dia a dia que fazem a diferença, em sua saúde mental, porque ter um bom bem-estar resulta em uma boa mente.
                                <br />
                                Essas são algumas praticas que você pode adotar:
                            </p>
                            <br />
                            <p>
                                Sono: mantenha uma rotina de sono, priorizando boas horas de descanso;
                                <br />
                                <br />
                                Alimentação: cuide da sua alimentação, evitando longos períodos sem comer e preferindo alimentos nutritivos;
                                <br />
                                <br />
                                Lazer: reserve um tempo para fazer coisas que te dão prazer, como hobbies, filmes, esportes ou encontros com amigos;
                                <br />
                                <br />
                                Atividade física: caminhadas, exercícios ou práticas que movimentem seu corpo ajudam na disposição e no humor;
                                <br />
                                <br />
                                Desconectar: evite ficar o tempo todo conectado. Reserve momentos longe de telas e redes sociais.
                            </p>
                            <br />
                            <p>
                                Por fim, não é porque as atividades acima, são sobre estudar que elas não te ajudar estudar. Justamente aos contrario dedicar um tempo para aumenta sua eficiência cognitiva, bem-estar não é luxo, é uma necessidade.
                            </p>
                        </div>
                    }
                    emoji="🪴"
                />

                <ExpandCard 
                    title="Apoio Psicológico"
                    summary="Caso precise de ajuda ou queira ter conhecimeto sobre como conseguir apoio psicológico, leia esse tópico."
                    details={
                        <div>
                            <p>
                                Existem diverso serviços que estão disponíveis para os estudantes, para ajudar com apoio psicológico, eles são acessíveis e gratuitos:
                            </p>
                            <br />
                            <p>
                                Apoio na própria instituição: muitas universidades oferecem atendimento psicológico, grupos de escuta ou acompanhamento psicológico temporário. Informe-se no setor de apoio ao estudante ou na coordenação.
                                <br />
                                <br />
                                CVV (Centro de Valorização da Vida): atendimento gratuito, sigiloso e 24h, pelo telefone 188 ou pelo site;
                                <br />
                                <br />
                                Apps de apoio emocional: alguns aplicativos oferecem meditações, escuta ativa e orientação, como Zen, Cíngulo, Headspace, entre outros;
                                <br />
                                <br />
                                Serviços públicos: CAPS (Centros de Atenção Psicossocial) e unidades de saúde oferecem apoio psicológico gratuito.
                            </p>
                            <br />
                            <p>
                                São somente alguns, caso tenha condições ainda é possível, buscar algum psicólogo de sua confiança, além de buscar apoio com familiares e amigos.
                            </p>
                            <br />
                            <p>
                                Links de onde buscar apoio psicológico:
                                <br />
                                <br />
                                <a href="https://cvv.org.br">CVV(Centro de Valorização a Vida)</a>
                                <br />
                                <a href="https://www.gov.br/saude/pt-br/composicao/saps">SUS - CAPS(Centro de Atenção Psicossocial)</a>
                            </p>
                        </div>
                    }
                    emoji="🏥"
                />

            </section>
            <Footer />
        </div>
    )
}

export default ApoioPsicologico