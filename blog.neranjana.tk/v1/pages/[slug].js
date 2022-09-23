import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Comments from "./comments"

const Post = ({ postHtml, data, slug }) => {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>{data.title} — නන්ඩියාගේ සත දෙක | Nandiya's Two Cents</title>
        <meta
          name="title"
          content={`${data.title} — නන්ඩියාගේ සත දෙක | Nandiya's Two Cents`}
        />
        <meta
          name="description"
          content="Neranjana Prasad's (Nandiya's) personal blog. Writes about tech, thoughts, personal opinions and some random stuff."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://blog.neranjana.tk/${slug}`} />
        <meta
          property="og:title"
          content={`${data.title} — නන්ඩියාගේ සත දෙක | Nandiya's Two Cents`}
        />
        <meta
          property="og:description"
          content="Neranjana Prasad's (Nandiya's) personal blog. Writes about tech, thoughts, personal opinions and some random stuff."
        />
        <meta property="og:image" content={`${data.image}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://blog.neranjana.tk/${slug}`}
        />
        <meta
          property="twitter:title"
          content={`${data.title} — නන්ඩියාගේ සත දෙක | Nandiya's Two Cents`}
        />
        <meta
          property="twitter:description"
          content="Neranjana Prasad's (Nandiya's) personal blog. Writes about tech, thoughts, personal opinions and some random stuff."
        />
        <meta property="twitter:image" content={`${data.image}`} />
      </Head>

      <main className="post-page">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${data.image}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="hero-body">
            <div className="post-meta">
              <p className="post-title">{data.title}</p>
              <p className="date-author">
                {data.date} | By <b>{data.author}</b>
              </p>
            </div>
          </div>
        </section>

        <section className="post-container">
          <Link href="/">
            <a href="/">
              <div className="back-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
                <p>Go back</p>
              </div>
            </a>
          </Link>
          <br />
          <br />
          <hr className="style-one" />
          <div className="post-container">
            <div dangerouslySetInnerHTML={{ __html: postHtml }} />
          </div>
        </section>
        
        <section className="comments">
          <Comments/>
        </section>
      </main>

      <footer>
        <p>
          Written with <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg></span> by{" "}
          <a href="https://neranjana.tk" target="_blank" rel="noreferrer">
            Neranjana
          </a>
          .
          <br />
          Made with Next.js | Hosted on Vercel.
        </p>
      </footer>

    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const contentWMeta = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedContent = matter(contentWMeta);

  const postHtml = marked(parsedContent.content);

  return {
    props: {
      postHtml,
      data: parsedContent.data,
      slug
    }
  };
};

export default Post;
