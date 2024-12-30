"use client";

import Image from "next/image"
import logopicture from "../app/assets/logo.svg"
import womanpicture from "../app/assets/woman.svg"
import { Button } from "./_components/ui/button";

export default function Home() {
    return (
        <main>
            {/* primeira seção */}
            <section className="bg-gray-200 container mx-auto">
                <nav className="flex flex-row justify-between items-center py-4 px-6">    
                    <Image 
                        src={logopicture}
                        alt="Logo" 
                    />

                    <div className="flex flex-row gap-2">
                        <Button variant={"link"}>Funcionamento</Button>
                        <Button variant={"link"}>Preços</Button>

                        <Button variant={"bg-white"} className="font-bold">
                            Login
                        </Button>
                    </div>
                </nav>

                <h1>Simplifique Seus Estudos</h1>

                <p>
                    Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba 
                    todos os meses um ebook novo de programação.
                </p>

                <form>
                    <input type="text" placeholder="Coloque seu e-mail..."/>
                    <button>Assine Agora</button>
                </form>

                <p>
                    Comece sua assinatura agora mesmo. Cancele quando quiser. 
                </p>

            </section>

            {/* segubda seção */}
            <section>
                <h2>Como funciona?</h2>

                <div>
                    <Image 
                        src={womanpicture} 
                        alt="imagem de uma mulher carregando uma caixa" 
                    />

                    <ul>
                        <li>
                            Acesso a 1 ebook por mês
                        </li>
                        <li>
                            Curadoria especial
                        </li>
                        <li>
                            Cancele quando quiser
                        </li>
                    </ul>
                </div>
            </section>

            {/* terceira seção */}
            <section className="bg-gray-200">
                <h2>Preço Simples e Transparente</h2>
                <p>
                    Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? 
                    Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. 
                    E por menos de um café por dia. 
                </p>

                <div>
                    <h3>Plano Pro Premium VIP</h3>
                    <p>
                        Tudo que você precisa para seus estudos
                    </p>

                    <p>R$29/mes</p>

                    <ul>
                        <li>
                            1 ebook por mês
                        </li>

                        <li>
                            Curadoria especial
                        </li>

                        <li>
                            Acesso ilimitado
                        </li>

                        <li>
                            Cancele a qualquer momento
                        </li>
                    </ul>
                </div>
            </section>

            {/* quarta seção */}
            <section>
                <h3>Pronto para mudar sua Vida?</h3>
                <p>
                    Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos 
                </p>

                <button>
                    Assine Agora
                </button>
                <p>
                    Comece sua assinatura agora mesmo. Cancele quando quiser. 
                </p>

                <footer>
                    <img src="" alt="" />
                    <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
                </footer>
            </section>
        </main>
    );
}
