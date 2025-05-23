

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
                    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quis dicta temporibus soluta sequi est ex labore aliquid inventore quos!"
                    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore praesentium dignissimos aperiam vitae facilis deserunt aliquid, quo voluptates odit ipsum rerum eligendi quam placeat exercitationem. Itaque, soluta obcaecati. Deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore praesentium dignissimos aperiam vitae facilis deserunt aliquid, quo voluptates odit ipsum rerum eligendi quam placeat exercitationem. Itaque, soluta obcaecati. Deserunt."
                    emoji="💻"
                />

                <ExpandableCard 
                    title="Como Usar a Biblioteca Online"
                    summary="A biblioteca online oferece milhares de livros e materiais acadêmicos..."
                    details="Detalhes sobre como acessar, buscar livros, renovar empréstimos, baixar PDFs, etc."
                    emoji="📚"
                />

                <ExpandableCard 
                    title="Como Acessar Suporte Acadêmico"
                    summary="Se você tiver dúvidas sobre disciplinas, prazos ou burocracias, utilize o suporte acadêmico."
                    details="Aqui estão os passos detalhados para abrir chamados, falar com a secretaria, e tirar dúvidas frequentes."
                    emoji="🎯"
                />

            </section>
            <Footer />
        </div>
    )
}

export default VidaAcademica