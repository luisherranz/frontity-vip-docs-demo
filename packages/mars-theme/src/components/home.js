import React from "react";
import Link from "@frontity/components/link";
import { connect } from "frontity";

const Home = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const home = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Html2React html={home.content.rendered} />
      <ul>
        <li>
          <Link link="/how-tos/">
            <h4>How-to Guides</h4>
            <p>
              Articles found here provide descriptive steps needed to solve a
              problem or complete a task.
            </p>
          </Link>
        </li>
        <li>
          <Link link="/technical-references/">
            <h4>Technical Reference</h4>
            <p>
              The information found in this section is meant to provide
              definitions, descriptions and examples whe…
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default connect(Home);
