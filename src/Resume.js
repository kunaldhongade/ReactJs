function Resume() {

    const resume = {
        name: "Kunal Dhongade",
        experience: [
            { year: 2012, company: 'xyz', role: 'smart contract Developer' },
            { year: 2015, company: 'RURU', role: 'NFT Developer' },
            { year: 2023, company: 'SUBMUX', role: 'Senior Blockchain Engineer' }],
        education: ['BCA', 'MCA'],
        skills: ['react js', 'node js', 'Solidity', "Blockchain"]
    }
    return (
        <>
            <h1>Resume Builder</h1>
            <h2>{resume.name}</h2>
            <h3>Experience</h3>
            <ul>
                <li>{resume.experience.map((experience) => {
                    return <li><p>{experience.role} at {experience.company}
                        in {experience.year}</p></li>
                })}</li>
            </ul>
            <h3>Education</h3>
            <ul>
                <li>{resume.education.map((education) => {
                    return <li>{education}</li>
                })}</li>
            </ul>
            <h3>Skills</h3>
            <ul>
                {resume.skills.map(skill => {
                    return <li>{skill}</li>
                })}
            </ul>

        </>
    )
}

export default Resume;