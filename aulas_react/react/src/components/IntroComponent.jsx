
// export default 

import ChildComponent from "./ChildComponent";

//export default IntroComponent
function IntroComponent() {
    const a = 5, b = 2, nome = 'Kleber';
    const aluno = {
        nome: 'João',
        email: 'joão@email.com'
    }

    return(
        <div>
            <h2>Componente de introdução</h2>
            <h3>Template Expressions</h3>
            <p>{nome}, o produto entre {a} e {b} é {a} * {b}</p>
            <p>Aluno {aluno.nome} <br/> Email: {aluno.email}</p>
            <ChildComponent/>
        </div>

        
    )
}
export default IntroComponent

