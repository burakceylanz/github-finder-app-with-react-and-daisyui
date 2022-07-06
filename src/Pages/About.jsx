import React from 'react'

function About() {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://c.tenor.com/A15H8E1VUh8AAAAC/github-cat.gif" alt="Movie" style={{width:"300px"}}/></figure>
  <div className="card-body">
    <h2 className="card-title">GitHub Finder App</h2>
    <p>A react app to search GitHub profiles and see profile deatils. This project was made by Burak Ceylan.</p>
    <div className="card-actions justify-end align-middle items-center">
    <p>This and for projects like this visit my github profile</p>
      <button className="btn btn-primary"><a href="https://github.com/burakceylanz">GitHub</a></button>
    </div>
  </div>
</div>
  )
}

export default About