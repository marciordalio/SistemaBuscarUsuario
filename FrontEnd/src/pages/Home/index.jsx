import './style.css'
import Trash from '../../assets/lixeira.png'
import Seta from '../../assets/seta.png'


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
                    <h1> Cadastrar Usuários</h1>
                    <div className="input-group">
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" name='nome' type='text' placeholder="francico de andrade" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="idade">Idade</label>
                        <input id="idade" name='idade' type='number' placeholder="20" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" name='email' type='email' placeholder="exemplo@email.com" />
                    </div>
                    <button className= 'BotaoCadastrar' type='button'>
                        CADASTRAR
                        <img src={Seta} alt="cadastrar" />
                    </button>
                </form>
            </div>


        {users.map(user =>( 
         <div key={user.id} className='cardsUsers' >
             <p>Nome: {user.name}</p>
             <p>Idade:{user.idade} </p>
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
