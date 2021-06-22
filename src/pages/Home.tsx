import illustrationImage from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImage}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div>
          <img src={logoImage} alt="Letmeask" />

          <button>
            <img src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div>ou ente em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
