

function About() {
    return (
        <div className="AboutDiv">
            <h3> Hi, we are Alex Newson and Dovid Edelkopf.</h3>
            <div className="PFP">
                <img src="https://ca.slack-edge.com/T02MD9XTF-U044Q6SH52R-bd6f9db47906-72" alt="Alex, in all his glory" />
                <img src="https://ca.slack-edge.com/T02MD9XTF-U03T73JKSH2-65f89cc5f57d-72" alt="Dovid, in all his finery" />
            </div>
            <h4>Home Page</h4>
            <p>On our home page, you can view our subway stations map. The page wil default to load with all of the subway stations in NYC highlighted by a marker that will give some extra info about the station when clicked. On our sidebar, you can choose a subway line to view specific information about that line.</p>
            <h4>Lines Page</h4>
            <p>On our lines page, you can choose a specific line and view what other people think and have to say about that line! feel free to share your thoughts and experiences!</p>
            <h4>About Page</h4>
            <p>On the about page, you can read all of this!</p>
        </div>
    )
}

export default About