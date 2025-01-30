/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  output: "export", // ✅ 정적 HTML 파일을 생성하도록 설정
  reactStrictMode: true,
  // experimental: { reactRoot: true },
  // i18n,
};

module.exports = nextConfig;
