import './App.css';
import AvatarImage from "./ali-headshot.jpg";

function App() {
    return (
        <div className="card">
            <AvatarPhoto />
            <div className="data">
                <Intro />
                <SkillList />

            </div>
            <p className="footer"><a href="https://www.linkedin.com/in/ramazanima/">LinkedIn</a> | <a href="https://github.com/ramazanima">GitHub</a> | <a href="mailto:maliramazani2@gmail.com
">Email</a></p>
            <p className="footer-credit">Made by Ali Ramazani</p>
            <p className="footer">Powered By React</p>

        </div>
    );
}

function AvatarPhoto() {
    return <img src={AvatarImage} alt="Ali Ramazani" className="avatar"/>
}

function Intro() {
    return (
        <div>
            <h1 className="">Ali Ramazani <span className="title">Front End Engineer</span></h1>
            <p>
                Hi, my name is Ali, and I'm a sophomore computer science student at Berea College. I aspire to become a full-stack software engineer after I graduate. I'm proficient both in the front end and back end. Currently, my interest mostly lies in UX/UI design and forging great user experience with expertise in user-centered design, graphics, and responsiveness.
            </p>
        </div>
    )
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill name="React.js" level="🌿" color="#282c34" />
            <Skill name="HTML5" level="🌲" color="#e34c26" />
            <Skill name="CSS3" level="🌲" color="#2965f1" />
            <Skill name="SASS" level="🌿" color="#cd6799" />
            <Skill name="JavaScript ES6" level="🌲" color="#f7df1e" />
            <Skill name="MongoDB" level="🌿" color="#3fa037" />
            <Skill name="Python" level="🌲" color="#306998" />
            <Skill name="SQL" level="🌱" color="#00758f" />
            <Skill name="C++" level="🌿" color="#f34b7d" />
            <Skill name="JSON" level="🌲" color="#292929" />
            <Skill name="Bootstrap" level="🌲" color="#7952b3" />
            <Skill name="Node.js" level="🌿" color="#6ca25f" />
            <Skill name="Express.js" level="🌲" color="#303030" />
            <Skill name="JQuery" level="🌿" color="#0868ac" />
            <Skill name="Mongoose" level="🌱" color="#880000" />
            <Skill name="Git" level="🌲" color="#f64d27" />
            <Skill name="Responsive Design" level="🌲" color="#00bcd4" />
            <Skill name="REST APIs" level="🌿" color="#29b6f6" />
            <Skill name="TypeScript" level="🌿" color="#2b7489" />
            <Skill name="Next.js" level="🌱" color="#000788" />
            <Skill name="UI/UX Design" level="🌲" color="#fe5259" />
        </div>
    );
}


function Skill({ name, level, color }) {
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <p>{name} {level}</p>
        </div>
    )
}

export default App;
