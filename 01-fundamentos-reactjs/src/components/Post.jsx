import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/marinh0w.png"
          />
          <div className={styles.authorInfo}>
            <strong>Seu Zé</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="27 de Dezembro às 14:07h" dateTime="2002-27-12 14:07:50">
          Publicado há
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Por conseguinte, a determinação clara de objetivos cumpre um papel
        </p>
        <p>essencial na implantação do sistema de monitoramento corporativo.</p>
        <p>
          Considerando que temos bons administradores de rede, a implementação
          do
        </p>
        <p>
          código apresenta tendências no sentido de aprovar a nova topologia dos
        </p>
        <p>
          paradigmas de desenvolvimento de software. O que temos que ter sempre
          em
        </p>
        <p>
          mente é que a <a href=""> lógica proposicional</a> faz parte de um
          processo de
        </p>
        <p>
          gerenciamento de memória avançado da confidencialidade imposta pelo
        </p>
        <p>
          sistema de senhas. Do mesmo modo, a lei de Moore auxilia no aumento da
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {/*<Comment />*/}
      </div>
    </article>
  );
}
