import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import illustrationImage from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.css';

export function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImage}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImage} alt="Letmeask" />

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou ente em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
