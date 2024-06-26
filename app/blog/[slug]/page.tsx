type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): any[] {
    return [];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  <p>HoleTex</p>
  <p>Welcome to HaNoi</p>
  </>;
}
