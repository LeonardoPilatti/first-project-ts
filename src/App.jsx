import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import * as S from "./App.module.css"
import "./global.css"

const posts = [
  {id: 1,
    author: {
      avatarUrl: "https://github.com/LeonardoPilatti.png",
      name: "Leonardo Pilatti",
      role: "Desenvolvedor frontend"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2024-10-10 20:00:00')
  },
  {id: 2,
    author: {
      avatarUrl: "https://github.com/LeonardoPilatti.png",
      name: "Leonardo Dal Puppo",
      role: "Desenvolvedor frontend"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2024-11-12 17:00:00')
  },
]

export const App = () => {
  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
