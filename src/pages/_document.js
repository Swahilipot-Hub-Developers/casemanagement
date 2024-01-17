/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="assets/js/darktheme.js"></script>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
        />
        {/* Plugins CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/font-awesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/tiny-slider/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/glightbox/css/glightbox.css"
        />
        {/* Theme CSS */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          async
          src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script async src="assets/vendor/tiny-slider/tiny-slider.js"></script>
        <script async src="assets/vendor/glightbox/js/glightbox.js"></script>
        <script async src="assets/js/functions.js"></script>
      </body>
    </Html>
  );
}
