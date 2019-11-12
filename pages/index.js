import Link from 'next/link';
import Navigation from '../components/Navigation'
const Home = ()=>{
    return (
      <div>
          <Navigation/>
        <h2 className="title"> NEXT.JS</h2>
        <h3 className="title"> Simplified Server-Side Rendering </h3>
        <div className="row">
          <Link href="/raweng">
            <a className="card">
              <h3>Raw Engineering</h3>
              <p>
                {" "}
                Building value at the intersection of Mobile, Web and IoT in an
                API-driven world.
              </p>
            </a>
          </Link>

          <Link href="/cse" >
            <a className="card">
              <h3>Contentstack</h3>
              <p> Finally, A Modern Content Management System</p>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
}

export default Home