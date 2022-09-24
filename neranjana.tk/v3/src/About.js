const About = () => {
    return (
        <section className="about">
            <h1>Hello <span className="wave"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em"><path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"/><path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"/><g fill="#5DADEC"><path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"/><path d="M7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zM24 2c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"/><path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"/></g></svg></span></h1>
            <p className="bio">
                I'm Neranjana Prasad Ponnamperuma (aka Nandiya), a 21 years old self
                taught web developer living in Kandy, Sri Lanka. I spend hours
                experimenting with HTML, CSS, and JavaScript; dabbling with Python.
                I’m curious, and I enjoy work that challenges me to learn something
                new and stretch in a different direction. Outside of coding, I enjoy
                spending my time reading novels, listening into music and podcasts, binge watching TV Series and{" "}
                <a href="https://en.wikipedia.org/wiki/Cinema_of_South_India" target="_blank "><u>South Indian films</u></a> <span className="pleading-face"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-hidden="true" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"><circle fill="#FFCC4D" cx="18" cy="18" r="18"/><path fill="#65471B" d="M20.996 27c-.103 0-.206-.016-.309-.049-1.76-.571-3.615-.571-5.375 0-.524.169-1.089-.117-1.26-.642-.171-.525.117-1.089.643-1.26 2.162-.702 4.447-.702 6.609 0 .525.171.813.735.643 1.26-.137.421-.529.691-.951.691z"/><path fill="#FFF" d="M30.335 12.068c-.903 2.745-3.485 4.715-6.494 4.715-.144 0-.289-.005-.435-.014-1.477-.093-2.842-.655-3.95-1.584.036.495.076.997.136 1.54.152 1.388.884 2.482 2.116 3.163.82.454 1.8.688 2.813.752 1.734.109 3.57-.28 4.873-.909 1.377-.665 2.272-1.862 2.456-3.285.183-1.415-.354-2.924-1.515-4.378z"/><path fill="#65471B" d="M21.351 7.583c-1.297.55-1.947 2.301-1.977 5.289l.039.068c.897 1.319 2.373 2.224 4.088 2.332.114.007.228.011.341.011 2.634 0 4.849-1.937 5.253-4.524-.115-.105-.221-.212-.343-.316-3.715-3.17-6.467-3.257-7.401-2.86z"/><path fill="#F4900C" d="M23.841 16.783c3.009 0 5.591-1.97 6.494-4.715-.354-.443-.771-.88-1.241-1.309-.404 2.587-2.619 4.524-5.253 4.524-.113 0-.227-.004-.341-.011-1.715-.108-3.191-1.013-4.088-2.332l-.039-.068c-.007.701.021 1.473.083 2.313 1.108.929 2.473 1.491 3.95 1.584.146.01.291.014.435.014z"/><circle fill="#FFF" cx="21.413" cy="10.705" r="1.107"/><path fill="#FFF" d="M12.159 16.783c-3.009 0-5.591-1.97-6.494-4.715-1.161 1.454-1.697 2.963-1.515 4.377.185 1.423 1.079 2.621 2.456 3.285 1.303.629 3.138 1.018 4.873.909 1.013-.064 1.993-.297 2.813-.752 1.231-.681 1.963-1.775 2.116-3.163.06-.542.1-1.042.136-1.536-1.103.923-2.47 1.487-3.95 1.58-.146.011-.291.015-.435.015z"/><path fill="#65471B" d="M12.159 15.283c.113 0 .227-.004.341-.011 1.715-.108 3.191-1.013 4.088-2.332l.039-.068c-.031-2.988-.68-4.739-1.977-5.289-.934-.397-3.687-.31-7.401 2.859-.122.104-.227.211-.343.316.404 2.588 2.619 4.525 5.253 4.525z"/><path fill="#F4900C" d="M16.626 12.872l-.039.068c-.897 1.319-2.373 2.224-4.088 2.332-.114.007-.228.011-.341.011-2.634 0-4.849-1.937-5.253-4.524-.47.429-.887.866-1.241 1.309.903 2.745 3.485 4.715 6.494 4.715.144 0 .289-.005.435-.014 1.48-.093 2.847-.657 3.95-1.58.062-.841.091-1.614.083-2.317z"/><path fill="#FFF" d="M9.781 11.81c.61-.038 1.074-.564 1.035-1.174-.038-.61-.564-1.074-1.174-1.036-.61.038-1.074.564-1.036 1.174.039.61.565 1.074 1.175 1.036z"/></svg></span>
                </p>

            <div className="grid pt-1">
                <div>
                    <p className="subhead">WHAT I USE</p>
                    <p>OS : Manjaro Linux (XFCE)</p>
                    <p>Browsers : Firefox / Brave</p>
                    <p>Code Editor : VS Code</p>
                    <p>Hardware : HP Compaq Elite 8300</p>
                </div>
                <div>
                    <p className="subhead">I WORK WITH</p>
                    <ul className="work-with">
                        <li><img src="./html5.svg " alt="" title="HTML5" /></li>
                        <li><img src="./css3.svg " alt="" title="CSS3" /></li>
                        <li><img src="./sass.svg" alt="" title="Sass" /></li>
                        <li><img src="./bs.svg " alt="" title="Bootstrap" /></li>
                        <li><img src="./bulma.svg " alt="" title="Bulma" /></li>
                        <li><img src="./js.svg " alt="" title="JavaScript" /></li>
                        <li><img src="./react.svg " alt="" title="React.js" /></li>
                        <li><img src="./next-js.svg " alt="" title="Next.js" /></li>
                        <li><img src="./python.svg " alt="" title="Python" /></li>
                        <li><img src="./flask.svg " alt="" title="Flask" /></li>
                        <li><img src="./git.svg " alt="" title="Git" /></li>
                        <li><img src="./tux.svg " alt="" title="Linux" /></li>
                        <li><img src="./cli.svg " alt="" title="CLI" /></li>
                    </ul>
                </div>
            </div>

            <div className="grid py-2">
                <div>
                    <p class="subhead">WHAT HEALS ME</p>
                    <div class="heal">
                        <a href="https://open.spotify.com/playlist/4oKjrCt8bfJCLQxL635Ftq" target="_blank" rel="noreferrer"><img
                            src="./spotify.svg" alt="" /></a>
                        <a href="https://trakt.tv/users/nandiyalive" target="_blank" rel="noreferrer"><img src="./trakt.svg" alt="" /></a>
                    </div>
                </div>
                <div>
                    <p className="subhead">ACHIEVEMENTS</p>
                    <p><i className="fa fa-check-circle"></i><a href="https://freecodecamp.org/certification/nandiyalive/responsive-web-design" target="_blank" rel="noreferrer">Responsive Web Design</a></p>
                </div>
            </div>
        </section>
    );
}

export default About;
