import React from 'react';

const Faq = () => {
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 my-28 text-left text-2xl'>
            <section className="bg-white rounded-md text-black">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600 text-xl">An FAQ page can help users navigate your site.Not only does an FAQ with links to related content provide your user with a deeper experience of your website, it also boosts your internal link-building, which is an important search ranking factor.</p>
                    <div className="space-y-4">
                        <details data-aos="flip-up" className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">What is a Programming Language?</summary>
                            <p className="text-justify text-xl px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                A programming language is a computer language that is used by programmers (developers) to communicate with computers. It is a set of instructions written in any specific language ( C, C++, Java, Python) to perform a specific task. A programming language is mainly used to develop desktop applications, websites, and mobile applications. </p>
                        </details>
                        <details data-aos="flip-up" className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">What is the demand for web developers in the current market and the future?</summary>
                            <p className=" text-justify text-xl px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">With new technologies coming towards web application development, the demand is certain. Especially bootstrap, jQuery, Angular JS, HTML 5, and other powerful scripting languages makes the demand more. Until and unless it is device specific app most of the applications can be written in Responsive Web Design or Hybrid mobile app. One has to be very strong in the basic concepts and the deep knowledge in the scripting languages to make powerful web appilcations.</p>
                        </details>
                        <details data-aos="flip-up" className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">What is the impact of dedication on work</summary>
                            <p className=" text-justify text-xl px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Job dedication allows you to be more likely to gain success, promotions, and the ability to work with difficult people. These life skills are beneficial for you to enjoy your job and be able to reach your highest potential.</p>
                        </details>
                        <details data-aos="flip-up" className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">What is the importance of cyber security awareness?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-lg text-justify">Cybersecurity awareness is an ongoing process of educating and training employees about the threats that lurk in cyberspace, how to prevent such threats and what they must do in the event of a security incident. It also helps to inculcate in them a sense of proactive responsibility for keeping the company and its assets safe and secure. In simple terms, cybersecurity awareness is knowing what security threats are and acting responsibly to avoid potential risks. Despite having best-in-class defense systems and measures in place, many organizations still experience security breaches. Unfortunately, it is often human error that has been a major contributing factor behind many data breaches. According to Verizon’s 2022 Data Breach Investigations Report, more than 80% of breaches involved the human element, including social engineering attacks, errors and misuse of stolen credentials. Threat actors look to exploit this weakness to infiltrate an organization’s networks and systems. This is where cybersecurity awareness comes in. Cybersecurity awareness helps educate your employees about malicious methods used by cybercriminals, how they can be easy targets, how to spot potential threats and what they can do to avoid falling victim to these insidious threats. It empowers your workforce with the right knowledge and resources to identify and flag potential threats before they cause any damage. Ignoring or not conducting cybersecurity awareness training regularly can have serious consequences on your business such as legal penalties, financial loss and cost of remediation, loss of intellectual property, damaged company reputation, loss of customer trust and so on. After all, your company’s cybersecurity strategy is only as strong as your weakest link — your employees.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;