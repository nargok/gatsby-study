import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const WorkPage = () => (
  <layout>
    <SEO title="About" />
    <h1>This is work page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage;
