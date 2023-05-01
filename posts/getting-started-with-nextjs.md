---
title: Getting Started with NextJs
date: '2022-10-15'
image: getting-started-nextjs.png
excerpt: "Next.js is a powerful open-source framework built on top of React, designed to create server-side rendered React applications with ease.  "
isFeatured: true
---

# Introduction to Next.js

Next.js is a React-based framework that makes it easy to build server-side rendered (SSR) applications. Here are some of its main features:

# Server-Side Rendering in Next.js

Server-side rendering (SSR) is a feature of Next.js that allows you to render React components on the server-side and send the fully-rendered HTML to the client. This can improve the performance and search engine optimization (SEO) of your application.

## How Server-Side Rendering Works

When a user requests a page from your Next.js application, the following steps occur:

1. The server receives the request and runs the appropriate Next.js route handler function.
```jsx
export async function getServerSideProps(context) {
  // fetch data from an API or database
  const data = await fetchData()

  // pass the data as props to the page component
  return {
    props: {
      data
    }
  }
}

function MyPage({ data }) {
  return (
    <div>
      <h1>My Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
```
![routing](nextjs-file-based-routing.png)
