import './Blog.css';
import { blogPost1, blogPost2, blogPost3 } from '../../assets';

export default function Blog() {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a href="#">
              <img src={blogPost3} alt="" />
            </a>
            <a href="#">
              <h3 className="post-title">
                How to use Drum Machine in Logic Pro X
              </h3>
            </a>
          </div>
          <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={blogPost2} alt="" />
            </a>
            <a href="#">
              <h3 className="post-title">
                How To Mix Guitars Effectively
              </h3>
            </a>
          </div>
          <div className="post">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={blogPost1} alt="" />
            </a>
            <a href="#">
              <h3 className="post-title">
                The Real Power of Harmonies in Music Production
              </h3>
            </a>
          </div>
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
