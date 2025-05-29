

import '../OportunidadesBeneficios/OportunidadesBeneficios.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ExpandableCard from '../../components/ExpandCard/ExpandCard'

function OportunidadesBeneficios() {
    return (
        <div>
            <Header />
            <p className='text_mini'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus illo iure, impedit quod dicta repudiandae vel minima labore corrupti quae expedita? Blanditiis, dignissimos perspiciatis! Fuga adipisci quidem facilis atque dolor.</p>
            <section className="Oportunidade_section_card">

                <ExpandableCard 
                    title="Bolsas de Estudo"
                    summary="Saiba dos tipos de bolsas e como elas podem lhe ajudar finaceiramente em sua trajetória acadêmica."
                    details={
                        <div>
                            <p>
                                As bolsas de estudo são formas de apoio finaceiros para os estundantes conseguirem se manter durante os estudos, ou para ter uma entrada acessível em faculdades particular. Geralmente elas são oferecidas pelas instituições de ensino, governo, ou empresas.
                                <br />
                                Elas podem ser:
                            </p>
                            <br />
                            <p>
                                Sociais: para estudantes em situação de vulnerabilidade socioeconômica.
                                <br />
                                <br />
                                Acadêmicas: destinadas a quem mantém bom desempenho nas disciplinas da faculdade.
                                <br /><br />
                                De atividades: como pesquisa, extensão, monitoria e auxílio institucional.
                            </p>
                            <br />
                            <p>
                                Esses auxílios podem cobrir as mensalidades, porém dependendo do tipo de benefício governamental ou da instiuição acadêmica, podem cobrir: transporte, alimentação e descontons. Para fique atento aos editais da instituição, onde estão os critérios, documentos necessários e prazos para inscrição.
                            </p>
                        </div>
                    }
                    emoji="💰"
                />

                <ExpandableCard 
                    title="Estágios"
                    summary="Está com dúvida de como dar seu primeiro passo no mercado de trabalho? Os estágios podem ser a resposta a fim de consquistar experiências práticas."
                    details={
                        <div>
                            <p>
                                Para um estudante que acabou de iniciar os estudos em uma universidade, pode parecer estranho pesnar em estágio ainda, porém é importante ter conhecimento sobre eles. Afinal, será nessa etapa que os estudantes podem aplicar os conhecimentos adquiridos, desenvolver ainda mais habilidades e compreender melhor como funciona sua área no mercado de trabalho.
                            </p>
                            <br />
                            <p>
                                Existem dois tipos: estágio obrigatório (exigido em alguns cursos) e não obrigatório (opcional, mas altamente recomendado).
                                <br />
                                <br />
                                A faculdade costuma ter setores que divulgam vagas e/ou auxiliam na busca em outras empresas.
                                <br />
                                <br />
                                Além disso, plataformas como CIEE, IEL, e sites de empregos oferecem diversas oportunidades.
                            </p>
                            <br />
                            <p>
                                O estágio é além de trabalho, é aprendizado e construção de carreira, então caso ainda seja um calouro, quando se sentir preparado busque um estágio.
                            </p>
                        </div>
                    }
                    emoji="💼"
                />

                <ExpandableCard 
                    title="Projetos e Programas Estudantis"
                    summary="Explore atividadades que enriquecem sua formação acadêmica e pessoal."
                    details={
                        <div>
                            <p>
                                Os projetos e programas estudantis são programas que vão desenvolver habilidades além da sala de aula, ou seja eles podem complementar as aulas e até mesmo os estágios. Eles possuem diferentes atividades para buscar a sua própria superação, além de ajudar a se conectar com sua própria instituição.
                                <br />
                                Aqui estão alguns exemplos dos quais você pode participar:
                            </p>
                            <br />
                            <p>
                                Projetos de Extensão: ações que levam conhecimento à comunidade, promovendo impacto social.
                                <br />
                                <br />
                                Iniciação Científica: oportunidade para desenvolver pesquisas acadêmicas com orientação de professores.
                                <br />
                                <br />
                                Empresas Juniores: organizações geridas por estudantes que simulam empresas reais.
                                <br />
                                <br />
                                Projetos Culturais, Esportivos ou Tecnológicos: atividades extracurriculares que complementam sua formação.
                            </p>
                            <br />
                            <p>
                                Participar desse projetos pode ser importantes para fortalecer seu currículo, seus contatos e experiência, aumentando suas chance para futuras vagas de estágio, ou emprego.
                            </p>
                        </div>
                    }
                    emoji="🛠️"
                />

            </section>
            <Footer />
        </div>
    )
}

export default OportunidadesBeneficios