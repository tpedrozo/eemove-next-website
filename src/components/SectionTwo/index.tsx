import { Button } from "../Button";

export function SectionTwo() {
    return (
        <section className="mx-5 py-10">

        <h2 className="text-2xl font-semibold text-center text-gray-600">
            Acesse <span className="text-[#3e63ad]">todos os anúncios</span> da sua cidade em menos de <span className="text-[#3e63ad]">um
                minuto!</span>
        </h2>

        <p className="text-center text-gray-600 text-sm mt-10">
            Não perca mais tempo navegando em portais atrás de novos imóveis. Com nossa Busca Inteligente você tem acesso a todos os anúncios de sua cidade em um só lugar, além de avaliar qualquer imóvel em menos de 1 minuto com nossa Avaliação Digital.
        </p>

        <img src="/gif-brokers-anuncios-da-cidade.gif" alt="Brokers platform map" className="w-full mt-10" />

        <div className="flex justify-center">
            <Button text="Experimente Grátis!" width="252px" />
        </div>

    </section>
    )
}