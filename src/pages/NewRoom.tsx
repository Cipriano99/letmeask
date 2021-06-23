// import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

import illustrationImage from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.css';

export function NewRoom() {
  // const { user } = useAuth();

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

          <h2>Crie uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar numa sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
