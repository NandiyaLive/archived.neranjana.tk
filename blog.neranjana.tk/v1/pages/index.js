import React from "react";
import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

const Home = ({ allPostsData }) => {
  return (
    <body>
      <Head>
        {/* Primary Meta Tags */}
        <title>නන්ඩියාගේ සත දෙක | Nandiya's Two Cents</title>
        <meta name="title" content="නන්ඩියාගේ සත දෙක | Nandiya's Two Cents" />
        <meta
          name="description"
          content="Neranjana Prasad's (Nandiya's) personal blog. Writes about tech, thoughts, personal opinions and some random stuff."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="නන්ඩියාගේ සත දෙක | Nandiya's Two Cents"
        />
        <meta
          property="og:description"
          content="Neranjana Prasad's (Nandiya's) personal blog. Writes about tech, thoughts, personal opinions and some random stuff."
        />
        <meta property="og:image" content="/avatar.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blog.neranjana.tk" />
        <meta
          property="twitter:title"
          content="නන්ඩියාගේ සත දෙක | Nandiya's Two Cents"
        />
        <meta
          property="twitter:description"
          content="Neranjana Prasad's (Nandiya's) personal blog. Writes about tech, thoughts, personal opinions and some random stuff."
        />
        <meta property="twitter:image" content="/avatar.png" />

        <link rel="icon" href="/favicon.ico" />
        <link href="/public/styles.css" rel="stylesheet" />
      </Head>

      <main className="container home-page">
        <section className="intro">
          <img src="/avatar.png" className="avatar" alt="Avatar" />
          <p className="blog-title">
            නන්ඩියාගේ සත දෙක
            <br />
            Nandiya's Two Cents
          </p>
        </section>

        <section className="posts">
          <p className="recent-posts-title">Recent Posts</p>
          <ul className="post-list">
            {allPostsData.map(({ slug, date, title }) => (
              <li key={slug}>
                <div className="post-date">
                  <b>{date}</b>
                </div>
                <p>
                  &nbsp;─{" "}
                  <Link href={slug}>
                    <a href={slug}>{title}</a>
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>
          Written with{" "}
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </span>{" "}
          by{" "}
          <a href="https://neranjana.tk" target="_blank" rel="noreferrer">
            Neranjana
          </a>
          .
          <br />
          Made with Next.js | Hosted on Vercel.
        </p>
      </footer>
    </body>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default Home;
