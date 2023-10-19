import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
// import { ImCalendar } from 'react-icons/im', BiUserCheck
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-warning text-uppercase">Latest News</h5>
                    <h1 className="mb-0">Read The Latest Articles Related To Our Services</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="img/blog-1.jpg" alt="blogImg1" />
                                <Link className="position-absolute top-0 start-0 bg-warning text-dark rounded-end mt-5 py-2 px-4" to="#">News</Link>
                            </div>
                            <div className="p-4">
                                <h4 className="mb-3">cameroon-tribune </h4>
                                <p>La lois des finances 2023</p>
                                <Link className="text-uppercase linkBlog" to="https://www.cameroon-tribune.cm/article.html/54228/fr.html/loi-de-finances-2023-ce-qui-attendu#:~:text=Cette%20mesure%2C%20qui%20est%20certes,2023%20au%2031%20d%C3%A9cembre%202024.">Read More <BiRightArrowAlt /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="img/blog-2.jpg" alt="blogImg2" />
                                <Link className="position-absolute top-0 start-0 bg-warning text-dark rounded-end mt-5 py-2 px-4" to="#">Web Design</Link>
                            </div>
                            <div className="p-4">
                                <h4 className="mb-3">Banque Mondiale</h4>
                                <p>La zone de libre-échange continental</p>
                                <Link className="text-uppercase linkBlog" to="https://www.banquemondiale.org/fr/topic/trade/publication/the-african-continental-free-trade-area">Read More <BiRightArrowAlt /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="img/blog-3.jpg" alt="blogImg3" />
                                <Link className="position-absolute top-0 start-0 bg-warning text-dark rounded-end mt-5 py-2 px-4" to="#">Web Design</Link>
                            </div>
                            <div className="p-4">
                                <h4 className="mb-3">Investir Au Cameroun</h4>
                                <p>Échanges commerciaux, Cameroun-USA </p>
                                <Link className="text-uppercase linkBlog" to="https://www.investiraucameroun.com/economie/1104-19221-echanges-commerciaux-le-cameroun-en-discussion-avec-les-etats-unis-pour-son-retour-dans-l-agoa-3-ans-apres-sa-suspension">Read More <BiRightArrowAlt /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;
