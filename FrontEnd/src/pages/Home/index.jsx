import './style.css'
import Trash from '../../assets/lixeira.png'

function Home() {

    const users = [{
        id: '23232323',
        name: 'JDK',
        idade: 90,
        email: 'code@gmail.com'
    },

    {
        id: '232432323',
        name: 'JDKdf',
        idade: 903,
        email: 'cod3rdde@gmail.com'
    },





    ]

    return (


        <div className='GERAL'>


            <div className='container'>
                <form>
                    <h1> Cadastro de Usuário</h1>
                    <input name='nome' type='text'  placeholder="Nome" />
                    <input idade='idade' type='number'  placeholder="Idade" />
                    <input email='nome' type='email'  placeholder="email" />
                    <button type='buttun'>  Cadastrar</button>
                </form>
            </div>


        {users.map(user =>( 
         <div key={user.id} className='cardsUsers' >
             <p>Nome: {user.name}</p>
             <p>Idade:{user.age} </p>
             <p>Email: {user.email}</p>
            <div className='delete'>
                <button>
                   <img src={Trash} alt='deletar'/> 
                </button>
            </div>
         </div>
      ))}












        </div>




    )
}

export default Home
