import { html } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string"

import Layout from "../components/Layout.js"

const Home = (props) => {
  return html`
    <${Layout} navColor="forestgreen">
      <h1 style="text-align: center;">Peko</h1>
      <p style="text-align: center;">
        Featherweight server framework for full-stack apps on <a target="_blank" href="https://deno.com/deploy">the stateless edge</a>.
      </p>

      <div style="width: 100%; display: flex; justify-content: space-around;">
        <div>
          <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" height=100 alt=GitHub />
          <p style="text-align: center"><a href="https://github.com/sebringrose/peko">REPOSITORY</a></p>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/denolib/high-res-deno-logo/master/deno_hr_circle.svg" height=100 alt=Deno />
          <p style="text-align: center"><a href="https://doc.deno.land/https://deno.land/x/peko/mod.ts">DOCS</a></p>
        </div>
      </div>

      <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
        <p style="margin:5px"><strong>Request time:</strong> ${props.request_time}</p>
        <p style="margin:5px"><strong>Hydration time:</strong> ${Date.now()}</p>
        <p style="margin:5px"><strong>Served from:</strong> ${props.DENO_REGION ? props.DENO_REGION : "localhost"}</p>
      </div>

      <h2>Features</h2>
      <ul>
        <li>Simple and familiar server, routing and middleware. Built on top of Deno's <a href="https://deno.land/std@0.165.0/http/server.ts?s=serve">std/http/server</a>.</li>
        <li>Library of request <a href="#handlers">handlers</a> and <a href="#middleware">middleware</a> for common app requirements.</li>
        <li>Cascades <a target="_blank" href="https://github.com/sebringrose/peko/blob/main/server.ts">Request Context</a> through middleware stack for efficient data flow and post-response operations.</li>
        <li>100% TypeScript complete with tests and configurable logging.</li>
      </ul>

      <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
        <div>
          <h2 id="handlers">Handlers</h2>
          <ul>
            <li><a target="_blank" href="https://github.com/sebringrose/peko/blob/main/handlers/ssr.ts">server-side render</a></li>
            <li><a target="_blank" href="https://github.com/sebringrose/peko/blob/main/handlers/static.ts">static asset</a></li>
            <li><a target="_blank" href="https://github.com/sebringrose/peko/blob/main/handlers/sse.ts">server-sent events</a></li>
          </ul>
        </div>

        <div>
          <h2 id="middleware">Middleware</h2>
          <ul>
            <li><a target="_blank" href="https://github.com/sebringrose/peko/blob/main/middleware/authenticator.ts">authenticator</a></li>
            <li><a target="_blank" href="https://github.com/sebringrose/peko/blob/main/middleware/cacher.ts">cacher</a></li>
            <li><a target="_blank" href="https://github.com/sebringrose/peko/blob/main/middleware/logger.ts">logger</a></li>
          </ul>
        </div>
      </div>
    </${Layout}>
  `
}

export default Home