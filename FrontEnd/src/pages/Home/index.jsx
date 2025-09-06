import './style.css'
import Trash from '../../assets/lixeira.png'
import Seta from '../../assets/seta.png'
import api from '../../services/api'

function Home() {

    let users = []


    async function getUsers(){//fora no servidor portas diferente await asy
       users =  await api.get('/usuarios')
    }

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

            <div className='container-cards'>
                {users.map(user => (
                    <div key={user.id} className='cardsUsers' >
                        <div>
                            <p><strong>Nome:</strong> {user.name}</p>
                            <p><strong>Idade:</strong> {user.idade}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                        <div className='delete'>
                            <button>
                                <img src={Trash} alt='deletar' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>




    )
}

export default Home
