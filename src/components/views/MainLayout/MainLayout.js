import React from "react";
import { render } from "enzyme";
import PageNav from '../PageNav/PageNav';

const MainLayout =()=> {
    render(
      <div>{props.children}
        <PageNav/>
      </div>
    )
}

export default MainLayout;
