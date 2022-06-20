import React from 'react';
import '../design/about.css';
 
function About () {
    return <div>
        <h2>About Page</h2>
 
        <div className='mainn'>
            <div className='s-mainn'>
                <div className='sub'>
                    <p className='f'>What We Do</p>
                    <p>Our end-to-end solutions help and support you build a better tomorrow and even a better future.</p>
                </div>
                <div className='sub'>
                    <p className='f'>Customer Stories</p>
                    <p>ALMA OBSERVATORY: Solving mysteries of the universe and making discoveries through data innovation.</p>
                </div>

            </div>
            <div className='s-mainn'>
                <div className='sub'>
                    <p className='f'>Featured Trailblazers Episode</p>
                    <p>Hear all about suds, from early recipes to using AI to personalize beer to your exact tastes.</p>
                </div>
                <div className='sub'>
                    <p className='f'>Digital Inclusion</p>
                    <p>Technology is a powerful force enabling full participation in the digital economy.</p>
                </div>
            </div>

        </div>
    </div>
}
export default About;