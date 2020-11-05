import React from "react"

import liveCollabLogo from "../images/live_collab_logo.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"
import { Link } from "gatsby"

const Content = () => (
  <div
    style={{
      textAlign: "center",
      height: "calc(100vh - 98px)",
      paddingTop: "5vw",
      paddingRight: "1rem",
      paddingLeft: "1rem",
    }}
  >
    <SectionHeader title="Apps" description="Applications you can use today!" />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 440px))",
        marginTop: "10vw",
      }}
    >
      <div>
        <img
          style={{
            borderRadius: "50%",
            width: "180px",
            border: "3px solid #EEEEEE",
            padding: "30px",
          }}
          src={liveCollabLogo}
          alt="live collab application logo"
        />
      </div>
      <div style={{ textAlign: "left" }}>
        <h3>Live Collab</h3>
        <p style={{ color: COLORS.gray }}>
          Live collaborative app for sprint planning on monday. Think of it as a
          Google docs, plus planning poker in one app. Oh! Also, there is a
          timer that is synced among your teammates!
        </p>
        <Link to="/live-collab">Read more...</Link>

        <p style={{marginTop: 20}}>
          <a href="https://auth.monday.com/oauth2/authorize?client_id=4ec64528e2a4f5b6284d1011f6417f74&response_type=install">
            <img
              alt="Add to monday.com"
              height="42"
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
            />
          </a>
        </p>
      </div>
    </content>
  </div>
)

export default Content
