/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true
  // 빌드 시 NODE_MODULES 중 꼭 필요한 파일만 모음
  output: 'standalone'
};

export default nextConfig;
