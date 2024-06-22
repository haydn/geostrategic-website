import withMDX from "@next/mdx";

const mdx = withMDX();

const nextConfig = mdx({
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
});

export default nextConfig;
