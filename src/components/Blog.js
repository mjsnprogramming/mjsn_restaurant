import HeaderBlog from './Headers/HeaderBlog.js';
import '../styles/Blog.scss';
import articleImg from '../images/articleImg.png';
import calendar from '../images/calendar.png';
import comment from '../images/comment.png';
import person from '../images/person.png';
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
            </div>
            
        </div>
    )
}

export default Blog;