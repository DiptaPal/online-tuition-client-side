import React from 'react';

const Blog = () => {
    return (
        <div className="space-y-4 px-10 md:px-0 max-w-screen-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-16 mb-20">
            <h1 className='text-3xl font-bold text-center border-b-4 border-navActive pb-2 text-black mb-10 max-w-[400px] mx-auto'>All Blog is here</h1>
            <details className="group border-l-4 border-navActive bg-white shadow p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                        What is cors?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-navActive sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 text-justify leading-relaxed text-black md:text-xl">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br /> <br />

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json. <br /><br />

                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. <br />
                    <br />
                    <img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" alt="" />
                    <br /><br />
                    The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
                </p>
            </details>

            <details className="group border-l-4 border-navActive bg-white shadow p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg text-left md:text-2xl font-medium text-gray-900">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-navActive sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <div className="mt-4 leading-relaxed text-gray-900 md:text-xl">
                    <p className='text-justify'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p><br />
                    <div className='text-left'>
                        <h2 className='underline'>Benefits of Firebase:</h2>
                        <ul className='ml-6'>
                            <li className='list-disc'>Google Analytics For Firebase</li>
                            <li className='list-disc'>Authentication</li>
                            <li className='list-disc'>Realtime Database & Firestore</li>
                            <li className='list-disc'>Crashlytics</li>
                            <li className='list-disc'>Free Use of Dynamic Links</li>
                        </ul>
                    </div>
                    <p className='text-left mt-4'>LinkedIn, Toptal, Token, Cookie-Based account authentication can be implemented in Firebase</p>
                </div>
            </details>

            <details className="group border-l-4 border-navActive bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                        How does the private route work?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-navActive sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 text-justify leading-relaxed text-gray-900 md:text-xl">
                    React Router is one of the most important components of React ecosystem.
                    PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                    <img className='mt-2' src="https://i.ibb.co/xJQwQ0z/code.png" alt="" />
                </p>
            </details>
            <details className="group border-l-4 border-navActive bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                    <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                        What is Node? How does Node work?
                    </h5>

                    <span
                        className="ml-1.5 flex-shrink-0 rounded-full bg-gray-50 p-1.5 text-navActive sm:p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <div className="mt-4 text-justify leading-relaxed text-gray-900 md:text-xl">
                    <p>Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! <br /><br />

                        Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.<br /><br />

                        A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.<br /><br />

                        When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.<br /><br />

                        This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.<br /><br />

                        Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.<br /><br />

                        In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.</p>
                    <br /><br /><br />
                    <p><span className='font-bold'>Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br /><br /></p>
                    <div>
                        <p>Node.js basically works on two concept </p>
                        <ul className='pl-6'>
                            <li className='list-disc'>
                                Asynchronous
                            </li>
                            <li className='list-disc'>
                                Non-blocking I/O
                            </li>
                        </ul> <br />
                        <p>
                            <span className='font-bold'>Non-blocking I/o:</span> Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.</p>
                        <p> <br />
                            <span className='font-bold'>Asynchronous: </span> Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
                        </p>
                        <p>
                            To implement the concept of the system to handle the request  node.js uses the concept of Libuv. <br /><br />Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking. <br /><br />Libuv implements two extremely important features of node.js
                        </p><br />
                        <ul className='pl-6'>
                            <li className='list-disc'>
                                Event loop
                            </li>
                            <li className='list-disc'>
                                Thread pool
                            </li>
                        </ul>
                    </div>
                </div>
            </details>
        </div>

    );
};

export default Blog;