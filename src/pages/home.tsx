import Head from "next/head";
import { useEffect, useState } from "react";
import { GetServerSideProps } from 'next'
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";

import { ChallengesProvider } from '../context/ChallengesContext'
import { useRouter } from 'next/router'
import styles from "../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface User {
  name: string;
  avatar_url: string;
}

export default function Home(props: HomeProps) {
  const [user, setUser] = useState({} as User)
  const { query } = useRouter()

  async function setUserGithub(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    setUserGithub(query.userName)
  }, [])
  
  return (  
      <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        
        <CountdownProvider>
          <section>
            <div>
              <Profile
              name={user.name}
              avatar={user.avatar_url}
              />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
      </ChallengesProvider>
 
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}