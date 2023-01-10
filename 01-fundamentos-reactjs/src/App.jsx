import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/marinh0w.png",
      name: "Gabriel Marinho",
      role: "Desenvolvedor @ CEL",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Por conseguinte, a determinação clara de objetivos cumpre um papel",
      },
      {
        type: "paragraph",
        content:
          "essencial na implantação do sistema de monitoramento corporativo.",
      },
      {
        type: "paragraph",
        content:
          "Considerando que temos bons administradores de rede, a implementação do",
      },
      {
        type: "paragraph",
        content:
          "código apresenta tendências no sentido de aprovar a nova topologia dos",
      },
      { type: "link", content: "paradigmas de desenvolvimento de software." },
      {
        type: "paragraph",
        content:
          "O que temos que ter sempre em sistema de senhas. Do mesmo modo, a lei de Moore auxilia no aumento da",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marinh0w.png",
      name: "Seu Zé",
      role: "Desenvolvedor @ Liceu",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Por conseguinte, a determinação clara de objetivos cumpre um papel",
      },
      {
        type: "paragraph",
        content:
          "essencial na implantação do sistema de monitoramento corporativo.",
      },
      {
        type: "paragraph",
        content:
          "Considerando que temos bons administradores de rede, a implementação do",
      },
      {
        type: "paragraph",
        content:
          "código apresenta tendências no sentido de aprovar a nova topologia dos",
      },
      { type: "link", content: "paradigmas de desenvolvimento de software." },
      {
        type: "paragraph",
        content:
          "O que temos que ter sempre em sistema de senhas. Do mesmo modo, a lei de Moore auxilia no aumento da",
      },
    ],
    publishedAt: new Date("2022-01-03 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
