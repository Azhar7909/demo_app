import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "../../components/page-title";
import Utils from "../../components/common/utils";

const utils = new Utils();

export default function postssPage({ posts }) {
  useEffect(() => {
    const isLogin = utils.readCookie("isLogin");
    if (!isLogin) {
      window.location.href = "/auth";
    }
  }, []);
  return (
    <div>
      <PageTitle title="All posts" />
      <h1 className="text-center mt-5">All posts</h1>
      <div className="row justify-content-center">
        {posts.map((posts, ind) => {
          return (
            <div className="card col-3 m-3 p-0">
              <Image
                src={"/images/posts/" + posts.id + ".jpg"}
                alt="Picture of the author"
                width={800}
                height={500}
                className="card-img-top"
                alt="Post image not found"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/posts/[pid]" as={"/posts/" + posts.id}>
                    {posts.title}
                  </Link>
                </h5>
                <p className="card-text">{posts.body}</p>
                <Link href="/posts/[pid]" as={"/posts/" + posts.id}>
                  <button type="button" className="btn btn-dark">
                    Click To view post ➧
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.ALL_POSTS);
  const posts = await res.json();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
