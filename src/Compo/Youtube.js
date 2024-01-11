import React from 'react'

function Youtube() {
    return (
        <div>

            <section id="mobile-app" class="container text-center py-5 my-3 my-md-4 my-lg-5">
                <h2 class="h1 pt-1 mb-4">See What Makes Us Different</h2>
                <hr />
                <div class="position-relative rounded-3 overflow-hidden mb-lg-3">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5"><iframe width="1296" height="600" loading="lazy" src="https://www.youtube-nocookie.com/embed/SUEq6ASwU3o?si=9NZ9O-eZCXftZDv2&amp;controls=0&amp;rel=0" title="Shipwaves Mobile App for Shippers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div>
                    
                    <img alt="Cover image" srcset="/_next/image?url=%2Fimg%2Fshipwaves%2Fvideo-cover-new2.jpg&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fimg%2Fshipwaves%2Fvideo-cover-new2.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2Fimg%2Fshipwaves%2Fvideo-cover-new2.jpg&amp;w=3840&amp;q=75" width="1296" height="600" decoding="async" data-nimg="1" loading="lazy" style={{ color: "transparent" }} />
                </div>
            </section>
        </div>
    )
}

export default Youtube