import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Heading, Button } from 'rebass'

const IndexPage = () => (
  <Layout>
    <SEO title="Markdown Landing Page" />
    <Heading color={'green'} fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
    <p c={'blue'}>Write a landing page for anything.</p>
    <Button bg='highlight'>Get started NOW</Button>
  
    
  </Layout>
)

export default IndexPage
