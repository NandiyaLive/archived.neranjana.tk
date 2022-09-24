import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Neranjana Prasad</title>
      </Head>
      <section className="projects">
        <div className="container">
          <div className="project-cards grid grid-3">
            <div className="card">
              <p className="is-text-18 text-500">Instagram Downloader Bot</p>
              <p className="pt-10 text-400" style={{ lineHeight: 1.4 }}>
                A bot that can help you to download media from Instagram over Telegram.
              </p>
              <p className="ref">
                <a href="https://github.com/NandiyaLive/xIGDLBot" title="View on GitHub" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49121 19.4043C8.49121 19.502 8.37891 19.5801 8.2373 19.5801C8.07617 19.5947 7.96387 19.5166 7.96387 19.4043C7.96387 19.3066 8.07617 19.2285 8.21777 19.2285C8.36426 19.2139 8.49121 19.292 8.49121 19.4043ZM6.97266 19.1846C6.93848 19.2822 7.03613 19.3945 7.18262 19.4238C7.30957 19.4727 7.45605 19.4238 7.48535 19.3262C7.51465 19.2285 7.42188 19.1162 7.27539 19.0723C7.14844 19.0381 7.00684 19.0869 6.97266 19.1846ZM9.13086 19.1016C8.98926 19.1357 8.8916 19.2285 8.90625 19.3408C8.9209 19.4385 9.04785 19.502 9.19434 19.4678C9.33594 19.4336 9.43359 19.3408 9.41895 19.2432C9.4043 19.1504 9.27246 19.0869 9.13086 19.1016ZM12.3438 0.390625C5.57129 0.390625 0.390625 5.53223 0.390625 12.3047C0.390625 17.7197 3.79883 22.3535 8.66699 23.9844C9.29199 24.0967 9.51172 23.7109 9.51172 23.3936C9.51172 23.0908 9.49707 21.4209 9.49707 20.3955C9.49707 20.3955 6.0791 21.1279 5.36133 18.9404C5.36133 18.9404 4.80469 17.5195 4.00391 17.1533C4.00391 17.1533 2.88574 16.3867 4.08203 16.4014C4.08203 16.4014 5.29785 16.499 5.9668 17.6611C7.03613 19.5459 8.82812 19.0039 9.52637 18.6816C9.63867 17.9004 9.95605 17.3584 10.3076 17.0361C7.57812 16.7334 4.82422 16.3379 4.82422 11.6406C4.82422 10.2979 5.19531 9.62402 5.97656 8.76465C5.84961 8.44727 5.43457 7.13867 6.10352 5.44922C7.12402 5.13184 9.47266 6.76758 9.47266 6.76758C10.4492 6.49414 11.499 6.35254 12.5391 6.35254C13.5791 6.35254 14.6289 6.49414 15.6055 6.76758C15.6055 6.76758 17.9541 5.12695 18.9746 5.44922C19.6436 7.14355 19.2285 8.44727 19.1016 8.76465C19.8828 9.62891 20.3613 10.3027 20.3613 11.6406C20.3613 16.3525 17.4854 16.7285 14.7559 17.0361C15.2051 17.4219 15.5859 18.1543 15.5859 19.3018C15.5859 20.9473 15.5713 22.9834 15.5713 23.3838C15.5713 23.7012 15.7959 24.0869 16.416 23.9746C21.2988 22.3535 24.6094 17.7197 24.6094 12.3047C24.6094 5.53223 19.1162 0.390625 12.3438 0.390625ZM5.13672 17.2314C5.07324 17.2803 5.08789 17.3926 5.1709 17.4854C5.24902 17.5635 5.36133 17.5977 5.4248 17.5342C5.48828 17.4854 5.47363 17.373 5.39062 17.2803C5.3125 17.2021 5.2002 17.168 5.13672 17.2314ZM4.60938 16.8359C4.5752 16.8994 4.62402 16.9775 4.72168 17.0264C4.7998 17.0752 4.89746 17.0605 4.93164 16.9922C4.96582 16.9287 4.91699 16.8506 4.81934 16.8018C4.72168 16.7725 4.64355 16.7871 4.60938 16.8359ZM6.19141 18.5742C6.11328 18.6377 6.14258 18.7842 6.25488 18.877C6.36719 18.9893 6.50879 19.0039 6.57227 18.9258C6.63574 18.8623 6.60645 18.7158 6.50879 18.623C6.40137 18.5107 6.25488 18.4961 6.19141 18.5742ZM5.63477 17.8564C5.55664 17.9053 5.55664 18.0322 5.63477 18.1445C5.71289 18.2568 5.84473 18.3057 5.9082 18.2568C5.98633 18.1934 5.98633 18.0664 5.9082 17.9541C5.83984 17.8418 5.71289 17.793 5.63477 17.8564Z" />
                  </svg>
                </a>
                <a href="https://t.me/xIGDLBot" title="View on Telegram" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.374 4.81445L20.0732 20.3809C19.8242 21.4795 19.1748 21.7529 18.2519 21.2354L13.2227 17.5293L10.7959 19.8633C10.5273 20.1318 10.3027 20.3564 9.78515 20.3564L10.1465 15.2344L19.4678 6.81152C19.873 6.4502 19.3799 6.25 18.8379 6.61133L7.31445 13.8672L2.35351 12.3145C1.27441 11.9775 1.25488 11.2354 2.57812 10.7178L21.9824 3.24219C22.8809 2.90527 23.667 3.44238 23.374 4.81445Z" />
                  </svg>
                </a>
              </p>
            </div>
            <div className="card">
              <p className="is-text-18 text-500">IGStoryDL-Automated</p>
              <p className="pt-10 text-400" style={{ lineHeight: 1.4 }}>
                A script that automates downloading stories and uploading to Telegram.
              </p>
              <p className="ref">
                <a href="https://github.com/NandiyaLive/IGStoryDL-Automated" title="View on GitHub" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49121 19.4043C8.49121 19.502 8.37891 19.5801 8.2373 19.5801C8.07617 19.5947 7.96387 19.5166 7.96387 19.4043C7.96387 19.3066 8.07617 19.2285 8.21777 19.2285C8.36426 19.2139 8.49121 19.292 8.49121 19.4043ZM6.97266 19.1846C6.93848 19.2822 7.03613 19.3945 7.18262 19.4238C7.30957 19.4727 7.45605 19.4238 7.48535 19.3262C7.51465 19.2285 7.42188 19.1162 7.27539 19.0723C7.14844 19.0381 7.00684 19.0869 6.97266 19.1846ZM9.13086 19.1016C8.98926 19.1357 8.8916 19.2285 8.90625 19.3408C8.9209 19.4385 9.04785 19.502 9.19434 19.4678C9.33594 19.4336 9.43359 19.3408 9.41895 19.2432C9.4043 19.1504 9.27246 19.0869 9.13086 19.1016ZM12.3438 0.390625C5.57129 0.390625 0.390625 5.53223 0.390625 12.3047C0.390625 17.7197 3.79883 22.3535 8.66699 23.9844C9.29199 24.0967 9.51172 23.7109 9.51172 23.3936C9.51172 23.0908 9.49707 21.4209 9.49707 20.3955C9.49707 20.3955 6.0791 21.1279 5.36133 18.9404C5.36133 18.9404 4.80469 17.5195 4.00391 17.1533C4.00391 17.1533 2.88574 16.3867 4.08203 16.4014C4.08203 16.4014 5.29785 16.499 5.9668 17.6611C7.03613 19.5459 8.82812 19.0039 9.52637 18.6816C9.63867 17.9004 9.95605 17.3584 10.3076 17.0361C7.57812 16.7334 4.82422 16.3379 4.82422 11.6406C4.82422 10.2979 5.19531 9.62402 5.97656 8.76465C5.84961 8.44727 5.43457 7.13867 6.10352 5.44922C7.12402 5.13184 9.47266 6.76758 9.47266 6.76758C10.4492 6.49414 11.499 6.35254 12.5391 6.35254C13.5791 6.35254 14.6289 6.49414 15.6055 6.76758C15.6055 6.76758 17.9541 5.12695 18.9746 5.44922C19.6436 7.14355 19.2285 8.44727 19.1016 8.76465C19.8828 9.62891 20.3613 10.3027 20.3613 11.6406C20.3613 16.3525 17.4854 16.7285 14.7559 17.0361C15.2051 17.4219 15.5859 18.1543 15.5859 19.3018C15.5859 20.9473 15.5713 22.9834 15.5713 23.3838C15.5713 23.7012 15.7959 24.0869 16.416 23.9746C21.2988 22.3535 24.6094 17.7197 24.6094 12.3047C24.6094 5.53223 19.1162 0.390625 12.3438 0.390625ZM5.13672 17.2314C5.07324 17.2803 5.08789 17.3926 5.1709 17.4854C5.24902 17.5635 5.36133 17.5977 5.4248 17.5342C5.48828 17.4854 5.47363 17.373 5.39062 17.2803C5.3125 17.2021 5.2002 17.168 5.13672 17.2314ZM4.60938 16.8359C4.5752 16.8994 4.62402 16.9775 4.72168 17.0264C4.7998 17.0752 4.89746 17.0605 4.93164 16.9922C4.96582 16.9287 4.91699 16.8506 4.81934 16.8018C4.72168 16.7725 4.64355 16.7871 4.60938 16.8359ZM6.19141 18.5742C6.11328 18.6377 6.14258 18.7842 6.25488 18.877C6.36719 18.9893 6.50879 19.0039 6.57227 18.9258C6.63574 18.8623 6.60645 18.7158 6.50879 18.623C6.40137 18.5107 6.25488 18.4961 6.19141 18.5742ZM5.63477 17.8564C5.55664 17.9053 5.55664 18.0322 5.63477 18.1445C5.71289 18.2568 5.84473 18.3057 5.9082 18.2568C5.98633 18.1934 5.98633 18.0664 5.9082 17.9541C5.83984 17.8418 5.71289 17.793 5.63477 17.8564Z" />
                  </svg>
                </a>
              </p>
            </div>
            <div className="card">
              <p className="is-text-18 text-500">News API</p>
              <p className="pt-10 text-400" style={{ lineHeight: 1.4 }}>
                API to fetch news from AdaDerana, a major news network in Sri Lanka.
              </p>
              <p className="ref">
                <a href="https://github.com/NandiyaLive/NewsAPI" title="View on GitHub" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49121 19.4043C8.49121 19.502 8.37891 19.5801 8.2373 19.5801C8.07617 19.5947 7.96387 19.5166 7.96387 19.4043C7.96387 19.3066 8.07617 19.2285 8.21777 19.2285C8.36426 19.2139 8.49121 19.292 8.49121 19.4043ZM6.97266 19.1846C6.93848 19.2822 7.03613 19.3945 7.18262 19.4238C7.30957 19.4727 7.45605 19.4238 7.48535 19.3262C7.51465 19.2285 7.42188 19.1162 7.27539 19.0723C7.14844 19.0381 7.00684 19.0869 6.97266 19.1846ZM9.13086 19.1016C8.98926 19.1357 8.8916 19.2285 8.90625 19.3408C8.9209 19.4385 9.04785 19.502 9.19434 19.4678C9.33594 19.4336 9.43359 19.3408 9.41895 19.2432C9.4043 19.1504 9.27246 19.0869 9.13086 19.1016ZM12.3438 0.390625C5.57129 0.390625 0.390625 5.53223 0.390625 12.3047C0.390625 17.7197 3.79883 22.3535 8.66699 23.9844C9.29199 24.0967 9.51172 23.7109 9.51172 23.3936C9.51172 23.0908 9.49707 21.4209 9.49707 20.3955C9.49707 20.3955 6.0791 21.1279 5.36133 18.9404C5.36133 18.9404 4.80469 17.5195 4.00391 17.1533C4.00391 17.1533 2.88574 16.3867 4.08203 16.4014C4.08203 16.4014 5.29785 16.499 5.9668 17.6611C7.03613 19.5459 8.82812 19.0039 9.52637 18.6816C9.63867 17.9004 9.95605 17.3584 10.3076 17.0361C7.57812 16.7334 4.82422 16.3379 4.82422 11.6406C4.82422 10.2979 5.19531 9.62402 5.97656 8.76465C5.84961 8.44727 5.43457 7.13867 6.10352 5.44922C7.12402 5.13184 9.47266 6.76758 9.47266 6.76758C10.4492 6.49414 11.499 6.35254 12.5391 6.35254C13.5791 6.35254 14.6289 6.49414 15.6055 6.76758C15.6055 6.76758 17.9541 5.12695 18.9746 5.44922C19.6436 7.14355 19.2285 8.44727 19.1016 8.76465C19.8828 9.62891 20.3613 10.3027 20.3613 11.6406C20.3613 16.3525 17.4854 16.7285 14.7559 17.0361C15.2051 17.4219 15.5859 18.1543 15.5859 19.3018C15.5859 20.9473 15.5713 22.9834 15.5713 23.3838C15.5713 23.7012 15.7959 24.0869 16.416 23.9746C21.2988 22.3535 24.6094 17.7197 24.6094 12.3047C24.6094 5.53223 19.1162 0.390625 12.3438 0.390625ZM5.13672 17.2314C5.07324 17.2803 5.08789 17.3926 5.1709 17.4854C5.24902 17.5635 5.36133 17.5977 5.4248 17.5342C5.48828 17.4854 5.47363 17.373 5.39062 17.2803C5.3125 17.2021 5.2002 17.168 5.13672 17.2314ZM4.60938 16.8359C4.5752 16.8994 4.62402 16.9775 4.72168 17.0264C4.7998 17.0752 4.89746 17.0605 4.93164 16.9922C4.96582 16.9287 4.91699 16.8506 4.81934 16.8018C4.72168 16.7725 4.64355 16.7871 4.60938 16.8359ZM6.19141 18.5742C6.11328 18.6377 6.14258 18.7842 6.25488 18.877C6.36719 18.9893 6.50879 19.0039 6.57227 18.9258C6.63574 18.8623 6.60645 18.7158 6.50879 18.623C6.40137 18.5107 6.25488 18.4961 6.19141 18.5742ZM5.63477 17.8564C5.55664 17.9053 5.55664 18.0322 5.63477 18.1445C5.71289 18.2568 5.84473 18.3057 5.9082 18.2568C5.98633 18.1934 5.98633 18.0664 5.9082 17.9541C5.83984 17.8418 5.71289 17.793 5.63477 17.8564Z" />
                  </svg>
                </a>
                <a href="https://api.neranjana.tk/news" title="View API" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M256,48,496,464H16Z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
          <div className="other pt-10">
            <p className="is-text-20 text-600 pt-10 pb-10">Other Noteworthy Projects</p>
            <ul className="text-500">
              <li>
                <span>
                  <svg aria-hidden="true" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
                  </svg>
                </span>
                <a target="_blank" href="https://github.com/NandiyaLive/RedditDLBot" rel="noopener noreferrer">
                  <span className="text">NandiyaLive/RedditDLBot</span>
                </a>
              </li>

              <li>
                <span>
                  <svg aria-hidden="true" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
                  </svg>
                </span>
                <a target="_blank" href="https://github.com/NandiyaLive/PSALinkGrabber" rel="noopener noreferrer">
                  <span className="text">NandiyaLive/PSALinkGrabber</span>
                </a>
              </li>

              <li>
                <span>
                  <svg aria-hidden="true" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
                  </svg>
                </span>
                <a target="_blank" href="https://github.com/NandiyaLive/covid-stats" rel="noopener noreferrer">
                  <span className="text">NandiyaLive/covid-stats</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;