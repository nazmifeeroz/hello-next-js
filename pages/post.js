import { withRouter } from "next/router";
import Layout from "../components/layout.js";

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
));
