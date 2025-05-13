interface Post{
    id:number
    title: string
    body:string
    tag: string[]
    reactions: {
        likes: number
        dislikes: 25
    }
    views: number
    userId: number
}
const Page = async () => {
    const getPost = await fetch("https://dummyjson.com/posts");
    const data = await getPost.json();
    const post: Post[] = data.posts
    console.log(post)
    return ( 
        <div className="">
            {post?.map((item)=>(
                <div className=""key={item?.id}>
                    <img src={item?.images} alt="" className="" />
                </div>
            ))}
        </div>
     );
}
 
export default Page;