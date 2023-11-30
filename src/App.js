import logo from './logo.svg';
import './App.css';

const Header=({children}) => 
<header className="App-header">
  
        <img src={logo} className="App-logo" alt="logo" />
       {children}
      </header>

const ColoredH1=({children, color="yellow"}) =>
<h1 style={{color}}>{children}</h1>

const Add =({a,b})=>
<>
<code>a+b={a}+{b}={a+b}</code>
<h1>Hi</h1>

</>
const App=() =>
<>
<main>
<section><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Consequatur mollitia nulla, fugiat neque autem velit voluptate necessitatibus, 
    nisi saepe recusandae nihil omnis aperiam tenetur iusto dolore architecto exercitationem, quibusdam tempore.</p>
    <h1>Our work</h1>
    <div class="flex_container">               
        <div class="card">
            <div class="card-image im-1"></div>
            <h4>Lorem ipsun dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reiciendis ut nemo, fugiat sint repudiandae dolorum natus nobis itaque esse maiores at a mollitia.</p>
            <button>Go</button>
        </div>
        <div class="card">
            <div class="card-image im-1"></div>
            <h4>Lorem ipsun dolor sit amet.</h4>
            <p>Lorem ipsun dolor sit amet.</p>
            <button>Go</button>
        </div>
        <div class="card">
            <div class="card-image im-1"></div>
            <h4>Lorem ipsun dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetar adipisicing elit. Ipsun voluptatibus iusto blanditius voluptatem.</p>
            <button>Go</button>
        </div>
        <div class="card">
            <div class="card-image im-1"></div>
            <h4>Lorem ipsun dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil numquam quam ipsum, impedit commodi, nostrum unde ab laboriosam omnis minus necessitatibus.</p>
            <button>Go</button>
        </div>
        <div class="card">
            <div class="card-image im-1"></div>
            <h4>Lorem ipsun dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, exercitationem delectus. Sit explicabo blanditiis temporibus accusamus laboriosam impedit itaque?</p>
            <button>Go</button>
        </div>
        <div class="card">
            <div class="card-image im-1"></div>
            <h4>Lorem ipsun dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button>Go</button>
        </div>
    </div>
    <div class="holder">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
      </div>
</section>



<aside><p>Aside 1</p></aside>
<aside><p>Aside 2</p></aside>

</main>
<footer><p>Footer</p></footer>
</>
export default App;

