import blogSiteImg from '../images/research-blog-site.png';
import algoVizImg from '../images/algoviz-site.png';
import portfolioV1Img from '../images/portfolio-site-v1.png';

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
        image: algoVizImg,
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
    {
        id: "portfolio-site-v1",
        name: "Portfolio Site V-1.0",
        codeRepo: "https://github.com/wross2/portfolio-site-v1",
        site: "https://williamross.info",
        tech: [
            "ReactJS", "HTML / CSS", "Javascript"
        ],
        description: "My personal portfolio site for showcasing myself " +
                     "and my work. This is version 1.0, built entirely in ReactJS.",
        image: portfolioV1Img,
    },
]

export default projectData