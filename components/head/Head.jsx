import Head from 'next/head'

 function Head_1() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>Gravity</title>
            <base href="/" />
            {/* style */}
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/animate.css" />
            {/* styl */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap" rel="stylesheet" />

            {/* scripts */}
            <script src="/js/jquary.js" defer></script>
            <script src="/js/bootstrap.min.js" defer></script>
            <script src="/js/popper.min.js" defer></script>
            <script src="/js/wow.min.js"></script>
            <script src="/js/app.js"></script>
            {/* scripts */}

        </Head>
    )
}

export default Head_1;
