import blogSiteImg from '../images/research-blog-site.png';
import AlgoVizImg from '../images/algoviz-site.png';

const projectData = [
    {
        id: "algoviz-project",
        name: "AlgoViz",
        codeRepo: "https://github.com/wross2/AlgoViz",
        site: "https://algov1z.netlify.app",
        tech: [
            "HTML / CSS", "Javascript"
        ],
        description: "A frontent project that animates popular algorithms. " +
                     "Check out more in the Github Repo below. " +
                     "This project is exlusively frontend and uses only " + 
                     "vanilla HTML, CSS, and Javascript.",
        image: AlgoVizImg,
    },
    {
        id: "research-blog-project",
        name: "Research Blog",
        codeRepo: "",
        site: "https://lyteway.com",
        tech: [
            "HTML / CSS", "Python", "Pelican CMS"
        ],
        description: (
            "This project is a personal blog to document my investment research. " +
            "It makes use of a flat file CMS called Pelican, that is built on Python."
        ),
        image: blogSiteImg,
    },
]

export default projectData