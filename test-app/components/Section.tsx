import React from 'react';

import Image from 'next/dist/client/image';

const Section = () => (
    <section className="max-w-4xl text-center container mx-auto py-10">
        <Image src="/apple-xmas-logo.png" width="70px" height="88px" alt="Christmas Apple Logo"></Image>
        <h2 className="mt-5 mb-2 text-5xl font-semibold text-gray-800">Let the holidays be for everyone.</h2>
        <a href="#" className="text-blue-500"><span className="hover:underline text-xl text-blue-500">Shop gifts</span> &#8594;</a>
    </section>
);

export default Section;