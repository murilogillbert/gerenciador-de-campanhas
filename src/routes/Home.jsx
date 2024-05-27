//Na home aparecerá algumas informações do site e os botões de logar e cadastrar

import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <section id="about">
                    <About
                    title="O Melhor gerenciador de campanhas do mundo"
                    subtitle="Preços menores que o de concorrentes e taxa de conversão acima da média"
                    description="Com o myCampaing você consegue gerenciar e criar suas campanhas em um só lugar!! Deixe de lado todo o enrolo do facebook ou google ads, e faça do seu jeito conosco!"
                    />
                </section>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}