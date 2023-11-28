export default function About (){
    const projectLinks = [
        { site: "https://anranlee99.github.io/CMPM120-D1/", repo: "https://github.com/anranlee99/CMPM120-D1" },
        { site: "https://anranlee99.github.io/CMPM120-D2/", repo: "https://github.com/anranlee99/CMPM120-D2" },
        { site: "https://anranlee99.github.io/minesweeper/", repo: "https://github.com/anranlee99/minesweeper" },
        { site: "https://anranlee99.github.io/cmpm170prototype2/", repo: "https://github.com/anranlee99/cmpm170prototype2" },
        { site: "https://anranlee99.github.io/cmpm170prototype2solo/", repo: "https://github.com/anranlee99/cmpm170prototype2solo" },
        { site: "https://anranlee99.github.io/cmpm-121-demo-1/", repo: "https://github.com/anranlee99/cmpm-121-demo-1" },
        { site: "https://anranlee99.github.io/cmpm-121-demo-2/", repo: "https://github.com/anranlee99/cmpm-121-demo-2" },
        { site: "https://anranlee99.github.io/cmpm-121-demo-3/", repo: "https://github.com/anranlee99/cmpm-121-demo-3" },
        { site: "https://anranlee99.github.io/CMPM120-D3/", repo: "https://github.com/anranlee99/CMPM120-D3" },
        { site: "https://alee208.itch.io/dancing-troll", repo: "" }, // If there's no repo, leave it as an empty string
        { site: "https://sometrails-96sei.herokuapp.com/", repo: "" }  // Same here
    ];
    

    return (
        <div className="flex-col grow items-center justify-center h-full">
            <h1 className="mb-0 text-[#D6E5C0] text-opacity-70 m-20 h-1/5 text-center text-extrabold text-6xl text-black">About Me</h1>
            <div className="w-full flex justify-center grow">
                <p className="text-[#D6E5C0] text-4xl text-center flex h-4/5 w-3/4 font-light">
                    My name is Aaron Lee. I am a CS student at UC Santa Cruz My programming roots are in C++ but in the recent years, I have been using Python and Node.js more. I am passionate about all things nerdy! Check out my links to see my work besides this site and feel to contact about any work/collab opportunities. Have a great day!
                </p>
            </div>
            <h1 className="mb-0 text-[#D6E5C0] text-opacity-70 m-20 h-1/5 text-center text-extrabold text-6xl text-black">Some of my works</h1>
            <div className="w-full flex justify-center grow">
                <div className="grid grid-cols-1 gap-40 p-4 grow ">
                    {projectLinks.map((project, index) => (
                        <div key={index} className="" >
                            <a href={project.site} target="_blank" rel="noopener noreferrer" className="block bg-gray-200 hover:bg-gray-300 transition duration-200 ease-in-out ">
                                <iframe className="h-full w-full rounded" src={project.site} title={`Project ${index}`} style={{ border: 'none', minHeight: '1000px'}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </a>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                                View Repository
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

