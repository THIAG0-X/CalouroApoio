
import './styles.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IntroCard from '../../components/IntroCard/IntroCard'
import TextResumer from '../../components/TextResumer/TextResumer'
function Home() {
    return(
        <div>
            <Header />
            <div className='Motivational_msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <IntroCard>
                <img src="#" alt="imagem" />
                <TextResumer>
                    <p className='title_resumer'>Vida Acadêmica</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae quas? Aspernatur corrupti, officia consequatur, ratione obcaecati modi autem quos impedit recusandae quidem placeat quibusdam esse. Veritatis earum soluta velit.</p>
                </TextResumer>
            </IntroCard>
            <IntroCard>
                <TextResumer>
                    <p className='title_resumer'>Oportunidades e Benefícios</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae quas? Aspernatur corrupti, officia consequatur, ratione obcaecati modi autem quos impedit recusandae quidem placeat quibusdam esse. Veritatis earum soluta velit.</p>
                </TextResumer>
                <img src="#" alt="imagem" />
            </IntroCard>
            <IntroCard>
                <img src="#" alt="imagem" />
                <TextResumer>
                    <p className='title_resumer'>Apoio Psicológico</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, beatae quas? Aspernatur corrupti, officia consequatur, ratione obcaecati modi autem quos impedit recusandae quidem placeat quibusdam esse. Veritatis earum soluta velit.</p>
                </TextResumer>
            </IntroCard>
            <Footer />
        </div>
    )
} 

export default Home