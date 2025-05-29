
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IntroCard from '../../components/IntroCard/IntroCard'
import TextResumer from '../../components/TextResumer/TextResumer'
import MotivationalMsg from '../../components/MotivationalMsg/MotivationalMsg'
function Home() {
    return(
        <div>
            <Header />
            <MotivationalMsg />
            <IntroCard>
                <img src="src\assets\VidaAcademicaImg.jpg" alt="imagem" />
                <TextResumer>
                    <p className='title_resumer'>Vida Acadêmica</p>
                    <p>Em Vida Acadêmica, serão abordadas questões sobre os portais estudantis, organização de estudos e sobre a adaptação à rotina universitária. </p>
                </TextResumer>
            </IntroCard>
            <IntroCard>
                <TextResumer>
                    <p className='title_resumer'>Oportunidades e Benefícios</p>
                    <p>Em Oportunidades e Benefícios, encontre informações sobre bolsas de estudo, estágios, programas acadêmicos e muito mais.</p>
                </TextResumer>
                <img src="src\assets\OportunidadesBeneficiosImg.jpg" alt="imagem" />
            </IntroCard>
            <IntroCard>
                <img src="src\assets\ApoioPsiscologicoImg.jpg" alt="imagem" />
                <TextResumer>
                    <p className='title_resumer'>Apoio Psicológico</p>
                    <p>Em Apoio Psicológico, você saberá como cuidar da sua saúde mental principalmente nesse ambiente acadêmico, com orientações, serviços de apoio e dicas de bem-estar.</p>
                </TextResumer>
            </IntroCard>
            <Footer />
        </div>
    )
} 

export default Home