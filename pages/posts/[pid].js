import Image from "next/image";
import PageTitle from "../../components/page-title";

const Post = ({ postData }) => {
  console.log("postData", postData);
  return (
    <div style={{height:'100vh'}}>
    <PageTitle title="post" />
    <div className="d-flex justify-content-center mt-4">
      <div className="card col-5">
        <Image
          src={"/images/posts/" + postData.id + ".jpg"}
          alt="Picture of the author"
          width={800}
          height={500}
          className="card-img-top"
          alt="post image not found"
        />
        <div className="card-body">
          <h5 className="card-title">{postData.title}</h5>
          <p className="card-text">{postData.body}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Post;

export async function getServerSideProps({ query }) {
  const { pid } = query;
  console.log("pid", pid);
  const res = await fetch(process.env.ALL_POSTS+"/"+pid);
  const postData = await res.json();
  return {
    props: { postData },
  };
}
