import HeaderBlog from './Headers/HeaderBlog.js';
import '../styles/Blog.scss';
import articleImg from '../images/articleImg.png';
import calendar from '../images/calendar.png';
import comment from '../images/comment.png';
import person from '../images/person.png';
import FooterBlog from '../components/Footers/FooterBlog.js';
function Blog() {
    return (
        <div className = "Blog">
            <HeaderBlog/>    
            <div id = "headerContactImg">
                <span>Blog</span>
            </div>
            <div className = "articles">
                <img src = {articleImg}></img>
                <img src = {calendar}></img>
                <span>21 Jun 2022</span>
                <img src = {comment}></img>
                <span>5</span>
                <img src = {person}></img>
                <span>Michal Majewski</span>

                <p>This book is a treatise on the theory of ethics</p>

                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta<br></br>
                test. Override the digital divide with additional clickthroughs from DevOps<br></br>
                Nanotechnology immersion along the information highway will close the loop on<br></br>
                focusing solely on the bottom line.</p>

                <span>Continue Reading</span>
            </div>
            <div className = "articles">
                <img src = {articleImg}></img>
                <img src = {calendar}></img>
                <span>21 Jun 2022</span>
                <img src = {comment}></img>
                <span>5</span>
                <img src = {person}></img>
                <span>Michal Majewski</span>

                <p>This book is a treatise on the theory of ethics</p>

                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta<br></br>
                test. Override the digital divide with additional clickthroughs from DevOps<br></br>
                Nanotechnology immersion along the information highway will close the loop on<br></br>
                focusing solely on the bottom line.</p>

                <span>Continue Reading</span>
            </div>
            <div className = "articles">
                <img src = {articleImg}></img>
                <img src = {calendar}></img>
                <span>21 Jun 2022</span>
                <img src = {comment}></img>
                <span>5</span>
                <img src = {person}></img>
                <span>Michal Majewski</span>

                <p>This book is a treatise on the theory of ethics</p>

                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta<br></br>
                test. Override the digital divide with additional clickthroughs from DevOps<br></br>
                Nanotechnology immersion along the information highway will close the loop on<br></br>
                focusing solely on the bottom line.</p>

                <span>Continue Reading</span>
            </div>
            <div className = "articles">
                <img src = {articleImg}></img>
                <img src = {calendar}></img>
                <span>21 Jun 2022</span>
                <img src = {comment}></img>
                <span>5</span>
                <img src = {person}></img>
                <span>Michal Majewski</span>

                <p>This book is a treatise on the theory of ethics</p>

                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta<br></br>
                test. Override the digital divide with additional clickthroughs from DevOps<br></br>
                Nanotechnology immersion along the information highway will close the loop on<br></br>
                focusing solely on the bottom line.</p>

                <span>Continue Reading</span>
            </div>
            <div className = "articles">
                <img src = {articleImg}></img>
                <img src = {calendar}></img>
                <span>21 Jun 2022</span>
                <img src = {comment}></img>
                <span>5</span>
                <img src = {person}></img>
                <span>Michal Majewski</span>

                <p>This book is a treatise on the theory of ethics</p>

                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta<br></br>
                test. Override the digital divide with additional clickthroughs from DevOps<br></br>
                Nanotechnology immersion along the information highway will close the loop on<br></br>
                focusing solely on the bottom line.</p>

                <span>Continue Reading</span>
            </div>
            <div id = "categories">
            <div id = "food">
                <input type = "text" id = "search" placeholder = "Search here"></input>
                <span id = "categoriesSpan">Categories</span>
                <button id = "burger" className = "categories">
                    <span>Burger</span>
                    <span>(7)</span>
                </button>
                <button id = "chicken" className = "categories">
                    <span>Chicken</span>
                    <span>(9)</span>
                </button>
                <button id = "drinks" className = "categories">
                    <span>Drinks</span>
                    <span>(3)</span>
                </button>
                <button id = "fries" className = "categories">
                    <span>Fries</span>
                    <span>(8)</span>
                </button>
                <button id = "sandwich" className = "categories">
                    <span>Sandwich</span>
                    <span>(3)</span>
                </button>
                <button id = "pizzaCat" className = "categories">
                    <span>Pizza</span>
                    <span>(5)</span>
                </button>
                </div>
                <div id = "archive">
                <span id = "archiveSpan">Archive</span>
                <button id = "august" className = "categories">
                    <span>August 2022</span>
                    <span>(6)</span>
                </button>
                <button id = "july" className = "categories">
                    <span>July 2022</span>
                    <span>(1)</span>
                </button>
                <button id = "june" className = "categories">
                    <span>June 2022</span>
                    <span>(2)</span>
                </button>
                </div>
            </div>
            <FooterBlog/>
        </div>
        
    )
}

export default Blog;