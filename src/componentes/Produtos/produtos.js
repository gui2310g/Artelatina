import './produtos.css';

const Produtos = () => {
    return (
        <section className="products">

            <h1>Produtos realizados pela Arte latina</h1>
            
           <ul id='lista'>
                <li>
                    <img src='/imagens/Salsicha_amigurumi.png' alt='Amigurumi de Salsicha' />
                </li>

                <li>
                    <img src='/imagens/biscoito.png' alt='biscoito' />
                </li>

                <li>
                    <img src='/imagens/coração.png' alt='placas de coração' />
                </li>

                <li>
                    <img src='/imagens/placa.png' alt='placas' />
                </li>

                <li>
                    <img src='/imagens/hellokitty_amigurumi.png' alt='amigurumi da hello kitty' />
                </li>
            
           </ul>
        </section>
    )
}

export default Produtos;
