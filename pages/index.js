import Head from "next/head";
import QuestionWrapper from "../components/QuestionWrapper";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <QuestionWrapper />
    </div>
  );
}
