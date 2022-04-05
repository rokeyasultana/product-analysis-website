import React from 'react';
import'./Blogs.css';

const Blogs = () => {
    return (
        <div className='blog'>
            <div>
                <h1>What is context api?</h1>
                <p>The react context api is a way for a react app to effectively produce global variables that can be passed around. It’s another name is ‘’prop-drilling’’. It returns a consumer and a provider. Provider is a element that as it's names suggests provides the state to its children. It'll hold the" store"and be the parent of all the factors that might need that store.</p>
            </div>
            <div>
                <h1>What is semantic tag?</h1>
                <p>Semantic tags are those that explain their meaning in a human and machine<br></br> readable way. Using semantic tag to create websites are much easier to read. It gives best experience to reader. It gives best experience to reader. It gives you a lot of hook to styling your website or content.</p>
            </div>
        </div>
    );
};

export default Blogs;