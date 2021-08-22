import React from "react"

import timer from "../images/timer.png"
import estimation from "../images/estimation.png"
import updates from "../images/updates.png"
import "../styles/default.css"

const HowTo = () => (
  <div style={{ padding: "50px" }}>
    <h1>Live Collab</h1>
    <p>
      Live collaborative app for sprint planning. Think of it as a Google docs,
      plus planning poker in one app. Oh! Also, there is a timer that is synced
      among your teammates!
    </p>
    <h2>Who is it for?</h2>
    <p>
      It's for your team, to collaborate live while creating or updating tasks
      with some mini-apps (widgets) to help you along the way!
    </p>
    <h2>What does it do?</h2>
    <p>
      It helps your team better collaborate together while doing sprint planning
      , review, writing user stories or having any meeting with your team while
      going over your monday.com boards by providing a set of great tools.
    </p>
    <h3>Live collaboration on updates</h3>
    <p>
      The story (item) title and updates are a collaborative text area.
      Teammates can type simultaneously, fix their typos, and highlight texts
      (think of it as a mini Google Docs).
    </p>
    <img alt="Updates" height="400px" src={updates} />
    <h3>Timer app</h3>
    <p>
      The timer keeps your story planning in check (time-wise), so your team
      won't go over time.
    </p>
    <img alt="Timer App" height="400px" src={timer} />
    <h3>Estimation app</h3>
    <p>
      This app will help your team estimate tasks (think of it as planning
      poker, but you don't need to leave the monday.com app!)
    </p>
    <img alt="Estimation App" height="400px" src={estimation} />
    <br />
  </div>
)

export default HowTo
