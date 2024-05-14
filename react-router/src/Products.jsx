export default function Product(){
    const products = [
        {id 1, name: 'Uva', price: 10},
        {id 2, name: 'Laranja', price: 14},
        {id 3, name: 'Pera', price: 8},
    ]
    function Proucts() {
    return(
        <div>
            
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'none'}}>
                    <li>Nome: {prod.name}</li>
                    <li>PReço: R$ {prod.price}</li>
                    <li><Link to={`/products/${ prod.id }/info`}>Mais informações</li>
                    <li><hr /></li>
                </ul>
            ))}
        </div>
            
}