import React from "react";
import { Redirect,} from "react-router-dom";

// Layout Types
import { DefaultLayout} from "./layouts";



// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewBlog from "./views/AddNewBlog";

import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";

import BlogPosts from "./views/BlogPosts";

import BlogsApproval from "./views/BlogsApproval";
import PodcastsApproval from "./views/PodcastSApproval";
import NewsApproval from "./views/NewsApproval";
import EventsApproval from "./views/EventsApproval";
import Categories from "./views/Categories";
import NewSubCategory from "./views/NewSubCategory";
import AddNewNews from "./views/AddNewNews";
import AddNewEvent from "./views/AddNewEvent";
import Login from "./views/Login";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/new-blog",
    layout: DefaultLayout,
    component: AddNewBlog
  },
  {
    path: "/new-news",
    layout: DefaultLayout,
    component: AddNewNews
  },
  {
    path: "/new-event",
    layout: DefaultLayout,
    component: AddNewEvent
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {

    path: "/categories",
    layout: DefaultLayout,
    component: Categories 
  },
  
  {
    path: "/new-Subcategory",
    layout: DefaultLayout,
    component: NewSubCategory 
  },
  {
    path: "/Blogs-management",
    layout: DefaultLayout,
    component: BlogsApproval 
  },
  {
    path: "/Podcasts-management",
    layout: DefaultLayout,
    component: PodcastsApproval 
  },
  {
    path: "/News-management",
    layout: DefaultLayout,
    component: NewsApproval
  },
  {
    path: "/Events-management",
    layout: DefaultLayout,
    component: EventsApproval
  },

  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
 
  
];