import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="PC2 Cleared!" />
    <h1>On we go to PC3 and the unknown.</h1>
    <p>Our future evolution
    <StaticImage
      src="../images/robo-evolution.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="robo-evolution"
      style={{ marginBottom: `1.45rem` }}
    />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
