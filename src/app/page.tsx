import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrl = [
  "https://utfs.io/f/cZGY1sqrdYjWBntr1xhFLkpdRIwEK8UHbN2nox9PX1WgzGQu",
  "https://utfs.io/f/cZGY1sqrdYjWrDX2R6ItD2cIQM1jgdbSmaOrZzY6GPevUELN",
  "https://utfs.io/f/cZGY1sqrdYjWPqiHjRUu576R4fiDlMJTOaQEcbSZCojmzIG3",
  "https://utfs.io/f/cZGY1sqrdYjWZjUt2D8gYPrmadERinx9tWeJGs0TL7Ay4N6I",
];

const mockImages = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      {posts.map((post) => post.name)}
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className={"w-48"}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
