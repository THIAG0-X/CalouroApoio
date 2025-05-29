
import '../Footer/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer_title">Perguntas Frequentes(FAQ)</h2>
            <div className="container_questions">
                <div className="box_questions">
                    <p className="question">“Como posso acessar minhas notas e horários de aula?”</p>
                    <p className="answer">R: Você pode acessar suas notas, horários e informações acadêmicas diretamente no portal do aluno da sua universidade. Normalmente, é necessário fazer login com seu número de matrícula e senha cadastrada. Se tiver dificuldade, entre em contato com o suporte da instituição ou vá até a secretaria acadêmica.</p>
                </div>
                <div className="box_questions">
                     <p className="question">“Quais são os principais benefícios oferecidos pela universidade?”</p>
                     <p className="answer">R: As universidades costumam oferecer benefícios como bolsas de estudo, descontos, programas de monitoria, auxílio alimentação, auxílio transporte e acesso a eventos acadêmicos e culturais. Para saber quais estão disponíveis para você, consulte o setor de benefícios da sua instituição ou o site oficial.</p>
                </div>
                <div className="box_questions">
                     <p className="question">“A universidade oferece apoio psicológico para os alunos?”</p>
                     <p className="answer">R: Sim! Muitas universidades oferecem serviços gratuitos ou com baixo custo de apoio psicológico, como plantões de escuta, aconselhamento e sessões com psicólogos. Informe-se na coordenação de apoio ao estudante, no site da instituição ou diretamente no setor de psicologia, se houver.</p>
                </div>
            </div>
            <p>&copy; 2025 CalouroApoio @Todos os direitos reservados.</p>
        </footer>
    )
}


export default Footer