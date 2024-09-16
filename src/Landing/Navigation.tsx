import { Link } from "react-router-dom";
export default function LandingNavigation() {
  return (
    <div id="wd-landing-navigation">
      <Link to="../Kanbas" id="wd-kanbas-link">Kanbas</Link><br/>
      <Link to="../Labs" id="wd-labs-link">Labs</Link><br/>
      <a href="https://github.com/lkz0417/kanbas-react-web-app" id="wd-home-link">Code Source</a>
    </div>
);}