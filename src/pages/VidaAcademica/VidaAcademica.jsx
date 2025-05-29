

import '../VidaAcademica/VidaAcademica.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExpandableCard from '../../components/ExpandCard/ExpandCard'

function VidaAcademica() {
    return (
        <div>
            <Header />
            <p className='text_mini'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus illo iure, impedit quod dicta repudiandae vel minima labore corrupti quae expedita? Blanditiis, dignissimos perspiciatis! Fuga adipisci quidem facilis atque dolor.</p>
            <section className="vida_section_card">

                <ExpandableCard 
                    title="Como Usar os Portais Acadêmicos"
                    summary="Adaptar aos sistemas acadêmicos de uma instituição, pode parecer complicado. Esse tópico pode lhe ajudar com isso."
                    details={
                    <div>
                    <p>
                        Atualmente, é comum que as universidades adotem a utilizar um portal acadêmico. Ele é indispensável, pois você pode consultar suas informações de estudante e de suas disciplinas.
                        <br />
                        Embora cada instituição tenha um sistema específico, geralmente é comum possuir:
                    </p>
                    <br />
                    <p>
                        Área do Aluno: Consulta de dados do aluno, disciplinas, horário de aula e notas;
                        <br />
                        <br />
                        Financeiro: No caso de universidades partículas é possível os boletos de pagamento e comprovantes;
                        <br />
                        <br />
                        Atendimento: Suporte para resolver problemas ou tirar dúvidas.
                    </p>
                    <br />
                    <p>
                        Por isso, caso tenha dúvidas para utliza-lo contate o suporte da sua universidade, seja através de e-mail, telefone, ou ir ao prédio da instituição ou a um polo (caso faça EAD).

                    </p>

                    </div>
                    }
                    emoji="💻"
                />

                <ExpandableCard 
                    title="Organização de Estudos"
                    summary="Você dificuldade quando se trata de organização, então descubra métodos para aplica-la em seus estudos e melhorar seu rendimento."
                    details={
                        <div>
                            <p>
                                A vida acadêmica exige alta autonomia e disciplina. A organização no dia a dia é extremamente importante, e nos estudos ela não fica de fora. Não perder prazos, dominar conteúdos em menos tempo, e entre outras, são algumas vantagens da organização.
                                <br />
                                Abaxio estão algumas dicas e melhores práticas para apicá-la:
                            </p>
                            <br />
                            <p>
                                Agenda ou planner: físico ou digital, te ajuda a anotar datas importantes como: trabalhos e provas.
                                <br />
                                <br />
                                Cronograma de estudos: distribua o tempo entre as matérias, priorizando as de maior dificuldade ou da área que queira se especializar.
                                <br />
                                <br />
                                Métodos de estudo: explore técnicas de estudo como: pesquisar conteúdo na internet(YouTube, Instagram, Likedin portais especializados), realizar resumos, mapas mentais, flashcards, entre outros.
                                <br />
                                <br />
                                Ambiente organizado: estude em um local tranquilo, iluminado e livre de distrações.
                                <br />
                                <br />
                                Equilíbrio: reserve tempo para descanso, lazer e autocuidado.
                            </p>
                            <p>
                                Utilize estes métodos da forma que melhor se encaixa para você, e aplique outros que encontrar além desses.
                            </p>
                        </div>
                    }
                    emoji="📚"
                />

                <ExpandableCard 
                    title="Adaptação a Rotina Universitária"
                    summary="A adaptação pode ser um maiores dasafios para um calouro, saiba como se adaptar ao ambiente univesitário."
                    details={
                        <div>
                            <p>
                                A transição do Ensino Médio para a faculdade/universidade traz desafios em relação a diferente carga horária, novas responsabilidades e a convivências com pessoas que assim como você estão em busca de um futuro profissional.
                                <br />
                                Então sim, claro que é possível deixa a etapa adaptativa mais leve, para isso considere o conteúdo abaixo:
                            </p>
                            <br />
                            <p>
                                Participe: envolva-se em projetos, grupos de estudo e atividades extracurriculares.
                                <br />
                                <br />
                                Fique atento: Aos horários das matérias, provas e trabalhos.
                                <br />
                                <br />
                                Busque apoio: converse com professores, coordenadores, veteranos, e outros colegas e utilize os serviços de apoio da instituição.
                            </p>
                            <br />
                            <p>
                                Cada pessoa tem seu tempo para se adaptar, porém isso é normal, continue a aplicar os tópicos acima para não ficar para trás.
                            </p>
                        </div>
                    }
                    emoji="🏫"
                />

            </section>
            <Footer />
        </div>
    )
}

export default VidaAcademica